// 콘솔 출력 상수 데이터
export const PROMPT = Object.freeze({
  startGame: '숫자 야구 게임을 시작합니다.',
  inputNumber: '숫자를 입력해주세요 : ',
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
  endGame: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restartOrExit: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  error: {
    not3Digit: '[ERROR] 서로 다른 3자리 수가 아닙니다.',
    not1Or2: '[ERROR] 1 또는 2가 아닙니다.',
  },
});

export const CONFIG = Object.freeze({
  range: {
    minNumber: 1,
    maxNumber: 9,
  },
  regex: /^[1-9]{3}$/,
});
