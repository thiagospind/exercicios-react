import React from 'react'
import { filhosComProps } from "../utils/utils";

export default props =>
    <div>
        <h1>Família</h1>
        {filhosComProps(props)}

        {/* Forma mais utilizada para criar um componente, utilizando spread {...props}*/}
        {/*{React.cloneElement(props.children, {...props})}*/}
        {/*Forma menos usada para clonar o componente*/}
        {/*{React.cloneElement(props.children, {props})}*/}
        {/*{React.cloneElement(props.children,*/}
        {/*    { sobrenome: props.sobrenome })}*/}
        {/*{props.children}*/}
    </div>