"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n// This function can be marked `async` if using `await` inside\nfunction middleware(request) {\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/login\", request.url));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);\n// See \"Matching Paths\" below to learn more\nconst config = {\n    matcher: [\n        \"/home/:path*\",\n        \"/about/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUUxQyw4REFBOEQ7QUFDdkQsU0FBU0MsV0FBV0MsT0FBTztJQUNoQyxPQUFPRixxREFBWUEsQ0FBQ0csUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVUYsUUFBUUcsR0FBRztBQUM1RDtBQUVBLGlFQUFlSixVQUFVQSxFQUFBO0FBRXpCLDJDQUEyQztBQUNwQyxNQUFNSyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7UUFDQTtLQUNEO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS5qcz9hNDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG4gXHJcbi8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIG1hcmtlZCBgYXN5bmNgIGlmIHVzaW5nIGBhd2FpdGAgaW5zaWRlXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcXVlc3QudXJsKSlcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmVcclxuXHJcbi8vIFNlZSBcIk1hdGNoaW5nIFBhdGhzXCIgYmVsb3cgdG8gbGVhcm4gbW9yZVxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFsnL2hvbWUvOnBhdGgqJyxcclxuICAgICAgICAgICAgJy9hYm91dC86cGF0aConXHJcbiAgICAgICAgICBdXHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});