export class RewardsService {
  calculate(amount: number, apr: number) {
    return (amount * apr) / 100;
  }
}
