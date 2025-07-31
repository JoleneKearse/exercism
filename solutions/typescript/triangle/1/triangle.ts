export class Triangle {
  private a: number
  private b: number
  private c: number

  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }

  private validateSides(a: number, b: number, c: number): boolean | void {
    if (!(a + b >= c && a + c >= b && b + c >= a)) {
      return false
    } else if (a === 0 && b === 0 && c === 0) {
      return false
    } else {
      return true
    }
  }

  get isEquilateral(): boolean {
    if (this.validateSides(this.a, this.b, this.c) === false) {
      return false
    }
    return this.a === this.b && this.b === this.c;
  }

  get isIsosceles(): boolean {
    if (this.validateSides(this.a, this.b, this.c) === false) {
      return false
    } else {
      return this.a === this.b || this.a === this.c || this.b ===this.c
    }
  }

  get isScalene() {
    if (this.validateSides(this.a, this.b, this.c) === false) {
      return false
    } else {
      return this.a !== this.b && this.a !== this.c && this.b !== this.c
    }
  }
}
