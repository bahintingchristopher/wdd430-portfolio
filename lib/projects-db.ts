// lib/projects-db.ts
import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

const ITEMS_PER_PAGE = 6;
const MAX_QUERY_LENGTH = 100;

function sanitizeSearchQuery(query: string): string {
  return query.trim().slice(0, MAX_QUERY_LENGTH);
}

function sanitizePage(page: number): number {
  if (!Number.isFinite(page) || page < 1) {
    return 1;
  }
  return Math.floor(page);
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
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

export async function fetchFilteredProjects(query: string, currentPage: number): Promise<Project[]> {
  const safeQuery = sanitizeSearchQuery(query);
  const safePage = sanitizePage(currentPage);
  const offset = (safePage - 1) * ITEMS_PER_PAGE;
  const search = `%${safeQuery}%`;
  const { rows } = await sql<Project>`
    SELECT * FROM projects
    WHERE title ILIKE ${search}
       OR description ILIKE ${search}
       OR EXISTS (
         SELECT 1 FROM unnest(technologies) AS tech
         WHERE tech ILIKE ${search}
       )
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;
  return rows;
}

export async function fetchProjectsPages(query: string): Promise<number> {
  const safeQuery = sanitizeSearchQuery(query);
  const search = `%${safeQuery}%`;
  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) FROM projects
    WHERE title ILIKE ${search}
       OR description ILIKE ${search}
       OR EXISTS (
         SELECT 1 FROM unnest(technologies) AS tech
         WHERE tech ILIKE ${search}
       )
  `;
  return Math.ceil(Number(rows[0]?.count ?? 0) / ITEMS_PER_PAGE);
}