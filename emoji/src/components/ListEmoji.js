import emojiData from "../emojiList/emojis.json"
import { isValidElement, useEffect,useState } from 'react';
import Emoji from './Emoji';
import "./listEmojis.css"

export default function ({search}){

const [emoji, setEmojis] = useState(emojiData)
const [filtro, setFiltro] = useState('');

useEffect(()=>{
    const newArrayEmojis = emojiData.filter(item => item.description.toLowerCase().includes(search.toLowerCase()));
    setEmojis(newArrayEmojis);
},[search])

useEffect(()=>{
    const newArrayEmojisWithFilter = emojiData.filter(item => item.category.toLowerCase().includes(filtro.toLowerCase()));
    setEmojis(newArrayEmojisWithFilter);
},[filtro])

return (<div className='listEmojis'>
        {emoji.map(item => <Emoji unEmoji={item} />)}
        </div>);

}

