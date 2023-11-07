const GameModal = () => {
  const rows = 5
  const columns = 5
  let board = []
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      row.push([])
    }
    board.push(row)
  }
  console.log(board)


  return (
    <div className='absolute z-50 p-5 backdrop-blur-[10px] h-full w-full flex flex-col'>
      <h2 className='mt-[10%] text-center text-2xl'>REACTION TEST</h2>

      <div className="mt-[30%]">
        {board.map((row, row_index) => {
          return (
            <div className="flex gap-3 mb-3" key={Math.random()}>
              {row.map((col, col_index) => {
                return <button className="game-cell" key={Math.random()}>{row_index} {col_index}</button>
              })}
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default GameModal