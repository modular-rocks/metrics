import code from './code'
import run from '../../../identifier-coupling'
const opts = {
  code
}

describe("Identifier coupling", () => {
  test("test 2", () => {
    const expected = 1.1666666666666667

    expect(run(opts)).toEqual(expected);
  });
});



