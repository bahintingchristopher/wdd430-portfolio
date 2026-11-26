import { sql } from '@vercel/postgres';

export interface AuthUser {
  id: string;
  username: string;
  name: string | null;
  passwordHash: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export interface ProjectInput {
  title: string;
  description: string;
  technologies: string;
  type: string;
  link?: string;
}

function parseTechnologies(value: string): string[] {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function getUserByUsername(username: string): Promise<AuthUser | null> {
  const { rows } = await sql<AuthUser>`
    SELECT id::text AS id, username, name, password_hash AS "passwordHash"
    FROM users
    WHERE username = ${username}
    LIMIT 1
  `;

  return rows[0] ?? null;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  if (!Number.isInteger(id) || id < 1) {
    return null;
  }

  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

export async function createProjectRecord(data: ProjectInput) {
  const technologies = parseTechnologies(data.technologies);
  const link = data.link || null;
  await sql`
    INSERT INTO projects (title, description, technologies, type, link)
    VALUES (${data.title}, ${data.description}, ${technologies as unknown as string}, ${data.type}, ${link})
  `;
}

export async function updateProjectRecord(id: number, data: ProjectInput) {
  const technologies = parseTechnologies(data.technologies);
  const link = data.link || null;
  await sql`
    UPDATE projects
    SET title = ${data.title},
        description = ${data.description},
        technologies = ${technologies as unknown as string},
        type = ${data.type},
        link = ${link}
    WHERE id = ${id}
  `;
}

export async function deleteProjectRecord(id: number) {
  await sql`DELETE FROM projects WHERE id = ${id}`;
}
