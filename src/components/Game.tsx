import { useEffect, useState } from 'react';
import Backdrop from './UI/Backdrop';

type GameProps = {
  onDisplayChange: () => void;
}

type CordsState = {
  row_index: number;
  col_index: number;
}

const Game = ({ onDisplayChange }: GameProps) => {
  const rows = 5
  const columns = 5

  const [cords, setCords] = useState<CordsState>({ row_index: 0, col_index: 0 });
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  let board = []
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      row.push([])
    }
    board.push(row)
  }
  // console.log(board)

  const startGame = () => {
    setGameStarted(true);

    setCords({
      row_index: Math.round(Math.random() * rows),
      col_index: Math.round(Math.random() * columns),
    })
    // set new cords
    // random delay
    // update color in button
    console.log('started')
  }

  const checkCords = (row_index: number, col_index: number) => {
    return cords.row_index === row_index && cords.col_index === col_index
  }

  const checkAim = (row_index: number, col_index: number) => {
    if (checkCords(row_index, col_index)) {
      console.log('CORRECT HIT!')
    } else {
      console.log('BAD AIM...')
    }
  }

  return (
    <Backdrop>
      <div className='flex flex-col'>
        <h2 className='mt-[10%] text-center text-2xl'>AIM & REACTION TEST</h2>

        {/* BOARD */}
        <div className="mt-[30%]">
          {board.map((row, row_index) => {
            return (
              <div className="flex gap-3 mb-3" key={Math.random()}>
                {row.map((col, col_index) => {
                  return (
                    <button
                      style={checkCords(row_index, col_index) && gameStarted ? { background: 'orange', boxShadow: '0 0 .5em orange' } : { background: '' }}
                      className={`game-cell ${checkCords(row_index, col_index) ? 'bg-amber-500' : null}`}
                      key={Math.random()}
                      onClick={() => {checkAim(row_index, col_index)}}
                    >
                      {row_index} {col_index}
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>

        <button className='card text-xl w-fit mx-auto mt-10 py-2 px-16 button-hover' onClick={startGame}>Start</button>
      </div>

      <button className='card text-lg w-fit mx-auto mt-10 py-2 px-6 button-hover' onClick={onDisplayChange}>Back</button>

    </Backdrop>
  )
}

export default Game