type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
//[P in K]  此处的K看作是一个union类型（类似数组），遍历K，然后一一赋给P
//keyof T   接口T不能直接遍历，先用keyof把T的key值都拿出来，形成一个union类型，再用in去拿union类型中的每个key
//extends 泛型约束  K extends keyof T --> K中的key约束在T中，即K中有的key值在T中也必须有

//先用js
// function myPick(todo, keys:string[]) {
//   //keys为数组，其实在ts中是union联合类型
//   const obj = {};

//   keys.forEach((key) => {
//     if(key in todo){
//       obj[key]  = todo[key];
//     }
//   });

//   return obj;
// }

//1 返回一个对象
//2 遍历foreach  ts官网搜mapped
//  https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
//3 todo[key] 取值  ts官网搜indexed
//  https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
//4 看看key在不在todo里面 ts官网搜lookup
//  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
