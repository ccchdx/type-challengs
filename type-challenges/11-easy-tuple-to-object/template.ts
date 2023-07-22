type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

//T为元组
//keyof T  会得到元组的各个元素的索引
//T[number] 遍历元组，得到元组的各个元素

//js
