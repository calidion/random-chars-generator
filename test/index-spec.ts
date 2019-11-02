import * as assert from "assert";
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

test("Should generate big5 chinese chars", t => {
  const chars = [
    rc.traditional(),
    rc.traditional(),
    rc.traditional(),
    rc.traditional(),
    rc.traditional(),
    rc.traditional(),
    rc.traditional(),
    rc.traditional()
  ];
  console.log(chars);
  t.truthy(chars[0] !== chars[1]);
});

test("Should generate", t => {
  const chars = [
    RandomChar.generate("en"),
    RandomChar.generate("en-US"),
    RandomChar.generate("zh"),
    RandomChar.generate("zh-HK"),
    RandomChar.generate("zh-TW"),
    RandomChar.generate("zh-SG"),
    RandomChar.generate("en", "upper")
  ];
  console.log(chars);
  t.truthy(chars[0] !== chars[2]);
  t.truthy(chars[2] !== chars[3]);
  try {
    RandomChar.generate("abc");
    assert(false);
  } catch (e) {
    assert(true);
  }
  try {
    RandomChar.generate();
    assert(false);
  } catch (e) {
    assert(true);
  }
});
