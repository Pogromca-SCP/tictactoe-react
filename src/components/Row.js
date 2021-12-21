import Tile from "./Tile";

// Handles the row
function Row(props)
{
    const tiles = props.range.map(x => <Tile value={props.value[x]} func={props.func} row={props.row} col={x} />);

    return (
        <div>
            {tiles}
        </div>
    );
}

export default Row;