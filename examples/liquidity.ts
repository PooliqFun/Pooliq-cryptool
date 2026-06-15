import { Pooliq } from "../src/sdk/Pooliq";

async function run() {
  const pooliq = new Pooliq();

  const result = await pooliq.liquidity.addLiquidity({
    tokenA: "SOL",
    tokenB: "USDC",
    amountA: 10,
    amountB: 1500
  });

  console.log(result);
}

run();
