import { useState } from "react"

function Roto() {
    const [contadorLikes, setContadorLikes] = useState(0)

    const darLike = () => {
        setContadorLikes(likes=> likes + 1)   
    }


  return (
    <button onClick={darLike} > likes: {contadorLikes} </button>
  )
}

export default Roto