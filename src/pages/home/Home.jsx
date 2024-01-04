import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import { Popular } from "./popular/Popular";
import { Trending } from "./trending/Trending";
import { TopRated } from "./topRated/TopRated";

export const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <TopRated />
      <Trending />
      <Popular />
    </div>
  );
};
