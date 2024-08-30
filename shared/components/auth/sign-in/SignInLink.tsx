"use client";

import {usePathname, useRouter} from 'next/navigation';
import React, {ButtonHTMLAttributes} from "react";

export interface SignInLink extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    isStoreRedirectPath?: boolean;
    navTo?: string
}

export const SignInLink = ({
                               onClick,
                               children,
                               isStoreRedirectPath = true,
                               navTo = '/auth/sign-in',
                               ...rest
                           }: SignInLink) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavToSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (isStoreRedirectPath) sessionStorage.setItem('REDIRECT_PATH', pathname);
        router.push(navTo);
        if (onClick) onClick(e);

    }

    return <button onClick={handleNavToSignIn} {...rest}>{children}</button>
}