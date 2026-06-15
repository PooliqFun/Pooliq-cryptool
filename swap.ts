import { SwapParams } from "../types";

export class SwapModule {
  async execute(params: SwapParams) {
    return {
      success: true,
      route: "POOLIQ_ROUTER",
      ...params
    };
  }
}
