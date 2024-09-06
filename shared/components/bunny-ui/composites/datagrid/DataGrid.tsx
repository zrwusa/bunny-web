"use client";

import React, {useContext, useState} from 'react';
import styles from "./DataGrid.module.css";
import {RightSidebarContext} from "../../../../../app/bizz-lines/inventory-supply-chain/scm/components/right-sidebar";
import Image from "next/image";
import {Product} from "../../../../../app/bizz-lines/inventory-supply-chain/scm/types";

const DataGrid = (props: { data?: Product[] }) => {
    const [products] = useState(props.data || [
        {
            "id": "5f684086-5d21-4e14-b92d-3cd22c3a64d8",
            "create_at": "2024-09-04T14:31:28.487Z",
            "update_at": "2024-09-04T14:31:28.487Z",
            "title": "Canon EOS 1500D DSLR Camera with 18-55mm Lens",
            "description": "Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.",
            "price": "168.98",
            "image": "https://i.imgur.com/QlRphfQ.jpg"
        },
        {
            "id": "5f684086-5d21-4e14-b92d-3cd22c3a64d8",
            "create_at": "2024-09-04T14:31:28.487Z",
            "update_at": "2024-09-04T14:31:28.487Z",
            "title": "Canon EOS 1500D DSLR Camera with 18-55mm Lens",
            "description": "Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.",
            "price": "168.98",
            "image": "https://i.imgur.com/QlRphfQ.jpg"
        },
        {
            "id": "5f684086-5d21-4e14-b92d-3cd22c3a64d8",
            "create_at": "2024-09-04T14:31:28.487Z",
            "update_at": "2024-09-04T14:31:28.487Z",
            "title": "Canon EOS 1500D DSLR Camera with 18-55mm Lens",
            "description": "Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.",
            "price": "168.98",
            "image": "https://i.imgur.com/QlRphfQ.jpg"
        },

    ]);

    const {setConfig, setSchema, setEvents} = useContext(RightSidebarContext);

    const handleOpenRightSidebar = () => {
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
                <th>Description</th>
                <th>Price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                products.map(({id, title, description, image, price}) => <tr key={id}>
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
                                <span className="font-bold block">{title}</span>
                                <span className="text-sm block opacity-50">{price}</span>
                            </div>
                        </div>
                    </td>


                    <td>
                        {description}
                    </td>


                    <td>{price}</td>
                    <th>
                        <button className="btn btn-ghost btn-xs" onClick={() => handleOpenRightSidebar()}>details
                        </button>
                    </th>
                </tr>)
            }


            </tbody>
        </table>
    )
}

export default DataGrid;