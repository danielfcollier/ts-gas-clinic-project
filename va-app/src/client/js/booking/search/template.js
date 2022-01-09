import schema from '../config/schema';
import getTemplate from '../../utils/getTemplate';

const params = [
  'id',
  'consultationDate',
  'consultationTime',
  'fullName',
  'consultationSet',
  'consultationType',
  'consultationValue',
  'paymentStatus',
];

const template = getTemplate(schema, params);

export default template;
