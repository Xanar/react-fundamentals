import React from 'react';
import Header from './Header.component.js';
import { Route } from 'react-router-dom';
import Game from './Game.component';
import Home from './Home.component';
import Communication from './Communication.component';
import Users from './Users.component';
import Fragments from './Fragments.component';
import LifeCycle from './LifeCycle.component';
import PureComponent from './PureComponents.component';
import Refs from './Refs.component';
import PropTypesComponent from './PropTypes.component';
import ReduxComponent from './Redux.component';
import ContextApi from './ContextApi.component';

function Root() {
    return (
        <React.Fragment>
            <div className="row">
                <div
                    className="col-xs-11"
                    style={{ 'marginLeft': '4.33333%' }}
                >
                    <Header />
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Route path="/" exact strict component={Home} />
                        <Route path="/game" exact strict component={Game} />
                        <Route
                            path="/componentCommunication"
                            exact
                            strict
                            component={Communication}
                        />
                        <Route path="/users" exact strict component={Users} />
                        <Route
                            path="/fragments"
                            exact
                            strict
                            component={Fragments}
                        />
                        <Route
                            path="/life-cycle"
                            exact
                            strict
                            component={LifeCycle}
                        />
                        <Route
                            path="/pure-components"
                            exact
                            strict
                            component={PureComponent}
                        />
                        <Route path="/refs" exact strict component={Refs} />
                        <Route
                            path="/prop-types"
                            exact
                            strict
                            component={PropTypesComponent}
                        />
                        <Route
                            path="/redux"
                            exact
                            strict
                            component={ReduxComponent}
                        />
                        <Route
                            path="/context-api"
                            exact
                            strict
                            component={ContextApi}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Root;
