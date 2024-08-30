"use client";

import React, {useContext, useState} from 'react';
import styles from "./Grid.module.css";
import {RightSidebarContext} from "../right-sidebar";
import Image from "next/image";

export type GridDataRow = {
    id: number,
    name: string,
    country: string,
    vendor?: {
        company: string,
        location: string,
    },
    color: string,
    image: string,
}

const Grid = (props: { data?: GridDataRow[] }) => {
    const [products] = useState(props.data || [
        {
            id: 1,
            name: "Hart Hagerty",
            country: "United States",
            vendor: {
                company: "Zemlak, Daniel and Leannon",
                location: "Desktop Support Technician",
            },
            color: "Purple",
            image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        },
        {
            id: 2,
            name: "Brice Swyre",
            country: "China",
            vendor: {
                company: "Carroll Group",
                location: "Tax Accountant",
            },
            color: "Red",
            image: "https://img.daisyui.com/images/profile/demo/3@94.webp",
        },
        {
            id: 3,
            name: "Marjy Ferencz",
            country: "Russia",
            vendor: {
                company: "Rowe-Schoen",
                location: "Office Assistant I",
            },
            color: "Crimson",
            image: "https://img.daisyui.com/images/profile/demo/4@94.webp",
        },

    ]);

    const {setConfig, setSchema, setEvents} = useContext(RightSidebarContext);

    const handleOpenRightSidebar = ({}: GridDataRow) => {
        setConfig({isOpen: true});

        setEvents({
            onOK: (pairs) => {
                console.log('--- onOK pairs', pairs);
            },
            onCancel: () => {
                console.log('--- onCancel')
            }
        });
        setSchema({
            id: {
                placeholder: '1'
            },
            name: {
                placeholder: 'Pablo Rios',
                onValueChanged: (newName) => {
                    console.log('---xxx', newName);
                }
            }
        });
    }
    return (
        <table className="table">
            <thead>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <th>Name</th>
                <th>Vendor</th>
                <th>Color</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                products.map(({id, name, vendor, image, country, color}) => <tr key={id}>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox"/>
                        </label>
                    </th>
                    <td>
                        <div className={styles.tableRow}>
                            <div className="image">
                                <div className="mask mask-squircle h-12 w-12">
                                    <Image
                                        src={image}
                                        width={100}
                                        height={100}
                                        alt="Avatar Tailwind CSS Component"
                                    />
                                </div>
                            </div>
                            <div>
                                <span className="font-bold block">{name}</span>
                                <span className="text-sm block opacity-50">{country}</span>
                            </div>
                        </div>
                    </td>
                    {vendor ? <td>
                            {vendor.company}
                            <br/>
                            <span className="badge badge-ghost badge-sm">
                    {vendor.location}
                  </span>
                        </td> :
                        null}

                    <td>{color}</td>
                    <th>
                        <button className="btn btn-ghost btn-xs" onClick={() => handleOpenRightSidebar({
                            id,
                            name,
                            vendor,
                            image,
                            country,
                            color
                        })}>details
                        </button>
                    </th>
                </tr>)
            }


            </tbody>
        </table>
    )
}

export default Grid