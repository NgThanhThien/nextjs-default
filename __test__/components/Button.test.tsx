import React from 'react';
import { expect, test } from 'vitest';
import { fireEvent, getByText, render } from '@testing-library/react';
import { ButtonElement } from '../../components/Button';
test('button', () => {
  const wrapper = render(<ButtonElement title="Add Item" />);
  const button = wrapper.container.querySelector('button') as HTMLButtonElement;
  expect(button.textContent).toBe('Add Item');
  // fireEvent(
  //   getByText(button, 'Add Item'),
  //   new MouseEvent('click', {
  //     bubbles: true,
  //   })
  // );
  // expect(button).toBeCalledTimes(1);
  // const btnElement = screen.getByText('Add Item');
  // expect(fireEvent.click(btnElement)).toHaveBeenCalledTimes(1);
});
