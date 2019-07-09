import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB} from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Familia sobrenome={"Pereira"}>
            <Membro nome={"Andre"} />
            <Membro nome={"Mariana"} />
        </Familia>
        {/*<MultiElementos/>*/}
        {/*<CompA valor={"Olá, eu sou A!"}/>*/}
        {/*<CompB valor={"B na área!"}/>*/}
        {/*/!*<PrimeiroComponente valor={"Bom dia!"} />*!/*/}
        <FamiliaSilva/>
    </div>,
    elemento)






// ReactDOM.render(<h1>Olá react 2</h1>, elemento)
