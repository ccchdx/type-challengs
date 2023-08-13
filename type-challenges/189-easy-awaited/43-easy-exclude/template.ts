// type MyAwaited<T> = any; //原题

//法一
type Then<T> = { then: (onfulfilled: (arg: T) => any) => any };

type MyAwaited<T extends Promise<unknown> | Then<unknown>> = T extends Promise<
  infer U
>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : T extends Then<infer U>
  ? U
  : never;

//法二
// type MyAwaited<T extends PromiseLike<any | PromiseLike<any>>> =
//   T extends PromiseLike<infer V>
//     ? V extends PromiseLike<any>
//       ? MyAwaited<V>
//       : V
//     : never;
