import React from "react"
import { Route, Redirect } from "react-router-dom"
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import Dashboard from './componentes/Dashboard'
import PerfilVereador from './componentes/PerfilVereador'
import PaginaNaoEncontrada from './componentes/PaginaNaoEncontrada'

  export default () => {
      return (
          <CacheSwitch>
              <CacheRoute exact path="/" component={ Dashboard }/>
              <Route path="/perfil-vereador/:id" render={ props => {
                  if(props.location.state) {
                      return <PerfilVereador/>
                  }else {
                      return <Redirect to="/"/>
                  }
              } }/>
              <Route path="*" component={ PaginaNaoEncontrada }/>
          </CacheSwitch>
      )
  }