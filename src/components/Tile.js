// Displays the tile
function Tile(props)
{
    const path = process.env.PUBLIC_URL + "/img/" + (props.value == 0 ? "none.png" : (props.value > 0 ? "cross.png" : "circle.png"));
    return <button className="Tile" onClick={() => props.func(props.row, props.col)}><img src={path} width="100" height="100" /></button>;
}

export default Tile;