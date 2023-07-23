//type Length<T> = any; //原题
type Length<T extends readonly any[]> = T["length"];
