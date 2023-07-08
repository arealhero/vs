import express from 'express';
import * as path from 'path';

const app = express();

enum ElementType {
  // Page types
  Conspectus = 'CONSPECTUS',

  // Inline types
  Text = 'TEXT',
  Italic = 'ITALIC',
  Block = 'BLOCK',
  Underline = 'UNDERLINE',
  InlineMath = 'INLINE_MATH',

  // Block types
  Header = 'HEADER',
  Paragraph = 'PARAGRAPH',
  DisplayMath = 'DISPLAY_MATH',
  Image = 'IMAGE',
}

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (_, res) => {
  res.send({ message: 'Welcome to backend!' });
});

app.get('/api/page', (_, res) => {
  const page = {
    type: ElementType.Conspectus,
    settings: {
      latex: {
        commands: [
          {
            name: '\\abs',
            numberOfArgs: 1,
            definition: '\\left| #1 \\right|',
          },
          {
            name: '\\dp',
            numberOfArgs: 2,
            definition: '\\left\\langle #1, #2 \\right\\rangle',
          },
          {
            name: '\\vec',
            numberOfArgs: 1,
            definition: '\\bf{#1}',
          },
        ],
      },
    },
    content: [
      {
        type: ElementType.Header,
        content: [
          {
            type: ElementType.Text,
            content: 'Волновой оператор (',
          },
          {
            type: ElementType.InlineMath,
            content: '\\Delta u',
          },
          {
            type: ElementType.Text,
            content: ')',
          },
        ],
      },
      {
        type: ElementType.Paragraph,
        content: [
          {
            type: ElementType.Text,
            content: 'Привет, мир!',
          },
        ],
      },
      {
        type: ElementType.Paragraph,
        content: [
          {
            type: ElementType.Text,
            content: 'Строка с формулой: ',
          },
          {
            type: ElementType.InlineMath,
            content: '\\int\\limits_a^b f(x) dx',
          },
        ],
      },
      {
        type: ElementType.DisplayMath,
        content: '\\oint\\limits_{\\abs{z} = 1} z^2 dz',
      },
      {
        type: ElementType.DisplayMath,
        content:
          '\\dp{\\vec{a}}{\\vec{b}} = \\abs{\\vec{a}} \\abs{\\vec{b}} \\cos(\\vec{a}, \\vec{b})',
      },
    ],
  };

  res.send(page);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
