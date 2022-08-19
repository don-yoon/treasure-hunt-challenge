import React from "react"

const ScoreDisplay = (props) => {
  const { scoreBoard } = props
  return (
    <>
      <div className="text-center text-4xl">
            Wins:{scoreBoard[0]} Losses:{scoreBoard[1]}
      </div>
    </>
  )
}

export { ScoreDisplay }