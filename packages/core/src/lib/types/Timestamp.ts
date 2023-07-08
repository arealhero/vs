export default class Timestamp {
  public constructor(readonly date: Date = new Date()) {}

  public static now(): Timestamp {
    return new Timestamp();
  }

  public toString(): string {
    return this.date.toISOString();
  }
}
