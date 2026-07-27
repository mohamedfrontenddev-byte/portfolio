import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-mobile min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg px-6">
      <div className="text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">404</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 break-words">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 px-5 py-3 text-white font-medium w-full sm:w-auto">
          Go back home
        </Link>
      </div>
    </main>
  );
}
