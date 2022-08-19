import React from "react"

const Square = (props) => {
  const { board, handleClick } = props

  return (
    <div className="m-5">
      {
        board.map((row, rowIndex) => {
          return(
            <div key={rowIndex} className="flex flex-row justify-center">
              {
                row.map((rowElement, colIndex) => {
                  return(
                    <div key={colIndex} className="flex items-center justify-center w-[20vh] h-[20vh] text-8xl border-2 border-black m-1" onClick={(e) => handleClick(e, rowIndex, colIndex)}>
                      <div>
                        {rowElement}
                      </div>
                            
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export { Square }