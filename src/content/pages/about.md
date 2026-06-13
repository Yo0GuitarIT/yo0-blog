---
title: "關於我"
description: "這是我的個人簡介與樂團日誌說明"
---

# H1 標題

## H2 標題

### H3 標題

#### H4 標題

##### H5 標題

###### H6 標題

---

一般段落文字。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

一般段落文字。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

**粗體文字** 和 _斜體文字_ 以及 **_粗斜體_**。

~~刪除線文字~~

`行內程式碼 inline code`

[超連結文字](https://example.com)

![圖片替代文字](https://picsum.photos/400/200)

---

## 清單

無序清單：

- 項目一
- 項目二
  - 巢狀項目 A
  - 巢狀項目 B
- 項目三

有序清單：

1. 第一項
2. 第二項
   1. 巢狀第一項
   2. 巢狀第二項
3. 第三項

待辦清單：

- [x] 已完成項目
- [ ] 未完成項目
- [ ] 另一個未完成

---

## 引用區塊

> 單行引用文字。

> 多行引用文字第一行。
> 多行引用文字第二行。
>
> 引用內的第二段落。

---

## 程式碼區塊

```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("World"));
```

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
}

const getUser = async (id: number): Promise<User> => {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
};
```

```css
.container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
```

---

## 表格

| 欄位一 | 欄位二 | 欄位三 |
| ------ | :----: | -----: |
| 靠左   |  置中  |   靠右 |
| 資料 A | 資料 B | 資料 C |
| 資料 D | 資料 E | 資料 F |

---

## 水平分隔線

上方內容

---

下方內容

---

另一條分隔線
