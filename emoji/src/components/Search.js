import { useState } from "react"
import ListEmoji from "./ListEmoji";
import './search.css'
export default function (){

const [search, setSearch] = useState('') 

function handlerChange(e) {
     const newSearch = e.target.value;
     setSearch(newSearch);
}

    return (
    <div className="appContainer">
    <h1>Search Emojis !</h1>
    <input type='text' placeholder="Emoji..." onChange={handlerChange}></input>
    <ListEmoji search={search}/>
    </div>);

}