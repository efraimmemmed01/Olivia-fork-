import React from 'react'

const Coxsatilan = (props) => {
  if (props.data) {
    return (
      <div>
        <div class="absolute -top-[15px] w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold text-center">
          Çox<br />satılan
          <div class="absolute -top-1 -right-1 bg-pink-400 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
            ⚡
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <>
      </>

    )
  }
}

export default Coxsatilan