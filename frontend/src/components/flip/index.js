import { useState, useEffect, useContext } from "react";
import { NearContext } from "@/wallets/near";
import styles from "@/styles/app.module.css";
import { FlicpNearContract } from "@/config";
import Coin from "@/components/coin";
import BetMachine from "@/components/bet";
import Confetti from "react-confetti";
import { toast } from "react-toastify";

export default function FlipNear() {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [points, setPoints] = useState(0); // 赢得的金额
  const [result, setResult] = useState("");
  const [betConfig, setBetConfig] = useState({});
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    if (!wallet) return;
    initData();
  }, [signedAccountId]);
  
  async function initData() {
    if (!signedAccountId) {
      return;
    }
    const points = await wallet.viewMethod({
      contractId: FlicpNearContract,
      method: "points_of",
      args: { player: signedAccountId }
    });
    setPoints(points);
  }
  const flipCoin = async () => {
    try {
      const result = await wallet.callMethod({
        contractId: FlicpNearContract,
        method: "bet_flip_coin",
        args: { player_guess: betConfig.side, amount: betConfig.amount},
        amount: betConfig.amount,
      });
      console.log("flipCoin result", result);
      setResult(`Coin flip result: ${result}`);
      setIsWinner(result === betConfig.side);
      await updateScore();
      setTimeout(()=>{
        setIsWinner(false);
      }, 4000);
      return result;
    } catch (error) {
      toast.error(error.message);
      return betConfig.side;
    }
  };
  const updateScore = async () => {
    try {
      const score = await wallet.viewMethod({
        contractId: FlicpNearContract,
        method: "points_of",
        args: { player: signedAccountId }
      });
      setPoints(score);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleHint = () => {
    if (!signedAccountId) {
      toast.error("Please log in before placing a bet");
      return;
    }
    if (!betConfig.amount || !betConfig.side) {
      toast.error("Please set the bet amount and side");
      return;
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Interacting with the contract &nbsp;
          <code className={styles.code}>{FlicpNearContract}</code>
        </p>
      </div>
      <p>Your current Score: <span className="ms-2 badge bg-secondary">{points}</span></p>
      <p className="ms-2 badge bg-secondary">{result}</p>
      {isWinner && <Confetti />}
      <Coin
        onFlipComplete={flipCoin}
        disabled={(!signedAccountId && !betConfig.amount) || !betConfig.side}
        onFlipClick={handleHint}
      />
      <BetMachine onBet={setBetConfig}></BetMachine>
      {!signedAccountId && (
        <div className={styles.center}>
          <div className="w-100 text-end align-text-center">
            <p className="m-0"> Please log in before placing a bet </p>
          </div>
        </div>
      )}
    </main>
  );
}
