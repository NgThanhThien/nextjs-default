import React from 'react';
import { expect, it, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { SideBar } from '../../components/Sidebar';
test('hello', () => {
  const items = [
    { name: 'item1', href: '/href1' },
    { name: 'item2', href: '/href2' },
  ];
  render(<SideBar items={items} />);
  const navElement = screen.getAllByRole('navigator');
  for (let i in items) {
    expect(navElement[i].textContent).toBe(items[i].name);
    expect(navElement[i].getAttribute('href')).toBe(items[i].href);
  }
});
