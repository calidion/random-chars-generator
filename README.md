# Random chars generator

## Supported charset

1. Simplified chinese (gb2312)
2. Sranditional chinese (big5)

## Install

```
npm i random-chars-generator
```

# Usage

```ts
import { RandomChar } from "random-chars-generator";

// generate random char with locales
// locales can be found here: http://www.lingoes.net/en/translator/langcode.htm

// Generate english chars
const enChar = RandomChar.generate("en");
const enChar = RandomChar.generate("en-US");

// Generate chinese chars

// simplified/简体
const zhChar = RandomChar.generate("zh");
const zhChar = RandomChar.generate("zh-CN");
const zhChar = RandomChar.generate("zh-SG");
// simplified/繁体
const zhChar = RandomChar.generate("zh-TW");
const zhChar = RandomChar.generate("zh-HK");

```


