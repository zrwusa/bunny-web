'use client';

import { useState } from 'react';
import {
  RightSidebarConfig,
  RightSidebarContext,
  RightSidebarEvents,
  RightSidebarSchema,
} from './RightSidebarContext';

export const RightSidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [config, setConfig] = useState<RightSidebarConfig>({ isOpen: false });
  const [schema, setSchema] = useState<RightSidebarSchema>({
    exampleField: {
      onValueChanged: () => console.log('exampleField value changed'),
    },
  });
  const [events, setEvents] = useState<RightSidebarEvents>({
    onOK: () => console.log('OK clicked'),
    onCancel: () => console.log('Cancel clicked'),
  });

  return (
    <RightSidebarContext.Provider
      value={{ config, setConfig, schema, setSchema, events, setEvents }}
    >
      {children}
    </RightSidebarContext.Provider>
  );
};
