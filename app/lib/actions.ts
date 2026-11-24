// app/lib/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import {
  createProjectRecord,
  updateProjectRecord,
  deleteProjectRecord,
} from '@/public/projects-db';

async function requireOwnerSession() {
  const session = await auth();
  if (!session?.user) {
    throw new Error('Not authenticated');
  }
  return session;
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid username or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const ProjectFormSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  technologies: z.string().min(2),
  type: z.string().min(1),
  link: z.string().optional(),
});

export async function createProject(formData: FormData) {
  await requireOwnerSession();

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

  revalidatePath('/dashboard/projects');
  revalidatePath('/projects');
  redirect('/dashboard/projects');
}

export async function updateProject(id: string, formData: FormData) {
  await requireOwnerSession();

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

  revalidatePath('/dashboard/projects');
  revalidatePath('/projects');
  redirect('/dashboard/projects');
}

export async function deleteProject(id: string) {
  await requireOwnerSession();

  await deleteProjectRecord(Number(id));

  revalidatePath('/dashboard/projects');
  revalidatePath('/projects');
}