import React from "react";
import Winner from "./Winner";
import Head from "./Head";
import Row from "./Row";

// Checks if the game should end
function isGameEnded(grid, row, col, turn)
{
    const cl = checkCol(grid, col, turn);
    const rw = checkRow(grid, row, turn);
    const cr = row == col ? checkCross(grid, turn) : (grid.length - 1 - row == col ? checkRev(grid, turn) : false);
    return cl || rw || cr;
}

// Verifies column
function checkCol(grid, col, turn)
{
    for (let i = 0; i < grid.length; ++i)
    {
        if (grid[i][col] != turn)
        {
            return false;
        }
    }

    return true;
}

// Verifies row
function checkRow(grid, row, turn)
{
    for (let i = 0; i < grid[row].length; ++i)
    {
        if (grid[row][i] != turn)
        {
            return false;
        }
    }

    return true;
}

// Verifies reversed cross
function checkRev(grid, turn)
{
    const len = grid.length - 1;

    for (let i = 0; i < grid.length; ++i)
    {
        if (grid[len - i][i] != turn)
        {
            return false;
        }
    }

    return true;
}

// Verifies cross
function checkCross(grid, turn)
{
    for (let i = 0; i < grid.length; ++i)
    {
        if (grid[i][i] != turn)
        {
            return false;
        }
    }

    return true;
}

// Handles main game logic
class Game extends React.Component
{
    state = {
        gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        turn: 1,
        winner: 0
    }

    render()
    {
        const resetGame = () => {
            this.setState({
                gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
                turn: 1,
                winner: 0
            });
        }

        const updateGame = (row, col) => {
            if (this.state.winner != 0)
            {
                return;
            }

            let grid = this.state.gameState;
            const tmp = grid[row][col];

            if (tmp != 0)
            {
                return;
            }

            grid[row][col] = this.state.turn;
            this.setState({
                gameState: grid
            });

            if (isGameEnded(grid, row, col, this.state.turn))
            {
                this.setState({
                    winner: this.state.turn
                });
            }
            else
            {
                this.setState({
                    turn: this.state.turn * -1
                });
            }
        }

        const range = [0, 1, 2];
        const rows = range.map(x => <Row value={this.state.gameState[x]} func={updateGame} row={x} range={range} />);
        
        return (
            <div>
                <Winner value={this.state.winner} />
                <Head value={this.state.turn} />
                {rows}
                <button className="Reset" onClick={resetGame}>Reset</button>
            </div>
        );
    }
}

export default Game;