# Câmara Transparente BH
Aplicação web construída com ReactJS que sintetiza informações sobre a atuação dos vereadores a partir dos dados disponibilizados no portal da CMBH.

<p align="center">
  <img alt="Demonstração da interface" src="./demonstracao-interface.gif">
</p>

## O começo
Começou como um trabalho da faculdade em que eu fui o responsável pelo desenvolvimento do protótipo. Na época eu estava muito a fim de aprender mais sobre a biblioteca ReactJS e aproveitei para utiliza-la nesse projeto. Esse é o meu primeiro projeto usando essa tecnologia. Uma [outra aplicação](https://github.com/leoaugustov/camara-transparente-bh-backend) para o backend também faz parte do protótipo construído. Ao fim do semestre, eu decidi continuar com o desenvolvimento pois eu enxergava a possibilidade de agregar algo a sociedade com ele, além de poder usá-lo para constituir meu portifólio.
## Problema
O problema em foco é a falta de informações sobre a atuação dos vereadores da Câmara Municipal de Belo Horizonte. O portal de transparência da CMBH oferece mais dados do que informações, de acordo com os significados dos termos.
## Solução
Construir um sistema capaz de acessar os dados disponíveis no [portal da Câmara Municipal de Belo Horizonte](https://www.cmbh.mg.gov.br/), processa-los e oferecer aos cidadãos da cidade informações sobre a atuação dos vereadores. Os dados trabalhados são os de [Presença Mensal Consolidada](https://www.cmbh.mg.gov.br/transparencia/vereadores/presenca-mensal-consolidada) e [Custeio Parlamentar](https://www.cmbh.mg.gov.br/transparencia/vereadores/custeio-parlamentar).
## Para instalar e rodar o projeto na sua máquina
Um pré-requisito para rodar o projeto em ambiente de desenvolvimento é ter a API utilizada por ele rodando localmente. Para isso, basta seguir os passos listados [aqui](https://github.com/leoaugustov/camara-transparente-bh-backend#para-instalar-e-rodar-o-projeto-na-sua-m%C3%A1quina).
### Clonando o repositório
    $ git clone https://github.com/leoaugustov/camara-transparente-bh-frontend.git
    $ cd camara-transparente-bh-frontend
### Instalando as dependências

    $ npm install
### Rodando o projeto
Altere o IP da máquina no arquivo [.env](https://github.com/leoaugustov/camara-transparente-bh-frontend/blob/master/.env) de acordo com o seu ambiente.

    $ npm start
## Construído com
- [Create React App](https://create-react-app.dev/)
- [React Router](https://reactrouter.com/)
- [react-router-cache-route](https://github.com/CJY0208/react-router-cache-route)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [react-bootstrap-table2](https://react-bootstrap-table.github.io/react-bootstrap-table2/)
- [Chart.js](https://www.chartjs.org/)
- [Font Awesome](https://fontawesome.com/)