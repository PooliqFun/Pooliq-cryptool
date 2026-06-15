import { LiquidityParams } from "../types";

export class LiquidityModule {
  async addLiquidity(params: LiquidityParams) {
    return {
      success: true,
      ...params
    };
  }

  async removeLiquidity(shares: number) {
    return {
      success: true,
      shares
    };
  }
}
