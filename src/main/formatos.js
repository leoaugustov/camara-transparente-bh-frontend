const formatoData = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})

const formatoMonetario = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

const formatoPorcentagem = new Intl.NumberFormat('pt-BR', {style: 'percent', maximumFractionDigits: 2})

export { formatoData, formatoMonetario, formatoPorcentagem }