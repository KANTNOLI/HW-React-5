import { Link } from "react-router";
import style from "./Pages.module.css";

function Pages() {
  return (
    <section className={style.body}>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
    </section>
  );
}

export default Pages;
