import React from 'react';
import { expect, test } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Counter } from '../../components/Counter';
test('Counter', () => {
  const wrapper = render(<Counter />);
  const button = wrapper.container.querySelector('button') as HTMLButtonElement;
  const countText = wrapper.getByRole('count-text');
  expect(countText.textContent).toBe('Count is 0');
  expect(button.textContent).toBe('Count');
  fireEvent.click(button);
  expect(countText.textContent).toBe('Count is 1');
});
