export default class Id {
  static get new(): string {
    return Math.random().toString(36).substring(2, 15).toUpperCase();
  }
}
