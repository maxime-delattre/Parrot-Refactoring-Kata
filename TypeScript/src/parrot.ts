export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export interface Parrot {

    getSpeed(): number;
    baseSpeed: number;

}

export class ParrotEuropean implements Parrot{

    baseSpeed = 12;

    public getSpeed(){
        return this.baseSpeed;
    }

}

export class ParrotAfrican implements Parrot{

    constructor(private numberOfCoconuts: number){
        
    }

    baseSpeed = 12;
    private loadFactor = 9

    public getSpeed(){
        return Math.max(0, this.baseSpeed - this.loadFactor * this.numberOfCoconuts)
    }

}

export class OldParrot {
    constructor(private parrotType: ParrotTypes,
                private numberOfCoconuts: number,
                private voltage: number,
                private isNailed: boolean) {
    }

    public getSpeed(): number {
        switch (this.parrotType) {
            case ParrotTypes.EUROPEAN:
                return this.getBaseSpeed();
            case ParrotTypes.AFRICAN:
                return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
            case ParrotTypes.NORWEGIAN_BLUE:
                return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
        }
        throw new Error("Should be unreachable");
    }

    private getBaseSpeed(): number {
        return 12;
    }

    private getLoadFactor(): number {
        return 9;
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * this.getBaseSpeed());
    }

}
