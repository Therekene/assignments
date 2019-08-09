import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Auth from './components/Auth'
import Profile from './components/Profile'
import { withUser } from './context/UserProvider.js'

const App = (props) => {
    const { token, user, logout } = props
    return (
        <div>
            { token && <button onClick={logout}>Logout</button> }
            <Switch>
                <Route exact path="/"  render={rProps => !token ?
                                                    <Auth {...rProps}/> :
                                                    <Redirect to="/profile"/>
                                                }/>
                <Route path="/profile" render={rProps => token ?
                                                    <Profile {...rProps} {...user}/> :
                                                    <Redirect to="/"/>
                                                }/>
            </Switch>
        </div>
    )
}

export default withUser(App)