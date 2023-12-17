import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import { Popular } from "./popular/Popular";
import { Trending } from "./trending/Trending";

export const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <Trending />
      <Popular />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};
