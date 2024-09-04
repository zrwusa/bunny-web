"use client"

import {ChangeEvent, MouseEventHandler, useContext, useState} from "react";
import styles from "./RightSidebar.module.css";
import {OkPairs, RightSidebarContext} from "./RightSidebarContext";
import {Drawer} from "../drawer";

export const RightSidebar = () => {
    const {schema, config, setConfig, events} = useContext(RightSidebarContext);

    const [fields, setFields] = useState<OkPairs>({});
    const handleFieldChange = (e: ChangeEvent<HTMLInputElement>, field?: string | number) => {
        if (field !== undefined) {
            setFields(prev => ({
                ...prev,
                [field.toString()]: e.target.value
            }));

            if (schema) {
                const callback = schema[field].onValueChanged;
                if (callback) {
                    callback(e.target.value);
                }
            }
        }
    }
    const handleCancel: MouseEventHandler<HTMLButtonElement> = () => {
        setConfig({isOpen: false});
        if (events?.onCancel) events.onCancel();
    }

    const handleOk: MouseEventHandler<HTMLButtonElement> = () => {
        setConfig({isOpen: false});
        if (events?.onOK) events.onOK(fields);
    }

    return (
        <Drawer isOpen={config.isOpen} direction="right">
            {
                schema ?
                    Object.keys(schema).map(key => (
                        <label className={styles.label} key={key}>
                            {key}
                            <input className={styles.input} type="text" placeholder={schema[key].placeholder}
                                   value={fields[key] || ''}
                                   onChange={(e) => handleFieldChange(e, key)}/>
                        </label>
                    )) :
                    null
            }
            <div className={styles.operations}>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleOk}>Ok</button>
            </div>
        </Drawer>
    )
};

export default RightSidebar;