import { MathJax } from 'better-react-mathjax';
import { PropsWithChildren } from 'react';

export function DisplayMath({ children }: PropsWithChildren) {
  return <MathJax>\[{children}\]</MathJax>;
}
