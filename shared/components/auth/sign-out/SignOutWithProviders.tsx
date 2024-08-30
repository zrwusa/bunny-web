"use client";

import {signOut} from "next-auth/react";
import {ButtonHTMLAttributes, MouseEventHandler, ReactNode} from "react";

export interface SignOutWithProvidersProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

export const SignOutWithProviders = ({
                                         className = 'btn',
                                         children = 'Log out',
                                         onClick,
                                         ...rest
                                     }: SignOutWithProvidersProps) => {

    const handleSignOut: MouseEventHandler<HTMLButtonElement> = async (e) => {
        await signOut();
        if (onClick) onClick(e);
    }

    return <button className={className} onClick={handleSignOut} {...rest}>{children}</button>
}