import Tile from "./Tile";

function Row(props)
{
    return (
        <div>
            <Tile value={props.value[0]} func={props.func} row={props.row} col="0" />
            <Tile value={props.value[1]} func={props.func} row={props.row} col="1" />
            <Tile value={props.value[2]} func={props.func} row={props.row} col="2" />
        </div>
    );
}

export default Row;