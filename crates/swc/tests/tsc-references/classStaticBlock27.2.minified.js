//// [classStaticBlock27.ts]
// https://github.com/microsoft/TypeScript/issues/44872
var _Foo;
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
(_Foo = function Foo() {
    _class_call_check(this, Foo);
}).prop = 1, console.log(_Foo.prop), _Foo.prop++, console.log(_Foo.prop), _Foo.prop++, console.log(_Foo.prop), _Foo.prop++;
