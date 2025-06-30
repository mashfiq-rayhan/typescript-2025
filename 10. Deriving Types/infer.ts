function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
type ReturnValue<T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValueType = ReturnValue<AddFn>;
