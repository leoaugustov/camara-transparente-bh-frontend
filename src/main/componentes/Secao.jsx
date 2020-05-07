import React from 'react'
import './Secao.css'

export default function Secao(props) {
    return (
    <div className="pt-3">
        <h3 className="titulo-secao">{ props.titulo }</h3>
        <div>
            { props.children }
        </div>
    </div>
    )
}