import { boilerplateFunction } from "./boilerplateModule.ts";

const app = (async (
  challengeInputFile?: string,
): Promise<{ solutionPart1: number; solutionPart2: number }> => {
  if (!challengeInputFile) {
    challengeInputFile = "tests/boilerplateChallengeInput.txt";
  }

  const solutionPart1 = await boilerplateFunction(challengeInputFile);
  const solutionPart2 = await boilerplateFunction(challengeInputFile);

  console.log(`Part 1: What is the answer to Part 1?
    Solution: ${solutionPart1}`);
  console.log(`Part 2: What is the answer to Part 2?
    Solution: ${solutionPart2}`);

  return {
    solutionPart1,
    solutionPart2,
  };
})();

export { app };
