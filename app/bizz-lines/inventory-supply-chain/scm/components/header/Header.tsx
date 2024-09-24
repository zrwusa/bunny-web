import React from 'react';
import { getServerSession } from 'next-auth';
import authConf from '../../../../../../config/auth';
import { SignOutWithProviders } from '../../../../../../shared/components/auth/sign-out';
import { SignInLink } from '../../../../../../shared/components/auth/sign-in';
import { MenuButton } from './MenuButton';
import Avatar from '../../../../../../shared/components/bunny-ui/basics/avatar/Avatar';
import Link from 'next/link';
import { Button, Input } from '../../../../../../shared/components/bunny-ui';
import { ThemeChanger } from '../../../../../../shared/components/theme';
import { Search } from './Search';

export const Header = async () => {
  const session = await getServerSession(authConf);

  return (
    <div className="flex justify-between gap-2">
      <div className="flex-1 content-start">
        <MenuButton />
        <a className="btn btn-ghost text-xl">Bunny SCM</a>
      </div>
      <div className="flex">
        <Search></Search>
        <div className="form-control">
          <Input></Input>
          <Button variant="accent">Button</Button>
        </div>
        <ThemeChanger></ThemeChanger>
        {session ? (
          <>
            {session.user ? (
              <Avatar src={session.user.image} alt="user image">
                <ul>
                  <li>
                    <Link href="/bizz-lines/inventory-supply-chain/scm/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/bizz-lines/inventory-supply-chain/scm/settings">
                      settings
                    </Link>
                  </li>
                  <li>
                    <SignOutWithProviders />
                  </li>
                </ul>
              </Avatar>
            ) : null}
          </>
        ) : (
          <SignInLink>Sign in</SignInLink>
        )}
      </div>
    </div>
  );
};
