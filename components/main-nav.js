'use client';

import { siteConfig } from '@/site.config';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';

export function MainNav() {
  const navLinks = siteConfig.navLinks;
  const pathname = usePathname();

  return (
    <div className="flex gap-8">
      <Link
        href="/"
        className="flex items-center space-x-3 transition duration-150 hover:opacity-70"
      >
        <img src="/logo-dark.png" width={32} height={32} />
        <b className="inline-block text-xl">HDFC BANK</b>
      </Link>
      <nav className="hidden items-center space-x-6 text-sm font-medium lg:flex">
        {navLinks?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {item.title}
              </Link>
            )
        )}
      </nav>
    </div>
  );
}
