// 출력값 계산
/*
 * @returns {object} 스트라이크와 볼 개수를 가진 오브젝트
 */

export const getStrikeBall = (computer, user) => {
  const userSet = new Set(Array.from(user, Number));
  const baseball = { strike: 0, ball: 0 };
  computer.forEach((v, i) => {
    if (v === Number(user[i])) baseball.strike += 1;
    else if (userSet.has(v)) baseball.ball += 1;
  });

  return baseball;
};
