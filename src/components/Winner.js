// Displays the winner
function Winner(props)
{
    return <h1 className="Winner">{props.value != 0 ? (props.value > 0 ? "Wygrał krzyżyk!" : "Wygrało kółko!") : "_"}</h1>;
}

export default Winner;