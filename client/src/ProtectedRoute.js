import React from "react";
import { Route, Redirect } from "react-router-dom";

const loadToken = () => {
    try {
        const serializedToken = JSON.parse(sessionStorage.getItem("token"));
        if (serializedToken == null) {
            return undefined;
        } else {
            return serializedToken;
        }
    } catch (err) {
        return undefined;
    }
};

export const saveToken = (token) => {
    try {
        const serializedToken = JSON.stringify(token);
        sessionStorage.setItem("token", serializedToken);
    } catch (err) {
        return undefined;
    }
};

export const clearToken = () => {
    try {
        sessionStorage.removeItem("token");
    } catch (err) {
        return undefined;
    }
};

export default function ProtectedRoute({ render: Component, ...rest }) {
    const token = loadToken();
    // const token = true;

    return (
        <Route
            {...rest}
            render={(props) =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/" }} />
                )
            }
        ></Route>
    );
}
