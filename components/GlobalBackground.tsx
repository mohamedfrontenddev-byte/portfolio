export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 w-40 h-40 sm:w-72 sm:h-72 sm:left-10 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-4 w-48 h-48 sm:w-96 sm:h-96 sm:right-10 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-gradient-to-r from-primary-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern — mobile gets a coarser grid (40px) so the
          background doesn't feel busy on small screens. */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
    </div>
  );
}
