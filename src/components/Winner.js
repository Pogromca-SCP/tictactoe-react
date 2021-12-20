function Winner(props)
{
    return <h1 className="Winner">{props.value != 0 ? (props.value > 0 ? "Wygrał krzyżyk!" : "Wygrało kółko!") : null}</h1>;
}

export default Winner;