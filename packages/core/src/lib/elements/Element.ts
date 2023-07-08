import Timestamp from '../types/Timestamp';

export default abstract class Element {
  public constructor(readonly createdAt: Timestamp) {}
}
