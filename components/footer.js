import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="top-0 z-50 flex w-full flex-col items-center justify-between border-t bg-background/95 p-3 lg:flex-row lg:gap-4 lg:p-5">
      <div className="py-3 text-2xl font-bold lg:px-4 lg:py-0">HDFC Bank</div>

      <div className="flex items-center pb-3 lg:px-4 lg:pb-0">
        <h2>
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            I don't get paid enough for this.
          </Link>
        </h2>
      </div>
    </footer>
  );
}
