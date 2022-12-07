
import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { scoreRPS } from "./scoreRPS.ts"

const testInput = "testInput.txt";
const testInput2 = "testInput2.txt";

Deno.test("testInput returns a number", async () => {
    const result = await scoreRPS(testInput, "simple");

    assertEquals("number", typeof(result))
});

Deno.test("testInput returns 15 with simple method", async () => {
    const result = await scoreRPS(testInput, "simple");

    assertEquals(15, result)
});

Deno.test("testInput2 returns 9 with simple method", async () => {
    const result2 = await scoreRPS(testInput2, "simple");

    assertEquals(9, result2)
});

Deno.test("testInput returns 12 with crypto method", async () => {
    const result = await scoreRPS(testInput, "crypto");

    assertEquals(12, result)
});

Deno.test("testInput2 returns 14 with crypto method", async () => {
    const result2 = await scoreRPS(testInput2, "crypto");

    assertEquals(14, result2)
});