import { editSetting } from './actionsEdit';
import schema from './config/schema';

import callServer from '../utils/callServer';
import { clearFormFields, getFormFields } from '../utils/form';

const creationSchema = [
  // 'id', vai ser gerado
  // 'status', Inactive | Active | Removed | Suspended
  'fullName',
  'documentCountry',
  'documentState',
  'cellphone',
  'email',
  'birthDay',
  'postalCode',
  'location' // , default Florianópolis
  // 'folderId',  depois que retornar job
  // 'customerId', depois que voltar da Asaas
  // 'createdAt', new Date()
  // 'updatedAt', new Date()
  // 'lastConsultationAt', null
  // 'totalConsultations',= 0
];

export default function createPatient() {
  editSetting('start');
  const formData = getFormFields(creationSchema);

  const successHandlerCallback = () => {
    clearFormFields(creationSchema);
    editSetting('success');
  };
  const serverFunction = 'serverAddPatient';
  const params = formData;

  callServer(successHandlerCallback, serverFunction, params);
}
