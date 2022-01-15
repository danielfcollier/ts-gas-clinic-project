import selectOptions from './selectOptions';

function getSelection(property) {
  const element = window.document.getElementById(property);
  const { value } = element;
  const index = value - 1;
  const selection = selectOptions[property][index];

  return selection;
}

function actions(element, paymentMethod) {
  const setElement = (status) => {
    if (status === 'disabled') {
      element.disabled = true;
    } else if (status === 'enabled') {
      element.disabled = false;
    }
  };

  if (paymentMethod === 'Sem Cobrança') {
    setElement('disabled');

    return 'R$ 0,00';
  }

  if (paymentMethod === 'Link de Pagamento' || paymentMethod === 'Conta Bancária') {
    setElement('disabled');

    const consultationType = getSelection('consultationType');
    const consultationSet = getSelection('consultationSet');

    return getConsultationValue(consultationType, consultationSet);
  }

  if (paymentMethod === 'Autorizada') {
    setElement('enabled');

    return '';
  }
}

function getConsultationValue(consultationType, consultationSet) {
  return consultationType === 'Online' ? 'R$ 280,00' : 'R$ 360,00';
}

export default function paymentHandler() {
  const element = window.document.getElementById('consultationValue');

  const paymentMethod = getSelection('paymentMethod');
  const consultationValue = actions(element, paymentMethod);
  element.value = consultationValue;

  return true;
}
