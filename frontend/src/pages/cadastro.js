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
    }
  }


  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!email.length || !password.length) return;

    await api.post('auth/cadastro', { email, password });
    this.props.history.push('/');


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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}