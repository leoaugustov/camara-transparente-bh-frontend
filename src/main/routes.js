import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Dashboard from './componentes/Dashboard'
import PerfilVereador from './componentes/PerfilVereador'
import PaginaNaoEncontrada from './componentes/PaginaNaoEncontrada'

  export default () => {
      return (
          <Switch>
              <Route exact path="/" component={ Dashboard }/>
              <Route path="/perfil-vereador/:id" render={ props => {
                  if(props.location.state) {
                      return <PerfilVereador/>
                  }else {
                      return <Redirect to="/"/>
                  }
              } }/>
              <Route path="*" component={ PaginaNaoEncontrada }/>
          </Switch>
      )
  }