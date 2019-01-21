import { isError } from "util";
import { TriangleType } from "./enum"
import { BaseShape } from "./BaseShape";

//TODO как обрабатывать ошибки, если в конструктор передается число <=0?
//TODO конструктор, который принимает объект имплементирующий интерфейс ITriangle
//TODO a,b,c наверное должны быть приватными, чтобы их не выставили в <=0?
//TODO так как a,b,c не инты, их нельзя сравнивать через ===, надо учитывать погрешность...
//test

export class TriangleShape extends BaseShape<TriangleType>{
    constructor(private a: number, private b: number, private c: number) { 
        super();
        
        this.addTypeCheck(this.isInvalid.bind(this), TriangleType.INVALID);
        this.addTypeCheck(this.isEquilateral.bind(this), TriangleType.EQUILATERAL);
        this.addTypeCheck(this.isIsosceles.bind(this), TriangleType.ISOSCELES);
        this.addTypeCheck(this.isScalene.bind(this), TriangleType.SCALENE);

        this.setValues(a, b, c);
    }

    public setValues(a:number, b:number, c:number): void {
        this.a = a;
        this.b = b;
        this.c = c;

        this.commitValues();
    }

    private isInvalid(): boolean {
        return this.isInvalidSides() || this.isImpossible();
    }

    private isInvalidSides(): boolean {
        return this.a <= 0 || this.b <= 0 || this.c <= 0
    }

    private isImpossible(): boolean {
        return this.a >= this.b + this.c ||
            this.c >= this.b + this.a ||
            this.b >= this.a + this.c
    }

    private isEquilateral(): boolean {
        return this.a === this.b && this.b === this.c;
    }

    private isScalene(): boolean {
        return this.a !== this.b && this.b !== this.c;
    }

    private isIsosceles(): boolean {
        return (
            (this.a === this.b && this.c !== this.a) ||
            (this.b === this.c && this.a !== this.b) ||
            (this.c === this.a && this.b !== this.c)
        );
    }
}