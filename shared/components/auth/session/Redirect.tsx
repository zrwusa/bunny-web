"use client"

import {ReactNode, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export interface RedirectProps {
    children: ReactNode
}

export const Redirect = ({children}: RedirectProps) => {

    const {status} = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === 'authenticated') {
            const redirectPath = sessionStorage.getItem('REDIRECT_PATH');
            if (redirectPath) {
                router.push(redirectPath);
                sessionStorage.removeItem('REDIRECT_PATH');
            }
        }
        // Including router is necessary because router.push is called within the useEffect.
        // If router changes, the hook needs to re-run to ensure the redirection logic is applied with the updated router instance.
        // However, in practice, router is unlikely to change, so its inclusion is more of a precaution.
    }, [status, router]);
    return <>{children}</>
}

export default Redirect;