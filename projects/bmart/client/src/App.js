import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Auth from './components/authentication/index.js'
import Welcome from './Welcome.js'
import { withUser } from './context/UserProvider.js'
import Navbar from './components/navbarComponents/Navbar.js'
import ProtectedRoute from './components/authentication/protectedRoute.js'
import Art from './components/artComponents/Art.js'
import Prep from './components/prepComponents/Prep.js'

const App = (props) => {
    const { token, user } = props
    return (
        <div>
            <div>
            {token && <Navbar/>}
            </div>
            <Switch>
                <Route exact path = '/' render = {rProps => !token ? 
                                                            <Auth {...rProps}/>  :
                                                            <Redirect to = '/welcome'/>
                                                            }/> 
                <Route path = '/welcome' render = {rProps => token ? 
                                                            <Welcome {...rProps}/> :
                                                            <Redirect to = '/'/>
                                                            }/>
                <ProtectedRoute
                    token={token}
                    exact path="/art"
                    component={Art}
                    redirectTo="/auth"
                    user={user}
                />

                <ProtectedRoute
                    token={token}
                    exact path="/prep"
                    component={Prep}
                    redirectTo="/auth"
                    user={user}
                />
                

            </Switch>
        </div>
    )
}

export default withUser(App)