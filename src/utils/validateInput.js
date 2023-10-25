import { PROMPT } from '../constants/constants';

// 사용자 입력값 검증
export default validateInput = (user) => {
  const numberRangeRegex = /^[1-9]{3}$/;
  if (!numberRangeRegex.test(user)) throw new Error(PROMPT.error.not3Digit);
};
