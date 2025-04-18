import { Route, Routes } from "react-router";
import Store from "./component/Store";
import Pages from "./component/Pages";
import { useState } from "react";

export interface Game {
  title: string;
  price: number;
  downloads: number;
}
function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RenderListOriginal: Game[] = Array.from(
  { length: 10 },
  (): Game => ({
    title: `Title rand(${rand(1, 9)},${rand(1, 9)},${rand(1, 9)})`,
    price: rand(100, 1000),
    downloads: rand(0, 100000),
  })
);

function App() {
  const [GamesList, setGamesList] = useState<Game[]>(RenderListOriginal);

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
              setGamesList={(value: Game[]) => setGamesList(value)}
            />
          }
        />
        <Route path="/game/:title" element={<p>asd</p>} />

        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </>
  );
}

export default App;
