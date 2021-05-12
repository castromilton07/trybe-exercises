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