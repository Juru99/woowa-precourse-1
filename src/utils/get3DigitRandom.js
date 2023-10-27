import { MissionUtils } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants/constants';

// 컴퓨터 랜덤 숫자 생성
export default getRandom = function get3DigitRandom() {
  const computer = new Set();
  while (computer.size < 3) {
    const number = MissionUtils.Random.pickNumberInRange(
      CONFIG.range.minNumber,
      CONFIG.range.maxNumber
    );
    computer.add(number);
  }

  return [...computer];
};
