import schema from '../config/schema';
import getTemplate from '../../form/getTemplate';

const params = ['id', 'birthDay', 'fullName', 'lastConsultationAt', 'status'];

const template = getTemplate(schema, params);

export default template;
