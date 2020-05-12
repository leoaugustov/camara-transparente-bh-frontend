import React from 'react'
import Card from 'react-bootstrap/Card'
import Tabela from './Tabela'

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
                        <source srcSet={ linha.linkFoto }/>
                        <img src={ fotoPadraoVereador } alt="Foto do vereador" width="40" height="47" className="mr-1 rounded"/>
                    </picture>
                    <span>{ linha.nome }</span>
                </div>
            )
        },
        sort: true
    }, {
        dataField: 'estatisticasPresencas.frequencia',
        text: 'Frequência',
        formatter: (celula, linha, indiceLinha, extra) => extra.formato.format(celula),
        formatExtraData: {formato: formatoPorcentagem},
        align: 'center',
        sort: true
    }, {
        dataField: 'estatisticasPresencas.presencas',
        text: 'Presenças',
        align: 'center',
        sort: true
    }, {
        dataField: 'estatisticasPresencas.faltas',
        text: 'Faltas',
        align: 'center',
        sort: true
    }, {
        dataField: 'estatisticasPresencas.ausenciasJustificadas',
        text: 'Ausências Justificadas',
        align: 'center',
        sort: true
    }, {
        dataField: 'estatisticasPresencas.licencasNaoRemuneradas',
        text: 'Licenças não Remuneradas',
        align: 'center',
        sort: true
    }, {
        dataField: 'maiorCusteioMensal',
        text: 'Maior Custeio Mensal',
        formatter: (celula, linha, indiceLinha, extra) => extra.formato.format(celula),
        formatExtraData: {formato: formatoMonetario},
        align: 'center',
        sort: true
    }, {
        dataField: 'custeioTotal',
        text: 'Custeio Total',
        formatter: (celula, linha, indiceLinha, extra) => extra.formato.format(celula),
        formatExtraData: {formato: formatoMonetario},
        align: 'center',
        sort: true
    }]

    return (
    <Card className="shadow mb-3">
        <Card.Body className="p-0 py-2">
            <Tabela 
                colunaChave="id" 
                colunas={ colunas } 
                dados={ vereadores } 
                mensagemColecaoVazia="Nenhum vereador encontrado..." 
                classesCssElementoWrapper="altura-tabela-vereadores"/>
        </Card.Body>
    </Card>
    )
}