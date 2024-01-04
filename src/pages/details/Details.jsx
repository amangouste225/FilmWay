import useFetch from "../../hooks/useFetch";
import { DetailsBanner } from "./detailsBanner/DetailsBanner";
import "./style.scss";
import { useParams } from "react-router-dom";

export const Details = () => {
  // const { mediaType, id } = useParams();
  // const { data, loading } = useFetch(`/${mediaType}/${id}`);

  return (
    <div>
      <DetailsBanner />
    </div>
  );
};
