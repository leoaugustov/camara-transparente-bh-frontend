import React from 'react'
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import FotoVereador from './FotoVereador'
import AnimacaoCarregamento from './AnimacaoCarregamento'
import Tabela from './Tabela'
import { formatoMonetario, formatoPorcentagem } from '../formatos'

import './TabelaVereadores.css'

export default function TabelaVereadores({ vereadores, carregando }) {
    const colunas = [{
        dataField: 'nome',
        text: 'Nome',
        formatter: (celula, linha) => {
            return (
                <div className="text-nowrap">
                    <Link to={ 
                        {
                            pathname: `/perfil-vereador/${linha.id}`, 
                            state: linha
                        } 
                    } className="link">
                        <FotoVereador linkFoto={ linha.linkFoto } proporcao="0.339"/>
                        <span className="ml-1">{ linha.nome }</span>
                    </Link>
                </div>
            )
        },
        sort: true
    }, {
        dataField: 'estatisticasPresencas.frequencia',
        text: 'Frequência',
        formatter: (celula, linha, indiceLinha, extra) => extra.formato.format(celula),
        formatExtraData: {formato: formatoPorcentagem},
        sort: true
    }, {
        dataField: 'estatisticasPresencas.presencas',
        text: 'Presenças',
        sort: true
    }, {
        dataField: 'estatisticasPresencas.totalAusencias',
        text: 'Total de Ausências',
        sort: true
    }, {
        dataField: 'custeioTotal',
        text: 'Custeio Total',
        formatter: (celula, linha, indiceLinha, extra) => extra.formato.format(celula),
        formatExtraData: {formato: formatoMonetario},
        sort: true
    }]

    return (
    <Card className="shadow mb-3">
        <Card.Body className={ "p-0 py-2 " + (carregando ? "d-flex justify-content-center" : "") }>
            { carregando 
                ? <AnimacaoCarregamento/> 
                : <Tabela colunaChave="id" colunas={ colunas } dados={ vereadores } 
                    mensagemColecaoVazia="Nenhum vereador encontrado..." 
                    classesCssElementoWrapper="TabelaVereadores-altura-tabela-vereadores"/>
            }
        </Card.Body>
    </Card>
    )
}