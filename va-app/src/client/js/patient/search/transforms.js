import getAge from '../../utils/getAge';

const transforms = {
  birthDay: (birthDay) => getAge(birthDay),
};

export default transforms;
