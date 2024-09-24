'use client';

import React, { useRef, useState } from 'react';
import { Box, Input } from '../../../../../../shared/components/bunny-ui';

export const Search = () => {
  const ref = useRef<HTMLSpanElement>(null);
  const [keyword, setKeyword] = useState('');

  return (
    <Box tag="span" ref={ref} className="flex">
      <span ref={ref}></span>
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></Input>
    </Box>
  );
};
