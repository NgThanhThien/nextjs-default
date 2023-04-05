import React from 'react';
type SideBarProps = {
  items: {
    name: string;
    href: string;
  }[];
};

export const SideBar = ({ items }: SideBarProps) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.href}>
            <a role="navigator" href={item.href}>
              {item.name}
            </a>
          </div>
        );
      })}
    </>
  );
};
