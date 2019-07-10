/** Outra forma de importar os componentes e declarar a classe
 import React from 'react'

 export default classe ComponenteClasse extends from React.Component {

 }
 * */

import React, {Component} from 'react'

export default class ComponenteClasse extends Component {
    render(){
        return (
            <h1>{this.props.valor || 'Valor padrão'}</h1>
        )
    }
}




