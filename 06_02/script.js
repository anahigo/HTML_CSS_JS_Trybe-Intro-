// Const
const form = document.forms['formuser'];
const btnEnviar = document.getElementById('btEnviar');
const btnReset = document.getElementById('btResetar');
const cData = document.getElementById('cData');
const resultado = document.querySelector('.resultado');
const objEstados = {
  'ac': 'Acre',
  'al': 'Alagoas',
  'ap': 'Amapá',
  'am': 'Amazonas',
  'ba': 'Bahia',
  'ce': 'Ceará',
  'df': 'Distrito Federal',
  'es': 'Espírito Santo',
  'go': 'Goiás',
  'ma': 'Maranhão',
  'mt': 'Mato Grosso',
  'ms': 'Mato Grosso do Sul',
  'mg': 'Minas Gerais',
  'pa': 'Pará',
  'pb': 'Paraíba',
  'pr': 'Paraná',
  'pe': 'Pernambuco',
  'pi': 'Piauí',
  'rj': 'Rio de Janeiro',
  'rn': 'Rio Grande do Norte',
  'rs': 'Rio Grande do Sul',
  'ro': 'Rondônia',
  'rr': 'Roraima',
  'sc': 'Santa Catarina',
  'sp': 'São Paulo',
  'se': 'Sergipe',
  'to': 'Tocantins',
};

//Options
function setEstado() {
  const estados = document.getElementById('cEst');
  for (estado in objEstados) {
    const option = document.createElement('option');
    option.value = estado;
    option.innerText = objEstados[estado];
    estados.appendChild(option);
  }
}

//Envia os dados para a div(id=resultado) com os resultados do campos preenchidos
function configuraResultado() {
  const dados = document.querySelectorAll('.resultado p');
  [...form.elements].forEach(campo => {
    if (['text', 'select-one', 'textarea'].indexOf(campo.type) > -1) {
      document.querySelector(`span.span${campo.name}`).innerHTML = campo.value;
    }
    if (campo.name === 'tipoRes' && campo.checked) {
      document.querySelector(`span.span${campo.name}`).innerHTML = campo.value;
    }
  });
}

//Valida o Formulário
function validaForm() {
  if (validation.isValid()) {
    resultado.classList.remove('is-hidden');
    configuraResultado();
  }
}

const clearButton = document.querySelector('#btResetar');

//Apaga e Limpa a div(id=resultados)
function limpaInput() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  for (let i = 0; i < formElements.length; i++) {
    const userInput = formElements[i];
    userInput.value = '';
    textArea.value = '';
  }
}

function limpaSpan() {
  const spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML  = '';
  }
  resultado.style.display = 'none';
}

function limpaTudo() {
  limpaInput()
  limpaSpan() 
}


clearButton.addEventListener('click', limpaTudo);

//Inicia com as opções dos estados e valida data (datapicker)
window.onload = function () {
  setEstado();
  cData.DatePickerX.init({
    format: 'dd/mm/yyyy',
  });
  validation.init('#myForm', {
    events: ['submit', 'change', 'keyup', 'paste'],
  });
  btnEnviar.addEventListener('click', validaForm);
  form.addEventListener('submit', (dados) => {
    dados.preventDefault();
  });
};
