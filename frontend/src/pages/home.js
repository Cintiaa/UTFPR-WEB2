import React, { Component } from 'react';
import Calendario from './calendario';

class Home extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Bem Vindo</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="text" name="query" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <a className="btn secondary white btn-lg" href="/eventos">Cadastrar Eventos</a>
                <a className="btn secondary white btn-lg" href="/logout">Logout</a>
            </nav>
        );
    }

    render() {
        return (
            <Calendario />
        );
    }

    onDayClick = (e, day) => {
        alert(day);
    }


    render() {
        return (
            <div className="Home">
                <Calendario width="400px"
                    onDayClick={(e, day) => this.onDayClick(e, day)} />
            </div>
        );
    }

}


export default Home;