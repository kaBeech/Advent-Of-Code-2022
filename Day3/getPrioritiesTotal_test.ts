import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { getPrioritiesTotal } from "./getPrioritiesTotal.ts";

const testInput = "testInput.txt";
const testInput2 = "testInput2.txt";
const testInputPart2 = "testInputPart2.txt";


Deno.test("testInput returns a number", async () => {
    const result = await getPrioritiesTotal(testInput);

    assertEquals("number", typeof(result))
});

Deno.test("testInput returns 157", async () => {
    const result = await getPrioritiesTotal(testInput);

    assertEquals(157, result)
});

Deno.test("testInput2 returns 239", async () => {
    const result = await getPrioritiesTotal(testInput2);

    assertEquals(239, result)
});

Deno.test("testInputPart2 returns 70", async () => {
    const result = await getPrioritiesTotal(testInputPart2);

    assertEquals(70, result)
});