import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

//简单看成：MyPick<参数1，参数2>是一个函数，参数1是一个对象，参数2是数组 保存了一些key值。
//函数的作用是根据参数2的key值，在参数1中找到对应的键值对，然后形成一个新的对象返回
// Expect<Equal<Expected1, MyPick<Todo, "title">>>返回的新对象希望能和Expected1相同
//参数2的key值在参数1中没有对应的键值对，就报错
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
