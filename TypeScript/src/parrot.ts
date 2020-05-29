export interface Parrot {
  getSpeed(): number;
}

export class ParrotEuropean implements Parrot {
  public getSpeed() {
    return 12;
  }
}

export class ParrotAfrican implements Parrot {
  private readonly BASE_SPEED = 12;
  private readonly LOAD_FACTOR = 9;

  constructor(private readonly numberOfCoconuts: number) {
  }

  public getSpeed() {
    return Math.max(0, this.BASE_SPEED - this.LOAD_FACTOR * this.numberOfCoconuts)
  }
}

export class NorwegianBlueParrot implements Parrot {
  private readonly BASE_SPEED: number = 12;

  constructor(private readonly isNailed: boolean,
              private readonly voltage: number) {
  }

  getSpeed(): number {
    return this.isNailed ? 0 : this.getBaseSpeedWithVoltage();
  }

  private readonly MINIMAL_SPEED_WHEN_NOT_NAILED = 24;

  private getBaseSpeedWithVoltage(): number {
    return Math.min(this.MINIMAL_SPEED_WHEN_NOT_NAILED, this.voltage * this.BASE_SPEED);
  }
}
