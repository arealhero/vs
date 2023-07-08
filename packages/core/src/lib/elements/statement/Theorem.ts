import Timestamp from '../../types/Timestamp';
import { Title } from '../block';
import Block from '../block/Block';
import Statement from './Statement';

export default class Theorem extends Statement {
  public constructor(
    createdAt: Timestamp,
    readonly title: Title,
    readonly proposition: Block[],
    readonly idea: Block[],
    readonly proof: Block[]
  ) {
    super(createdAt);
  }

  public getTitle() {
    return this.title;
  }

  public getProposition() {
    return this.proposition;
  }

  public getIdea() {
    return this.proof;
  }

  public getProof() {
    return this.proof;
  }
}
