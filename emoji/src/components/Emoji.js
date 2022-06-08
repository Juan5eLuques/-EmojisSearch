import './emoji.css'

function Emoji ({unEmoji}){
    return (
        <div className="container">
            <h3>{unEmoji.emoji}</h3>
            <h5>{unEmoji.description}</h5>
        </div>
    )
}

export default function ({unEmoji}){
    return <Emoji unEmoji={unEmoji}/>
}