import { useRef, useEffect } from "react";

function UseRef() {
  // 1. create useRef
  const inputRef = useRef(null)
  
  // 2. focus on inputRef element
  useEffect(() => {
    inputRef.current.focus()
  },[])

  return ( 
    <>
      <form>
        {/* 3. assign refference tp JSX*/}
        <input ref={inputRef} />
      </form>
    </>
   );
}

export default UseRef;