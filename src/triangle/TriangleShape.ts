import { isError } from "util";
import { TriangleType } from "./enum"
import { BaseShape } from "./BaseShape";

export class TriangleShape extends BaseShape<TriangleType>{
    constructor(private _a: number, private _b: number, private _c: number) { 
        super();
        
        this.addTypeCheck(this.isInvalid.bind(this), TriangleType.INVALID);
        this.addTypeCheck(this.isEquilateral.bind(this), TriangleType.EQUILATERAL);
        this.addTypeCheck(this.isIsosceles.bind(this), TriangleType.ISOSCELES);
        this.addTypeCheck(this.isScalene.bind(this), TriangleType.SCALENE);

        this.setValues(_a, _b, _c);
    }

    public setValues(a:number, b:number, c:number): void {
        this._a = a;
        this._b = b;
        this._c = c;

        this.commitValues();
    }

    private isInvalid(): boolean {
        return this.isInvalidSides() || this.isImpossible();
    }

    private isInvalidSides(): boolean {
        return this._a <= 0 || this._b <= 0 || this._c <= 0
    }

    private isImpossible(): boolean {
        return this._a >= this._b + this._c ||
            this._c >= this._b + this._a ||
            this._b >= this._a + this._c
    }

    private isEquilateral(): boolean {
        return this._a === this._b && this._b === this._c;
    }

    private isScalene(): boolean {
        return this._a !== this._b && this._b !== this._c;
    }

    private isIsosceles(): boolean {
        return (
            (this._a === this._b && this._c !== this._a) ||
            (this._b === this._c && this._a !== this._b) ||
            (this._c === this._a && this._b !== this._c)
        );
    }
}