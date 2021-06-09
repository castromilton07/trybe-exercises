const cepForm = document.querySelector('#cep-form');
let cepContainer = document.querySelector('#cep-container');

const clearForm = () => {
  cepContainer = document.querySelector('#cep-container');
  if (cepContainer.children.length > 1) {
    for (let index = 0; index <= cepContainer.children.length + 2; index += 1) {
      cepContainer.removeChild(cepContainer.lastChild);
    }
  }
};

const getFormData = (data) =>  ({ cep: data.elements.cep.value });

const verifyAdress = (data) => (data.logradouro !== '' && data.complemento !== '');

const verifyNeighborhood = (bairro) => (bairro !== '');

const setData = (cepInformed, dataSearched) => {
  cepContainer = document.querySelector('#cep-container');
  const cep = document.createElement('li');
  cep.innerHTML = `CEP Informado: ${(cepInformed).toString().slice(0, -3)}-${(cepInformed).toString().slice(5)}`;
  cepContainer.appendChild(cep);
  if (verifyAdress(dataSearched)) {
    const logradouro = document.createElement('li');
    logradouro.innerHTML = `Endereço: ${dataSearched.logradouro} ${dataSearched.complemento}`
    cepContainer.appendChild(logradouro);
  }
  if (verifyNeighborhood(dataSearched.bairro)) {
    const bairro = document.createElement('li');
    bairro.innerHTML = `Bairro: ${dataSearched.bairro}`;
    cepContainer.appendChild(bairro);
  }
  const cidade = document.createElement('li');
  cidade.innerHTML = `Cidade: ${dataSearched.localidade}-${dataSearched.uf}`;
  cepContainer.appendChild(cidade);
  const ddd = document.createElement('li');
  ddd.innerHTML = `DDD: ${dataSearched.ddd}`;
  cepContainer.appendChild(ddd);
};

const searchCEP = (cep) => {
  const promise = new Promise((resolve, reject) => {
    if (cep.length < 8) return reject('CEP incorreto!')
    else {
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        response.json().then((dataCep) => {
          // console.log(cep, dataCep);
          setData(cep, dataCep);
          resolve('Tudo OK com o CEP informado!', dataCep);
        });
      });
    }
  })
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));
};

cepForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const cepToSearch = {... getFormData(event.target) };
  clearForm();
  searchCEP(cepToSearch.cep);
});
