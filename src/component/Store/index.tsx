import style from "./Store.module.css";

import { Game } from "../../App";
import { useNavigate } from "react-router";

interface props {
  GamesList: Game[];
  setGamesList: (value: Game[]) => void;
}

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Store({ GamesList, setGamesList }: props) {
  const navigate = useNavigate();
  const btns: string[] = ["title", "price", "download"];

  const filterStore = (type: number) => {
    switch (type) {
      case 0:
        setGamesList([
          ...GamesList.sort((a, b) => a.title.localeCompare(b.title)),
        ]);
        break;
      case 1:
        setGamesList([...GamesList.sort((a, b) => a.price - b.price)]);
        break;
      case 2:
        setGamesList([...GamesList.sort((a, b) => a.downloads - b.downloads)]);
        break;
    }
  };
  const GamesPop = (): Game[] => {
    const trash = [...GamesList];
    trash.pop();
    return trash;
  };
  const GamesPush = (): Game[] => {
    const trash = [...GamesList];
    trash.push({
      title: `NEW rand(${rand(1, 9)},${rand(1, 9)},${rand(1, 9)})`,
      price: rand(100, 1000),
      downloads: 0,
    });
    return trash;
  };

  return (
    <section className={style.body}>
      <div className={style.filter}>
        {btns.map((btn, id) => (
          <button key={id} onClick={() => filterStore(id)}>
            {btn}
          </button>
        ))}
        <button onClick={() => setGamesList(GamesPop())}>pop</button>
        <button onClick={() => setGamesList(GamesPush())}>add rand</button>
      </div>
      {GamesList.map((game, id) => (
        <div
          onClick={() =>
            navigate(`/game/${id}?flag=${id % 2 ? "true" : "false"}`)
          }
          className={style.cart}
          key={id}
        >
          <p>Title: {game.title}</p>
          <p>Price: {game.price}</p>
          <p>Downloads: {game.downloads}</p>
          <p>flag: {id % 2 ? "true" : "false"}</p>
        </div>
      ))}
    </section>
  );
}

export default Store;
