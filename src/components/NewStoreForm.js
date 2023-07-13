import React, {useState} from "react"

function NewStoreForm({onAddStore}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [season, setSeason] = useState("");
    const [episode, setEpisode] = useState("");

    function handleNewStoreSubmit(e) {
        e.preventDefault();
        const newStore = {
            name: name, 
            image: image, 
            season: parseFloat(season),
            episode: parseFloat(episode)
        };
        fetch("http://localhost:8085/stores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStore)
        })
        .then(res => res.json())
        .then(newStore => onAddStore(newStore))
        setName("");
        setImage("");
        setSeason("");
        setEpisode("");
    }

    function handleChange(e) {
        const {name, value} = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "image":
                setImage(value);
                break;
            case "season":
                setSeason(value);
                break;
            case "episode":
                setEpisode(value);
                break;
            default:
                break;
        }
    }


    return(
        <form onSubmit={handleNewStoreSubmit} >
            <input type="text" id="name" placeholder="Store Name" onChange={handleChange} value={name} name="name"/>
            <input type="text" id="image" placeholder="Image URL" onChange={handleChange} value={image} name="image"/>
            <input type="number" id="season" placeholder="Season" step="1" onChange={handleChange} value={season} name="season"/>
            <input type="number" id="episode" placeholder="Episode" step="1" onChange={handleChange} value={episode} name="episode"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;