'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createProjectRecord, updateProjectRecord, deleteProjectRecord } from '@/lib/projects-db';

const ProjectFormSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  technologies: z.string().min(2),
  type: z.string().min(1),
  link: z.string().optional(),
});

export async function createProject(formData: FormData) {
  const raw = {
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    type: formData.get('type'),
    link: formData.get('link') ?? '',
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error('Invalid project input.');
  }

  await createProjectRecord(parsed.data);

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: string, formData: FormData) {
  const raw = {
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    type: formData.get('type'),
    link: formData.get('link') ?? '',
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error('Invalid project input.');
  }

  await updateProjectRecord(Number(id), parsed.data);

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(id: string) {
  await deleteProjectRecord(Number(id));
  revalidatePath('/projects');
}
