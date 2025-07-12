import { neon } from '@neondatabase/serverless';

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    // Connect to the Neon database
    const sql = neon(process.env.DATABASE_URL!);
    const comment = formData.get('comment');
    if (!comment || typeof comment !== 'string' || !comment.trim()) {
      throw new Error('Comment is required.');
    }
    // Insert the comment from the form into the Postgres database
    await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
  }

  return (
    <form action={create} className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <input
        type="text"
        placeholder="Write a comment"
        name="comment"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}