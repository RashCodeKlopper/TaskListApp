webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n\n  <br/>\n\n  <h1>\n    {{ title }}\n  </h1>\n\n</div>\n\n<br/>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'To-Do List';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__task_details_task_details_component__ = __webpack_require__("./src/app/task-details/task-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__task_list_task_list_component__ = __webpack_require__("./src/app/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_create_task_create_component__ = __webpack_require__("./src/app/task-create/task-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_edit_task_edit_component__ = __webpack_require__("./src/app/task-edit/task-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__error_pagenotfound_component__ = __webpack_require__("./src/app/error/pagenotfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Imports for primeNG


// Imports for Angular Components






var appRoutes = [
    {
        path: 'tasks',
        component: __WEBPACK_IMPORTED_MODULE_11__task_list_task_list_component__["a" /* TaskListComponent */],
        data: { title: 'To-Do List' }
    },
    {
        path: 'task-detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__task_details_task_details_component__["a" /* TaskDetailsComponent */],
        data: { title: 'Task Details' }
    },
    {
        path: 'task-create',
        component: __WEBPACK_IMPORTED_MODULE_12__task_create_task_create_component__["a" /* TaskCreateComponent */],
        data: { title: 'Create Contact' }
    },
    {
        path: 'task-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_13__task_edit_task_edit_component__["a" /* TaskEditComponent */],
        data: { title: 'Edit Contact' }
    },
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_14__error_pagenotfound_component__["a" /* PageNotFoundComponent */]
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_14__error_pagenotfound_component__["a" /* PageNotFoundComponent */]
    },
    {
        path: 'error',
        component: __WEBPACK_IMPORTED_MODULE_14__error_pagenotfound_component__["a" /* PageNotFoundComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                // Angular Components
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__task_create_task_create_component__["a" /* TaskCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_13__task_edit_task_edit_component__["a" /* TaskEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__task_details_task_details_component__["a" /* TaskDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__task_create_task_create_component__["a" /* TaskCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_13__task_edit_task_edit_component__["a" /* TaskEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__error_pagenotfound_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                // Angular Modules
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatSnackBarModule */],
                // PrimeNG Modules
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" align=\"center\">\r\n\r\n  <h1>\r\n    <a [routerLink]=\"['/contacts']\" class=\"btn btn-danger btn-lg\">\r\n      <i class=\"fa fa-spinner fa-pulse fa-5x\" aria-hidden=\"true\"></i>\r\n    </a>\r\n  </h1>\r\n\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n  <h2>Oops! The page you requested was not found.\r\n    <i class=\"fa fa-frown-o prefix\" aria-hidden=\"true\"></i>\r\n  </h2>\r\n\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n  <h3>Back to Homepage:\r\n    <a [routerLink]=\"['/tasks']\" class=\"btn btn-success\">\r\n      <i class=\"fa fa-home fa-5x\" aria-hidden=\"true\"></i>\r\n    </a>\r\n  </h3>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/error/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("./src/app/error/pagenotfound.component.html")
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/task-create/task-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task-create/task-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  task-create works!\n</p>\n"

/***/ }),

/***/ "./src/app/task-create/task-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent() {
    }
    TaskCreateComponent.prototype.ngOnInit = function () {
    };
    TaskCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-create',
            template: __webpack_require__("./src/app/task-create/task-create.component.html"),
            styles: [__webpack_require__("./src/app/task-create/task-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());



/***/ }),

/***/ "./src/app/task-details/task-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task-details/task-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  task-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/task-details/task-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskDetailsComponent = /** @class */ (function () {
    function TaskDetailsComponent() {
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
    };
    TaskDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-details',
            template: __webpack_require__("./src/app/task-details/task-details.component.html"),
            styles: [__webpack_require__("./src/app/task-details/task-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());



/***/ }),

/***/ "./src/app/task-edit/task-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\n\n    <div class=\"valign-wrapper row\">\n  \n      <div class=\"card-panel hoverable\">\n  \n        <div class=\"card border-primary mb-3\">\n  \n          <div class=\"card-body text-secondary\">\n  \n            <h2 class=\"card-title\">{{ task?.title }}</h2>\n  \n            <div class=\"row\">\n                <form class=\"col s12\">\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                    <!-- <i class=\"material-icons prefix\">account_circle</i> -->\n                    <input type=\"text\" placeholder=\"Title\" id=\"title\" name=\"title\" [(ngModel)]=\"task.title\">\n                    </div>\n                    </div>\n                  </div>\n                </form>\n            </div>\n\n            <div class=\"row\">\n                <form class=\"col s12\">\n                  <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                      <!-- <i class=\"material-icons prefix\">home</i> -->\n                      <input type=\"text\" placeholder=\"Description\" id=\"description\" name=\"description\" [(ngModel)]=\"task.description\">\n                    </div>\n                  </div>\n                </form>\n            </div>\n\n            <div class=\"button-save\" style=\"float:right;\">\n              <button type=\"button\" (click)=\"updateTask(task.id, task)\" class=\"waves-effect waves-light btn\"\n                      style=\"width: 170px ; padding-right: 20px\">Save\n                      <i class=\"material-icons right\">save</i>\n              </button>\n              <button type=\"button\" (click)=\"deleteTask(task.id)\" class=\"waves-effect waves-light btn\"\n                      style=\"width: 170px\">Delete\n                      <i class=\"material-icons right\">delete</i>\n              </button>\n            </div>\n  \n            <div class=\"fixed-action-btn\" style=\"bottom: 45px; left: 24px; width: 55.5px\">\n              <a class=\"btn-floating btn-large waves-effect waves-light\" (click)=\"goBack()\">\n                <i class=\"large material-icons\">arrow_back</i>\n              </a>\n            </div>\n  \n          </div>\n  \n        </div>\n  \n      </div>\n  \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(location, router, route, http, snacker) {
        this.location = location;
        this.router = router;
        this.route = route;
        this.http = http;
        this.snacker = snacker;
        this.task = {};
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        this.getTask(this.route.snapshot.params['id']);
    };
    TaskEditComponent.prototype.getTask = function (id) {
        var _this = this;
        this.http.get('/tasks/' + id).subscribe(function (data) {
            _this.task = data;
        });
    };
    TaskEditComponent.prototype.updateTask = function (id, data) {
        var _this = this;
        this.http.put('/tasks/' + id, data)
            .subscribe(function (res) {
            //let id = res['id'];
            _this.router.navigate(['/tasks']);
            _this.handleUpdate();
        }, function (err) {
            console.log(err);
        });
    };
    TaskEditComponent.prototype.handleUpdate = function () {
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            type: 'success',
            title: 'Task has been updated',
            confirmButtonText: 'OK'
        });
        this.snacker.open('Task has been updated', 'Success', { duration: 3000 });
    };
    TaskEditComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.http.delete('/tasks/' + id)
            .subscribe(function (res) {
            //let id = res['id'];
            _this.router.navigate(['/tasks']);
            _this.handleDelete();
        }, function (err) {
            console.log(err);
        });
    };
    TaskEditComponent.prototype.handleDelete = function () {
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            type: 'success',
            title: 'Task has been deleted',
            confirmButtonText: 'OK'
        });
        this.snacker.open('Task has been deleted', 'Success', { duration: 3000 });
    };
    TaskEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    TaskEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-edit',
            template: __webpack_require__("./src/app/task-edit/task-edit.component.html"),
            styles: [__webpack_require__("./src/app/task-edit/task-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatSnackBar */]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h2>\n    <a [routerLink]=\"['/task-create']\" class=\"btn btn-success\">\n      <i class=\"fa fa-plus\"></i>\n    </a>\n  </h2>\n\n  <p-table #tasksTable [columns]=\"cols\" [value]=\"tasks\" [rows]=\"15\" [paginator]=\"true\" [responsive]=\"true\" \n    class=\"table table-hover table-mc-blue bordered highlight\" [style]=\"{'width':'1000px'}\">\n\n    <ng-template pTemplate=\"caption\">\n\n        <div class=\"ui-helper-clearfix\">\n        \n          <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Export Data\" (click)=\"tasksTable.exportCSV()\" style=\"float:right\"></button>\n        \n          <!-- <a [routerLink]=\"['/task-create']\" class=\"btn btn-success\" style=\"float:right\">\n            <i class=\"fa fa-plus\"></i>\n          </a> -->\n        \n        </div>\n\n      <!-- <div style=\"text-align: left\">\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input type=\"text\" pInputText size=\"50\" placeholder=\"Filter records\" (input)=\"tasksTable.filterGlobal($event.target.value, 'contains')\"\n          style=\"width:auto\">\n      </div> -->\n    </ng-template>\n\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\">\n                {{col.header}}\n            </th>\n        </tr>\n    </ng-template>\n\n    <ng-template pTemplate=\"body\" let-task>\n      <tr>\n        <td style=\"width:250px\">{{ task.title }}</td>\n        <td style=\"width:650px\">{{ task.description }}</td>\n        <td style=\"width:50px\">{{ task.status }}</td>\n        <td>\n          <a [routerLink]=\"['/task-edit', task.id]\">\n            <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\n          </a>\n        </td>\n        <td>\n          <a [routerLink]=\"['/task-detail', task.id]\">\n            <i class=\"fa fa-delete\" aria-hidden=\"true\"></i>\n          </a>\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve Tasks
        this.http.get('/tasks').subscribe(function (data) {
            _this.tasks = data;
        });
        // Define table column names
        this.cols = [
            { field: 'title', header: 'Title' },
            { field: 'description', header: 'Description' },
            { field: 'status', header: 'Status' },
        ];
    };
    TaskListComponent.prototype.addTask = function () {
        this.router.navigate(['/task-create']);
    };
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__("./src/app/task-list/task-list.component.html"),
            styles: [__webpack_require__("./src/app/task-list/task-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map