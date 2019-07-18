import React, { Component } from 'react';
import Calendario from './calendario';
import api from '../services/api';

class Home extends Component {

    state = {
        query: '',
        list: []
    }

    getEventos = () => {
        api.get('/search').then(({ data }) => {
            this.setState({
                results: data.data
            })
        })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query % 2 === 0) {
                    this.getEventos()
                }
            }
        })
    }

    handleLogOut = async e => {

        localStorage.removeItem('token');
        this.props.history.push('/');

    }

    onDayClick = (e, day) => {

        alert(day);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand">Bem Vindo</a>
                    <form className="form-inline">
                        <input ref={input => this.search = input}
                            onChange={this.handleInputChange}
                            className="form-control mr-sm-2" type="text" name="query" placeholder="Search" aria-label="Search" />

                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <a className="btn secondary white btn-lg" href="/evento">Cadastrar Eventos</a>

                    <a onClick={this.handleLogOut} className="btn secondary white btn-lg" href="/">Logout</a>
                </nav>


                <div className="Home" >
                    <Calendario width="306x"
                        onDayClick={(e, day) => this.onDayClick(e, day)} />
                </div>

            </div>

        );
    }


}


export default Home;