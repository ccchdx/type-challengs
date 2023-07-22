//type First<T extends any[]> = T extends [] ? never : T[0]; //法一
//type First<T extends any[]> = T["length"] extends 0 ? never : T[0]; //法2
//type First<T extends any[]> = T[0] extends T[number] ? T[0] : never; //法3
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never; //法4

//infer 推断
