import React from "react"
import { Switch, Route } from "react-router-dom"
import Dashboard from './componentes/Dashboard'
import PerfilVereador from './componentes/PerfilVereador'

  export default () => {
      return (
          <Switch>
              <Route exact path="/" component={ Dashboard }/>
              <Route path="/perfil-vereador/:id" component={ PerfilVereador }/>
          </Switch>
      )
  }