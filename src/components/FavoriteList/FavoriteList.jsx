import "./FavoriteList.css";
import { useSelector } from "react-redux";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

function FavoriteList() {
  const gifs = useSelector((store) => store.gifReducer);

  console.log(gifs);

  return (
    <div className="favListContainer">
      {gifs?.map((gif) => (
        <FavoriteItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
}

export default FavoriteList;
