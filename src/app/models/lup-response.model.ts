export class LupResponseModel {
  time: string;
  discount: number;
  energyRateWithDiscount: string;

  constructor(time: string, discount: number, energyRateWithDiscount: string) {
    this.time = time;
    this.discount = discount;
    this.energyRateWithDiscount = energyRateWithDiscount;
  }
}
