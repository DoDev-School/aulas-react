import { useState } from "react"

const Botao = () => {
    const [soma, setSoma] = useState(0)

    const handle = () => {
        const result = soma + 1
        setSoma(result)
    };

    return (
        <>
            <button onClick={(handle)}>Cliques: {soma}</button>
        </>
    )
}

export default Botao