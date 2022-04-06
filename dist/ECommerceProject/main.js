(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/add-product/add-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/add-product/add-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function () { return ["/adminDash"]; };
class AddProductComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.model = {};
        this.fileToUpload = null;
        this.durations = [{ title: "15 seconds", value: 15 },
            { title: "30 seconds", value: 30 }];
    }
    handleFileInput(files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
        const formData = new FormData();
        formData.append('Image', this.fileToUpload);
        this.http.post('http://localhost:3000/upload', formData).subscribe((res) => {
            console.log(res);
        });
    }
    AddProduct(regform) {
        /*var firstname=regform.controls.first.value;
        var secondname=regform.controls.second.value;
        var address=regform.controls.address.value;
        var city=regform.controls.city.value;
        var gender=regform.controls.gender.value;
        alert(firstname+" "+secondname+" "+gender+" "+address+" "+city);*/
        //console.log(this.model);
        /*const data=JSON.stringify(this.model);
        console.log(data);
        this.http.post('http://localhost:3000/process',data,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((res)=>{
          console.log(res);
        });*/
        const data = JSON.stringify(this.model);
        console.log("Data hai", data);
        this.http.post('http://localhost:3000/process', data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
            console.log(res);
            this.router.navigate(['/adminDash']);
        });
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 156, vars: 21, consts: [[1, "jumbotron", "jumbotron-fluid", "jumbo"], [1, "container", "title"], [1, "animate__animated", "animate__fadeInUp"], [1, "container-fluid"], [1, "row", "justify-content-center", 2, "margin-top", "-200px", "z-index", "1px"], [1, "col-md-8"], [1, "card", "shadow", "animate__animated", "animate__fadeInUp", 2, "border", "none"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "was-validated", 3, "ngSubmit"], ["regForm", "ngForm"], [1, "row"], [1, "col-md-2", "pr-1"], ["for", "firstname"], [1, "col-md-9", "pr-1"], [1, "form-group"], ["id", "company", "name", "company", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["company", "ngModel"], ["for", "RollNumber"], ["type", "text", "id", "product", "name", "product", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["product", "ngModel"], [1, "col-md-8", "pr-1"], ["type", "range", "min", "5000", "max", "100000", "step", "5000", "value", "0", "id", "range", "name", "range", "required", "", 1, "slider", 3, "ngModel", "ngModelChange"], ["range", "ngModel"], ["type", "text", "id", "colour", "name", "colour", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["colour", "ngModel"], ["for", "Variant"], [1, "col-md-7", "pr-1"], [1, "radio"], ["type", "radio", "name", "Variant", "value", "3GB | 32GB", "required", "", 3, "ngModel", "ngModelChange"], ["Variant", "ngModel"], ["type", "radio", "name", "Variant", "value", "4GB | 64GB", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "Variant", "value", "8GB | 128GB", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "processor", "name", "processor", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["processor", "ngModel"], ["type", "text", "id", "OS", "name", "OS", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["OS", "ngModel"], ["type", "text", "id", "battery", "name", "battery", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["battery", "ngModel"], ["type", "text", "id", "display", "name", "display", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["display", "ngModel"], ["type", "text", "id", "camera", "name", "camera", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["camera", "ngModel"], [1, "col-md-3", "pr-1"], ["type", "file", "id", "photo", "name", "photo", 3, "change"], [1, "col-md-2", "pr-2"], ["for", "variant"], [1, "col-md-4", "pr-1"], ["type", "radio", "name", "available", "value", "true", "required", "", 1, "radio-inline", 3, "ngModel", "ngModelChange"], ["available", "ngModel"], ["type", "radio", "name", "available", "value", "false", "required", "", 1, "radio-inline", 3, "ngModel", "ngModelChange"], [1, "text-right"], [1, "btn", "btn-outline-success", 2, "outline", "none", 3, "routerLink"], [1, "fas", "fa-chevron-left"], ["type", "submit", 1, "btn", "btn-outline-danger", 2, "outline", "none", 3, "disabled"], [1, "fas", "fa-plus"], [1, "clearfix"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Your Product Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddProductComponent_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.AddProduct(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_23_listener($event) { return ctx.model.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_32_listener($event) { return ctx.model.product = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_41_listener($event) { return ctx.model.range = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Colour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_53_listener($event) { return ctx.model.colour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_63_listener($event) { return ctx.model.Variant = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " 3GB | 32GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 32, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_68_listener($event) { return ctx.model.Variant = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " 4GB | 64GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 33, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_73_listener($event) { return ctx.model.Variant = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " 8GB | 128GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Processor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_84_listener($event) { return ctx.model.processor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Android/iOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_93_listener($event) { return ctx.model.OS = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Battery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_102_listener($event) { return ctx.model.battery = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_111_listener($event) { return ctx.model.display = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "input", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_120_listener($event) { return ctx.model.camera = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Photo Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddProductComponent_Template_input_change_129_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Product Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_136_listener($event) { return ctx.model.available = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " YES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "input", 51, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_141_listener($event) { return ctx.model.available = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](146, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Back to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.model.range, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.colour);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Variant);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Variant);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Variant);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.processor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.OS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.battery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.camera);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.available);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.available);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](146, 18, ctx.model), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: [".jumbo[_ngcontent-%COMP%]{\n    background-color: #008BFF;\n    height: 350px;\n}\nh1[_ngcontent-%COMP%]{\n  font-size: 32px;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center;\n  font-family: \"Raleway\", sans-serif;\n  color: #000;\n}\nh1[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 50px;\n  height: 3px;\n  background: red;\n  bottom: 0;\n  left: calc(50% - 25px);\n}\n.button[_ngcontent-%COMP%]{\n    display: inline-block;\n    width: 160px;\n    height: 40px;\n    border: 2px solid red;\n    color: red;\n    font-size: 15px;\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: center;\n    text-decoration: none;\n    line-height: 35px;\n    box-sizing: border-box;\n    border-radius: 50px;\n    background-color: transparent;\n    outline: none;\n    transition: all ease 0.5s;\n}\n.active[_ngcontent-%COMP%]{\n    font-size: 0;\n    width: 30px;\n    height: 30px;\n    border: 5px solid red;\n    border-radius: 50%;\n    border-left-color: transparent;\n    animation: rotate 1.4s ease 0.5s infinite; \n}\n.slider[_ngcontent-%COMP%] {\n    -webkit-appearance: none;\n    width: 100%;\n    height: 10px;\n    border-radius: 5px;\n    background: #d3d3d3;\n    outline: none;\n    opacity: 0.7;\n    transition: opacity .2s;\n  }\n.slider[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n  }\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 32px;\n    height: 32px;\n    border: 0;\n    background: url('coin.png');\n    cursor: pointer;\n  }\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n    width: 32px;\n    height: 32px;\n    border: 0;\n    background: url('coin.png');\n    cursor: pointer;\n  }\n@keyframes rotate{\n    0%{\n        transform: rotate(360deg);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NBSUM7QUFDRDs7O0NBR0M7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFFWix1QkFBdUI7RUFDekI7QUFFQTtJQUNFLFVBQVU7RUFDWjtBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCwyQkFBMkM7SUFDM0MsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsMkJBQTJDO0lBQzNDLGVBQWU7RUFDakI7QUFDRjtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVG8gY2hhbmdlIHRoaXMgbGljZW5zZSBoZWFkZXIsIGNob29zZSBMaWNlbnNlIEhlYWRlcnMgaW4gUHJvamVjdCBQcm9wZXJ0aWVzLlxuVG8gY2hhbmdlIHRoaXMgdGVtcGxhdGUgZmlsZSwgY2hvb3NlIFRvb2xzIHwgVGVtcGxhdGVzXG5hbmQgb3BlbiB0aGUgdGVtcGxhdGUgaW4gdGhlIGVkaXRvci5cbiovXG4vKiBcbiAgICBDcmVhdGVkIG9uIDogMjUgTWF5LCAyMDIwLCAxMjo0Njo0OCBQTVxuICAgIEF1dGhvciAgICAgOiBhcnBpdFxuKi9cbi5qdW1ib3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4QkZGO1xuICAgIGhlaWdodDogMzUwcHg7XG59XG5oMXtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwO1xufVxuaDE6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG59XG4uYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcbn1cbi5hY3RpdmV7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBhbmltYXRpb246IHJvdGF0ZSAxLjRzIGVhc2UgMC41cyBpbmZpbml0ZTsgXG59XG4uc2xpZGVyIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xuICB9XG4gIFxuICAuc2xpZGVyOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jb2luLnBuZycpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jb2luLnBuZycpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuQGtleWZyYW1lcyByb3RhdGV7XG4gICAgMCV7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/admin-dashboard/admin-dashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/admin-dashboard/admin-dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin-sidebar/admin-sidebar.component */ "./src/app/Components/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/Components/footer/footer.component.ts");





const _c0 = function () { return ["/productAdd"]; };
const _c1 = function () { return ["/orderdash"]; };
const _c2 = function () { return ["/adminOrder"]; };
class AdminDashboardComponent {
    constructor() { }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(); };
AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 101, vars: 6, consts: [[1, "header_area"], [1, "main_menu"], [1, "navbar", "navbar-expand-lg", "bg-light", "navbar-light"], [1, "container"], [1, "navbar-brand", "logo_h"], ["src", "../../../assets/logo.png", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "icon-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "offset"], [2, "text-align", "center", "margin-left", "150px"], [1, "nav", "navbar-nav", "menu_nav", "ml-auto", "mr-auto"], [1, "wrapper"], [1, "row"], [1, "span8"], [1, "content"], [1, "btn-controls"], [1, "btn-box-row", "row-fluid"], [1, "btn-box", "big", "span4", 3, "routerLink"], [1, "fa", "fa-cart-plus"], [1, "text-muted"], [1, "fas", "fa-clipboard-list"], [1, "fas", "fa-cash-register"], [1, "row-fluid"], [1, "span12"], [1, "btn-box", "small", "span4"], [1, "icon-envelope"], [1, "icon-group"], [1, "icon-exchange"], [1, "icon-save"], [1, "icon-bullhorn"], [1, "icon-sort-down"], [1, "widget", "widget-usage", "unstyled", "span4"], [1, "pull-right", "small", "muted"], [1, "progress", "tight"], [1, "bar", 2, "width", "78%"], [1, "progress-bar", "bg-success", 2, "width", "56%"], [1, "progress-bar", "bg-warning", 2, "width", "44%"], [1, "progress-bar", "bg-danger", 2, "width", "67%"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Administrator Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Product List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Customer Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Social Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Bounce Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "78%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Samsung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "56%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Xiaomi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "44%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "One Plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["AdminSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-dashboard',
                templateUrl: './admin-dashboard.component.html',
                styleUrls: ['./admin-dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Components/admin-login/admin-login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/admin-login/admin-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = function () { return ["/"]; };
class AdminLoginComponent {
    constructor(router) {
        this.router = router;
        this.model = {};
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
    Login($event) {
        this.router.navigate(['/adminDash']);
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 27, vars: 3, consts: [[1, "lockscreen-wrapper"], [1, "lockscreen-logo"], [1, "lockscreen-name"], [1, "lockscreen-item"], [1, "lockscreen-image"], ["src", "../../../assets/user1-128x128.jpg", "alt", "User Image"], [1, "lockscreen-credentials"], [1, "input-group"], ["type", "password", "id", "password", "name", "password", "placeholder", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "input-group-append"], ["type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-arrow-right", "text-muted"], [1, "help-block", "text-center"], [1, "lockscreen-footer", "text-center"], [1, "text-black", 3, "routerLink"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Mobikart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ankit and Aalekh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLoginComponent_Template_button_click_16_listener($event) { return ctx.Login($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Enter your password to access Admin Privileges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Copyright \u00A9 2020-2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Back to Mobikart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " All rights reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-login',
                templateUrl: './admin-login.component.html',
                styleUrls: ['./admin-login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/admin-order-dash/admin-order-dash.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/admin-order-dash/admin-order-dash.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminOrderDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderDashComponent", function() { return AdminOrderDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/Components/footer/footer.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");









function AdminOrderDashComponent_tr_65_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminOrderDashComponent_tr_65_Template_i_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const model_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.Delete(model_r1.PRODUCT_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", model_r1.PRODUCT_IMAGE, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.PRODUCT_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.PRICE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.COLOUR);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.VARIANT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.OS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.BATTERY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.DISPLAY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.PROCESSOR);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.CAMERA);
} }
const _c0 = function () { return ["/productAdd"]; };
const _c1 = function () { return ["/adminDash"]; };
const _c2 = function (a1) { return { itemsPerPage: 3, currentPage: a1 }; };
class AdminOrderDashComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.p = 1;
        this.x = 0;
    }
    Delete(id) {
        console.log(id);
        this.http.get('http://localhost:3000/deleteProduct/' + id).subscribe((res) => {
            this.response = res;
            if (this.response.success == true) {
                this.ngOnInit();
            }
        });
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.http.get('http://localhost:3000/getAllProduct').subscribe((res) => {
            this.models = res;
            console.log(this.models);
        });
    }
}
AdminOrderDashComponent.ɵfac = function AdminOrderDashComponent_Factory(t) { return new (t || AdminOrderDashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AdminOrderDashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminOrderDashComponent, selectors: [["app-admin-order-dash"]], decls: 70, vars: 14, consts: [[1, "header_area"], [1, "main_menu"], [1, "navbar", "navbar-expand-lg", "bg-light", "navbar-light"], [1, "container"], [1, "navbar-brand", "logo_h"], ["src", "../../../assets/logo.png", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "icon-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "offset"], [2, "text-align", "center", "margin-left", "150px"], [1, "nav", "navbar-nav", "menu_nav", "ml-auto", "mr-auto"], ["type", "button", 1, "btn", "btn-block", "btn-outline-danger", 3, "routerLink"], [1, "fas", "fa-plus"], ["type", "button", 1, "btn", "btn-block", "btn-outline-success", 3, "routerLink"], [1, "fas", "fa-chevron-left"], [1, "wrapper"], [1, "row"], [1, "span9"], [1, "content", 2, "width", "150%", "margin-left", "-90px"], [1, "module"], [1, "module-head"], [1, "box-title"], [1, "module-body"], [1, "col-xs-12"], [1, "box"], [1, "box-header"], [1, "box-tools"], [1, "input-group", "input-group-sm", "hidden-xs"], ["type", "text", "name", "table_search", "placeholder", "Search Your Product Here", 1, "form-control", "pull-right", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], ["id", "example", 1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [3, "pageChange"], ["height", "60px", 3, "src"], [1, "fas", "fa-trash", 3, "click"]], template: function AdminOrderDashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Back to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Product List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminOrderDashComponent_Template_input_ngModelChange_38_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Colour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "OS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Battery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Processor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AdminOrderDashComponent_tr_65_Template, 23, 10, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "pagination-controls", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AdminOrderDashComponent_Template_pagination_controls_pageChange_68_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](66, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](67, 7, ctx.models, ctx.search), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx.p)));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYWRtaW4tb3JkZXItZGFzaC9hZG1pbi1vcmRlci1kYXNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminOrderDashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-order-dash',
                templateUrl: './admin-order-dash.component.html',
                styleUrls: ['./admin-order-dash.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/admin-orders/admin-orders.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/admin-orders/admin-orders.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");






const _c0 = function () { return ["/adminDash"]; };
class AdminOrdersComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.columnDefs = [
            { headerName: 'Date', field: 'PURCHASE_DATE', sortable: true, filter: true, sortingOrder: ["asc", "desc"], width: 150 },
            { headerName: 'Time', field: 'PURCHASE_TIME', sortable: true, filter: true, sortingOrder: ["asc", "desc"], width: 90 },
            { headerName: 'Order ID', field: 'ORDER_ID', filter: true, width: 120 },
            { headerName: 'Customer Name', field: 'CUSTOMER_NAME', sortable: true, filter: true, sortingOrder: ["asc", "desc"] },
            { headerName: 'Product Purchased', field: 'PRODUCT_PURCHASED', sortable: true, filter: true, resizable: true, width: 350 },
            { headerName: 'Price', field: 'PRODUCT_PRICE', sortable: true, filter: true, width: 130 },
            { headerName: 'Mobile', field: 'PHONE', filter: true, width: 130 },
            { headerName: 'Email', field: 'EMAIL', filter: true },
            { headerName: 'Address', field: 'ADDRESS', filter: true, resizable: true, width: 800 },
        ];
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.http.post('http://localhost:3000/getAdminOrders', JSON.stringify({ 'id': 1 }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
            this.result = res;
            for (let x = 0; x < this.result.length; x++) {
                this.result[x].PURCHASE_DATE = new Date(this.result[x].PURCHASE_DATE).toString().split("00")[0];
                this.result[x].PRODUCT_PRICE = (this.result[x].PRODUCT_PRICE).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'INR',
                });
            }
            this.rowData = this.result;
        });
    }
}
AdminOrdersComponent.ɵfac = function AdminOrdersComponent_Factory(t) { return new (t || AdminOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminOrdersComponent, selectors: [["app-admin-orders"]], decls: 18, vars: 7, consts: [[1, "main_menu"], [1, "navbar", "navbar-expand-lg", "bg-light", "navbar-light"], [1, "container"], [1, "navbar-brand", "logo_h"], ["src", "../../../assets/logo.png", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "icon-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "offset"], [2, "text-align", "center", "margin-left", "150px"], [1, "nav", "navbar-nav", "menu_nav", "ml-auto", "mr-auto"], ["type", "button", 1, "btn", "btn-block", "btn-outline-danger", 3, "routerLink"], [1, "fas", "fa-chevron-left"], ["rowSelection", "multiple", 1, "ag-theme-alpine", 2, "width", "2500px", "height", "900px", "margin-left", "auto", "margin-right", "auto", 3, "rowData", "columnDefs", "pagination", "animateRows", "paginationAutoPageSize"]], template: function AdminOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customer Order List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Back to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ag-grid-angular", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.rowData)("columnDefs", ctx.columnDefs)("pagination", true)("animateRows", true)("paginationAutoPageSize", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridAngular"]], styles: ["ag-grid[_ngcontent-%COMP%], ag-grid-angular[_ngcontent-%COMP%], ag-grid-ng2[_ngcontent-%COMP%], ag-grid-polymer[_ngcontent-%COMP%], ag-grid-aurelia[_ngcontent-%COMP%] {\n  display: block;\n}\n.ag-hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.ag-invisible[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n.ag-drag-handle[_ngcontent-%COMP%] {\n  cursor: move;\n  cursor: grab;\n}\n.ag-column-drop-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-column-drop-horizontal-half-width[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50% !important;\n}\n.ag-unselectable[_ngcontent-%COMP%] {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ag-selectable[_ngcontent-%COMP%] {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  user-select: text;\n}\n.ag-tab[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ag-tab-guard[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  display: block;\n}\n.ag-select-agg-func-popup[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.ag-input-wrapper[_ngcontent-%COMP%], .ag-picker-field-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  line-height: normal;\n  position: relative;\n}\n.ag-shake-left-to-right[_ngcontent-%COMP%] {\n  animation-direction: alternate;\n  animation-duration: 0.2s;\n  animation-iteration-count: infinite;\n  animation-name: ag-shake-left-to-right;\n}\n@keyframes ag-shake-left-to-right {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n.ag-root-wrapper[_ngcontent-%COMP%] {\n  cursor: default;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.ag-root-wrapper.ag-layout-normal[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.ag-watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 25px;\n  opacity: 0.5;\n  transition: opacity 1s ease-out 3s;\n}\n.ag-watermark[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDk0cHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCA0OTQgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLjYxMjg0OTkzMSwxMDggTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgQzAuNjEyODQ5OTMxLDYyLjEwMDY1MzYgMy40NzE4MzM3OCw1Ny4xNDg3NDgzIDguMTEyODQ5OTMsNTQuNDY5MjU2NCBMOTguMzA2NDI1LDIuMzk1OTcxNTcgTDk4LjMwNjQyNSwyLjM5NTk3MTU3IEMxMDIuOTQ3NDQxLC0wLjI4MzUyMDM1OCAxMDguNjY1NDA5LC0wLjI4MzUyMDM1OCAxMTMuMzA2NDI1LDIuMzk1OTcxNTcgTDExMy4zMDY0MjUsMi4zOTU5NzE1NyBMMjAzLjUsNTQuNDY5MjU2NCBMMjAzLjUsNTQuNDY5MjU2NCBDMjA4LjE0MTAxNiw1Ny4xNDg3NDgzIDIxMSw2Mi4xMDA2NTM2IDIxMSw2Ny40NTk2Mzc0IEwyMTEsMTM4IEwxODEsMTM4IEwxODAuOTk3MDQxLDkzLjk5OTk5OTggTDE4MC45OTYwMzIsOTMuOTk5OTk5OSBDMTgwLjk5NTQ3NSw4NS43MTYxMjI2IDE3NC4yNzk5MDksNzkuMDAxMDA4NyAxNjUuOTk2MDMyLDc5LjAwMTAwODcgTDEyMiw3OC45OTk5OTk5IEMxMTMuNzE1NzI5LDc4Ljk5OTk5OTkgMTA3LDg1LjcxNTcyODYgMTA3LDkzLjk5OTk5OTkgTDEwNywxMzYuMDE1NjIzIEwxMDcsMTM2LjAxNTYyMyBDMTA3LDE0NC4yOTk4OTUgMTEzLjcxNTcyOSwxNTEuMDE1NjIzIDEyMiwxNTEuMDE1NjIzIEwxNjgsMTUxLjAxNTYyMyBMMTY4LDE2MyBDMTY4LDE2NC42NTY4NTQgMTY2LjY1Njg1NCwxNjYgMTY1LDE2NiBMMTIwLDE2NiBMMTIwLDE3OSBMMTY1Ljk5NjAzMiwxNzkgTDE2NS45OTYwMzIsMTc4Ljk5Nzg3NyBDMTc0LjI3OTQ3NCwxNzguOTk3ODc3IDE4MC45OTQ4NiwxNzIuMjgzNDQyIDE4MC45OTYwMzIsMTY0IEwxODEsMTUwLjk2MDU1NCBMMjExLDE1MC45NjA1NTQgTDIxMSwxNzEuNjA2MjA3IEwyMTEsMTcxLjYwNjIwNyBDMjExLDE3Ni45NjUxOTEgMjA4LjE0MTAxNiwxODEuOTE3MDk2IDIwMy41LDE4NC41OTY1ODggTDExMy4zMDY0MjUsMjM2LjY2OTg3MyBMMTEzLjMwNjQyNSwyMzYuNjY5ODczIEMxMDguNjY1NDA5LDIzOS4zNDkzNjUgMTAyLjk0NzQ0MSwyMzkuMzQ5MzY1IDk4LjMwNjQyNSwyMzYuNjY5ODczIEw4LjExMjg0OTkzLDE4NC41OTY1ODggTDguMTEyODQ5OTMsMTg0LjU5NjU4OCBDMy40NzE4MzM3OCwxODEuOTE3MDk2IDAuNjEyODQ5OTMxLDE3Ni45NjUxOTEgMC42MTI4NDk5MzEsMTcxLjYwNjIwNyBMMC42MTI4NDk5MzEsMTIxIEwyNywxMjEgTDI3LDEzNiBDMjcsMTQ0LjI4NDI3MSAzMy43MTU3Mjg3LDE1MSA0MiwxNTEgTDQyLDE1MSBMMTAwLDE1MSBMMTAwLDk0IEMxMDAsODUuNzE1NzI4OCA5My4yODQyNzEyLDc5IDg1LDc5IEwyNyw3OSBMMjcsOTIgTDg0LDkyIEM4NS42NTY4NTQyLDkyIDg3LDkzLjM0MzE0NTggODcsOTUgTDg3LDk1IEw4NywxMDggTDAuNjEyODQ5OTMxLDEwOCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxvZ28iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDc3LDU1IEw0OTQsNTUgTDQ5NCwxNTEgTDQzNSwxNTEgQzQyNi43MTU3MjksMTUxIDQyMCwxNDQuMjg0MjcxIDQyMCwxMzYgTDQyMCw5NiBDNDIwLDg3LjcxNTcyODggNDI2LjcxNTcyOSw4MSA0MzUsODEgTDQzNSw4MSBMNDc3LDgxIEw0NzcsNTUgWiBNNDQwLDk4IEM0MzguMzQzMTQ2LDk4IDQzNyw5OS4zNDMxNDU4IDQzNywxMDEgTDQzNywxMzEgQzQzNywxMzIuNjU2ODU0IDQzOC4zNDMxNDYsMTM0IDQ0MCwxMzQgTDQ3NywxMzQgTDQ3Nyw5OCBMNDQwLDk4IFoiIGlkPSJkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTYuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCAyNiAxNyAyNiAxNyA5NiAwIDk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBmaWxsPSIjRTExRjIyIiBwb2ludHM9IjAgMS4xMzY4NjgzOGUtMTMgMTcgMS4xMzY4NjgzOGUtMTMgMTcgMTcgMCAxNyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzEsMTUxIEwzNDgsMTUxIEwzNDgsMTAxIEwzNDgsMTAxIEMzNDgsOTkuMzQzMTQ1OCAzNDkuMzQzMTQ2LDk4IDM1MSw5OCBMMzg5LDk4IEwzODksODEgTDM0Niw4MSBMMzQ2LDgxIEMzMzcuNzE1NzI5LDgxIDMzMSw4Ny43MTU3Mjg4IDMzMSw5NiBMMzMxLDE1MSBaIiBpZD0iciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzI0LDg2IEwzMjQsNzYgTDMyNCw3NiBDMzI0LDY3LjcxNTcyODggMzE3LjI4NDI3MSw2MSAzMDksNjEgTDI0OSw2MSBMMjQ5LDYxIEMyNDAuNzE1NzI5LDYxIDIzNCw2Ny43MTU3Mjg4IDIzNCw3NiBMMjM0LDEzNiBMMjM0LDEzNiBDMjM0LDE0NC4yODQyNzEgMjQwLjcxNTcyOSwxNTEgMjQ5LDE1MSBMMzA5LDE1MSBMMzA5LDE1MSBDMzE3LjI4NDI3MSwxNTEgMzI0LDE0NC4yODQyNzEgMzI0LDEzNiBMMzI0LDEwMCBMMjg3LDEwMCBMMjg3LDExNyBMMzA3LDExNyBMMzA3LDEzMSBMMzA3LDEzMSBDMzA3LDEzMi42NTY4NTQgMzA1LjY1Njg1NCwxMzQgMzA0LDEzNCBMMjU0LDEzNCBMMjU0LDEzNCBDMjUyLjM0MzE0NiwxMzQgMjUxLDEzMi42NTY4NTQgMjUxLDEzMSBMMjUxLDgxIEwyNTEsODEgQzI1MSw3OS4zNDMxNDU4IDI1Mi4zNDMxNDYsNzggMjU0LDc4IEwzMDQsNzggTDMwNCw3OCBDMzA1LjY1Njg1NCw3OCAzMDcsNzkuMzQzMTQ1OCAzMDcsODEgTDMwNyw4NiBMMzI0LDg2IFoiIGlkPSJHIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJhZyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTExRjIyIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJnIiBmaWxsPSIjRTExRjIyIiB4PSIxMjAiIHk9IjkyIiB3aWR0aD0iNDgiIGhlaWdodD0iNDYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAsMTIxIEw4NywxMjEgTDg3LDEzOCBMNDMsMTM4IEw0MywxMzggQzQxLjM0MzE0NTgsMTM4IDQwLDEzNi42NTY4NTQgNDAsMTM1IEw0MCwxMjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTExRjIyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\n  filter: invert(50%);\n  background-repeat: no-repeat;\n  background-size: 110px 60px;\n  display: block;\n  height: 60px;\n  width: 110px;\n}\n.ag-watermark-text[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  font-weight: bold;\n  font-family: Impact, sans-serif;\n  font-size: 19px;\n}\n.ag-root-wrapper-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.ag-root-wrapper-body.ag-layout-normal[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  height: 0;\n  min-height: 0;\n}\n.ag-root[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.ag-root.ag-layout-normal[_ngcontent-%COMP%], .ag-root.ag-layout-auto-height[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: 1 1 auto;\n  width: 0;\n}\n.ag-root.ag-layout-normal[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.ag-header-viewport[_ngcontent-%COMP%], .ag-floating-top-viewport[_ngcontent-%COMP%], .ag-body-viewport[_ngcontent-%COMP%], .ag-center-cols-viewport[_ngcontent-%COMP%], .ag-floating-bottom-viewport[_ngcontent-%COMP%], .ag-body-horizontal-scroll-viewport[_ngcontent-%COMP%], .ag-virtual-list-viewport[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  min-width: 0px;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n.ag-body-viewport.ag-layout-print[_ngcontent-%COMP%] {\n  flex: none;\n}\n@media print {\n  .ag-layout-normal[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ag-root-wrapper[_ngcontent-%COMP%], .ag-root-wrapper-body[_ngcontent-%COMP%], .ag-root[_ngcontent-%COMP%], .ag-body-viewport[_ngcontent-%COMP%], .ag-center-cols-container[_ngcontent-%COMP%], .ag-center-cols-viewport[_ngcontent-%COMP%], .ag-center-cols-clipper[_ngcontent-%COMP%], .ag-body-horizontal-scroll-viewport[_ngcontent-%COMP%], .ag-virtual-list-viewport[_ngcontent-%COMP%] {\n    height: auto !important;\n    overflow: hidden !important;\n    display: block !important;\n  }\n\n  .ag-row[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n}\n.ag-body-viewport[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-body-viewport.ag-layout-normal[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.ag-center-cols-viewport[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.ag-body-horizontal-scroll-viewport[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n}\n.ag-virtual-list-viewport[_ngcontent-%COMP%] {\n  overflow: auto;\n  width: 100%;\n}\n\n.ag-header-container[_ngcontent-%COMP%], .ag-floating-top-container[_ngcontent-%COMP%], .ag-body-container[_ngcontent-%COMP%], .ag-pinned-right-cols-container[_ngcontent-%COMP%], .ag-center-cols-container[_ngcontent-%COMP%], .ag-pinned-left-cols-container[_ngcontent-%COMP%], .ag-floating-bottom-container[_ngcontent-%COMP%], .ag-body-horizontal-scroll-container[_ngcontent-%COMP%], .ag-full-width-container[_ngcontent-%COMP%], .ag-floating-bottom-full-width-container[_ngcontent-%COMP%], .ag-virtual-list-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ag-header-container[_ngcontent-%COMP%], .ag-floating-top-container[_ngcontent-%COMP%], .ag-floating-bottom-container[_ngcontent-%COMP%] {\n  height: 100%;\n  white-space: nowrap;\n}\n.ag-center-cols-clipper[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n.ag-center-cols-container[_ngcontent-%COMP%] {\n  display: block;\n}\n.ag-layout-print[_ngcontent-%COMP%]   .ag-center-cols-clipper[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n.ag-layout-auto-height[_ngcontent-%COMP%]   .ag-center-cols-clipper[_ngcontent-%COMP%], .ag-layout-auto-height[_ngcontent-%COMP%]   .ag-center-cols-container[_ngcontent-%COMP%] {\n  min-height: 50px;\n}\n.ag-pinned-right-cols-container[_ngcontent-%COMP%] {\n  display: block;\n}\n.ag-body-horizontal-scroll-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.ag-full-width-container[_ngcontent-%COMP%], .ag-floating-top-full-width-container[_ngcontent-%COMP%], .ag-floating-bottom-full-width-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  pointer-events: none;\n}\n.ag-full-width-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ag-floating-bottom-full-width-container[_ngcontent-%COMP%], .ag-floating-top-full-width-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.ag-virtual-list-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.ag-center-cols-clipper[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.ag-body-horizontal-scroll[_ngcontent-%COMP%] {\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n  display: flex;\n  position: relative;\n}\n.ag-layout-print[_ngcontent-%COMP%]   .ag-body-horizontal-scroll[_ngcontent-%COMP%] {\n  display: none;\n}\n.ag-force-vertical-scroll[_ngcontent-%COMP%] {\n  overflow-y: scroll !important;\n}\n.ag-force-vertical-scroll.ag-layout-print[_ngcontent-%COMP%] {\n  overflow-y: visible !important;\n}\n.ag-horizontal-left-spacer[_ngcontent-%COMP%], .ag-horizontal-right-spacer[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 0;\n  overflow-x: scroll;\n}\n.ag-horizontal-left-spacer.ag-scroller-corner[_ngcontent-%COMP%], .ag-horizontal-right-spacer.ag-scroller-corner[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.ag-header[_ngcontent-%COMP%], .ag-pinned-left-header[_ngcontent-%COMP%], .ag-pinned-right-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.ag-header-cell-sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  white-space: nowrap;\n}\n.ag-pinned-left-header[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.ag-pinned-right-header[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.ag-header-row[_ngcontent-%COMP%] {\n  position: absolute;\n  overflow: hidden;\n}\n.ag-header-cell[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n}\n.ag-header-group-cell-label[_ngcontent-%COMP%], .ag-header-cell-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n  align-items: center;\n  text-overflow: ellipsis;\n  align-self: stretch;\n}\n.ag-header-cell-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ag-right-aligned-header[_ngcontent-%COMP%]   .ag-header-cell-label[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.ag-header-group-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ag-header-cell-resize[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  height: 100%;\n  width: 8px;\n  top: 0;\n  cursor: ew-resize;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-header-cell-resize[_ngcontent-%COMP%] {\n  right: -4px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-header-cell-resize[_ngcontent-%COMP%] {\n  left: -4px;\n}\n.ag-pinned-left-header[_ngcontent-%COMP%]   .ag-header-cell-resize[_ngcontent-%COMP%] {\n  right: -4px;\n}\n.ag-pinned-right-header[_ngcontent-%COMP%]   .ag-header-cell-resize[_ngcontent-%COMP%] {\n  left: -4px;\n}\n.ag-header-select-all[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.ag-column-moving[_ngcontent-%COMP%]   .ag-cell[_ngcontent-%COMP%] {\n  transition: left 0.2s;\n}\n.ag-column-moving[_ngcontent-%COMP%]   .ag-header-cell[_ngcontent-%COMP%] {\n  transition: left 0.2s;\n}\n.ag-column-moving[_ngcontent-%COMP%]   .ag-header-group-cell[_ngcontent-%COMP%] {\n  transition: left 0.2s, width 0.2s;\n}\n\n.ag-column-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n.ag-column-select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex-grow: 3;\n  flex-shrink: 1;\n  flex-basis: 0;\n}\n.ag-column-select-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex: none;\n}\n.ag-column-select-header-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ag-column-select-header-filter-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.ag-column-select-header-filter[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ag-column-select-list[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: auto;\n}\n.ag-column-drop[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  overflow: auto;\n  width: 100%;\n}\n.ag-column-drop-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-column-drop-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-column-drop-cell-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: 1 1 auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ag-column-drop-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex: 1 1 0;\n  align-items: stretch;\n}\n.ag-column-drop-vertical-title-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-column-drop-vertical-list[_ngcontent-%COMP%] {\n  align-items: stretch;\n  flex-grow: 1;\n  flex-direction: column;\n  overflow-x: auto;\n}\n.ag-column-drop-vertical-list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: none;\n}\n.ag-column-drop-empty[_ngcontent-%COMP%]   .ag-column-drop-vertical-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.ag-column-drop-vertical-empty-message[_ngcontent-%COMP%] {\n  display: block;\n}\n.ag-column-drop.ag-column-drop-horizontal[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n}\n.ag-column-drop-cell-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-filter-toolpanel[_ngcontent-%COMP%] {\n  flex: 1 1 0px;\n  min-width: 0;\n}\n.ag-filter-toolpanel-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ag-filter-toolpanel-header[_ngcontent-%COMP%], .ag-filter-toolpanel-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-filter-toolpanel-header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .ag-filter-toolpanel-search[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-filter-apply-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  overflow: hidden;\n}\n\n.ag-row-animation[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%] {\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;\n}\n.ag-row-no-animation[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%] {\n  transition: background-color 0.1s;\n}\n.ag-row[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  width: 100%;\n}\n.ag-row-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-row-position-absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.ag-row-position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ag-full-width-row[_ngcontent-%COMP%] {\n  overflow: hidden;\n  pointer-events: all;\n}\n.ag-row-inline-editing[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.ag-row-dragging[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.ag-stub-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.ag-cell[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  white-space: nowrap;\n}\n.ag-cell-value[_ngcontent-%COMP%], .ag-group-value[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ag-cell-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.ag-cell-wrapper.ag-row-group[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.ag-full-width-row[_ngcontent-%COMP%]   .ag-cell-wrapper.ag-row-group[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.ag-cell-auto-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.ag-cell-inline-editing[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.ag-cell-inline-editing[_ngcontent-%COMP%]   .ag-cell-edit-wrapper[_ngcontent-%COMP%], .ag-cell-inline-editing[_ngcontent-%COMP%]   .ag-cell-editor[_ngcontent-%COMP%], .ag-cell-inline-editing[_ngcontent-%COMP%]   .ag-cell-editor[_ngcontent-%COMP%]   .ag-wrapper[_ngcontent-%COMP%], .ag-cell-inline-editing[_ngcontent-%COMP%]   .ag-cell-editor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  line-height: normal;\n}\n.ag-cell[_ngcontent-%COMP%]   .ag-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ag-set-filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.ag-set-filter-item-value[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ag-set-filter-item-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  pointer-events: none;\n}\n.ag-filter-body-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.ag-filter-filter[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n.ag-filter-condition[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.ag-floating-filter-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  height: 100%;\n}\n.ag-floating-filter-full-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  overflow: hidden;\n}\n.ag-floating-filter-full-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.ag-floating-filter[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n}\n.ag-floating-filter-input[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  width: 100%;\n}\n.ag-floating-filter-input[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.ag-floating-filter-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex: none;\n}\n\n.ag-dnd-ghost[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-flex;\n  align-items: center;\n  cursor: move;\n  white-space: nowrap;\n}\n\n.ag-overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.ag-overlay-panel[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n.ag-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: none;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.ag-overlay-loading-wrapper[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n.ag-popup-child[_ngcontent-%COMP%] {\n  z-index: 5;\n}\n.ag-popup-editor[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 1;\n}\n.ag-large-text-input[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.ag-virtual-list-item[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n\n.ag-floating-top[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex;\n}\n.ag-pinned-left-floating-top[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n}\n.ag-pinned-right-floating-top[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n}\n.ag-floating-bottom[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex;\n}\n.ag-pinned-left-floating-bottom[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n}\n.ag-pinned-right-floating-bottom[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n}\n\n.ag-dialog[_ngcontent-%COMP%], .ag-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n.ag-panel-title-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex: none;\n  align-items: center;\n  cursor: default;\n}\n.ag-panel-title-bar-title[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.ag-panel-title-bar-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-panel-title-bar-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-panel-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n}\n.ag-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.ag-resizer[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n}\n.ag-resizer.ag-resizer-topLeft[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  height: 5px;\n  width: 5px;\n  cursor: nwse-resize;\n}\n.ag-resizer.ag-resizer-top[_ngcontent-%COMP%] {\n  top: 0;\n  left: 5px;\n  right: 5px;\n  height: 5px;\n  cursor: ns-resize;\n}\n.ag-resizer.ag-resizer-topRight[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  height: 5px;\n  width: 5px;\n  cursor: nesw-resize;\n}\n.ag-resizer.ag-resizer-right[_ngcontent-%COMP%] {\n  top: 5px;\n  right: 0;\n  bottom: 5px;\n  width: 5px;\n  cursor: ew-resize;\n}\n.ag-resizer.ag-resizer-bottomRight[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  height: 5px;\n  width: 5px;\n  cursor: nwse-resize;\n}\n.ag-resizer.ag-resizer-bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 5px;\n  right: 5px;\n  height: 5px;\n  cursor: ns-resize;\n}\n.ag-resizer.ag-resizer-bottomLeft[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  height: 5px;\n  width: 5px;\n  cursor: nesw-resize;\n}\n.ag-resizer.ag-resizer-left[_ngcontent-%COMP%] {\n  left: 0;\n  top: 5px;\n  bottom: 5px;\n  width: 5px;\n  cursor: ew-resize;\n}\n\n.ag-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  z-index: 99999;\n}\n\n.ag-value-slide-out[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  opacity: 1;\n  transition: opacity 3s, margin-right 3s;\n  transition-timing-function: linear;\n}\n.ag-value-slide-out-end[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  opacity: 0;\n}\n.ag-opacity-zero[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n}\n\n.ag-menu[_ngcontent-%COMP%] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.ag-menu-column-select-wrapper[_ngcontent-%COMP%] {\n  height: 265px;\n  overflow: auto;\n}\n.ag-menu-list[_ngcontent-%COMP%] {\n  display: table;\n}\n.ag-menu-option[_ngcontent-%COMP%], .ag-menu-separator[_ngcontent-%COMP%] {\n  display: table-row;\n}\n.ag-menu-separator-cell[_ngcontent-%COMP%], .ag-menu-option-part[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.ag-menu-option-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.ag-menu-column-select-wrapper[_ngcontent-%COMP%]   .ag-column-select[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.ag-rich-select[_ngcontent-%COMP%] {\n  cursor: default;\n  outline: none;\n}\n.ag-rich-select-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-rich-select-value-icon[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  order: 1;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-rich-select-value-icon[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-rich-select-value-icon[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.ag-rich-select-list[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ag-rich-select-virtual-list-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-rich-select-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  white-space: nowrap;\n}\n\n.ag-paging-panel[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n}\n.ag-paging-page-summary-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-paging-button-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ag-paging-button[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.ag-disabled[_ngcontent-%COMP%]   .ag-paging-page-summary-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.ag-tool-panel-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  width: 200px;\n}\n.ag-column-select-column[_ngcontent-%COMP%], .ag-column-select-column-group[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ag-column-select-column[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .ag-column-select-column-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: none;\n}\n.ag-column-select-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-tool-panel-horizontal-resize[_ngcontent-%COMP%] {\n  cursor: ew-resize;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 5px;\n  z-index: 1;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%]   .ag-tool-panel-horizontal-resize[_ngcontent-%COMP%] {\n  right: -3px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%]   .ag-tool-panel-horizontal-resize[_ngcontent-%COMP%] {\n  left: -3px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%]   .ag-tool-panel-horizontal-resize[_ngcontent-%COMP%] {\n  left: -3px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%]   .ag-tool-panel-horizontal-resize[_ngcontent-%COMP%] {\n  right: -3px;\n}\n.ag-details-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ag-details-row-fixed-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.ag-details-grid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ag-details-grid-fixed-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.ag-header-group-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  position: absolute;\n}\n.ag-cell-label-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.ag-right-aligned-header[_ngcontent-%COMP%]   .ag-cell-label-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.ag-side-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.ag-side-bar-left[_ngcontent-%COMP%] {\n  order: -1;\n  flex-direction: row;\n}\n.ag-side-button-button[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  outline: none;\n  cursor: pointer;\n}\n.ag-side-button-label[_ngcontent-%COMP%] {\n  writing-mode: vertical-lr;\n}\n\n.ag-status-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n}\n.ag-status-panel[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.ag-status-name-value[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.ag-status-bar-left[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.ag-status-bar-center[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.ag-status-bar-right[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.ag-icon[_ngcontent-%COMP%] {\n  display: block;\n  speak: none;\n}\n.ag-group[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.ag-group-title-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-group-title[_ngcontent-%COMP%] {\n  display: block;\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ag-group-title-bar[_ngcontent-%COMP%]   .ag-group-title[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.ag-group-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-group-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-disabled[_ngcontent-%COMP%]   .ag-group-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.ag-group-container-horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.ag-group-container-vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.ag-charts-font-size-color[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: stretch;\n  justify-content: space-between;\n}\n.ag-column-group-icons[_ngcontent-%COMP%] {\n  display: block;\n}\n.ag-column-group-icons[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-group-item-alignment-stretch[_ngcontent-%COMP%]   .ag-group-item[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n.ag-group-item-alignment-start[_ngcontent-%COMP%]   .ag-group-item[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.ag-group-item-alignment-end[_ngcontent-%COMP%]   .ag-group-item[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.ag-toggle-button-icon[_ngcontent-%COMP%] {\n  transition: right 0.3s;\n  position: absolute;\n  top: -1px;\n}\n.ag-input-field[_ngcontent-%COMP%], .ag-select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.ag-input-field-input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  width: 100%;\n  min-width: 0;\n}\n.ag-floating-filter-input[_ngcontent-%COMP%]   .ag-input-field-input[type=date][_ngcontent-%COMP%] {\n  width: 1px;\n}\n.ag-range-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-angle-select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-angle-select-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-angle-select-parent-circle[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n.ag-angle-select-child-circle[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.ag-slider-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-slider-wrapper[_ngcontent-%COMP%]   .ag-input-field[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.ag-picker-field-display[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.ag-picker-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-picker-field-icon[_ngcontent-%COMP%] {\n  display: flex;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n.ag-picker-field-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.ag-label-align-right[_ngcontent-%COMP%]   .ag-label[_ngcontent-%COMP%] {\n  order: 1;\n}\n.ag-label-align-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: none;\n}\n.ag-label-align-top[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.ag-label-align-top[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  align-self: stretch;\n}\n.ag-color-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.ag-spectrum-color[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n  cursor: default;\n}\n.ag-spectrum-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ag-spectrum-val[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-spectrum-dragger[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  cursor: pointer;\n}\n.ag-spectrum-hue[_ngcontent-%COMP%] {\n  cursor: default;\n  background: linear-gradient(to left, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n.ag-spectrum-alpha[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.ag-spectrum-hue-background[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.ag-spectrum-alpha-background[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), black);\n  width: 100%;\n  height: 100%;\n}\n.ag-spectrum-tool[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-spectrum-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n}\n.ag-recent-colors[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-recent-color[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-1[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-1[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-1[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-1[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-2[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-2[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-2[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-2[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-3[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-3[_ngcontent-%COMP%] {\n  padding-right: 60px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-3[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-3[_ngcontent-%COMP%] {\n  padding-right: 60px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-4[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-4[_ngcontent-%COMP%] {\n  padding-right: 80px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-4[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-4[_ngcontent-%COMP%] {\n  padding-right: 80px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-5[_ngcontent-%COMP%] {\n  padding-left: 100px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-5[_ngcontent-%COMP%] {\n  padding-right: 100px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-5[_ngcontent-%COMP%] {\n  padding-left: 100px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-5[_ngcontent-%COMP%] {\n  padding-right: 100px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-6[_ngcontent-%COMP%] {\n  padding-left: 120px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-6[_ngcontent-%COMP%] {\n  padding-right: 120px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-6[_ngcontent-%COMP%] {\n  padding-left: 120px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-6[_ngcontent-%COMP%] {\n  padding-right: 120px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-7[_ngcontent-%COMP%] {\n  padding-left: 140px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-7[_ngcontent-%COMP%] {\n  padding-right: 140px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-7[_ngcontent-%COMP%] {\n  padding-left: 140px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-7[_ngcontent-%COMP%] {\n  padding-right: 140px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-8[_ngcontent-%COMP%] {\n  padding-left: 160px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-8[_ngcontent-%COMP%] {\n  padding-right: 160px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-8[_ngcontent-%COMP%] {\n  padding-left: 160px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-8[_ngcontent-%COMP%] {\n  padding-right: 160px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-9[_ngcontent-%COMP%] {\n  padding-left: 180px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-9[_ngcontent-%COMP%] {\n  padding-right: 180px;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-9[_ngcontent-%COMP%] {\n  padding-left: 180px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-9[_ngcontent-%COMP%] {\n  padding-right: 180px;\n}\n.ag-ltr[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%], .ag-ltr[_ngcontent-%COMP%]   .ag-floating-top[_ngcontent-%COMP%], .ag-ltr[_ngcontent-%COMP%]   .ag-floating-bottom[_ngcontent-%COMP%], .ag-ltr[_ngcontent-%COMP%]   .ag-header[_ngcontent-%COMP%], .ag-ltr[_ngcontent-%COMP%]   .ag-body-viewport[_ngcontent-%COMP%], .ag-ltr[_ngcontent-%COMP%]   .ag-body-horizontal-scroll[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.ag-rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-body[_ngcontent-%COMP%], .ag-rtl[_ngcontent-%COMP%]   .ag-floating-top[_ngcontent-%COMP%], .ag-rtl[_ngcontent-%COMP%]   .ag-floating-bottom[_ngcontent-%COMP%], .ag-rtl[_ngcontent-%COMP%]   .ag-header[_ngcontent-%COMP%], .ag-rtl[_ngcontent-%COMP%]   .ag-body-viewport[_ngcontent-%COMP%], .ag-rtl[_ngcontent-%COMP%]   .ag-body-horizontal-scroll[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-icon-contracted[_ngcontent-%COMP%], .ag-rtl[_ngcontent-%COMP%]   .ag-icon-tree-closed[_ngcontent-%COMP%] {\n  display: block;\n  transform: rotate(180deg);\n}\n.ag-body[_ngcontent-%COMP%]   .ag-body-viewport[_ngcontent-%COMP%] {\n  -webkit-overflow-scrolling: touch;\n}\n.ag-chart[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n.ag-chart-components-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n.ag-chart-title-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  text-align: center;\n}\n.ag-chart-title-edit.currently-editing[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.ag-chart-canvas-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n.ag-charts-canvas[_ngcontent-%COMP%] {\n  display: block;\n}\n.ag-chart-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  width: 24px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.ag-ltr[_ngcontent-%COMP%]   .ag-chart-menu[_ngcontent-%COMP%] {\n  right: 20px;\n}\n.ag-rtl[_ngcontent-%COMP%]   .ag-chart-menu[_ngcontent-%COMP%] {\n  left: 20px;\n}\n.ag-chart-docked-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 0;\n  min-width: 0;\n  transition: min-width 0.4s;\n}\n.ag-chart-menu-hidden[_ngcontent-%COMP%]    ~ .ag-chart-docked-container[_ngcontent-%COMP%] {\n  max-width: 0;\n  overflow: hidden;\n}\n.ag-chart-tabbed-menu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.ag-chart-tabbed-menu-header[_ngcontent-%COMP%] {\n  flex: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: default;\n}\n.ag-chart-tabbed-menu-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: stretch;\n  overflow: hidden;\n}\n.ag-chart-tab[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.ag-chart-settings[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.ag-chart-settings-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: hidden;\n}\n.ag-chart-settings-nav-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 30px;\n  align-items: center;\n}\n.ag-chart-settings-card-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex: 1 1 auto;\n  height: 100%;\n  padding: 0 10px;\n}\n.ag-chart-settings-card-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  position: relative;\n}\n.ag-chart-settings-card-item.ag-not-selected[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n.ag-chart-settings-card-item[_ngcontent-%COMP%]:before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  background-color: transparent;\n  left: 50%;\n  top: 50%;\n  margin-left: -10px;\n  margin-top: -10px;\n  width: 20px;\n  height: 20px;\n}\n.ag-chart-settings-prev[_ngcontent-%COMP%], .ag-chart-settings-next[_ngcontent-%COMP%] {\n  position: relative;\n  flex: none;\n}\n.ag-chart-settings-prev-button[_ngcontent-%COMP%], .ag-chart-settings-next-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n.ag-chart-settings-mini-charts-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.ag-chart-settings-mini-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n.ag-chart-settings-mini-wrapper.ag-animating[_ngcontent-%COMP%] {\n  transition: left 0.3s;\n  transition-timing-function: ease-in-out;\n}\n.ag-chart-mini-thumbnail[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-chart-mini-thumbnail-canvas[_ngcontent-%COMP%] {\n  display: block;\n}\n.ag-chart-data-wrapper[_ngcontent-%COMP%], .ag-chart-format-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.ag-chart-data-section[_ngcontent-%COMP%], .ag-chart-format-section[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n}\n.ag-charts-font-panel-controls[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.ag-chart-empty-text[_ngcontent-%COMP%] {\n  display: flex;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.ag-chart[_ngcontent-%COMP%]   .ag-chart-menu[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.ag-chart-menu-hidden[_ngcontent-%COMP%]:hover   .ag-chart-menu[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n.ag-chart-settings-nav-bar[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.ag-date-time-list-page-title-bar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-date-time-list-page-column-labels-row[_ngcontent-%COMP%], .ag-date-time-list-page-entries-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ag-date-time-list-page-column-label[_ngcontent-%COMP%], .ag-date-time-list-page-entry[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n}\n.ag-date-time-list-page-entry[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-theme-alpine[_ngcontent-%COMP%] {\n  -webkit-font-smoothing: antialiased;\n  color: #181d1f;\n  color: var(--ag-foreground-color, #181d1f);\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-size: 13px;\n  line-height: normal;\n}\n@font-face {\n  font-family: \"agGridAlpine\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64,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\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon[_ngcontent-%COMP%] {\n  font-family: \"agGridAlpine\";\n  font-size: 16px;\n  line-height: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-aggregation[_ngcontent-%COMP%]:before {\n  content: \"\\f101\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-arrows[_ngcontent-%COMP%]:before {\n  content: \"\\f102\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-asc[_ngcontent-%COMP%]:before {\n  content: \"\\f103\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-cancel[_ngcontent-%COMP%]:before {\n  content: \"\\f104\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-chart[_ngcontent-%COMP%]:before {\n  content: \"\\f105\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-color-picker[_ngcontent-%COMP%]:before {\n  content: \"\\f109\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-columns[_ngcontent-%COMP%]:before {\n  content: \"\\f10a\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-contracted[_ngcontent-%COMP%]:before {\n  content: \"\\f10b\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-copy[_ngcontent-%COMP%]:before {\n  content: \"\\f10c\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-cross[_ngcontent-%COMP%]:before {\n  content: \"\\f10d\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-desc[_ngcontent-%COMP%]:before {\n  content: \"\\f10e\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-expanded[_ngcontent-%COMP%]:before {\n  content: \"\\f10f\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-eye-slash[_ngcontent-%COMP%]:before {\n  content: \"\\f110\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-eye[_ngcontent-%COMP%]:before {\n  content: \"\\f111\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-filter[_ngcontent-%COMP%]:before {\n  content: \"\\f112\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-first[_ngcontent-%COMP%]:before {\n  content: \"\\f113\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-grip[_ngcontent-%COMP%]:before {\n  content: \"\\f114\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-group[_ngcontent-%COMP%]:before {\n  content: \"\\f115\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-last[_ngcontent-%COMP%]:before {\n  content: \"\\f116\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-left[_ngcontent-%COMP%]:before {\n  content: \"\\f117\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-linked[_ngcontent-%COMP%]:before {\n  content: \"\\f118\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-loading[_ngcontent-%COMP%]:before {\n  content: \"\\f119\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-maximize[_ngcontent-%COMP%]:before {\n  content: \"\\f11a\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-menu[_ngcontent-%COMP%]:before {\n  content: \"\\f11b\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-minimize[_ngcontent-%COMP%]:before {\n  content: \"\\f11c\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-next[_ngcontent-%COMP%]:before {\n  content: \"\\f11d\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-none[_ngcontent-%COMP%]:before {\n  content: \"\\f11e\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-not-allowed[_ngcontent-%COMP%]:before {\n  content: \"\\f11f\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-paste[_ngcontent-%COMP%]:before {\n  content: \"\\f120\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-pin[_ngcontent-%COMP%]:before {\n  content: \"\\f121\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-pivot[_ngcontent-%COMP%]:before {\n  content: \"\\f122\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-previous[_ngcontent-%COMP%]:before {\n  content: \"\\f123\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-right[_ngcontent-%COMP%]:before {\n  content: \"\\f126\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-save[_ngcontent-%COMP%]:before {\n  content: \"\\f127\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-small-down[_ngcontent-%COMP%]:before {\n  content: \"\\f128\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-small-left[_ngcontent-%COMP%]:before {\n  content: \"\\f129\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-small-right[_ngcontent-%COMP%]:before {\n  content: \"\\f12a\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-small-up[_ngcontent-%COMP%]:before {\n  content: \"\\f12b\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-tick[_ngcontent-%COMP%]:before {\n  content: \"\\f12c\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-tree-closed[_ngcontent-%COMP%]:before {\n  content: \"\\f12d\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-tree-indeterminate[_ngcontent-%COMP%]:before {\n  content: \"\\f12e\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-tree-open[_ngcontent-%COMP%]:before {\n  content: \"\\f12f\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-unlinked[_ngcontent-%COMP%]:before {\n  content: \"\\f130\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-row-drag[_ngcontent-%COMP%]:before {\n  content: \"\\f114\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-right-arrow[_ngcontent-%COMP%]:before {\n  content: \"\\f117\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-right-arrow[_ngcontent-%COMP%]:before {\n  content: \"\\f126\";\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-root-wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   [class^=ag-][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   [class^=ag-][_ngcontent-%COMP%]:focus, .ag-theme-alpine[_ngcontent-%COMP%]   [class^=ag-][_ngcontent-%COMP%]:after, .ag-theme-alpine[_ngcontent-%COMP%]   [class^=ag-][_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   [class^=ag-][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox[_ngcontent-%COMP%]   .ag-input-wrapper[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-radio-button[_ngcontent-%COMP%]   .ag-input-wrapper[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-range-field[_ngcontent-%COMP%]   .ag-input-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-toggle-button[_ngcontent-%COMP%] {\n  flex: none;\n  width: unset;\n  min-width: unset;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-label-align-right[_ngcontent-%COMP%]   .ag-label[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-label-align-right[_ngcontent-%COMP%]   .ag-label[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   textarea[class^=ag-][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   select[class^=ag-][_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][_ngcontent-%COMP%]:not([type]), .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=text][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=number][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=tel][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=date][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=datetime-local][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   textarea[class^=ag-][_ngcontent-%COMP%] {\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #babfc7;\n  border-color: var(--ag-input-border-color, var(--ag-border-color, #babfc7));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][_ngcontent-%COMP%]:not([type]):disabled, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=text][_ngcontent-%COMP%]:disabled, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=number][_ngcontent-%COMP%]:disabled, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=tel][_ngcontent-%COMP%]:disabled, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=date][_ngcontent-%COMP%]:disabled, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=datetime-local][_ngcontent-%COMP%]:disabled, .ag-theme-alpine[_ngcontent-%COMP%]   textarea[class^=ag-][_ngcontent-%COMP%]:disabled {\n  color: rgba(24, 29, 31, 0.5);\n  color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n  background-color: #f1f2f4;\n  background-color: var(--ag-input-disabled-background-color, #f1f2f4);\n  border-color: rgba(186, 191, 199, 0.3);\n  border-color: var(--ag-input-disabled-border-color, rgba(186, 191, 199, 0.3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][_ngcontent-%COMP%]:not([type]):focus, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=text][_ngcontent-%COMP%]:focus, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=number][_ngcontent-%COMP%]:focus, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=tel][_ngcontent-%COMP%]:focus, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=date][_ngcontent-%COMP%]:focus, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=datetime-local][_ngcontent-%COMP%]:focus, .ag-theme-alpine[_ngcontent-%COMP%]   textarea[class^=ag-][_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=button][_ngcontent-%COMP%]:focus, .ag-theme-alpine[_ngcontent-%COMP%]   button[class^=ag-][_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-drag-handle[_ngcontent-%COMP%] {\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-list-item[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-virtual-list-item[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-virtual-list-item[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-virtual-list-item[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select-list[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-list-item.ag-active-item[_ngcontent-%COMP%] {\n  background-color: rgba(33, 150, 243, 0.1);\n  background-color: var(--ag-row-hover-color, rgba(33, 150, 243, 0.1));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select-list-item[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n  cursor: default;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select[_ngcontent-%COMP%]   .ag-picker-field-wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n  min-height: 30px;\n  cursor: default;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select[_ngcontent-%COMP%]:not(.ag-cell-editor) {\n  height: 30px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select[_ngcontent-%COMP%]   .ag-picker-field-display[_ngcontent-%COMP%] {\n  margin: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select[_ngcontent-%COMP%]   .ag-picker-field-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select.ag-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rich-select[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rich-select-list[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 200px;\n  height: 273px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rich-select-value[_ngcontent-%COMP%] {\n  padding: 0 6px 0 18px;\n  height: 42px;\n  border-bottom: solid 1px;\n  border-bottom-color: #dde2eb;\n  border-bottom-color: var(--ag-secondary-border-color, #dde2eb);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rich-select-virtual-list-item[_ngcontent-%COMP%] {\n  cursor: default;\n  height: 30px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rich-select-virtual-list-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(33, 150, 243, 0.1);\n  background-color: var(--ag-row-hover-color, rgba(33, 150, 243, 0.1));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rich-select-row[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rich-select-row-selected[_ngcontent-%COMP%] {\n  background-color: rgba(33, 150, 243, 0.3);\n  background-color: var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-drag[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-selection-checkbox[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-expanded[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-contracted[_ngcontent-%COMP%] {\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-drag[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-selection-checkbox[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-group-expanded[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-group-contracted[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-drag[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-selection-checkbox[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-group-expanded[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-group-contracted[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.ag-cell-value):not(.ag-group-value) {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  flex: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-expanded[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-contracted[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-title-bar-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: none;\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-group-child-count[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-group-child-count[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-title-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--ag-subheader-background-color, #fff);\n  padding: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-toolbar[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-disabled-group-title-bar[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-disabled-group-container[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%] {\n  margin: 3px 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-label[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-label[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-label-align-top[_ngcontent-%COMP%]   .ag-label[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-slider-field[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-angle-select-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-slider-field[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-angle-select-field[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-angle-select-parent-circle[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 12px;\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-angle-select-child-circle[_ngcontent-%COMP%] {\n  top: 4px;\n  left: 12px;\n  width: 6px;\n  height: 6px;\n  margin-left: -3px;\n  margin-top: -4px;\n  border-radius: 3px;\n  background-color: #181d1f;\n  background-color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-picker-field-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  border-radius: 5px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-picker-field-wrapper[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-picker-field-button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-dialog.ag-color-dialog[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-color-picker[_ngcontent-%COMP%]   .ag-picker-field-display[_ngcontent-%COMP%] {\n  height: 16px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-color-panel[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-spectrum-color[_ngcontent-%COMP%] {\n  background-color: red;\n  border-radius: 2px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-spectrum-tools[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-spectrum-sat[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-spectrum-val[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-spectrum-dragger[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  height: 12px;\n  width: 12px;\n  border: 1px solid white;\n  background: black;\n  box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-spectrum-hue-background[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-spectrum-alpha-background[_ngcontent-%COMP%] {\n  border-radius: 2px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-spectrum-tool[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  height: 11px;\n  border-radius: 2px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-spectrum-slider[_ngcontent-%COMP%] {\n  margin-top: -12px;\n  width: 13px;\n  height: 13px;\n  border-radius: 13px;\n  background-color: #f8f8f8;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-recent-color[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-recent-color[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-recent-color[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.ag-theme-alpine.ag-dnd-ghost[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  background: #fff;\n  background: var(--ag-background-color, #fff);\n  border-radius: 3px;\n  box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n  padding: 6px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  z-index: 10;\n  border: solid 1px;\n  border-color: #dde2eb;\n  border-color: var(--ag-secondary-border-color, #dde2eb);\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n  height: 48px !important;\n  line-height: 48px;\n  margin: 0;\n  padding: 0 12px;\n  transform: translateY(12px);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-dnd-ghost-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  color: #181d1f;\n  color: var(--ag-foreground-color, #181d1f);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-popup-child[_ngcontent-%COMP%]:not(.ag-tooltip-custom) {\n  box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n}\n.ag-dragging-range-handle[_ngcontent-%COMP%]   .ag-theme-alpine[_ngcontent-%COMP%]   .ag-dialog[_ngcontent-%COMP%], .ag-dragging-fill-handle[_ngcontent-%COMP%]   .ag-theme-alpine[_ngcontent-%COMP%]   .ag-dialog[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-dialog[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-panel[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-panel-title-bar[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-header-background-color, #f8f8f8);\n  color: #181d1f;\n  color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)));\n  height: 48px;\n  padding: 6px 18px;\n  border-bottom: solid 1px;\n  border-bottom-color: #babfc7;\n  border-bottom-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-panel-title-bar-button[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-panel-title-bar-button[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tooltip[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-header-background-color, #f8f8f8);\n  color: #181d1f;\n  color: var(--ag-foreground-color, #181d1f);\n  padding: 6px;\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  border-radius: 3px;\n  transition: opacity 1s;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tooltip.ag-tooltip-hiding[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-1[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-1[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-2[_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-2[_ngcontent-%COMP%] {\n  padding-right: 32px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-3[_ngcontent-%COMP%] {\n  padding-left: 48px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-3[_ngcontent-%COMP%] {\n  padding-right: 48px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-4[_ngcontent-%COMP%] {\n  padding-left: 64px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-4[_ngcontent-%COMP%] {\n  padding-right: 64px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-5[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-5[_ngcontent-%COMP%] {\n  padding-right: 80px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-6[_ngcontent-%COMP%] {\n  padding-left: 96px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-6[_ngcontent-%COMP%] {\n  padding-right: 96px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-7[_ngcontent-%COMP%] {\n  padding-left: 112px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-7[_ngcontent-%COMP%] {\n  padding-right: 112px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-8[_ngcontent-%COMP%] {\n  padding-left: 128px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-8[_ngcontent-%COMP%] {\n  padding-right: 128px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-indent-9[_ngcontent-%COMP%] {\n  padding-left: 144px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-indent-9[_ngcontent-%COMP%] {\n  padding-right: 144px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-select-header-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-column-select-header-icon[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-column-select-header-icon[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 0px;\n  left: 0px;\n  display: block;\n  width: calc(100% - 0px);\n  height: calc(100% - 0px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-group-icons[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-header-icon[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-header-checkbox[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-header-filter-wrapper[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-checkbox[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-column-drag-handle[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-column-group-drag-handle[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-column-label[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-group-icons[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-header-icon[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-header-checkbox[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-header-filter-wrapper[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-checkbox[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-column-drag-handle[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-column-group-drag-handle[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-column-label[_ngcontent-%COMP%]:not(:last-child) {\n  margin-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-column-select-column-group[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-column-select-column-group[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: -3px;\n  left: -3px;\n  display: block;\n  width: calc(100% - -6px);\n  height: calc(100% - -6px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-column-select-column[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-column-select-column[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: -3px;\n  left: -3px;\n  display: block;\n  width: calc(100% - -6px);\n  height: calc(100% - -6px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-select-column-group[_ngcontent-%COMP%]:not(:last-child), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-select-column[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 9px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-select-column-readonly[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-select-column-group-readonly[_ngcontent-%COMP%] {\n  color: rgba(24, 29, 31, 0.5);\n  color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n  pointer-events: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-select-add-group-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-select-add-group-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-select-list[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-root-wrapper[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  border-radius: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-1[_ngcontent-%COMP%] {\n  padding-left: 46px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-1[_ngcontent-%COMP%] {\n  padding-right: 46px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-1[_ngcontent-%COMP%] {\n  padding-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-1[_ngcontent-%COMP%] {\n  padding-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-1[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-1[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-2[_ngcontent-%COMP%] {\n  padding-left: 74px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-2[_ngcontent-%COMP%] {\n  padding-right: 74px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-2[_ngcontent-%COMP%] {\n  padding-left: 56px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-2[_ngcontent-%COMP%] {\n  padding-right: 56px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-2[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-2[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-3[_ngcontent-%COMP%] {\n  padding-left: 102px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-3[_ngcontent-%COMP%] {\n  padding-right: 102px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-3[_ngcontent-%COMP%] {\n  padding-left: 84px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-3[_ngcontent-%COMP%] {\n  padding-right: 84px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-3[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-3[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-4[_ngcontent-%COMP%] {\n  padding-left: 130px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-4[_ngcontent-%COMP%] {\n  padding-right: 130px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-4[_ngcontent-%COMP%] {\n  padding-left: 112px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-4[_ngcontent-%COMP%] {\n  padding-right: 112px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-4[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-4[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-5[_ngcontent-%COMP%] {\n  padding-left: 158px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-5[_ngcontent-%COMP%] {\n  padding-right: 158px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-5[_ngcontent-%COMP%] {\n  padding-left: 140px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-5[_ngcontent-%COMP%] {\n  padding-right: 140px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-5[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-5[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-6[_ngcontent-%COMP%] {\n  padding-left: 186px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-6[_ngcontent-%COMP%] {\n  padding-right: 186px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-6[_ngcontent-%COMP%] {\n  padding-left: 168px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-6[_ngcontent-%COMP%] {\n  padding-right: 168px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-6[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-6[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-7[_ngcontent-%COMP%] {\n  padding-left: 214px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-7[_ngcontent-%COMP%] {\n  padding-right: 214px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-7[_ngcontent-%COMP%] {\n  padding-left: 196px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-7[_ngcontent-%COMP%] {\n  padding-right: 196px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-7[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-7[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-8[_ngcontent-%COMP%] {\n  padding-left: 242px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-8[_ngcontent-%COMP%] {\n  padding-right: 242px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-8[_ngcontent-%COMP%] {\n  padding-left: 224px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-8[_ngcontent-%COMP%] {\n  padding-right: 224px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-8[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-8[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-9[_ngcontent-%COMP%] {\n  padding-left: 270px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-9[_ngcontent-%COMP%] {\n  padding-right: 270px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-9[_ngcontent-%COMP%] {\n  padding-left: 252px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-9[_ngcontent-%COMP%] {\n  padding-right: 252px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-9[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-9[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-10[_ngcontent-%COMP%] {\n  padding-left: 298px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-10[_ngcontent-%COMP%] {\n  padding-right: 298px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-10[_ngcontent-%COMP%] {\n  padding-left: 280px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-10[_ngcontent-%COMP%] {\n  padding-right: 280px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-10[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-10[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-11[_ngcontent-%COMP%] {\n  padding-left: 326px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-11[_ngcontent-%COMP%] {\n  padding-right: 326px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-11[_ngcontent-%COMP%] {\n  padding-left: 308px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-11[_ngcontent-%COMP%] {\n  padding-right: 308px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-11[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-11[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-12[_ngcontent-%COMP%] {\n  padding-left: 354px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-12[_ngcontent-%COMP%] {\n  padding-right: 354px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-12[_ngcontent-%COMP%] {\n  padding-left: 336px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-12[_ngcontent-%COMP%] {\n  padding-right: 336px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-12[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-12[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-13[_ngcontent-%COMP%] {\n  padding-left: 382px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-13[_ngcontent-%COMP%] {\n  padding-right: 382px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-13[_ngcontent-%COMP%] {\n  padding-left: 364px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-13[_ngcontent-%COMP%] {\n  padding-right: 364px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-13[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-13[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-14[_ngcontent-%COMP%] {\n  padding-left: 410px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-14[_ngcontent-%COMP%] {\n  padding-right: 410px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-14[_ngcontent-%COMP%] {\n  padding-left: 392px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-14[_ngcontent-%COMP%] {\n  padding-right: 392px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-14[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-14[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-15[_ngcontent-%COMP%] {\n  padding-left: 438px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-15[_ngcontent-%COMP%] {\n  padding-right: 438px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-15[_ngcontent-%COMP%] {\n  padding-left: 420px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-15[_ngcontent-%COMP%] {\n  padding-right: 420px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-15[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-15[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-16[_ngcontent-%COMP%] {\n  padding-left: 466px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-16[_ngcontent-%COMP%] {\n  padding-right: 466px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-16[_ngcontent-%COMP%] {\n  padding-left: 448px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-16[_ngcontent-%COMP%] {\n  padding-right: 448px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-16[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-16[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-17[_ngcontent-%COMP%] {\n  padding-left: 494px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-17[_ngcontent-%COMP%] {\n  padding-right: 494px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-17[_ngcontent-%COMP%] {\n  padding-left: 476px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-17[_ngcontent-%COMP%] {\n  padding-right: 476px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-17[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-17[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-18[_ngcontent-%COMP%] {\n  padding-left: 522px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-18[_ngcontent-%COMP%] {\n  padding-right: 522px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-18[_ngcontent-%COMP%] {\n  padding-left: 504px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-18[_ngcontent-%COMP%] {\n  padding-right: 504px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-18[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-18[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-19[_ngcontent-%COMP%] {\n  padding-left: 550px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper.ag-row-group-indent-19[_ngcontent-%COMP%] {\n  padding-right: 550px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-group-indent-19[_ngcontent-%COMP%] {\n  padding-left: 532px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-group-indent-19[_ngcontent-%COMP%] {\n  padding-right: 532px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-row-level-19[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-left: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-row-level-19[_ngcontent-%COMP%]   .ag-row-group-leaf-indent[_ngcontent-%COMP%] {\n  margin-right: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell[_ngcontent-%COMP%] {\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-value-change-delta[_ngcontent-%COMP%] {\n  padding-right: 2px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-value-change-delta-up[_ngcontent-%COMP%] {\n  color: #43a047;\n  color: var(--ag-value-change-delta-up-color, #43a047);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-value-change-delta-down[_ngcontent-%COMP%] {\n  color: #e53935;\n  color: var(--ag-value-change-delta-down-color, #e53935);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-value-change-value[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-radius: 1px;\n  padding-left: 1px;\n  padding-right: 1px;\n  transition: background-color 1s;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-value-change-value-highlight[_ngcontent-%COMP%] {\n  background-color: rgba(22, 160, 133, 0.5);\n  background-color: var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5));\n  transition: background-color 0.1s;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-data-changed[_ngcontent-%COMP%] {\n  background-color: rgba(22, 160, 133, 0.5) !important;\n  background-color: var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5)) !important;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-data-changed-animation[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-highlight[_ngcontent-%COMP%] {\n  background-color: #2196f3 !important;\n  background-color: var(--ag-range-selection-highlight-color, var(--ag-range-selection-border-color, #2196f3)) !important;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%] {\n  height: 42px;\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n  color: #181d1f;\n  color: var(--ag-data-color, var(--ag-foreground-color, #181d1f));\n  border-width: 1px;\n  border-color: #dde2eb;\n  border-color: var(--ag-row-border-color, var(--ag-secondary-border-color, #dde2eb));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]:not(.ag-row-first) {\n  border-top-style: solid;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row.ag-row-last[_ngcontent-%COMP%] {\n  border-bottom-style: solid;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-highlight-above[_ngcontent-%COMP%]::after, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-highlight-below[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: calc(100% - 1px);\n  height: 1px;\n  background-color: #2196f3;\n  background-color: var(--ag-range-selection-border-color, #2196f3);\n  left: 1px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-highlight-above[_ngcontent-%COMP%]::after {\n  top: -1px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-highlight-above.ag-row-first[_ngcontent-%COMP%]::after {\n  top: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-highlight-below[_ngcontent-%COMP%]::after {\n  bottom: 0px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-odd[_ngcontent-%COMP%] {\n  background-color: #fcfcfc;\n  background-color: var(--ag-odd-row-background-color, #fcfcfc);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-horizontal-left-spacer[_ngcontent-%COMP%]:not(.ag-scroller-corner) {\n  border-right: solid 1px;\n  border-right-color: #babfc7;\n  border-right-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-horizontal-right-spacer[_ngcontent-%COMP%]:not(.ag-scroller-corner) {\n  border-left: solid 1px;\n  border-left-color: #babfc7;\n  border-left-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-hover[_ngcontent-%COMP%] {\n  background-color: rgba(33, 150, 243, 0.1);\n  background-color: var(--ag-row-hover-color, rgba(33, 150, 243, 0.1));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-right-aligned-cell[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-right-aligned-cell[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-right-aligned-cell[_ngcontent-%COMP%]   .ag-cell-value[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-right-aligned-cell[_ngcontent-%COMP%]   .ag-cell-value[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  line-height: 40px;\n  padding-left: 17px;\n  padding-right: 17px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%]    > .ag-cell-wrapper[_ngcontent-%COMP%] {\n  padding-left: 17px;\n  padding-right: 17px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-dragging[_ngcontent-%COMP%] {\n  cursor: move;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-dragging[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-inline-editing[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  background: #fff;\n  background: var(--ag-background-color, #fff);\n  border-radius: 3px;\n  box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n  padding: 6px;\n  padding: 0;\n  height: 42px;\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-popup-editor[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  background: #fff;\n  background: var(--ag-background-color, #fff);\n  border-radius: 3px;\n  box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n  padding: 6px;\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n  padding: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-large-text-input[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-details-row[_ngcontent-%COMP%] {\n  padding: 30px;\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-overlay-loading-wrapper[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.66);\n  background-color: var(--ag-modal-overlay-background-color, rgba(255, 255, 255, 0.66));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-overlay-loading-center[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  background: #fff;\n  background: var(--ag-background-color, #fff);\n  border-radius: 3px;\n  box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n  padding: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-overlay-no-rows-wrapper.ag-layout-auto-height[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-loading[_ngcontent-%COMP%] {\n  padding-left: 18px;\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-loading-icon[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-icon-loading[_ngcontent-%COMP%] {\n  animation-name: spin;\n  animation-duration: 1000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-floating-top[_ngcontent-%COMP%] {\n  border-bottom: solid 1px;\n  border-bottom-color: #babfc7;\n  border-bottom-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-floating-bottom[_ngcontent-%COMP%] {\n  border-top: solid 1px;\n  border-top-color: #babfc7;\n  border-top-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-cell[_ngcontent-%COMP%] {\n  border-right: solid transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-cell[_ngcontent-%COMP%] {\n  border-left: solid transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-cell[_ngcontent-%COMP%] {\n  border-right-width: 1px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-cell[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-cell-first-right-pinned[_ngcontent-%COMP%]:not(.ag-cell-range-left):not(.ag-cell-range-single-cell) {\n  border-left: solid 1px;\n  border-left-color: #babfc7;\n  border-left-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-cell-last-left-pinned[_ngcontent-%COMP%]:not(.ag-cell-range-right):not(.ag-cell-range-single-cell) {\n  border-right: solid 1px;\n  border-right-color: #babfc7;\n  border-right-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row-selected[_ngcontent-%COMP%] {\n  background-color: rgba(33, 150, 243, 0.3);\n  background-color: var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-range-selected[_ngcontent-%COMP%]:not(.ag-cell-focus) {\n  background-color: rgba(33, 150, 243, 0.2);\n  background-color: var(--ag-range-selection-background-color, rgba(33, 150, 243, 0.2));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-range-selected[_ngcontent-%COMP%]:not(.ag-cell-focus).ag-cell-range-chart {\n  background-color: rgba(0, 88, 255, 0.1);\n  background-color: var(--ag-range-selection-chart-background-color, rgba(0, 88, 255, 0.1));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-range-selected[_ngcontent-%COMP%]:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category {\n  background-color: rgba(0, 255, 132, 0.1);\n  background-color: var(--ag-range-selection-chart-category-background-color, rgba(0, 255, 132, 0.1));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-range-selected-1[_ngcontent-%COMP%]:not(.ag-cell-focus) {\n  background-color: rgba(33, 150, 243, 0.2);\n  background-color: var(--ag-range-selection-background-color-1, var(--ag-range-selection-background-color, rgba(33, 150, 243, 0.2)));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-range-selected-2[_ngcontent-%COMP%]:not(.ag-cell-focus) {\n  background-color: rgba(33, 150, 243, 0.36);\n  background-color: var(--ag-range-selection-background-color-2, rgba(33, 150, 243, 0.36));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-range-selected-3[_ngcontent-%COMP%]:not(.ag-cell-focus) {\n  background-color: rgba(33, 150, 243, 0.488);\n  background-color: var(--ag-range-selection-background-color-3, rgba(33, 150, 243, 0.488));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-range-selected-4[_ngcontent-%COMP%]:not(.ag-cell-focus) {\n  background-color: rgba(33, 150, 243, 0.5904);\n  background-color: var(--ag-range-selection-background-color-4, rgba(33, 150, 243, 0.5904));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-cell-range-selected[_ngcontent-%COMP%]:not(.ag-cell-range-single-cell).ag-cell-range-top {\n  border-top-color: #2196f3;\n  border-top-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-cell-range-selected[_ngcontent-%COMP%]:not(.ag-cell-range-single-cell).ag-cell-range-right {\n  border-right-color: #2196f3;\n  border-right-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-cell-range-selected[_ngcontent-%COMP%]:not(.ag-cell-range-single-cell).ag-cell-range-bottom {\n  border-bottom-color: #2196f3;\n  border-bottom-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-cell-range-selected[_ngcontent-%COMP%]:not(.ag-cell-range-single-cell).ag-cell-range-left {\n  border-left-color: #2196f3;\n  border-left-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-has-focus[_ngcontent-%COMP%]   .ag-cell-focus[_ngcontent-%COMP%]:not(.ag-cell-range-selected), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-has-focus[_ngcontent-%COMP%]   .ag-cell-focus.ag-cell-range-single-cell[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-cell-range-single-cell.ag-cell-range-handle[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-has-focus[_ngcontent-%COMP%]   .ag-cell-focus[_ngcontent-%COMP%]:not(.ag-cell-range-selected), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-has-focus[_ngcontent-%COMP%]   .ag-cell-focus.ag-cell-range-single-cell[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-cell-range-single-cell.ag-cell-range-handle[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-color: #2196f3;\n  border-color: var(--ag-range-selection-border-color, #2196f3);\n  outline: initial;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-top[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-top.ag-cell-range-selected[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-top-color: #2196f3;\n  border-top-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-right[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-right.ag-cell-range-selected[_ngcontent-%COMP%] {\n  border-right: 1px dashed;\n  border-right-color: #2196f3;\n  border-right-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-right[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-right.ag-cell-range-selected[_ngcontent-%COMP%] {\n  border-left: 1px dashed;\n  border-left-color: #2196f3;\n  border-left-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-bottom[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-bottom.ag-cell-range-selected[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n  border-bottom-color: #2196f3;\n  border-bottom-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-left[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-left.ag-cell-range-selected[_ngcontent-%COMP%] {\n  border-left: 1px dashed;\n  border-left-color: #2196f3;\n  border-left-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-left[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-cell.ag-selection-fill-left.ag-cell-range-selected[_ngcontent-%COMP%] {\n  border-right: 1px dashed;\n  border-right-color: #2196f3;\n  border-right-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-range-handle[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-fill-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  bottom: -1px;\n  background-color: #2196f3;\n  background-color: var(--ag-range-selection-border-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-range-handle[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-fill-handle[_ngcontent-%COMP%] {\n  right: -1px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-range-handle[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-fill-handle[_ngcontent-%COMP%] {\n  left: -1px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-fill-handle[_ngcontent-%COMP%] {\n  cursor: cell;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-range-handle[_ngcontent-%COMP%] {\n  cursor: nwse-resize;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-cell-inline-editing[_ngcontent-%COMP%] {\n  border-color: rgba(33, 150, 243, 0.4) !important;\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)) !important;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  background: #fff;\n  background: var(--ag-background-color, #fff);\n  border-radius: 3px;\n  box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n  padding: 6px;\n  padding: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-list[_ngcontent-%COMP%] {\n  cursor: default;\n  width: 100%;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-option-part[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  line-height: 16px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-option-active[_ngcontent-%COMP%] {\n  background-color: rgba(33, 150, 243, 0.1);\n  background-color: var(--ag-row-hover-color, rgba(33, 150, 243, 0.1));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-option-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-option-text[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-option-icon[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 6px;\n  min-width: 28px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-option-shortcut[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-separator[_ngcontent-%COMP%] {\n  height: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-separator-cell[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  border-top: solid 1px;\n  border-top-color: #babfc7;\n  border-top-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-option-popup-pointer[_ngcontent-%COMP%] {\n  width: 28px;\n  text-align: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tabs-header[_ngcontent-%COMP%] {\n  min-width: 220px;\n  width: 100%;\n  display: flex;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tab[_ngcontent-%COMP%] {\n  border-bottom: 2px solid transparent;\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex: 1 1 auto;\n  transition: border-bottom 0.3s;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-tab[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-tab[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tab-selected[_ngcontent-%COMP%] {\n  border-bottom-color: #2196f3;\n  border-bottom-color: var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-header[_ngcontent-%COMP%] {\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-condition-operator[_ngcontent-%COMP%] {\n  height: 17px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-condition-operator-or[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-condition-operator-or[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-set-filter-select-all[_ngcontent-%COMP%] {\n  padding-top: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-set-filter-list[_ngcontent-%COMP%] {\n  height: 180px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-set-filter-filter[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-to[_ngcontent-%COMP%] {\n  margin-top: 9px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-mini-filter[_ngcontent-%COMP%] {\n  margin: 12px 12px;\n  margin-bottom: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-set-filter-item[_ngcontent-%COMP%] {\n  margin: 0px 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-set-filter-item-value[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-set-filter-item-value[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-header-container[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n  border-bottom: solid 1px;\n  border-bottom-color: #dde2eb;\n  border-bottom-color: var(--ag-secondary-border-color, #dde2eb);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-apply-panel[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n  border-top: solid 1px;\n  border-top-color: #dde2eb;\n  border-top-color: var(--ag-secondary-border-color, #dde2eb);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-apply-panel-button[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-apply-panel-button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-apply-panel-button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-simple-filter-body-wrapper[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n  padding-bottom: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-simple-filter-body-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-no-matches[_ngcontent-%COMP%] {\n  margin: 12px 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-side-bar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tool-panel-wrapper[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-side-buttons[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  width: 20px;\n  position: relative;\n  color: #181d1f;\n  color: var(--ag-foreground-color, #181d1f);\n  overflow: hidden;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   button.ag-side-button-button[_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  background: transparent;\n  padding: 12px 0 12px 0;\n  width: 100%;\n  margin: 0;\n  min-height: 108px;\n  background-position-y: center;\n  background-position-x: center;\n  background-repeat: no-repeat;\n  border: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   button.ag-side-button-button[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-side-button-icon-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%] {\n  border-right: solid 1px;\n  border-right-color: #babfc7;\n  border-right-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%]   .ag-tool-panel-wrapper[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%]   .ag-tool-panel-wrapper[_ngcontent-%COMP%] {\n  border-left: solid 1px;\n  border-left-color: #babfc7;\n  border-left-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%] {\n  border-right: 2px solid transparent;\n  transition: border-right 0.3s;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%]   .ag-selected[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%]   .ag-selected[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%] {\n  border-right-color: #2196f3;\n  border-right-color: var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%] {\n  border-left: solid 1px;\n  border-left-color: #babfc7;\n  border-left-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%]   .ag-tool-panel-wrapper[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%]   .ag-tool-panel-wrapper[_ngcontent-%COMP%] {\n  border-right: solid 1px;\n  border-right-color: #babfc7;\n  border-right-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%] {\n  border-left: 2px solid transparent;\n  transition: border-left 0.3s;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-side-bar-left[_ngcontent-%COMP%]   .ag-selected[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-side-bar-right[_ngcontent-%COMP%]   .ag-selected[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%] {\n  border-left-color: #2196f3;\n  border-left-color: var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-header[_ngcontent-%COMP%] {\n  height: 36px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-header[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-search[_ngcontent-%COMP%] {\n  padding-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-header[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-search[_ngcontent-%COMP%] {\n  padding-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-filter-toolpanel-header[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-filter-toolpanel-header[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group.ag-has-filter[_ngcontent-%COMP%]    > .ag-group-title-bar[_ngcontent-%COMP%]   .ag-group-title[_ngcontent-%COMP%]:after {\n  font-family: \"agGridAlpine\";\n  font-size: 16px;\n  line-height: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\f112\";\n  position: absolute;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group.ag-has-filter[_ngcontent-%COMP%]    > .ag-group-title-bar[_ngcontent-%COMP%]   .ag-group-title[_ngcontent-%COMP%]:after {\n  padding-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group.ag-has-filter[_ngcontent-%COMP%]    > .ag-group-title-bar[_ngcontent-%COMP%]   .ag-group-title[_ngcontent-%COMP%]:after {\n  padding-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-0-header[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-item[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-search[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-search-input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 24px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-search-input[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-search-input[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-0[_ngcontent-%COMP%] {\n  border-top: solid 1px;\n  border-top-color: #dde2eb;\n  border-top-color: var(--ag-secondary-border-color, #dde2eb);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-expand[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-title-bar-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-expand[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-title-bar-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-1[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-1-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-1[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-2-header[_ngcontent-%COMP%] {\n  padding-left: 22px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-1[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-2-header[_ngcontent-%COMP%] {\n  padding-right: 22px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-2[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-2-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-2[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-3-header[_ngcontent-%COMP%] {\n  padding-left: 38px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-2[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-3-header[_ngcontent-%COMP%] {\n  padding-right: 38px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-3[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-3-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-3[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-4-header[_ngcontent-%COMP%] {\n  padding-left: 54px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-3[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-4-header[_ngcontent-%COMP%] {\n  padding-right: 54px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-4[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-4-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-4[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-5-header[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-4[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-5-header[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-5[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-5-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-5[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-6-header[_ngcontent-%COMP%] {\n  padding-left: 86px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-5[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-6-header[_ngcontent-%COMP%] {\n  padding-right: 86px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-6[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-6-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-6[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-7-header[_ngcontent-%COMP%] {\n  padding-left: 102px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-6[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-7-header[_ngcontent-%COMP%] {\n  padding-right: 102px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-7[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-7-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-7[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-8-header[_ngcontent-%COMP%] {\n  padding-left: 118px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-7[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-8-header[_ngcontent-%COMP%] {\n  padding-right: 118px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-8[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-8-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-8[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-9-header[_ngcontent-%COMP%] {\n  padding-left: 134px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-8[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-9-header[_ngcontent-%COMP%] {\n  padding-right: 134px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-9[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-9-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-9[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-10-header[_ngcontent-%COMP%] {\n  padding-left: 150px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-9[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-10-header[_ngcontent-%COMP%] {\n  padding-right: 150px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-10[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-10-header.ag-filter-toolpanel-group-title-bar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-10[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-11-header[_ngcontent-%COMP%] {\n  padding-left: 166px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-10[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-level-11-header[_ngcontent-%COMP%] {\n  padding-right: 166px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-instance-header.ag-filter-toolpanel-group-level-1-header[_ngcontent-%COMP%] {\n  padding-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-instance-filter[_ngcontent-%COMP%] {\n  border-top: solid 1px;\n  border-top-color: #babfc7;\n  border-top-color: var(--ag-border-color, #babfc7);\n  border-bottom: solid 1px;\n  border-bottom-color: #babfc7;\n  border-bottom-color: var(--ag-border-color, #babfc7);\n  padding-top: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-filter-toolpanel-instance-header-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-filter-toolpanel-instance-header-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-pivot-mode-panel[_ngcontent-%COMP%] {\n  height: 48px;\n  display: flex;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-pivot-mode-select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-pivot-mode-select[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-pivot-mode-select[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-column-select-header[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-column-select-header[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-select-header[_ngcontent-%COMP%] {\n  height: 48px;\n  align-items: center;\n  padding: 0 12px;\n  border-bottom: solid 1px;\n  border-bottom-color: #dde2eb;\n  border-bottom-color: var(--ag-secondary-border-color, #dde2eb);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-panel-column-select[_ngcontent-%COMP%] {\n  border-bottom: solid 1px;\n  border-bottom-color: #dde2eb;\n  border-bottom-color: var(--ag-secondary-border-color, #dde2eb);\n  border-top: solid 1px;\n  border-top-color: #dde2eb;\n  border-top-color: var(--ag-secondary-border-color, #dde2eb);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-group-icons[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-select-header-icon[_ngcontent-%COMP%] {\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-header-background-color, #f8f8f8);\n  border-bottom: solid 1px;\n  border-bottom-color: #babfc7;\n  border-bottom-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-row[_ngcontent-%COMP%] {\n  color: #181d1f;\n  color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-pinned-right-header[_ngcontent-%COMP%] {\n  border-left: solid 1px;\n  border-left-color: #babfc7;\n  border-left-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-pinned-left-header[_ngcontent-%COMP%] {\n  border-right: solid 1px;\n  border-right-color: #babfc7;\n  border-right-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-row[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-header-cell[_ngcontent-%COMP%]:not(.ag-right-aligned-header)   .ag-header-label-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-header-cell[_ngcontent-%COMP%]:not(.ag-right-aligned-header)   .ag-header-label-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-header-cell.ag-right-aligned-header[_ngcontent-%COMP%]   .ag-header-label-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-header-cell.ag-right-aligned-header[_ngcontent-%COMP%]   .ag-header-label-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-cell[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-group-cell[_ngcontent-%COMP%] {\n  padding-left: 18px;\n  padding-right: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-cell.ag-header-cell-moving[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-group-cell.ag-header-cell-moving[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--ag-header-cell-moving-background-color, var(--ag-background-color, #fff));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-header-cell[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-header-cell[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-header-group-cell[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-keyboard-focus[_ngcontent-%COMP%]   .ag-header-group-cell[_ngcontent-%COMP%]:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: rgba(33, 150, 243, 0.4);\n  border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-icon[_ngcontent-%COMP%] {\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-expand-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-header-expand-icon[_ngcontent-%COMP%] {\n  padding-left: 4px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-header-expand-icon[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-row[_ngcontent-%COMP%]:not(:first-child)   .ag-header-cell[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-row[_ngcontent-%COMP%]:not(:first-child)   .ag-header-group-cell.ag-header-group-cell-with-group[_ngcontent-%COMP%] {\n  border-top: solid 1px;\n  border-top-color: #babfc7;\n  border-top-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-cell-resize[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-cell-resize[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  display: block;\n  left: calc(50% - 1px);\n  width: 2px;\n  height: 30%;\n  top: calc(50% - 15%);\n  background-color: rgba(186, 191, 199, 0.5);\n  background-color: var(--ag-header-column-resize-handle-color, rgba(186, 191, 199, 0.5));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-pinned-right-header[_ngcontent-%COMP%]   .ag-header-cell-resize[_ngcontent-%COMP%]::after {\n  left: calc(50% - 2px);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-header-select-all[_ngcontent-%COMP%] {\n  margin-right: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-header-select-all[_ngcontent-%COMP%] {\n  margin-left: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-floating-filter-button[_ngcontent-%COMP%] {\n  margin-left: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-floating-filter-button[_ngcontent-%COMP%] {\n  margin-right: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-floating-filter-button-button[_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: transparent;\n  border: none;\n  height: 16px;\n  padding: 0;\n  width: 16px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-loading[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n  height: 100%;\n  padding: 12px 12px;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-paging-panel[_ngcontent-%COMP%] {\n  border-top: 1px solid;\n  border-top-color: #babfc7;\n  border-top-color: var(--ag-border-color, #babfc7);\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n  height: 48px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-paging-panel[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-paging-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  width: 16px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-disabled[_ngcontent-%COMP%]   .ag-paging-button[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-paging-button-wrapper.ag-disabled[_ngcontent-%COMP%] {\n  color: rgba(24, 29, 31, 0.5);\n  color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n  cursor: default;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-paging-button-wrapper[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-paging-description[_ngcontent-%COMP%] {\n  margin: 0 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-status-bar[_ngcontent-%COMP%] {\n  border-top: solid 1px;\n  border-top-color: #babfc7;\n  border-top-color: var(--ag-border-color, #babfc7);\n  color: rgba(24, 29, 31, 0.5);\n  color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n  padding-right: 24px;\n  padding-left: 24px;\n  line-height: 1.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-status-name-value-value[_ngcontent-%COMP%] {\n  color: #181d1f;\n  color: var(--ag-foreground-color, #181d1f);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-status-bar-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-status-name-value[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  margin-right: 6px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-cell[_ngcontent-%COMP%] {\n  background: rgba(24, 29, 31, 0.07);\n  background: var(--ag-chip-background-color, rgba(24, 29, 31, 0.07));\n  border-radius: 24px;\n  height: 24px;\n  padding: 0 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-cell-text[_ngcontent-%COMP%] {\n  margin: 0 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-cell-button[_ngcontent-%COMP%] {\n  min-width: 24px;\n  margin: 0 3px;\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-cell-drag-handle[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-cell-ghost[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-horizontal[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n  height: 42px;\n  border-bottom: solid 1px;\n  border-bottom-color: #babfc7;\n  border-bottom-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-drop-horizontal[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-drop-horizontal[_ngcontent-%COMP%] {\n  padding-right: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-drop-horizontal-half-width[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: solid 1px;\n  border-right-color: #babfc7;\n  border-right-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-drop-horizontal-half-width[_ngcontent-%COMP%]:not(:last-child) {\n  border-left: solid 1px;\n  border-left-color: #babfc7;\n  border-left-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-horizontal-cell-separator[_ngcontent-%COMP%] {\n  margin: 0 6px;\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-horizontal-empty-message[_ngcontent-%COMP%] {\n  color: rgba(24, 29, 31, 0.5);\n  color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-column-drop-horizontal-icon[_ngcontent-%COMP%] {\n  margin-right: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-column-drop-horizontal-icon[_ngcontent-%COMP%] {\n  margin-left: 18px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical-list[_ngcontent-%COMP%] {\n  padding-bottom: 6px;\n  padding-right: 6px;\n  padding-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical-cell[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical[_ngcontent-%COMP%] {\n  min-height: 50px;\n  max-height: 150px;\n  border-bottom: solid 1px;\n  border-bottom-color: #dde2eb;\n  border-bottom-color: var(--ag-secondary-border-color, #dde2eb);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical.ag-last-column-drop[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical-list[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical-empty-message[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  color: rgba(24, 29, 31, 0.5);\n  color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n  margin-top: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select-agg-func-popup[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  background: #fff;\n  background: var(--ag-background-color, #fff);\n  border-radius: 3px;\n  box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n  padding: 6px;\n  background: #fff;\n  background: var(--ag-background-color, #fff);\n  height: 105px;\n  padding: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select-agg-func-virtual-list-item[_ngcontent-%COMP%] {\n  cursor: default;\n  line-height: 30px;\n  padding-left: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-select-agg-func-virtual-list-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(33, 150, 243, 0.3);\n  background-color: var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-menu[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background: #fff;\n  background: var(--ag-background-color, #fff);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-menu-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  line-height: 24px;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 3px;\n  color: #181d1f;\n  color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-menu-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-mini-thumbnail[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-color: #dde2eb;\n  border-color: var(--ag-secondary-border-color, #dde2eb);\n  border-radius: 5px;\n  margin: 5px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-mini-thumbnail[_ngcontent-%COMP%]:nth-last-child(3), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-mini-thumbnail[_ngcontent-%COMP%]:nth-last-child(3)    ~ .ag-chart-mini-thumbnail[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-chart-mini-thumbnail[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-chart-mini-thumbnail[_ngcontent-%COMP%]:first-child {\n  margin-right: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-chart-mini-thumbnail[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-chart-mini-thumbnail[_ngcontent-%COMP%]:last-child {\n  margin-left: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-mini-thumbnail.ag-selected[_ngcontent-%COMP%] {\n  border-color: #2196f3;\n  border-color: var(--ag-minichart-selected-chart-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-settings-card-item[_ngcontent-%COMP%] {\n  background: #181d1f;\n  background: var(--ag-foreground-color, #181d1f);\n  width: 8px;\n  height: 8px;\n  border-radius: 4px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-settings-card-item.ag-selected[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  background-color: var(--ag-minichart-selected-page-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-data-column-drag-handle[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-settings-group-title-bar[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-data-group-title-bar[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-top-level-group-title-bar[_ngcontent-%COMP%] {\n  border-top: solid 1px;\n  border-top-color: #dde2eb;\n  border-top-color: var(--ag-secondary-border-color, #dde2eb);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-settings-group-container[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-data-group-container[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n  padding-bottom: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-data-group-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-top-level-group-container[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-top-level-group-item[_ngcontent-%COMP%] {\n  margin: 6px 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-sub-level-group-container[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n  padding-bottom: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-sub-level-group-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-group-container.ag-group-container-horizontal[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-data-section[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-format-section[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-menu-panel[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-chart-menu-panel[_ngcontent-%COMP%] {\n  border-left: solid 1px;\n  border-left-color: #babfc7;\n  border-left-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-chart-menu-panel[_ngcontent-%COMP%] {\n  border-right: solid 1px;\n  border-right-color: #babfc7;\n  border-right-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-date-time-list-page-title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-date-time-list-page-column-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-date-time-list-page-entry[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox-input-wrapper[_ngcontent-%COMP%] {\n  font-family: \"agGridAlpine\";\n  font-size: 16px;\n  line-height: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  background-color: var(--ag-checkbox-background-color, var(--ag-background-color, #fff));\n  border-radius: 3px;\n  display: inline-block;\n  vertical-align: middle;\n  flex: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox-input-wrapper[_ngcontent-%COMP%]:focus-within, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox-input-wrapper[_ngcontent-%COMP%]:active {\n  outline: none;\n  box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox-input-wrapper.ag-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox-input-wrapper[_ngcontent-%COMP%]::after {\n  content: \"\\f108\";\n  color: #999;\n  color: var(--ag-checkbox-unchecked-color, #999);\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox-input-wrapper.ag-checked[_ngcontent-%COMP%]::after {\n  content: \"\\f106\";\n  color: #2196f3;\n  color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3));\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-checkbox-input-wrapper.ag-indeterminate[_ngcontent-%COMP%]::after {\n  content: \"\\f107\";\n  color: #999;\n  color: var(--ag-checkbox-indeterminate-color, var(--ag-checkbox-unchecked-color, #999));\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-toggle-button-input-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 28px;\n  height: 18px;\n  background-color: #999;\n  background-color: var(--ag-toggle-button-off-background-color, var(--ag-checkbox-unchecked-color, #999));\n  border-radius: 9px;\n  position: relative;\n  flex: none;\n  border: 1px solid;\n  border-color: #999;\n  border-color: var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #999));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-toggle-button-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-toggle-button-input-wrapper[_ngcontent-%COMP%]:focus-within {\n  outline: none;\n  box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-toggle-button-input-wrapper.ag-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-toggle-button-input-wrapper.ag-checked[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  background-color: var(--ag-toggle-button-on-background-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)));\n  border-color: #2196f3;\n  border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-toggle-button-input-wrapper[_ngcontent-%COMP%]::before {\n  content: \" \";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  display: block;\n  box-sizing: border-box;\n  height: 18px;\n  width: 18px;\n  background-color: #fff;\n  background-color: var(--ag-toggle-button-switch-background-color, var(--ag-background-color, #fff));\n  border-radius: 9px;\n  transition: left 100ms;\n  border: 1px solid;\n  border-color: #999;\n  border-color: var(--ag-toggle-button-switch-border-color, var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #999)));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-toggle-button-input-wrapper.ag-checked[_ngcontent-%COMP%]::before {\n  left: calc(100% - 18px );\n  border-color: #2196f3;\n  border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-radio-button-input-wrapper[_ngcontent-%COMP%] {\n  font-family: \"agGridAlpine\";\n  font-size: 16px;\n  line-height: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  background-color: var(--ag-checkbox-background-color, var(--ag-background-color, #fff));\n  border-radius: 3px;\n  display: inline-block;\n  vertical-align: middle;\n  flex: none;\n  border-radius: 16px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-radio-button-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-radio-button-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-radio-button-input-wrapper[_ngcontent-%COMP%]:focus-within, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-radio-button-input-wrapper[_ngcontent-%COMP%]:active {\n  outline: none;\n  box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-radio-button-input-wrapper.ag-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-radio-button-input-wrapper[_ngcontent-%COMP%]::after {\n  content: \"\\f124\";\n  color: #999;\n  color: var(--ag-checkbox-unchecked-color, #999);\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-radio-button-input-wrapper.ag-checked[_ngcontent-%COMP%]::after {\n  content: \"\\f125\";\n  color: #2196f3;\n  color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3));\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 100%;\n  background: none;\n  overflow: visible;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #babfc7;\n  background-color: var(--ag-border-color, #babfc7);\n  border-radius: 3px;\n  border-radius: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]::-moz-range-track {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #babfc7;\n  background-color: var(--ag-border-color, #babfc7);\n  border-radius: 3px;\n  border-radius: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]::-ms-track {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #babfc7;\n  background-color: var(--ag-border-color, #babfc7);\n  border-radius: 3px;\n  border-radius: 3px;\n  color: transparent;\n  width: calc(100% - 2px);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n  border: 1px solid;\n  border-color: #999;\n  border-color: var(--ag-checkbox-unchecked-color, #999);\n  border-radius: 16px;\n  transform: translateY(-6.5px);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]::-ms-thumb {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n  border: 1px solid;\n  border-color: #999;\n  border-color: var(--ag-checkbox-unchecked-color, #999);\n  border-radius: 16px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]::-moz-ag-range-thumb {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n  border: 1px solid;\n  border-color: #999;\n  border-color: var(--ag-checkbox-unchecked-color, #999);\n  border-radius: 16px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n  border-color: #2196f3;\n  border-color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]:focus::-ms-thumb {\n  box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n  border-color: #2196f3;\n  border-color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]:focus::-moz-ag-range-thumb {\n  box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n  border-color: #2196f3;\n  border-color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]:active::-webkit-slider-runnable-track {\n  background-color: rgba(33, 150, 243, 0.4);\n  background-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]:active::-moz-ag-range-track {\n  background-color: rgba(33, 150, 243, 0.4);\n  background-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]:active::-ms-track {\n  background-color: rgba(33, 150, 243, 0.4);\n  background-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=range][_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-header[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-search[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-status-bar[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-row[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-panel-title-bar-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #181d1f;\n  color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-pinned-left-header[_ngcontent-%COMP%]   .ag-header-row[_ngcontent-%COMP%]:before, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-pinned-right-header[_ngcontent-%COMP%]   .ag-header-row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  height: calc(100% - 20px);\n  top: 10px;\n  width: 1px;\n  background-color: #babfc7;\n  background-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-pinned-right-header[_ngcontent-%COMP%]   .ag-header-row[_ngcontent-%COMP%]:after {\n  right: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-pinned-left-header[_ngcontent-%COMP%]   .ag-header-row[_ngcontent-%COMP%]:before {\n  left: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-row[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][_ngcontent-%COMP%]:not([type]), .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=text][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=number][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=tel][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=date][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   input[class^=ag-][type=datetime-local][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   textarea[class^=ag-][_ngcontent-%COMP%] {\n  min-height: 24px;\n  border-radius: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   input[class^=ag-][_ngcontent-%COMP%]:not([type]), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   input[class^=ag-][type=text][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   input[class^=ag-][type=number][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   input[class^=ag-][type=tel][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   input[class^=ag-][type=date][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   input[class^=ag-][type=datetime-local][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   textarea[class^=ag-][_ngcontent-%COMP%] {\n  padding-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   input[class^=ag-][_ngcontent-%COMP%]:not([type]), .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   input[class^=ag-][type=text][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   input[class^=ag-][type=number][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   input[class^=ag-][type=tel][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   input[class^=ag-][type=date][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   input[class^=ag-][type=datetime-local][_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   textarea[class^=ag-][_ngcontent-%COMP%] {\n  padding-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tab[_ngcontent-%COMP%] {\n  padding: 9px;\n  transition: color 0.4s;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tab-selected[_ngcontent-%COMP%] {\n  color: #2196f3;\n  color: var(--ag-alpine-active-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-header[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n  padding-top: 1px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tabs-header[_ngcontent-%COMP%] {\n  border-bottom: solid 1px;\n  border-bottom-color: #babfc7;\n  border-bottom-color: var(--ag-border-color, #babfc7);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-settings-group-title-bar[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-data-group-title-bar[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-top-level-group-title-bar[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  line-height: 20px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-mini-thumbnail[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-settings-nav-bar[_ngcontent-%COMP%] {\n  border-top: solid 1px;\n  border-top-color: #dde2eb;\n  border-top-color: var(--ag-secondary-border-color, #dde2eb);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-group-title-bar-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-group-title-bar-icon[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-top-level-group-toolbar[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-charts-format-top-level-group-toolbar[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-charts-format-top-level-group-toolbar[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-sub-level-group[_ngcontent-%COMP%] {\n  border-left: dashed 1px;\n  border-left-color: #babfc7;\n  border-left-color: var(--ag-border-color, #babfc7);\n  padding-left: 6px;\n  margin-bottom: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-sub-level-group-title-bar[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n  background: none;\n  font-weight: 700;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-sub-level-group-container[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-charts-format-sub-level-group-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-dnd-ghost[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-side-buttons[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-standard-button[_ngcontent-%COMP%] {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  border-radius: 3px;\n  border: 1px solid;\n  border-color: #2196f3;\n  border-color: var(--ag-alpine-active-color, #2196f3);\n  color: #2196f3;\n  color: var(--ag-alpine-active-color, #2196f3);\n  background-color: #fff;\n  background-color: var(--ag-background-color, #fff);\n  font-weight: 600;\n  padding: 6px 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-standard-button[_ngcontent-%COMP%]:hover {\n  border-color: #2196f3;\n  border-color: var(--ag-alpine-active-color, #2196f3);\n  background-color: rgba(33, 150, 243, 0.1);\n  background-color: var(--ag-row-hover-color, rgba(33, 150, 243, 0.1));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-standard-button[_ngcontent-%COMP%]:active {\n  border-color: #2196f3;\n  border-color: var(--ag-alpine-active-color, #2196f3);\n  background-color: #2196f3;\n  background-color: var(--ag-alpine-active-color, #2196f3);\n  color: #fff;\n  color: var(--ag-background-color, #fff);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-standard-button[_ngcontent-%COMP%]:disabled {\n  color: rgba(24, 29, 31, 0.5);\n  color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n  background-color: #f1f2f4;\n  background-color: var(--ag-input-disabled-background-color, #f1f2f4);\n  border-color: rgba(186, 191, 199, 0.3);\n  border-color: var(--ag-input-disabled-border-color, rgba(186, 191, 199, 0.3));\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-menu-header[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical[_ngcontent-%COMP%] {\n  min-height: 75px;\n  max-height: 175px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-tool-panel-wrapper[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical-title-bar[_ngcontent-%COMP%] {\n  padding: 12px;\n  padding-bottom: 0px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-vertical-empty-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: dashed 1px;\n  border-color: #babfc7;\n  border-color: var(--ag-border-color, #babfc7);\n  margin: 12px;\n  padding: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-empty-message[_ngcontent-%COMP%] {\n  color: #181d1f;\n  color: var(--ag-foreground-color, #181d1f);\n  opacity: 0.75;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-status-bar[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-status-name-value-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-paging-number[_ngcontent-%COMP%], .ag-theme-alpine[_ngcontent-%COMP%]   .ag-paging-row-summary-panel-number[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-cell-button[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-drop-cell-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-cell-menu-button[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-side-button-button[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-tab[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-panel-title-bar-button[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-header-expand-icon[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-group-icons[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-expanded[_ngcontent-%COMP%]   .ag-icon[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-contracted[_ngcontent-%COMP%]   .ag-icon[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-settings-prev[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-settings-next[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-group-title-bar-icon[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-column-select-header-icon[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-floating-filter-button-button[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-expand[_ngcontent-%COMP%]:hover, .ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-menu-icon[_ngcontent-%COMP%]:hover {\n  color: #2196f3;\n  color: var(--ag-alpine-active-color, #2196f3);\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-chart-settings-card-item.ag-not-selected[_ngcontent-%COMP%]:hover {\n  opacity: 0.35;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-ltr[_ngcontent-%COMP%]   .ag-panel-title-bar-button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-right: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-rtl[_ngcontent-%COMP%]   .ag-panel-title-bar-button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  margin-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-group-container[_ngcontent-%COMP%] {\n  padding-left: 6px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-filter-toolpanel-instance-filter[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #f8f8f8;\n  background-color: var(--ag-control-panel-background-color, #f8f8f8);\n  border-left: dashed 1px;\n  border-left-color: #babfc7;\n  border-left-color: var(--ag-border-color, #babfc7);\n  margin-left: 13px;\n  padding-left: 8px;\n  margin-right: 12px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-set-filter-list[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-overlay-no-rows-wrapper.ag-layout-auto-height[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n.ag-theme-alpine[_ngcontent-%COMP%]   .ag-date-time-list-page-entry-is-current[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  background-color: var(--ag-alpine-active-color, #2196f3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL3N0cnVjdHVyYWwvX2NvbW1vbi1zdHJ1Y3R1cmFsLnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvYWRtaW4tb3JkZXJzL2FkbWluLW9yZGVycy5jb21wb25lbnQuc2NzcyIsIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL21peGlucy9fYWctZ3JpZC1taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL3N0cnVjdHVyYWwvX21vYmlsZS1zdHJ1Y3R1cmFsLnNjc3MiLCJub2RlX21vZHVsZXMvYWctZ3JpZC1jb21tdW5pdHkvc3JjL3N0eWxlcy9zdHJ1Y3R1cmFsL19jaGFydHMtc3RydWN0dXJhbC5zY3NzIiwibm9kZV9tb2R1bGVzL2FnLWdyaWQtY29tbXVuaXR5L3NyYy9zdHlsZXMvc3RydWN0dXJhbC9fZGF0ZS10aW1lLXN0cnVjdHVyYWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL2FnLXRoZW1lLWJhc2Uvc2Fzcy9fYWctdGhlbWUtYmFzZS1taXhpbi5zY3NzIiwibm9kZV9tb2R1bGVzL2FnLWdyaWQtY29tbXVuaXR5L3NyYy9zdHlsZXMvbWl4aW5zL19hZy10aGVtZS1wYXJhbXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL21peGlucy9fYWctdGhlbWUtbWl4aW5zLnNjc3MiLCJub2RlX21vZHVsZXMvYWctZ3JpZC1jb21tdW5pdHkvc3JjL3N0eWxlcy9hZy10aGVtZS1iYXNlL3Nhc3MvcGFydHMvX3Jlc2V0LnNjc3MiLCJub2RlX21vZHVsZXMvYWctZ3JpZC1jb21tdW5pdHkvc3JjL3N0eWxlcy9hZy10aGVtZS1iYXNlL3Nhc3MvcGFydHMvX3dpZGdldHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL2FnLXRoZW1lLWJhc2Uvc2Fzcy9wYXJ0cy9fZ3JpZC1sYXlvdXQuc2NzcyIsIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL2FnLXRoZW1lLWJhc2Uvc2Fzcy9wYXJ0cy9fZ3JpZC1ib3JkZXJzLnNjc3MiLCJub2RlX21vZHVsZXMvYWctZ3JpZC1jb21tdW5pdHkvc3JjL3N0eWxlcy9hZy10aGVtZS1iYXNlL3Nhc3MvcGFydHMvX21lbnUuc2NzcyIsIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL2FnLXRoZW1lLWJhc2Uvc2Fzcy9wYXJ0cy9fc2lkZWJhci5zY3NzIiwibm9kZV9tb2R1bGVzL2FnLWdyaWQtY29tbXVuaXR5L3NyYy9zdHlsZXMvYWctdGhlbWUtYmFzZS9zYXNzL3BhcnRzL19maWx0ZXItdG9vbC1wYW5lbC5zY3NzIiwibm9kZV9tb2R1bGVzL2FnLWdyaWQtY29tbXVuaXR5L3NyYy9zdHlsZXMvYWctdGhlbWUtYmFzZS9zYXNzL3BhcnRzL19jb2x1bW5zLXRvb2wtcGFuZWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL2FnLXRoZW1lLWJhc2Uvc2Fzcy9wYXJ0cy9faGVhZGVyLnNjc3MiLCJub2RlX21vZHVsZXMvYWctZ3JpZC1jb21tdW5pdHkvc3JjL3N0eWxlcy9hZy10aGVtZS1iYXNlL3Nhc3MvcGFydHMvX2Zvb3Rlci5zY3NzIiwibm9kZV9tb2R1bGVzL2FnLWdyaWQtY29tbXVuaXR5L3NyYy9zdHlsZXMvYWctdGhlbWUtYmFzZS9zYXNzL3BhcnRzL19jb2x1bW4tZHJvcC5zY3NzIiwibm9kZV9tb2R1bGVzL2FnLWdyaWQtY29tbXVuaXR5L3NyYy9zdHlsZXMvYWctdGhlbWUtYmFzZS9zYXNzL3BhcnRzL19jaGFydHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL2FnLXRoZW1lLWJhc2Uvc2Fzcy9wYXJ0cy9fZGF0ZS10aW1lLnNjc3MiLCJub2RlX21vZHVsZXMvYWctZ3JpZC1jb21tdW5pdHkvc3JjL3N0eWxlcy9hZy10aGVtZS1hbHBpbmUvc2Fzcy9fYWctdGhlbWUtYWxwaW5lLW1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Q0FBQTtBQU9BO0VBQ0ksY0FBQTtBQ0ZKO0FES0E7RUFDSSx3QkFBQTtBQ0ZKO0FES0E7RUFDSSw2QkFBQTtBQ0ZKO0FES0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FES0E7RUFDSSxhQUFBO0FDRko7QURLQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7QUNGSjtBREtBO0VFa0VJLHNCRmpFdUI7RUVrRXZCLHlCRmxFdUI7RUVvRXZCLGlCRnBFdUI7QUNDM0I7QURFQTtFRThESSxzQkY3RHVCO0VFOER2Qix5QkY5RHVCO0VFZ0V2QixpQkZoRXVCO0FDSTNCO0FEREE7RUFDSSxrQkFBQTtBQ0lKO0FEREE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0lKO0FEREE7RUFDSSxrQkFBQTtBQ0lKO0FEREE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0lKO0FEQ0E7RUFDSSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtBQ0VKO0FEQ0E7RUFDSTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUNFTjtFRENFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQ0NOO0FBQ0Y7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURFSTtFQUNJLFlBQUE7QUNBUjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ0RKO0FERUk7RUFDSSxXQUFBO0VBQ0EscWtLQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FB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O0FDbERKO0FEcURBO0VBQ0ksZUFBQTtBQ2xESjtBQ3Y4Q0k7RUFFUSxrQkY2L0NxQjtBQ3BEakM7QUN0OENJO0VBRVEsbUJBRHVCO0FEdzhDbkM7QUM5OENJO0VBRVEsa0JGaWdEcUI7QUNqRGpDO0FDNzhDSTtFQUVRLG1CQUR1QjtBRCs4Q25DO0FDcjlDSTtFQUVRLGtCRjYvQ3FCO0FDdENqQztBQ3A5Q0k7RUFFUSxtQkFEdUI7QURzOUNuQztBQzU5Q0k7RUFFUSxrQkZpZ0RxQjtBQ25DakM7QUMzOUNJO0VBRVEsbUJBRHVCO0FENjlDbkM7QUNuK0NJO0VBRVEsa0JGNi9DcUI7QUN4QmpDO0FDbCtDSTtFQUVRLG1CQUR1QjtBRG8rQ25DO0FDMStDSTtFQUVRLGtCRmlnRHFCO0FDckJqQztBQ3orQ0k7RUFFUSxtQkFEdUI7QUQyK0NuQztBQ2ovQ0k7RUFFUSxrQkY2L0NxQjtBQ1ZqQztBQ2gvQ0k7RUFFUSxtQkFEdUI7QURrL0NuQztBQ3gvQ0k7RUFFUSxrQkZpZ0RxQjtBQ1BqQztBQ3YvQ0k7RUFFUSxtQkFEdUI7QUR5L0NuQztBQy8vQ0k7RUFFUSxtQkY2L0NxQjtBQ0lqQztBQzkvQ0k7RUFFUSxvQkFEdUI7QURnZ0RuQztBQ3RnREk7RUFFUSxtQkZpZ0RxQjtBQ09qQztBQ3JnREk7RUFFUSxvQkFEdUI7QUR1Z0RuQztBQzdnREk7RUFFUSxtQkY2L0NxQjtBQ2tCakM7QUM1Z0RJO0VBRVEsb0JBRHVCO0FEOGdEbkM7QUNwaERJO0VBRVEsbUJGaWdEcUI7QUNxQmpDO0FDbmhESTtFQUVRLG9CQUR1QjtBRHFoRG5DO0FDM2hESTtFQUVRLG1CRjYvQ3FCO0FDZ0NqQztBQzFoREk7RUFFUSxvQkFEdUI7QUQ0aERuQztBQ2xpREk7RUFFUSxtQkZpZ0RxQjtBQ21DakM7QUNqaURJO0VBRVEsb0JBRHVCO0FEbWlEbkM7QUN6aURJO0VBRVEsbUJGNi9DcUI7QUM4Q2pDO0FDeGlESTtFQUVRLG9CQUR1QjtBRDBpRG5DO0FDaGpESTtFQUVRLG1CRmlnRHFCO0FDaURqQztBQy9pREk7RUFFUSxvQkFEdUI7QURp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Z0JBMkM0QjtBUHF3RHRDO0FPanpETTtFQUNJLGdCQTRDK0I7QVB1d0R6QztBT3B6RE07RUFDSSxnQkE2Q3lCO0FQeXdEbkM7QU92ekRNO0VBQ0ksZ0JBOEMwQjtBUDJ3RHBDO0FPMXpETTtFQUNJLGdCQStDeUI7QVA2d0RuQztBTzd6RE07RUFDSSxnQkFnRDZCO0FQK3dEdkM7QU9oMERNO0VBQ0ksZ0JBaUQ4QjtBUGl4RHhDO0FPbjBETTtFQUNJLGdCQWtEd0I7QVBteERsQztBT3QwRE07RUFDSSxnQkFtRDJCO0FQcXhEckM7QU96MERNO0VBQ0ksZ0JBb0QwQjtBUHV4RHBDO0FPNTBETTtFQUNJLGdCQXFEeUI7QVB5eERuQztBTy8wRE07RUFDSSxnQkFzRDBCO0FQMnhEcEM7QU9sMURNO0VBQ0ksZ0JBdUR5QjtBUDZ4RG5DO0FPcjFETTtFQUNJLGdCQXdEeUI7QVAreERuQztBT3gxRE07RUFDSSxnQkF5RDJCO0FQaXlEckM7QU8zMURNO0VBQ0ksZ0JBMEQ0QjtBUG15RHRDO0FPOTFETTtFQUNJLGdCQTJENkI7QVBxeUR2QztBT2oyRE07RUFDSSxnQkE0RHlCO0FQdXlEbkM7QU9wMkRNO0VBQ0ksZ0JBNkQ2QjtBUHl5RHZDO0FPdjJETTtFQUNJLGdCQThEeUI7QVAyeURuQztBTzEyRE07RUFDSSxnQkErRHlCO0FQNnlEbkM7QU83MkRNO0VBQ0ksZ0JBZ0VnQztBUCt5RDFDO0FPaDNETTtFQUNJLGdCQWlFMEI7QVBpekRwQztBT24zRE07RUFDSSxnQkFrRXdCO0FQbXpEbEM7QU90M0RNO0VBQ0ksZ0JBbUUwQjtBUHF6RHBDO0FPejNETTtFQUNJLGdCQW9FNkI7QVB1ekR2QztBTzUzRE07RUFDSSxnQkFxRTBCO0FQeXpEcEM7QU8vM0RNO0VBQ0ksZ0JBc0V5QjtBUDJ6RG5DO0FPbDRETTtFQUNJLGdCQXVFK0I7QVA2ekR6QztBT3I0RE07RUFDSSxnQkF3RStCO0FQK3pEekM7QU94NERNO0VBQ0ksZ0JBeUVnQztBUGkwRDFDO0FPMzRETTtFQUNJLGdCQTBFNkI7QVBtMER2QztBTzk0RE07RUFDSSxnQkEy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QTtBVHFpRVI7QVM5aEVJO0VBRUksWUFBQTtFQUNBLG9CQUFBO0FUK2hFUjtBUzVoRUk7RUFDSSxrQkFBQTtFRjlXUSxpQkFBQTtFRCtFUixxQkFBQTtFQUtJLDZDQUFBO0FOMnpFWjtBUzdoRUk7RUhuU0ksc0JBQUE7RUFLSSxrREFBQTtBTit6RVo7QVM3aEVJO0VIdlNJLHlCQUFBO0VBS0ksNERBQUE7RUFMSixjQUFBO0VBS0ksbUhBQUE7RUdxU0osWUFBQTtFQUNBLGlCQUFBO0VGcFlZLHdCQUFBO0VEeUZaLDRCQUFBO0VBS0ksb0RBQUE7QU4wMEVaO0FPdnNFUTtFQUVRLGdCRXNLYztBVGtpRTlCO0FPbHNFUTtFQUVRLGlCQUR1QjtBUHFzRXZDO0FTaGlFSTtFSHRUSSx5QkFBQTtFQUtJLDREQUFBO0VBTEosY0FBQTtFQUtJLDBDQUFBO0VHb1RKLFlBQUE7RUZ4WVEsaUJBQUE7RUQrRVIscUJBQUE7RUFLSSw2Q0FBQTtFR3NUSixrQkFBQTtFQUNBLHNCQUFBO0FUdWlFUjtBU3JpRVE7RUFDSSxVQUFBO0FUdWlFWjtBTzl0RVE7RUFFUSxrQkU2TGtCO0FUa2lFbEM7QU96dEVRO0VBRVEsbUJBRHVCO0FQNHRFdkM7QU9ydUVRO0VBRVEsa0JFNkxrQjtBVDBpRWxDO0FPanVFUTtFQUVRLG1CQUR1QjtBUG91RXZDO0FPN3VFUTtFQUVRLGtCRTZMa0I7QVRrakVsQztBT3p1RVE7RUFFUSxtQkFEdUI7QVA0dUV2QztBT3J2RVE7RUFFUSxrQkU2TGtCO0FUMGpFbEM7QU9qdkVRO0VBRVEsbUJBRHVCO0FQb3ZFdkM7QU83dkVRO0VBRVEsa0JFNkxrQjtBVGtrRWxDO0FPenZFUTtFQUVRLG1CQUR1QjtBUDR2RXZDO0FPcndFUTtFQUVRLGtCRTZMa0I7QVQwa0VsQztBT2p3RVE7RUFFUSxtQkFEdUI7QVBvd0V2QztBTzd3RVE7RUFFUSxtQkU2TGtCO0FUa2xFbEM7QU96d0VRO0VBRVEsb0JBRHVCO0FQNHdFdkM7QU9yeEVRO0VBRVEsbUJFNkxrQjtBVDBsRWxDO0FPanhFUTtFQUVRLG9CQUR1QjtBUG94RXZDO0FPN3hFUTtFQUVRLG1CRTZMa0I7QVRrbUVsQztBT3p4RVE7RUFFUSxvQkFEdUI7QVA0eEV2QztBU2xtRUk7RUFDSSxlQUFBO0FUcW1FUjtBT24vRVk7RUFDSSxhQUFBO0FQcS9FaEI7QU9wL0VnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxRRTBZMkM7RUZ6WTNDLFNFeVkyQztFRnhZM0MsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFRHNEWixxQ0FBQTtFQUtJLHlFQUFBO0FONjdFWjtBTzF6RVE7RUFFUSxrQkVnTmtCO0FUMm1FbEM7QU9yekVRO0VBRVEsaUJBRHVCO0FQd3pFdkM7QU8zZ0ZZO0VBQ0ksYUFBQTtBUDhnRmhCO0FPN2dGZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0U0WmI7RUYzWmEsVUUyWmI7RUYxWmEsY0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFRHNEWixxQ0FBQTtFQUtJLHlFQUFBO0FOczlFWjtBTzdoRlk7RUFDSSxhQUFBO0FQK2hGaEI7QU85aEZnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTRTRaYjtFRjNaYSxVRTJaYjtFRjFaYSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VEc0RaLHFDQUFBO0VBS0kseUVBQUE7QU51K0VaO0FTdm9FUTs7RUFDSSxrQkFBQTtBVDBvRVo7QVN0b0VJOztFSDFXSSw0QkFBQTtFQUtJLGlFQUFBO0VHd1dKLG9CQUFBO0FUeW9FUjtBTzkyRVE7RUFFUSxpQkV5T2M7QVRzb0U5QjtBT3oyRVE7RUFFUSxrQkFEdUI7QVA0MkV2QztBU3ZvRUk7RUFDSSxrQkFBQTtBVDBvRVI7QVU1bUZJO0VBQ0ksaUJBQUE7QVY4bUZSO0FVM21GSTtFSHdCWSxpQkFBQTtFRCtFUixxQkFBQTtFQUtJLDZDQUFBO0VDL0VBLGtCRzVCaUM7QVZnbkY3QztBT2w0RVE7RUFFUSxrQkcxT2tCO0FWNm1GbEM7QU83M0VRO0VBRVEsbUJBRHVCO0FQZzRFdkM7QU96NEVRO0VBRVEsa0JHdE9rQjtBVmluRmxDO0FPcjRFUTtFQUVRLG1CQUR1QjtBUHc0RXZDO0FPajVFUTtFQUVRLGlCR2xPa0I7QVZxbkZsQztBTzc0RVE7RUFFUSxrQkFEdUI7QVBnNUV2QztBT3o1RVE7RUFFUSxrQkcxT2tCO0FWcW9GbEM7QU9yNUVRO0VBRVEsbUJBRHVCO0FQdzVFdkM7QU9qNkVRO0VBRVEsa0JHdE9rQjtBVnlvRmxDO0FPNzVFUTtFQUVRLG1CQUR1QjtBUGc2RXZDO0FPejZFUTtFQUVRLGlCR2xPa0I7QVY2b0ZsQztBT3I2RVE7RUFFUSxrQkFEdUI7QVB3NkV2QztBT2o3RVE7RUFFUSxtQkcxT2tCO0FWNnBGbEM7QU83NkVRO0VBRVEsb0JBRHVCO0FQZzdFdkM7QU96N0VRO0VBRVEsa0JHdE9rQjtBVmlxRmxDO0FPcjdFUTtFQUVRLG1CQUR1QjtBUHc3RXZDO0FPajhFUTtFQUVRLGlCR2xPa0I7QVZxcUZsQztBTzc3RVE7RUFFUSxrQkFEdUI7QVBnOEV2QztBT3o4RVE7RUFFUSxtQkcxT2tCO0FWcXJGbEM7QU9yOEVRO0VBRVEsb0JBRHVCO0FQdzhFdkM7QU9qOUVRO0VBRVEsbUJHdE9rQjtBVnlyRmxDO0FPNzhFUTtFQUVRLG9CQUR1QjtBUGc5RXZDO0FPejlFUTtFQUVRLGlCR2xPa0I7QVY2ckZsQztBT3I5RVE7RUFFUSxrQkFEdUI7QVB3OUV2QztBT2orRVE7RUFFUSxtQkcxT2tCO0FWNnNGbEM7QU83OUVRO0VBRVEsb0JBRHVCO0FQZytFdkM7QU96K0VRO0VBRVEsbUJHdE9rQjtBVml0RmxDO0FPcitFUTtFQUVRLG9CQUR1QjtBUHcrRXZDO0FPai9FUTtFQUVRLGlCR2xPa0I7QVZxdEZsQztBTzcrRVE7RUFFUSxrQkFEdUI7QVBnL0V2QztBT3ovRVE7RUFFUSxtQkcxT2tCO0FWcXVGbEM7QU9yL0VRO0VBRVEsb0JBRHVCO0FQdy9FdkM7QU9qZ0ZRO0VBRVEsbUJHdE9rQjtBVnl1RmxDO0FPNy9FUTtFQUVRLG9CQUR1QjtBUGdnRnZDO0FPemdGUTtFQUVRLGlCR2xPa0I7QVY2dUZsQztBT3JnRlE7RUFFUSxrQkFEdUI7QVB3Z0Z2QztBT2poRlE7RUFFUSxtQkcxT2tCO0FWNnZGbEM7QU83Z0ZRO0VBRVEsb0JBRHVCO0FQZ2hGdkM7QU96aEZRO0VBRVEsbUJHdE9rQjtBVml3RmxDO0FPcmhGUTtFQUVRLG9CQUR1QjtBUHdoRnZDO0FPamlGUTtFQUVRLGlCR2xPa0I7QVZxd0ZsQztBTzdoRlE7RUFFUSxrQkFEdUI7QVBnaUZ2QztBT3ppRlE7RUFFUSxtQkcxT2tCO0FWcXhGbEM7QU9yaUZRO0VBRVEsb0JBRHVCO0FQd2lGdkM7QU9qakZRO0VBRVEsbUJHdE9rQjtBVnl4RmxDO0FPN2lGUTtFQUVRLG9CQUR1QjtBUGdqRnZDO0FPempGUTtFQUVRLGlCR2xPa0I7QVY2eEZsQztBT3JqRlE7RUFFUSxrQkFEdUI7QVB3akZ2QztBT2prRlE7RUFFUSxtQkcxT2tCO0FWNnlGbEM7QU83akZRO0VBRVEsb0JBRHVCO0FQZ2tGdkM7QU96a0ZRO0VBRVEsbUJHdE9rQjtBVml6RmxDO0FPcmtGUTtFQUVRLG9CQUR1QjtBUHdrRnZDO0FPamxGUTtFQUVRLGlCR2xPa0I7QVZxekZsQztBTzdrRlE7RUFFUSxrQkFEdUI7QVBnbEZ2QztBT3psRlE7RUFFUSxtQkcxT2tCO0FWcTBGbEM7QU9ybEZRO0VBRVEsb0JBRHVCO0FQd2xGdkM7QU9qbUZRO0VBRVEsbUJHdE9rQjtBVnkwRmxDO0FPN2xGUTtFQUVRLG9CQUR1QjtBUGdtRnZDO0FPem1GUTtFQUVRLGlCR2xPa0I7QVY2MEZsQztBT3JtRlE7RUFFUSxrQkFEdUI7QVB3bUZ2QztBT2puRlE7RUFFUSxtQkcxT2tCO0FWNjFGbEM7QU83bUZRO0VBRVEsb0JBRHVCO0FQZ25GdkM7QU96bkZRO0VBRVEsbUJHdE9rQjtBVmkyRmxDO0FPcm5GUTtFQUVRLG9CQUR1QjtBUHduRnZDO0FPam9GUTtFQUVRLGlCR2xPa0I7QVZxMkZsQztBTzduRlE7RUFFUSxrQkFEdUI7QVBnb0Z2QztBT3pvRlE7RUFFUSxtQkcxT2tCO0FWcTNGbEM7QU9yb0ZRO0VBRVEsb0JBRHVCO0FQd29GdkM7QU9qcEZRO0VBRVEsbUJHdE9rQjtBVnkzRmxDO0FPN29GUTtFQUVRLG9CQUR1QjtBUGdwRnZDO0FPenBGUTtFQUVRLGlCR2xPa0I7QVY2M0ZsQztBT3JwRlE7RUFFUSxrQkFEdUI7QVB3cEZ2QztBT2pxRlE7RUFFUSxtQkcxT2tCO0FWNjRGbEM7QU83cEZRO0VBRVEsb0JBRHVCO0FQZ3FGdkM7QU96cUZRO0VBRVEsbUJHdE9rQjtBVmk1RmxDO0FPcnFGUTtFQUVRLG9CQUR1QjtBUHdxRnZDO0FPanJGUTtFQUVRLGlCR2xPa0I7QVZxNUZsQztBTzdxRlE7RUFFUSxrQkFEdUI7QVBnckZ2QztBT3pyRlE7RUFFUSxtQkcxT2tCO0FWcTZGbEM7QU9yckZRO0VBRVEsb0JBRHVCO0FQd3JGdkM7QU9qc0ZRO0VBRVEsbUJHdE9rQjtBVnk2RmxDO0FPN3JGUTtFQUVRLG9CQUR1QjtBUGdzRnZDO0FPenNGUTtFQUVRLGlCR2xPa0I7QVY2NkZsQztBT3JzRlE7RUFFUSxrQkFEdUI7QVB3c0Z2QztBT2p0RlE7RUFFUSxtQkcxT2tCO0FWNjdGbEM7QU83c0ZRO0VBRVEsb0JBRHVCO0FQZ3RGdkM7QU96dEZRO0VBRVEsbUJHdE9rQjtBVmk4RmxDO0FPcnRGUTtFQUVRLG9CQUR1QjtBUHd0RnZDO0FPanVGUTtFQUVRLGlCR2xPa0I7QVZxOEZsQztBTzd0RlE7RUFFUSxrQkFEdUI7QVBndUZ2QztBT3p1RlE7RUFFUSxtQkcxT2tCO0FWcTlGbEM7QU9ydUZRO0VBRVEsb0JBRHVCO0FQd3VGdkM7QU9qdkZRO0VBRVEsbUJHdE9rQjtBVnk5RmxDO0FPN3VGUTtFQUVRLG9CQUR1QjtBUGd2RnZDO0FPenZGUTtFQUVRLGlCR2xPa0I7QVY2OUZsQztBT3J2RlE7RUFFUSxrQkFEdUI7QVB3dkZ2QztBT2p3RlE7RUFFUSxtQkcxT2tCO0FWNitGbEM7QU83dkZRO0VBRVEsb0JBRHVCO0FQZ3dGdkM7QU96d0ZRO0VBRVEsbUJHdE9rQjtBVmkvRmxDO0FPcndGUTtFQUVRLG9CQUR1QjtBUHd3RnZDO0FPanhGUTtFQUVRLGlCR2xPa0I7QVZxL0ZsQztBTzd3RlE7RUFFUSxrQkFEdUI7QVBneEZ2QztBT3p4RlE7RUFFUSxtQkcxT2tCO0FWcWdHbEM7QU9yeEZRO0VBRVEsb0JBRHVCO0FQd3hGdkM7QU9qeUZRO0VBRVEsbUJHdE9rQjtBVnlnR2xDO0FPN3hGUTtFQUVRLG9CQUR1QjtBUGd5RnZDO0FPenlGUTtFQUVRLGlCR2xPa0I7QVY2Z0dsQztBT3J5RlE7RUFFUSxrQkFEdUI7QVB3eUZ2QztBT2p6RlE7RUFFUSxtQkcxT2tCO0FWNmhHbEM7QU83eUZRO0VBRVEsb0JBRHVCO0FQZ3pGdkM7QU96ekZRO0VBRVEsbUJHdE9rQjtBVmlpR2xDO0FPcnpGUTtFQUVRLG9CQUR1QjtBUHd6RnZDO0FPajBGUTtFQUVRLGlCR2xPa0I7QVZxaUdsQztBTzd6RlE7RUFFUSxrQkFEdUI7QVBnMEZ2QztBVXJpR0k7RUFDSSw0Q0FBQTtBVndpR1I7QVVyaUdJO0VBQ0ksa0JBQUE7QVZ1aUdSO0FVcGlHSTtFSjRFSSxjQUFBO0VBS0kscURBQUE7QU51OUZaO0FVcGlHSTtFSndFSSxjQUFBO0VBS0ksdURBQUE7QU4yOUZaO0FVcGlHSTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QVZzaUdSO0FVbmlHSTtFSjRESSx5Q0FBQTtFQUtJLGtHQUFBO0VJL0RKLGlDQUFBO0FWc2lHUjtBVW5pR0k7RUp1REksb0RBQUE7RUFLSSw2R0FBQTtBTjIrRlo7QVVuaUdJO0VBQ0ksNkJBQUE7QVZxaUdSO0FVbGlHSTtFSitDSSxvQ0FBQTtFQUtJLHVIQUFBO0FOay9GWjtBVWxpR0k7RUFDSSxZQUFBO0VKMENBLHNCQUFBO0VBS0ksa0RBQUE7RUFMSixjQUFBO0VBS0ksZ0VBQUE7RUl2Q0EsaUJBQUE7RUprQ0oscUJBQUE7RUFLSSxtRkFBQTtBTjQvRlo7QVVoaUdZO0VBQ0ksdUJBQUE7QVZr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bUNBQUE7RUFDQSxrQ0FBQTtFTzdISSxnQkFBQTtFQUNBLGtCQUFBO0Fkb3NIUjtBTzk5R1E7RUFFUSxpQk8xT2M7QWR5c0g5QjtBT3o5R1E7RUFFUSxrQkFEdUI7QVA0OUd2QztBY3hzSEk7RUFDSSxZQUFBO0FkMnNIUjtBY3hzSEk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QWQwc0hSO0FjdnNISTtFQUNJLFlBQUE7QWR5c0hSO0FjdHNISTtFQUNJLFlBQUE7RUFDQSxZQUFBO0Fkd3NIUjtBT3AvR1E7RUFFUSxpQk9yTmM7QWQwc0g5QjtBTy8rR1E7RUFFUSxnQkFEdUI7QVBrL0d2QztBYzNzSEk7RVBqQmdCLHFCQUFBO0VEeUZaLHlCQUFBO0VBS0ksMkRBQUE7QU5vb0haO0FPamdIUTtFQUVRLGlCTzVNYztBZDhzSDlCO0FPNS9HUTtFQUVRLGdCQUR1QjtBUCsvR3ZDO0FjNXNIZ0I7RUFDSSw2QkFBQTtBZCtzSHBCO0FPNWdIUTtFQUVRLGtCT2pNc0I7QWQ4c0h0QztBT3ZnSFE7RUFFUSxtQkFEdUI7QVAwZ0h2QztBY3Z0SGdCO0VBQ0ksNkJBQUE7QWQwdEhwQjtBT3ZoSFE7RUFFUSxrQk9qTXNCO0FkeXRIdEM7QU9saEhRO0VBRVEsbUJBRHVCO0FQcWhIdkM7QWNsdUhnQjtFQUNJLDZCQUFBO0FkcXVIcEI7QU9saUhRO0VBRVEsa0JPak1zQjtBZG91SHRDO0FPN2hIUTtFQUVRLG1CQUR1QjtBUGdpSHZDO0FjN3VIZ0I7RUFDSSw2QkFBQTtBZGd2SHBCO0FPN2lIUTtFQUVRLGtCT2pNc0I7QWQrdUh0QztBT3hpSFE7RUFFUSxtQkFEdUI7QVAyaUh2QztBY3h2SGdCO0VBQ0ksNkJBQUE7QWQydkhwQjtBT3hqSFE7RUFFUSxrQk9qTXNCO0FkMHZIdEM7QU9uakhRO0VBRVEsbUJBRHVCO0FQc2pIdkM7QWNud0hnQjtFQUNJLDZCQUFBO0Fkc3dIcEI7QU9ua0hRO0VBRVEsbUJPak1zQjtBZHF3SHRDO0FPOWpIUTtFQUVRLG9CQUR1QjtBUGlrSHZDO0FjOXdIZ0I7RUFDSSw2QkFBQTtBZGl4SHBCO0FPOWtI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QmhySkk7RUFDSSxZQUFBO0FyQmtySlI7QXFCaHJKUTtFQUNJLGFBQUE7QXJCa3JKWjtBcUIvcEpROzs7Ozs7Ozs7Ozs7Ozs7RWZwSEEsY0FBQTtFQUtJLDZDQUFBO0FOZ3lKWjtBcUI1cUpJO0VBQ0ksYUFBQTtBckI4cUpSO0FPaHFKUTtFQUVRLGlCY1pjO0VkWWQsaUJjWmM7QXJCOHFKOUI7QU81cEpRO0VBRVEsa0JBRHVCO0VBQ3ZCLGdCQUR1QjtBUGdxSnZDO0FxQjdxSkk7RUFDSSxpQkFBQTtBckJnckpSO0FxQjdxSkk7RUFDSSxZQUFBO0VmeklBLHlCQUFBO0VBS0ksbUVBQUE7RWVzSUosdUJBQUE7RWYzSUEsMEJBQUE7RUFLSSxrREFBQTtFZXdJSixpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QXJCaXJKUjtBcUI5cUpJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBckJnckpSO0FxQjdxSkk7RUFDSSxpQkFBQTtBckIrcUpSO0FxQjVxSkk7RWYzSkkseUJBQUE7RUFLSSx3REFBQTtBTnMwSloiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2FkbWluLW9yZGVycy9hZG1pbi1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEdlbmVyaWMgU3R5bGVzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cbi8vIGlmIHdlIGRvbid0IGRvIHRoaXMsIHRoZW4gdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGdyaWQgd291bGQgYmUgaWdub3JlZCxcbi8vIGFzIHRoZXJlIGlzIG5vIGRlZmF1bHQgZGlzcGxheSBmb3IgdGhlIGVsZW1lbnQgYWctZ3JpZC1hMiAoYXMgaXQncyBub3QgYSBuYXR1cmFsIGRvbSBlbGVtZW50KVxuYWctZ3JpZCwgYWctZ3JpZC1hbmd1bGFyLCBhZy1ncmlkLW5nMiwgYWctZ3JpZC1wb2x5bWVyLCBhZy1ncmlkLWF1cmVsaWEgIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFnLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYWctaW52aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLmFnLWRyYWctaGFuZGxlIHtcbiAgICBjdXJzb3I6IG1vdmU7IC8vIElFIGZhbGxiYWNrXG4gICAgY3Vyc29yOiBncmFiO1xufVxuXG4uYWctY29sdW1uLWRyb3Atd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwtaGFsZi13aWR0aCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLmFnLXVuc2VsZWN0YWJsZSB7XG4gICAgQGluY2x1ZGUgYWctc2VsZWN0YWJsZShub25lKTtcbn1cblxuLmFnLXNlbGVjdGFibGUge1xuICAgIEBpbmNsdWRlIGFnLXNlbGVjdGFibGUodGV4dCk7XG59XG5cbi5hZy10YWIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFnLXRhYi1ndWFyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFnLXNlbGVjdC1hZ2ctZnVuYy1wb3B1cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWctaW5wdXQtd3JhcHBlciwgLmFnLXBpY2tlci1maWVsZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8vIHNldHRpbmcgc2hha2UgY2xhc3MgdG8gYW4gaXRlbSB3aWxsIGdpdmUgaXQgYSBsZWZ0IG90IHJpZ2h0IGFuaW1hdGlvblxuLy8gdXNlZCBmb3IgdGhlICdsZWZ0JyBhbmQgJ3JpZ3RoJyBhcnJvd3Mgd2hlbiBkcmFnZ2luZyBjb2x1bW5zIGFuZCBzY3JvbGxpbmdcbi5hZy1zaGFrZS1sZWZ0LXRvLXJpZ2h0IHtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBhZy1zaGFrZS1sZWZ0LXRvLXJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIGFnLXNoYWtlLWxlZnQtdG8tcmlnaHQge1xuICAgIGZyb20ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICB9XG59XG5cbi5hZy1yb290LXdyYXBwZXIge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8vIHNldCB0byByZWxhdGl2ZSwgc28gYWJzb2x1dGUgcG9wdXBzIGFwcGVhciByZWxhdGl2ZSB0byB0aGlzXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLmFnLWxheW91dC1ub3JtYWwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG4uYWctd2F0ZXJtYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0IDNzO1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpTkRrMGNIZ2lJR2hsYVdkb2REMGlNak01Y0hnaUlIWnBaWGRDYjNnOUlqQWdNQ0EwT1RRZ01qTTVJaUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGdvZ0lDQWdQQ0V0TFNCSFpXNWxjbUYwYjNJNklGTnJaWFJqYUNBME55NHhJQ2cwTlRReU1pa2dMU0JvZEhSd09pOHZkM2QzTG1KdmFHVnRhV0Z1WTI5a2FXNW5MbU52YlM5emEyVjBZMmdnTFMwK0NpQWdJQ0E4ZEdsMGJHVStURzluYnp3dmRHbDBiR1UrQ2lBZ0lDQThaR1Z6WXo1RGNtVmhkR1ZrSUhkcGRHZ2dVMnRsZEdOb0xqd3ZaR1Z6WXo0S0lDQWdJRHhrWldaelBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHdMall4TWpnME9Ua3pNU3d4TURnZ1REQXVOakV5T0RRNU9UTXhMRFkzTGpRMU9UWXpOelFnVERBdU5qRXlPRFE1T1RNeExEWTNMalExT1RZek56UWdRekF1TmpFeU9EUTVPVE14TERZeUxqRXdNRFkxTXpZZ015NDBOekU0TXpNM09DdzFOeTR4TkRnM05EZ3pJRGd1TVRFeU9EUTVPVE1zTlRRdU5EWTVNalUyTkNCTU9UZ3VNekEyTkRJMUxESXVNemsxT1RjeE5UY2dURGs0TGpNd05qUXlOU3d5TGpNNU5UazNNVFUzSUVNeE1ESXVPVFEzTkRReExDMHdMakk0TXpVeU1ETTFPQ0F4TURndU5qWTFOREE1TEMwd0xqSTRNelV5TURNMU9DQXhNVE11TXpBMk5ESTFMREl1TXprMU9UY3hOVGNnVERFeE15NHpNRFkwTWpVc01pNHpPVFU1TnpFMU55Qk1NakF6TGpVc05UUXVORFk1TWpVMk5DQk1NakF6TGpVc05UUXVORFk1TWpVMk5DQkRNakE0TGpFME1UQXhOaXcxTnk0eE5EZzNORGd6SURJeE1TdzJNaTR4TURBMk5UTTJJREl4TVN3Mk55NDBOVGsyTXpjMElFd3lNVEVzTVRNNElFd3hPREVzTVRNNElFd3hPREF1T1RrM01EUXhMRGt6TGprNU9UazVPVGdnVERFNE1DNDVPVFl3TXpJc09UTXVPVGs1T1RrNU9TQkRNVGd3TGprNU5UUTNOU3c0TlM0M01UWXhNakkySURFM05DNHlOems1TURrc056a3VNREF4TURBNE55QXhOalV1T1RrMk1ETXlMRGM1TGpBd01UQXdPRGNnVERFeU1pdzNPQzQ1T1RrNU9UazVJRU14TVRNdU56RTFOekk1TERjNExqazVPVGs1T1RrZ01UQTNMRGcxTGpjeE5UY3lPRFlnTVRBM0xEa3pMams1T1RrNU9Ua2dUREV3Tnl3eE16WXVNREUxTmpJeklFd3hNRGNzTVRNMkxqQXhOVFl5TXlCRE1UQTNMREUwTkM0eU9UazRPVFVnTVRFekxqY3hOVGN5T1N3eE5URXVNREUxTmpJeklERXlNaXd4TlRFdU1ERTFOakl6SUV3eE5qZ3NNVFV4TGpBeE5UWXlNeUJNTVRZNExERTJNeUJETVRZNExERTJOQzQyTlRZNE5UUWdNVFkyTGpZMU5qZzFOQ3d4TmpZZ01UWTFMREUyTmlCTU1USXdMREUyTmlCTU1USXdMREUzT1NCTU1UWTFMams1TmpBek1pd3hOemtnVERFMk5TNDVPVFl3TXpJc01UYzRMams1TnpnM055QkRNVGMwTGpJM09UUTNOQ3d4TnpndU9UazNPRGMzSURFNE1DNDVPVFE0Tml3eE56SXVNamd6TkRReUlERTRNQzQ1T1RZd016SXNNVFkwSUV3eE9ERXNNVFV3TGprMk1EVTFOQ0JNTWpFeExERTFNQzQ1TmpBMU5UUWdUREl4TVN3eE56RXVOakEyTWpBM0lFd3lNVEVzTVRjeExqWXdOakl3TnlCRE1qRXhMREUzTmk0NU5qVXhPVEVnTWpBNExqRTBNVEF4Tml3eE9ERXVPVEUzTURrMklESXdNeTQxTERFNE5DNDFPVFkxT0RnZ1RERXhNeTR6TURZME1qVXNNak0yTGpZMk9UZzNNeUJNTVRFekxqTXdOalF5TlN3eU16WXVOalk1T0RjeklFTXhNRGd1TmpZMU5EQTVMREl6T1M0ek5Ea3pOalVnTVRBeUxqazBOelEwTVN3eU16a3VNelE1TXpZMUlEazRMak13TmpReU5Td3lNell1TmpZNU9EY3pJRXc0TGpFeE1qZzBPVGt6TERFNE5DNDFPVFkxT0RnZ1REZ3VNVEV5T0RRNU9UTXNNVGcwTGpVNU5qVTRPQ0JETXk0ME56RTRNek0zT0N3eE9ERXVPVEUzTURrMklEQXVOakV5T0RRNU9UTXhMREUzTmk0NU5qVXhPVEVnTUM0Mk1USTRORGs1TXpFc01UY3hMall3TmpJd055Qk1NQzQyTVRJNE5EazVNekVzTVRJeElFd3lOeXd4TWpFZ1RESTNMREV6TmlCRE1qY3NNVFEwTGpJNE5ESTNNU0F6TXk0M01UVTNNamczTERFMU1TQTBNaXd4TlRFZ1REUXlMREUxTVNCTU1UQXdMREUxTVNCTU1UQXdMRGswSUVNeE1EQXNPRFV1TnpFMU56STRPQ0E1TXk0eU9EUXlOekV5TERjNUlEZzFMRGM1SUV3eU55dzNPU0JNTWpjc09USWdURGcwTERreUlFTTROUzQyTlRZNE5UUXlMRGt5SURnM0xEa3pMak0wTXpFME5UZ2dPRGNzT1RVZ1REZzNMRGsxSUV3NE55d3hNRGdnVERBdU5qRXlPRFE1T1RNeExERXdPQ0JhSWlCcFpEMGljR0YwYUMweElqNDhMM0JoZEdnK0NpQWdJQ0E4TDJSbFpuTStDaUFnSUNBOFp5QnBaRDBpVTNsdFltOXNjeUlnYzNSeWIydGxQU0p1YjI1bElpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEdjZ2FXUTlJa3h2WjI4aVBnb2dJQ0FnSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTkRjM0xEVTFJRXcwT1RRc05UVWdURFE1TkN3eE5URWdURFF6TlN3eE5URWdRelF5Tmk0M01UVTNNamtzTVRVeElEUXlNQ3d4TkRRdU1qZzBNamN4SURReU1Dd3hNellnVERReU1DdzVOaUJETkRJd0xEZzNMamN4TlRjeU9EZ2dOREkyTGpjeE5UY3lPU3c0TVNBME16VXNPREVnVERRek5TdzRNU0JNTkRjM0xEZ3hJRXcwTnpjc05UVWdXaUJOTkRRd0xEazRJRU0wTXpndU16UXpNVFEyTERrNElEUXpOeXc1T1M0ek5ETXhORFU0SURRek55d3hNREVnVERRek55d3hNekVnUXpRek55d3hNekl1TmpVMk9EVTBJRFF6T0M0ek5ETXhORFlzTVRNMElEUTBNQ3d4TXpRZ1REUTNOeXd4TXpRZ1REUTNOeXc1T0NCTU5EUXdMRGs0SUZvaUlHbGtQU0prSWlCbWFXeHNQU0lqUmtaR1JrWkdJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdJQ0FnSUR4bklHbGtQU0pwSWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3pPVFl1TURBd01EQXdMQ0ExTlM0d01EQXdNREFwSWo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d2IyeDVaMjl1SUdsa1BTSlFZWFJvTFRZaUlHWnBiR3c5SWlOR1JrWkdSa1lpSUhCdmFXNTBjejBpTUNBeU5pQXhOeUF5TmlBeE55QTVOaUF3SURrMklqNDhMM0J2YkhsbmIyNCtDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjRzlzZVdkdmJpQnBaRDBpVUdGMGFDMDNJaUJtYVd4c1BTSWpSVEV4UmpJeUlpQndiMmx1ZEhNOUlqQWdNUzR4TXpZNE5qZ3pPR1V0TVRNZ01UY2dNUzR4TXpZNE5qZ3pPR1V0TVRNZ01UY2dNVGNnTUNBeE55SStQQzl3YjJ4NVoyOXVQZ29nSUNBZ0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWswek16RXNNVFV4SUV3ek5EZ3NNVFV4SUV3ek5EZ3NNVEF4SUV3ek5EZ3NNVEF4SUVNek5EZ3NPVGt1TXpRek1UUTFPQ0F6TkRrdU16UXpNVFEyTERrNElETTFNU3c1T0NCTU16ZzVMRGs0SUV3ek9Ea3NPREVnVERNME5pdzRNU0JNTXpRMkxEZ3hJRU16TXpjdU56RTFOekk1TERneElETXpNU3c0Tnk0M01UVTNNamc0SURNek1TdzVOaUJNTXpNeExERTFNU0JhSWlCcFpEMGljaUlnWm1sc2JEMGlJMFpHUmtaR1JpSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTXpJMExEZzJJRXd6TWpRc056WWdURE15TkN3M05pQkRNekkwTERZM0xqY3hOVGN5T0RnZ016RTNMakk0TkRJM01TdzJNU0F6TURrc05qRWdUREkwT1N3Mk1TQk1NalE1TERZeElFTXlOREF1TnpFMU56STVMRFl4SURJek5DdzJOeTQzTVRVM01qZzRJREl6TkN3M05pQk1Nak0wTERFek5pQk1Nak0wTERFek5pQkRNak0wTERFME5DNHlPRFF5TnpFZ01qUXdMamN4TlRjeU9Td3hOVEVnTWpRNUxERTFNU0JNTXpBNUxERTFNU0JNTXpBNUxERTFNU0JETXpFM0xqSTROREkzTVN3eE5URWdNekkwTERFME5DNHlPRFF5TnpFZ016STBMREV6TmlCTU16STBMREV3TUNCTU1qZzNMREV3TUNCTU1qZzNMREV4TnlCTU16QTNMREV4TnlCTU16QTNMREV6TVNCTU16QTNMREV6TVNCRE16QTNMREV6TWk0Mk5UWTROVFFnTXpBMUxqWTFOamcxTkN3eE16UWdNekEwTERFek5DQk1NalUwTERFek5DQk1NalUwTERFek5DQkRNalV5TGpNME16RTBOaXd4TXpRZ01qVXhMREV6TWk0Mk5UWTROVFFnTWpVeExERXpNU0JNTWpVeExEZ3hJRXd5TlRFc09ERWdRekkxTVN3M09TNHpORE14TkRVNElESTFNaTR6TkRNeE5EWXNOemdnTWpVMExEYzRJRXd6TURRc056Z2dURE13TkN3M09DQkRNekExTGpZMU5qZzFOQ3czT0NBek1EY3NOemt1TXpRek1UUTFPQ0F6TURjc09ERWdURE13Tnl3NE5pQk1NekkwTERnMklGb2lJR2xrUFNKSElpQm1hV3hzUFNJalJrWkdSa1pHSWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnSUNBZ0lEeG5JR2xrUFNKaFp5SStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaeUJwWkQwaVEyOXRZbWx1WldRdFUyaGhjR1VpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHRZWE5ySUdsa1BTSnRZWE5yTFRJaUlHWnBiR3c5SW5kb2FYUmxJajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSFZ6WlNCNGJHbHVhenBvY21WbVBTSWpjR0YwYUMweElqNDhMM1Z6WlQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMjFoYzJzK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSFZ6WlNCbWFXeHNQU0lqUlRFeFJqSXlJaUI0YkdsdWF6cG9jbVZtUFNJamNHRjBhQzB4SWo0OEwzVnpaVDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4eVpXTjBJR2xrUFNKbklpQm1hV3hzUFNJalJURXhSakl5SWlCNFBTSXhNakFpSUhrOUlqa3lJaUIzYVdSMGFEMGlORGdpSUdobGFXZG9kRDBpTkRZaUlISjRQU0l6SWo0OEwzSmxZM1ErQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTkRBc01USXhJRXc0Tnl3eE1qRWdURGczTERFek9DQk1ORE1zTVRNNElFdzBNeXd4TXpnZ1F6UXhMak0wTXpFME5UZ3NNVE00SURRd0xERXpOaTQyTlRZNE5UUWdOREFzTVRNMUlFdzBNQ3d4TWpFZ1dpSWdhV1E5SWtOdmJXSnBibVZrTFZOb1lYQmxJaUJtYVd4c1BTSWpSVEV4UmpJeUlqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBOEwyYytDand2YzNablBnPT0pO1xuICAgICAgICBmaWx0ZXI6IGludmVydCg1MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMHB4IDYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICB9XG59XG5cbi5hZy13YXRlcm1hcmstdGV4dCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uYWctcm9vdC13cmFwcGVyLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICYuYWctbGF5b3V0LW5vcm1hbCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4uYWctcm9vdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyBzZXQgdG8gcmVsYXRpdmUsIHNvIGFic29sdXRlIHBvcHVwcyBhcHBlYXIgcmVsYXRpdmUgdG8gdGhpc1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICYuYWctbGF5b3V0LW5vcm1hbCxcbiAgICAmLmFnLWxheW91dC1hdXRvLWhlaWdodCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIHdhcyBnZXR0aW5nIHNvbWUgJ3Nob3VsZG4ndCBiZSB0aGVyZScgc2Nyb2xscywgdGhpcyBzb3J0cyBpdCBvdXRcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICYuYWctbGF5b3V0LW5vcm1hbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFZpZXdwb3J0c1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG4uYWctaGVhZGVyLXZpZXdwb3J0LFxuLmFnLWZsb2F0aW5nLXRvcC12aWV3cG9ydCxcbi5hZy1ib2R5LXZpZXdwb3J0LFxuLmFnLWNlbnRlci1jb2xzLXZpZXdwb3J0LFxuLmFnLWZsb2F0aW5nLWJvdHRvbS12aWV3cG9ydCxcbi5hZy1ib2R5LWhvcml6b250YWwtc2Nyb2xsLXZpZXdwb3J0LFxuLmFnLXZpcnR1YWwtbGlzdC12aWV3cG9ydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uYWctYm9keS12aWV3cG9ydC5hZy1sYXlvdXQtcHJpbnQge1xuICAgIGZsZXg6IG5vbmU7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gICAgLmFnLWxheW91dC1ub3JtYWwge1xuICAgICAgICAvLyBoaWRlIGdyaWQgaWYgdHJ5aW5nIHRvIHByaW50IGluIG5vbi1wcmludCBtb2RlXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5hZy1yb290LXdyYXBwZXIsXG4gICAgLmFnLXJvb3Qtd3JhcHBlci1ib2R5LFxuICAgIC5hZy1yb290LFxuICAgIC5hZy1ib2R5LXZpZXdwb3J0LFxuICAgIC5hZy1jZW50ZXItY29scy1jb250YWluZXIsXG4gICAgLmFnLWNlbnRlci1jb2xzLXZpZXdwb3J0LFxuICAgIC5hZy1jZW50ZXItY29scy1jbGlwcGVyLFxuICAgIC5hZy1ib2R5LWhvcml6b250YWwtc2Nyb2xsLXZpZXdwb3J0LFxuICAgIC5hZy12aXJ0dWFsLWxpc3Qtdmlld3BvcnQge1xuICAgICAgICAvLyBOZWVkIGF1dG8gaGVpZ2h0IGJlY2F1c2UgMTAwJSBoZWlnaHQgZWxlbWVudHMgd2l0aCBvdmVyZmxvdyBoaWRkZW4gY2F1c2UgcHJpbnRpbmcgaXNzdWVzIGluIElFIGFuZCBFZGdlXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAvLyBPdmVyZmxvdyBoaWRkZW4sIGJlY2F1c2Ugb3RoZXJ3aXNlIHNjcm9sbCBiYXJzIHByaW50IGluIElFXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgLy8gZmxleCBlbGVtZW50cyBjYXVzZSBwcmludGluZyBpc3N1ZXMgaW4gRmlyZWZveFxuICAgICAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05Mzk4OTdcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFnLXJvdyB7XG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICB9XG59XG5cbi5hZy1ib2R5LXZpZXdwb3J0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJi5hZy1sYXlvdXQtbm9ybWFsIHtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIH1cbn1cblxuLmFnLWNlbnRlci1jb2xzLXZpZXdwb3J0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uYWctYm9keS1ob3Jpem9udGFsLXNjcm9sbC12aWV3cG9ydCB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4uYWctdmlydHVhbC1saXN0LXZpZXdwb3J0IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ29udGFpbmVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG4uYWctaGVhZGVyLWNvbnRhaW5lcixcbi5hZy1mbG9hdGluZy10b3AtY29udGFpbmVyLFxuLmFnLWJvZHktY29udGFpbmVyLFxuLmFnLXBpbm5lZC1yaWdodC1jb2xzLWNvbnRhaW5lcixcbi5hZy1jZW50ZXItY29scy1jb250YWluZXIsXG4uYWctcGlubmVkLWxlZnQtY29scy1jb250YWluZXIsXG4uYWctZmxvYXRpbmctYm90dG9tLWNvbnRhaW5lcixcbi5hZy1ib2R5LWhvcml6b250YWwtc2Nyb2xsLWNvbnRhaW5lcixcbi5hZy1mdWxsLXdpZHRoLWNvbnRhaW5lcixcbi5hZy1mbG9hdGluZy1ib3R0b20tZnVsbC13aWR0aC1jb250YWluZXIsXG4uYWctdmlydHVhbC1saXN0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vLyBmb3Igd2hlbiBhdXRvIGhlaWdodCBpcyB1c2VkIGJ1dCB0aGVyZSBpcyBubyByb3cgZGF0YVxuLmFnLWhlYWRlci1jb250YWluZXIsIC5hZy1mbG9hdGluZy10b3AtY29udGFpbmVyLCAuYWctZmxvYXRpbmctYm90dG9tLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hZy1jZW50ZXItY29scy1jbGlwcGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uYWctY2VudGVyLWNvbHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4uYWctbGF5b3V0LXByaW50IC5hZy1jZW50ZXItY29scy1jbGlwcGVyIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5hZy1sYXlvdXQtYXV0by1oZWlnaHQgLmFnLWNlbnRlci1jb2xzLWNsaXBwZXIsXG4uYWctbGF5b3V0LWF1dG8taGVpZ2h0IC5hZy1jZW50ZXItY29scy1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbi5hZy1waW5uZWQtcmlnaHQtY29scy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWctYm9keS1ob3Jpem9udGFsLXNjcm9sbC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmFnLWZ1bGwtd2lkdGgtY29udGFpbmVyLFxuLmFnLWZsb2F0aW5nLXRvcC1mdWxsLXdpZHRoLWNvbnRhaW5lcixcbi5hZy1mbG9hdGluZy1ib3R0b20tZnVsbC13aWR0aC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgLy8gdHVybiBvZmYgcG9pbnRlciBldmVudHMsIGJlY2F1c2UgdGhpcyBjb250YWluZXIgb3ZlcmxheXMgdGhlIG1haW4gcm93IGNvbnRhaW5lcnMuXG4gICAgLy8gc28gd2hlbiB1c2VyIGNsaWNrcyBvbiBzcGFjZSBiZXR3ZWVuIGZ1bGwgd2lkdGggcm93cywgd2Ugd2FudCB0aGUgbW91c2UgY2xpY2tzIHRvXG4gICAgLy8gcGFzcyBvbnRvIHRoZSB1bmRlcmx5aW5nIGNvbnRhaW5lciB3aGVyZSB0aGUgcmVhbCByb3dzIGFyZS4gZWcgaWYgdXNpbmcgZnVsbCB3aWR0aFxuICAgIC8vIGZvciByb3cgZ3JvdXBpbmcsIHRoZSBncm91cHMgd2lsbCBiZSBpbiB0aGUgZnVsbCB3aWR0aCBjb250YWluZXIsIGJ1dCB3aGVuIHVzZXJcbiAgICAvLyBvcGVucyBhIGdyb3VwIHRoZSBjaGlsZHJlbiBhcmUgc2hvd24gaW4gdGhlIG90aGVyIGNvbnRhaW5lcnMgLSB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZVxuICAgIC8vIGRvbid0IGJsb2NrIG1vdXNlIGNsaWNrcyB0byB0aG9zZSBvdGhlciBjb250YWluZXJzIHdpdGggdGhlIGNoaWxkcmVuLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmFnLWZ1bGwtd2lkdGgtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFnLWZsb2F0aW5nLWJvdHRvbS1mdWxsLXdpZHRoLWNvbnRhaW5lciwgLmFnLWZsb2F0aW5nLXRvcC1mdWxsLXdpZHRoLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWctdmlydHVhbC1saXN0LWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogU2Nyb2xsZXJzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cbi5hZy1jZW50ZXItY29scy1jbGlwcGVyIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWctYm9keS1ob3Jpem9udGFsLXNjcm9sbCB7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZy1sYXlvdXQtcHJpbnQge1xuICAgIC5hZy1ib2R5LWhvcml6b250YWwtc2Nyb2xsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5hZy1mb3JjZS12ZXJ0aWNhbC1zY3JvbGwge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuXG4gICAgJi5hZy1sYXlvdXQtcHJpbnQge1xuICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uYWctaG9yaXpvbnRhbC1sZWZ0LXNwYWNlciwgLmFnLWhvcml6b250YWwtcmlnaHQtc3BhY2VyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAmLmFnLXNjcm9sbGVyLWNvcm5lciB7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG59XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEhlYWRlcnNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qL1xuLmFnLWhlYWRlciwgLmFnLXBpbm5lZC1sZWZ0LWhlYWRlciwgLmFnLXBpbm5lZC1yaWdodC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFnLWhlYWRlci1jZWxsLXNvcnRhYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFnLXBpbm5lZC1sZWZ0LWhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWctcGlubmVkLXJpZ2h0LWhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWctaGVhZGVyLXJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIHNvIHdoZW4gZmxvYXRpbmcgZmlsdGVycyBhcmUgaGVpZ2h0IDBweCwgdGhlIGNvbnRlbnRzIGRvbid0IHNwaWxsIG91dFxufVxuXG4uYWctaGVhZGVyLWNlbGwge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmFnLWhlYWRlci1ncm91cC1jZWxsLWxhYmVsLCAuYWctaGVhZGVyLWNlbGwtbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5hZy1oZWFkZXItY2VsbC10ZXh0IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hZy1yaWdodC1hbGlnbmVkLWhlYWRlciAuYWctaGVhZGVyLWNlbGwtbGFiZWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmFnLWhlYWRlci1ncm91cC10ZXh0IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hZy1oZWFkZXItY2VsbC1yZXNpemUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogOHB4O1xuICAgIHRvcDogMDtcblxuICAgIGN1cnNvcjogZXctcmVzaXplO1xuXG4gICAgLy8gdW5waW5uZWQgaGVhZGVycyBnZXQgdGhlaXIgcmV6aXNlIGhhbmRsZSBvbiB0aGUgcmlnaHQgaW4gbm9ybWFsIG1vZGUgYW5kIGxlZnQgaW4gUlRMIG1vZGVcbiAgICBAaW5jbHVkZSBhZy11bnRoZW1lZC1ydGwoKFxuICAgICAgICByaWdodDogLTRweFxuICAgICkpO1xufVxuXG4uYWctcGlubmVkLWxlZnQtaGVhZGVyIC5hZy1oZWFkZXItY2VsbC1yZXNpemUge1xuICAgIHJpZ2h0OiAtNHB4OyAvLyBwaW5uZWQgbGVmdCBoZWFkZXJzIGFsd2F5cyBoYXZlIHRoZWlyIHJlc2l6ZSBvbiB0aGUgcmlnaHQsIGV2ZW4gaW4gUlRMIG1vZGVcbn1cblxuLmFnLXBpbm5lZC1yaWdodC1oZWFkZXIgLmFnLWhlYWRlci1jZWxsLXJlc2l6ZSB7XG4gICAgbGVmdDogLTRweDsgLy8gcGlubmVkIHJpZ2h0IGhlYWRlcnMgYWx3YXlzIGhhdmUgdGhlaXIgcmVzaXplIG9uIHRoZSBsZWZ0LCBldmVuIGluIFJUTCBtb2RlXG59XG5cbi5hZy1oZWFkZXItc2VsZWN0LWFsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ29sdW1uc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG4uYWctY29sdW1uLW1vdmluZyB7XG4gICAgLmFnLWNlbGwge1xuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnM7XG4gICAgfVxuXG4gICAgLmFnLWhlYWRlci1jZWxsIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzO1xuICAgIH1cblxuICAgIC5hZy1oZWFkZXItZ3JvdXAtY2VsbCB7XG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4ycywgd2lkdGggMC4ycztcbiAgICB9XG59XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENvbHVtbiBQYW5lbFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG5cbi5hZy1jb2x1bW4tcGFuZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uYWctY29sdW1uLXNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxleC1ncm93OiAzO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5hZy1jb2x1bW4tc2VsZWN0LWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogbm9uZTtcbn1cblxuLmFnLWNvbHVtbi1zZWxlY3QtaGVhZGVyLWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFnLWNvbHVtbi1zZWxlY3QtaGVhZGVyLWZpbHRlci13cmFwcGVyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmFnLWNvbHVtbi1zZWxlY3QtaGVhZGVyLWZpbHRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZy1jb2x1bW4tc2VsZWN0LWxpc3Qge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uYWctY29sdW1uLWRyb3Age1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZy1jb2x1bW4tZHJvcC1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZy1jb2x1bW4tZHJvcC1jZWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZy1jb2x1bW4tZHJvcC1jZWxsLXRleHQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFnLWNvbHVtbi1kcm9wLXZlcnRpY2FsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAxIDEgMDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmFnLWNvbHVtbi1kcm9wLXZlcnRpY2FsLXRpdGxlLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWctY29sdW1uLWRyb3AtdmVydGljYWwtbGlzdCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteDogYXV0bztcblxuICAgID4gKiB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgfVxufVxuXG4uYWctY29sdW1uLWRyb3AtZW1wdHkgLmFnLWNvbHVtbi1kcm9wLXZlcnRpY2FsLWxpc3Qge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hZy1jb2x1bW4tZHJvcC12ZXJ0aWNhbC1lbXB0eS1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFnLWNvbHVtbi1kcm9wLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFnLWNvbHVtbi1kcm9wLWNlbGwtYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZy1maWx0ZXItdG9vbHBhbmVsIHtcbiAgICBmbGV4OiAxIDEgMHB4O1xuICAgIG1pbi13aWR0aDogMDtcbn1cblxuLmFnLWZpbHRlci10b29scGFuZWwtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZy1maWx0ZXItdG9vbHBhbmVsLWhlYWRlciwgLmFnLWZpbHRlci10b29scGFuZWwtc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA+ICoge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLmFnLWZpbHRlci1hcHBseS1wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFJvd3NcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qL1xuLy8gZm9yIGFuaW1hdGlvbnMsIGFsbG93cyByb3dzIHRvIHNsaWRlIHVwIGFuZCBkb3duLFxuLmFnLXJvdy1hbmltYXRpb24gLmFnLXJvdyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIHRvcCAwLjRzLCBoZWlnaHQgMC40cywgYmFja2dyb3VuZC1jb2xvciAwLjFzLCBvcGFjaXR5IDAuMnM7XG59XG5cbi5hZy1yb3ctbm8tYW5pbWF0aW9uIC5hZy1yb3cge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcbn1cblxuLmFnLXJvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFnLXJvdy1sb2FkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZy1yb3ctcG9zaXRpb24tYWJzb2x1dGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFnLXJvdy1wb3NpdGlvbi1yZWxhdGl2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWctZnVsbC13aWR0aC1yb3cge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gdHVybiBldmVudHMgYmFjayBvbiwgYXMgd2UgcmVtb3ZlZCB0aGVtIGluIHRoZSBwYXJlbnRcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uYWctcm93LWlubGluZS1lZGl0aW5nIHtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uYWctcm93LWRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uYWctc3R1Yi1jZWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENlbGxzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cbi5hZy1jZWxsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hZy1jZWxsLXZhbHVlLCAuYWctZ3JvdXAtdmFsdWUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5hZy1jZWxsLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gYWRkaW5nIHdpZHRoOiAxMDAlIGhlcmUgYnJlYWtzIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzXG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgJi5hZy1yb3ctZ3JvdXAge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG59XG5cbi5hZy1mdWxsLXdpZHRoLXJvdyAuYWctY2VsbC13cmFwcGVyLmFnLXJvdy1ncm91cCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFnLWNlbGwtYXV0by1oZWlnaHQge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmFnLWNlbGwtaW5saW5lLWVkaXRpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgLmFnLWNlbGwtZWRpdC13cmFwcGVyLFxuICAgIC5hZy1jZWxsLWVkaXRvcixcbiAgICAuYWctY2VsbC1lZGl0b3IgLmFnLXdyYXBwZXIsXG4gICAgLmFnLWNlbGwtZWRpdG9yIGlucHV0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG59XG5cbi5hZy1jZWxsIC5hZy1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRmlsdGVyc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG4uYWctc2V0LWZpbHRlci1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWctc2V0LWZpbHRlci1pdGVtLXZhbHVlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hZy1zZXQtZmlsdGVyLWl0ZW0tY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBmb3IgZm9jdXMgcmVhc29ucywgd2UgbmVlZCB0aGlzIGZvciBJRSwgb3RoZXJ3aXNlIGZvciB0aGUgc2V0IGZpbHRlciwgdGhlICdzZWxlY3RBbGwnIGNsaWNrIGRvZXNuJ3Qgd29ya1xuICAgIC8vIHdoZW4geW91IGNsaWNrIG9uIGl0IHdoZW4gdGhlIHF1aWNrIGZpbHRlciBoYXMgZm9jdXMuIHRoaXMgd2FzIGEgZml4IGZvciBBRy0yMjU4XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5hZy1maWx0ZXItYm9keS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hZy1maWx0ZXItZmlsdGVyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWctZmlsdGVyLWNvbmRpdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRmxvYXRpbmcgRmlsdGVyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cblxuLmFnLWZsb2F0aW5nLWZpbHRlci1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hZy1mbG9hdGluZy1maWx0ZXItZnVsbC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hZy1mbG9hdGluZy1maWx0ZXItZnVsbC1ib2R5ID4gZGl2IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmFnLWZsb2F0aW5nLWZpbHRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFnLWZsb2F0aW5nLWZpbHRlci1pbnB1dCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgPiAqIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxufVxuXG4uYWctZmxvYXRpbmctZmlsdGVyLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiBub25lO1xufVxuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBEcmFnICYgRHJvcFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG5cbi5hZy1kbmQtZ2hvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBPdmVybGF5XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cbi5hZy1vdmVybGF5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWctb3ZlcmxheS1wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZy1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZy1vdmVybGF5LWxvYWRpbmctd3JhcHBlciB7XG4gICAgLy8gcHJldmVudCBpbnRlcmFjdGlvbiB3aXRoIGdyaWQgd2hpbGUgaXQncyBsb2FkaW5nXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUG9wdXBcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qL1xuLmFnLXBvcHVwLWNoaWxkIHtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4uYWctcG9wdXAtZWRpdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmFnLWxhcmdlLXRleHQtaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBWaXJ0dWFsIExpc3RzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cbi5hZy12aXJ0dWFsLWxpc3QtaXRlbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGbG9hdGluZyBUb3AgYW5kIEJvdHRvbVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG4uYWctZmxvYXRpbmctdG9wIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZy1waW5uZWQtbGVmdC1mbG9hdGluZy10b3Age1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmFnLXBpbm5lZC1yaWdodC1mbG9hdGluZy10b3Age1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmFnLWZsb2F0aW5nLWJvdHRvbSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWctcGlubmVkLWxlZnQtZmxvYXRpbmctYm90dG9tIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5hZy1waW5uZWQtcmlnaHQtZmxvYXRpbmctYm90dG9tIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiAwcHg7XG59XG5cblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRGlhbG9nXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cblxuLmFnLWRpYWxvZywgLmFnLXBhbmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hZy1wYW5lbC10aXRsZS1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmFnLXBhbmVsLXRpdGxlLWJhci10aXRsZSB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5hZy1wYW5lbC10aXRsZS1iYXItYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFnLXBhbmVsLXRpdGxlLWJhci1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFnLXBhbmVsLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFnLWRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWctcmVzaXplciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gICAgJi5hZy1yZXNpemVyLXRvcExlZnQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBjdXJzb3I6IG53c2UtcmVzaXplO1xuICAgIH1cbiAgICAmLmFnLXJlc2l6ZXItdG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcbiAgICB9XG4gICAgJi5hZy1yZXNpemVyLXRvcFJpZ2h0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGN1cnNvcjogbmVzdy1yZXNpemU7XG4gICAgfVxuICAgICYuYWctcmVzaXplci1yaWdodCB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgIH1cbiAgICAmLmFnLXJlc2l6ZXItYm90dG9tUmlnaHQge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgY3Vyc29yOiBud3NlLXJlc2l6ZTtcbiAgICB9XG4gICAgJi5hZy1yZXNpemVyLWJvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7XG4gICAgfVxuICAgICYuYWctcmVzaXplci1ib3R0b21MZWZ0IHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgY3Vyc29yOiBuZXN3LXJlc2l6ZTtcbiAgICB9XG4gICAgJi5hZy1yZXNpemVyLWxlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgIH1cbn1cblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogVG9vbHRpcFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG5cbi5hZy10b29sdGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogOTk5OTk7XG59XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEFuaW1hdGlvbnNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qL1xuXG4vLyB0aGlzIGlzIHVzZWQgYnkgdGhlIGFuaW1hdGVTaG93Q2hhbmdlQ2VsbFJlbmRlcmVyLiBpdCBpcyBhcmd1YWJsZSB0aGF0IHRoaXMgYmVsb25ncyBpbiB0aGUgdGhlbWVzLFxuLy8gaG93ZXZlciBpdCBpcyBub3QgdGllZCB0byBjb2xvciwgb25seSBwbGFjZW1lbnQgYW5kIHZpc2libGl0eSwgd2hpY2ggaXMgYmVoYXZpb3VyIGFuZCBub3Qgc3R5bGUsXG4vLyB0aHVzIGJlbG9uZ3MgaGVyZSwgYmVzaWRlcyBpdCBkb2Vzbid0IGNoYW5nZSB3aWggdGhlIHRoZW1lc1xuLmFnLXZhbHVlLXNsaWRlLW91dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzLCBtYXJnaW4tcmlnaHQgM3M7IC8vIGFzIHZhbHVlIGZhZGVzLCBpdCBhbHNvIG1vdmVzIHRvIHRoZSBsZWZ0IHZpYSB0aGUgbWFyZ2luIHNldHRpbmdcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4uYWctdmFsdWUtc2xpZGUtb3V0LWVuZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5hZy1vcGFjaXR5LXplcm8ge1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbn1cblxuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNZW51XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cbi5hZy1tZW51IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYWctbWVudS1jb2x1bW4tc2VsZWN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogMjY1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5hZy1tZW51LWxpc3Qge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uYWctbWVudS1vcHRpb24sIC5hZy1tZW51LXNlcGFyYXRvciB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xufVxuXG4uYWctbWVudS1zZXBhcmF0b3ItY2VsbCwgLmFnLW1lbnUtb3B0aW9uLXBhcnQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmFnLW1lbnUtb3B0aW9uLXRleHQge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hZy1tZW51LWNvbHVtbi1zZWxlY3Qtd3JhcHBlciAuYWctY29sdW1uLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBSaWNoIFNlbGVjdFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiovXG4uYWctcmljaC1zZWxlY3Qge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWctcmljaC1zZWxlY3QtdmFsdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFnLXJpY2gtc2VsZWN0LXZhbHVlLWljb24ge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG9yZGVyOiAxO1xuICAgIEBpbmNsdWRlIGFnLXVudGhlbWVkLXJ0bCgoIHRleHQtYWxpZ246IHJpZ2h0ICkpO1xufVxuXG5cbi5hZy1yaWNoLXNlbGVjdC1saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZy1yaWNoLXNlbGVjdC12aXJ0dWFsLWxpc3QtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFnLXJpY2gtc2VsZWN0LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFBhZ2luYXRpb25cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qL1xuLmFnLXBhZ2luZy1wYW5lbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5hZy1wYWdpbmctcGFnZS1zdW1tYXJ5LXBhbmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZy1wYWdpbmctYnV0dG9uLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWctcGFnaW5nLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWctZGlzYWJsZWQgLmFnLXBhZ2luZy1wYWdlLXN1bW1hcnktcGFuZWwge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBUb29sIFBhbmVsXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cbi5hZy10b29sLXBhbmVsLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLmFnLWNvbHVtbi1zZWxlY3QtY29sdW1uLFxuLmFnLWNvbHVtbi1zZWxlY3QtY29sdW1uLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICA+ICoge1xuICAgICAgICBmbGV4OiBub25lO1xuICAgIH1cbn1cblxuLmFnLWNvbHVtbi1zZWxlY3QtY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZy10b29sLXBhbmVsLWhvcml6b250YWwtcmVzaXplIHtcbiAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5hZy1zaWRlLWJhci1sZWZ0IC5hZy10b29sLXBhbmVsLWhvcml6b250YWwtcmVzaXplIHtcbiAgICBAaW5jbHVkZSBhZy11bnRoZW1lZC1ydGwoKCByaWdodDogLTNweCApKTtcbn1cblxuLmFnLXNpZGUtYmFyLXJpZ2h0IC5hZy10b29sLXBhbmVsLWhvcml6b250YWwtcmVzaXplIHtcbiAgICBAaW5jbHVkZSBhZy11bnRoZW1lZC1ydGwoKCBsZWZ0OiAtM3B4ICkpO1xufVxuXG4uYWctZGV0YWlscy1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWctZGV0YWlscy1yb3ctZml4ZWQtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hZy1kZXRhaWxzLWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWctZGV0YWlscy1ncmlkLWZpeGVkLWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWctaGVhZGVyLWdyb3VwLWNlbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWctY2VsbC1sYWJlbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmFnLXJpZ2h0LWFsaWduZWQtaGVhZGVyIC5hZy1jZWxsLWxhYmVsLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLyoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogU2lkZSBCYXJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qL1xuLmFnLXNpZGUtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmFnLXNpZGUtYmFyLWxlZnQge1xuICAgIG9yZGVyOiAtMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uYWctc2lkZS1idXR0b24tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFnLXNpZGUtYnV0dG9uLWxhYmVsIHtcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xufVxuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBTdGF0dXMgQmFyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cbi5hZy1zdGF0dXMtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWctc3RhdHVzLXBhbmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmFnLXN0YXR1cy1uYW1lLXZhbHVlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWctc3RhdHVzLWJhci1sZWZ0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmFnLXN0YXR1cy1iYXItY2VudGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmFnLXN0YXR1cy1iYXItcmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4vKipcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBXaWRnZXRzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cblxuXG4uYWctaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgc3BlYWs6IG5vbmU7XG59XG5cbi5hZy1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWctZ3JvdXAtdGl0bGUtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZy1ncm91cC10aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmFnLWdyb3VwLXRpdGxlLWJhclxuLmFnLWdyb3VwLXRpdGxlIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5hZy1ncm91cC10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZy1ncm91cC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZy1kaXNhYmxlZCAuYWctZ3JvdXAtY29udGFpbmVyIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFnLWdyb3VwLWNvbnRhaW5lci1ob3Jpem9udGFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmFnLWdyb3VwLWNvbnRhaW5lci12ZXJ0aWNhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFnLWNoYXJ0cy1mb250LXNpemUtY29sb3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hZy1jb2x1bW4tZ3JvdXAtaWNvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgID4gKiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5hZy1ncm91cC1pdGVtLWFsaWdubWVudC1zdHJldGNoIC5hZy1ncm91cC1pdGVtIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmFnLWdyb3VwLWl0ZW0tYWxpZ25tZW50LXN0YXJ0IC5hZy1ncm91cC1pdGVtIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmFnLWdyb3VwLWl0ZW0tYWxpZ25tZW50LWVuZCAuYWctZ3JvdXAtaXRlbSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uYWctdG9nZ2xlLWJ1dHRvbi1pY29uIHtcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjNzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xcHg7XG59XG5cbi5hZy1pbnB1dC1maWVsZCwgLmFnLXNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZy1pbnB1dC1maWVsZC1pbnB1dCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAwO1xufVxuXG4uYWctZmxvYXRpbmctZmlsdGVyLWlucHV0IC5hZy1pbnB1dC1maWVsZC1pbnB1dFt0eXBlPSdkYXRlJ10ge1xuICAgIC8vIEZpeCBhIGJ1ZyBpbiBCbGluayByZW5kZXJpbmcgZW5naW5lIHdoZXJlIGRhdGUgaW5wdXQgd2lsbCBub3Qgc2hyaW5rIGZyb20gaXRzIGRlZmF1bHQgc2l6ZSBpbiBhXG4gICAgLy8gZmxleCBjb250YWluZXIsIGJ1dCBpdCB3aWxsIGdyb3cuIFNvIHdlIGdpdmUgaXQgYSB2ZXJ5IHNtYWxsIHdpZHRoIGFuZCBpdCB3aWxsIGdyb3cgdG8gdGhlIHJpZ2h0IHNpemVcbiAgICB3aWR0aDogMXB4O1xufVxuXG4uYWctcmFuZ2UtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFnLWFuZ2xlLXNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWctYW5nbGUtc2VsZWN0LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZy1hbmdsZS1zZWxlY3QtcGFyZW50LWNpcmNsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFnLWFuZ2xlLXNlbGVjdC1jaGlsZC1jaXJjbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuXG5cbi5hZy1zbGlkZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFnLXNsaWRlci13cmFwcGVyIHtcbiAgICAuYWctaW5wdXQtZmllbGQge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG59XG5cbi5hZy1waWNrZXItZmllbGQtZGlzcGxheSB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5hZy1waWNrZXItZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFnLXBpY2tlci1maWVsZC1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZy1waWNrZXItZmllbGQtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFnLWxhYmVsLWFsaWduLXJpZ2h0IHtcbiAgICAuYWctbGFiZWwge1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG4gICAgPiAqIHtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICB9XG59XG5cbi5hZy1sYWJlbC1hbGlnbi10b3Age1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgPiAqIHtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICB9XG59XG5cbi5hZy1jb2xvci1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFnLXNwZWN0cnVtLWNvbG9yIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5hZy1zcGVjdHJ1bS1maWxsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uYWctc3BlY3RydW0tdmFsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZy1zcGVjdHJ1bS1kcmFnZ2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWctc3BlY3RydW0taHVlIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsXG4gICAgICAgICNmZjAwMDAgMyUsICNmZmZmMDAgMTclLFxuICAgICAgICAjMDBmZjAwIDMzJSwgIzAwZmZmZiA1MCUsXG4gICAgICAgICMwMDAwZmYgNjclLCAjZmYwMGZmIDgzJSxcbiAgICAgICAgI2ZmMDAwMCAxMDAlXG4gICAgKTtcbn1cblxuLmFnLXNwZWN0cnVtLWFscGhhIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5hZy1zcGVjdHJ1bS1odWUtYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWctc3BlY3RydW0tYWxwaGEtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDApLCByZ2IoMCwgMCwgMCkpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmFnLXNwZWN0cnVtLXRvb2wge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFnLXNwZWN0cnVtLXNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYWctcmVjZW50LWNvbG9ycyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFnLXJlY2VudC1jb2xvciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vLyBEZWZhdWx0IHZhbHVlcyBmb3IgdGhlbWVzIHRoYXQgZG8gbm90IHVzZSB0aGUgbWl4aW5zXG5AZm9yICRpIGZyb20gMSB0byAxMCB7XG4gICAgLmFnLWNvbHVtbi1zZWxlY3QtaW5kZW50LSN7JGl9IHtcbiAgICAgICAgQGluY2x1ZGUgYWctdW50aGVtZWQtcnRsKCggcGFkZGluZy1sZWZ0OiAkaSAqIDIwcHggKSk7XG4gICAgfVxuXG4gICAgLmFnLXJvdy1ncm91cC1pbmRlbnQtI3skaX0ge1xuICAgICAgICBAaW5jbHVkZSBhZy11bnRoZW1lZC1ydGwoKCBwYWRkaW5nLWxlZnQ6ICRpICogMjBweCApKTtcbiAgICB9XG59XG5cbi5hZy1sdHIge1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIC5hZy1ib2R5LCAuYWctZmxvYXRpbmctdG9wLCAuYWctZmxvYXRpbmctYm90dG9tLCAuYWctaGVhZGVyLCAuYWctYm9keS12aWV3cG9ydCwgLmFnLWJvZHktaG9yaXpvbnRhbC1zY3JvbGwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbn1cblxuLmFnLXJ0bCB7XG4gICAgZGlyZWN0aW9uOiBydGw7XG4gICAgLmFnLWJvZHksIC5hZy1mbG9hdGluZy10b3AsIC5hZy1mbG9hdGluZy1ib3R0b20sIC5hZy1oZWFkZXIsIC5hZy1ib2R5LXZpZXdwb3J0LCAuYWctYm9keS1ob3Jpem9udGFsLXNjcm9sbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG5cbiAgICAuYWctaWNvbi1jb250cmFjdGVkLFxuICAgIC5hZy1pY29uLXRyZWUtY2xvc2VkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL2FnLWdyaWQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9zcmMvc3R5bGVzL2FnLXRoZW1lLWFscGluZS9zYXNzL2FnLXRoZW1lLWFscGluZS1taXhpbi5zY3NzXCI7XG5cbi5hZy10aGVtZS1hbHBpbmUge1xuICAgIEBpbmNsdWRlIGFnLXRoZW1lLWFscGluZSgpO1xufSIsIi8vIEF1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgcnRsIHN0eWxlcyBmcm9tIHByb3ZpZGVkIGx0ciBzdHlsZXMgYnkgZmxpcHBpbmcgXCJsZWZ0XCIgYW5kIFwicmlnaHRcIlxuLy8gaW4gcHJvcGVydHkgbmFtZXMgYW5kIHZhbHVlcy5cbi8vXG4vLyBGb3IgZXhhbXBsZTpcbi8vXG4vLyAuZm9vIHtcbi8vICAgICBAaW5jbHVkZSBhZy11bnRoZW1lZC1ydGwoKG1hcmdpbi1sZWZ0OiAxMHB4KSk7XG4vLyB9XG4vL1xuLy8gV2lsbCBlbWl0OlxuLy9cbi8vIC5hZy1sdHIgLmZvbyB7XG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuLy8gfVxuLy8gLmFnLXJ0bCAuZm9vIHtcbi8vICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuLy8gfVxuQG1peGluIGFnLXVudGhlbWVkLXJ0bCgkcnVsZXMpIHtcbiAgICBAaWYgbGVuZ3RoKG50aCgmLCAxKSkgPCAxIHtcbiAgICAgICAgQGVycm9yIFwiYWctdW50aGVtZWQtcnRsKCkgY2FuJ3QgYmUgdXNlZCBhdCB0aGUgdG9wIGxldmVsIG9mIGEgY3NzIGZpbGUsIG9ubHkgbmVzdGVkIGluIGEgc2VsZWN0b3IuXCI7XG4gICAgfVxuICAgIEBpZiBzdHItaW5kZXgobnRoKG50aCgmLCAxKSwgMSksIFwiLmFnLXRoZW1lLVwiKSAhPSBudWxsIHtcbiAgICAgICAgQGVycm9yIFwiYWctdW50aGVtZWQtcnRsKCkgc2hvdWxkIG5vdCBiZSB1c2VkIGluIGEgdGhlbWUsIHVzZSBhZy10aGVtZS1ydGwoKSBpbnN0ZWFkLlwiO1xuICAgIH1cbiAgICAuYWctbHRyICYge1xuICAgICAgICBAZWFjaCAkcHJvcGVydHksICR2YWx1ZSBpbiAkcnVsZXMge1xuICAgICAgICAgICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFnLXJ0bCAmIHtcbiAgICAgICAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gYWctZ2V0LXJ0bC1ydWxlcygkcnVsZXMpIHtcbiAgICAgICAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AZnVuY3Rpb24gYWctZ2V0LXJ0bC1ydWxlcygkbHRyLXJ1bGVzKSB7XG4gICAgJHJ0bC1ydWxlczogKCk7XG4gICAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGx0ci1ydWxlcyB7XG4gICAgICAgIEBpZiBzdHItaW5kZXgoJHByb3BlcnR5LCBcIi1yaWdodFwiKSB7XG4gICAgICAgICAgICAkcnRsLXByb3BlcnR5OiBhZy1zdHItcmVwbGFjZSgkcHJvcGVydHksIFwiLXJpZ2h0XCIsIFwiLWxlZnRcIik7XG4gICAgICAgICAgICAkcnRsLXJ1bGVzOiBtYXAtbWVyZ2UoJHJ0bC1ydWxlcywgKCRydGwtcHJvcGVydHk6ICR2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmIHN0ci1pbmRleCgkcHJvcGVydHksIFwiLWxlZnRcIikge1xuICAgICAgICAgICAgJHJ0bC1wcm9wZXJ0eTogYWctc3RyLXJlcGxhY2UoJHByb3BlcnR5LCBcIi1sZWZ0XCIsIFwiLXJpZ2h0XCIpO1xuICAgICAgICAgICAgJHJ0bC1ydWxlczogbWFwLW1lcmdlKCRydGwtcnVsZXMsICgkcnRsLXByb3BlcnR5OiAkdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkcHJvcGVydHkgPT0gXCJyaWdodFwiIHtcbiAgICAgICAgICAgICRydGwtcnVsZXM6IG1hcC1tZXJnZSgkcnRsLXJ1bGVzLCAobGVmdDogJHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgQGVsc2UgaWYgJHByb3BlcnR5ID09IFwibGVmdFwiIHtcbiAgICAgICAgICAgICRydGwtcnVsZXM6IG1hcC1tZXJnZSgkcnRsLXJ1bGVzLCAocmlnaHQ6ICR2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIEBlbHNlIGlmICR2YWx1ZSA9PSBcInJpZ2h0XCIge1xuICAgICAgICAgICAgJHJ0bC1ydWxlczogbWFwLW1lcmdlKCRydGwtcnVsZXMsICgkcHJvcGVydHk6IGxlZnQpKTtcbiAgICAgICAgfVxuICAgICAgICBAZWxzZSBpZiAkdmFsdWUgPT0gXCJsZWZ0XCIge1xuICAgICAgICAgICAgJHJ0bC1ydWxlczogbWFwLW1lcmdlKCRydGwtcnVsZXMsIChwcm9wZXJ0eTogcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBAZWxzZSB7XG4gICAgICAgICAgICBAZXJyb3IgXCJhZy1nZXQtcnRsLXJ1bGVzIGRvZXNuJ3Qga25vdyBob3cgdG8gcHJvY2VzcyB0aGUgXFxcIiN7JHByb3BlcnR5fVxcXCIgcHJvcGVydHlcIlxuICAgICAgICB9XG4gICAgfVxuICAgIEByZXR1cm4gJHJ0bC1ydWxlcztcbn1cblxuQGZ1bmN0aW9uIGFnLWluc2VydC1jbGFzcy1hZnRlci10aGVtZSgkc2VsZWN0b3JzLCAkY2xhc3MpIHtcbiAgICAvLyB0aGlzIG5lZWRzIHRvIGRvIGEgMi1sZXZlbCBsb29wLCBiZWNhdXNlIHRoZSBzZWxlY3RvciBsaXN0IHJldHVybmVkIGJ5ICYgaW4gU2FzcyBpcyBhIDJEIGxpc3QsXG4gICAgLy8gZS5nLiAgLmZvbyAuYmFyLCAuZm9vIC5iYXogeyAuLi4gfSBpcyAoKFwiLmZvb1wiLCBcIi5iYXJcIiksIChcIi5mb29cIiwgXCIuYmF6XCIpKVxuICAgICRzZWxlY3Rvci1saXN0OiAoKTtcbiAgICBAZWFjaCAkc2VsZWN0b3IgaW4gJHNlbGVjdG9ycyB7XG4gICAgICAgICRyZXN1bHQ6ICgpO1xuICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICRpdGVtOiBudGgoJHNlbGVjdG9yLCAkaSk7XG4gICAgICAgICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJGl0ZW0pO1xuICAgICAgICAgICAgQGlmICRpID09IDEge1xuICAgICAgICAgICAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkY2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICRzZWxlY3Rvci1saXN0OiBhcHBlbmQoJHNlbGVjdG9yLWxpc3QsICRyZXN1bHQsIGNvbW1hKTtcbiAgICB9XG4gICAgQHJldHVybiAkc2VsZWN0b3ItbGlzdDtcbn1cblxuQGZ1bmN0aW9uIGFnLXN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiAnJykge1xuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xuICAgIEBpZiAkaW5kZXgge1xuICAgICAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKVxuICAgICAgICAgICAgICAgICsgJHJlcGxhY2VcbiAgICAgICAgICAgICAgICArIGFnLXN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXhcbiAgICAgICAgICAgICAgICArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XG4gICAgfVxuICAgIEByZXR1cm4gJHN0cmluZztcbn1cblxuQG1peGluIGFnLXNlbGVjdGFibGUoJHZhbHVlKSB7XG4gICAgQGlmICR2YWx1ZSA9PSBudWxsIHtcbiAgICAgICAgJHZhbHVlOiBub25lO1xuICAgIH1cblxuICAgIC1tb3otdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gICAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn0iLCIuYWctYm9keSAuYWctYm9keS12aWV3cG9ydCB7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufSIsIi5hZy1jaGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hZy1jaGFydC1jb21wb25lbnRzLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuLmFnLWNoYXJ0LXRpdGxlLWVkaXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hZy1jaGFydC10aXRsZS1lZGl0LmN1cnJlbnRseS1lZGl0aW5nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hZy1jaGFydC1jYW52YXMtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hZy1jaGFydHMtY2FudmFzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFnLWNoYXJ0LW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBAaW5jbHVkZSBhZy11bnRoZW1lZC1ydGwoKHJpZ2h0OiAyMHB4KSk7XG59XG5cbi5hZy1jaGFydC1kb2NrZWQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDA7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHRyYW5zaXRpb246IG1pbi13aWR0aCAwLjRzO1xufVxuXG4uYWctY2hhcnQtbWVudS1oaWRkZW4gfiAuYWctY2hhcnQtZG9ja2VkLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hZy1jaGFydC10YWJiZWQtbWVudSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWctY2hhcnQtdGFiYmVkLW1lbnUtaGVhZGVyIHtcbiAgICBmbGV4OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5hZy1jaGFydC10YWJiZWQtbWVudS1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hZy1jaGFydC10YWIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmFnLWNoYXJ0LXNldHRpbmdzIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5hZy1jaGFydC1zZXR0aW5ncy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWctY2hhcnQtc2V0dGluZ3MtbmF2LWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFnLWNoYXJ0LXNldHRpbmdzLWNhcmQtc2VsZWN0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMCAxMHB4OyAvLyBpbmNyZWFzZSBzaXplIG9mIGNsaWNrIGFyZWEgZm9yIGJldHRlciBVWFxufVxuXG4uYWctY2hhcnQtc2V0dGluZ3MtY2FyZC1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IC8vIGV4Y2VwdGlvbiB0byB0aGUgcnVsZSBvZiBubyB2aXN1YWwgc3R5bGVzIGluIGZ1bmN0aW9uYWwgc3R5bGVzaGVldCAtIHdpdGhvdXQgYSBiYWNrZ3JvdW5kIHRoaXMgZWxlbWVudCB3b3VsZCBiZSBpbnZpc2libGVcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi5hZy1ub3Qtc2VsZWN0ZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICAvLyBtYWtlIGV4cGFuZGVkIGNsaWNrIGFyZWFcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbn1cblxuLmFnLWNoYXJ0LXNldHRpbmdzLXByZXYsXG4uYWctY2hhcnQtc2V0dGluZ3MtbmV4dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IG5vbmU7XG59XG5cbi5hZy1jaGFydC1zZXR0aW5ncy1wcmV2LWJ1dHRvbixcbi5hZy1jaGFydC1zZXR0aW5ncy1uZXh0LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmFnLWNoYXJ0LXNldHRpbmdzLW1pbmktY2hhcnRzLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYWctY2hhcnQtc2V0dGluZ3MtbWluaS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAmLmFnLWFuaW1hdGluZyB7XG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4zcztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIH1cbn1cblxuLmFnLWNoYXJ0LW1pbmktdGh1bWJuYWlsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZy1jaGFydC1taW5pLXRodW1ibmFpbC1jYW52YXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWctY2hhcnQtZGF0YS13cmFwcGVyLFxuLmFnLWNoYXJ0LWZvcm1hdC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYWctY2hhcnQtZGF0YS1zZWN0aW9uLFxuLmFnLWNoYXJ0LWZvcm1hdC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmFnLWNoYXJ0cy1mb250LXBhbmVsLWNvbnRyb2xzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hZy1jaGFydC1lbXB0eS10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFnLWNoYXJ0IC5hZy1jaGFydC1tZW51IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYWctY2hhcnQtbWVudS1oaWRkZW46aG92ZXIgLmFnLWNoYXJ0LW1lbnUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmFnLWNoYXJ0LXNldHRpbmdzLW5hdi1iYXIge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbiIsIlxuLmFnLWRhdGUtdGltZS1saXN0LXBhZ2Uge1xufVxuXG4uYWctZGF0ZS10aW1lLWxpc3QtcGFnZS10aXRsZS1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZy1kYXRlLXRpbWUtbGlzdC1wYWdlLWVudHJpZXMge1xufVxuXG4uYWctZGF0ZS10aW1lLWxpc3QtcGFnZS1jb2x1bW4tbGFiZWxzLXJvdyxcbi5hZy1kYXRlLXRpbWUtbGlzdC1wYWdlLWVudHJpZXMtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWctZGF0ZS10aW1lLWxpc3QtcGFnZS1jb2x1bW4tbGFiZWwsXG4uYWctZGF0ZS10aW1lLWxpc3QtcGFnZS1lbnRyeSB7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5hZy1kYXRlLXRpbWUtbGlzdC1wYWdlLWVudHJ5IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCBcIi4vYWctdGhlbWUtYmFzZS1kZWZhdWx0LXBhcmFtc1wiO1xuQGltcG9ydCBcIi4vbGVnYWN5L2FnLXRoZW1lLWJhc2UtY3JlYXRlLXBhcmFtcy1mcm9tLWxlZ2FjeS12YXJzXCI7XG5AaW1wb3J0IFwiLi9sZWdhY3kvYWctdjIyLXRvLXYyMy1jb21wYXRpYmlsaXR5LW1vZGVcIjtcbkBpbXBvcnQgXCIuLi8uLi9taXhpbnMvYWctdGhlbWUtbWl4aW5zXCI7XG5AaW1wb3J0IFwiLi9wYXJ0cy9yZXNldFwiO1xuQGltcG9ydCBcIi4vcGFydHMvZ3JpZC1sYXlvdXRcIjtcbkBpbXBvcnQgXCIuL3BhcnRzL2dyaWQtYm9yZGVyc1wiO1xuQGltcG9ydCBcIi4vcGFydHMvbWVudVwiO1xuQGltcG9ydCBcIi4vcGFydHMvc2lkZWJhclwiO1xuQGltcG9ydCBcIi4vcGFydHMvZmlsdGVyLXRvb2wtcGFuZWxcIjtcbkBpbXBvcnQgXCIuL3BhcnRzL2NvbHVtbnMtdG9vbC1wYW5lbFwiO1xuQGltcG9ydCBcIi4vcGFydHMvd2lkZ2V0c1wiO1xuQGltcG9ydCBcIi4vcGFydHMvaGVhZGVyXCI7XG5AaW1wb3J0IFwiLi9wYXJ0cy9mb290ZXJcIjtcbkBpbXBvcnQgXCIuL3BhcnRzL2NvbHVtbi1kcm9wXCI7XG5AaW1wb3J0IFwiLi9wYXJ0cy9jaGFydHNcIjtcbkBpbXBvcnQgXCIuL3BhcnRzL2RhdGUtdGltZVwiO1xuXG4kYWctY29tcGF0aWJpbGl0eS1tb2RlOiBcInZhcmlhYmxlc1wiICFkZWZhdWx0O1xuXG5AbWl4aW4gYWctdGhlbWUtYmFzZSgkcGFyYW1zOiAoKSkge1xuICAgIEBpbmNsdWRlIGFnLWFsbG93LWNvbG9yLXBhcmFtLWFjY2Vzcy13aXRoLWFnLXBhcmFtKGZhbHNlKTtcbiAgICBAaW5jbHVkZSBhZy1pbmNsdWRlLXRoZW1lLW9uY2Utb25seSgpO1xuICAgICRwYXJhbXM6IGFnLXByb2Nlc3MtdGhlbWUtdmFyaWFibGVzKCRwYXJhbXMsICRhZy10aGVtZS1iYXNlLWRlZmF1bHQtcGFyYW1zKTtcblxuICAgIEBpbmNsdWRlIGFnLWljb25zLWZvbnQtZmFjZSgpO1xuICAgIEBpbmNsdWRlIGFnLWljb25zLXdlYmZvbnQoKTtcblxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBmb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogYWctcGFyYW0oZm9udC1mYW1pbHkpO1xuICAgIGZvbnQtc2l6ZTogYWctcGFyYW0oZm9udC1zaXplKTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIC5hZy1yb290LXdyYXBwZXIge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBhZy10aGVtZS1iYXNlLXBhcnQtcmVzZXQoKTtcbiAgICBAaW5jbHVkZSBhZy10aGVtZS1iYXNlLXBhcnQtd2lkZ2V0cygpO1xuICAgIEBpbmNsdWRlIGFnLXRoZW1lLWJhc2UtcGFydC1ncmlkLWxheW91dCgpO1xuICAgIEBpbmNsdWRlIGFnLXRoZW1lLWJhc2UtcGFydC1ncmlkLWJvcmRlcnMoKTtcbiAgICBAaW5jbHVkZSBhZy10aGVtZS1iYXNlLXBhcnQtbWVudSgpO1xuICAgIEBpbmNsdWRlIGFnLXRoZW1lLWJhc2UtcGFydC1zaWRlYmFyKCk7XG4gICAgQGluY2x1ZGUgYWctdGhlbWUtYmFzZS1wYXJ0LWZpbHRlci10b29sLXBhbmVsKCk7XG4gICAgQGluY2x1ZGUgYWctdGhlbWUtYmFzZS1wYXJ0LWNvbHVtbnMtdG9vbC1wYW5lbCgpO1xuICAgIEBpbmNsdWRlIGFnLXRoZW1lLWJhc2UtcGFydC1oZWFkZXIoKTtcbiAgICBAaW5jbHVkZSBhZy10aGVtZS1iYXNlLXBhcnQtZm9vdGVyKCk7XG4gICAgQGluY2x1ZGUgYWctdGhlbWUtYmFzZS1wYXJ0LWNvbHVtbi1kcm9wKCk7XG4gICAgQGluY2x1ZGUgYWctdGhlbWUtYmFzZS1wYXJ0LWNoYXJ0cygpO1xuICAgIEBpbmNsdWRlIGFnLXRoZW1lLWJhc2UtcGFydC1kYXRlLXRpbWUoKTtcblxuICAgIEBpZiBub3QgYWctcGFyYW0oc3VwcHJlc3MtbmF0aXZlLXdpZGdldC1zdHlsaW5nKSB7XG4gICAgICAgIEBpbmNsdWRlIGFnLW5hdGl2ZS1pbnB1dHMoKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgYWctYWxsb3ctY29sb3ItcGFyYW0tYWNjZXNzLXdpdGgtYWctcGFyYW0odHJ1ZSk7XG59IiwiXG4vLyBVdGlsaXRpZXMgdG8gcGFyc2UgcGFyYW1zIHN1cHBsaWVkIGFzIGEgbWFwLiBWYWx1ZXMgY2FuIGJlIGRlZmluZWQgaW4gdGVybXMgb2Zcbi8vIG90aGVyIHZhbHVlcywgd2l0aCBtb2RpZmljYXRpb25zLiBGb3IgZXhhbXBsZTpcbi8vIFxuLy8gQGluY2x1ZGUgYWctcmVnaXN0ZXItcGFyYW1zKChcbi8vICAgICBhOiBhZy1kZXJpdmVkKGIsICR0aW1lczogYywgJHBsdXM6IDIpLFxuLy8gICAgIGI6IDQsXG4vLyAgICAgYzogMTBcbi8vICkpO1xuLy8gQGRlYnVnIGFnLXBhcmFtKGEpOyAvLyBvdXRwdXRzIDQyXG5cbi8vIERlZmluZSBhIGRlcml2ZWQgcGFyYW1ldGVyLiBEZXJpdmVkIHZhbHVlcyBhcmUgbGF6aWx5IGV2YWx1YXRlZC4gVGhpcyBmdW5jdGlvbiBpc1xuLy8gc3VnYXIgZm9yIGRlZmluaW5nIGEgZGF0YSBzdHJ1Y3R1cmUgdG8gcmVjb3JkIHRoZSBkZXJpdmVkIHZhbHVlJ3MgcGFyYW1ldGVycy5cbkBmdW5jdGlvbiBhZy1kZXJpdmVkKFxuICAgICRyZWZlcmVuY2UtbmFtZSxcbiAgICAkdGltZXM6IG51bGwsXG4gICAgJGRpdmlkZTogbnVsbCxcbiAgICAkcGx1czogbnVsbCxcbiAgICAkbWludXM6IG51bGwsXG4gICAgJG9wYWNpdHk6IG51bGwsXG4gICAgJGxpZ2h0ZW46IG51bGwsXG4gICAgJGRhcmtlbjogbnVsbCwgXG4gICAgJG1peDogbnVsbCxcbiAgICAkc2VsZi1vdmVybGF5OiBudWxsXG4pIHtcbiAgICAkZGVyaXZlZDogKFxuICAgICAgICBcIi0tYWctaXMtZGVyaXZlZC12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInJlZmVyZW5jZS1uYW1lXCI6ICRyZWZlcmVuY2UtbmFtZVxuICAgICk7XG4gICAgQGlmICR0aW1lcyAhPSBudWxsIHtcbiAgICAgICAgJGRlcml2ZWQ6IG1hcC1tZXJnZSgkZGVyaXZlZCwgKFwidGltZXNcIjogJHRpbWVzKSk7XG4gICAgfVxuICAgIEBpZiAkZGl2aWRlICE9IG51bGwge1xuICAgICAgICAkZGVyaXZlZDogbWFwLW1lcmdlKCRkZXJpdmVkLCAoXCJkaXZpZGVcIjogJGRpdmlkZSkpO1xuICAgIH1cbiAgICBAaWYgJHBsdXMgIT0gbnVsbCB7XG4gICAgICAgICRkZXJpdmVkOiBtYXAtbWVyZ2UoJGRlcml2ZWQsIChcInBsdXNcIjogJHBsdXMpKTtcbiAgICB9XG4gICAgQGlmICRtaW51cyAhPSBudWxsIHtcbiAgICAgICAgJGRlcml2ZWQ6IG1hcC1tZXJnZSgkZGVyaXZlZCwgKFwibWludXNcIjogJG1pbnVzKSk7XG4gICAgfVxuICAgIEBpZiAkb3BhY2l0eSAhPSBudWxsIHtcbiAgICAgICAgJGRlcml2ZWQ6IG1hcC1tZXJnZSgkZGVyaXZlZCwgKFwib3BhY2l0eVwiOiAkb3BhY2l0eSkpO1xuICAgIH1cbiAgICBAaWYgJGxpZ2h0ZW4gIT0gbnVsbCB7XG4gICAgICAgICRkZXJpdmVkOiBtYXAtbWVyZ2UoJGRlcml2ZWQsIChcImxpZ2h0ZW5cIjogJGxpZ2h0ZW4pKTtcbiAgICB9XG4gICAgQGlmICRkYXJrZW4gIT0gbnVsbCB7XG4gICAgICAgICRkZXJpdmVkOiBtYXAtbWVyZ2UoJGRlcml2ZWQsIChcImRhcmtlblwiOiAkZGFya2VuKSk7XG4gICAgfVxuICAgIEBpZiAkbWl4ICE9IG51bGwge1xuICAgICAgICAkZGVyaXZlZDogbWFwLW1lcmdlKCRkZXJpdmVkLCAoXCJtaXhcIjogJG1peCkpO1xuICAgIH1cbiAgICBAaWYgJHNlbGYtb3ZlcmxheSAhPSBudWxsIHtcbiAgICAgICAgJGRlcml2ZWQ6IG1hcC1tZXJnZSgkZGVyaXZlZCwgKFwic2VsZi1vdmVybGF5XCI6ICRzZWxmLW92ZXJsYXkpKTtcbiAgICB9XG4gICAgQHJldHVybiAkZGVyaXZlZDtcbn1cblxuLy8gVXNlIGEgcGFyYW1ldGVyIGluIFNDU1MsIGUuZy4gYGNvbG9yOiBhZy1wYXJhbShmb3JlZ3JvdW5kLWNvbG9yKWBcbi8vIE5vdGUsIGl0IGlzIG5vdCBwb3NzaWJsZSB0byB1c2UgdGhpcyBmb3IgY29sb3IgcGFyYW1zLCB1c2UgdGhlIGFnLWNvbG9yLXByb3BlcnR5IG1peGluIGluc3RlYWRcbkBmdW5jdGlvbiBhZy1wYXJhbSgkbmFtZSwgJGNhbGxlcjogbnVsbCkge1xuICAgIEBpZiAkLWFnLWFsbG93LWNvbG9yLXBhcmFtLWFjY2Vzcy13aXRoLWFnLXBhcmFtICE9IHRydWUgYW5kIHN0ci1pbmRleCgkbmFtZSwgXCItY29sb3JcIikgYW5kICRjYWxsZXIgIT0gXCJwZXJtaXR0ZWQgaW50ZXJuYWwgX2FnLXRoZW1lLXBhcmFtcy5zY3NzIGFjY2Vzc1wiIHtcbiAgICAgICAgQGVycm9yIFwiSWxsZWdhbCBjYWxsIHRvIGFnLXBhcmFtKCN7JG5hbWV9KSAtIGFsbCBjb2xvdXIgcGFyYW1zIG11c3QgYmUgYWNjZXNzZWQgdGhyb3VnaCB0aGUgYWctY29sb3ItcHJvcGVydHkgbWl4aW4uXCI7XG4gICAgfVxuICAgICRyZXNvbHZlZDogLWFnLXBhcmFtLXVuY2hlY2tlZCgkbmFtZSk7XG4gICAgQGlmIHN0ci1pbmRleChpbnNwZWN0KCRyZXNvbHZlZCksIFwiYWctZGVyaXZlZChcIikgIT0gbnVsbCB7XG4gICAgICAgIEBlcnJvciBcIiN7JG5hbWV9IHBhcmFtIGNvbnRhaW5zIGEgYWctZGVyaXZlZCgpIGFzIGEgQ1NTIGZ1bmN0aW9uIGNhbGwgZXhwcmVzc2lvbi4gVGhpcyBtZWFucyB0aGF0IHlvdSBoYXZlIHRyaWVkIHRvIHVzZSBhZy1kZXJpdmVkKCkgYmVmb3JlIHRoZSBmdW5jdGlvbiBpcyBkZWZpbmVkIC0geW91IG5lZWQgdG8gaW5jbHVkZSB0aGUgZmlsZSB0aGF0IGRlZmluZXMgaXQuXCI7XG4gICAgfVxuICAgIEBpZiB0eXBlLW9mKCRyZXNvbHZlZCkgPT0gbWFwIHtcbiAgICAgICAgQGVycm9yIFwiYWctcGFyYW0oI3skbmFtZX0pIHJlc29sdmVkIHRvIGEgbWFwLCB3aGljaCBpcyBub3QgdmFsaWQgQ1NTOiAje2luc3BlY3QoJHJlc29sdmVkKX1cIjtcbiAgICB9XG4gICAgQGVhY2ggJHBhcnQgaW4gJHJlc29sdmVkIHtcbiAgICAgICAgQGlmIHR5cGUtb2YoJHBhcnQpID09IG1hcCB7XG4gICAgICAgICAgICBAZXJyb3IgXCJhZy1wYXJhbSgjeyRuYW1lfSkgcmVzb2x2ZWQgdG8gYSBsaXN0IGNvbnRhaW5pbmcgYSBtYXAsIHdoaWNoIGlzIG5vdCB2YWxpZCBDU1M6ICN7c3RyLXNsaWNlKGluc3BlY3QoJHJlc29sdmVkKSwgMCwgMTAwMCl9XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQHJldHVybiAkcmVzb2x2ZWQ7XG59XG5cbi8vIFJldHVybiB0cnVlIGlmIGEgcGFyYW0gaGFzIGEgdmFsdWUgb3RoZXIgdGhhbiBudWxsIG9yIGZhbHNlXG5AZnVuY3Rpb24gYWctcGFyYW0taXMtc2V0KCRuYW1lKSB7XG4gICAgJHZhbHVlOiAtYWctcGFyYW0tdW5jaGVja2VkKCRuYW1lKTtcbiAgICBAcmV0dXJuICR2YWx1ZSAhPSBudWxsIGFuZCAkdmFsdWUgIT0gZmFsc2U7XG59XG5cbi8vIFJldHVybiB0cnVlIGlmIHR3byBwYXJhbXMgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzXG5AZnVuY3Rpb24gYWctcGFyYW1zLWFyZS1kaWZmZXJlbnQoJG5hbWUtYSwgJG5hbWUtYikge1xuICAgIEByZXR1cm4gLWFnLXBhcmFtLXVuY2hlY2tlZCgkbmFtZS1hKSAhPSAtYWctcGFyYW0tdW5jaGVja2VkKCRuYW1lLWIpO1xufVxuXG5cbi8vIEEgbWl4aW4gdG8gYXBwbHkgYSBjb2xvciB0byBhbiBlbGVtZW50LiBUaGlzIHNldHMgdGhlIHZhbHVlIG9mIGEgQ1NTIHByb3BlcnR5IHVzaW5nIGFcbi8vIHRoZW1lIHBhcmFtZXRlciwgYW5kIGFsc28gZW1pdHMgQ1NTIHRoYXQgYWxsb3dzIHRoZSB2YWx1ZSB0byBiZSBvdmVycmlkZGVuIGF0IHJ1bnRpbWVcbi8vIHVzaW5nIENTUyB2YXJpYWJsZXMuIElmIHRoZSBtaXhpbiBpcyBjYWxsZWQgbGlrZSB0aGlzOlxuLy9cbi8vICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgaGVhZGVyLWJhY2tncm91bmQtY29sb3IpXG4vL1xuLy8gLi4uIGFuZCB0aGUgaGVhZGVyLWJhY2tncm91bmQtY29sb3IgcGFyYW1ldGVyIGlzIHNldCB0byBgcmVkYCB0aGVuIHRoZSBlbWl0dGVkIENTUyB3aWxsXG4vLyBiZSBzb21ldGhpbmcgbGlrZTpcbi8vXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWctaGVhZGVyLWJhY2tncm91bmQtY29sb3IsIHJlZCk7XG4vL1xuLy8gVGhlIG9wdGlvbmFsICRpbXBvcnRhbnQgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gYWRkIGEgQ1NTICFpbXBvcnRhbnQgZGlyZWN0aXZlXG5AbWl4aW4gYWctY29sb3ItcHJvcGVydHkoJHByb3BlcnR5LCAkcGFyYW0sICRpbXBvcnRhbnQ6IGZhbHNlKSB7XG4gICAgJHZhbHVlOiBhZy1wYXJhbSgkcGFyYW0sICRjYWxsZXI6IFwicGVybWl0dGVkIGludGVybmFsIF9hZy10aGVtZS1wYXJhbXMuc2NzcyBhY2Nlc3NcIik7XG4gICAgJGltcG9ydGFudDogaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XG5cbiAgICBAaWYgJHZhbHVlICE9IG51bGwge1xuICAgICAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZSAkaW1wb3J0YW50O1xuICAgIH1cbiAgICBAaWYgbm90IGFnLXBhcmFtLWlzLXNldChzdXBwcmVzcy1jc3MtdmFyLW92ZXJyaWRlcykge1xuICAgICAgICAkdmFsdWUtYXMtY3NzLXZhcjogLWFnLXBhcmFtLWFzLWNzcy12YXIoJHBhcmFtKTtcbiAgICAgICAgQGlmICR2YWx1ZSAhPSAkdmFsdWUtYXMtY3NzLXZhciB7XG4gICAgICAgICAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZS1hcy1jc3MtdmFyICRpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuJC1hZy1hbGxvdy1jb2xvci1wYXJhbS1hY2Nlc3Mtd2l0aC1hZy1wYXJhbTogdHJ1ZTtcbkBtaXhpbiBhZy1hbGxvdy1jb2xvci1wYXJhbS1hY2Nlc3Mtd2l0aC1hZy1wYXJhbSgkYWxsb3cpIHtcbiAgICAkLWFnLWFsbG93LWNvbG9yLXBhcmFtLWFjY2Vzcy13aXRoLWFnLXBhcmFtOiAkYWxsb3cgIWdsb2JhbDtcbn1cblxuLy8gTWVyZ2UgcGFyYW1zIHN1cHBsaWVkIHRvIGEgdGhlbWUgd2l0aCB0aGUgZGVmYXVsdHMsIG9wdGlvbmFsbHkgdmFsaWRhdGUsIGFuZCByZWdpc3RlclxuLy8gdGhlIHJlc3VsdGluZyBtYXAgZ2xvYmFsbHkgZm9yIHVzZSB3aXRoIGFnLXBhcmFtKClcbi8vXG4vLyAkcGFyYW1zOiBwYXJhbXMgc3VwcGxpZWQgYnkgdGhlIGRlcml2ZWQgdGhlbWVcbi8vICRkZWZhdWx0czogdmFsdWVzIGZvciBwYXJhbXMgbm90IGluICRwYXJhbXNcbkBmdW5jdGlvbiBhZy1wcm9jZXNzLXRoZW1lLXZhcmlhYmxlcygkcGFyYW1zLCAkZGVmYXVsdHMpIHtcbiAgICAkcGFyYW1zOiAtYWctcmVxdWlyZS10eXBlKCRwYXJhbXMsIG1hcCwgXCIkcGFyYW1zIGFyZ3VtZW50IHRvIGFnLXByb2Nlc3MtdGhlbWUtdmFyaWFibGVzXCIpO1xuICAgIC8vIERlcml2ZWQgdGhlbWVzIGNhbiBhZGQgcGFyYW1zLCBhbmQgdGhvc2UgbmV3IHBhcmFtcyB3b3VsZCB0cmlnZ2VyIHZhbGlkYXRpb24gZXJyb3JzIHdoZW5cbiAgICAvLyBwYXNzZWQgdG8gdGhlIGJhc2UgdGhlbWUsIHNvIGRvbid0IHJlLXZhbGlkYXRlIHBhcmFtcyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZFxuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJHBhcmFtcywgXCItLWFnLWFscmVhZHktdmFsaWRhdGVkXCIpIHtcbiAgICAgICAgQGVhY2ggJGtleSBpbiBtYXAta2V5cygkcGFyYW1zKSB7XG4gICAgICAgICAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRkZWZhdWx0cywgJGtleSkgYW5kIHN0ci1pbmRleCgka2V5LCBcIi0taW50ZXJuYWwtXCIpICE9IDEge1xuICAgICAgICAgICAgICAgIEB3YXJuIFwiVW5yZWNvZ25pc2VkIHBhcmFtIFxcXCIjeyRrZXl9XFxcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEBpZiBtYXAtZ2V0KCRwYXJhbXMsIFwiaWNvbnMtZm9udC1jb2Rlc1wiKSBhbmQgbWFwLWdldCgkZGVmYXVsdHMsIFwiaWNvbnMtZm9udC1jb2Rlc1wiKSB7XG4gICAgICAgICRtZXJnZWQtY29kZXM6IG1hcC1tZXJnZShtYXAtZ2V0KCRkZWZhdWx0cywgXCJpY29ucy1mb250LWNvZGVzXCIpLCBtYXAtZ2V0KCRwYXJhbXMsIFwiaWNvbnMtZm9udC1jb2Rlc1wiKSk7XG4gICAgICAgICRwYXJhbXM6IG1hcC1tZXJnZSgkcGFyYW1zLCAoXCJpY29ucy1mb250LWNvZGVzXCI6ICRtZXJnZWQtY29kZXMpKTtcbiAgICB9XG4gICAgJHBhcmFtczogbWFwLW1lcmdlKCRkZWZhdWx0cywgJHBhcmFtcyk7XG4gICAgJHBhcmFtczogbWFwLW1lcmdlKCRwYXJhbXMsIChcIi0tYWctYWxyZWFkeS12YWxpZGF0ZWRcIjogdHJ1ZSkpO1xuICAgICQtYWctcGFyYW1zOiAkcGFyYW1zICFnbG9iYWw7XG4gICAgQHJldHVybiAkcGFyYW1zO1xufVxuXG4vLyBnbG9iYWwgbWFwIG9mIHBhcmFtcyB1c2VkIGJ5IGFnLXBhcmFtKClcbiQtYWctcGFyYW1zOiBudWxsICFkZWZhdWx0O1xuXG4vLyBSZWdpc3RlciBhIHBhcmFtcyBtYXAgZ2xvYmFsbHkgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBieSBhZy1wYXJhbSgkbmFtZSlcbi8vIE5PVEU6IEN1c3RvbSB0aGVtZXMgc2hvdWxkIE5PVCB1c2UgdGhpcywgdXNlIGFnLXByb2Nlc3MtdGhlbWUtdmFyaWFibGVzKCkgaW5zdGVhZFxuQG1peGluIGFnLXJlZ2lzdGVyLXBhcmFtcygkcGFyYW1zKSB7XG4gICAgJHBhcmFtczogLWFnLXJlcXVpcmUtdHlwZSgkcGFyYW1zLCBcIm1hcFwiLCBcIiRwYXJhbXMgYXJndW1lbnRcIik7XG4gICAgJC1hZy1wYXJhbXM6ICRwYXJhbXMgIWdsb2JhbDtcbn1cblxuLy9cbi8vIFBSSVZBVEUgSU1QTEVNRU5UQVRJT04gRlVOQ1RJT05TXG4vL1xuXG4vLyBSZXR1cm4gYSBwYXJhbWV0ZXIgdmFsdWUgYXMgYSBDU1MgdmFyaWFibGUgZGVjbGFyYXRpb25cbkBmdW5jdGlvbiAtYWctcGFyYW0tYXMtY3NzLXZhcigkbmFtZSkge1xuICAgICR2YWx1ZTogbWFwLWdldCgkLWFnLXBhcmFtcywgJG5hbWUpO1xuICAgIEBpZiAtaXMtYWctZGVyaXZlZCgkdmFsdWUpIHtcbiAgICAgICAgJGhhcy1tb2RpZmljYXRvbnM6IGxlbmd0aCgkdmFsdWUpID4gMjtcbiAgICAgICAgQGlmICRoYXMtbW9kaWZpY2F0b25zIHtcbiAgICAgICAgICAgICR2YWx1ZTogYWctcGFyYW0oJG5hbWUsICRjYWxsZXI6IFwicGVybWl0dGVkIGludGVybmFsIF9hZy10aGVtZS1wYXJhbXMuc2NzcyBhY2Nlc3NcIik7XG4gICAgICAgIH1cbiAgICAgICAgQGVsc2Uge1xuICAgICAgICAgICAgJHJlZmVyZW5jZS1uYW1lOiBtYXAtZ2V0KCR2YWx1ZSwgXCJyZWZlcmVuY2UtbmFtZVwiKTtcbiAgICAgICAgICAgICR2YWx1ZTogLWFnLXBhcmFtLWFzLWNzcy12YXIoJHJlZmVyZW5jZS1uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkdmFsdWUgPT0gbnVsbCB7XG4gICAgICAgIEByZXR1cm4gdmFyKC0tYWctI3skbmFtZX0pO1xuICAgIH1cblxuICAgIEByZXR1cm4gdmFyKC0tYWctI3skbmFtZX0sICN7JHZhbHVlfSk7XG59XG5cbi8vIEdldCBhIHBhcmFtZXRlciwgd2l0aCBubyBjaGVja3Mgb3RoZXIgdGhhbiB0aGF0IHRoZSBwYXJhbWV0ZXIgZXhpc3RzXG5AZnVuY3Rpb24gLWFnLXBhcmFtLXVuY2hlY2tlZCgkbmFtZSkge1xuICAgIEBpZiAkLWFnLXBhcmFtcyA9PSBudWxsIHtcbiAgICAgICAgQGVycm9yIFwiYWctcGFyYW0oKSBjYWxsZWQgYmVmb3JlIGFnLXJlZ2lzdGVyLXBhcmFtc1wiO1xuICAgIH1cbiAgICBAaWYgc3RyLWluZGV4KCRuYW1lLCBcIi0taW50ZXJuYWwtXCIpID09IDEge1xuICAgICAgICAvLyBpbnRlcm5hbCB2YXJzIGFyZSByZXR1cm5lZCB3aXRob3V0IGFnLWRlcml2ZWQgcmVzb2x1dGlvbiBvciB2YWxpZGF0aW9uIHRoYXQgdGhlIHZhciBleGlzdHNcbiAgICAgICAgQHJldHVybiBtYXAtZ2V0KCQtYWctcGFyYW1zLCAkbmFtZSk7XG4gICAgfVxuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJC1hZy1wYXJhbXMsICRuYW1lKSB7XG4gICAgICAgIEBlcnJvciBcImFnLXBhcmFtKCN7JG5hbWV9KTogbm8gc3VjaCBwYXJhbWV0ZXJcIjtcbiAgICB9XG4gICAgQHJldHVybiAtYWctcmVzb2x2ZS1wYXJhbS1uYW1lKCQtYWctcGFyYW1zLCAkbmFtZSk7XG59XG5cbi8vIFJldHVybiB0cnVlIGlmIGEgdmFsdWUgaXMgYSByZWNvcmQgcmV0dXJuZWQgYnkgYWctZGVyaXZlZCgpXG5AZnVuY3Rpb24gLWlzLWFnLWRlcml2ZWQoJHZhbHVlKSB7XG4gICAgQHJldHVybiB0eXBlLW9mKCR2YWx1ZSkgPT0gbWFwIGFuZCBtYXAtZ2V0KCR2YWx1ZSwgXCItLWFnLWlzLWRlcml2ZWQtdmFsdWVcIikgPT0gdHJ1ZTtcbn1cblxuQGZ1bmN0aW9uIC1hZy1yZXNvbHZlLXBhcmFtLW5hbWUoJHBhcmFtcywgJG5hbWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJHBhcmFtcywgJG5hbWUpO1xuICAgIEByZXR1cm4gLWFnLXJlc29sdmUtcGFyYW0tdmFsdWUoJHBhcmFtcywgJHZhbHVlLCAkbmFtZSk7XG59XG5cbkBmdW5jdGlvbiAtYWctcmVzb2x2ZS1wYXJhbS12YWx1ZSgkcGFyYW1zLCAkaW5wdXQtdmFsdWUsICRjb250ZXh0LW5hbWUpIHtcbiAgICBAaWYgdHlwZS1vZigkaW5wdXQtdmFsdWUpID09IGxpc3Qge1xuICAgICAgICAkcmVzb2x2ZWQ6ICRpbnB1dC12YWx1ZTtcbiAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGlucHV0LXZhbHVlKSB7XG4gICAgICAgICAgICAkcmVzb2x2ZWQ6IHNldC1udGgoJHJlc29sdmVkLCAkaSwgLWFnLXJlc29sdmUtcGFyYW0tdmFsdWUoJHBhcmFtcywgbnRoKCRyZXNvbHZlZCwgJGkpLCAkY29udGV4dC1uYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgQHJldHVybiAkcmVzb2x2ZWQ7XG4gICAgfVxuICAgIEBpZiBub3QgLWlzLWFnLWRlcml2ZWQoJGlucHV0LXZhbHVlKSB7XG4gICAgICAgIEByZXR1cm4gJGlucHV0LXZhbHVlO1xuICAgIH1cbiAgICAkZGVyaXZlZDogJGlucHV0LXZhbHVlO1xuICAgICRyZWZlcmVuY2UtbmFtZTogbWFwLWdldCgkZGVyaXZlZCwgXCJyZWZlcmVuY2UtbmFtZVwiKTtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRwYXJhbXMsICRyZWZlcmVuY2UtbmFtZSkge1xuICAgICAgICBAZXJyb3IgXCJhZy1kZXJpdmVkOiBubyBzdWNoIHBhcmFtZXRlciBcXFwiI3skcmVmZXJlbmNlLW5hbWV9XFxcIlwiO1xuICAgIH1cbiAgICAkcmVzb2x2ZWQ6IG1hcC1nZXQoJHBhcmFtcywgJHJlZmVyZW5jZS1uYW1lKTtcbiAgICAkcmVzb2x2ZWQ6IC1hZy1yZXNvbHZlLXBhcmFtLXZhbHVlKCRwYXJhbXMsICRyZXNvbHZlZCwgJHJlZmVyZW5jZS1uYW1lKTtcblxuICAgICRyZXNvbHZlZDogLWFnLWFwcGx5LWRlcml2ZWQtb3BlcmF0b3IoJHBhcmFtcywgJHJlc29sdmVkLCAkZGVyaXZlZCwgXCJ0aW1lc1wiLCAkY29udGV4dC1uYW1lKTtcbiAgICAkcmVzb2x2ZWQ6IC1hZy1hcHBseS1kZXJpdmVkLW9wZXJhdG9yKCRwYXJhbXMsICRyZXNvbHZlZCwgJGRlcml2ZWQsIFwiZGl2aWRlXCIsICRjb250ZXh0LW5hbWUpO1xuICAgICRyZXNvbHZlZDogLWFnLWFwcGx5LWRlcml2ZWQtb3BlcmF0b3IoJHBhcmFtcywgJHJlc29sdmVkLCAkZGVyaXZlZCwgXCJwbHVzXCIsICRjb250ZXh0LW5hbWUpO1xuICAgICRyZXNvbHZlZDogLWFnLWFwcGx5LWRlcml2ZWQtb3BlcmF0b3IoJHBhcmFtcywgJHJlc29sdmVkLCAkZGVyaXZlZCwgXCJtaW51c1wiLCAkY29udGV4dC1uYW1lKTtcbiAgICAkcmVzb2x2ZWQ6IC1hZy1hcHBseS1kZXJpdmVkLW9wZXJhdG9yKCRwYXJhbXMsICRyZXNvbHZlZCwgJGRlcml2ZWQsIFwib3BhY2l0eVwiLCAkY29udGV4dC1uYW1lKTtcbiAgICAkcmVzb2x2ZWQ6IC1hZy1hcHBseS1kZXJpdmVkLW9wZXJhdG9yKCRwYXJhbXMsICRyZXNvbHZlZCwgJGRlcml2ZWQsIFwibWl4XCIsICRjb250ZXh0LW5hbWUpO1xuICAgICRyZXNvbHZlZDogLWFnLWFwcGx5LWRlcml2ZWQtb3BlcmF0b3IoJHBhcmFtcywgJHJlc29sdmVkLCAkZGVyaXZlZCwgXCJsaWdodGVuXCIsICRjb250ZXh0LW5hbWUpO1xuICAgICRyZXNvbHZlZDogLWFnLWFwcGx5LWRlcml2ZWQtb3BlcmF0b3IoJHBhcmFtcywgJHJlc29sdmVkLCAkZGVyaXZlZCwgXCJkYXJrZW5cIiwgJGNvbnRleHQtbmFtZSk7XG4gICAgJHJlc29sdmVkOiAtYWctYXBwbHktZGVyaXZlZC1vcGVyYXRvcigkcGFyYW1zLCAkcmVzb2x2ZWQsICRkZXJpdmVkLCBcInNlbGYtb3ZlcmxheVwiLCAkY29udGV4dC1uYW1lKTtcblxuICAgIEByZXR1cm4gLWFnLXJlc29sdmUtcGFyYW0tdmFsdWUoJHBhcmFtcywgJHJlc29sdmVkLCAkcmVmZXJlbmNlLW5hbWUpO1xufVxuXG5AZnVuY3Rpb24gLWFnLWFwcGx5LWRlcml2ZWQtb3BlcmF0b3IoJHBhcmFtcywgJGxocywgJGRlcml2ZWQsICRvcGVyYXRvciwgJGNvbnRleHQtbmFtZSkge1xuICAgIEBpZiAkbGhzID09IG51bGwge1xuICAgICAgICBAcmV0dXJuICRsaHM7XG4gICAgfVxuICAgICRyaHM6IG1hcC1nZXQoJGRlcml2ZWQsICRvcGVyYXRvcik7XG4gICAgQGlmICRyaHMgPT0gbnVsbCB7XG4gICAgICAgIEByZXR1cm4gJGxocztcbiAgICB9XG4gICAgQGlmIC1hZy1pcy1jc3MtdmFyLXRva2VuKCRsaHMpIHtcbiAgICAgICAgJHJlZmVyZW5jZS1uYW1lOiBtYXAtZ2V0KCRkZXJpdmVkLCBcInJlZmVyZW5jZS1uYW1lXCIpO1xuICAgICAgICBAd2FybiBcIlByb2JsZW0gd2hpbGUgY2FsY3VsYXRpbmcgdGhlbWUgcGFyYW1ldGVyIGAjeyRjb250ZXh0LW5hbWV9OiAjey1hZy1pbnNwZWN0LWRlcml2ZWQtdmFsdWUoJGRlcml2ZWQpfWAuIFRoaXMgcnVsZSBhdHRlbXB0cyB0byBtb2RpZnkgdGhlIGNvbG9yIG9mIGAjeyRyZWZlcmVuY2UtbmFtZX1gIHVzaW5nICQjeyRvcGVyYXRvcn0sIGJ1dCAoI3skcmVmZXJlbmNlLW5hbWV9OiAjeyRsaHN9KSBpcyBhIENTUyB2YXJpYWJsZSBhbmQgY2FuJ3QgYmUgbW9kaWZpZWQgYXQgY29tcGlsZSB0aW1lLiBFaXRoZXIgc2V0IGAjeyRyZWZlcmVuY2UtbmFtZX1gIHRvIGEgQ1NTIGNvbG9yIHZhbHVlIChlLmcuICNmZmZmZmYpIG9yIHByb3ZpZGUgYSB2YWx1ZSBmb3IgYCN7JGNvbnRleHQtbmFtZX1gIHRoYXQgZG9lcyBub3QgdXNlICQjeyRvcGVyYXRvcn1cIjtcbiAgICAgICAgQHJldHVybiBudWxsO1xuICAgIH1cbiAgICBAaWYgdHlwZS1vZigkcmhzKSA9PSBzdHJpbmcge1xuICAgICAgICAkcmhzOiAtYWctcmVzb2x2ZS1wYXJhbS1uYW1lKCRwYXJhbXMsICRyaHMpO1xuICAgIH1cbiAgICAkb3BlcmF0b3ItZnVuY3Rpb246IFwiLWFnLW9wZXJhdG9yLWZ1bmN0aW9uLSN7JG9wZXJhdG9yfVwiO1xuICAgIEBpZiBub3QgZnVuY3Rpb24tZXhpc3RzKCRvcGVyYXRvci1mdW5jdGlvbikge1xuICAgICAgICBAZXJyb3IgXCJObyBzdWNoIGZ1bmN0aW9uICN7JG9wZXJhdG9yLWZ1bmN0aW9ufVwiO1xuICAgIH1cbiAgICBAcmV0dXJuIGNhbGwoZ2V0LWZ1bmN0aW9uKCRvcGVyYXRvci1mdW5jdGlvbiksICRwYXJhbXMsICRsaHMsICRyaHMpO1xufVxuXG4vLyByZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gYWctZGVyaXZlZCB2YWx1ZSBmb3IgZGVidWdnaW5nXG5AZnVuY3Rpb24gLWFnLWluc3BlY3QtZGVyaXZlZC12YWx1ZSgkZGVyaXZlZCkge1xuICAgIEByZXR1cm4gXCJhZy1kZXJpdmVkKFwiXG4gICAgICAgICsgbWFwLWdldCgkZGVyaXZlZCwgXCJyZWZlcmVuY2UtbmFtZVwiKVxuICAgICAgICArIGlmKG1hcC1nZXQoJGRlcml2ZWQsIFwidGltZXNcIiksIFwiLCAkdGltZXM6ICN7bWFwLWdldCgkZGVyaXZlZCwgXCJ0aW1lc1wiKX1cIiwgXCJcIilcbiAgICAgICAgKyBpZihtYXAtZ2V0KCRkZXJpdmVkLCBcImRpdmlkZVwiKSwgXCIsICRkaXZpZGU6ICN7bWFwLWdldCgkZGVyaXZlZCwgXCJkaXZpZGVcIil9XCIsIFwiXCIpXG4gICAgICAgICsgaWYobWFwLWdldCgkZGVyaXZlZCwgXCJwbHVzXCIpLCBcIiwgJHBsdXM6ICN7bWFwLWdldCgkZGVyaXZlZCwgXCJwbHVzXCIpfVwiLCBcIlwiKVxuICAgICAgICArIGlmKG1hcC1nZXQoJGRlcml2ZWQsIFwibWludXNcIiksIFwiLCAkbWludXM6ICN7bWFwLWdldCgkZGVyaXZlZCwgXCJtaW51c1wiKX1cIiwgXCJcIilcbiAgICAgICAgKyBpZihtYXAtZ2V0KCRkZXJpdmVkLCBcIm9wYWNpdHlcIiksIFwiLCAkb3BhY2l0eTogI3ttYXAtZ2V0KCRkZXJpdmVkLCBcIm9wYWNpdHlcIil9XCIsIFwiXCIpXG4gICAgICAgICsgaWYobWFwLWdldCgkZGVyaXZlZCwgXCJtaXhcIiksIFwiLCAkbWl4OiAje21hcC1nZXQoJGRlcml2ZWQsIFwibWl4XCIpfVwiLCBcIlwiKVxuICAgICAgICArIGlmKG1hcC1nZXQoJGRlcml2ZWQsIFwibGlnaHRlblwiKSwgXCIsICRsaWdodGVuOiAje21hcC1nZXQoJGRlcml2ZWQsIFwibGlnaHRlblwiKX1cIiwgXCJcIilcbiAgICAgICAgKyBpZihtYXAtZ2V0KCRkZXJpdmVkLCBcImRhcmtlblwiKSwgXCIsICRkYXJrZW46ICN7bWFwLWdldCgkZGVyaXZlZCwgXCJkYXJrZW5cIil9XCIsIFwiXCIpXG4gICAgICAgICsgaWYobWFwLWdldCgkZGVyaXZlZCwgXCJzZWxmLW92ZXJsYXlcIiksIFwiLCAkc2VsZi1vdmVybGF5OiAje21hcC1nZXQoJGRlcml2ZWQsIFwic2VsZi1vdmVybGF5XCIpfVwiLCBcIlwiKVxuICAgICAgICArIFwiKVwiO1xufVxuXG5AZnVuY3Rpb24gLWFnLWlzLWNzcy12YXItdG9rZW4oJHZhbHVlKSB7XG4gICAgQHJldHVybiB0eXBlLW9mKCR2YWx1ZSkgPT0gc3RyaW5nIGFuZCBzdHItaW5kZXgoJHZhbHVlLCBcInZhcihcIikgIT0gbnVsbFxufVxuXG5AZnVuY3Rpb24gLWFnLXJlcXVpcmUtdHlwZSgkdmFsdWUsICRleHBlY3RlZCwgJGNvbnRleHQpIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICRleHBlY3RlZCBvciAoJGV4cGVjdGVkID09IFwibWFwXCIgYW5kICR2YWx1ZSA9PSAoKSkge1xuICAgICAgICBAcmV0dXJuICR2YWx1ZTtcbiAgICB9XG4gICAgQGVycm9yIFwiRXhwZWN0ZWQgI3skY29udGV4dH0gdG8gYmUgYSAjeyRleHBlY3RlZH0gYnV0IGdvdCBhICN7dHlwZS1vZigkdmFsdWUpfSBpbnN0ZWFkICgje2luc3BlY3QoJHZhbHVlKX0pXCI7XG59XG5cbkBmdW5jdGlvbiAtYWctb3BlcmF0b3ItZnVuY3Rpb24tdGltZXMoJHBhcmFtcywgJGxocywgJHJocykge1xuICAgICRsaHM6IC1hZy1yZXF1aXJlLXR5cGUoJGxocywgXCJudW1iZXJcIiwgXCJ2YWx1ZSBiZWZvcmUgJHRpbWVzXCIpO1xuICAgICRyaHM6IC1hZy1yZXF1aXJlLXR5cGUoJHJocywgXCJudW1iZXJcIiwgXCJhcmd1bWVudCB0byAkdGltZXNcIik7XG4gICAgQHJldHVybiAkbGhzICogJHJocztcbn1cblxuQGZ1bmN0aW9uIC1hZy1vcGVyYXRvci1mdW5jdGlvbi1kaXZpZGUoJHBhcmFtcywgJGxocywgJHJocykge1xuICAgICRsaHM6IC1hZy1yZXF1aXJlLXR5cGUoJGxocywgXCJudW1iZXJcIiwgXCJ2YWx1ZSBiZWZvcmUgJGRpdmlkZVwiKTtcbiAgICAkcmhzOiAtYWctcmVxdWlyZS10eXBlKCRyaHMsIFwibnVtYmVyXCIsIFwiYXJndW1lbnQgdG8gJGRpdmlkZVwiKTtcbiAgICBAcmV0dXJuICRsaHMgLyAkcmhzO1xufVxuXG5AZnVuY3Rpb24gLWFnLW9wZXJhdG9yLWZ1bmN0aW9uLXBsdXMoJHBhcmFtcywgJGxocywgJHJocykge1xuICAgICRsaHM6IC1hZy1yZXF1aXJlLXR5cGUoJGxocywgXCJudW1iZXJcIiwgXCJ2YWx1ZSBiZWZvcmUgJHBsdXNcIik7XG4gICAgJHJoczogLWFnLXJlcXVpcmUtdHlwZSgkcmhzLCBcIm51bWJlclwiLCBcImFyZ3VtZW50IHRvICRwbHVzXCIpO1xuICAgIEByZXR1cm4gJGxocyArICRyaHM7XG59XG5cbkBmdW5jdGlvbiAtYWctb3BlcmF0b3ItZnVuY3Rpb24tbWludXMoJHBhcmFtcywgJGxocywgJHJocykge1xuICAgICRsaHM6IC1hZy1yZXF1aXJlLXR5cGUoJGxocywgXCJudW1iZXJcIiwgXCJ2YWx1ZSBiZWZvcmUgJG1pbnVzXCIpO1xuICAgICRyaHM6IC1hZy1yZXF1aXJlLXR5cGUoJHJocywgXCJudW1iZXJcIiwgXCJhcmd1bWVudCB0byAkbWludXNcIik7XG4gICAgQHJldHVybiAkbGhzIC0gJHJocztcbn1cblxuQGZ1bmN0aW9uIC1hZy1vcGVyYXRvci1mdW5jdGlvbi1vcGFjaXR5KCRwYXJhbXMsICRsaHMsICRyaHMpIHtcbiAgICAkbGhzOiAtYWctcmVxdWlyZS10eXBlKCRsaHMsIFwiY29sb3JcIiwgXCJ2YWx1ZSBiZWZvcmUgJG9wYWNpdHlcIik7XG4gICAgJHJoczogLWFnLXJlcXVpcmUtdHlwZSgkcmhzLCBcIm51bWJlclwiLCBcImFyZ3VtZW50IHRvICRvcGFjaXR5XCIpO1xuICAgIEBpZiAkcmhzIDwgMCBvciAkcmhzID4gMSB7XG4gICAgICAgIEBlcnJvciBcIkV4cGVjdGVkIGFyZ3VtZW50IHRvICRvcGFjaXR5IHRvIGJlIGJldHdlZW4gMCBhbmQgMSwgZ290ICN7aW5zcGVjdCgkcmhzKX0gaW5zdGVhZC5cIjtcbiAgICB9XG4gICAgQHJldHVybiByZ2JhKCRsaHMsICRyaHMpO1xufVxuXG5AZnVuY3Rpb24gLWFnLW9wZXJhdG9yLWZ1bmN0aW9uLW1peCgkcGFyYW1zLCAkbGhzLCAkcmhzKSB7XG4gICAgJGxoczogLWFnLXJlcXVpcmUtdHlwZSgkbGhzLCBcImNvbG9yXCIsIFwidmFsdWUgYmVmb3JlICRtaXhcIik7XG4gICAgQGlmIGxlbmd0aCgkcmhzKSAhPSAyIHtcbiAgICAgICAgQGVycm9yIFwiRXhwZWN0ZWQgYXJndW1lbnQgdG8gJG1peCB0byBiZSBhIDItaXRlbSBhcnJheSBbY29sb3IsIHBlcmNlbnRhZ2VdIGJ1dCBnb3QgI3tpbnNwZWN0KCRyaHMpfVwiO1xuICAgIH1cbiAgICAkY29sb3I6IG50aCgkcmhzLCAxKTtcbiAgICBAaWYgdHlwZS1vZigkY29sb3IpID09IHN0cmluZyB7XG4gICAgICAgICRjb2xvcjogLWFnLXJlc29sdmUtcGFyYW0tbmFtZSgkcGFyYW1zLCAkY29sb3IpO1xuICAgIH1cbiAgICAkcGVyY2VudGFnZTogbnRoKCRyaHMsIDIpO1xuICAgIEBpZiB0eXBlLW9mKCRjb2xvcikgIT0gY29sb3Igb3IgdHlwZS1vZigkcGVyY2VudGFnZSkgIT0gbnVtYmVyIHtcbiAgICAgICAgQGVycm9yIFwiRXhwZWN0ZWQgYXJndW1lbnQgdG8gJG1peCB0byBiZSBhIDItaXRlbSBhcnJheSBbY29sb3IsIG51bWJlcl0gYnV0IGdvdCBbI3t0eXBlLW9mKCRjb2xvcil9LCAje3R5cGUtb2YoJHBlcmNlbnRhZ2UpfV06ICN7aW5zcGVjdCgkcmhzKX1cIjtcbiAgICB9XG4gICAgQHJldHVybiBtaXgoJGNvbG9yLCAkbGhzLCAkcGVyY2VudGFnZSk7XG59XG5cbkBmdW5jdGlvbiAtYWctb3BlcmF0b3ItZnVuY3Rpb24tbGlnaHRlbigkcGFyYW1zLCAkbGhzLCAkcmhzKSB7XG4gICAgJGxoczogLWFnLXJlcXVpcmUtdHlwZSgkbGhzLCBcImNvbG9yXCIsIFwidmFsdWUgYmVmb3JlICRsaWdodGVuXCIpO1xuICAgICRyaHM6IC1hZy1yZXF1aXJlLXR5cGUoJHJocywgXCJudW1iZXJcIiwgXCJhcmd1bWVudCB0byAkbGlnaHRlblwiKTtcbiAgICBAaWYgJHJocyA8IDAgb3IgJHJocyA+IDEwMCB7XG4gICAgICAgIEBlcnJvciBcIkV4cGVjdGVkIGFyZ3VtZW50IHRvICRsaWdodGVuIHRvIGJlIGJldHdlZW4gMCBhbmQgMTAwLCBnb3QgI3tpbnNwZWN0KCRyaHMpfSBpbnN0ZWFkLlwiO1xuICAgIH1cbiAgICBAcmV0dXJuIGxpZ2h0ZW4oJGxocywgJHJocyk7XG59XG5cbkBmdW5jdGlvbiAtYWctb3BlcmF0b3ItZnVuY3Rpb24tZGFya2VuKCRwYXJhbXMsICRsaHMsICRyaHMpIHtcbiAgICAkbGhzOiAtYWctcmVxdWlyZS10eXBlKCRsaHMsIFwiY29sb3JcIiwgXCJ2YWx1ZSBiZWZvcmUgJGRhcmtlblwiKTtcbiAgICAkcmhzOiAtYWctcmVxdWlyZS10eXBlKCRyaHMsIFwibnVtYmVyXCIsIFwiYXJndW1lbnQgdG8gJGRhcmtlblwiKTtcbiAgICBAaWYgJHJocyA8IDAgb3IgJHJocyA+IDEwMCB7XG4gICAgICAgIEBlcnJvciBcIkV4cGVjdGVkIGFyZ3VtZW50IHRvICRkYXJrZW4gdG8gYmUgYmV0d2VlbiAwIGFuZCAxMDAsIGdvdCAje2luc3BlY3QoJHJocyl9IGluc3RlYWQuXCI7XG4gICAgfVxuICAgIEByZXR1cm4gZGFya2VuKCRsaHMsICRyaHMpO1xufVxuXG5cbkBmdW5jdGlvbiAtYWctb3BlcmF0b3ItZnVuY3Rpb24tc2VsZi1vdmVybGF5KCRwYXJhbXMsICRjb2xvciwgJHRpbWVzKSB7XG4gICAgJGNvbG9yOiAtYWctcmVxdWlyZS10eXBlKCRjb2xvciwgXCJjb2xvclwiLCBcInZhbHVlIGJlZm9yZSAkc2VsZi1vdmVybGF5XCIpO1xuICAgICR0aW1lczogLWFnLXJlcXVpcmUtdHlwZSgkdGltZXMsIFwibnVtYmVyXCIsIFwiYXJndW1lbnQgdG8gJHNlbGYtb3ZlcmxheVwiKTtcbiAgICBAaWYgJHRpbWVzIDwgMCBvciAkdGltZXMgPiAxMDAge1xuICAgICAgICBAZXJyb3IgXCJFeHBlY3RlZCBhcmd1bWVudCB0byAkc2VsZi1vdmVybGF5IHRvIGJlIGJldHdlZW4gMCBhbmQgMTAwLCBnb3QgI3tpbnNwZWN0KCR0aW1lcyl9IGluc3RlYWQuXCI7XG4gICAgfVxuXG4gICAgJHNvbGlkaXR5OiAxIC0gb3BhY2l0eSgkY29sb3IpO1xuICAgICRvdXRwdXQtc29saWRpdHk6IDE7XG4gICAgQGlmICR0aW1lcyA+IDAge1xuICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICR0aW1lcyB7XG4gICAgICAgICAgICAkb3V0cHV0LXNvbGlkaXR5OiAkb3V0cHV0LXNvbGlkaXR5ICogJHNvbGlkaXR5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQHJldHVybiByZ2JhKCRjb2xvciwgMSAtICRvdXRwdXQtc29saWRpdHkpO1xufSIsIkBpbXBvcnQgXCIuL2FnLWdyaWQtbWl4aW5zXCI7XG5AaW1wb3J0IFwiLi9hZy10aGVtZS1wYXJhbXNcIjtcblxuQG1peGluIGFnLWluaGVyaXQtdGV4dC1zdHlsZXMoKSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYWctYm9yZGVyKCRib3JkZXItdHlwZSwgJHNpZGVzOiBudWxsLCAkcmFkaXVzOiBudWxsLCAkd2lkdGg6IDFweCwgJHN0eWxlOiBzb2xpZCwgJG5vbmU6IGZhbHNlKSB7XG4gICAgQGlmIGFnLXNob3VsZC1kcmF3LWJvcmRlcigkYm9yZGVyLXR5cGUpIHtcbiAgICAgICAgJGNvbG9yLXBhcmFtOiBpZigkYm9yZGVyLXR5cGUgPT0gc2Vjb25kYXJ5LCBzZWNvbmRhcnktYm9yZGVyLWNvbG9yLCBib3JkZXItY29sb3IpO1xuXG4gICAgICAgIEBpZiAkc2lkZXMge1xuICAgICAgICAgICAgQGVhY2ggJHNpZGUgaW4gJHNpZGVzIHtcbiAgICAgICAgICAgICAgICBAaWYgJG5vbmUge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItI3skc2lkZX06IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLSN7JHNpZGV9OiAkc3R5bGUgJHdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItI3skc2lkZX0tY29sb3IsICRjb2xvci1wYXJhbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBlbHNlIHtcbiAgICAgICAgICAgIEBpZiAkbm9uZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogJHN0eWxlICR3aWR0aDtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsICRjb2xvci1wYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGlmICRyYWRpdXMge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGFnLWtleWJvYXJkLWZvY3VzKCRzZWxlY3RvcnMsICRvZmZzZXQpIHtcbiAgICAuYWcta2V5Ym9hcmQtZm9jdXMge1xuICAgICAgICBAZWFjaCAkc2VsZWN0b3IgaW4gJHNlbGVjdG9ycyB7XG4gICAgICAgICAgICAuI3skc2VsZWN0b3J9OmZvY3VzIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogJG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAjeyRvZmZzZXQgKiAyfSk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skb2Zmc2V0ICogMn0pO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLWNvbG9yLCBpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGFnLXZlcnRpY2FsLXdpZGdldC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IGFnLXBhcmFtKHdpZGdldC1jb250YWluZXItdmVydGljYWwtcGFkZGluZykgYWctcGFyYW0od2lkZ2V0LWNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgIHBhZGRpbmctYm90dG9tOiBhZy1wYXJhbSh3aWRnZXQtY29udGFpbmVyLXZlcnRpY2FsLXBhZGRpbmcpIC0gYWctcGFyYW0od2lkZ2V0LXZlcnRpY2FsLXNwYWNpbmcpO1xuXG4gICAgJiA+ICoge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhZy1wYXJhbSh3aWRnZXQtdmVydGljYWwtc3BhY2luZyk7XG4gICAgfVxufVxuXG5AZnVuY3Rpb24gYWctc2hvdWxkLWRyYXctYm9yZGVyKCR0eXBlKSB7XG4gICAgJHZhbGlkLXR5cGVzOiAoXG4gICAgICAgIGNyaXRpY2FsOiBhZy1wYXJhbShib3JkZXJzLWNyaXRpY2FsKSxcbiAgICAgICAgcHJpbWFyeTogYWctcGFyYW0oYm9yZGVycyksXG4gICAgICAgIHNpZGUtYnV0dG9uOiBhZy1wYXJhbShib3JkZXJzLXNpZGUtYnV0dG9uKSxcbiAgICAgICAgc2Vjb25kYXJ5OiBhZy1wYXJhbShib3JkZXJzLXNlY29uZGFyeSlcbiAgICApO1xuICAgICRkcmF3LWJvcmRlcjogZmFsc2U7XG4gICAgQGlmIG5vdCBtYXAtaGFzLWtleSgkdmFsaWQtdHlwZXMsICR0eXBlKSB7XG4gICAgICAgIEBlcnJvciBcIkludmFsaWQgYm9yZGVyIHR5cGUgJyN7aW5zcGVjdCgkdHlwZSl9J1wiO1xuICAgIH1cbiAgICBAcmV0dXJuIG1hcC1nZXQoJHZhbGlkLXR5cGVzLCAkdHlwZSk7XG59XG5cbkBmdW5jdGlvbiBhZy1pY29uLWNoYXIoJG5hbWUpIHtcbiAgICAkaWNvbi1tYXA6IC1hZy1wYXJhbS11bmNoZWNrZWQoaWNvbnMtZm9udC1jb2Rlcyk7XG4gICAgQGlmIHR5cGUtb2YoJGljb24tbWFwKSAhPSBtYXAge1xuICAgICAgICBAZXJyb3IgXCJFeHBlY3RlZCBpY29ucy1mb250LWNvZGVzIHBhcmFtIHRvIGJlIGEgbWFwLCBidXQgZ290ICN7dHlwZS1vZigkaWNvbi1tYXApfSAoI3tpbnNwZWN0KCRpY29uLW1hcCl9KVwiO1xuICAgIH1cbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRpY29uLW1hcCwgJG5hbWUpIHtcbiAgICAgICAgQGVycm9yIFwiTm8gc3VjaCBpY29uOiAjeyRuYW1lfVwiO1xuICAgIH1cbiAgICBAcmV0dXJuIG1hcC1nZXQoJGljb24tbWFwLCAkbmFtZSk7XG59XG5cbkBtaXhpbiBhZy1jYXJkKCkge1xuICAgIEBpbmNsdWRlIGFnLWJvcmRlcihwcmltYXJ5KTtcbiAgICBcbiAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiBhZy1wYXJhbShjYXJkLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogYWctcGFyYW0oY2FyZC1zaGFkb3cpO1xuICAgIHBhZGRpbmc6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG59XG5cblxuQG1peGluIGFnLWljb24tZWxlbWVudCgkaWNvbiwgJGNvZGUpIHtcbiAgLmFnLWljb24tI3skaWNvbn0ge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICRjb2RlO1xuICAgICAgfVxuICB9XG59XG5cbkBtaXhpbiBhZy1pY29ucy1mb250LWZhY2UoKSB7XG4gICAgQGlmIGFnLXBhcmFtKGljb25zLWRhdGEpIHtcbiAgICAgICAgQGF0LXJvb3Qge1xuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICcje2FnLXBhcmFtKGljb24tZm9udC1mYW1pbHkpfSc7XG4gICAgICAgICAgICAgICAgc3JjOiBhZy1wYXJhbShpY29ucy1kYXRhKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGFnLWljb24oKSB7XG4gICAgZm9udC1mYW1pbHk6ICcje2FnLXBhcmFtKGljb24tZm9udC1mYW1pbHkpfSc7XG4gICAgZm9udC1zaXplOiBhZy1wYXJhbShpY29uLXNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZy1wYXJhbShpY29uLXNpemUpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIFxuICAgIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbkBtaXhpbiBhZy1pY29ucy13ZWJmb250KCkge1xuICAuYWctaWNvbiB7XG4gICAgICBAaW5jbHVkZSBhZy1pY29uKCk7XG4gIH1cblxuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ2FnZ3JlZ2F0aW9uJywgYWctaWNvbi1jaGFyKGFnZ3JlZ2F0aW9uKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnYXJyb3dzJywgYWctaWNvbi1jaGFyKGFycm93cykpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ2FzYycsIGFnLWljb24tY2hhcihhc2MpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdjYW5jZWwnLCBhZy1pY29uLWNoYXIoY2FuY2VsKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnY2hhcnQnLCBhZy1pY29uLWNoYXIoY2hhcnQpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdjb2xvci1waWNrZXInLCBhZy1pY29uLWNoYXIoY29sb3ItcGlja2VyKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnY29sdW1ucycsIGFnLWljb24tY2hhcihjb2x1bW5zKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnY29udHJhY3RlZCcsIGFnLWljb24tY2hhcihjb250cmFjdGVkKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnY29weScsIGFnLWljb24tY2hhcihjb3B5KSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnY3Jvc3MnLCBhZy1pY29uLWNoYXIoY3Jvc3MpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdkZXNjJywgYWctaWNvbi1jaGFyKGRlc2MpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdleHBhbmRlZCcsIGFnLWljb24tY2hhcihleHBhbmRlZCkpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ2V5ZS1zbGFzaCcsIGFnLWljb24tY2hhcihleWUtc2xhc2gpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdleWUnLCBhZy1pY29uLWNoYXIoZXllKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnZmlsdGVyJywgYWctaWNvbi1jaGFyKGZpbHRlcikpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ2ZpcnN0JywgYWctaWNvbi1jaGFyKGZpcnN0KSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnZ3JpcCcsIGFnLWljb24tY2hhcihncmlwKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnZ3JvdXAnLCBhZy1pY29uLWNoYXIoZ3JvdXApKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdsYXN0JywgYWctaWNvbi1jaGFyKGxhc3QpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdsZWZ0JywgYWctaWNvbi1jaGFyKGxlZnQpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdsaW5rZWQnLCBhZy1pY29uLWNoYXIobGlua2VkKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnbG9hZGluZycsIGFnLWljb24tY2hhcihsb2FkaW5nKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnbWF4aW1pemUnLCBhZy1pY29uLWNoYXIobWF4aW1pemUpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdtZW51JywgYWctaWNvbi1jaGFyKG1lbnUpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdtaW5pbWl6ZScsIGFnLWljb24tY2hhcihtaW5pbWl6ZSkpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ25leHQnLCBhZy1pY29uLWNoYXIobmV4dCkpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ25vbmUnLCBhZy1pY29uLWNoYXIobm9uZSkpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ25vdC1hbGxvd2VkJywgYWctaWNvbi1jaGFyKG5vdC1hbGxvd2VkKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgncGFzdGUnLCBhZy1pY29uLWNoYXIocGFzdGUpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdwaW4nLCBhZy1pY29uLWNoYXIocGluKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgncGl2b3QnLCBhZy1pY29uLWNoYXIocGl2b3QpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdwcmV2aW91cycsIGFnLWljb24tY2hhcihwcmV2aW91cykpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ3JpZ2h0JywgYWctaWNvbi1jaGFyKHJpZ2h0KSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnc2F2ZScsIGFnLWljb24tY2hhcihzYXZlKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnc21hbGwtZG93bicsIGFnLWljb24tY2hhcihzbWFsbC1kb3duKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnc21hbGwtbGVmdCcsIGFnLWljb24tY2hhcihzbWFsbC1sZWZ0KSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgnc21hbGwtcmlnaHQnLCBhZy1pY29uLWNoYXIoc21hbGwtcmlnaHQpKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCdzbWFsbC11cCcsIGFnLWljb24tY2hhcihzbWFsbC11cCkpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ3RpY2snLCBhZy1pY29uLWNoYXIodGljaykpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ3RyZWUtY2xvc2VkJywgYWctaWNvbi1jaGFyKHRyZWUtY2xvc2VkKSk7XG4gIEBpbmNsdWRlIGFnLWljb24tZWxlbWVudCgndHJlZS1pbmRldGVybWluYXRlJywgYWctaWNvbi1jaGFyKHRyZWUtaW5kZXRlcm1pbmF0ZSkpO1xuICBAaW5jbHVkZSBhZy1pY29uLWVsZW1lbnQoJ3RyZWUtb3BlbicsIGFnLWljb24tY2hhcih0cmVlLW9wZW4pKTtcbiAgQGluY2x1ZGUgYWctaWNvbi1lbGVtZW50KCd1bmxpbmtlZCcsIGFnLWljb24tY2hhcih1bmxpbmtlZCkpO1xuXG4gIC5hZy1pY29uLXJvdy1kcmFnOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhZy1pY29uLWNoYXIoZ3JpcCk7XG4gIH1cblxuICAuYWctcmlnaHQtYXJyb3c6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGFnLWljb24tY2hhcihsZWZ0KTtcbiAgfVxuXG4gIC5hZy1yaWdodC1hcnJvdzpiZWZvcmUge1xuICAgICAgY29udGVudDogYWctaWNvbi1jaGFyKHJpZ2h0KTtcbiAgfVxuXG59XG5cbiQtYWctaW5jbHVkZWQtdGhlbWVzOiAoKSAhZGVmYXVsdDtcblxuQG1peGluIGFnLWluY2x1ZGUtdGhlbWUtb25jZS1vbmx5KCkge1xuICAgICRuYW1lOiBudGgobnRoKCYsIDEpLCAxKTsgLy8gcmV0dXJucyBuYW1lIG9mIHRvcC1sZXZlbCBzZWxlY3RvciwgZS5nLiBcIi5hZy10aGVtZS1iYWxoYW1cIlxuICAgIEBpZiBpbmRleCgkLWFnLWluY2x1ZGVkLXRoZW1lcywgJG5hbWUpICE9IG51bGwge1xuICAgICAgICBAZXJyb3IgXCJUaGVtZSBDU1MgZm9yICN7JG5hbWV9IGhhcyBiZWVuIGdlbmVyYXRlZCB0d2ljZS4gVGhpcyBjYW4gaGFwcGVuIHdoZW4geW91IEBpbXBvcnQgYWctdGhlbWUteHl6LnNjc3MgdHdpY2UsIG9yIEBpbXBvcnQgdGhlIGxlZ2FjeSBhZy10aGVtZS14eXouc2NzcyBhbmQgdGhlbiBhbHNvIEBpbmNsdWRlIHRoZSBhZy10aGVtZS14eXooKSBtaXhpbi4gSWYgeW91J3JlIHVzaW5nIHRoZSBtaXhpbiwganVzdCBAaW1wb3J0IGFnLXRoZW1lLXh5ei1taXhpbi5zY3NzLlwiO1xuICAgIH1cbiAgICAkLWFnLWluY2x1ZGVkLXRoZW1lczogYXBwZW5kKCQtYWctaW5jbHVkZWQtdGhlbWVzLCAkbmFtZSkgIWdsb2JhbDtcbn1cblxuXG5cbi8vIExpa2UgYWctdW50aGVtZWQtcnRsLCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlIHJ0bCBzdHlsZXMgZnJvbSBwcm92aWRlZCBsdHIgc3R5bGVzIGJ5IGZsaXBwaW5nXG4vLyBcImxlZnRcIiBhbmQgXCJyaWdodFwiIGluIHByb3BlcnR5IG5hbWVzIGFuZCB2YWx1ZXMuIEhvd2V2ZXIgdGhpcyBtaXhpbiBpcyBmb3IgdXNlIGluIHRoZW1lcy4gQmVjYXVzZSB0aGVcbi8vIGRpdiB3aXRoIHRoZSB0aGVtZSBjbGFzcyBpcyBvdXRzaWRlIHRoZSBkaXYgd2l0aCB0aGUgLmFnLXJ0bCBjbGFzcywgd2UgbmVlZCB0byBrZWVwIHRoZSB0aGVtZSBjbGFzc1xuLy8gaGlnaGVyIHRoYW4gdGhlIC5hZy1ydGwuXG4vL1xuLy8gRm9yIGV4YW1wbGU6XG4vL1xuLy8gLmFnLXRoZW1lLXh5eiB7XG4vLyAgICAgLmZvbyB7XG4vLyAgICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgobWFyZ2luLWxlZnQ6IDEwcHgpKTtcbi8vICAgICB9XG4vLyB9XG4vL1xuLy8gV2lsbCBlbWl0OlxuLy9cbi8vIC5hZy10aGVtZS14eXogLmFnLWx0ciAuZm9vIHtcbi8vICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4vLyB9XG4vLyAuYWctdGhlbWUteHl6IC5hZy1ydGwgLmZvbyB7XG4vLyAgIG1hcmdpbi1yaWdodDogMTBweDtcbi8vIH1cbi8vXG4vLyBOb3RlIGhvdyB0aGUgLmFnLWx0ciBjbGFzcyBpcyBpbnNlcnRlZCBiZXR3ZWVuIHRoZSB0aGVtZSBjbGFzcyBhbmQgdGhlIHJlc3Qgb2YgdGhlIHNlbGVjdG9yXG5AbWl4aW4gYWctdGhlbWUtcnRsKCRydWxlcywgJGNvbG9yLXBhcmFtOiBudWxsKSB7XG4gICAgQGlmIGxlbmd0aChudGgoJiwgMSkpIDwgMiB7XG4gICAgICAgIEBlcnJvciBcImFnLXRoZW1lLXJ0bCgpIGNhbid0IGJlIHVzZWQgYXQgdGhlIHRvcCBsZXZlbCBvZiBhIFNDU1MgZmlsZSwgb25seSBuZXN0ZWQgaW4gYSBzZWxlY3Rvci5cIjtcbiAgICB9XG4gICAgQGF0LXJvb3Qge1xuICAgICAgICAje2FnLWluc2VydC1jbGFzcy1hZnRlci10aGVtZSgmLCBcIi5hZy1sdHJcIil9IHtcbiAgICAgICAgICAgIEBlYWNoICRwcm9wZXJ0eSwgJHZhbHVlIGluICRydWxlcyB7XG4gICAgICAgICAgICAgICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XG4gICAgICAgICAgICAgICAgQGlmICRjb2xvci1wYXJhbSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KCN7JHByb3BlcnR5fS1jb2xvciwgJGNvbG9yLXBhcmFtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgI3thZy1pbnNlcnQtY2xhc3MtYWZ0ZXItdGhlbWUoJiwgXCIuYWctcnRsXCIpfSB7XG4gICAgICAgICAgICBAZWFjaCAkcHJvcGVydHksICR2YWx1ZSBpbiBhZy1nZXQtcnRsLXJ1bGVzKCRydWxlcykge1xuICAgICAgICAgICAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xuICAgICAgICAgICAgICAgIEBpZiAkY29sb3ItcGFyYW0ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eSgjeyRwcm9wZXJ0eX0tY29sb3IsICRjb2xvci1wYXJhbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIlxuQG1peGluIGFnLXRoZW1lLWJhc2UtcGFydC1yZXNldCB7XG5cbiAgICAvLyBJTVBPUlRBTlQhIEFsbCByZXNldHMgbXVzdCBiZSBzY29wZWQgdG8gZWxlbWVudHMgd2l0aCBhbiBbY2xhc3NePSdhZy0nXSBhdHRyaWJ1dGUgdG9cbiAgICAvLyBhdm9pZCBtZXNzaW5nIHdpdGggY3VzdG9tIGNvbXBvbmVudCBzdHlsZXNcblxuICAgIFtjbGFzc149J2FnLSddLCBbY2xhc3NePSdhZy0nXTpmb2N1cywgW2NsYXNzXj0nYWctJ106YWZ0ZXIsIFtjbGFzc149J2FnLSddOmJlZm9yZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgW2NsYXNzXj0nYWctJ106Oi1tcy1jbGVhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuIiwiXG5AbWl4aW4gYWctdGhlbWUtYmFzZS1wYXJ0LXdpZGdldHMge1xuICAgIC5hZy1jaGVja2JveCxcbiAgICAuYWctcmFkaW8tYnV0dG9uIHtcbiAgICAgICAgLmFnLWlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctcmFuZ2UtZmllbGQge1xuICAgICAgICAuYWctaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctdG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIHdpZHRoOiB1bnNldDtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICB9XG5cbiAgICAuYWctbGFiZWwtYWxpZ24tcmlnaHQgLmFnLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKChtYXJnaW4tbGVmdDogYWctcGFyYW0oZ3JpZC1zaXplKSkpO1xuICAgIH1cblxuICAgIGlucHV0W2NsYXNzXj0nYWctJ10ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cblxuICAgIHRleHRhcmVhW2NsYXNzXj0nYWctJ10sXG4gICAgc2VsZWN0W2NsYXNzXj0nYWctJ10ge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICBpbnB1dFtjbGFzc149J2FnLSddOm5vdChbdHlwZV0pLFxuICAgIGlucHV0W2NsYXNzXj0nYWctJ11bdHlwZT0ndGV4dCddLFxuICAgIGlucHV0W2NsYXNzXj0nYWctJ11bdHlwZT0nbnVtYmVyJ10sXG4gICAgaW5wdXRbY2xhc3NePSdhZy0nXVt0eXBlPSd0ZWwnXSxcbiAgICBpbnB1dFtjbGFzc149J2FnLSddW3R5cGU9J2RhdGUnXSxcbiAgICBpbnB1dFtjbGFzc149J2FnLSddW3R5cGU9J2RhdGV0aW1lLWxvY2FsJ10sXG4gICAgdGV4dGFyZWFbY2xhc3NePSdhZy0nXSB7XG4gICAgICAgIEBleHRlbmQgJWFnLXRleHQtaW5wdXQgIW9wdGlvbmFsO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIFxuICAgICAgICBAaWYgYWctcGFyYW0taXMtc2V0KGlucHV0LWJvcmRlci1jb2xvcikge1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLWNvbG9yLCBpbnB1dC1ib3JkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIGRpc2FibGVkLWZvcmVncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsIGlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBhZy1wYXJhbShpbnB1dC1mb2N1cy1ib3gtc2hhZG93KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1jb2xvciwgaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0W2NsYXNzXj0nYWctJ11bdHlwZT0nbnVtYmVyJ10ge1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAgICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dFtjbGFzc149J2FnLSddW3R5cGU9J3JhbmdlJ10ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIGlucHV0W2NsYXNzXj0nYWctJ11bdHlwZT0nYnV0dG9uJ10sIGJ1dHRvbltjbGFzc149J2FnLSddIHtcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBhZy1wYXJhbShpbnB1dC1mb2N1cy1ib3gtc2hhZG93KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZy1kcmFnLWhhbmRsZSB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBzZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIExpc3RzXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC5hZy1saXN0LWl0ZW0sIC5hZy12aXJ0dWFsLWxpc3QtaXRlbSB7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0obGlzdC1pdGVtLWhlaWdodCk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYWcta2V5Ym9hcmQtZm9jdXMoKGFnLXZpcnR1YWwtbGlzdC1pdGVtKSwgNHB4KTtcblxuICAgIC5hZy1zZWxlY3QtbGlzdCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLmFnLWxpc3QtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICYuYWctYWN0aXZlLWl0ZW0ge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgcm93LWhvdmVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZy1zZWxlY3QtbGlzdC1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBAaW5jbHVkZSBhZy1zZWxlY3RhYmxlKG5vbmUpO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctc2VsZWN0IHtcbiAgICAgICAgLmFnLXBpY2tlci1maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgbWluLWhlaWdodDogYWctcGFyYW0obGlzdC1pdGVtLWhlaWdodCk7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpub3QoLmFnLWNlbGwtZWRpdG9yKSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGFnLXBhcmFtKGxpc3QtaXRlbS1oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIC5hZy1waWNrZXItZmllbGQtZGlzcGxheSB7XG4gICAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgICAgLmFnLXBpY2tlci1maWVsZC1pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgICYuYWctZGlzYWJsZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJpY2ggU2VsZWN0XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC5hZy1yaWNoLXNlbGVjdCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGNvbnRyb2wtcGFuZWwtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLXJpY2gtc2VsZWN0LWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShyb3ctaGVpZ2h0KSAqIDYuNTsgLy8gaW50ZW50aW9uYWxcbiAgICB9XG5cbiAgICAuYWctcmljaC1zZWxlY3QtdmFsdWUge1xuICAgICAgICBwYWRkaW5nOiAwIGFnLXBhcmFtKGdyaWQtc2l6ZSkgMCBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0ocm93LWhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIoc2Vjb25kYXJ5LCBib3R0b20pO1xuICAgIH1cblxuICAgIC5hZy1yaWNoLXNlbGVjdC12aXJ0dWFsLWxpc3QtaXRlbSB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShsaXN0LWl0ZW0taGVpZ2h0KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHJvdy1ob3Zlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctcmljaC1zZWxlY3Qtcm93IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgfVxuXG4gICAgLmFnLXJpY2gtc2VsZWN0LXJvdy1zZWxlY3RlZCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHNlbGVjdGVkLXJvdy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gU2VsZWN0aW9uIGNoZWNrYm94XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAuYWctcm93LWRyYWcsXG4gICAgLmFnLXNlbGVjdGlvbi1jaGVja2JveCxcbiAgICAuYWctZ3JvdXAtZXhwYW5kZWQsXG4gICAgLmFnLWdyb3VwLWNvbnRyYWN0ZWQge1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBtYXJnaW4tcmlnaHQ6IGFnLXBhcmFtKGNlbGwtd2lkZ2V0LXNwYWNpbmcpICkpO1xuXG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBzZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwtd3JhcHBlciA+ICo6bm90KC5hZy1jZWxsLXZhbHVlKTpub3QoLmFnLWdyb3VwLXZhbHVlKSB7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0ocm93LWhlaWdodCkgLSAycHg7IC8vIC0gMnB4IHRvIHJlbW92ZSBlZmZlY3Qgb2YgY2VsbCBib3JkZXJzXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgfVxuXG4gICAgLmFnLWdyb3VwLWV4cGFuZGVkLFxuICAgIC5hZy1ncm91cC1jb250cmFjdGVkIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAuYWctZ3JvdXAtdGl0bGUtYmFyLWljb24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBzZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgfVxuICAgIFxuICAgIC5hZy1ncm91cC1jaGlsZC1jb3VudCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgoIG1hcmdpbi1sZWZ0OiAycHggKSk7XG4gICAgfVxuXG4gICAgLmFnLWdyb3VwLXRpdGxlLWJhciB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHN1YmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogYWctcGFyYW0oZ3JpZC1zaXplKTtcbiAgICB9XG4gICAgXG4gICAgLmFnLWdyb3VwLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiBhZy1wYXJhbShncmlkLXNpemUpO1xuICAgIH1cblxuICAgIC5hZy1kaXNhYmxlZC1ncm91cC10aXRsZS1iYXIsIC5hZy1kaXNhYmxlZC1ncm91cC1jb250YWluZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjVcbiAgICB9XG5cbiAgICAuZ3JvdXAtaXRlbSB7XG4gICAgICAgIG1hcmdpbjogYWctcGFyYW0oZ3JpZC1zaXplKSAvIDIgMDtcbiAgICB9XG5cbiAgICAuYWctbGFiZWwge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKG1hcmdpbi1yaWdodDogYWctcGFyYW0oZ3JpZC1zaXplKSkpO1xuICAgIH1cblxuICAgIC5hZy1sYWJlbC1hbGlnbi10b3AgLmFnLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYWctcGFyYW0oZ3JpZC1zaXplKSAvIDI7XG4gICAgfVxuXG4gICAgLmFnLXNsaWRlci1maWVsZCxcbiAgICAuYWctYW5nbGUtc2VsZWN0LWZpZWxkIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKChtYXJnaW4tcmlnaHQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyKSk7XG4gICAgfVxuXG4gICAgLmFnLWFuZ2xlLXNlbGVjdC1wYXJlbnQtY2lyY2xlIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1jb2xvciwgYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICAgIC5hZy1hbmdsZS1zZWxlY3QtY2hpbGQtY2lyY2xlIHtcbiAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBzZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLXBpY2tlci1maWVsZC13cmFwcGVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1jb2xvciwgYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGFnLXBhcmFtKGlucHV0LWZvY3VzLWJveC1zaGFkb3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5hZy1waWNrZXItZmllbGQtYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBzZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLWRpYWxvZy5hZy1jb2xvci1kaWFsb2cge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmFnLWNvbG9yLXBpY2tlciAuYWctcGlja2VyLWZpZWxkLWRpc3BsYXkge1xuICAgICAgICBoZWlnaHQ6IGFnLXBhcmFtKGljb24tc2l6ZSk7XG4gICAgfVxuXG4gICAgLmFnLWNvbG9yLXBhbmVsIHtcbiAgICAgICAgcGFkZGluZzogYWctcGFyYW0oZ3JpZC1zaXplKTtcbiAgICB9XG5cbiAgICAuYWctc3BlY3RydW0tY29sb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIC5hZy1zcGVjdHJ1bS10b29scyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLmFnLXNwZWN0cnVtLXNhdCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIHJnYmEoMjA0LCAxNTQsIDEyOSwgMCkpO1xuICAgIH1cblxuICAgIC5hZy1zcGVjdHJ1bS12YWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgcmdiYSgyMDQsIDE1NCwgMTI5LCAwKSk7XG4gICAgfVxuXG4gICAgLmFnLXNwZWN0cnVtLWRyYWdnZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxuXG4gICAgLmFnLXNwZWN0cnVtLWh1ZS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIC5hZy1zcGVjdHJ1bS1hbHBoYS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIC5hZy1zcGVjdHJ1bS10b29sIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuXG4gICAgLmFnLXNwZWN0cnVtLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyk7XG4gICAgfVxuXG4gICAgLmFnLXJlY2VudC1jb2xvciB7XG4gICAgICAgIG1hcmdpbjogMCAzcHg7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBHaG9zdCBFbGVtZW50IChEcmFnIGFuZCBEcm9wKVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAmLmFnLWRuZC1naG9zdCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNhcmQoKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIoc2Vjb25kYXJ5KTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIHNlY29uZGFyeS1mb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShoZWFkZXItaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICBsaW5lLWhlaWdodDogYWctcGFyYW0oaGVhZGVyLWhlaWdodCk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCBhZy1wYXJhbShncmlkLXNpemUpICogMjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyKTtcbiAgICB9XG5cbiAgICAuYWctZG5kLWdob3N0LWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBmb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUG9wdXBcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLmFnLXBvcHVwLWNoaWxkOm5vdCguYWctdG9vbHRpcC1jdXN0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogYWctcGFyYW0ocG9wdXAtc2hhZG93KTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRGlhbG9nXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLmFnLWRyYWdnaW5nLXJhbmdlLWhhbmRsZSAmIC5hZy1kaWFsb2csXG4gICAgLmFnLWRyYWdnaW5nLWZpbGwtaGFuZGxlICYgLmFnLWRpYWxvZyB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLmFnLWRpYWxvZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGFnLXBhcmFtKGJvcmRlci1yYWRpdXMpO1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIocHJpbWFyeSk7XG4gICAgfVxuXG4gICAgLmFnLXBhbmVsIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLXBhbmVsLXRpdGxlLWJhciB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIGhlYWRlci1mb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShoZWFkZXItaGVpZ2h0KTtcbiAgICAgICAgcGFkZGluZzogYWctcGFyYW0oZ3JpZC1zaXplKSBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihwcmltYXJ5LCBib3R0b20pO1xuICAgIH1cblxuICAgIC5hZy1wYW5lbC10aXRsZS1iYXItYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKChtYXJnaW4tbGVmdDogYWctcGFyYW0oZ3JpZC1zaXplKSkpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBUb29sdGlwXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC5hZy10b29sdGlwIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgaGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihwcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogYWctcGFyYW0oY2FyZC1yYWRpdXMpO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuXG4gICAgICAgICYuYWctdG9vbHRpcC1oaWRpbmcge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbHVtbiBzZWxlY3RcbiAgICBcbiAgICBAZm9yICRpIGZyb20gMSB0byAxMCB7XG4gICAgICAgIC5hZy1jb2x1bW4tc2VsZWN0LWluZGVudC0jeyRpfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKHBhZGRpbmctbGVmdDogJGkgKiBhZy1wYXJhbShjb2x1bW4tc2VsZWN0LWluZGVudC1zaXplKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLWNvbHVtbi1zZWxlY3QtaGVhZGVyLWljb24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYWcta2V5Ym9hcmQtZm9jdXMoKGFnLWNvbHVtbi1zZWxlY3QtaGVhZGVyLWljb24pLCAwcHgpO1xuXG4gICAgLmFnLWNvbHVtbi1ncm91cC1pY29ucyxcbiAgICAuYWctY29sdW1uLXNlbGVjdC1oZWFkZXItaWNvbixcbiAgICAuYWctY29sdW1uLXNlbGVjdC1oZWFkZXItY2hlY2tib3gsXG4gICAgLmFnLWNvbHVtbi1zZWxlY3QtaGVhZGVyLWZpbHRlci13cmFwcGVyLFxuICAgIC5hZy1jb2x1bW4tc2VsZWN0LWNoZWNrYm94LFxuICAgIC5hZy1jb2x1bW4tc2VsZWN0LWNvbHVtbi1kcmFnLWhhbmRsZSxcbiAgICAuYWctY29sdW1uLXNlbGVjdC1jb2x1bW4tZ3JvdXAtZHJhZy1oYW5kbGUsXG4gICAgLmFnLWNvbHVtbi1zZWxlY3QtY29sdW1uLWxhYmVsIHtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgobWFyZ2luLXJpZ2h0OiBhZy1wYXJhbSh3aWRnZXQtaG9yaXpvbnRhbC1zcGFjaW5nKSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSBhZy1rZXlib2FyZC1mb2N1cygoXG4gICAgICAgIGFnLWNvbHVtbi1zZWxlY3QtY29sdW1uLWdyb3VwLFxuICAgICAgICBhZy1jb2x1bW4tc2VsZWN0LWNvbHVtblxuICAgICksIGFnLXBhcmFtKGdyaWQtc2l6ZSkgLyAtMik7XG5cbiAgICAuYWctY29sdW1uLXNlbGVjdC1jb2x1bW4tZ3JvdXAsXG4gICAgLmFnLWNvbHVtbi1zZWxlY3QtY29sdW1uIHtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGFnLXBhcmFtKHdpZGdldC12ZXJ0aWNhbC1zcGFjaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZy1jb2x1bW4tc2VsZWN0LWNvbHVtbi1yZWFkb25seSxcbiAgICAuYWctY29sdW1uLXNlbGVjdC1jb2x1bW4tZ3JvdXAtcmVhZG9ubHkge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgZGlzYWJsZWQtZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC8vIG5vdGUgLSB0aGlzIGFwcGxpZXMgYSBtYXJnaW4gb2YgdGhlIHNhbWUgd2lkdGggYXMgYSAuYWctY29sdW1uLWdyb3VwLWljb25zIGVsZW1lbnQsIHRvIGluZGVudCBjb2x1bW5zXG4gICAgLy8gd2lodG91dCBpY29ucyB0byB0aGUgc2FtZSBsZXZlbCBhcyBzaWJsaW5ncyB3aXRoIGljb25zLiBJZiBjaGFuZ2luZyAuYWctY29sdW1uLWdyb3VwLWljb25zLCBjaGFuZ2UgdGhpcyB0b28uXG4gICAgLmFnLWNvbHVtbi1zZWxlY3QtYWRkLWdyb3VwLWluZGVudCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgoIG1hcmdpbi1sZWZ0OiBhZy1wYXJhbShpY29uLXNpemUpICsgYWctcGFyYW0oZ3JpZC1zaXplKSAqIDIgKSk7XG4gICAgfVxuXG4gICAgLmFnLWNvbHVtbi1zZWxlY3QtbGlzdCB7XG4gICAgICAgIHBhZGRpbmc6IGFnLXBhcmFtKHdpZGdldC1jb250YWluZXItdmVydGljYWwtcGFkZGluZykgYWctcGFyYW0od2lkZ2V0LWNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgIH1cbn1cblxuLy8gQXBwbHkgdGhlbWUgc3R5bGVzIHRvIGlucHV0IGVsZW1lbnRzLiBCeSBkZWZhdWx0LCBhbGwgZWxlbWVudHMgYXJlIHN0eWxlZC4gVG8gZGlzYWJsZSBvbmUgb3Jcbi8vIG1vcmUgZWxlbWVudHMgc28gdGhhdCB5b3UgY2FuIGFwcGx5IHlvdXIgb3duIHN0eWxlcywgcGFzcyBlLmcuXG4vLyAgICAgYWctbmF0aXZlLWlucHV0cygoY2hlY2tib3g6IGZhbHNlKSlcbi8vIE5hbWVzIG9mIGVsZW1lbnRzIHRvIGRpc2FibGUgaW5jbHVkZTpcbi8vICAgICBjaGVja2JveDogICAgICAgICA8aW5wdXQgdHlwZT1jaGVja2JveD5cbi8vICAgICB0b2dnbGUtYnV0dG9uOiAgICA8aW5wdXQgdHlwZT1jaGVja2JveCBjbGFzcz10b2dnbGUtYnV0dG9uPlxuLy8gICAgIHJhZGlvOiAgICAgICAgICAgIDxpbnB1dCB0eXBlPXJhZGlvPlxuLy8gICAgIHJhbmdlOiAgICAgICAgICAgIDxpbnB1dCB0eXBlPXJhbmdlPlxuQG1peGluIGFnLW5hdGl2ZS1pbnB1dHMoJHR5cGUtbWFwOiAoKSkge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJHR5cGUtbWFwLCBjaGVja2JveCkgb3IgbWFwLWdldCgkdHlwZS1tYXAsIGNoZWNrYm94KSB7XG4gICAgICAgIC5hZy1jaGVja2JveC1pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNoZWNrYm94O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJHR5cGUtbWFwLCB0b2dnbGUtYnV0dG9uKSBvciBtYXAtZ2V0KCR0eXBlLW1hcCwgdG9nZ2xlLWJ1dHRvbikge1xuICAgICAgICAuYWctdG9nZ2xlLWJ1dHRvbi1pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLXRvZ2dsZS1idXR0b247XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGlmIG5vdCBtYXAtaGFzLWtleSgkdHlwZS1tYXAsIHJhZGlvKSBvciBtYXAtZ2V0KCR0eXBlLW1hcCwgcmFkaW8pIHtcbiAgICAgICAgLmFnLXJhZGlvLWJ1dHRvbi1pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLXJhZGlvO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJHR5cGUtbWFwLCByYW5nZSkgb3IgbWFwLWdldCgkdHlwZS1tYXAsIHJhbmdlKSB7XG4gICAgICAgIGlucHV0W2NsYXNzXj0nYWctJ11bdHlwZT0ncmFuZ2UnXSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1yYW5nZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGFnLWNoZWNrLWJ1dHRvbi1iYXNlIHtcbiAgICBAaW5jbHVkZSBhZy1pY29uKCk7XG5cbiAgICB3aWR0aDogYWctcGFyYW0oaWNvbi1zaXplKTtcbiAgICBoZWlnaHQ6IGFnLXBhcmFtKGljb24tc2l6ZSk7XG5cbiAgICAmIGlucHV0LCBpbnB1dCB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBjaGVja2JveC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiBhZy1wYXJhbShjaGVja2JveC1ib3JkZXItcmFkaXVzKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmbGV4OiBub25lO1xuICAgIFxuICAgICY6Zm9jdXMtd2l0aGluLCAmOmFjdGl2ZSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IGFnLXBhcmFtKGlucHV0LWZvY3VzLWJveC1zaGFkb3cpO1xuICAgIH1cbiAgICBcbiAgICAmLmFnLWRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbn1cblxuQG1peGluIGFnLWNoZWNrYm94IHtcbiAgICBAaW5jbHVkZSBhZy1jaGVjay1idXR0b24tYmFzZSgpO1xuXG4gICAgLy8gSU1QT1JUQU5UIVxuICAgIC8vIFdlIGRvY3VtZW50IHRoZXNlIHN0eWxlcyBhdCAvamF2YXNjcmlwdC1ncmlkLWljb25zLyBhbmQgYWR2aXNlIHVzZXJzIHdobyB3YW50IHRvIGNoYW5nZVxuICAgIC8vIGNoZWNrYm94IGljb25zIHRvIHN0eWxlOiBgLmFnLWNoZWNrYm94LWlucHV0LXdyYXBwZXIuYWctY2hlY2tlZDo6YWZ0ZXJgLiBEbyBub3QgY2hhbmdlXG4gICAgLy8gdGhlc2Ugc3R5bGVzIHdpdGhvdXQgYWxzbyB1cGRhdGluZyB0aGUgaWNvbnMgZXhhbXBsZXMuXG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IGFnLWljb24tY2hhcihjaGVja2JveC11bmNoZWNrZWQpO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgICYuYWctY2hlY2tlZDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBhZy1pY29uLWNoYXIoY2hlY2tib3gtY2hlY2tlZCk7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBjaGVja2JveC1jaGVja2VkLWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgICYuYWctaW5kZXRlcm1pbmF0ZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBhZy1pY29uLWNoYXIoY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSk7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBjaGVja2JveC1pbmRldGVybWluYXRlLWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cblxuQG1peGluIGFnLXJhZGlvIHtcbiAgICBAaW5jbHVkZSBhZy1jaGVjay1idXR0b24tYmFzZSgpO1xuICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IGFnLXBhcmFtKGljb24tc2l6ZSk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IGFnLWljb24tY2hhcihyYWRpby1idXR0b24tb2ZmKTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIGNoZWNrYm94LXVuY2hlY2tlZC1jb2xvcik7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAmLmFnLWNoZWNrZWQ6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogYWctaWNvbi1jaGFyKHJhZGlvLWJ1dHRvbi1vbik7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBjaGVja2JveC1jaGVja2VkLWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cblxuQG1peGluIGFnLXRvZ2dsZS1idXR0b24ge1xuICAgICRib3JkZXItd2lkdGg6IGFnLXBhcmFtKHRvZ2dsZS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiBhZy1wYXJhbSh0b2dnbGUtYnV0dG9uLXdpZHRoKTtcbiAgICBoZWlnaHQ6IGFnLXBhcmFtKHRvZ2dsZS1idXR0b24taGVpZ2h0KTtcbiAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCB0b2dnbGUtYnV0dG9uLW9mZi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiBhZy1wYXJhbSh0b2dnbGUtYnV0dG9uLWhlaWdodCkgLyAyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiBub25lO1xuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCBzb2xpZDtcbiAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsIHRvZ2dsZS1idXR0b24tb2ZmLWJvcmRlci1jb2xvcik7XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBhZy1wYXJhbShpbnB1dC1mb2N1cy1ib3gtc2hhZG93KTtcbiAgICB9XG5cbiAgICAmLmFnLWRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgICYuYWctY2hlY2tlZCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHRvZ2dsZS1idXR0b24tb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1jb2xvciwgdG9nZ2xlLWJ1dHRvbi1vbi1ib3JkZXItY29sb3IpO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0kYm9yZGVyLXdpZHRoO1xuICAgICAgICBsZWZ0OiAtJGJvcmRlci13aWR0aDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0odG9nZ2xlLWJ1dHRvbi1oZWlnaHQpO1xuICAgICAgICB3aWR0aDogYWctcGFyYW0odG9nZ2xlLWJ1dHRvbi1oZWlnaHQpO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCB0b2dnbGUtYnV0dG9uLXN3aXRjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogYWctcGFyYW0odG9nZ2xlLWJ1dHRvbi1oZWlnaHQpIC8gMjtcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAxMDBtcztcbiAgICAgICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsIHRvZ2dsZS1idXR0b24tc3dpdGNoLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgJi5hZy1jaGVja2VkOjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAje2FnLXBhcmFtKHRvZ2dsZS1idXR0b24taGVpZ2h0KX0gKTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLWNvbG9yLCB0b2dnbGUtYnV0dG9uLW9uLWJvcmRlci1jb2xvcik7XG4gICAgfVxufVxuXG5AbWl4aW4gYWctaW50ZXJuYWwtcmFuZ2UtdHJhY2sge1xuICAgIEBpZiBtaXhpbi1leGlzdHMoYWctcmFuZ2UtdHJhY2spIHtcbiAgICAgICAgQGluY2x1ZGUgYWctcmFuZ2UtdHJhY2tcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogYWctcGFyYW0oYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGFnLXBhcmFtKGNoZWNrYm94LWJvcmRlci1yYWRpdXMpO1xuICAgIH1cbn1cblxuQG1peGluIGFnLWludGVybmFsLWZvY3VzLXJhbmdlLXRyYWNrIHtcbiAgICBAaWYgbWl4aW4tZXhpc3RzKGFnLWZvY3VzLXJhbmdlLXRyYWNrKSB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWZvY3VzLXJhbmdlLXRyYWNrXG4gICAgfVxufVxuXG5AbWl4aW4gYWctaW50ZXJuYWwtYWN0aXZlLXJhbmdlLXRyYWNrIHtcbiAgICBAaWYgbWl4aW4tZXhpc3RzKGFnLWZvY3VzLXJhbmdlLXRyYWNrKSB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWZvY3VzLXJhbmdlLXRyYWNrXG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yKTtcbiAgICB9XG59XG5cbkBtaXhpbiBhZy1pbnRlcm5hbC1yYW5nZS10aHVtYiB7XG4gICAgQGlmIG1peGluLWV4aXN0cyhhZy1yYW5nZS10aHVtYikge1xuICAgICAgICBAaW5jbHVkZSBhZy1yYW5nZS10aHVtYlxuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB3aWR0aDogYWctcGFyYW0oaWNvbi1zaXplKTtcbiAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShpY29uLXNpemUpO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1jb2xvciwgY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogYWctcGFyYW0oaWNvbi1zaXplKTtcbiAgICB9XG59XG5cbkBtaXhpbiBhZy1pbnRlcm5hbC1mb2N1cy1yYW5nZS10aHVtYiB7XG4gICAgYm94LXNoYWRvdzogYWctcGFyYW0oaW5wdXQtZm9jdXMtYm94LXNoYWRvdyk7XG4gICAgQGlmIG1peGluLWV4aXN0cyhhZy1mb2N1cy1yYW5nZS10aHVtYikge1xuICAgICAgICBAaW5jbHVkZSBhZy1mb2N1cy1yYW5nZS10aHVtYlxuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1jb2xvciwgY2hlY2tib3gtY2hlY2tlZC1jb2xvcik7XG4gICAgfVxufVxuXG5AbWl4aW4gYWctaW50ZXJuYWwtYWN0aXZlLXJhbmdlLXRodW1iIHtcbiAgICBAaWYgbWl4aW4tZXhpc3RzKGFnLWFjdGl2ZS1yYW5nZS10aHVtYikge1xuICAgICAgICBAaW5jbHVkZSBhZy1hY3RpdmUtcmFuZ2UtdGh1bWJcbiAgICB9XG59XG5cbkBtaXhpbiBhZy1yYW5nZSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICBAaW5jbHVkZSBhZy1pbnRlcm5hbC1yYW5nZS10cmFjaztcbiAgICB9XG5cbiAgICAmOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgICAgICAgQGluY2x1ZGUgYWctaW50ZXJuYWwtcmFuZ2UtdHJhY2s7XG4gICAgfVxuXG4gICAgJjo6LW1zLXRyYWNrIHtcbiAgICAgICAgQGluY2x1ZGUgYWctaW50ZXJuYWwtcmFuZ2UtdHJhY2s7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBAaW5jbHVkZSBhZy1pbnRlcm5hbC1yYW5nZS10aHVtYjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGFnLXBhcmFtKGljb24tc2l6ZSkgKiAtMC41ICsgMS41cHgpO1xuICAgIH1cblxuICAgICY6Oi1tcy10aHVtYiB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWludGVybmFsLXJhbmdlLXRodW1iO1xuICAgIH1cbiAgICAmOjotbW96LWFnLXJhbmdlLXRodW1iIHtcbiAgICAgICAgQGluY2x1ZGUgYWctaW50ZXJuYWwtcmFuZ2UtdGh1bWI7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctaW50ZXJuYWwtZm9jdXMtcmFuZ2UtdHJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgJjo6LW1vei1hZy1yYW5nZS10cmFjayB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1pbnRlcm5hbC1mb2N1cy1yYW5nZS10cmFjaztcbiAgICAgICAgfVxuICAgICAgICAmOjotbXMtdHJhY2sge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctaW50ZXJuYWwtZm9jdXMtcmFuZ2UtdHJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1pbnRlcm5hbC1mb2N1cy1yYW5nZS10aHVtYjtcbiAgICAgICAgfVxuICAgICAgICAmOjotbXMtdGh1bWIge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctaW50ZXJuYWwtZm9jdXMtcmFuZ2UtdGh1bWI7XG4gICAgICAgIH1cbiAgICAgICAgJjo6LW1vei1hZy1yYW5nZS10aHVtYiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1pbnRlcm5hbC1mb2N1cy1yYW5nZS10aHVtYjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctaW50ZXJuYWwtYWN0aXZlLXJhbmdlLXRyYWNrO1xuICAgICAgICB9XG4gICAgICAgICY6Oi1tb3otYWctcmFuZ2UtdHJhY2sge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctaW50ZXJuYWwtYWN0aXZlLXJhbmdlLXRyYWNrO1xuICAgICAgICB9XG4gICAgICAgICY6Oi1tcy10cmFjayB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1pbnRlcm5hbC1hY3RpdmUtcmFuZ2UtdHJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1pbnRlcm5hbC1hY3RpdmUtcmFuZ2UtdGh1bWI7XG4gICAgICAgIH1cbiAgICAgICAgJjo6LW1zLXRodW1iIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWludGVybmFsLWFjdGl2ZS1yYW5nZS10aHVtYjtcbiAgICAgICAgfVxuICAgICAgICAmOjotbW96LWFnLXJhbmdlLXRodW1iIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWludGVybmFsLWFjdGl2ZS1yYW5nZS10aHVtYjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxufVxuIiwiXG5AbWl4aW4gYWctdGhlbWUtYmFzZS1wYXJ0LWdyaWQtbGF5b3V0IHtcblxuICAgIC5hZy1ydGwge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAuYWctcm9vdC13cmFwcGVyIHtcbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKHByaW1hcnksICRyYWRpdXM6IGFnLXBhcmFtKGJvcmRlci1yYWRpdXMpKTtcbiAgICB9XG4gICAgXG4gICAgLy8gc3VwcG9ydCAyMCBsZXZlbHMgaGVyZSBiZWNhdXNlIHJvdyBncm91cCBpbmRlbnRhdGlvbiBpcyB1c2VkIGZvciB0cmVlIGRhdGEgd2hpY2ggY2FuIGJlIHF1aXRlIGRlZXBcbiAgICBAZm9yICRpIGZyb20gMSB0byAyMCB7XG4gICAgICAgIC5hZy1yb3cgPiAuYWctY2VsbC13cmFwcGVyLmFnLXJvdy1ncm91cC1pbmRlbnQtI3skaX0ge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKCggcGFkZGluZy1sZWZ0OiBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZykgKyAkaSAqIGFnLXBhcmFtKHJvdy1ncm91cC1pbmRlbnQtc2l6ZSkgKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5hZy1yb3ctZ3JvdXAtaW5kZW50LSN7JGl9IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgoIHBhZGRpbmctbGVmdDogJGkgKiBhZy1wYXJhbShyb3ctZ3JvdXAtaW5kZW50LXNpemUpICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFnLXJvdy1sZXZlbC0jeyRpfSAuYWctcm93LWdyb3VwLWxlYWYtaW5kZW50IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgoIG1hcmdpbi1sZWZ0OiBhZy1wYXJhbShyb3ctZ3JvdXAtaW5kZW50LXNpemUpICkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLWNlbGwge1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgICB9XG5cbiAgICAuYWctdmFsdWUtY2hhbmdlLWRlbHRhIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xuICAgIH1cblxuICAgIC5hZy12YWx1ZS1jaGFuZ2UtZGVsdGEtdXAge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgdmFsdWUtY2hhbmdlLWRlbHRhLXVwLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuYWctdmFsdWUtY2hhbmdlLWRlbHRhLWRvd24ge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgdmFsdWUtY2hhbmdlLWRlbHRhLWRvd24tY29sb3IpO1xuICAgIH1cblxuICAgIC5hZy12YWx1ZS1jaGFuZ2UtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xuICAgIH1cblxuICAgIC5hZy12YWx1ZS1jaGFuZ2UtdmFsdWUtaGlnaGxpZ2h0IHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgdmFsdWUtY2hhbmdlLXZhbHVlLWhpZ2hsaWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xuICAgIH1cblxuICAgIC5hZy1jZWxsLWRhdGEtY2hhbmdlZCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHZhbHVlLWNoYW5nZS12YWx1ZS1oaWdobGlnaHQtYmFja2dyb3VuZC1jb2xvciwgJGltcG9ydGFudDogdHJ1ZSk7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwtZGF0YS1jaGFuZ2VkLWFuaW1hdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5hZy1jZWxsLWhpZ2hsaWdodCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHJhbmdlLXNlbGVjdGlvbi1oaWdobGlnaHQtY29sb3IsICRpbXBvcnRhbnQ6IHRydWUpO1xuICAgIH1cblxuICAgIC5hZy1yb3cge1xuICAgICAgICBoZWlnaHQ6IGFnLXBhcmFtKHJvdy1oZWlnaHQpO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIGRhdGEtY29sb3IpO1xuICAgICAgICBcbiAgICAgICAgQGlmIGFnLXBhcmFtLWlzLXNldChyb3ctYm9yZGVyLWNvbG9yKSBhbmQgYWctcGFyYW0oYm9yZGVycy1jcml0aWNhbCkge1xuICAgICAgICAgICAgLy8gTk9URTogd2UgZGVmaW5lIGJvcmRlci13aWR0aCBhbmQgYm9yZGVyLWNvbG9yIGF0IC5hZy1yb3cgbGV2ZWwgYW5kIG9ubHkgc2V0XG4gICAgICAgICAgICAvLyBib3JkZXItc3R5bGUgaW5zaWRlIG5lc3RlZCBwc2V1ZG9jbGFzcyBzZWxlY3RvcnMsIHRvIGFsbG93IGRlcml2ZWQgdGhlbWVzXG4gICAgICAgICAgICAvLyB0byBvdmVycmlkZSBib3JkZXItd2lkdGggb24gLmFnLXJvd1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsIHJvdy1ib3JkZXItY29sb3IpO1xuXG4gICAgICAgICAgICAmOm5vdCguYWctcm93LWZpcnN0KSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmFnLXJvdy1sYXN0IHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZy1yb3ctaGlnaGxpZ2h0LWFib3ZlOjphZnRlciwgLmFnLXJvdy1oaWdobGlnaHQtYmVsb3c6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFweCk7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCByYW5nZS1zZWxlY3Rpb24tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgbGVmdDogMXB4O1xuICAgIH1cblxuICAgIC5hZy1yb3ctaGlnaGxpZ2h0LWFib3ZlOjphZnRlciB7XG4gICAgICAgIHRvcDogLTFweDtcbiAgICB9XG5cbiAgICAuYWctcm93LWhpZ2hsaWdodC1hYm92ZS5hZy1yb3ctZmlyc3Q6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cblxuICAgIC5hZy1yb3ctaGlnaGxpZ2h0LWJlbG93OjphZnRlciB7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgIH1cblxuICAgIC5hZy1yb3ctb2RkIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgb2RkLXJvdy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAvLyBOT1RFOiB0aGVzZSBkb24ndCBuZWVkIGFuIFJUTCB2ZXJzaW9uIGJlY2F1c2UgdGhlIFwibGVmdCBzcGFjZXJcIiBpcyBhbHdheXMgdGhlIG9uZSB2aXN1YWxseSBvbiB0aGUgbGVmdFxuICAgIC5hZy1ob3Jpem9udGFsLWxlZnQtc3BhY2VyOm5vdCguYWctc2Nyb2xsZXItY29ybmVyKSB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihjcml0aWNhbCwgcmlnaHQpO1xuICAgIH1cbiAgICAuYWctaG9yaXpvbnRhbC1yaWdodC1zcGFjZXI6bm90KC5hZy1zY3JvbGxlci1jb3JuZXIpIHtcbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKGNyaXRpY2FsLCBsZWZ0KTtcbiAgICB9XG5cbiAgICAuYWctcm93LWhvdmVyIHtcbiAgICAgICAgQGlmIGFnLXBhcmFtLWlzLXNldChyb3ctaG92ZXItY29sb3IpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHJvdy1ob3Zlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctcmlnaHQtYWxpZ25lZC1jZWxsIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKCggdGV4dC1hbGlnbjogcmlnaHQgKSk7XG4gICAgfVxuXG4gICAgLy8gcmlnaHQtYWxpZ24gbnVtZXJpYyB2YWx1ZXMgaW4gY2VsbHMgd2l0aCB3cmFwcGVyc1xuICAgIC5hZy1yaWdodC1hbGlnbmVkLWNlbGwgLmFnLWNlbGwtdmFsdWUge1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBtYXJnaW4tbGVmdDogYXV0byApKTtcbiAgICB9XG5cbiAgICAuYWctY2VsbCB7XG4gICAgICAgIC8vIGRyYXcgYSB0cmFuc3BhcmVudCBib3JkZXIgc28gdGhhdCB0aGUgY2VsbCBzaXplIGRvZXNuJ3QgY2hhbmdlIHdoZW4gd2UgYWRkIGEgcmFuZ2UgYm9yZGVyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAvLyBhZGp1c3QgZm9yIHRyYW5zcGFyZW50IGJvcmRlclxuICAgICAgICBsaW5lLWhlaWdodDogYWctcGFyYW0ocm93LWhlaWdodCkgLSAycHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogYWctcGFyYW0oY2VsbC1ob3Jpem9udGFsLXBhZGRpbmcpIC0gMXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZykgLSAxcHg7XG4gICAgfVxuXG4gICAgLy8gaW4gZnVsbCB3aWR0aCByb3dzLCBhIGNlbGwgcmVuZGVyZXIgaXMgcmVuZGVyZWQgZGlyZWN0bHkgaW50byBhIHJvdyB3aXRoIG5vIGNlbGwgaW4gYmV0d2VlbixcbiAgICAvLyBpbiB3aGljaCBjYXNlIHdlIG5lZWQgdG8gYXBwbHkgdGhlIHBhZGRpbmcgdG8gdGhlIGNlbGwgcmVuZGVyZXIncyB3cmFwcGVyLlxuICAgIC5hZy1yb3cgPiAuYWctY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZykgLSAxcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGFnLXBhcmFtKGNlbGwtaG9yaXpvbnRhbC1wYWRkaW5nKSAtIDFweDtcbiAgICB9XG5cbiAgICAuYWctcm93LWRyYWdnaW5nIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgIH1cblxuICAgIC5hZy1yb3ctZHJhZ2dpbmcge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwtaW5saW5lLWVkaXRpbmcge1xuICAgICAgICBAaW5jbHVkZSBhZy1jYXJkKCk7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0ocm93LWhlaWdodCk7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGNvbnRyb2wtcGFuZWwtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLXBvcHVwLWVkaXRvciB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNhcmQoKTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgY29udHJvbC1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuYWctbGFyZ2UtdGV4dC1pbnB1dCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogYWctcGFyYW0oY2VsbC1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgIH1cblxuICAgIC5hZy1kZXRhaWxzLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiA1O1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuYWctb3ZlcmxheS1sb2FkaW5nLXdyYXBwZXIge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBtb2RhbC1vdmVybGF5LWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cblxuICAgIC5hZy1vdmVybGF5LWxvYWRpbmctY2VudGVyIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY2FyZCgpO1xuICAgIH1cblxuICAgIC8vIGluIGF1dG8taGVpZ2h0IG1vZGUgd2l0aCBubyByb3dzLCBhZGQgcGFkZGluZyB0byBwcmV2ZW50IGdyaWQgYmVpbmcgdG9vIHNtYWxsXG4gICAgLmFnLW92ZXJsYXktbm8tcm93cy13cmFwcGVyLmFnLWxheW91dC1hdXRvLWhlaWdodCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cblxuICAgIC5hZy1sb2FkaW5nIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYWctbG9hZGluZy1pY29uIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogYWctcGFyYW0oY2VsbC13aWRnZXQtc3BhY2luZyk7XG4gICAgfVxuXG4gICAgLmFnLWljb24tbG9hZGluZyB7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctZmxvYXRpbmctdG9wIHtcbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKGNyaXRpY2FsLCBib3R0b20pO1xuICAgIH1cbiAgICAuYWctZmxvYXRpbmctYm90dG9tIHtcbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKGNyaXRpY2FsLCB0b3ApO1xuICAgIH1cbn1cbiIsIlxuQG1peGluIGFnLXRoZW1lLWJhc2UtcGFydC1ncmlkLWJvcmRlcnMge1xuXG4gICAgLmFnLWNlbGwge1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBib3JkZXItcmlnaHQ6IGFnLXBhcmFtKGNlbGwtaG9yaXpvbnRhbC1ib3JkZXIpICkpO1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBib3JkZXItcmlnaHQtd2lkdGg6IDFweCApKTtcbiAgICB9XG5cbiAgICAuYWctY2VsbC5hZy1jZWxsLWZpcnN0LXJpZ2h0LXBpbm5lZDpub3QoLmFnLWNlbGwtcmFuZ2UtbGVmdCk6bm90KC5hZy1jZWxsLXJhbmdlLXNpbmdsZS1jZWxsKSB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihjcml0aWNhbCwgbGVmdCk7XG4gICAgfVxuICAgIFxuICAgIC5hZy1jZWxsLmFnLWNlbGwtbGFzdC1sZWZ0LXBpbm5lZDpub3QoLmFnLWNlbGwtcmFuZ2UtcmlnaHQpOm5vdCguYWctY2VsbC1yYW5nZS1zaW5nbGUtY2VsbCkge1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIoY3JpdGljYWwsIHJpZ2h0KTtcbiAgICB9XG4gICAgXG4gICAgLmFnLXJvdy1zZWxlY3RlZCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHNlbGVjdGVkLXJvdy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAvLyB3ZSBkbyBub3Qgd2FudCB0byBjb2xvciB0aGUgcmFuZ2UgY29sb3Igd2hlbiB0aGUgY2VsbCBpcyBhbHNvIGZvY3VzZWRcbiAgICAuYWctY2VsbC1yYW5nZS1zZWxlY3RlZDpub3QoLmFnLWNlbGwtZm9jdXMpIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgcmFuZ2Utc2VsZWN0aW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAmLmFnLWNlbGwtcmFuZ2UtY2hhcnQge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgcmFuZ2Utc2VsZWN0aW9uLWNoYXJ0LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hZy1jZWxsLXJhbmdlLWNoYXJ0LmFnLWNlbGwtcmFuZ2UtY2hhcnQtY2F0ZWdvcnkge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgcmFuZ2Utc2VsZWN0aW9uLWNoYXJ0LWNhdGVnb3J5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQtMTpub3QoLmFnLWNlbGwtZm9jdXMpIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgcmFuZ2Utc2VsZWN0aW9uLWJhY2tncm91bmQtY29sb3ItMSk7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQtMjpub3QoLmFnLWNlbGwtZm9jdXMpIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgcmFuZ2Utc2VsZWN0aW9uLWJhY2tncm91bmQtY29sb3ItMik7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQtMzpub3QoLmFnLWNlbGwtZm9jdXMpIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgcmFuZ2Utc2VsZWN0aW9uLWJhY2tncm91bmQtY29sb3ItMyk7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQtNDpub3QoLmFnLWNlbGwtZm9jdXMpIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgcmFuZ2Utc2VsZWN0aW9uLWJhY2tncm91bmQtY29sb3ItNCk7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwuYWctY2VsbC1yYW5nZS1zZWxlY3RlZDpub3QoLmFnLWNlbGwtcmFuZ2Utc2luZ2xlLWNlbGwpIHtcbiAgICAgICAgJi5hZy1jZWxsLXJhbmdlLXRvcCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItdG9wLWNvbG9yLCByYW5nZS1zZWxlY3Rpb24tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAmLmFnLWNlbGwtcmFuZ2UtcmlnaHQge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLXJpZ2h0LWNvbG9yLCByYW5nZS1zZWxlY3Rpb24tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAmLmFnLWNlbGwtcmFuZ2UtYm90dG9tIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1ib3R0b20tY29sb3IsIHJhbmdlLXNlbGVjdGlvbi1ib3JkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgICYuYWctY2VsbC1yYW5nZS1sZWZ0IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1sZWZ0LWNvbG9yLCByYW5nZS1zZWxlY3Rpb24tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGx0ci9ydGwgbmVlZGVkIHNvIHRoYXQgdGhpcyBvdmVycmlkZXMgdGhlIHJ0bC9sdHIgc3R5bGVzIG9mIHBpbm5lZCBjb2x1bW4gYm9yZGVyc1xuICAgIC5hZy1sdHIsIC5hZy1ydGwge1xuICAgICAgICAuYWctaGFzLWZvY3VzIC5hZy1jZWxsLWZvY3VzOm5vdCguYWctY2VsbC1yYW5nZS1zZWxlY3RlZCksXG4gICAgICAgIC5hZy1oYXMtZm9jdXMgLmFnLWNlbGwtZm9jdXMuYWctY2VsbC1yYW5nZS1zaW5nbGUtY2VsbCxcbiAgICAgICAgLmFnLWNlbGwtcmFuZ2Utc2luZ2xlLWNlbGwuYWctY2VsbC1yYW5nZS1oYW5kbGUge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsIHJhbmdlLXNlbGVjdGlvbi1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgb3V0bGluZTogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZy1jZWxsLmFnLXNlbGVjdGlvbi1maWxsLXRvcCxcbiAgICAuYWctY2VsbC5hZy1zZWxlY3Rpb24tZmlsbC10b3AuYWctY2VsbC1yYW5nZS1zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQ7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci10b3AtY29sb3IsIHJhbmdlLXNlbGVjdGlvbi1ib3JkZXItY29sb3IpO1xuICAgIH1cblxuICAgIC5hZy1jZWxsLmFnLXNlbGVjdGlvbi1maWxsLXJpZ2h0LFxuICAgIC5hZy1jZWxsLmFnLXNlbGVjdGlvbi1maWxsLXJpZ2h0LmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQge1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCksICRjb2xvci1wYXJhbTogcmFuZ2Utc2VsZWN0aW9uLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwuYWctc2VsZWN0aW9uLWZpbGwtYm90dG9tLFxuICAgIC5hZy1jZWxsLmFnLXNlbGVjdGlvbi1maWxsLWJvdHRvbS5hZy1jZWxsLXJhbmdlLXNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1jb2xvciwgcmFuZ2Utc2VsZWN0aW9uLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwuYWctc2VsZWN0aW9uLWZpbGwtbGVmdCxcbiAgICAuYWctY2VsbC5hZy1zZWxlY3Rpb24tZmlsbC1sZWZ0LmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQge1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkKSwgJGNvbG9yLXBhcmFtOiByYW5nZS1zZWxlY3Rpb24tYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAlYWctc2VsZWN0aW9uLWhhbmRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIGJvdHRvbTogLTFweDtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKChyaWdodDogLTFweCkpO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCByYW5nZS1zZWxlY3Rpb24tYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuYWctZmlsbC1oYW5kbGUge1xuICAgICAgICBAZXh0ZW5kICVhZy1zZWxlY3Rpb24taGFuZGxlO1xuICAgICAgICBjdXJzb3I6IGNlbGw7XG4gICAgfVxuXG4gICAgLmFnLXJhbmdlLWhhbmRsZSB7XG4gICAgICAgIEBleHRlbmQgJWFnLXNlbGVjdGlvbi1oYW5kbGU7XG4gICAgICAgIGN1cnNvcjogbndzZS1yZXNpemU7XG4gICAgfVxuXG4gICAgLmFnLWNlbGwtaW5saW5lLWVkaXRpbmcge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsIGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciwgJGltcG9ydGFudDogdHJ1ZSk7XG4gICAgfVxufVxuIiwiQG1peGluIGFnLXRoZW1lLWJhc2UtcGFydC1tZW51IHtcblxuICAgIC5hZy1tZW51IHtcbiAgICAgICAgQGluY2x1ZGUgYWctY2FyZCgpO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5hZy1tZW51LWxpc3Qge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogYWctcGFyYW0oZ3JpZC1zaXplKTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgfVxuXG4gICAgLmFnLW1lbnUtb3B0aW9uLXBhcnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogYWctcGFyYW0oZ3JpZC1zaXplKSArIDI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBhZy1wYXJhbShncmlkLXNpemUpICsgMjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGFnLXBhcmFtKGljb24tc2l6ZSk7XG4gICAgfVxuXG4gICAgLmFnLW1lbnUtb3B0aW9uLWFjdGl2ZSB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHJvdy1ob3Zlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLW1lbnUtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIC5hZy1tZW51LW9wdGlvbi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgfVxuXG4gICAgLmFnLW1lbnUtb3B0aW9uLWljb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpO1xuICAgICAgICBtaW4td2lkdGg6IGFnLXBhcmFtKGljb24tc2l6ZSkgKyBhZy1wYXJhbShncmlkLXNpemUpICogMjtcbiAgICB9XG5cbiAgICAuYWctbWVudS1vcHRpb24tc2hvcnRjdXQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyO1xuICAgIH1cblxuXG4gICAgLmFnLW1lbnUtc2VwYXJhdG9yIHtcbiAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpICogMjtcbiAgICB9XG5cbiAgICAuYWctbWVudS1zZXBhcmF0b3ItY2VsbDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIoY3JpdGljYWwsIHRvcCk7XG4gICAgfVxuXG4gICAgLmFnLW1lbnUtb3B0aW9uLXBvcHVwLXBvaW50ZXIge1xuICAgICAgICB3aWR0aDogYWctcGFyYW0oaWNvbi1zaXplKSArIGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIENvbHVtbiBGaWx0ZXJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLmFnLXRhYnMtaGVhZGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAyMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmFnLXRhYiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IGFnLXBhcmFtKHNlbGVjdGVkLXRhYi11bmRlcmxpbmUtd2lkdGgpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIEBpZiBhZy1wYXJhbShmdWxsLXdpZHRoLXRhYnMpIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgQGlmIGFnLXBhcmFtKHNlbGVjdGVkLXRhYi11bmRlcmxpbmUtdHJhbnNpdGlvbi1zcGVlZCkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSBhZy1wYXJhbShzZWxlY3RlZC10YWItdW5kZXJsaW5lLXRyYW5zaXRpb24tc3BlZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYWcta2V5Ym9hcmQtZm9jdXMoKGFnLXRhYiksIDRweCk7XG5cbiAgICAuYWctdGFiLXNlbGVjdGVkIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLWJvdHRvbS1jb2xvciwgc2VsZWN0ZWQtdGFiLXVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLW1lbnUtaGVhZGVyIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIHNlY29uZGFyeS1mb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVmFsdWUgU2V0IEZpbHRlclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC5hZy1maWx0ZXItY29uZGl0aW9uLW9wZXJhdG9yIHtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgIH1cblxuICAgIC5hZy1maWx0ZXItY29uZGl0aW9uLW9wZXJhdG9yLW9yIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKChtYXJnaW4tbGVmdDogYWctcGFyYW0oZ3JpZC1zaXplKSAqIDIpKTtcbiAgICB9XG5cbiAgICAuYWctc2V0LWZpbHRlci1zZWxlY3QtYWxsIHtcbiAgICAgICAgcGFkZGluZy10b3A6IGFnLXBhcmFtKHdpZGdldC1jb250YWluZXItdmVydGljYWwtcGFkZGluZyk7XG4gICAgfVxuXG4gICAgLmFnLXNldC1maWx0ZXItbGlzdCB7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0obGlzdC1pdGVtLWhlaWdodCkgKiA2O1xuICAgIH1cblxuICAgIC5hZy1zZXQtZmlsdGVyLWZpbHRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IGFnLXBhcmFtKHdpZGdldC1jb250YWluZXItdmVydGljYWwtcGFkZGluZyk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhZy1wYXJhbSh3aWRnZXQtY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYWctcGFyYW0od2lkZ2V0LWNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgIH1cblxuICAgIC5hZy1maWx0ZXItdG8ge1xuICAgICAgICBtYXJnaW4tdG9wOiBhZy1wYXJhbSh3aWRnZXQtdmVydGljYWwtc3BhY2luZyk7XG4gICAgfVxuXG4gICAgLmFnLW1pbmktZmlsdGVyIHtcbiAgICAgICAgbWFyZ2luOiBhZy1wYXJhbSh3aWRnZXQtY29udGFpbmVyLXZlcnRpY2FsLXBhZGRpbmcpIGFnLXBhcmFtKHdpZGdldC1jb250YWluZXItaG9yaXpvbnRhbC1wYWRkaW5nKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuYWctc2V0LWZpbHRlci1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAwcHggYWctcGFyYW0od2lkZ2V0LWNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgIH1cblxuICAgIC5hZy1zZXQtZmlsdGVyLWl0ZW0tdmFsdWUge1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKG1hcmdpbi1sZWZ0OiBhZy1wYXJhbSh3aWRnZXQtY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZykpKTtcbiAgICB9XG5cbiAgICAuYWctZmlsdGVyLWhlYWRlci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogYWctcGFyYW0od2lkZ2V0LWNvbnRhaW5lci12ZXJ0aWNhbC1wYWRkaW5nKTtcbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKHNlY29uZGFyeSwgYm90dG9tKTtcbiAgICB9XG5cbiAgICAuYWctZmlsdGVyLWFwcGx5LXBhbmVsIHtcbiAgICAgICAgcGFkZGluZzogYWctcGFyYW0od2lkZ2V0LWNvbnRhaW5lci12ZXJ0aWNhbC1wYWRkaW5nKSBhZy1wYXJhbSh3aWRnZXQtY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZyk7XG5cbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKHNlY29uZGFyeSwgdG9wKTtcbiAgICB9XG5cbiAgICAuYWctZmlsdGVyLWFwcGx5LXBhbmVsLWJ1dHRvbiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgobWFyZ2luLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyKSk7XG4gICAgfVxuXG4gICAgLmFnLXNpbXBsZS1maWx0ZXItYm9keS13cmFwcGVyIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdmVydGljYWwtd2lkZ2V0LWNvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIC5hZy1maWx0ZXItbm8tbWF0Y2hlcyB7XG4gICAgICAgIG1hcmdpbjogYWctcGFyYW0od2lkZ2V0LWNvbnRhaW5lci12ZXJ0aWNhbC1wYWRkaW5nKSBhZy1wYXJhbSh3aWRnZXQtY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgfVxufVxuIiwiXG5AbWl4aW4gYWctdGhlbWUtYmFzZS1wYXJ0LXNpZGViYXIge1xuIFxuICAgIC5hZy1zaWRlLWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuYWctdG9vbC1wYW5lbC13cmFwcGVyIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgY29udHJvbC1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuYWctc2lkZS1idXR0b25zIHtcbiAgICAgICAgcGFkZGluZy10b3A6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiA0O1xuICAgICAgICB3aWR0aDogYWctcGFyYW0oaWNvbi1zaXplKSArIDQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIGZvcmVncm91bmQtY29sb3IpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIGJ1dHRvbi5hZy1zaWRlLWJ1dHRvbi1idXR0b24ge1xuICAgICAgICBAaW5jbHVkZSBhZy1pbmhlcml0LXRleHQtc3R5bGVzKCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nOiBhZy1wYXJhbShncmlkLXNpemUpICogMiAwIGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyIDA7XG4gICAgICAgIEBpZiBhZy1wYXJhbShib3JkZXJzLXNpZGUtYnV0dG9uKSB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMXB4KTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAxODtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKHNpZGUtYnV0dG9uLCAodG9wLCBib3R0b20pKTtcbiAgICAgICAgJGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAkYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYWcta2V5Ym9hcmQtZm9jdXMoKGFnLXNpZGUtYnV0dG9uLWJ1dHRvbiksIDRweCk7XG5cbiAgICAuYWctc2VsZWN0ZWQgLmFnLXNpZGUtYnV0dG9uLWJ1dHRvbiB7XG4gICAgICAgIEBpZiBhZy1wYXJhbShib3JkZXJzLXNpZGUtYnV0dG9uKSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBjb250cm9sLXBhbmVsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLXRvcC1jb2xvciwgYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1ib3R0b20tY29sb3IsIGJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctc2lkZS1idXR0b24taWNvbi13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIH1cblxuICAgIC8vIHNpZGViYXIgdmlzdWFsbHkgb24gbGVmdFxuICAgIC5hZy1sdHIgLmFnLXNpZGUtYmFyLWxlZnQsXG4gICAgLmFnLXJ0bCAuYWctc2lkZS1iYXItcmlnaHQge1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIocHJpbWFyeSwgcmlnaHQpO1xuICAgICAgICAuYWctdG9vbC1wYW5lbC13cmFwcGVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihwcmltYXJ5LCBsZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZy1zaWRlLWJ1dHRvbi1idXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBhZy1wYXJhbShzZWxlY3RlZC10YWItdW5kZXJsaW5lLXdpZHRoKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIEBpZiBhZy1wYXJhbShzZWxlY3RlZC10YWItdW5kZXJsaW5lLXRyYW5zaXRpb24tc3BlZWQpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItcmlnaHQgYWctcGFyYW0oc2VsZWN0ZWQtdGFiLXVuZGVybGluZS10cmFuc2l0aW9uLXNwZWVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQGlmIGFnLXBhcmFtKGJvcmRlcnMtc2lkZS1idXR0b24pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGVubGFyZ2VzIHRoZSB0YWIgYnV0dG9uIHRvIGNvdmVyIHRoZSB0b29sIHBhbmVsIGJvcmRlclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWctc2VsZWN0ZWQgLmFnLXNpZGUtYnV0dG9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItcmlnaHQtY29sb3IsIHNlbGVjdGVkLXRhYi11bmRlcmxpbmUtY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2lkZWJhciB2aXN1YWxseSBvbiByaWdodFxuICAgIC5hZy1ydGwgLmFnLXNpZGUtYmFyLWxlZnQsXG4gICAgLmFnLWx0ciAuYWctc2lkZS1iYXItcmlnaHQge1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIocHJpbWFyeSwgbGVmdCk7XG4gICAgICAgIFxuICAgICAgICAuYWctdG9vbC1wYW5lbC13cmFwcGVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihwcmltYXJ5LCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWctc2lkZS1idXR0b24tYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBhZy1wYXJhbShzZWxlY3RlZC10YWItdW5kZXJsaW5lLXdpZHRoKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIEBpZiBhZy1wYXJhbShzZWxlY3RlZC10YWItdW5kZXJsaW5lLXRyYW5zaXRpb24tc3BlZWQpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItbGVmdCBhZy1wYXJhbShzZWxlY3RlZC10YWItdW5kZXJsaW5lLXRyYW5zaXRpb24tc3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAaWYgYWctcGFyYW0oYm9yZGVycy1zaWRlLWJ1dHRvbikge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgZW5sYXJnZXMgdGhlIHRhYiBidXR0b24gdG8gY292ZXIgdGhlIHRvb2wgcGFuZWwgYm9yZGVyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWctc2VsZWN0ZWQgLmFnLXNpZGUtYnV0dG9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItbGVmdC1jb2xvciwgc2VsZWN0ZWQtdGFiLXVuZGVybGluZS1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4iLCJAbWl4aW4gYWctdGhlbWUtYmFzZS1wYXJ0LWZpbHRlci10b29sLXBhbmVsIHtcbiAgICAuYWctZmlsdGVyLXRvb2xwYW5lbC1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiA2O1xuICAgIH1cblxuICAgIC5hZy1maWx0ZXItdG9vbHBhbmVsLWhlYWRlcixcbiAgICAuYWctZmlsdGVyLXRvb2xwYW5lbC1zZWFyY2gge1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBwYWRkaW5nLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYWcta2V5Ym9hcmQtZm9jdXMoKGFnLWZpbHRlci10b29scGFuZWwtaGVhZGVyKSwgNHB4KTtcblxuICAgIC5hZy1maWx0ZXItdG9vbHBhbmVsLWdyb3VwLmFnLWhhcy1maWx0ZXIgPiAuYWctZ3JvdXAtdGl0bGUtYmFyIC5hZy1ncm91cC10aXRsZTphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWljb24oKTtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKCggcGFkZGluZy1sZWZ0OiBhZy1wYXJhbShncmlkLXNpemUpICkpO1xuICAgICAgICBjb250ZW50OiBhZy1pY29uLWNoYXIoZmlsdGVyKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5hZy1maWx0ZXItdG9vbHBhbmVsLWdyb3VwLWxldmVsLTAtaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpICogODtcbiAgICB9XG5cbiAgICAuYWctZmlsdGVyLXRvb2xwYW5lbC1ncm91cC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogYWctcGFyYW0oZ3JpZC1zaXplKSAvIDI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGFnLXBhcmFtKGdyaWQtc2l6ZSkgLyAyO1xuICAgIH1cblxuICAgIC5hZy1maWx0ZXItdG9vbHBhbmVsLXNlYXJjaCB7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0oaGVhZGVyLWhlaWdodCk7XG4gICAgfVxuXG4gICAgLmFnLWZpbHRlci10b29scGFuZWwtc2VhcmNoLWlucHV0IHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBoZWlnaHQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiA0O1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBtYXJnaW4tcmlnaHQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKSk7XG4gICAgfVxuXG4gICAgLmFnLWZpbHRlci10b29scGFuZWwtZ3JvdXAtbGV2ZWwtMCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihzZWNvbmRhcnksIHRvcCk7XG4gICAgfVxuXG4gICAgLmFnLWZpbHRlci10b29scGFuZWwtZXhwYW5kLFxuICAgIC5hZy1maWx0ZXItdG9vbHBhbmVsLWdyb3VwLXRpdGxlLWJhci1pY29uIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKCggbWFyZ2luLXJpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpICkpO1xuICAgIH1cblxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTAge1xuICAgICAgICAuYWctZmlsdGVyLXRvb2xwYW5lbC1ncm91cC1sZXZlbC0jeyRpfSB7XG4gICAgICAgICAgICAuYWctZmlsdGVyLXRvb2xwYW5lbC1ncm91cC1sZXZlbC0jeyRpfS1oZWFkZXIge1xuICAgICAgICAgICAgICAgICYuYWctZmlsdGVyLXRvb2xwYW5lbC1ncm91cC10aXRsZS1iYXIgeyBcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFnLWZpbHRlci10b29scGFuZWwtZ3JvdXAtbGV2ZWwtI3skaSArIDF9LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKChcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBhZy1wYXJhbShmaWx0ZXItdG9vbC1wYW5lbC1ncm91cC1pbmRlbnQpICogJGkgKyBhZy1wYXJhbShncmlkLXNpemUpXG4gICAgICAgICAgICAgICAgKSk7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLWZpbHRlci10b29scGFuZWwtaW5zdGFuY2UtaGVhZGVyLmFnLWZpbHRlci10b29scGFuZWwtZ3JvdXAtbGV2ZWwtMS1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgfVxuXG4gICAgLmFnLWZpbHRlci10b29scGFuZWwtaW5zdGFuY2UtZmlsdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKHByaW1hcnksICh0b3AsIGJvdHRvbSkpO1xuICAgICAgICBwYWRkaW5nLXRvcDogYWctcGFyYW0oZ3JpZC1zaXplKTtcbiAgICB9XG5cbiAgICAuYWctZmlsdGVyLXRvb2xwYW5lbC1pbnN0YW5jZS1oZWFkZXItaWNvbiB7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgobWFyZ2luLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkpKTtcbiAgICB9XG59XG4iLCJcbkBtaXhpbiBhZy10aGVtZS1iYXNlLXBhcnQtY29sdW1ucy10b29sLXBhbmVsIHtcbiAgICBcbiAgICAuYWctcGl2b3QtbW9kZS1wYW5lbCB7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0oaGVhZGVyLWhlaWdodCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmFnLXBpdm90LW1vZGUtc2VsZWN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBtYXJnaW4tbGVmdDogYWctcGFyYW0od2lkZ2V0LWNvbnRhaW5lci1ob3Jpem9udGFsLXBhZGRpbmcpICkpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGFnLWtleWJvYXJkLWZvY3VzKChhZy1jb2x1bW4tc2VsZWN0LWhlYWRlciksIDRweCk7XG4gICAgXG4gICAgLmFnLWNvbHVtbi1zZWxlY3QtaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShoZWFkZXItaGVpZ2h0KTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCBhZy1wYXJhbSh3aWRnZXQtY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZyk7XG5cbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKHNlY29uZGFyeSwgYm90dG9tKTtcbiAgICB9XG4gICAgXG4gICAgLmFnLWNvbHVtbi1wYW5lbC1jb2x1bW4tc2VsZWN0IHtcbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKHNlY29uZGFyeSwgKGJvdHRvbSwgdG9wKSk7XG4gICAgfVxuXG4gICAgLmFnLWNvbHVtbi1ncm91cC1pY29ucyxcbiAgICAuYWctY29sdW1uLXNlbGVjdC1oZWFkZXItaWNvbiB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBzZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgfVxufSIsIkBtaXhpbiBhZy10aGVtZS1iYXNlLXBhcnQtaGVhZGVyIHtcblxuICAgIC5hZy1oZWFkZXIge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBoZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihjcml0aWNhbCwgYm90dG9tKTtcbiAgICB9XG5cbiAgICAuYWctaGVhZGVyLXJvdyB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBoZWFkZXItZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLXBpbm5lZC1yaWdodC1oZWFkZXIge1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIoY3JpdGljYWwsIGxlZnQpO1xuICAgIH1cblxuICAgIC5hZy1waW5uZWQtbGVmdC1oZWFkZXIge1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIoY3JpdGljYWwsIHJpZ2h0KTtcbiAgICB9XG5cbiAgICAuYWctaGVhZGVyLXJvdyB7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0oaGVhZGVyLWhlaWdodCk7XG4gICAgfVxuXG4gICAgLmFnLWhlYWRlci1jZWxsOm5vdCguYWctcmlnaHQtYWxpZ25lZC1oZWFkZXIpIC5hZy1oZWFkZXItbGFiZWwtaWNvbiB7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgoIG1hcmdpbi1sZWZ0OiBhZy1wYXJhbShncmlkLXNpemUpICkpO1xuICAgIH1cblxuICAgIC5hZy1oZWFkZXItY2VsbC5hZy1yaWdodC1hbGlnbmVkLWhlYWRlciAuYWctaGVhZGVyLWxhYmVsLWljb24ge1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBtYXJnaW4tcmlnaHQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKSk7XG4gICAgfVxuXG4gICAgLmFnLWhlYWRlci1jZWxsLFxuICAgIC5hZy1oZWFkZXItZ3JvdXAtY2VsbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogYWctcGFyYW0oY2VsbC1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZyk7XG5cbiAgICAgICAgJi5hZy1oZWFkZXItY2VsbC1tb3Zpbmcge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgaGVhZGVyLWNlbGwtbW92aW5nLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYWcta2V5Ym9hcmQtZm9jdXMoKGFnLWhlYWRlci1jZWxsLCBhZy1oZWFkZXItZ3JvdXAtY2VsbCksIDRweCk7XG5cbiAgICAuYWctaGVhZGVyLWljb24ge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgc2Vjb25kYXJ5LWZvcmVncm91bmQtY29sb3IpO1xuICAgIH1cblxuICAgIC5hZy1oZWFkZXItZXhwYW5kLWljb24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgoIHBhZGRpbmctbGVmdDogNHB4ICkpO1xuICAgIH1cblxuICAgIC5hZy1oZWFkZXItcm93Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgLmFnLWhlYWRlci1jZWxsLFxuICAgICAgICAuYWctaGVhZGVyLWdyb3VwLWNlbGwuYWctaGVhZGVyLWdyb3VwLWNlbGwtd2l0aC1ncm91cCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIoY3JpdGljYWwsIHRvcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIGxvZ2ljIHdpdGggOm5vdCguYWctY29sdW1uLXJlc2l6aW5nKSBpcyB0byBwcmV2ZW50IGEgbW91c2VvdmVyIGVmZmVjdFxuICAgIC8vIGJlaW5nIGFwcGxpZWQgdG8gdGhlIGFkamFjZW50IGNlbGwgYXMgdGhlIHVzZXIgcmVzaXplcyBhIGNlbGwsIGJlY2F1c2VcbiAgICAvLyBkdXJpbmcgYSByZXNpemUsIHRoZSBtb3VzZSB3aWxsIG1vbWVudGFyaWx5IG1vdmUgb3ZlciB0aGUgbmVpZ2hib3VyaW5nIGNlbGxcbiAgICAuYWctaGVhZGVyLWdyb3VwLWNlbGw6bm90KC5hZy1jb2x1bW4tcmVzaXppbmcpICsgLmFnLWhlYWRlci1ncm91cC1jZWxsLFxuICAgIC5hZy1oZWFkZXItY2VsbDpub3QoLmFnLWNvbHVtbi1yZXNpemluZykgKyAuYWctaGVhZGVyLWNlbGwsXG4gICAgLmFnLWhlYWRlci1ncm91cC1jZWxsOmZpcnN0LW9mLXR5cGUsXG4gICAgLmFnLWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBAaWYgKGFnLXBhcmFtLWlzLXNldChoZWFkZXItY2VsbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKSBhbmQgYWctcGFyYW1zLWFyZS1kaWZmZXJlbnQoaGVhZGVyLWNlbGwtaG92ZXItYmFja2dyb3VuZC1jb2xvciwgaGVhZGVyLWJhY2tncm91bmQtY29sb3IpKSB7XG4gICAgICAgICAgICAmOm5vdCguYWctaGVhZGVyLWNlbGwtbW92aW5nKTpob3ZlcixcbiAgICAgICAgICAgICYuYWctY29sdW1uLXJlc2l6aW5nIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBoZWFkZXItY2VsbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiBhZy1wYXJhbShoZWFkZXItY29sdW1uLXNlcGFyYXRvcikge1xuICAgICAgICAuYWctaGVhZGVyLWNlbGw6OmFmdGVyLFxuICAgICAgICAuYWctaGVhZGVyLWdyb3VwLWNlbGw6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogYWctcGFyYW0oaGVhZGVyLWNvbHVtbi1zZXBhcmF0b3Itd2lkdGgpO1xuICAgICAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShoZWFkZXItY29sdW1uLXNlcGFyYXRvci1oZWlnaHQpO1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtICN7YWctcGFyYW0oaGVhZGVyLWNvbHVtbi1zZXBhcmF0b3ItaGVpZ2h0KSAvIDJ9KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGhlYWRlci1jb2x1bW4tc2VwYXJhdG9yLWNvbG9yKTtcblxuICAgICAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKCggcmlnaHQ6IDAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgYWctcGFyYW0oaGVhZGVyLWNvbHVtbi1yZXNpemUtaGFuZGxlKSB7XG4gICAgICAgIC5hZy1oZWFkZXItY2VsbC1yZXNpemUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYWctaGVhZGVyLWNlbGwtcmVzaXplOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAje2FnLXBhcmFtKGhlYWRlci1jb2x1bW4tcmVzaXplLWhhbmRsZS13aWR0aCkgLyAyfSk7XG4gICAgICAgICAgICB3aWR0aDogYWctcGFyYW0oaGVhZGVyLWNvbHVtbi1yZXNpemUtaGFuZGxlLXdpZHRoKTtcbiAgICAgICAgICAgIGhlaWdodDogYWctcGFyYW0oaGVhZGVyLWNvbHVtbi1yZXNpemUtaGFuZGxlLWhlaWdodCk7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gI3thZy1wYXJhbShoZWFkZXItY29sdW1uLXJlc2l6ZS1oYW5kbGUtaGVpZ2h0KSAvIDJ9KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGhlYWRlci1jb2x1bW4tcmVzaXplLWhhbmRsZS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuYWctcGlubmVkLXJpZ2h0LWhlYWRlciAuYWctaGVhZGVyLWNlbGwtcmVzaXplOjphZnRlciB7XG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtICN7YWctcGFyYW0oaGVhZGVyLWNvbHVtbi1yZXNpemUtaGFuZGxlLXdpZHRoKX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLWhlYWRlci1zZWxlY3QtYWxsIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKCggbWFyZ2luLXJpZ2h0OiBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZykgKSk7XG4gICAgfVxuXG4gICAgLmFnLWZsb2F0aW5nLWZpbHRlci1idXR0b24ge1xuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBtYXJnaW4tbGVmdDogYWctcGFyYW0oZ3JpZC1zaXplKSAqIDMgKSk7XG4gICAgfVxuXG4gICAgLmFnLWZsb2F0aW5nLWZpbHRlci1idXR0b24tYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgYWctaW5oZXJpdC10ZXh0LXN0eWxlcygpO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBoZWlnaHQ6IGFnLXBhcmFtKGljb24tc2l6ZSk7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiBhZy1wYXJhbShpY29uLXNpemUpO1xuICAgIH1cblxuICAgIC5hZy1maWx0ZXItbG9hZGluZyB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGNvbnRyb2wtcGFuZWwtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogYWctcGFyYW0od2lkZ2V0LWNvbnRhaW5lci12ZXJ0aWNhbC1wYWRkaW5nKSBhZy1wYXJhbSh3aWRnZXQtY29udGFpbmVyLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxufVxuIiwiXG5AbWl4aW4gYWctdGhlbWUtYmFzZS1wYXJ0LWZvb3RlciB7XG4gICAgXG4gICAgLmFnLXBhZ2luZy1wYW5lbCB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLXRvcC1jb2xvciwgYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIHNlY29uZGFyeS1mb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgaGVpZ2h0OiBhZy1wYXJhbShoZWFkZXItaGVpZ2h0KTtcbiAgICAgICAgLy8gcGFkZGluZzogMCBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZyk7XG5cbiAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhZy1wYXJhbShjZWxsLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctcGFnaW5nLWJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogYWctcGFyYW0oaWNvbi1zaXplKTtcbiAgICB9XG4gICAgLmFnLWRpc2FibGVkIC5hZy1wYWdpbmctYnV0dG9uIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgIC5hZy1wYWdpbmctYnV0dG9uLXdyYXBwZXIuYWctZGlzYWJsZWQge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgZGlzYWJsZWQtZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICAuYWctcGFnaW5nLWJ1dHRvbi13cmFwcGVyLCAuYWctcGFnaW5nLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwIGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgfVxuXG4gICAgLmFnLXN0YXR1cy1iYXIge1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIocHJpbWFyeSwgdG9wKTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIGRpc2FibGVkLWZvcmVncm91bmQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpICogNDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBhZy1wYXJhbShncmlkLXNpemUpICogNDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG5cbiAgICAuYWctc3RhdHVzLW5hbWUtdmFsdWUtdmFsdWUge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLXN0YXR1cy1iYXItY2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5hZy1zdGF0dXMtbmFtZS12YWx1ZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhZy1wYXJhbShncmlkLXNpemUpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgICAgIHBhZGRpbmctdG9wOiBhZy1wYXJhbShncmlkLXNpemUpICogMjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyO1xuICAgIH1cblxufVxuIiwiXG5AbWl4aW4gYWctdGhlbWUtYmFzZS1wYXJ0LWNvbHVtbi1kcm9wIHtcblxuICAgIC8vIENFTEwgKFNIQVJFRClcblxuICAgIC5hZy1jb2x1bW4tZHJvcC1jZWxsIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZCwgY2hpcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogYWctcGFyYW0oZ3JpZC1zaXplKSAqIDQ7XG4gICAgICAgIGhlaWdodDogYWctcGFyYW0oZ3JpZC1zaXplKSAqIDQ7XG4gICAgICAgIHBhZGRpbmc6IDAgYWctcGFyYW0oZ3JpZC1zaXplKSAvIDI7XG4gICAgfVxuXG4gICAgLmFnLWNvbHVtbi1kcm9wLWNlbGwtdGV4dCB7XG4gICAgICAgIG1hcmdpbjogMCBhZy1wYXJhbShncmlkLXNpemUpO1xuICAgIH1cblxuICAgIC5hZy1jb2x1bW4tZHJvcC1jZWxsLWJ1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogYWctcGFyYW0oZ3JpZC1zaXplKSAqIDQ7XG5cbiAgICAgICAgbWFyZ2luOiAwIGFnLXBhcmFtKGdyaWQtc2l6ZSkgLyAyO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgc2Vjb25kYXJ5LWZvcmVncm91bmQtY29sb3IpO1xuICAgIH1cbiAgICBcbiAgICAuYWctY29sdW1uLWRyb3AtY2VsbC1kcmFnLWhhbmRsZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhZy1wYXJhbShncmlkLXNpemUpICogMjtcbiAgICB9XG5cbiAgICAuYWctY29sdW1uLWRyb3AtY2VsbC1naG9zdCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG5cbiAgICAvLyBIT1JJWk9OVEFMIENPTFVNTiBEUk9QXG4gICAgXG4gICAgLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBjb250cm9sLXBhbmVsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgc2Vjb25kYXJ5LWZvcmVncm91bmQtY29sb3IpO1xuICAgICAgICBoZWlnaHQ6IGFnLXBhcmFtKHJvdy1oZWlnaHQpO1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIocHJpbWFyeSwgYm90dG9tKTtcblxuICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKCBwYWRkaW5nLWxlZnQ6IGFnLXBhcmFtKGNlbGwtaG9yaXpvbnRhbC1wYWRkaW5nKSApKTtcbiAgICB9XG4gICAgXG4gICAgLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwtaGFsZi13aWR0aDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgQGlmIGFnLXBhcmFtKGJvcmRlcnMpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgoYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHgpLCAkY29sb3ItcGFyYW06IGJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctY29sdW1uLWRyb3AtaG9yaXpvbnRhbC1jZWxsLXNlcGFyYXRvciB7XG4gICAgICAgIG1hcmdpbjogMCBhZy1wYXJhbShncmlkLXNpemUpO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgc2Vjb25kYXJ5LWZvcmVncm91bmQtY29sb3IpO1xuICAgIH1cblxuICAgIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsLWVtcHR5LW1lc3NhZ2Uge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgZGlzYWJsZWQtZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwtaWNvbiB7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgoIG1hcmdpbi1yaWdodDogYWctcGFyYW0oY2VsbC1ob3Jpem9udGFsLXBhZGRpbmcpICkpO1xuICAgIH1cblxuICAgIC8vIFZFUlRJQ0FMIENPTFVNTiBEUk9QXG5cbiAgICAuYWctY29sdW1uLWRyb3AtdmVydGljYWwtbGlzdCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBhZy1wYXJhbShncmlkLXNpemUpO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgfVxuXG4gICAgLmFnLWNvbHVtbi1kcm9wLXZlcnRpY2FsLWNlbGwge1xuICAgICAgICBtYXJnaW4tdG9wOiBhZy1wYXJhbShncmlkLXNpemUpO1xuICAgIH1cblxuICAgIC5hZy1jb2x1bW4tZHJvcC12ZXJ0aWNhbCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICBcbiAgICAgICAgQGluY2x1ZGUgYWctYm9yZGVyKHNlY29uZGFyeSwgYm90dG9tKTtcbiAgICAgICAgJi5hZy1sYXN0LWNvbHVtbi1kcm9wIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihzZWNvbmRhcnksIGJvdHRvbSwgJG5vbmU6IHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLWNvbHVtbi1kcm9wLXZlcnRpY2FsLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYWctcGFyYW0oZ3JpZC1zaXplKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpO1xuICAgIH1cblxuICAgIC5hZy1jb2x1bW4tZHJvcC12ZXJ0aWNhbC1saXN0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5hZy1jb2x1bW4tZHJvcC12ZXJ0aWNhbC1lbXB0eS1tZXNzYWdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBkaXNhYmxlZC1mb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLXRvcDogYWctcGFyYW0oZ3JpZC1zaXplKTtcbiAgICB9XG5cbiAgICAuYWctc2VsZWN0LWFnZy1mdW5jLXBvcHVwIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY2FyZCgpO1xuXG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQsIGJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBoZWlnaHQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiA1ICogMy41O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5hZy1zZWxlY3QtYWdnLWZ1bmMtdmlydHVhbC1saXN0LWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpICogNTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBhZy1wYXJhbShncmlkLXNpemUpICogMjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHNlbGVjdGVkLXJvdy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBtaXhpbiBhZy10aGVtZS1iYXNlLXBhcnQtY2hhcnRzIHtcbiAgICAuYWctY2hhcnQtbWVudSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGFnLXBhcmFtKGNhcmQtcmFkaXVzKTtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZCwgYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLWNoYXJ0LW1lbnUtaWNvbiB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgbWFyZ2luOiAycHggMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBhZy1wYXJhbShjYXJkLXJhZGl1cyk7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBzZWNvbmRhcnktZm9yZWdyb3VuZC1jb2xvcik7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLWNoYXJ0LW1pbmktdGh1bWJuYWlsIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1jb2xvciwgc2Vjb25kYXJ5LWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG5cbiAgICAgICAgLy8gc3BlY2lmaWMgc3R5bGUgdG8gYXBwbHkgd2hlbiB0aGVyZSBhcmUgMyBpdGVtcyBpbiB0aGUgcm93XG4gICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMyksXG4gICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMykgfiAuYWctY2hhcnQtbWluaS10aHVtYm5haWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgobWFyZ2luLWxlZnQ6IDApKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy10aGVtZS1ydGwoKG1hcmdpbi1yaWdodDogMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hZy1zZWxlY3RlZCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsIG1pbmljaGFydC1zZWxlY3RlZC1jaGFydC1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctY2hhcnQtc2V0dGluZ3MtY2FyZC1pdGVtIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZCwgZm9yZWdyb3VuZC1jb2xvcik7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAgICAgJi5hZy1zZWxlY3RlZCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBtaW5pY2hhcnQtc2VsZWN0ZWQtcGFnZS1jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctY2hhcnQtZGF0YS1jb2x1bW4tZHJhZy1oYW5kbGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogYWctcGFyYW0oZ3JpZC1zaXplKTtcbiAgICB9XG5cbiAgICAuYWctY2hhcnRzLXNldHRpbmdzLWdyb3VwLXRpdGxlLWJhcixcbiAgICAuYWctY2hhcnRzLWRhdGEtZ3JvdXAtdGl0bGUtYmFyLFxuICAgIC5hZy1jaGFydHMtZm9ybWF0LXRvcC1sZXZlbC1ncm91cC10aXRsZS1iYXIge1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIoc2Vjb25kYXJ5LCB0b3ApO1xuICAgIH1cblxuICAgIC5hZy1jaGFydHMtc2V0dGluZ3MtZ3JvdXAtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogYWctcGFyYW0oZ3JpZC1zaXplKTtcbiAgICB9XG5cbiAgICAuYWctY2hhcnRzLWRhdGEtZ3JvdXAtY29udGFpbmVyIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdmVydGljYWwtd2lkZ2V0LWNvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIC5hZy1jaGFydHMtZm9ybWF0LXRvcC1sZXZlbC1ncm91cC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogYWctcGFyYW0oZ3JpZC1zaXplKSAqIDI7XG4gICAgICAgIHBhZGRpbmc6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgfVxuXG4gICAgLmFnLWNoYXJ0cy1mb3JtYXQtdG9wLWxldmVsLWdyb3VwLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IGFnLXBhcmFtKGdyaWQtc2l6ZSkgMDtcbiAgICB9XG5cbiAgICAuYWctY2hhcnRzLWZvcm1hdC1zdWItbGV2ZWwtZ3JvdXAtY29udGFpbmVyIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdmVydGljYWwtd2lkZ2V0LWNvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIC5hZy1jaGFydHMtZ3JvdXAtY29udGFpbmVyLmFnLWdyb3VwLWNvbnRhaW5lci1ob3Jpem9udGFsIHtcbiAgICAgICAgcGFkZGluZzogYWctcGFyYW0oZ3JpZC1zaXplKTtcbiAgICB9XG5cbiAgICAuYWctY2hhcnQtZGF0YS1zZWN0aW9uLFxuICAgIC5hZy1jaGFydC1mb3JtYXQtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuYWctY2hhcnQtbWVudS1wYW5lbCB7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgoYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCksICRjb2xvci1wYXJhbTogYm9yZGVyLWNvbG9yKTtcblxuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBjb250cm9sLXBhbmVsLWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cbn1cbiIsIkBtaXhpbiBhZy10aGVtZS1iYXNlLXBhcnQtZGF0ZS10aW1lIHtcblxuICAgIC5hZy1kYXRlLXRpbWUtbGlzdC1wYWdlLWVudHJ5LWlzLXBhZGRpbmcge1xuICAgICAgICAvLyBUT0RPIGFwcGx5IHBhZGRpbmcgc3R5bGUgKGdyZXllZCBvdXQpIGluIHRoZW1lIGNzcywgdXNpbmdcbiAgICAgICAgLy8gbWl4aW4gbGlrZSBmb3IgYWctbmF0aXZlLWlucHV0cygpXG4gICAgfVxuXG4gICAgLmFnLWRhdGUtdGltZS1saXN0LXBhZ2UtdGl0bGUge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYWctZGF0ZS10aW1lLWxpc3QtcGFnZS1jb2x1bW4tbGFiZWwge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmFnLWRhdGUtdGltZS1saXN0LXBhZ2UtZW50cnkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi9hZy10aGVtZS1iYXNlL3Nhc3MvYWctdGhlbWUtYmFzZVwiO1xuQGltcG9ydCBcIi4vYWctdGhlbWUtYWxwaW5lLWRlZmF1bHQtcGFyYW1zXCI7XG5cbkBtaXhpbiBhZy10aGVtZS1hbHBpbmUoJHBhcmFtczogKCkpIHtcbiAgICBAaW5jbHVkZSBhZy1hbGxvdy1jb2xvci1wYXJhbS1hY2Nlc3Mtd2l0aC1hZy1wYXJhbShmYWxzZSk7XG5cbiAgICAkcGFyYW1zOiBhZy1wcm9jZXNzLXRoZW1lLXZhcmlhYmxlcygkcGFyYW1zLCAkYWctdGhlbWUtYWxwaW5lLWRlZmF1bHQtcGFyYW1zKTtcbiAgICBAaW5jbHVkZSBhZy10aGVtZS1iYXNlKCRwYXJhbXMpO1xuXG4gICAgLmFnLWZpbHRlci10b29scGFuZWwtaGVhZGVyLFxuICAgIC5hZy1maWx0ZXItdG9vbHBhbmVsLXNlYXJjaCxcbiAgICAuYWctc3RhdHVzLWJhcixcbiAgICAuYWctaGVhZGVyLXJvdyxcbiAgICAuYWctcGFuZWwtdGl0bGUtYmFyLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIGhlYWRlci1mb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAlYWctcGlubmVkLXJvdy1lbmQge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLWx0ciB7XG4gICAgICAgIC5hZy1waW5uZWQtcmlnaHQtaGVhZGVyIC5hZy1oZWFkZXItcm93OmFmdGVyIHtcbiAgICAgICAgICAgIEBleHRlbmQgJWFnLXBpbm5lZC1yb3ctZW5kO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctcnRsIHtcbiAgICAgICAgLmFnLXBpbm5lZC1sZWZ0LWhlYWRlciAuYWctaGVhZGVyLXJvdzpiZWZvcmUge1xuICAgICAgICAgICAgQGV4dGVuZCAlYWctcGlubmVkLXJvdy1lbmQ7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLXJvdyB7XG4gICAgICAgIGZvbnQtc2l6ZTogYWctcGFyYW0oZm9udC1zaXplKSArIDE7XG4gICAgfVxuXG4gICAgJWFnLXRleHQtaW5wdXQge1xuICAgICAgICBtaW4taGVpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpICogNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogYWctcGFyYW0oYm9yZGVyLXJhZGl1cyk7XG5cbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKChcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogYWctcGFyYW0oZ3JpZC1zaXplKSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgLmFnLXRhYiB7XG4gICAgICAgIHBhZGRpbmc6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAxLjU7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XG4gICAgfVxuICAgIC5hZy10YWItc2VsZWN0ZWQge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgYWxwaW5lLWFjdGl2ZS1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLW1lbnUge1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBjb250cm9sLXBhbmVsLWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cblxuICAgIC5hZy1tZW51LWhlYWRlciB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGNvbnRyb2wtcGFuZWwtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcHg7IC8vIGhhY2sgdG8gYWxpZ24gY29sdW1uIG1lbnUgdGFiIGhlYWRlciBib3JkZXIgd2l0aCBoZWFkZXIgcm93IGJvcmRlclxuICAgIH1cblxuICAgIC5hZy10YWJzLWhlYWRlciB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWJvcmRlcihwcmltYXJ5LCBib3R0b20pO1xuICAgIH1cblxuICAgIC5hZy1jaGFydHMtc2V0dGluZ3MtZ3JvdXAtdGl0bGUtYmFyLFxuICAgIC5hZy1jaGFydHMtZGF0YS1ncm91cC10aXRsZS1iYXIsXG4gICAgLmFnLWNoYXJ0cy1mb3JtYXQtdG9wLWxldmVsLWdyb3VwLXRpdGxlLWJhciB7XG4gICAgICAgIHBhZGRpbmc6IGFnLXBhcmFtKGdyaWQtc2l6ZSkgYWctcGFyYW0oZ3JpZC1zaXplKSAqIDI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBhZy1wYXJhbShpY29uLXNpemUpICsgYWctcGFyYW0oZ3JpZC1zaXplKSAtIDI7XG4gICAgfVxuXG4gICAgLmFnLWNoYXJ0LW1pbmktdGh1bWJuYWlsIHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmFnLWNoYXJ0LXNldHRpbmdzLW5hdi1iYXIge1xuICAgICAgICBAaW5jbHVkZSBhZy1ib3JkZXIoc2Vjb25kYXJ5LCB0b3ApO1xuICAgIH1cblxuICAgIC5hZy1ncm91cC10aXRsZS1iYXItaWNvbiB7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgobWFyZ2luLXJpZ2h0OiBhZy1wYXJhbShncmlkLXNpemUpKSlcbiAgICB9XG5cbiAgICAuYWctY2hhcnRzLWZvcm1hdC10b3AtbGV2ZWwtZ3JvdXAtdG9vbGJhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgICAgIEBpbmNsdWRlIGFnLXRoZW1lLXJ0bCgocGFkZGluZy1sZWZ0OiBhZy1wYXJhbShpY29uLXNpemUpIC8gMiArIGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyKSk7XG4gICAgfVxuXG4gICAgLmFnLWNoYXJ0cy1mb3JtYXQtc3ViLWxldmVsLWdyb3VwIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGRhc2hlZCAxcHg7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJvcmRlci1sZWZ0LWNvbG9yLCBib3JkZXItY29sb3IpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyO1xuICAgIH1cblxuICAgIC5hZy1jaGFydHMtZm9ybWF0LXN1Yi1sZXZlbC1ncm91cC10aXRsZS1iYXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuXG4gICAgLmFnLWNoYXJ0cy1mb3JtYXQtc3ViLWxldmVsLWdyb3VwLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5hZy1jaGFydHMtZm9ybWF0LXN1Yi1sZXZlbC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5hZy1kbmQtZ2hvc3Qge1xuICAgICAgICBmb250LXNpemU6IGFnLXBhcmFtKGZvbnQtc2l6ZSkgLSAxO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuICAgIC5hZy1zaWRlLWJ1dHRvbnMge1xuICAgICAgICB3aWR0aDogYWctcGFyYW0oZ3JpZC1zaXplKSAqIDU7XG4gICAgfVxuXG4gICAgLmFnLXN0YW5kYXJkLWJ1dHRvbiB7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogYWctcGFyYW0oYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsIGFscGluZS1hY3RpdmUtY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgYWxwaW5lLWFjdGl2ZS1jb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiBhZy1wYXJhbShncmlkLXNpemUpIGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLWNvbG9yLCBhbHBpbmUtYWN0aXZlLWNvbG9yKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIHJvdy1ob3Zlci1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShib3JkZXItY29sb3IsIGFscGluZS1hY3RpdmUtY29sb3IpO1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgYWxwaW5lLWFjdGl2ZS1jb2xvcik7XG4gICAgICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShjb2xvciwgYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBkaXNhYmxlZC1mb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGJhY2tncm91bmQtY29sb3IsIGlucHV0LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLWNvbG9yLCBpbnB1dC1kaXNhYmxlZC1ib3JkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLW1lbnUtaGVhZGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICB9XG5cbiAgICAuYWctY29sdW1uLWRyb3AtdmVydGljYWwge1xuICAgICAgICBtaW4taGVpZ2h0OiA3NXB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxNzVweDtcbiAgICB9XG5cbiAgICAuYWctdG9vbC1wYW5lbC13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cblxuICAgIC5hZy1jb2x1bW4tZHJvcC12ZXJ0aWNhbC10aXRsZS1iYXIge1xuICAgICAgICBwYWRkaW5nOiBhZy1wYXJhbShncmlkLXNpemUpICogMjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICAuYWctY29sdW1uLWRyb3AtdmVydGljYWwtZW1wdHktbWVzc2FnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogZGFzaGVkIDFweDtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLWNvbG9yLCBib3JkZXItY29sb3IpO1xuICAgICAgICBtYXJnaW46IGFnLXBhcmFtKGdyaWQtc2l6ZSkgKiAyO1xuICAgICAgICBwYWRkaW5nOiBhZy1wYXJhbShncmlkLXNpemUpICogMjtcbiAgICB9XG5cbiAgICAuYWctY29sdW1uLWRyb3AtZW1wdHktbWVzc2FnZSB7XG4gICAgICAgIEBpbmNsdWRlIGFnLWNvbG9yLXByb3BlcnR5KGNvbG9yLCBmb3JlZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG5cbiAgICAuYWctc3RhdHVzLWJhciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgLmFnLXN0YXR1cy1uYW1lLXZhbHVlLXZhbHVlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICAuYWctcGFnaW5nLW51bWJlciwgLmFnLXBhZ2luZy1yb3ctc3VtbWFyeS1wYW5lbC1udW1iZXIge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuICAgIC5hZy1jb2x1bW4tZHJvcC1jZWxsLWJ1dHRvbiB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWctaGVhZGVyLWNlbGwtbWVudS1idXR0b24sXG4gICAgLmFnLXNpZGUtYnV0dG9uLWJ1dHRvbixcbiAgICAuYWctdGFiLFxuICAgIC5hZy1wYW5lbC10aXRsZS1iYXItYnV0dG9uLFxuICAgIC5hZy1oZWFkZXItZXhwYW5kLWljb24sXG4gICAgLmFnLWNvbHVtbi1ncm91cC1pY29ucyxcbiAgICAuYWctZ3JvdXAtZXhwYW5kZWQgLmFnLWljb24sXG4gICAgLmFnLWdyb3VwLWNvbnRyYWN0ZWQgLmFnLWljb24sXG4gICAgLmFnLWNoYXJ0LXNldHRpbmdzLXByZXYsXG4gICAgLmFnLWNoYXJ0LXNldHRpbmdzLW5leHQsXG4gICAgLmFnLWdyb3VwLXRpdGxlLWJhci1pY29uLFxuICAgIC5hZy1jb2x1bW4tc2VsZWN0LWhlYWRlci1pY29uLFxuICAgIC5hZy1mbG9hdGluZy1maWx0ZXItYnV0dG9uLWJ1dHRvbixcbiAgICAuYWctZmlsdGVyLXRvb2xwYW5lbC1leHBhbmQsXG4gICAgLmFnLWNoYXJ0LW1lbnUtaWNvbiB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoY29sb3IsIGFscGluZS1hY3RpdmUtY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFnLWNoYXJ0LXNldHRpbmdzLWNhcmQtaXRlbS5hZy1ub3Qtc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjM1O1xuICAgIH1cblxuICAgIC5hZy1wYW5lbC10aXRsZS1iYXItYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgYWctdGhlbWUtcnRsKChcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhZy1wYXJhbShncmlkLXNpemUpICogMixcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYWctcGFyYW0oZ3JpZC1zaXplKVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICAuYWctZmlsdGVyLXRvb2xwYW5lbC1ncm91cC1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGFnLXBhcmFtKGdyaWQtc2l6ZSk7XG4gICAgfVxuXG4gICAgLmFnLWZpbHRlci10b29scGFuZWwtaW5zdGFuY2UtZmlsdGVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBAaW5jbHVkZSBhZy1jb2xvci1wcm9wZXJ0eShiYWNrZ3JvdW5kLWNvbG9yLCBjb250cm9sLXBhbmVsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItbGVmdDogZGFzaGVkIDFweDtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYm9yZGVyLWxlZnQtY29sb3IsIGJvcmRlci1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhZy1wYXJhbShncmlkLXNpemUpICsgYWctcGFyYW0oaWNvbi1zaXplKSAvIDIgLSAxcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogYWctcGFyYW0oaWNvbi1zaXplKSAvIDI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYWctcGFyYW0oZ3JpZC1zaXplKSAqIDI7XG4gICAgfVxuXG4gICAgLmFnLXNldC1maWx0ZXItbGlzdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiBhZy1wYXJhbShncmlkLXNpemUpIC8gMjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGFnLXBhcmFtKGdyaWQtc2l6ZSkgLyAyO1xuICAgIH1cblxuICAgIC5hZy1vdmVybGF5LW5vLXJvd3Mtd3JhcHBlci5hZy1sYXlvdXQtYXV0by1oZWlnaHQge1xuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB9XG5cbiAgICAuYWctZGF0ZS10aW1lLWxpc3QtcGFnZS1lbnRyeS1pcy1jdXJyZW50IHtcbiAgICAgICAgQGluY2x1ZGUgYWctY29sb3ItcHJvcGVydHkoYmFja2dyb3VuZC1jb2xvciwgYWxwaW5lLWFjdGl2ZS1jb2xvcik7XG4gICAgfVxuICAgIEBpbmNsdWRlIGFnLWFsbG93LWNvbG9yLXBhcmFtLWFjY2Vzcy13aXRoLWFnLXBhcmFtKHRydWUpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-orders',
                templateUrl: './admin-orders.component.html',
                styleUrls: ['./admin-orders.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/admin-sidebar/admin-sidebar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/admin-sidebar/admin-sidebar.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function() { return AdminSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/adminDash"]; };
const _c1 = function () { return ["/productAdd"]; };
const _c2 = function () { return ["/orderdash"]; };
const _c3 = function () { return ["/adminOrder"]; };
const _c4 = function () { return ["/"]; };
const _c5 = function () { return ["/admin"]; };
class AdminSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminSidebarComponent.ɵfac = function AdminSidebarComponent_Factory(t) { return new (t || AdminSidebarComponent)(); };
AdminSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminSidebarComponent, selectors: [["app-admin-sidebar"]], decls: 30, vars: 12, consts: [[1, "sidebar", 2, "margin-left", "-70px"], [1, "widget", "widget-menu", "unstyled"], [1, "active"], [3, "routerLink"], [1, "menu-icon", "icon-dashboard"], [1, "fas", "fa-plus"], [1, "fas", "fa-clipboard-list"], [1, "label", "green", "pull-right"], [1, "fas", "fa-cash-register"], [1, "label", "orange", "pull-right"], [1, "fas", "fa-mobile-alt"], [1, "menu-icon", "icon-signout"]], template: function AdminSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Product List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Customer Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A0 Back to Mobikart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYWRtaW4tc2lkZWJhci9hZG1pbi1zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-sidebar',
                templateUrl: './admin-sidebar.component.html',
                styleUrls: ['./admin-sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/Components/footer/footer.component.ts");






function CartComponent_tr_17_h5_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0 *Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, 500, "\u20B9"), " ");
} }
function CartComponent_tr_17_h5_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 *only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, 500, "\u20B9"));
} }
function CartComponent_tr_17_h5_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stores_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, stores_r1[0].price, "\u20B9"));
} }
function CartComponent_tr_17_h5_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stores_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, stores_r1[0].price + 500, "\u20B9"));
} }
function CartComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_tr_17_h5_13_Template, 6, 4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_tr_17_h5_14_Template, 5, 4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CartComponent_tr_17_h5_16_Template, 3, 4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CartComponent_tr_17_h5_17_Template, 3, 4, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_17_Template_i_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const stores_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.Delete($event, stores_r1[0].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stores_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", stores_r1[0].image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", stores_r1[0].company, "\u00A0", stores_r1[0].name, "\u00A0", stores_r1[0].colour, "\u00A0", stores_r1[0].variant, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 10, stores_r1[0].price, "\u20B9"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", stores_r1[0].price > 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", stores_r1[0].price <= 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", stores_r1[0].price > 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", stores_r1[0].price <= 499);
} }
const _c0 = function () { return ["/shop"]; };
const _c1 = function () { return ["/checkout"]; };
class CartComponent {
    constructor(router) {
        this.router = router;
        this.total = 0;
        this.i = 0;
    }
    DeleteAll($event) {
        localStorage.removeItem(this.key);
        console.log("Key wala Local", JSON.parse(localStorage.getItem(this.key)));
        console.log("User wala Local", JSON.parse(localStorage.getItem('user')));
        window.location.reload();
    }
    Delete($event, namer) {
        console.log(namer);
        this.items = JSON.parse(localStorage.getItem(this.key));
        console.log("Original stored", this.items);
        for (; this.i < this.stored.length; this.i++) {
            if (this.stored[this.i][0].name == namer)
                break;
        }
        //console.log("Index is",this.i)
        this.items.splice(this.i, 1);
        this.stored = this.items;
        localStorage.setItem(this.key, JSON.stringify(this.stored));
        console.log("Items After Splice", this.stored);
        window.location.reload();
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        var user = JSON.parse(localStorage.getItem('user'));
        this.key = user[0].CUSTOMER_ID;
        //console.log("Key ki value",this.key)
        //console.log("CUSTOMER ID Wali Key",this.key[0].CUSTOMER_ID)
        this.stored = JSON.parse(localStorage.getItem(this.key));
        console.log(this.stored);
        if (this.stored != null) {
            for (let i = 0; i < this.stored.length; i++) {
                if (this.stored[i][0].price > 499) {
                    this.total = this.total + this.stored[i][0].price;
                }
                else
                    this.total = this.total + this.stored[i][0].price + 500;
            }
        }
        console.log(this.total);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 54, vars: 10, consts: [[1, "cart_area"], [1, "container"], [1, "cart_inner"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "bottom_button"], [1, "box-1"], ["onmouseover", "this.style.color='White';this.style.backgroundColor ='Red'", "onMouseOut", "this.style.color='Black';this.style.backgroundColor ='White'", 1, "button", 3, "click"], ["src", "../../../assets/broom.png"], [1, "cupon_text", "d-flex", "align-items-center"], ["type", "text", "placeholder", "Coupon Code"], [1, "primary-btn"], [1, "button"], [1, "out_button_area"], [1, ""], [1, "checkout_btn_inner", "d-flex", "align-items-center"], [1, "gray_btn", 3, "routerLink"], [1, "primary-btn", "ml-2", 3, "routerLink", "disabled"], [1, "media"], [1, "d-flex"], ["height", "150px", "alt", "", 3, "src"], [1, "media-body"], [4, "ngIf"], [1, "fas", "fa-trash", 2, "cursor", "pointer", 3, "click"], [2, "color", "green"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delivery Charges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CartComponent_tr_17_Template, 21, 13, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_22_listener($event) { return ctx.DeleteAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0Clear Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Have a Coupon?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Proceed to checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stored);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 5, ctx.total, "\u20B9"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1))("disabled", ctx.stored == null);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".fa-trash[_ngcontent-%COMP%]:hover{\n    color:red\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXRyYXNoOmhvdmVye1xuICAgIGNvbG9yOnJlZFxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






const _c0 = function () { return ["/login"]; };
const _c1 = function () { return ["/"]; };
class ChangePasswordComponent {
    constructor(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.model = {};
    }
    ChangePassword(regForm) {
        var password = this.model.Password;
        var cnfrmpassword = this.model.ConfirmPassword;
        console.log(password, cnfrmpassword);
        if (this.model.Password != this.model.ConfirmPassword) {
            this.passwordalert = "Invalid Password, both the Passwords should be Same";
        }
        else {
            console.log(JSON.stringify(this.model));
            this.http.post('http://localhost:3000/changePassword', JSON.stringify(this.model), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
                this.result = res;
                if (this.result.success == true)
                    this.router.navigate(['/login']);
                else
                    this.passwordalert = "Invalid Password ! Old Password is Incorrect";
            });
        }
    }
    ngOnInit() {
        this.emailer = this.route.snapshot.queryParamMap.get('email');
        this.model["email"] = this.emailer;
        console.log(this.emailer);
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 39, vars: 9, consts: [[1, "hold-transition", "register-page"], [1, "register-box"], [1, "register-logo"], [1, "card"], [1, "card-body", "register-card-body"], [1, "login-box-msg"], [3, "ngSubmit"], ["regForm", "ngForm"], [1, "input-group", "mb-3"], ["type", "password", "id", "Old", "name", "Old", "placeholder", "Old Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-lock"], ["type", "password", "id", "Password", "name", "Password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "ConfirmPassword", "name", "ConfirmPassword", "placeholder", "Retype password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [2, "color", "red"], [1, "row"], [1, "col-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "text-center", 3, "routerLink"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mobi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Kart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Register as a new member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.ChangePassword(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model.Old = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_19_listener($event) { return ctx.model.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_24_listener($event) { return ctx.model.ConfirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Already have an Account: Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Back to Mobikart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Old);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.ConfirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.passwordalert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/Components/footer/footer.component.ts");









function CheckoutComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", s_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r3);
} }
function CheckoutComponent_li_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stores_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stores_r4[0].name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, stores_r4[0].price, "\u20B9"));
} }
class CheckoutComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
            "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
        this.model = {};
        this.pin = "";
        this.locality = "";
        this.address = "";
        this.city = "";
        this.state = "";
        this.type = "";
        this.total = 0;
        this.order = {};
    }
    CheckoutProduct(regform) {
        console.log("chala");
        var loggeduser = JSON.parse(localStorage.getItem('user'));
        console.log("logged user", loggeduser);
        var customer_id = loggeduser[0].CUSTOMER_ID;
        var stored = JSON.parse(localStorage.getItem(customer_id));
        console.log("Stored", stored);
        this.model["customer_id"] = customer_id;
        console.log(customer_id);
        //console.log(JSON.stringify(this.model));
        const data = JSON.stringify(this.model);
        console.log("Data", data);
        this.http.post('http://localhost:3000/updateAddress', data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
            //console.log("Response",res);
        });
        this.order["customer_id"] = customer_id;
        this.order["customer_name"] = loggeduser[0].NAME;
        this.order["payment_mode"] = this.model.payment;
        this.order["email"] = loggeduser[0].EMAIL;
        this.order["phone"] = loggeduser[0].PHONE;
        this.order["product"] = [];
        for (let x = 0; x < stored.length; x++) {
            this.order["product"].push({ product: stored[x][0].company + ' ' + stored[x][0].name + ' ' + stored[x][0].colour + ' ' + stored[x][0].variant, price: stored[x][0].price, image: stored[x][0].image });
        }
        var orderdata = JSON.stringify(this.order);
        console.log(orderdata);
        this.http.post('http://localhost:3000/setOrders', orderdata, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
            this.response = res;
            this.router.navigate(['/confirmation', { time: this.response.purchase_time }]);
        });
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        var loggeduser = JSON.parse(localStorage.getItem('user'));
        var customer_id = loggeduser[0].CUSTOMER_ID;
        this.http.get('http://localhost:3000/getAddress/' + customer_id).subscribe((res) => {
            this.address_data = res;
            console.log("Response init", this.address_data);
            if (this.address_data.success == true) {
                console.log('Response Data', this.address_data.data[0]);
                this.pin = this.address_data.data[0].pincode;
                this.locality = this.address_data.data[0].locality;
                this.address = this.address_data.data[0].address;
                this.city = this.address_data.data[0].city;
                this.state = this.address_data.data[0].state;
                this.type = this.address_data.data[0].address_type;
                this.model = this.address_data.data[0];
            }
            else {
                console.log(res);
            }
        });
        var user = JSON.parse(localStorage.getItem('user'));
        var key = user[0].CUSTOMER_ID;
        //console.log("Key ki value",this.key)
        //console.log("CUSTOMER ID Wali Key",this.key[0].CUSTOMER_ID)
        this.stored = JSON.parse(localStorage.getItem(key));
        console.log("Stored", this.stored);
        for (let i = 0; i < this.stored.length; i++) {
            if (this.stored[i][0].price > 499) {
                this.total = this.total + this.stored[i][0].price;
            }
            else
                this.total = this.total + this.stored[i][0].price + 500;
        }
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 120, vars: 27, consts: [[1, "checkout_area", "section-margin--small"], [1, "container"], [1, "billing_details"], [1, "row"], [1, "row", "contact_form", 3, "ngSubmit"], ["regform", "ngForm"], [1, "col-lg-8"], [1, "field", "col-md-6", "form-group", "p_star"], ["type", "text", "name", "pincode", "id", "pincode", "placeholder", " ", "maxlength", "6", "oninput", "this.value=this.value.replace(/[^0-9]/g,'');", "required", "", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["for", "pincode"], ["type", "text", "name", "locality", "id", "locality", "placeholder", " ", "required", "", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["for", "locality"], [1, "col-md-12", "form-group", "p_star"], ["name", "address", "id", "address", "rows", "1", "placeholder", " ", "required", "", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["id", "state", "name", "state", "required", "", 1, "country_select", 3, "ngModel", "value", "ngModelChange"], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "city", "id", "city", "placeholder", " ", "required", "", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["for", "city"], ["type", "text", "name", "landmark", "id", "landmark", "placeholder", " ", 1, "form-control"], ["for", "landmark"], [1, "col-md-6", "form-group", "p_star"], [1, "radion_btn"], ["type", "radio", "id", "home", "name", "address_type", "value", "home", "required", "", 3, "ngModel", "checked", "ngModelChange"], ["for", "home"], [1, "check"], ["type", "radio", "id", "work", "name", "address_type", "value", "work", "required", "", 3, "ngModel", "checked", "ngModelChange"], ["for", "work"], [1, "col-lg-4"], [1, "order_box"], [1, "list"], ["href", "#"], [4, "ngFor", "ngForOf"], [1, "list", "list_2"], [2, "cursor", "pointer"], [2, "color", "green"], [1, "payment_item"], ["type", "radio", "name", "payment", "id", "Cash", "value", "Cash", "required", "", 3, "ngModel", "ngModelChange"], ["for", "Cash"], [1, "payment_item", "active"], ["type", "radio", "id", "Online", "value", "Online", "name", "payment", "required", "", 3, "ngModel", "ngModelChange"], ["for", "Online"], ["src", "../../../assets/img/product/card.jpg", "alt", ""], [1, "creat_account"], ["type", "checkbox", "id", "f-option4", "name", "selector"], ["for", "f-option4"], [1, "text-center"], [1, "btn", "btn-primary", 3, "disabled"], [3, "value"], [1, "middle"], [1, "last"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.CheckoutProduct(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Billing Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_11_listener($event) { return ctx.model.pincode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_15_listener($event) { return ctx.model.locality = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0Locality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0Address (Area and Street)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_textarea_ngModelChange_21_listener($event) { return ctx.model.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0 Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_select_ngModelChange_25_listener($event) { return ctx.model.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CheckoutComponent_option_28_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_30_listener($event) { return ctx.model.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0City/District/Town");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0Landmark(Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Address Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_43_listener($event) { return ctx.model.address_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "(All day delivery)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_51_listener($event) { return ctx.model.address_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "(Delivery between 10AM-5PM)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Your Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, CheckoutComponent_li_70_Template, 7, 5, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Subtotal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Shipping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u20B9500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "*Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_94_listener($event) { return ctx.model.payment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Cash on Delivery(COD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_102_listener($event) { return ctx.model.payment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Online (Debit/Credit/UPI) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " \u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Pay via PayPal; you can pay with your credit card if you don\u2019t have a PayPal account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "I\u2019ve read and accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "the terms & conditions* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Proceed to Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.pin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.pincode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.locality);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.locality);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.address_type)("checked", ctx.type == "home" ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.address_type)("checked", ctx.type == "work" ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stored);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](77, 21, ctx.total, "\u20B9"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](91, 24, ctx.total, "\u20B9"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.payment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.payment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".field[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column-reverse;\n    margin-bottom: 1em;\n  }\n  \n  label[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n    transition: all 0.2s;\n    touch-action: manipulation;\n  }\n  input[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    border: 0;\n    border-bottom: 1px solid #ccc;\n    font-family: inherit;\n    -webkit-appearance: none;\n    border-radius: 0;\n    padding: 0;\n    cursor: text;\n  }\n  input[_ngcontent-%COMP%]:focus {\n    outline: 0;\n    border-bottom: 1px solid #666;\n  }\n  label[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    font-size: xx-small;\n  }\n  \n  input[_ngcontent-%COMP%]:placeholder-shown    + label[_ngcontent-%COMP%] {\n    cursor: text;\n    max-width: 66.66%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    transform-origin: left bottom;\n    transform: translate(0, 2.125rem) scale(1.5);\n  }\n  \n  [_ngcontent-%COMP%]::-webkit-input-placeholder {\n    opacity: 0;\n    -webkit-transition: inherit;\n    transition: inherit;\n  }\n  \n  input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n    opacity: 1;\n  }\n  \n  input[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%] {\n    transform: translate(0, 0) scale(1);\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7RUFDQTs7Ozs7R0FLQztFQUNEO0lBQ0Usb0JBQW9CO0lBQ3BCLDBCQUEwQjtFQUM1QjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7RUFDZDtFQUVBO0lBQ0UsVUFBVTtJQUNWLDZCQUE2QjtFQUMvQjtFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7RUFDQTs7Ozs7R0FLQztFQUNEO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsNENBQTRDO0VBQzlDO0VBQ0E7OztHQUdDO0VBQ0Q7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO0lBQW5CLG1CQUFtQjtFQUNyQjtFQUNBOztHQUVDO0VBQ0Q7SUFDRSxVQUFVO0VBQ1o7RUFDQTs7OztHQUlDO0VBQ0Q7O0lBRUUsbUNBQW1DO0lBQ25DLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbiAgLyoqXG4gICogQWRkIGEgdHJhbnNpdGlvbiB0byB0aGUgbGFiZWwgYW5kIGlucHV0LlxuICAqIEknbSBub3QgZXZlbiBzdXJlIHRoYXQgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb24gd29ya3Mgb25cbiAgKiBpbnB1dHMsIGJ1dCBoZXksIGl0J3MgbmV3IGFuZCBjb29sIGFuZCBjb3VsZCByZW1vdmUgdGhlIFxuICAqIHBlc2t5IGRlbGF5LlxuICAqL1xuICBsYWJlbCwgaW5wdXQge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB9XG4gIFxuICBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjdXJzb3I6IHRleHQ7XG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2O1xuICB9XG4gIFxuICBsYWJlbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gIH1cbiAgLyoqXG4gICogVHJhbnNsYXRlIGRvd24gYW5kIHNjYWxlIHRoZSBsYWJlbCB1cCB0byBjb3ZlciB0aGUgcGxhY2Vob2xkZXIsXG4gICogd2hlbiBmb2xsb3dpbmcgYW4gaW5wdXQgKHdpdGggcGxhY2Vob2xkZXItc2hvd24gc3VwcG9ydCkuXG4gICogQWxzbyBtYWtlIHN1cmUgdGhlIGxhYmVsIGlzIG9ubHkgb24gb25lIHJvdywgYXQgbWF4IDIvM3JkcyBvZiB0aGVcbiAgKiBmaWVsZOKAlHRvIG1ha2Ugc3VyZSBpdCBzY2FsZXMgcHJvcGVybHkgYW5kIGRvZXNuJ3Qgd3JhcC5cbiAgKi9cbiAgaW5wdXQ6cGxhY2Vob2xkZXItc2hvd24gKyBsYWJlbCB7XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIG1heC13aWR0aDogNjYuNjYlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyLjEyNXJlbSkgc2NhbGUoMS41KTtcbiAgfVxuICAvKipcbiAgKiBCeSBkZWZhdWx0LCB0aGUgcGxhY2Vob2xkZXIgc2hvdWxkIGJlIHRyYW5zcGFyZW50LiBBbHNvLCBpdCBzaG91bGQgXG4gICogaW5oZXJpdCB0aGUgdHJhbnNpdGlvbi5cbiAgKi9cbiAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gIH1cbiAgLyoqXG4gICogU2hvdyB0aGUgcGxhY2Vob2xkZXIgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZC5cbiAgKi9cbiAgaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLyoqXG4gICogV2hlbiB0aGUgZWxlbWVudCBpcyBmb2N1c2VkLCByZW1vdmUgdGhlIGxhYmVsIHRyYW5zZm9ybS5cbiAgKiBBbHNvLCBkbyB0aGlzIHdoZW4gdGhlIHBsYWNlaG9sZGVyIGlzIF9ub3RfIHNob3duLCBpLmUuIHdoZW4gXG4gICogdGhlcmUncyBzb21ldGhpbmcgaW4gdGhlIGlucHV0IGF0IGFsbC5cbiAgKi9cbiAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCxcbiAgaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/confirmation/confirmation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/confirmation/confirmation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/Components/footer/footer.component.ts");








function ConfirmationComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stores_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", stores_r1[0].company, "\u00A0", stores_r1[0].name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 3, stores_r1[0].price, "\u20B9"));
} }
class ConfirmationComponent {
    constructor(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.model = {};
    }
    Shopping() {
        this.router.navigate(['/shop']);
    }
    Invoice($event, divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        var time = this.route.snapshot.paramMap.get('time');
        this.loggeduser = JSON.parse(localStorage.getItem('user'));
        var customer_id = this.loggeduser[0].CUSTOMER_ID;
        this.stored = JSON.parse(localStorage.getItem(customer_id));
        console.log("time", time);
        console.log("Logged User", this.loggeduser);
        console.log("Customer ID", customer_id);
        console.log("stored", this.stored);
        this.http.post('http://localhost:3000/getOrderData', JSON.stringify({ customer: customer_id, puchase_time: time }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
            this.model = res;
            console.log("getOrderData Response", (this.model.data));
            this.newDate = new Date(this.model.data[0].PURCHASE_DATE);
        });
        localStorage.removeItem(customer_id);
    }
}
ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) { return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationComponent, selectors: [["app-confirmation"]], decls: 115, vars: 24, consts: [[1, "order_details", "section-margin--small"], ["id", "printdiv"], [1, "container"], [1, "text-center", "billing-alert"], [1, "row", "mb-5"], [1, "col-md-6", "col-xl-4", "mb-4", "mb-xl-0"], [1, "confirmation-card"], [1, "billing-title"], [1, "order-rable"], [1, "col-md-6", "col-xl-8", "mb-4", "mb-xl-0"], [1, "order_details_table"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [2, "color", "green"], [2, "text-align", "center"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-file-invoice"], [1, "fas", "fa-shopping-basket"]], template: function ConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Payment method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Shipping Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Postcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ConfirmationComponent_tr_72_Template, 10, 6, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u20B9500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " *Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_107_listener($event) { return ctx.Invoice($event, "printdiv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Print Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_111_listener() { return ctx.Shopping(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Continue Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Thank You ", ctx.loggeduser[0].NAME, ". Your order has been received.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.model.data[0].ORDER_ID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 12, ctx.newDate, "MMM d, y"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 15, ctx.model.data[0].TOTAL, "\u20B9"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.model.data[0].PAYMENT_MODE, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.model.data[0].ADDRESS, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.model.data[0].STATE, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.model.data[0].CITY, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.model.data[0].PINCODE, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stored);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](82, 18, ctx.model.data[0].TOTAL, "\u20B9"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](105, 21, ctx.model.data[0].TOTAL, "\u20B9"));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation',
                templateUrl: './confirmation.component.html',
                styleUrls: ['./confirmation.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/email/email.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/email/email.component.ts ***!
  \*****************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






const _c0 = function () { return ["/register"]; };
const _c1 = function () { return ["/"]; };
class EmailComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.model = {};
        this.result = {};
    }
    CustomerEmail(regForm) {
        this.emailid = this.model.email;
        console.log(JSON.stringify(this.emailid));
        this.http.post('http://localhost:3000/sendEmail', JSON.stringify(this.model), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
            this.result = res;
            if (this.result.success == true) {
                this.emailSend = "Password Has been Sent to Your Email Successfully";
                setTimeout(() => { this.router.navigate(['/']); }, 2000);
            }
            else
                this.emailSend = "Email Does not Exist";
        });
    }
    ngOnInit() {
    }
}
EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailComponent, selectors: [["app-email"]], decls: 31, vars: 7, consts: [[1, "hold-transition", "login-page"], [1, "login-box"], [1, "login-logo"], [1, "card"], [1, "card-body", "login-card-body"], [1, "login-box-msg"], [3, "ngSubmit"], ["regForm", "ngForm"], [1, "input-group", "mb-3"], ["type", "email", "placeholder", "Email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], [2, "color", "red"], [1, "row"], [1, "col-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 2, "width", "100px", "margin-left", "120px", 3, "disabled"], [1, "mb-2"], [1, "text-center", 3, "routerLink"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mobi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Kart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign in to start your session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmailComponent_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.CustomerEmail(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Register as a new Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Back to Mobikart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emailSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZW1haWwvZW1haWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email',
                templateUrl: './email.component.html',
                styleUrls: ['./email.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/shop"]; };
const _c2 = function () { return ["/login"]; };
const _c3 = function () { return ["/register"]; };
const _c4 = function () { return ["/cart"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 80, vars: 10, consts: [[1, "footer"], [1, "footer-area"], [1, "container"], [1, "row", "section_gap"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "single-footer-widget", "tp_widgets"], [1, "footer_title", "large_title"], [1, "offset-lg-1", "col-lg-2", "col-md-6", "col-sm-6"], [1, "footer_title"], [1, "list"], [3, "routerLink"], [1, "col-lg-2", "col-md-6", "col-sm-6"], [1, "single-footer-widget", "instafeed"], [1, "list", "instafeed", "d-flex", "flex-wrap"], ["src", "../../../assets/img/gallery/r1.jpg", "alt", ""], ["src", "../../../assets/img/gallery/r2.jpg", "alt", ""], ["src", "../../../assets/img/gallery/r3.jpg", "alt", ""], ["src", "../../../assets/img/gallery/r5.jpg", "alt", ""], ["src", "../../../assets/img/gallery/r7.jpg", "alt", ""], ["src", "../../../assets/img/gallery/r8.jpg", "alt", ""], [1, "offset-lg-1", "col-lg-3", "col-md-6", "col-sm-6"], [1, "ml-40"], [1, "sm-head"], [1, "fa", "fa-location-arrow"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"], [1, "footer-bottom"], [1, "row", "d-flex"], [1, "col-lg-12", "footer-text", "text-center"], ["aria-hidden", "true", 1, "fa", "fa-heart"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We strive to offer our customers the lowest possible prices, the best available selection, and the utmost convenience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " To be Earth\u2019s most customer-centric company, where customers can find and discover anything they might want to buy online. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Head Office ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "123, Main Street, Ujjain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " +91 87707-95327");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " +91 87709-25794 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " staysafe2020ace@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\nCopyright \u00A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " All rights reserved | This template is made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " by Ankit Bhatia\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function () { return ["/login"]; };
function HeaderComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HeaderComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_29_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.Logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_29_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.Order(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " My Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_29_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.ChangePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.option);
} }
const _c1 = function () { return ["/"]; };
const _c2 = function () { return ["/shop"]; };
const _c3 = function () { return ["/register"]; };
const _c4 = function () { return ["/cart"]; };
class HeaderComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    Logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/']);
        if (window.location.href == "http://localhost:4200/") {
            window.location.reload();
        }
    }
    Order() {
        this.router.navigate(['/orders']);
    }
    ChangePassword() {
        this.router.navigate(['/changePassword'], { queryParams: { email: this.email } });
    }
    ngOnInit() {
        this.loggeduser = JSON.parse(localStorage.getItem('user'));
        if (this.loggeduser != null) {
            this.key = this.loggeduser[0].CUSTOMER_ID;
            var stored = JSON.parse(localStorage.getItem(this.key));
            this.option = "Welcome " + this.loggeduser[0].NAME;
            this.email = this.loggeduser[0].EMAIL;
        }
        if (this.loggeduser == null)
            this.option = '';
        if (this.loggeduser == null || stored == null) {
            this.product_count = 0;
        }
        else {
            this.product_count = stored.length;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 30, vars: 11, consts: [[1, "header_area"], [1, "main_menu"], [1, "navbar", "navbar-expand-lg", "bg-light", "navbar-light"], [1, "container"], [1, "navbar-brand", "logo_h"], ["src", "../../../assets/logo.png", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "icon-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "offset"], [1, "nav", "navbar-nav", "menu_nav", "ml-auto", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-item", "submenu", "dropdown"], ["role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 3, "routerLink"], [1, "nav-shop"], [3, "routerLink"], [1, "ti-shopping-cart"], [1, "nav-shop__circle"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item submenu dropdown", 4, "ngIf"], [1, "button", "button-header", 3, "routerLink"], ["aria-expanded", "false", "role", "button", "aria-haspopup", "true", "data-toggle", "dropdown", 1, "button", "button-header", "dropdown-toggle"], [1, "dropdown-menu"], [1, "nav-item", 2, "cursor", "pointer"], [1, "nav-link", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "nav-item", 2, "cursor", "pointer", "margin-left", "0%"], [1, "fas", "fa-shipping-fast"], [1, "fas", "fa-key"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HeaderComponent_li_28_Template, 3, 2, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_li_29_Template, 16, 1, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product_count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.option.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.option.length > 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/Components/footer/footer.component.ts");








const _c0 = function (a1) { return ["/product/", a1]; };
function HomeComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, model_r1.PRODUCT_ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", model_r1.PRODUCT_IMAGE, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.COMPANY_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, model_r1.PRODUCT_ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", model_r1.PRODUCT_NAME, " (", model_r1.COLOUR, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, model_r1.PRICE, "\u20B9 "));
} }
const _c1 = function () { return ["/shop"]; };
class HomeComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.models = [];
        window.scrollTo(0, 0);
    }
    toggleMute(myVideo) {
        let video = document.getElementById(myVideo);
        video.muted = !video.muted;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.http.get('http://localhost:3000/getLimitData/8').subscribe((res) => {
            //console.log(res);
            this.models = res;
            console.log(this.models);
            console.log(JSON.parse(localStorage.getItem('user')));
            console.log(JSON.parse(localStorage.getItem('101')));
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 127, vars: 9, consts: [[1, "site-main"], [1, "hero-banner"], [1, "container"], [1, "row", "no-gutters", "align-items-center", "pt-60px"], [1, "col-5", "d-none", "d-sm-block"], [1, "hero-banner__img"], ["src", "../../../assets/banner3.jpg", "alt", "", 1, "img-fluid"], [1, "col-sm-7", "col-lg-6", "offset-lg-1", "pl-4", "pl-md-5", "pl-lg-0"], [1, "hero-banner__content"], [1, "button", "button-hero", 3, "routerLink"], [1, "section-margin", "calc-60px"], [1, "section-intro", "pb-60px"], [1, "section-intro__style"], [1, "row"], ["class", "col-md-6 col-lg-4 col-xl-3", 4, "ngFor", "ngForOf"], ["id", "parallax-1", "data-anchor-target", "#parallax-1", "data-300-top", "background-position: 20px 30px", "data-top-bottom", "background-position: 0 20px", 1, "offer"], [1, "col-xl-5"], [1, "offer__content", "text-center"], [1, "button", "button--active", "mt-3", "mt-xl-4", 3, "routerLink"], [1, "section-intro", "pb-60px", 2, "text-align", "center"], ["id", "video-carousel-example2", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-indicators"], ["data-target", "#video-carousel-example2", "data-slide-to", "0", 1, "active"], ["data-target", "#video-carousel-example2", "data-slide-to", "1"], ["data-target", "#video-carousel-example2", "data-slide-to", "2"], ["data-target", "#video-carousel-example2", "data-slide-to", "3"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active"], [1, "view"], ["width", "100%", "height", "100%", "allowfullscreen", "allowfullscreen", "id", "myVid1", "autoplay", "", "loop", "", 1, "video-fluid", 3, "muted"], ["src", "../../../assets/iphone.mp4", "id", "myVideo", "type", "video/mp4"], [1, "mask", "rgba-indigo-light"], [1, "carousel-caption"], [1, "animated", "fadeInDown"], [1, "h3-responsive"], [1, "fas", "fa-volume-mute", 3, "click"], [1, "carousel-item"], ["width", "100%", "height", "100%", "id", "myVid2", "autoplay", "", "loop", "", 1, "video-fluid", 3, "muted", "click"], ["src", "../../../assets/Samsung.mp4", "id", "myVideo", "type", "video/mp4"], [1, "mask", "rgba-purple-slight"], ["width", "100%", "height", "100%", "id", "myVid3", "autoplay", "", "loop", "", 1, "video-fluid", 3, "muted"], ["src", "../../../assets/OnePlus8.mp4", "id", "myVideo", "type", "video/mp4"], [1, "mask", "rgba-black-strong"], ["width", "100%", "height", "100%", "id", "myVid4", "autoplay", "", "loop", "", 1, "video-fluid", 3, "muted"], ["src", "../../../assets/Redmi.mp4", "id", "myVideo", "type", "video/mp4"], ["href", "#video-carousel-example2", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#video-carousel-example2", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "subscribe-position"], [1, "subscribe", "text-center"], [1, "subscribe__title"], ["id", "mc_embed_signup"], ["target", "_blank", 1, "subscribe-form", "form-inline", "mt-5", "pt-1"], [1, "form-group", "ml-sm-auto"], ["type", "email", "name", "EMAIL", "placeholder", "Enter your email", "onfocus", "this.placeholder = ''", "onblur", "this.placeholder = 'Your Email Address '", 1, "form-control", "mb-1"], [1, "info"], ["type", "submit", 1, "button", "button-subscribe", "mr-auto", "mb-1"], [2, "position", "absolute", "left", "-5000px"], ["name", "b_36c4fd991d266f23781ded980_aefe40901a", "tabindex", "-1", "value", "", "type", "text"], [1, "col-md-6", "col-lg-4", "col-xl-3"], [1, "card", "text-center", "card-product"], [1, "card-product__img"], [3, "routerLink"], ["alt", "iphoneX", 1, "card-img", 3, "src"], [1, "card-body"], [1, "card-product__title"], [1, "card-product__price"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Shop is fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Browse Our Premium Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Popular Item in the market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Trending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeComponent_div_28_Template, 14, 14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Up To 50% Off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Winter Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Him she'd let them sixth saw light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Popular Item in the market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sellers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ol", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "video", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "source", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "iPhone SE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_68_listener() { return ctx.toggleMute("myVid1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "video", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_video_click_71_listener() { return ctx.toggleMute("myVid2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "source", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Samsung S20 Ultra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_79_listener() { return ctx.toggleMute("myVid2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "video", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "source", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "OnePlus 8/8 Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_90_listener() { return ctx.toggleMute("myVid3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "video", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "source", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Redmi Note 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_101_listener() { return ctx.toggleMute("myVid4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "section", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Get Update From Anywhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Bearing Void gathering light light his eavening unto dont afraid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "form", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Subscribe Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.models);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", "muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", "muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", "muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", "muted");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".fa-volume-mute[_ngcontent-%COMP%]:hover{\n    color:red\n}\n.h3-responsive[_ngcontent-%COMP%]:hover{\n    color:white\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXZvbHVtZS1tdXRlOmhvdmVye1xuICAgIGNvbG9yOnJlZFxufVxuLmgzLXJlc3BvbnNpdmU6aG92ZXJ7XG4gICAgY29sb3I6d2hpdGVcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






const _c0 = function () { return ["/email"]; };
const _c1 = function () { return ["/register"]; };
const _c2 = function () { return ["/"]; };
class LoginComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.model = {};
        this.result = {};
    }
    togglePassword($event) {
        const togglePassword = document.querySelector('#showpassword');
        const password = document.querySelector('#password');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    }
    CustomerLogin(regForm) {
        const data = JSON.stringify(this.model);
        console.log(data);
        this.http.post('http://localhost:3000/processLogin', data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
            this.result = res;
            if (this.result.success) {
                //console.log(this.result.data)
                localStorage.setItem('user', JSON.stringify(this.result.data));
                var stored = JSON.parse(localStorage.getItem('user'));
                console.log(stored);
                this.router.navigate(['/']);
            }
            else
                this.alert = "Invalid Username or Password";
            //console.log("Result ",this.result)
            //console.log("Sucess",this.result.success)
        });
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 40, vars: 10, consts: [[1, "hold-transition", "login-page"], [1, "login-box"], [1, "login-logo"], [1, "card"], [1, "card-body", "login-card-body"], [1, "login-box-msg"], [3, "ngSubmit"], ["regForm", "ngForm"], [1, "input-group", "mb-3"], ["type", "email", "placeholder", "Email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], ["type", "password", "placeholder", "Password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "showpassword", "name", "showpassword", 1, "fas", "fa-eye", 3, "click"], [1, "row"], [1, "col-8"], [1, "icheck-primary"], [2, "color", "red"], [1, "col-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "mb-1"], [1, "text-center", 3, "routerLink"], [1, "mb-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mobi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Kart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign in to start your session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.CustomerLogin(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_22_listener($event) { return ctx.togglePassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "I forgot my password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Register as a new Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Back to Mobikart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.alert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/Components/footer/footer.component.ts");








function OrderComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stores_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", stores_r1.PRODUCT_IMAGE, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stores_r1.PRODUCT_PURCHASED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, stores_r1.PRODUCT_PRICE, "\u20B9"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 10, stores_r1.PURCHASE_DATE, "MMM d, y"), "\u00A0", stores_r1.PURCHASE_TIME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stores_r1.ORDER_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stores_r1.PAYMENT_MODE);
} }
class OrderComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.stored = {};
        this.loggeduser = [];
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.loggeduser = JSON.parse(localStorage.getItem('user'));
        console.log(this.loggeduser);
        this.customer_id = this.loggeduser[0].CUSTOMER_ID;
        console.log(this.customer_id);
        this.http.post('http://localhost:3000/getAdminOrders', JSON.stringify({ 'id': this.customer_id }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
            console.log("res", res);
            this.stored = res;
            console.log(this.stored);
            for (let x = 0; x < this.stored.length; x++) {
                this.stored[x].PURCHASE_DATE = new Date(this.stored[x].PURCHASE_DATE);
            }
        });
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], decls: 24, vars: 1, consts: [[2, "margin-left", "50px"], [1, "cart_area"], [1, "container"], [1, "cart_inner"], [1, "table-responsive"], [1, "table", 2, "width", "100%"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "media"], [1, "d-flex"], ["height", "150px", "alt", "", 3, "src"], [1, "media-body"], [2, "width", "20%"], [2, "width", "14%"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order Placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Order Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Payment Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OrderComponent_tr_22_Template, 22, 13, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stored);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order',
                templateUrl: './order.component.html',
                styleUrls: ['./order.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/Components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function ProductComponent_h5_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Be The First One to Add a Review \u21D2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_div_181_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 62);
} }
function ProductComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductComponent_div_181_i_7_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r5.CUSTOMER_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.counter(review_r5.RATING));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r5.REVIEW);
} }
function ProductComponent_p_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You Need to Login to Review this Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_form_187_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_form_187_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.ratings.star = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_form_187_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.ratings.star = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_form_187_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.ratings.star = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_form_187_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.ratings.star = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_form_187_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.ratings.star = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "textarea", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_form_187_Template_textarea_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.ratings.review = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_form_187_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r17.SendReview(); return _r9.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.ratings.star);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.ratings.star);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.ratings.star);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.ratings.star);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.ratings.star);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.ratings.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.reviewError);
} }
const _c0 = function (a1) { return ["/product/", a1]; };
function ProductComponent_div_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " HOT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const top_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, top_r18.PRODUCT_ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", top_r18.PRODUCT_IMAGE, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, top_r18.PRODUCT_ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](top_r18.PRODUCT_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, top_r18.PRICE, "\u20B9 "));
} }
class ProductComponent {
    constructor(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.models = {};
        this.ratings = { "star": null, "review": null };
        this.tops = {};
        this.product_cart = [];
        this.reviews = {};
        this.NoReview = "";
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.product_id = this.route.snapshot.params['id'];
        console.log("Product Id", this.product_id);
        this.http.get('http://localhost:3000/getProduct/' + this.product_id).subscribe((res) => {
            this.models = res;
            //console.log(this.models);
        });
        this.http.get("http://localhost:3000/getLimitData/12").subscribe((res) => {
            this.tops = res;
            //console.log("Tops:",this.tops);
        });
        this.loggeduser = JSON.parse(localStorage.getItem('user'));
        console.log("Logged User", this.loggeduser);
        this.getReview();
    }
    counter(i) {
        return new Array(i);
    }
    getReview() {
        console.log("get review function Chala");
        this.http.get("http://localhost:3000/getReview/" + this.product_id).subscribe((res) => {
            this.reviews = res;
            this.NoReview = this.reviews.length;
            console.log("getReview", this.reviews);
        });
    }
    SendReview() {
        console.log(this.ratings);
        if ((this.ratings.review == "" || this.ratings.review == null) || this.ratings.star == null) {
            if (this.ratings.review == "" || this.ratings.review == null)
                this.reviewError = "Please Enter Your Review to Submit";
            else
                this.reviewError = "Please Enter Ratings to Submit";
        }
        else {
            console.log("else chala");
            this.ratings["Name"] = this.loggeduser[0].NAME;
            this.ratings["Product_Id"] = this.product_id;
            console.log(JSON.stringify(this.ratings));
            this.http.post('http://localhost:3000/setReview', JSON.stringify(this.ratings), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
                this.result = res;
                console.log("Result from set Review", res);
                if (this.result.success == true) {
                    this.getReview();
                }
            });
        }
    }
    Delivery($event) {
        this.delivery = "Delivery in 4-6 days| Free Delivery Above ₹499";
    }
    AddtoCart($event) {
        //let headercomponent=new HeaderComponent(this.router);
        if (this.product_cart.length == 0) {
            var product = { company: this.models[0].COMPANY_NAME, name: this.models[0].PRODUCT_NAME, colour: this.models[0].COLOUR, variant: this.models[0].VARIANT, price: this.models[0].PRICE, image: this.models[0].PRODUCT_IMAGE };
            this.product_cart.push(product);
            console.log(this.product_cart.length);
            var a = JSON.parse(localStorage.getItem("user"));
            if (a == null) {
                this.router.navigate(['/login']);
            }
            if (JSON.parse(localStorage.getItem(a[0].CUSTOMER_ID)) != null) {
                var user = JSON.parse(localStorage.getItem("user"));
                var key = user[0].CUSTOMER_ID;
                console.log(user[0].CUSTOMER_ID);
                var stored = JSON.parse(localStorage.getItem(key));
                var check = JSON.stringify(stored);
                if (check.includes(this.models[0].PRODUCT_NAME) == false) {
                    stored.push(this.product_cart);
                    localStorage.setItem(key, JSON.stringify(stored));
                    window.location.reload();
                    //headercomponent.ngOnInit()
                }
                else {
                    console.log("Chala");
                    this.alreadyadded = "Product is already added in your cart";
                }
            }
            else {
                var LoggedUser = JSON.parse(localStorage.getItem('user'));
                if (LoggedUser != null) {
                    console.log("else chala");
                    var key = LoggedUser[0].CUSTOMER_ID;
                    console.log(LoggedUser[0].CUSTOMER_ID);
                    localStorage.setItem(key, JSON.stringify([this.product_cart]));
                    window.location.reload();
                    //headercomponent.ngOnInit()
                }
            }
        }
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 197, vars: 24, consts: [[1, "product_image_area"], [1, "container"], [1, "row", "s_product_inner"], [1, "col-lg-6"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "owl-carousel", "owl-theme", "s_Product_carousel"], [1, "single-prd-item"], [1, "col-lg-5", "offset-lg-1"], [1, "s_product_text"], [1, "list"], [1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-default", "text-center"], [1, "fas", "fa-circle", "fa-2x", "text-green"], [1, "fas", "fa-circle", "fa-2x", "text-blue"], [1, "fas", "fa-circle", "fa-2x", "text-purple"], [1, "fas", "fa-circle", "fa-2x", "text-red"], [1, "fas", "fa-circle", "fa-2x", "text-orange"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-map-marker-alt"], ["type", "text", "placeholder", "Enter Pincode ...", "maxlength", "6", "oninput", "this.value=this.value.replace(/[^0-9]/g,'');", 1, "form-control", "form-inline", "col-6"], ["type", "button", 1, "btn", "btn-block", "btn-danger", "btn-sm", 3, "click"], [3, "src"], [1, "button", "primary-btn", 3, "click"], [2, "color", "red"], [1, "card_area", "d-flex", "align-items-center"], [1, "product_description_area"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#home", "role", "tab", "aria-controls", "home", "aria-selected", "false", 1, "nav-link"], ["id", "profile-tab", "data-toggle", "tab", "href", "#profile", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "review-tab", "data-toggle", "tab", "href", "#review", "role", "tab", "aria-controls", "review", "aria-selected", "false", 1, "nav-link", "active"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade"], [1, "fas", "fa-tag", 2, "color", "green"], [1, "fas", "fa-sync-alt", 2, "color", "green"], [1, "far", "fa-calendar-check", 2, "color", "green"], [1, "fab", "fa-google", 2, "color", "green"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], [1, "table-responsive"], [1, "table"], ["id", "review", "role", "tabpanel", "aria-labelledby", "review-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row"], ["style", "color:brown", 4, "ngIf"], [1, "review_list"], ["class", "review_item", 4, "ngFor", "ngForOf"], [1, "review_box"], ["style", "color: brown;", 4, "ngIf"], ["class", "form-contact form-review mt-3", 4, "ngIf"], [1, "related-product-area", "section-margin--small", "mt-0"], [1, "section-intro", "pb-60px"], [1, "section-intro__style"], [1, "row", "mt-30"], ["class", "col-sm-6 col-xl-3 mb-4 mb-xl-0", 4, "ngFor", "ngForOf"], [2, "color", "brown"], [1, "review_item"], [1, "media"], [1, "d-flex"], ["src", "../../../assets/img/product/review-1.png", "alt", ""], [1, "media-body"], ["class", "fa fa-star", 4, "ngFor", "ngForOf"], [1, "fa", "fa-star"], [1, "form-contact", "form-review", "mt-3"], ["reviewForm", "ngForm"], [1, "rating"], ["id", "star5", "name", "star", "type", "radio", "value", "5", 1, "radio-btn", "hide", 3, "ngModel", "ngModelChange"], ["for", "star5"], [1, "far", "fa-star"], ["id", "star4", "name", "star", "type", "radio", "value", "4", 1, "radio-btn", "hide", 3, "ngModel", "ngModelChange"], ["for", "star4"], ["id", "star3", "name", "star", "type", "radio", "value", "3", 1, "radio-btn", "hide", 3, "ngModel", "ngModelChange"], ["for", "star3"], ["id", "star2", "name", "star", "type", "radio", "value", "2", 1, "radio-btn", "hide", 3, "ngModel", "ngModelChange"], ["for", "star2"], ["id", "star1", "name", "star", "type", "radio", "value", "1", 1, "radio-btn", "hide", 3, "ngModel", "ngModelChange"], ["for", "star1"], [1, "clear"], [1, "form-group"], ["name", "review", "id", "review", "cols", "30", "rows", "5", "placeholder", "Enter Your Review", 1, "form-control", "different-control", "w-100", 3, "ngModel", "ngModelChange"], [1, "form-group", "text-center", "text-md-right", "mt-3"], ["type", "button", 1, "button", "button--active", "button-review", 3, "click"], [1, "col-sm-6", "col-xl-3", "mb-4", "mb-xl-0"], [1, "ribbon-wrapper"], [1, "ribbon", "bg-danger"], [1, "single-search-product-wrapper"], [1, "single-search-product", "d-flex"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "desc"], [1, "title", 3, "routerLink"], [1, "price"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Availibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " : In Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Colors Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Delivery: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_50_listener($event) { return ctx.Delivery($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_64_listener($event) { return ctx.AddtoCart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Special Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Specification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Available Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Bank Offer 5% off* with Axis Bank Buzz Credit Card T&C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Get upto \u20B913150 off on exchangeBuy with Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Special PriceExtra \u20B96000 off (price inclusive of discount) T&C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " No cost EMI \u20B91,777/month. Standard EMI also available View Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Get Google Nest Mini Charcoal at \u20B91999 T&C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Partner OfferGet 6-month Google One trial on availing Exchange, No Cost EMI or Complete Mobile ProtectionKnow More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Colour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Processor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Operating System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Customer Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, ProductComponent_h5_179_Template, 2, 0, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](181, ProductComponent_div_181_Template, 10, 3, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Add a Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, ProductComponent_p_186_Template, 2, 0, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, ProductComponent_form_187_Template, 30, 7, "form", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "section", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Trending Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, ProductComponent_div_195_Template, 14, 12, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", ctx.models[0].PRODUCT_IMAGE, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.models[0].COMPANY_NAME, " ", ctx.models[0].PRODUCT_NAME, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 21, ctx.models[0].PRICE, "\u20B9 "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx.models[0].COMPANY_NAME, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.delivery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", ctx.models[0].COMPANY_NAME, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 \u00A0 ", ctx.alreadyadded, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.models[0].COMPANY_NAME, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.models[0].PRODUCT_NAME, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.models[0].COLOUR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.models[0].VARIANT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.models[0].DISPLAY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.models[0].PROCESSOR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.models[0].CAMERA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.models[0].OS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.NoReview == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggeduser == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggeduser != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tops);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".tooltip[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    border-bottom: 1px dotted black;\n  }\n  \n  .tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: hidden;\n    width: 120px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 150%;\n    left: 50%;\n    margin-left: -60px;\n  }\n  \n  .tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: black transparent transparent transparent;\n  }\n  \n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  \n  .txt-center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  .hide[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .clear[_ngcontent-%COMP%] {\n    float: none;\n    clear: both;\n  }\n  \n  .rating[_ngcontent-%COMP%] {\n      width: 150px;\n      unicode-bidi: bidi-override;\n      direction: rtl;\n      text-align: center;\n      position: relative;\n  }\n  \n  .rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n      float: right;\n      display: inline;\n      padding: 0;\n      margin: 0;\n      position: relative;\n      width: 1.5em;\n      cursor: pointer;\n      color: #000;\n  }\n  \n  .rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover, .rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]    > input.radio-btn[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n      color: transparent;\n  }\n  \n  .rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover:before, .rating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%]:before, .rating[_ngcontent-%COMP%]    > input.radio-btn[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:before, .rating[_ngcontent-%COMP%]    > input.radio-btn[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:before {\n      content: \"\\2605\";\n      position: absolute;\n      left: 0;\n      color: #FFD700;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdURBQXVEO0VBQ3pEOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtNQUNJLFlBQVk7TUFDWiwyQkFBMkI7TUFDM0IsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixrQkFBa0I7RUFDdEI7O0VBRUE7TUFDSSxZQUFZO01BQ1osZUFBZTtNQUNmLFVBQVU7TUFDVixTQUFTO01BQ1Qsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixlQUFlO01BQ2YsV0FBVztFQUNmOztFQUVBOzs7TUFHSSxrQkFBa0I7RUFDdEI7O0VBRUE7Ozs7TUFJSSxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxjQUFjO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gIH1cbiAgXG4gIC50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogMTUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICB9XG4gIFxuICAudG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC50eHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5jbGVhciB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgXG4gIC5yYXRpbmcge1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgdW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlO1xuICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5yYXRpbmcgPiBsYWJlbCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5yYXRpbmcgPiBsYWJlbDpob3ZlcixcbiAgLnJhdGluZyA+IGxhYmVsOmhvdmVyIH4gbGFiZWwsXG4gIC5yYXRpbmcgPiBpbnB1dC5yYWRpby1idG46Y2hlY2tlZCB+IGxhYmVsIHtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLnJhdGluZyA+IGxhYmVsOmhvdmVyOmJlZm9yZSxcbiAgLnJhdGluZyA+IGxhYmVsOmhvdmVyIH4gbGFiZWw6YmVmb3JlLFxuICAucmF0aW5nID4gaW5wdXQucmFkaW8tYnRuOmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUsXG4gIC5yYXRpbmcgPiBpbnB1dC5yYWRpby1idG46Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlxcMjYwNVwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGNvbG9yOiAjRkZENzAwO1xuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






const _c0 = function () { return ["/login"]; };
const _c1 = function () { return ["/"]; };
class RegisterComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.model = {};
    }
    RegisterCustomer(regForm) {
        if (this.model.Phone.length < 10 || this.model.Password != this.model.ConfirmPassword) {
            if (this.model.Phone.length < 10) {
                this.phonealert = "Invalid Number, Enter Valid Phone Number";
            }
            if (this.model.Password != this.model.ConfirmPassword) {
                this.passwordalert = "Invalid Password, both the Passwords should be Same";
            }
        }
        else {
            const data = JSON.stringify(this.model);
            this.http.post('http://localhost:3000/processRegister', data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
                //console.log("Response",res);
                this.result = res;
                if (this.result.success == false)
                    this.passwordalert = "Your Account Already Exists, Please Login!";
                else
                    this.router.navigate(['/login']);
            });
            //console.log(data) 
        }
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 57, vars: 13, consts: [[1, "hold-transition", "register-page"], [1, "register-box"], [1, "register-logo"], [1, "card"], [1, "card-body", "register-card-body"], [1, "login-box-msg"], [3, "ngSubmit"], ["regForm", "ngForm"], [1, "input-group", "mb-3"], ["type", "text", "id", "Name", "name", "Name", "placeholder", "Full name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "email", "id", "Email", "name", "Email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-envelope"], ["type", "text", "name", "Phone", "id", "Phone", "placeholder", "Phone Number", "maxlength", "10", "oninput", "this.value=this.value.replace(/[^0-9]/g,'');", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-phone"], [2, "color", "red"], ["type", "password", "id", "Password", "name", "Password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-lock"], ["type", "password", "id", "ConfirmPassword", "name", "ConfirmPassword", "placeholder", "Retype password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-8"], [1, "icheck-primary"], ["type", "checkbox", "id", "agreeTerms", "name", "terms", "required", "", 3, "ngModel", "ngModelChange"], ["for", "agreeTerms"], [1, "col-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "text-center", 3, "routerLink"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mobi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Kart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Register as a new member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.RegisterCustomer(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.model.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.model.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.model.Phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_31_listener($event) { return ctx.model.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_36_listener($event) { return ctx.model.ConfirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_45_listener($event) { return ctx.model.agree = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0I agree to the terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Already have an Account: Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Back to Mobikart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phonealert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.ConfirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.passwordalert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.agree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/Components/footer/footer.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");










function ShopComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_div_13_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const company_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.CompanyFilter($event, company_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", company_r2.company_name, " (", company_r2.count, ")");
} }
const _c0 = function (a1) { return ["/product/", a1]; };
function ShopComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shop_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, shop_r5.PRODUCT_ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", shop_r5.PRODUCT_IMAGE, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shop_r5.COMPANY_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, shop_r5.PRODUCT_ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shop_r5.PRODUCT_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, shop_r5.PRICE, "\u20B9 "));
} }
const _c1 = function (a1) { return { itemsPerPage: 6, currentPage: a1 }; };
class ShopComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.p = 1;
        this.shopper = [];
        this.companies = [];
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    CompanyFilter($event, company) {
        console.log(company.company_id);
        this.http.get('http://localhost:3000/CompanyFilter/' + company.company_id).subscribe((res) => {
            this.shopper = res;
            console.log(this.shopper);
        });
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.http.get('http://localhost:3000/getLimitData/100').subscribe((res) => {
            this.shopper = res;
            //console.log("Shopper",this.shopper)
        });
        this.http.get('http://localhost:3000/getCategory').subscribe((res) => {
            this.companies = res;
            //console.log("Companies",this.companies)
        });
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], decls: 83, vars: 11, consts: [[1, "section-margin--small", "mb-5"], [1, "container"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-5"], [1, "sidebar-filter"], [1, "top-filter-head"], [1, "common-filter"], [1, "head"], ["action", "#", 1, "form"], ["class", "form-group", 4, "ngFor", "ngForOf"], ["action", "#"], [1, "filter-list"], ["type", "radio", "id", "black", "name", "color", 1, "pixel-radio"], ["for", "black"], ["type", "radio", "id", "balckleather", "name", "color", 1, "pixel-radio"], ["for", "balckleather"], ["type", "radio", "id", "blackred", "name", "color", 1, "pixel-radio"], ["for", "blackred"], ["type", "radio", "id", "gold", "name", "color", 1, "pixel-radio"], ["for", "gold"], ["type", "radio", "id", "spacegrey", "name", "color", 1, "pixel-radio"], ["for", "spacegrey"], [1, "price-range-area"], ["id", "price-range"], [1, "value-wrapper", "d-flex"], [1, "price"], ["id", "lower-value"], [1, "to"], ["id", "upper-value"], [1, "col-xl-9", "col-lg-8", "col-md-7"], [1, "filter-bar", "d-flex", "flex-wrap", "align-items-center"], [1, "sorting", "mr-auto"], ["type", "button", 1, "btn", "btn-block", "btn-outline-info", "btn-light", 3, "click"], [1, "input-group", "filter-bar-search"], ["type", "text", "placeholder", "Search Your Product Here...", 2, "width", "500px", "border-color", "aqua", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 2, "border-color", "aqua"], [1, "ti-search"], [1, "lattest-product-area", "pb-40", "category-list"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "form-group"], ["type", "radio", "name", "brand", 1, "pixel-radio", 3, "click"], [1, "col-md-6", "col-lg-4"], [1, "card", "text-center", "card-product"], [1, "card-product__img"], [3, "routerLink"], ["alt", "", 1, "card-img", 3, "src"], [1, "card-body"], [1, "card-product__title"], [1, "card-product__price"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Product Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ShopComponent_div_13_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "(29)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Black Leather");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "(29)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Black with red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(19)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "(19)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Spacegrey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "(19)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_button_click_68_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Show All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShopComponent_Template_input_ngModelChange_72_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ShopComponent_div_78_Template, 14, 13, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "pagination-controls", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ShopComponent_Template_pagination_controls_pageChange_81_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](79, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](80, 6, ctx.shopper, ctx.search), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.p)));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop',
                templateUrl: './shop.component.html',
                styleUrls: ['./shop.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/admin-login/admin-login.component */ "./src/app/Components/admin-login/admin-login.component.ts");
/* harmony import */ var _Components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/admin-dashboard/admin-dashboard.component */ "./src/app/Components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/add-product/add-product.component */ "./src/app/Components/add-product/add-product.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/product/product.component */ "./src/app/Components/product/product.component.ts");
/* harmony import */ var _Components_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/cart/cart.component */ "./src/app/Components/cart/cart.component.ts");
/* harmony import */ var _Components_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/shop/shop.component */ "./src/app/Components/shop/shop.component.ts");
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/register/register.component */ "./src/app/Components/register/register.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/checkout/checkout.component */ "./src/app/Components/checkout/checkout.component.ts");
/* harmony import */ var _Components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/confirmation/confirmation.component */ "./src/app/Components/confirmation/confirmation.component.ts");
/* harmony import */ var _Components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/admin-orders/admin-orders.component */ "./src/app/Components/admin-orders/admin-orders.component.ts");
/* harmony import */ var _Components_order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/order/order.component */ "./src/app/Components/order/order.component.ts");
/* harmony import */ var _Components_admin_order_dash_admin_order_dash_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/admin-order-dash/admin-order-dash.component */ "./src/app/Components/admin-order-dash/admin-order-dash.component.ts");
/* harmony import */ var _Components_email_email_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/email/email.component */ "./src/app/Components/email/email.component.ts");
/* harmony import */ var _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/change-password/change-password.component */ "./src/app/Components/change-password/change-password.component.ts");




















const routes = [
    { path: '', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'product/:id', component: _Components_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    //{path:'productReload/:id',component:ProductComponent},
    { path: 'admin', component: _Components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_2__["AdminLoginComponent"] },
    { path: 'adminDash', component: _Components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"] },
    { path: 'productAdd', component: _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"] },
    { path: 'cart', component: _Components_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
    //{path:'cartReload',component:CartComponent},
    { path: 'shop', component: _Components_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"] },
    { path: 'login', component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'register', component: _Components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'checkout', component: _Components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutComponent"] },
    { path: 'confirmation', component: _Components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationComponent"] },
    { path: 'adminOrder', component: _Components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__["AdminOrdersComponent"] },
    { path: 'orders', component: _Components_order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"] },
    { path: 'orderdash', component: _Components_admin_order_dash_admin_order_dash_component__WEBPACK_IMPORTED_MODULE_15__["AdminOrderDashComponent"] },
    { path: 'email', component: _Components_email_email_component__WEBPACK_IMPORTED_MODULE_16__["EmailComponent"] },
    { path: 'changePassword', component: _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'ECommerceProject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/admin-login/admin-login.component */ "./src/app/Components/admin-login/admin-login.component.ts");
/* harmony import */ var _Components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/admin-dashboard/admin-dashboard.component */ "./src/app/Components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/add-product/add-product.component */ "./src/app/Components/add-product/add-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/product/product.component */ "./src/app/Components/product/product.component.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/footer/footer.component */ "./src/app/Components/footer/footer.component.ts");
/* harmony import */ var _Components_cart_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/cart/cart.component */ "./src/app/Components/cart/cart.component.ts");
/* harmony import */ var _Components_shop_shop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/shop/shop.component */ "./src/app/Components/shop/shop.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/register/register.component */ "./src/app/Components/register/register.component.ts");
/* harmony import */ var _Components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/checkout/checkout.component */ "./src/app/Components/checkout/checkout.component.ts");
/* harmony import */ var _Components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/confirmation/confirmation.component */ "./src/app/Components/confirmation/confirmation.component.ts");
/* harmony import */ var _Components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/admin-orders/admin-orders.component */ "./src/app/Components/admin-orders/admin-orders.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
/* harmony import */ var _Components_order_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/order/order.component */ "./src/app/Components/order/order.component.ts");
/* harmony import */ var _Components_admin_order_dash_admin_order_dash_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/admin-order-dash/admin-order-dash.component */ "./src/app/Components/admin-order-dash/admin-order-dash.component.ts");
/* harmony import */ var _Components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/admin-sidebar/admin-sidebar.component */ "./src/app/Components/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _Components_email_email_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/email/email.component */ "./src/app/Components/email/email.component.ts");
/* harmony import */ var _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/change-password/change-password.component */ "./src/app/Components/change-password/change-password.component.ts");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridModule"].withComponents([]),
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_24__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_25__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _Components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__["AdminLoginComponent"],
        _Components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AdminDashboardComponent"],
        _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"],
        _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _Components_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
        _Components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _Components_cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"],
        _Components_shop_shop_component__WEBPACK_IMPORTED_MODULE_14__["ShopComponent"],
        _Components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        _Components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
        _Components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__["CheckoutComponent"],
        _Components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmationComponent"],
        _Components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_19__["AdminOrdersComponent"],
        _Components_order_order_component__WEBPACK_IMPORTED_MODULE_21__["OrderComponent"],
        _Components_admin_order_dash_admin_order_dash_component__WEBPACK_IMPORTED_MODULE_22__["AdminOrderDashComponent"],
        _Components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["AdminSidebarComponent"],
        _Components_email_email_component__WEBPACK_IMPORTED_MODULE_26__["EmailComponent"],
        _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_27__["ChangePasswordComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_24__["Ng2SearchPipeModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_25__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _Components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__["AdminLoginComponent"],
                    _Components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AdminDashboardComponent"],
                    _Components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"],
                    _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _Components_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
                    _Components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _Components_cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"],
                    _Components_shop_shop_component__WEBPACK_IMPORTED_MODULE_14__["ShopComponent"],
                    _Components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                    _Components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                    _Components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__["CheckoutComponent"],
                    _Components_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmationComponent"],
                    _Components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_19__["AdminOrdersComponent"],
                    _Components_order_order_component__WEBPACK_IMPORTED_MODULE_21__["OrderComponent"],
                    _Components_admin_order_dash_admin_order_dash_component__WEBPACK_IMPORTED_MODULE_22__["AdminOrderDashComponent"],
                    _Components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["AdminSidebarComponent"],
                    _Components_email_email_component__WEBPACK_IMPORTED_MODULE_26__["EmailComponent"],
                    _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_27__["ChangePasswordComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridModule"].withComponents([]),
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_24__["Ng2SearchPipeModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_25__["NgxPaginationModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/Mobikart-Mobile-E-Commerce-Website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map