import { MathJax } from 'better-react-mathjax';
import { ReactNode } from 'react';

type LatexCommand = {
  readonly name: string;
  readonly numberOfArgs: number;
  readonly definition: string;
};

type LatexSettings = {
  readonly commands: LatexCommand[];
};

export function RenderLatexCommands(settings: LatexSettings): ReactNode {
  return (
    <div style={{ display: 'none' }}>
      <MathJax>
        \(
        {settings.commands.map((command) => {
          let str = `\\def${command.name}`;
          for (let i = 0; i < command.numberOfArgs; ++i) {
            str += `#${i + 1}`;
          }
          str += `{${command.definition}}`;
          return str;
        })}
        \)
      </MathJax>
    </div>
  );
}
