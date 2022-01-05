import schema from '../config/schema';
import getTemplate from '../../utils/getTemplate';

const params = [
  'id',
  'status',
  'fullName',
  'birthDay',
  'lastConsultationAt'
];

const template = getTemplate(schema, params);

export default template;
