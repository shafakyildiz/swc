//// [incrementOperatorWithAnyOtherType.ts]
// ++ operator on any type
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
var n, ANY, ANY1, M, ANY2 = [
    "",
    ""
], obj = {
    x: 1,
    y: null
};
(M || (M = {})).n = n;
var objA = new function A() {
    _class_call_check(this, A);
}();
++ANY, ++ANY1, ANY1++, ANY1++, ++ANY2[0], ++obj.x, ++obj.y, ++objA.a, ++M.n, ANY2[0]++, obj.x++, obj.y++, objA.a++, M.n++, // miss assignment opertors
++ANY, ++ANY1, ++ANY2[0], ++ANY, ++ANY1, ++objA.a, ++M.n, ANY++, ANY1++, ANY2[0]++, ANY++, ANY1++, objA.a++, M.n++;
