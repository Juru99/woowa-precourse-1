import { CONFIG, PROMPT } from '../constants/constants';

// 사용자 입력값 검증
export default validateInput = (user) => {
  if (!CONFIG.regex.test(user)) throw new Error(PROMPT.error.not3Digit);
};
