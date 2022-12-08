import { assignmentCouple } from "./types.ts";

const checkForDuplicateAssignment = (assignmentsCouple: assignmentCouple) => {
  if (assignmentsCouple.length < 2) {
    throw new Error(`Couple too short: ${assignmentsCouple}`);
  }
  if (assignmentsCouple.length > 2) {
    throw new Error(`Couple too long: ${assignmentsCouple}`);
  }
  const assignment1 = assignmentsCouple[0].split("-");
  const assignment2 = assignmentsCouple[1].split("-");
  if (
    assignment1[0] === assignment2[0] ||
    assignment1[1] === assignment2[1]
  ) return 1;
  if (
    assignment1[0] < assignment2[0] &&
    assignment1[1] > assignment2[1]
  ) return 1;
  return 0;
};

export { checkForDuplicateAssignment };