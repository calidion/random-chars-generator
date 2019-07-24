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

const rc = new RandomChar();

// 生成所有汉字
rc.all();

// 生成常用简体汉字
rc.simplified();

// 生成常用繁体汉字
rc.traditional();

```
