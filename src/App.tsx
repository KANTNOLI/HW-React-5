import { Route, Routes } from "react-router";
import Store from "./component/Store";
import Pages from "./component/Pages";

function App() {
  return (
    <>
      <Pages />
      <Routes>
        <Route path="/" element={<p>main page</p>} />
        <Route path="/store/*" element={<Store />} />
        <Route path="/game/:title" element={<p>asd</p>} />

        <Route path="*" element={<p>Error</p>} />
      </Routes>
    </>
  );
}

export default App;
