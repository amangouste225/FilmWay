import useFetch from "../../hooks/useFetch";
import { Cast } from "./cast/Cast";
import { DetailsBanner } from "./detailsBanner/DetailsBanner";
import "./style.scss";
import { useParams } from "react-router-dom";
import { VideosSection } from "./videoSection/VideoSection";
import { Recommendation } from "./carousels/Recommendation";
import { Similar } from "./carousels/Similar";

export const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <Similar mediaType={mediaType} id={id} />
    </div>
  );
};
