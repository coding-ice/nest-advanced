function Type(type) {
  return Reflect.metadata('design:type', type);
}

function ParamTypes(...types) {
  return Reflect.metadata('design:paramtypes', types);
}

function ReturnType(type) {
  return Reflect.metadata('design:returntype', type);
}

class IceMeta {
  @Type(Number)
  @ParamTypes(Number, Number)
  @ReturnType(Number)
  add(n, m) {
    return n + m;
  }
}

const i = new IceMeta();
const paramTypes = Reflect.getMetadata('design:paramtypes', i, 'add');
console.log(paramTypes);

const obj = { name: 'ice', age: 25 };
Reflect.defineMetadata('address', 'HangZhou', obj);
const metadata = Reflect.getMetadata('address', obj);
console.log(metadata);
