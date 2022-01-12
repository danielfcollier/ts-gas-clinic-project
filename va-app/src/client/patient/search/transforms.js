import getAge from '../../library/getAge';

const transforms = {
  birthDay: (birthDay) => getAge(birthDay),
};

export default transforms;
