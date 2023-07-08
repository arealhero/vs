import Timestamp from '../../types/Timestamp';
import Block from '../block/Block';
import Element from '../Element';
import Statement from '../statement/Statement';

type TopLevel = Block | Statement;

export default class Conspectus extends Element {
  public constructor(createdAt: Timestamp, readonly content: TopLevel[]) {
    super(createdAt);
  }

  public serialize(): string {
    return JSON.stringify({
      createdAt: this.createdAt,
      content: this.content,
    });
  }
}
