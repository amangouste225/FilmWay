import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import { Header } from "../../components/header/header";

export const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};
