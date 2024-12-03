import Link from 'next/link';

export default function Dashboard() {
  return (
    <Link href="/quiz">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Quiz
      </button>
    </Link>
  );
}
