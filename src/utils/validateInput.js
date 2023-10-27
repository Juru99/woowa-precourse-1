import { CONFIG, PROMPT } from '../constants/constants';

// 사용자 입력값 검증
export const validate3Digit = (user) => {
  if (!CONFIG.regex.test(user)) throw new Error(PROMPT.error.not3Digit);
};

export const validateIsPlay = (user) => {
  if (user === '1') return true;
  if (user === '2') return false;
  throw new Error(PROMPT.error.not1Or2);
};
