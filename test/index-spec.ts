import test from "ava";
import { RandomChar } from "../src/index";

const rc = new RandomChar();

test("Should generate chinese chars", t => {
  const char1 = rc.all();
  const char2 = rc.all();
  console.log(char1, char2);
  t.truthy(char1 !== char2);
  t.truthy(char1.charCodeAt(0) <= 0x9fff);
  t.truthy(char1.charCodeAt(0) >= 0x4e00);
  t.truthy(char2.charCodeAt(0) <= 0x9fff);
  t.truthy(char2.charCodeAt(0) >= 0x4e00);
});

test("Should generate simplified chinese chars", t => {
  const char1 = rc.simplified();
  const char2 = rc.simplified();
  console.log(char1, char2);
  t.truthy(char1 !== char2);
  t.truthy(char1.charCodeAt(0) <= 0x9fff);
  t.truthy(char1.charCodeAt(0) >= 0x4e00);
  t.truthy(char2.charCodeAt(0) <= 0x9fff);
  t.truthy(char2.charCodeAt(0) >= 0x4e00);
});
