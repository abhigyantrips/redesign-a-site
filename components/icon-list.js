import { siteConfig } from '@/site.config';
import * as Lucide from 'lucide-react';

import Link from 'next/link';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';

export default function IconList() {
  return (
    <nav className="flex items-center space-x-1">
      <Link href="/" target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Lucide.HelpCircle className="h-5 w-5" />
          <span className="sr-only">Support</span>
        </div>
      </Link>

      <Link href="/" target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Lucide.LocateIcon className="h-5 w-5" />
          <span className="sr-only">Locate Us</span>
        </div>
      </Link>
    </nav>
  );
}
