import { getProjectById } from '@/lib/projects-db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId < 1) {
    return Response.json({ error: 'Invalid project id' }, { status: 400 });
  }

  const project = getProjectById(projectId);

  if (!project) {
    return Response.json({ error: 'Project not found' }, { status: 404 });
  }

  return Response.json(project);
}
