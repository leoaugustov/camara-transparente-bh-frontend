import React from 'react'

import fotoPadraoVereador from '../../assets/vereador-foto-padrao.png'

function definirDimensaoProporcional(dimensao, proporcao) {
    let multiplicador = Math.max(0, Math.min(1, proporcao))
    return Math.round(dimensao * multiplicador)
}

export default ({ linkFoto, proporcao, classesCss }) => {
    return (
    <picture>
        <source srcSet={ linkFoto }/>
        <img src={ fotoPadraoVereador } 
            alt="Foto do vereador" 
            width={ definirDimensaoProporcional(118, proporcao) } 
            height={ definirDimensaoProporcional(138, proporcao) } 
            className={ `rounded ${classesCss}` }/>
    </picture>
    )
}