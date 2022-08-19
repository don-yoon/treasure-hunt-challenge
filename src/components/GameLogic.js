const boardGenerator = () => {
  let initialBoard = [["🌴","🌴","🌴"],["🌴","🌴","🌴"],["🌴","🌴","🌴"]]
  let treasure = [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)]
  let trap = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]
  if(treasure === trap){
    while(treasure == trap){
      trap = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]
    }
  }
  initialBoard[treasure[0]][treasure[1]] = "💰"
  initialBoard[trap[0]][trap[1]] = "💥"

  return initialBoard
}

export { boardGenerator }