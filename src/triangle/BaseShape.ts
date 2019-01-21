type CheckFunction = () => boolean;

export class BaseShape <T> {
    private _typeChecks:Map<CheckFunction, T> = new Map<CheckFunction, T>();

    private _objectTypes:Array<T> = [];

    public getTypes():Array<T> {
        return this._objectTypes.slice();
    }

    public hasType(type:T):boolean { 
        return this._objectTypes.indexOf(type) > -1;
    }

    protected addTypeCheck(checkFunc:CheckFunction, type:T):void {
        this._typeChecks.set(checkFunc, type);
    }

    protected commitValues():void { 
        this._objectTypes = [];
        this._typeChecks.forEach((type:T, checkFunc:CheckFunction) => 
        {
            if (checkFunc()) { 
                this._objectTypes.push(type);
            }
        })
    }
}