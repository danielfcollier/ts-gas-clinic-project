import selectOptions from './selectOptions';

const getConsultationMoment = (patientStatus) => {
  return patientStatus ? selectOptions.consultationMoment[0] : selectOptions.consultationMoment[1];
};
const getConsultationValue = (consultationSet, consultationType) => 'R$ 240,00';

export default function formDefault(patientStatus) {
  const formValues = [];

  const consultationMoment = getConsultationMoment(patientStatus);
  const today = new Date();
  const consultationDate = `dd/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
  const consultationTime = '9h';
  const consultationSet = selectOptions.consultationSet[0];
  const paymentMethod = selectOptions.paymentMethod[0];
  const consultationType = selectOptions.consultationType[0];
  const consultationValue = getConsultationValue(consultationSet, consultationType);

  formValues.push(consultationMoment);
  formValues.push(consultationDate);
  formValues.push(consultationTime);
  formValues.push(consultationSet);
  formValues.push(consultationType);
  formValues.push(consultationValue);
  formValues.push(paymentMethod);

  return formValues;
}
