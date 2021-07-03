import React from 'react';
import './Form.css'
import Nome from './components/Nome';
import Email from './components/Email';
import Cpf from './components/Cpf';
import Endereco from './components/Endereco';
import Cidade from './components/Cidade';
import Estado from './components/Estado';
import Tipo from './components/Tipo';
import Resumo from './components/Resumo';
import Cargo from './components/Cargo';
import Descricao from './components/Descricao';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  tipo: 'casa',
  resumo: '',
  cargo: '',
  descricao: '',
  enviado: false,
}

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.sendForm = this.sendForm.bind(this);

    this.state = INITIAL_STATE;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  resetForm() {
    this.setState(INITIAL_STATE);
  }

  sendForm() {
    this.setState({ enviado: true });
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const { tipo, resumo, cargo, descricao, enviado, } = this.state;

    return (
      <form className="form">
        <fieldset>
          <Nome value={ this.state.nome } handleChange={ this.handleChange } />
          <Email value={ this.state.email } handleChange={ this.handleChange } />
          <Cpf value={ this.state.cpf } handleChange={ this.handleChange } />
          <Endereco value={ this.state.endereco } handleChange={ this.handleChange } />
          <Cidade value={ this.state.cidade } handleChange={ this.handleChange } />
          <Estado value={ this.state.estado } handleChange={ this.handleChange } />
          <br/>
          <Tipo value={ this.state.tipo } handleChange={ this.handleChange } />          
        </fieldset>

        <fieldset>
          <Resumo value={ this.state.resumo } handleChange={ this.handleChange } />
          <Cargo value={ this.state.cargo } handleChange={ this.handleChange } />
          <Descricao value={ this.state.descricao } handleChange={ this.handleChange } />
        </fieldset>

        <input type="button" onClick={ this.sendForm } value="Enviar" />
        <input type="reset" onClick={ this.resetForm } value="Limpar" />

        { enviado && <div>
          <h2>Dados enviados</h2>
          <h1>Pessoa</h1>
          <div> Nome: { nome } </div>
          <div> Email: { email } </div>
          <div> CPF: { cpf } </div>
          <div> Endereço: { endereco } </div>
          <div> Cidade: { cidade } </div>
          <div> Estado: { estado } </div>
          <div> Tipo de residência: { tipo } </div>
          <h3>Profissional</h3>
          <div> Resumo do currículo: { resumo } </div>
          <div> Cargo: { cargo } </div>
          <div> Descrição do cargo: { descricao } </div>
        </div> }
      </form>
    );
  }
}

export default Form;