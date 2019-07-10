import React from 'react'
import ReactDOM from 'react-dom'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA, CompB} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Pai from './componentes/Pai'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook/>
        {/*<Contador numeroInicial={100}/>*/}
        {/*<ComponenteClasse valor={""}/>*/}
        {/*<Pai/>*/}
        {/*<ComponenteComFuncao/>*/}
        {/*<Familia sobrenome={"Pereira"} numero={123}>*/}
        {/*    <Membro nome={"Andre"} />*/}
        {/*    /!*<Membro nome={"Mariana"} />*!/*/}
        {/*</Familia>*/}
        {/*<MultiElementos/>*/}
        {/*<CompA valor={"Olá, eu sou A!"}/>*/}
        {/*<CompB valor={"B na área!"}/>*/}
        {/*/!*<PrimeiroComponente valor={"Bom dia!"} />*!/*/}
        {/*<FamiliaSilva sobrenome={"Silva Pereira"}/>*/}
    </div>,
    elemento)

// ReactDOM.render(<h1>Olá react 2</h1>, elemento)
