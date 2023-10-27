import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPT } from './constants/constants';
import { get3DigitRandom } from './utils/get3DigitRandom';
import { getStrikeBall } from './utils/getSrikeBall';
import validateInput from './utils/validateInput';

import printResult from './utils/printResult';
class App {
  #baseball = { ball: 0, strike: 0 };

  async play() {
    MissionUtils.Console.print(PROMPT.startGame);
    const computer = get3DigitRandom();
    while (this.#baseball.strike < 3) {
      const user = String(
        await MissionUtils.Console.readLineAsync(PROMPT.inputNumber)
      );
      validateInput(user);
      this.#baseball = getStrikeBall(computer, user, this.#baseball);
      printResult(this.#baseball.ball, this.#baseball.strike);
    }
  }
}

export default App;
