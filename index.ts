import { Pooliq } from "./sdk/Pooliq";

async function main() {
  const pooliq = new Pooliq();

  console.log("Pooliq SDK Initialized");

  const stake = await pooliq.staking.deposit({
    token: "SOL",
    amount: 100
  });

  console.log(stake);

  const swap = await pooliq.swap.execute({
    from: "SOL",
    to: "USDC",
    amount: 10
  });

  console.log(swap);

  const liquidity = await pooliq.liquidity.addLiquidity({
    tokenA: "SOL",
    tokenB: "USDC",
    amountA: 5,
    amountB: 1000
  });

  console.log(liquidity);
}

main();
