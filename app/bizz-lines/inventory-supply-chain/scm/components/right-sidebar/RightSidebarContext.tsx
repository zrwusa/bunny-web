'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

export type RightSidebarSchema = {
  [key: string]: {
    placeholder?: string;
    onValueChanged?: (newValue: string) => void;
  };
};

export type OkPairs = { [key: string]: string };

export type RightSidebarEvents = {
  onOK?: (pairs?: OkPairs) => void;
  onCancel?: () => void;
};

export type RightSidebarConfig = {
  isOpen: boolean;
};

export type RightSidebarContextValue = {
  config: RightSidebarConfig;
  setConfig: Dispatch<SetStateAction<RightSidebarConfig>>;
  schema: RightSidebarSchema;
  setSchema: Dispatch<SetStateAction<RightSidebarSchema>>;
  events?: RightSidebarEvents;
  setEvents: Dispatch<SetStateAction<RightSidebarEvents>>;
};

export const RightSidebarContext = createContext<RightSidebarContextValue>({
  config: { isOpen: false },
  setConfig: () => undefined,
  schema: {},
  setSchema: () => undefined,
  setEvents: () => undefined,
});
