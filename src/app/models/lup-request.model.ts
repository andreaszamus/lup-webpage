export class LupRequestModel {
  lastMonthBill: number;
  lastMonthEnergyUsage: number;
  area?: number;
  city?: string;
  developerName?: string;
  monthlyProducedEnergy?: number;
  projectTotalCost?: number;

  constructor(lastMonthBill: number, lastMonthEnergyUsage: number) {
    this.lastMonthBill = lastMonthBill;
    this.lastMonthEnergyUsage = lastMonthEnergyUsage;
  }
}
