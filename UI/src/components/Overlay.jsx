import React from 'react'

export function Overlay({ toggleOverlay }) {
    // function toggleOverlay(){
    //   setOverlay(prev=>!prev)
    // }
    return (
      <div
        className=" backdrop-blur-md h-full w-full fixed inset-0 z-20 cursor-pointer"
        onClick={toggleOverlay}
      ></div>
    );
  }

// export default Overlay