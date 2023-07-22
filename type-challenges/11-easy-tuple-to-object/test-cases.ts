import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;

//TupleToObject:将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

//let const  js世界
//type interface  type世界
//js要在type世界使用，就用typeof转化
//const tupleNumber = [1, 2, 3, 4], tupleNumber为number[]，number类型数组
//const tupleNumber = [1, 2, 3, 4] as const;  tupleNumber为readonly[1, 2, 3, 4],字面量类型；as为类型断言
