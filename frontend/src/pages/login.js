import React, { Component } from 'react';
import './style.css';
import calendarioLogo from '../calendario_agenda.png';
import api from '../services/api';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }


    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        if (!email.length || !password.length) return;

        await api.post('auth/login', { email, password }).then(res =>{
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/home');
        }, err => {
            console.log(err)
            alert('Erro ao logar')
        });
          
    }

    handleInputEmailChange = e => {
        this.setState({ email: e.target.value })
    }

    handleInputPasswordChange = e => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center cadastro-wrapper">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img src={calendarioLogo} alt="Calendário" />
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            value={this.state.username}
                                            onChange={this.handleInputEmailChange}
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Login"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            value={this.password}
                                            onChange={this.handleInputPasswordChange}
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Senha"
                                        />
                                    </div>

                                    <a href="/cadastro">Ainda não possui cadastro? Clique aqui!!</a>
                                    <button
                                        type="submit"
                                        class="btn btn-primary">
                                        Entrar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
