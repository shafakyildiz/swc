//// [importsNotUsedAsValues_error.ts]
//// [/a.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
var C, _default = function _default() {
    _class_call_check(this, _default);
};
export var A = function A() {
    _class_call_check(this, A);
};
var C1;
export { C1 as C };
(C = C1 || (C1 = {}))[C.One = 0] = "One", C[C.Two = 1] = "Two";
export { _default as default };
//// [/b.ts]
console.log(void 0, void 0);
export { };
//// [/c.ts]
console.log(void 0, void 0);
export { };
//// [/d.ts]
import { A } from "./a";
console.log(A, void 0);
//// [/e.ts]
export { };
 // noUnusedLocals error only
//// [/f.ts]
import { C } from "./a";
C.One, console.log(C.Two, C.Two);
//// [/g.ts]
console.log(void 0, void 0);
export { };
//// [/h.ts]
//! 
//!   x Export assignment cannot be used when targeting ECMAScript modules. Consider using `export default` or another module format instead.
//!    ,-[1:1]
//!  1 | class H {}
//!  2 | export = H;
//!    : ^^^^^^^^^^^
//!  3 | 
//!    `----
//// [/i.ts]
//! 
//!   x Import assignment cannot be used when targeting ECMAScript modules. Consider using `import * as ns from "mod"`, `import {a} from "mod"`, `import d from "mod"`, or another module format instead.
//!    ,-[1:1]
//!  1 | import H = require('./h'); // Error
//!    : ^^^^^^^^^^^^^^^^^^^^^^^^^^
//!  2 | let h: H = {};
//!  3 | console.log(h);
//!    `----
//// [/j.ts]
//! 
//!   x Import assignment cannot be used when targeting ECMAScript modules. Consider using `import * as ns from "mod"`, `import {a} from "mod"`, `import d from "mod"`, or another module format instead.
//!    ,-[1:1]
//!  1 | import H = require('./h'); // noUnusedLocals error only
//!    : ^^^^^^^^^^^^^^^^^^^^^^^^^^
//!  2 | 
//!    `----
//// [/k.ts]
//! 
//!   x Export assignment cannot be used when targeting ECMAScript modules. Consider using `export default` or another module format instead.
//!    ,-[1:1]
//!  1 | const enum K { One, Two }
//!  2 | export = K;
//!    : ^^^^^^^^^^^
//!  3 | 
//!    `----
//// [/l.ts]
//! 
//!   x Import assignment cannot be used when targeting ECMAScript modules. Consider using `import * as ns from "mod"`, `import {a} from "mod"`, `import d from "mod"`, or another module format instead.
//!    ,-[1:1]
//!  1 | import K = require('./k');
//!    : ^^^^^^^^^^^^^^^^^^^^^^^^^^
//!  2 | K.One;
//!  3 | 
//!    `----
//// [/j.ts]
// Sad face https://github.com/microsoft/TypeScript/blob/6b04f5039429b9d412696fe2febe39ecc69ad365/src/testRunner/compilerRunner.ts#L207
