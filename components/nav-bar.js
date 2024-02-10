import * as React from 'react';

import IconList from './icon-list';
import { MainNav } from './main-nav';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between space-x-4">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden lg:block">
            <IconList />
          </div>
        </div>
      </div>
    </header>
  );
}
