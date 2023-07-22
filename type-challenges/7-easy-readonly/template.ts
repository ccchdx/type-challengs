type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// function myReadonly(obj) {
//   const result = {};

//   for (const key in obj) {
//     result["readonly" + key] = obj[key];
//   }

//   return result;
// }

//1.返回一个对象
//2.遍历obj （js 对象   ts 接口）
//3.加上readonly
//4.通过key获取obj（ts里的接口）里面的值
