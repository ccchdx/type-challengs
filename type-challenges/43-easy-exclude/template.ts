//type MyExclude<T, U> = any //原题
type MyExclude<T, U> = T extends U ? never : T;

//T,U都为union类型，T extends U 就是T中的每个元素各U中每个元素作比较
