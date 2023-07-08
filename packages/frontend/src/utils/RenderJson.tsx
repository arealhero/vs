import { InlineMath } from '../app/components/elements/inline/InlineMath';
import { Text } from '../app/components/elements/inline/Text';
import { Paragraph } from '../app/components/elements/block/Paragraph';
import { Header } from '../app/components/elements/block/Header';
import { ReactNode } from 'react';
import {DisplayMath} from '../app/components/elements/block/DisplayMath';

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

type JsonData = {
  readonly type: string;
  readonly content: any;
};

export default function RenderJson(data: JsonData | undefined): ReactNode {
  if (!data) return <></>;

  console.log(`Rendering ${data.type}`);

  switch (data.type) {
    // Page
    case ElementType.Conspectus:
      return <>{data.content.map(RenderJson)}</>;

    // Inline
    case ElementType.Text:
      return <Text>{data.content}</Text>;
    case ElementType.InlineMath:
      return <InlineMath>{data.content}</InlineMath>;

    // Block
    case ElementType.Header:
      return <Header>{data.content.map(RenderJson)}</Header>;
    case ElementType.Paragraph:
      return <Paragraph>{data.content.map(RenderJson)}</Paragraph>;
    case ElementType.DisplayMath:
      return <DisplayMath>{data.content}</DisplayMath>;
  }
}
