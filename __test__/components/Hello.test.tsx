import React from 'react';
import { expect, it, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { Hello } from '../../components/Hello';
test('homepage', () => {
  render(<Hello />);
  const header = within(screen.getByRole('heading', { level: 1, name: 'Hello' }));
  // expect(header).toBe

  // expect(main.getByRole('heading', { level: 1, name: /welcome to next\.js!/i })).toBeDefined();

  // const footer = within(screen.getByRole('contentinfo'));
  // const link = within(footer.getByRole('link'));
  // expect(link.getByRole('img', { name: /vercel logo/i })).toBeDefined();
});
