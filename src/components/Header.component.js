import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink
                        to={'/'}
                        className="navbar-brand"
                        exact
                        style={{ display: 'inline-flex' }}
                    >
                        <img
                            src={logo}
                            className="App-logo"
                            alt="logo"
                            style={{ height: 25 + 'px' }}
                        />{' '}
                        <label>React</label>
                    </NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink to={'/'} exact activeStyle={{ color: 'deepskyblue' }}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/game'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Game
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/componentCommunication'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Component Communication
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/users'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/fragments'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Fragments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/life-cycle'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Life Cycle
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/pure-components'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Pure Components
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/refs'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Refs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/prop-types'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Prop types
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/redux'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Redux
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/context-api'}
                            exact
                            activeStyle={{ color: 'deepskyblue' }}
                        >
                            Context API
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;
