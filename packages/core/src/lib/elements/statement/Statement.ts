import Timestamp from '../../types/Timestamp';
import Element from '../Element';

export default class Statement extends Element {
  public constructor(createdAt: Timestamp) {
    super(createdAt);
  }
}
