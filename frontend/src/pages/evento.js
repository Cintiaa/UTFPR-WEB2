import React, { Component } from 'react';
import api from '../services/api';


export default class Evento extends Component {
    state = {
        nome: '',
        data: '',
        horario: '',
        message: '',
        error: ''
    };

    handleInputNomeChange = e => {
        this.setState({ nome: e.target.value })
    }

    handleInputDataChange = e => {
        this.setState({ data: e.target.value })
    }

    handleInputHorarioChange = e => {
        this.setState({ horario: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { nome, data, horario } = this.state;

        if (!nome.length || !data.length || !horario.length) {
            this.setState({ error: "Preencha todos os campos do formulário!" });
        } else {
            try {
                await api.post('auth/evento', { nome, data, horario });
                this.props.history.push('/home');
                this.setState({ message: "Evento cadastrado com sucesso" })
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar o evento. :(" })
            }
        }

    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-4" >
                        <h2>Cadastrar evento</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input  value={this.state.nome}
                                            onChange={this.handleInputNomeChange}
                                 type="text" className="form-control" name="nome" placeholder="Nome" autocomplete="off" />
                            </div>
                            <div className="form-group">
                                <input  value={this.state.data}
                                            onChange={this.handleInputDataChange} 
                                type="date" className="form-control" name="data" placeholder="Data" autocomplete="off" />
                            </div>
                            <div className="form-group">
                                <input
                                value={this.state.horario}
                                            onChange={this.handleInputHorarioChange} 
                                 type="time" className="form-control" name="horario" placeholder="Horário" autocomplete="off" />
                            </div>
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            {this.state.error && <p>{this.state.error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}







