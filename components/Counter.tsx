import React, { useState } from 'react';
import { ButtonElement } from './Button';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div role="count-text">Count is {count}</div>
      <ButtonElement title="Count" onClick={() => setCount((prev) => ++prev)}></ButtonElement>
    </>
  );
};
