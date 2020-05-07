import React, { useState, useRef, useEffect } from 'react'
import Chart from 'chart.js'
import Card from 'react-bootstrap/Card'

export default function CusteioPorPartido() {
    const canvasGrafico = useRef()
    const [, setGrafico] = useState([])

    useEffect(() => {
        const formatoMonetario = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
        
        const options = {
            responsive: true, 
            maintainAspectRatio: false,
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        const partido = data.labels[tooltipItem.index]
                        const valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                        
                        return `${partido}: ${formatoMonetario.format(valor)}`
                    }
                }
            }
        }

        fetch('http://localhost:8080/api/custeio-parlamentar/por-partido')
            .then(resposta => resposta.json())
            .then(estruturarDados)
            .then(dados => {
                setGrafico(new Chart(canvasGrafico.current, {
                    type: 'doughnut',
                    data: dados,
                    options
                }))
            })
    }, [])

    function estruturarDados(custeioPorPartido) {
        const cores = [
            'red',
            'indigo',
            'green',
            'orange',
            'pink',
            'blue',
            'lightgreen',
            'palevioletred',
            '#363F46',
            'lightblue',
            'lime',
            'brown',
            'purple',
            'cyan',
            'yellow',
            'grey',
            'teal',
            'coral'
        ]

        const labels = []
        const data = []

        for(let partido of custeioPorPartido) {
            if(partido.custeio > 0) {
                labels.push(partido.siglaPartido)
                data.push(partido.custeio)
            }    
        }

        return {
            labels, 
            datasets: [{ 
                data, 
                backgroundColor: cores
            }]
        }
    }

    return (
    <Card className="shadow mb-3">
        <Card.Body>
            <div style={ { height: '350px' } }>
                <canvas ref={ canvasGrafico }></canvas>
            </div> 
        </Card.Body>
    </Card>
    )
}