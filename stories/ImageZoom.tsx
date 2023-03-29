import React from 'react';

import { Header } from './Header';
import './imagezoom.css';

type User = {
  name: string;
};

export const ImageZoom: React.VFC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <div className="container"></div>
    </article>
  );
};
