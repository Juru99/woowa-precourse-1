import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from './constants/constants';
import { get3DigitRandom } from './utils/get3DigitRandom';
import { getStrikeBall } from './utils/getSrikeBall';
import { validate3Digit, validateIsPlay } from './utils/validateInput';

class App {
  #isPlay = true;
  #isInput;

  async play() {
    while (this.#isPlay) {
      this.#isInput = true;

      Console.print(PROMPT.startGame);

      const computer = get3DigitRandom();

      while (this.#isInput) {
        const user = String(await Console.readLineAsync(PROMPT.inputNumber));

        validate3Digit(user);

        const baseball = getStrikeBall(computer, user);

        await this.printResult(baseball.ball, baseball.strike);
      }
    }
  }

  async printResult(ball, strike) {
    if (strike >= 3) {
      this.#isInput = false;

      Console.print(`3${PROMPT.strike}`);
      Console.print(PROMPT.endGame);

      const user = await Console.readLineAsync(PROMPT.restartOrExit);

      this.#isPlay = validateIsPlay(user);
    } else if (ball === 0 && strike === 0) {
      Console.print(PROMPT.nothing);
    } else {
      const result = [
        ball > 0 && `${ball}${PROMPT.ball}`,
        strike > 0 && `${strike}${PROMPT.strike}`,
      ];

      Console.print(result.join(' '));
    }
  }
}

export default App;
