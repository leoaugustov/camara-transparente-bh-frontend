import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import Card from 'react-bootstrap/Card'

import './TabelaVereadores.css'
import fotoPadraoVereador from '../../imagens/vereador-foto-padrao.png'

export default function TabelaVereadores({ vereadores }) {
    const formatoMonetario = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
    const formatoPorcentagem = new Intl.NumberFormat('pt-BR', {style: 'percent', maximumFractionDigits: 2})

    const colunas = [{
        dataField: 'nome',
        text: 'Nome',
        formatter: (celula, linha) => {
            return (
                <div className="text-nowrap">
                    <picture>
                        <source srcSet={ linha.foto }/>
                        <img src={ fotoPadraoVereador } alt="Foto do vereador" width="40" height="47" className="mr-1 rounded"/>
                    </picture>
                    <span>{ linha.nome }</span>
                </div>
            )
        }
    }, {
        dataField: 'frequencia',
        text: 'Frequência',
        formatter: (celula, linha, indiceLinha, extra) => extra.formato.format(celula),
        formatExtraData: {formato: formatoPorcentagem},
        align: 'center'
    }, {
        dataField: 'quantidadeFaltas',
        text: 'Faltas',
        align: 'center'
    }, {
        dataField: 'quantidadeAusenciasJustificadas',
        text: 'Ausências Justificadas',
        align: 'center'
    }, {
        dataField: 'maiorCusteioMensal',
        text: 'Maior Custeio Mensal',
        formatter: (celula, linha, indiceLinha, extra) => extra.formato.format(celula),
        formatExtraData: {formato: formatoMonetario},
        align: 'center'
    }, {
        dataField: 'custeioTotal',
        text: 'Custeio Total',
        formatter: (celula, linha, indiceLinha, extra) => extra.formato.format(celula),
        formatExtraData: {formato: formatoMonetario},
        align: 'center'
    }]

    colunas.forEach(coluna => {
        coluna.sort = true
        coluna.headerClasses = 'titulo-coluna text-nowrap'
        coluna.classes = 'align-middle'
    })

    return (
        <Card className="shadow mb-3">
            <Card.Header className="titulo-cartao">Vereadores</Card.Header>
            <Card.Body className="p-0">
                <BootstrapTable 
                    keyField="id" 
                    data={ vereadores } 
                    columns={ colunas } 
                    bootstrap4 
                    bordered={ false } 
                    noDataIndication={ () => "Nenhum vereador encontrado..." } 
                    wrapperClasses="table-responsive" 
                    classes="mb-0"/>
            </Card.Body>
        </Card>
    )    
}