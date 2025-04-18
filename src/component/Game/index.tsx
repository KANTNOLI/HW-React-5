import { useParams, useSearchParams } from "react-router";
import style from "./Game.module.css";
import { GameItf } from "../../App";
import { useState } from "react";

interface props {
  GamesList: GameItf[];
}
function Game({ GamesList }: props) {
  const [searchParams] = useSearchParams();
  const flag = searchParams.get("flag");
  const { id } = useParams();

  const [GameInfo, setGameInfo] = useState(
    GamesList[id as unknown as number] || GamesList[0]
  );

  return (
    <section className={style.body}>
      <div className={style.cart}>
        <p>FLAG: {flag}</p>
        <p>TITLE: {GameInfo.title}</p>
        <p>PRICE: {GameInfo.price}</p>
        <p>DOWNLOAD: {GameInfo.downloads}</p>
        <p>ID: {id}</p>
      </div>
    </section>
  );
}

export default Game;
