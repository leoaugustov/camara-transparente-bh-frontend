import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

import './Tabela.css'

export default function Tabela({ colunaChave, colunas, dados, mensagemColecaoVazia, classesCssElementoWrapper }) {
    function colunasComAtributosPadrao() {
        return colunas.map(coluna => {
            return { ...coluna, headerClasses: 'Tabela-titulo-coluna text-nowrap', classes: 'align-middle' }
        })
    }
    
    return (
        <BootstrapTable 
            keyField={ colunaChave } 
            data={ dados } 
            columns={ colunasComAtributosPadrao() } 
            bootstrap4 
            bordered={ false } 
            noDataIndication={ () => mensagemColecaoVazia } 
            wrapperClasses={ "table-responsive ".concat(classesCssElementoWrapper).trim() } 
            classes="mb-0"/>
    )
}