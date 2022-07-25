import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const AuthRedirectComponent = (Component) => {
    const Redirect = (props) => {
        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }
    
    const ConnectedRedirectComponents = connect(mapStateToProps)(Redirect)

    return ConnectedRedirectComponents
}

