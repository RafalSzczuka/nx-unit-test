import 'jest-preset-angular/setup-jest';

declare global {
    namespace jest {
      interface Matchers<R, T> {
        isElo(): R;
      }
    }
  }
  
  const matchers = {
      isElo(
        // a matcher is a method, it has access to Jest context on `this`
        this: jest.MatcherContext,
        received: string,
      ) {
        return {
          pass: typeof received === "string" && received === "elo",
          message: () =>
            `Received string "${received}" does ${
              this.isNot ? "" : "not "
            }equal "elo".`,
        };
      },
  };
  
  expect.extend(matchers);