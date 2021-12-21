// Displays the tile
function Tile(props)
{
    const filename = props.value == 0 ? "none" : (props.value > 0 ? "cross" : "circle");
    const path = process.env.PUBLIC_URL + "/img/" + filename + ".png";
    return <button className="Tile" onClick={() => props.func(props.row, props.col)}><img src={path} alt={filename} width="100" height="100" /></button>;
}

export default Tile;