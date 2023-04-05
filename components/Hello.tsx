import React from 'react';
type HelloProps = {
  name: string;
};
export const Hello = ({ name }: HelloProps) => {
  return <div role="contentinfo">Hello {name}</div>;
};
