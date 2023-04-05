import React from 'react';

export const ButtonElement: React.FunctionComponent<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { title: string }
> = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};
