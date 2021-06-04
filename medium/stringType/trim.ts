type Trim<T extends string> = T extends `${' '}${infer K}${' '}` ? Trim<K> : T


type trimed = Trim<'   Hello World  '> 