const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type TupleToObject<T extends readonly any[]> = {
   [K in T[number]]: K
}

type Test1 = TupleToObject<typeof tuple>;
type Test2 = TupleToObject<typeof tupleNumber>;
type Test3 = TupleToObject<typeof tupleMix>;