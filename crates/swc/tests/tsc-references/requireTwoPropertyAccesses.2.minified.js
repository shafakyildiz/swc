//// [requireTwoPropertyAccesses.ts]
// @declaration
//// [mod.js]
module.exports = {
    x: {
        y: "value"
    }
};
//// [requireTwoPropertyAccesses.js]
console.log(require("./mod").x.y);
