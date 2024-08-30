import React from "react";
import {getServerSession} from "next-auth";
import authConf from "../../../../../../config/auth";
import {SignOutWithProviders} from "../../../../../../shared/components/auth/sign-out";
import {Sidebar} from "../sidebar";
import {SignInLink} from "../../../../../../shared/components/auth/sign-in";
import Image from "next/image";


export const Header = async () => {

    const session = await getServerSession(authConf);


    return <div className="navbar bg-base-100">
        <div className="flex-1 content-start">
            <Sidebar></Sidebar>

            <a className="btn btn-ghost text-xl">Bunny SCM</a>
        </div>
        <div className="flex-none gap-2">
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
            </div>
            {session ?
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {session.user ?
                                <Image
                                    alt="User avator"
                                    src={session.user.image || ''}
                                    width={100}
                                    height={100}
                                /> :
                                <Image alt="User avator"
                                     src=""
                                       width={100}
                                       height={100}
                                />
                            }
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">Profile</a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><SignOutWithProviders/></li>

                    </ul>
                </div>
                : <SignInLink>Sign in</SignInLink>
            }

        </div>
    </div>
}