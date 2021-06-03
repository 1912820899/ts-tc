// 获取元组的长度
type Len<T extends readonly any[]> = 'length' extends keyof T ? T['length']:never

type tuple = ['ad','23',3123123] 

const type:Len<tuple> = 3