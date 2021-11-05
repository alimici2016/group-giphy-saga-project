import { useDispatch } from "react-redux";



function GiphyItem({ gif }) {

  const dispatch = useDispatch();

  const handleSubmitFav = () => {
    //when fav button clicked, dispatch to post url
    //**payload may need to change depending on how data 
    //comes from the API
    dispatch({
      type: 'ADD_GIF',
      payload: {
        name: gif.title,
        image_url: gif.images.fixed_height.url
      }
    })
  }//end handSubmitFav
 
  console.log(gif)

  return (
    <div className="gifItem">
      <h4>{gif.title}</h4>
      <img src={gif.images.fixed_height.url} />
      <button onClick={handleSubmitFav}>Save</button>
    </div>
  );
}

export default GiphyItem;
