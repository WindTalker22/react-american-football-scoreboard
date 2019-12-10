import React from 'react'

const Score = (theEvilProps) => {

  console.log(theEvilProps)

  return (
    <>
      <div className={theEvilProps.firstClassName}>
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className={`${theEvilProps.firstClassName}${theEvilProps.secondClassName}`}
          onClick={theEvilProps.homeScore}>
          {theEvilProps.side} Touchdown

          </button>
        <button className={`${theEvilProps.firstClassName}${theEvilProps.thirdClassName}`}
          onClick={theEvilProps.homeFgClick}>
          {theEvilProps.side} Field Goal
            </button>
      </div>
    </>
  );
}


export default Score