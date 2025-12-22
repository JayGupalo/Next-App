import Link from "next/link";

export default function DashBoardLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className=" h-screen grid grid-cols-[240px_1fr]">
      <nav className="border-r">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link
              className="flex items-center gap-2 font-semibold"
              href="/dashboard"
            >
              <span className="">Dashboard</span>
            </Link>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-200 transition-all hover:text-blue-100 dark:text-blue-400 dark:hover:text-blue-1"
                  href="/dashboard/summaries"
                >
                  Summaries
                </Link>

                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-200 transition-all hover:text-blue-100 dark:text-blue-400 dark:hover:text-blue-1"
                  href="/dashboard/account"
                >
                  Account
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
