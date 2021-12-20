function Head(props)
{
    return <h1 className="Head">{props.value > 0 ? "Tura krzyżyka:" : "Tura kółka:"}</h1>;
}

export default Head;