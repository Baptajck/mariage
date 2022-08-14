import s from "./Home.module.scss";

import ble from "../../assets/images/ble.jpg";
import fleur from "../../assets/images/fleur.jpg";

export default function Home() {
  return (
    <div className={s.home}>
      <h1 className="text-center fs-4 mt-3 text-justify">
        Bienvenue au mariage
      </h1>
      <div className={s.containerImg}>
        <img src={ble} alt="" className={s.img} />
        <img src={fleur} alt="" className={s.img} />
      </div>
    </div>
  );
}
