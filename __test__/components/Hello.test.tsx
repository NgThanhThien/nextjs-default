import React from 'react';
import { expect, it, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { Hello } from '../../components/Hello';
test('hello', () => {
  render(<Hello name="Thien" />);
  const divElement = screen.getByRole('contentinfo');
  expect(divElement.textContent).toBe('Hello Thien');
});
