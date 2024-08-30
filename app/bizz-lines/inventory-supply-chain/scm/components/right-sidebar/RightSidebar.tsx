"use client"

import {ChangeEvent, useContext, useState} from "react";
import styles from "./RightSidebar.module.css";
import {OkPairs, RightSidebarContext} from "./RightSidebarContext";

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
    const handleCancel = () => {
        setConfig({isOpen: false});
        events?.onCancel && events.onCancel();
    }

    const handleOk = () => {
        setConfig({isOpen: false});
        events?.onOK && events.onOK(fields);
    }

    return (config?.isOpen ? <aside>
            {
                schema ?
                    Object.keys(schema).map(key => (
                        <label key={key}
                               className={styles.label}>
                            {key}
                            <input type="text" className="grow" placeholder={schema[key].placeholder} value={fields[key]}
                                   onChange={(e) => handleFieldChange(e, key)}/>
                        </label>
                    )) :
                    null
            }
            <section className={styles.operations}>
                <button className="btn" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-primary" onClick={handleOk}>Ok</button>
            </section>


        </aside>
        : null)
};

export default RightSidebar;