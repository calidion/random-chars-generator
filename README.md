# Random chars generator

## Supported charset

1. Simplified chinese (gb2312)
2. Sranditional chinese (big5)

## Install

```
npm i random-chars
```

# Usage

```ts
import { RandomChar } from "random-char-cn";

const rc = new RandomChar();

// 生成所有汉字
rc.all();

// 生成常用简体汉字
rc.simplified();
```
