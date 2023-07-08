import { MathJax } from 'better-react-mathjax';
import { PropsWithChildren } from 'react';

export function InlineMath({ children }: PropsWithChildren) {
  return <MathJax inline={true}>\({children}\)</MathJax>;
}
