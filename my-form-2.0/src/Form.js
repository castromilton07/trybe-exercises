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
import FormError from './components/FormError';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  tipo: '',
  resumo: '',
  cargo: '',
  descricao: '',
  enviado: false,
  alertado: false,
  formError: {},
}

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleAlert = this.handleAlert.bind(this);
    this.validateAddress = this.validateAddress.bind(this);
    this.validateField = this.validateField.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.sendForm = this.sendForm.bind(this);

    this.state = INITIAL_STATE;
  }

  handleChange({ target }) {
    // const { name, type, checked, value } = target;
    // const checkedValue = type === 'checkbox' ? checked : value;
    let { name, value } = target;

    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = this.validateAddress(value);

    /* this.setState({
      [name]: value,
    }) */
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleOnBlur({ target }) {
    let { name, value } = target;

    if (name === 'cidade') value = value.match(/^\d/) ? '' : value;

    this.setState({
      [name]: value,
    })
  }

  handleAlert() {
    if (!this.state.alertado) {
      alert('Preencha com cuidado esta informação.');
      this.setState({
        alertado: true,
      });
    }
  }

  validateAddress(endereco) {
    return endereco.replace(/[^\w\s]/gi, '');
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm() {
    this.setState(INITIAL_STATE);
  }

  sendForm(event) {
    this.setState({ enviado: true });
    event.preventDefault();
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const { tipo, resumo, cargo, descricao, enviado, } = this.state;

    return (
      <form className="form" onSubmit={ this.sendForm }>
        <fieldset>
          <Nome value={ this.state.nome } handleChange={ this.handleChange } />
          <Email value={ this.state.email } handleChange={ this.handleChange } />
          <Cpf value={ this.state.cpf } handleChange={ this.handleChange } />
          <Endereco value={ this.state.endereco } handleChange={ this.handleChange } />
          <Cidade value={ this.state.cidade } handleChange={ this.handleChange } handleOnBlur={ this.handleOnBlur } />
          <Estado value={ this.state.estado } handleChange={ this.handleChange } />
          <br/>
          <Tipo value={ this.state.tipo } handleChange={ this.handleChange } />          
        </fieldset>

        <fieldset>
          <Resumo value={ this.state.resumo } handleChange={ this.handleChange } />
          <Cargo value={ this.state.cargo } handleChange={ this.handleChange } handleAlert={ this.handleAlert } />
          <Descricao value={ this.state.descricao } handleChange={ this.handleChange } />
        </fieldset>

        <input type="submit" value="Enviar" />
        <input type="reset" onClick={ this.resetForm } value="Limpar" />

        <div className="container">
          <FormError formError={ this.state.formError } />
        </div>

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