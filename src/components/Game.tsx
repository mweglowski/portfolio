import { useEffect, useState } from 'react';
import Backdrop from './UI/Backdrop';
import { useTimerContext } from '../store/timer-context';

type GameProps = {
  onDisplayChange: () => void;
}

type CordsState = {
  row_index: number;
  col_index: number;
}

const Game = ({ onDisplayChange }: GameProps) => {
  const { startTime, setStartTime } = useTimerContext();

  const rows = 5
  const columns = 5

  const [cords, setCords] = useState<CordsState>({ row_index: 0, col_index: 0 });
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [correctHit, setIsCorrectHit] = useState<boolean>(false);
  const [isWinNotificationDisplayed, setWinNotificationDisplay] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>()

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
    setIsRunning(true);
    setStartTime(new Date());

    const row_index = Math.round(Math.random() * (rows - 1))

    const col_index = Math.round(Math.random() * (columns - 1))

    setCords({
      row_index: row_index, col_index: col_index
    })
    // random delay
    console.log('cords to hit ', row_index, col_index)
  }

  const checkCords = (row_index: number, col_index: number) => {
    return cords.row_index === row_index && cords.col_index === col_index
  }

  const checkAim = (row_index: number, col_index: number) => {
    // STOP GAME, CHECK RESULT
    setIsRunning(false);

    const currentTime = new Date()
    const delay = (currentTime.getSeconds() * 1000 + currentTime.getMilliseconds()) - (startTime.getSeconds() * 1000 + startTime.getMilliseconds())
    setDelay(delay)

    // NOTIFICATE IF USER WON
    setWinNotificationDisplay(true);

    if (checkCords(row_index, col_index)) {
      console.log('CORRECT HIT!')
      setIsCorrectHit(true);
    } else {
      console.log('BAD AIM...')
      setIsCorrectHit(false);
    }
  }

  return (
    <Backdrop>
      <div className='flex flex-col gap-5'>
        <h2 className='mt-[10%] text-center text-2xl'>AIM & REACTION TEST</h2>

        {/* WIN / LOSE NOTIFICATION */}
        <div className={`mx-auto text-xl ${!isWinNotificationDisplayed && 'opacity-0'}`}>
          {correctHit ? <p className='text-cyan-500'>Excellent aim!</p> : <p className=' text-rose-500 text-shadow-md'>Wrong cell!</p>}
          <p className={`${correctHit ? 'text-center text-2xl text-slate-400' : 'opacity-0'}`}>{delay}ms</p>
        </div>

        {/* BOARD */}
        <div className='mx-auto'>
          {board.map((row, row_index) => {
            return (
              <div className="flex gap-3 mb-3" key={row_index}>
                {row.map((col, col_index) => {
                  return (
                    <button
                      style={checkCords(row_index, col_index) && isRunning ? { background: 'orange', boxShadow: '0 0 .5em orange' } : {}}
                      className={`game-cell`}
                      key={row_index + col_index}
                      onClick={() => {
                        if (!isRunning) return
                        checkAim(row_index, col_index)
                      }}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>

        <button className={`card text-xl w-fit mx-auto mt-10 py-2 px-16 button-hover ${isRunning && 'opacity-0'}`} onClick={startGame}>Start</button>
      </div>

      <button className='card text-lg w-fit mx-auto mt-10 py-2 px-6 button-hover' onClick={onDisplayChange}>Back</button>

    </Backdrop>
  )
}

export default Game