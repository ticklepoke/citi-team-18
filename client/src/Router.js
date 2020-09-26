import React, { Fragment } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/Login";
import Transaction from "./components/Transaction";
import ProtectedRoute from "./ProtectedRoute";

function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={(props) => (
                        <Fragment>
                            {/* can have some login for auth checking here */}
                            <Redirect to="/login" {...props} />
                        </Fragment>
                    )}
                />

                <Route
                    path="/login"
                    exact
                    render={(props) => (
                        <Fragment>
                            <Login {...props} />
                        </Fragment>
                    )}
                />
                <ProtectedRoute
                    path="/transaction"
                    exact
                    render={(props) => (
                        <Fragment>
                            <Transaction {...props} />
                        </Fragment>
                    )}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
