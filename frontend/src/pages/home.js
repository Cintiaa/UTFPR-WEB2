import React, { Component } from 'react';
import Calendario from './calendario';

class Home extends Component {

    handleLogOut = async e => {

        localStorage.removeItem('token');
        this.props.history.push('/');

    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Bem Vindo</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="text" name="query" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <a className="btn secondary white btn-lg" href="/eventos">Cadastrar Eventos</a>
                <a onClick={this.handleLogOut} className="btn secondary white btn-lg" href="/">Logout</a>
            </nav>
        );
    }
    /*  onDayClick = (e, day) => {
         alert(day);
     }
 
 
     render() {
         return (
             <div className="Home">
                 <Calendario width="400px"
                     onDayClick={(e, day) => this.onDayClick(e, day)} />
             </div>
         );
     } */

}


export default Home;