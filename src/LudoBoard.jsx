import React, { useState } from 'react'

function LudoBoard() {

    const [moves, setMoves] = useState({
        blue: 0, red: 0, yellow: 0, green: 0
    });


    let updateBlue = () => {
        moves.blue +=1;
        setMoves({...moves});
    }

    let updateYellow = () => {
        moves.yellow +=1;
        setMoves({...moves});
    }
    let updateGreen = () => {
        moves.green +=1;
        setMoves({...moves});
    }
    let updateRed = () => {
        moves.red +=1;
        setMoves({...moves});
    }



    return (
        <div>
            <h3>
                Game Begins!
            </h3>

            <div className='board'>
                <p>Blue moves = {moves.blue} </p>
                <button style = {{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style = {{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style = {{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style = {{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}

export default LudoBoard;