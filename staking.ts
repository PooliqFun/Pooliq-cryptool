import { StakeParams } from "../types";

export class StakingModule {
  async deposit(params: StakeParams) {
    return {
      success: true,
      action: "stake",
      ...params
    };
  }

  async withdraw(amount: number) {
    return {
      success: true,
      amount
    };
  }

  async claimRewards() {
    return {
      success: true,
      rewards: Math.random() * 100
    };
  }
}
