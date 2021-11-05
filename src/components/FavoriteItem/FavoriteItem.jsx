import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';


function FavoriteItem({ gif }) {

    const [categoryInput, setCategoryInput] = useState()

    useEffect(() => {
        fetchGif();
    }, []);

    const handleDelete = () => {
        //send off dispatch with idToDelete
        dispatch({
            type: 'DELETE_GIF',
            payload: gif.id
        })
        //GET new DB
        fetchGif();
    }

    const handleChange = (event) => {
        setCategoryInput(event.target.value)
    }

    const fetchGif = () => {
        dispatch({ type: 'FETCH_GIF' })
    }

    const dispatch = useDispatch();

    console.log(`GIFFFF`, gif);
    return (
        <>

            {gif ?
                <li>
                    <img src={gif?.image_url} />
                    <div>
                    <select value={categoryInput} onChange={handleChange}>
                        <option value=''>Choose a category</option>
                        <option value={1} >Funny</option>
                        <option value={2}>Cohort</option>
                        <option value={3}>Cartoon</option>
                        <option value={4}>*Nsfw*</option>
                        <option value={5}>Meme</option>
                    </select>
                    <button onClick={() => dispatch({ type: 'CHANGE_CATEGORY', payload: { id: gif.id, categoryId: Number(categoryInput) } })}>Submit</button>
                        <button onClick={handleDelete}>Delete Gif</button>
                    </div>
                </li>
                : ``}


        </>
    )
}

export default FavoriteItem;