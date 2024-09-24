'use client';

import { HTMLAttributes, ReactNode, useContext } from 'react';
import RightSidebar from '../right-sidebar/RightSidebar';
import { RightSidebarProvider } from '../right-sidebar';
import { Drawer, DrawerContext } from '../drawer';
import Link from 'next/link';

export interface MainProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export const Main = ({ children, ...rest }: MainProps) => {
  const { isOpen } = useContext(DrawerContext);

  return (
    <RightSidebarProvider>
      <main className="flex-grow flex" {...rest}>
        <Drawer isOpen={isOpen}>
          <ul>
            <li>
              <Link href="/bizz-lines/inventory-supply-chain/scm/profile">
                profile
              </Link>
            </li>
            <li>
              <Link href="/bizz-lines/inventory-supply-chain/scm/products">
                products
              </Link>
            </li>
          </ul>
        </Drawer>
        <div className="flex flex-grow">{children}</div>
        <RightSidebar />
      </main>
    </RightSidebarProvider>
  );
};

export default Main;
