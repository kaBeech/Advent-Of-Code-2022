import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { getVisibleTreesTotal } from "../getVisibleTreesTotal.ts";

const testInput = "tests/testInput.txt";
const testInput2 = "tests/testInput2.txt";
const challengeInput = "tests/treeGrid.txt";

Deno.test("testInput returns a number", async () => {
  const result = await getVisibleTreesTotal(testInput);

  assertEquals(typeof (result), "number");
});

Deno.test("testInput returns 21", async () => {
  const result = await getVisibleTreesTotal(testInput);

  assertEquals(result, 21);
});

Deno.test("testInput2 returns 36", async () => {
  const result = await getVisibleTreesTotal(testInput2);

  assertEquals(result, 36);
});

Deno.test("challengeInput returns 1818", async () => {
  const result = await getVisibleTreesTotal(challengeInput);

  assertEquals(result, 1818);
});
