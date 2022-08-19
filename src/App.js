import React, { useEffect, useState } from "react"
import { boardGenerator } from "./components/GameLogic"
import { Square } from "./components/Square"
import { ScoreDisplay } from "./components/ScoreDisplay"

const App = () => {
  const [board, setBoard] = useState([["?","?","?"],["?","?","?"],["?","?","?"]])
  const [win, setWin] = useState(0)
  const [randomBoard,setRandomBoard] = useState([])
  const [scoreBoard, setScoreBoard] = useState([0, 0])
    
  const handleClick = (rowIndex, colIndex) => {
    if(win===0){
      let updateBoard = [...board]
      updateBoard[rowIndex][colIndex] = randomBoard[rowIndex][colIndex]
      setBoard(updateBoard)
      
      if(board[rowIndex][colIndex] === "💥") {
        alert("TRY AGAIN")
        setWin(2)
        let score = [...scoreBoard]
        score[1] = score[1] + 1
        setScoreBoard(score)
      }
      
      if(board[rowIndex][colIndex] === "💰") {
        alert("YOU WIN")
        setWin(1)
        let score = [...scoreBoard]
        score[0] = score[0] + 1
        setScoreBoard(score)
      }
    }
  }

  const handleReset = () => {
    setBoard([["?","?","?"],["?","?","?"],["?","?","?"]])
    setWin(0)
  }

  useEffect(() => {
    setRandomBoard(boardGenerator())
  },[win])

  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <div className="text-center text-5xl">
        Treasure Hunt App
        </div>
        <div>
          <Square board={board} handleClick={handleClick}/>
        </div>
        <div className="m-5 border-2 border-black">
          <button className="m-4 text-2xl" onClick={handleReset}>RESET</button>
        </div>
        <div>
          <ScoreDisplay scoreBoard={scoreBoard}/>
        </div>
      </div>

    </>
  )
}
export default App
