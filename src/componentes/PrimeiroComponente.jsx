import React from 'react'

let legal = true

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <h2>Legal? {legal ? 'Sim' : 'Não'}</h2>
    </div>

// export default () =>
//     <div>
//         <h1>Primeiro componente (Arrow)!</h1>
//     </div>

// }export default function (){
//     return <h1>Primeiro componente!</h1>
// }



// function primeiro(){
//     return <h1>Primeiro componente!</h1>
// }
//
// export default primeiro
