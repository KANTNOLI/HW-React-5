import { Route, Routes } from "react-router";
import Store from "./component/Store";
import Pages from "./component/Pages";
import { useState } from "react";
import Game from "./component/Game";

export interface GameItf {
  title: string;
  price: number;
  downloads: number;
}
function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RenderListOriginal: GameItf[] = Array.from(
  { length: 10 },
  (): GameItf => ({
    title: `Title rand(${rand(1, 9)},${rand(1, 9)},${rand(1, 9)})`,
    price: rand(100, 1000),
    downloads: rand(0, 100000),
  })
);

function App() {
  const [GamesList, setGamesList] = useState<GameItf[]>(RenderListOriginal);

  return (
    <>
      <Pages />
      <Routes>
        <Route path="/" element={<p>main page</p>} />
        <Route
          path="/store/*"
          element={
            <Store
              GamesList={GamesList}
              setGamesList={(value: GameItf[]) => setGamesList(value)}
            />
          }
        />
        <Route path="/game/:id" element={<Game GamesList={GamesList} />} />

        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </>
  );
}

export default App;
