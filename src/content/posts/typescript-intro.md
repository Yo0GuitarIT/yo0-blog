---
title: "TypeScript 入門：從型別開始思考"
date: 2026-06-03
description: "從靜態型別出發，了解 TypeScript 如何讓程式碼更可靠。"
categories: "技術"
tags: ["TypeScript", "JavaScript"]
---

## 為什麼要用 TypeScript？

JavaScript 的動態型別帶來靈活性，但也容易造成難以追蹤的 bug。TypeScript 在編譯階段就能抓出錯誤，讓程式碼更可靠。

## 基本型別範例

```typescript
const name: string = "Yo0";
const age: number = 25;
const isActive: boolean = true;

function greet(user: string): string {
  return `Hello, ${user}!`;
}
```

## 介面（Interface）

```typescript
interface Post {
  title: string;
  date: string;
  content?: string;
}

const post: Post = {
  title: "TypeScript 入門",
  date: "2026-06-03",
};
```

掌握基本型別與介面後，就能大幅提升程式碼的可讀性與穩定性。
