//// [typeGuardsInModule.ts]
// Note that type guards affect types of variables and parameters only and 
// have no effect on members of objects such as properties. 
// variables in global
var var1, m1, m2, m3, m11, var2, var3, m21, var21, var31, m31, m32, var4, var5, m33, m4, var22, var32;
m11 = m1 || (m1 = {}), "string" == typeof var1 && var1.length, "string" == typeof var2 && var2.length, m11.var3 = var3, m21 = m2 || (m2 = {}), m32 = m31 || (m31 = {}), "string" == typeof var1 && var1.length, "string" == typeof var21 && var21.length, "string" == typeof var4 && var4.length, m32.var5 = var5, m21.var3 = var31, m4 = (m33 = m3 || (m3 = {})).m4 || (m33.m4 = {}), "string" == typeof var1 && var1.length, "string" == typeof var22 && var22.length, m4.var3 = var32;
