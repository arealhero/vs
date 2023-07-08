import { PropsWithChildren } from 'react';

export function Header({ children }: PropsWithChildren) {
  return <h1>{children}</h1>;
}
