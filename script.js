const stateInput = document.querySelector('#state-input');

function createStateOptions() {
    const statesUf = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)'];
    for (let index = 0; index < statesUf.length; index += 1) {
        if (index === 0) {
            let uf = document.createElement('option');
            uf.value = statesUf[index].slice(-3, -1);
            uf.innerHTML = statesUf[index].slice(0, -4);
            uf.selected = 'true';
            stateInput.appendChild(uf);
        } else {
            let uf = document.createElement('option');
            uf.value = statesUf[index].slice(-3, -1);
            uf.innerHTML = statesUf[index].slice(0, -4);
            stateInput.appendChild(uf);
        }
    }
}
createStateOptions();

function getFormData(data) {
    let form = {
        fullname: data.elements['fullname'].value,
        email: data.elements['email'].value,
        cpf: data.elements['cpf'].value,
        address: data.elements['address'].value,
        city: data.elements['city'].value,
        state: data.elements['state'].value,
        type: data.elements['type'].value,
        abstract: data.elements['abstract'].value,
        job: data.elements['job'].value,
        jobDescription: data.elements['job-description'].value,
        initialDate: data.elements['initial-date'].value
    };
    if (form.type === 'house') {
        form.type = 'Casa';
    } else if (form.type === 'apartment') {
        form.type = 'Apartamento';
    }
    return form;
}

function validateDate (date) {
    const day = date.slice(0, -8);
    const month = date.slice(3, -5);
    const year = date.slice(-4);
    const separators = date.slice(2, -7) + date.slice(5, -4);
    if (separators !== '//') {
        // alert('ERRO DE FORMATAÇÃO');
        return 'Erro no campo "Data de Início": Foi inserida uma data com erro de formatação (separadores devem ser "/").';
    }
    if ((day <= 0) || (day > 31)) {
        // alert('ERRO INTERVALO: DIA');
        return 'Erro no campo "Data de Início": Foi inserido um dia fora do intervalo existente (0 < DIA <= 31).';
    }
    if ((month <= 0) || (month > 12)) {
        // alert('ERRO INTERVALO: MÊS');
        return 'Erro no campo "Data de Início": Foi inserido um mês fora do intervalo existente (0 < MÊS <= 12).';
    }
    if (year < 0) {
        // alert('ERRO ANO (NEGATIVO)');
        return 'Erro no campo "Data de Início": Foi inserido um ano NEGATIVO (ANO > 0).';
    }
    return 'true';
}

const curriculumForm = document.querySelector('#curriculum');

function validateForm(event) {
    event.preventDefault();
    const form = event.target;
    let validate = '';
    const bodyElement = document.getElementsByTagName('body');
    const result = document.createElement('div');
    const paragraph = document.createElement('p');
    const formData = getFormData(form);
    validate = validateDate(formData.initialDate);
    if (validate === 'true') {
        const resultData = 'Nome: ' + formData.fullname + '<br>E-mail: ' + formData.email + '<br>CPF: ' + formData.cpf + '<br>Endereço: ' + formData.address + '<br>Cidade: ' + formData.city + '-' + formData.state + '<br>Tipo de Residência: ' + formData.type + '<br><br>Resumo do Currículo: ' + formData.abstract + '<br>Último Cargo: ' + formData.job + '<br>Descição do Cargo: ' + formData.jobDescription + '<br>Data Inicial: ' + formData.initialDate;
        paragraph.innerHTML = resultData;
        result.appendChild(paragraph);
        bodyElement[0].appendChild(result);
        form.submit();
    } else {
        paragraph.innerHTML = validate;
        result.appendChild(paragraph);
        bodyElement[0].appendChild(result);
    }
}
curriculumForm.addEventListener('submit', validateForm);

const clearButton = document.querySelector('#clear-button');

function clearForm() {
    const curriculumDiv = document.getElementsByTagName('div');
    const bodyElement = document.getElementsByTagName('body');
    bodyElement[0].removeChild(curriculumDiv[0]);
}
clearButton.addEventListener('click', clearForm);