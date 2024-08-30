"use client"

import {HTMLAttributes, ReactNode} from "react";
import RightSidebar from "../right-sidebar/RightSidebar";
import {RightSidebarProvider} from "../right-sidebar";

export interface MainProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode
}

export const Main = ({children, ...rest}: MainProps) => {
    return (
        <RightSidebarProvider>

            <main className="flex-grow flex" {...rest}>
                <div className="flex flex-grow">
                    {children}

                </div>
                <RightSidebar/>

            </main>
        </RightSidebarProvider>

    )
}

export default Main;