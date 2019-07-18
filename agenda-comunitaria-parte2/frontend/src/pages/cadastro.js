import React, { Component } from 'react';
import api from '../services/api';

import './style.css';
import calendarioLogo from '../calendario_agenda.png';

export default class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }


  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!email.length || !password.length) {
      this.setState({ error: "Preencha todos os campos do formulário!" });
    } else {
      try {
        await api.post('auth/cadastro', { email, password });
        this.props.history.push('/');
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. :(" })
      }
    }


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
                      value={this.state.email}
                      onChange={this.handleInputEmailChange}
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      value={this.password}
                      onChange={this.handleInputPasswordChange}
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Senha"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary">
                    Cadastrar
                  </button>
                  <a href="/" class="btn btn-link">Login</a>
                  {this.state.error && <p>{this.state.error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}