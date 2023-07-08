import Timestamp from '../../types/Timestamp';
import Element from '../Element';
import Inline from '../inline/Inline';

export default class Block extends Element {
  public constructor(createdAt: Timestamp, readonly children: Inline[]) {
    super(createdAt);
  }
}
