"use client";

import {SessionProvider} from 'next-auth/react';
import {ReactNode} from 'react'

export interface SessionProps {
    children: ReactNode
}

export const Session = ({children}: SessionProps) => {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Session