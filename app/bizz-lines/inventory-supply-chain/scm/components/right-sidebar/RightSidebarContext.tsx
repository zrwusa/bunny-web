import {createContext} from "react";

export type RightSidebarSchema = {
    [key: string]: {
        placeholder?: string,
        onValueChanged?: (newValue: string) => void;
    }
}

export type OkPairs = { [key: string]: string };

export type RightSidebarEvents = {
    onOK?: (pairs?: OkPairs) => void;
    onCancel?: () => void;
}

export type RightSidebarConfig = {
    isOpen: boolean;
}

export type RightSidebarContextValue = {
    config: RightSidebarConfig;
    setConfig: React.Dispatch<React.SetStateAction<RightSidebarConfig>>;
    schema: RightSidebarSchema;
    setSchema: React.Dispatch<React.SetStateAction<RightSidebarSchema>>;
    events?: RightSidebarEvents;
    setEvents: React.Dispatch<React.SetStateAction<RightSidebarEvents>>;
};

export const RightSidebarContext = createContext<RightSidebarContextValue>({
    config: {isOpen: false},
    setConfig: () => undefined,
    schema: {},
    setSchema: () => undefined,
    setEvents: () => undefined
});

