import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useAuthContext } from './context/authContext'

import Login from './pages/Login/Login'
import Books from './pages/Books/Books'
import Modal from './pages/Modal/Modal'

function CustomRoute({ isPrivate, ...rest }) {
    const { authenticate, loading } = useAuthContext()

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (isPrivate && !authenticate) {
        return <Redirect to='/login' />
    }

    if (!isPrivate && authenticate) {
        return <Redirect to='/' />
    }

    return <Route {...rest} />
}

function Router() {
    let location = useLocation()
    let background = location.state && location.state.background
    return (
        <>
            <Switch location={background || location}>
                <CustomRoute exact path="/login" component={Login} />
                <CustomRoute isPrivate exact path="/" component={Books} />
            </Switch>
            <CustomRoute isPrivate path="/book/:id" component={Modal} />
        </>
    )
}

export default Router