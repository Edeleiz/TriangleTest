import { Side } from "./enum";
import { TriangleType } from "./enum";
import { TriangleShape } from "./TriangleShape";

export default class TriangleModel {
    private triangle: TriangleShape;

    private _a:number = 0;
    private _b:number = 0;
    private _c:number = 0;

    constructor() {
        this.triangle = new TriangleShape(0, 0, 0);
    }

    public getLocale(type: TriangleType):string {
        switch (type) {
            case TriangleType.EQUILATERAL:
                return "Triangle is equilateral";
            case TriangleType.SCALENE:
                return "Triangle is scalene";
            case TriangleType.ISOSCELES:
                return "Triangle is isosceles";
        }
        throw new Error(`Trigangle type ${type} locale is not defined`);
    }

    public getTriangleTypes():string {
        const types = this.triangle.getTypes();
        if (types.indexOf(TriangleType.INVALID) > -1) {
            return "Invalid triangle sides";
        }

        let result = "";
        for (let triangleType of types)
        { 
            result += this.getLocale(triangleType) + "\n";
        }

        return result;
    }

    public setSide(side: Side, value: number):void {
        if (side == Side.sideA) {
            this._a = value;
        } else if (side == Side.sideB) {
            this._b = value;
        } else if (side == Side.sideC) {
            this._c = value;
        }
    }

    public commitSides():void {
        this.triangle.setValues(this._a, this._b, this._c);
    }
}