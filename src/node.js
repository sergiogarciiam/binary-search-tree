export class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  isLeft() {
    return this.left !== null;
  }

  isRight() {
    return this.right !== null;
  }

  isBoth() {
    return this.isLeft() && this.isRight();
  }

  isNeither() {
    return !this.isLeft() && !this.isRight();
  }
}
