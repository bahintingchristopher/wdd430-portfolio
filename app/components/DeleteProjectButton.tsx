'use client';

import { useEffect, useRef, useState } from 'react';
import { deleteProject } from '@/app/lib/actions';

export default function DeleteProjectButton({
  projectId,
}: {
  projectId: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const deleteProjectWithId = deleteProject.bind(null, String(projectId));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-red-600 hover:underline"
      >
        Delete
      </button>
      {isOpen && (
        <dialog
          ref={dialogRef}
          aria-labelledby="delete-project-title"
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 m-auto w-full max-w-md rounded-xl border-0 bg-white p-6 text-center shadow-xl backdrop:bg-black/50"
        >
          <h2
            id="delete-project-title"
            className="text-xl font-bold text-slate-900"
          >
            Delete this project?
          </h2>
          <p className="mt-2 text-slate-600">
            This action cannot be undone.
          </p>
          <form
            action={deleteProjectWithId}
            className="mt-6 flex justify-center gap-3"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
            >
              Delete Project
            </button>
          </form>
        </dialog>
      )}
    </>
  );
}
