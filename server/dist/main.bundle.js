webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_directives/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" \n[ngClass]=\n\"{ 'alert': message, 'alert-success': message.type === 'success',\n 'alert-danger': message.type === 'error' }\">\n{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('message alert ' + this.message);
        this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
            // console.log('getMessage().subscribe '+JSON.stringify(message));
        });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/_directives/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_directives/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/drobdown/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpened = false;
    }
    Object.defineProperty(DropdownDirective.prototype, "opened", {
        get: function () {
            return this.isOpened;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.open = function () {
        this.isOpened = true;
    };
    DropdownDirective.prototype.close = function () {
        this.isOpened = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.open'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DropdownDirective.prototype, "opened", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "close", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(route, verifyService) {
        this.route = route;
        this.verifyService = verifyService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.verifyService.verify().then(function (res) {
            if (res.result === 1) {
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (err) {
            return false;
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_verify_service__["a" /* VerifyService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "../../../../../src/app/_models/area-ex-detail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AreaExpertiseDetail */
var AreaExpertiseDetail = /** @class */ (function () {
    function AreaExpertiseDetail() {
    }
    return AreaExpertiseDetail;
}());



/***/ }),

/***/ "../../../../../src/app/_models/area-ex.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AreaExpertise */
/* unused harmony export Data */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaExpertiseCount; });
var AreaExpertise = /** @class */ (function () {
    function AreaExpertise() {
        this.data = new Data();
    }
    return AreaExpertise;
}());

var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());

var AreaExpertiseCount = /** @class */ (function () {
    function AreaExpertiseCount() {
        this.area_ex = new AreaExpertise();
    }
    return AreaExpertiseCount;
}());



/***/ }),

/***/ "../../../../../src/app/_models/city.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export City */
var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());



/***/ }),

/***/ "../../../../../src/app/_models/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ReplyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Reply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommentData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users__ = __webpack_require__("../../../../../src/app/_models/users.ts");

var Comment = /** @class */ (function () {
    function Comment() {
        this.create_at = new Date();
        this.reply = [];
    }
    return Comment;
}());

var ReplyData = /** @class */ (function () {
    function ReplyData() {
        this.owner = new __WEBPACK_IMPORTED_MODULE_0__users__["a" /* Users */]();
    }
    return ReplyData;
}());

var Reply = /** @class */ (function () {
    function Reply() {
    }
    return Reply;
}());

var CommentData = /** @class */ (function () {
    function CommentData() {
        this.owner = new __WEBPACK_IMPORTED_MODULE_0__users__["a" /* Users */]();
        this.create_at = new Date();
        this.reply = [];
    }
    return CommentData;
}());



/***/ }),

/***/ "../../../../../src/app/_models/district.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return District; });
var District = /** @class */ (function () {
    function District() {
    }
    return District;
}());



/***/ }),

/***/ "../../../../../src/app/_models/employ-situation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EmploySituation */
var EmploySituation = /** @class */ (function () {
    function EmploySituation() {
    }
    return EmploySituation;
}());



/***/ }),

/***/ "../../../../../src/app/_models/gender.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gender; });
var Gender = /** @class */ (function () {
    function Gender() {
        this.Female = 0;
        this.Male = 1;
        this.Other = 2;
        this.arr = ['female', 'male', 'other'];
    }
    Gender.prototype.compare = function (g) {
        return this.arr.indexOf(g.toLocaleLowerCase()) + '';
    };
    ;
    return Gender;
}());



/***/ }),

/***/ "../../../../../src/app/_models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users__ = __webpack_require__("../../../../../src/app/_models/users.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__users__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__city__ = __webpack_require__("../../../../../src/app/_models/city.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__district__ = __webpack_require__("../../../../../src/app/_models/district.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__district__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ward__ = __webpack_require__("../../../../../src/app/_models/ward.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__area_ex__ = __webpack_require__("../../../../../src/app/_models/area-ex.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_ex_detail__ = __webpack_require__("../../../../../src/app/_models/area-ex-detail.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employ_situation__ = __webpack_require__("../../../../../src/app/_models/employ-situation.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post__ = __webpack_require__("../../../../../src/app/_models/post.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__post__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_data__ = __webpack_require__("../../../../../src/app/_models/post_data.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__post_data__["a"]; });











/***/ }),

/***/ "../../../../../src/app/_models/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Info = /** @class */ (function () {
    function Info() {
        this.address = '';
    }
    ;
    return Info;
}());
var Content = /** @class */ (function () {
    function Content() {
    }
    ;
    return Content;
}());
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());
var Post = /** @class */ (function () {
    function Post() {
        this.info = new Info();
        this.content = new Content();
        this.contact = new Contact();
        this.comments = [];
        this.apply = [];
    }
    ;
    return Post;
}());



/***/ }),

/***/ "../../../../../src/app/_models/post_data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostData; });
var Info = /** @class */ (function () {
    function Info() {
    }
    ;
    return Info;
}());
var Content = /** @class */ (function () {
    function Content() {
    }
    ;
    return Content;
}());
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());
var PostData = /** @class */ (function () {
    function PostData() {
        this.info = new Info();
        this.content = new Content();
        this.contact = new Contact();
    }
    ;
    return PostData;
}());



/***/ }),

/***/ "../../../../../src/app/_models/tab.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
var Tab = /** @class */ (function () {
    function Tab(_id, title, link, content) {
        if (_id === void 0) { _id = -1; }
        this._id = _id;
        this.title = title;
        this.link = link;
        this.content = content;
        this._active = false;
    }
    Object.defineProperty(Tab.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tab.prototype, "component", {
        set: function (component) {
            this.content = component;
        },
        enumerable: true,
        configurable: true
    });
    return Tab;
}());



/***/ }),

/***/ "../../../../../src/app/_models/users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
var Users = /** @class */ (function () {
    function Users() {
        this.info = new Info();
        this.address_residence = new AddressResidence();
        this.contact = new Contact();
    }
    ;
    return Users;
}());

var Info = /** @class */ (function () {
    function Info() {
    }
    return Info;
}());
var AddressResidence = /** @class */ (function () {
    function AddressResidence() {
    }
    return AddressResidence;
}());
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());


/***/ }),

/***/ "../../../../../src/app/_models/ward.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ward */
var Ward = /** @class */ (function () {
    function Ward() {
    }
    return Ward;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/_pages/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/account-apply/account-apply.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/account-apply/account-apply.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 1vw; margin-left: 3vw;\">\r\n  <app-alert></app-alert>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n      <div *ngFor=\"let p of postDatas; let j = index\">\r\n        <app-apply-item (remove)=\"remove($event)\" [p]=\"p\" [index]=\"j\"></app-apply-item>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/account-apply/account-apply.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountApplyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/_services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket_apply_socket_service__ = __webpack_require__("../../../../../src/app/_socket/apply-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountApplyComponent = /** @class */ (function () {
    function AccountApplyComponent(userService, alertService, mApplySocket, postService) {
        this.userService = userService;
        this.alertService = alertService;
        this.mApplySocket = mApplySocket;
        this.postService = postService;
        this.postDatas = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_index__["d" /* Users */]();
    }
    AccountApplyComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') === null) {
            this.alertService.error('Please login to continuos!');
            return;
        }
        this.loadUsersApply();
    };
    AccountApplyComponent.prototype.loadUsersApply = function () {
        var _this = this;
        var id = JSON.parse(localStorage.getItem('currentUser')).user._id;
        this.mApplySocket.join(id);
        this.mApplySocket.getAppyMessages().subscribe(function (msg) {
            console.log('co tin nhan apply');
            _this.postDatas[_this.postDatas.length] = JSON.parse(JSON.stringify(msg)).data;
            _this.alertService.success('#' + _this.postDatas.length);
        });
        this.mApplySocket.getUnApplyMessage().subscribe(function (msg) {
            console.log('co tin nhan un-apply');
            var id = JSON.parse(JSON.stringify(msg)).data._id;
            _this.postDatas.forEach(function (e, i) {
                if (e._id == id) {
                    _this.postDatas.splice(i, 1);
                    return;
                }
            });
            _this.alertService.success('#' + _this.postDatas.length);
            if (_this.postDatas.length == 0)
                _this.alertService.success('No item');
        });
        this.userService.getUserByIdApply(id).catch(function (err) {
        }).then(function (data) {
            if (data.result == 1) {
                _this.user = data.data;
                _this.user.apply.forEach(function (a) {
                    var p = new __WEBPACK_IMPORTED_MODULE_5__models_index__["c" /* PostData */]();
                    p = JSON.parse(JSON.stringify(a));
                    _this.postDatas[_this.postDatas.length] = p;
                    console.log(_this.postDatas);
                });
                _this.alertService.success('#' + _this.postDatas.length);
                if (_this.user.apply.length == 0) {
                    _this.alertService.success('No item');
                }
            }
        });
    };
    AccountApplyComponent.prototype.remove = function (val) {
        // console.log(val);
        // console.log(val._id+" " + val.removed);
        this.mApplySocket.remove({ room: this.user._id, data: this.postDatas[val.index] });
        // this.postDatas.splice(val.index,1);
    };
    AccountApplyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account-apply',
            template: __webpack_require__("../../../../../src/app/_pages/account-apply/account-apply.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/account-apply/account-apply.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__socket_apply_socket_service__["a" /* ApplySocketService */],
            __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]])
    ], AccountApplyComponent);
    return AccountApplyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/account-post-item/account-post-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    padding: 25px;\r\n    box-shadow: 0 2px 1px 0 rgba(0,0,0,.2), 0 1px 0px 0 rgba(0,0,0,.39);\r\n}\r\n.right{\r\n    float: right;\r\n}\r\n*{\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";    \r\n    color: black;\r\n    /* font-weight: bold;\r\n    color: white;\r\n    background-color: #154e4e; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/account-post-item/account-post-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let e of p?.apply\">\r\n    <form style=\"text-align: center; background-color: rgba(231, 217, 217, 0.933)\" >\r\n            <label>{{ e.info.first_name }} {{e.info.last_name }}</label>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/account-post-item/account-post-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPostItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post_data__ = __webpack_require__("../../../../../src/app/_models/post_data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountPostItemComponent = /** @class */ (function () {
    function AccountPostItemComponent() {
        this.p = new __WEBPACK_IMPORTED_MODULE_1__models_post_data__["a" /* PostData */]();
    }
    AccountPostItemComponent.prototype.ngOnInit = function () {
    };
    AccountPostItemComponent.prototype.update = function () { };
    AccountPostItemComponent.prototype.remove = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_post_data__["a" /* PostData */])
    ], AccountPostItemComponent.prototype, "p", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AccountPostItemComponent.prototype, "index", void 0);
    AccountPostItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account-post-item',
            template: __webpack_require__("../../../../../src/app/_pages/account-post-item/account-post-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/account-post-item/account-post-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountPostItemComponent);
    return AccountPostItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/account-post/account-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 350px;\r\n    text-align: center;\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";    \r\n  }\r\n.mat-header-row{\r\n    background-color: #32383e;\r\n  }\r\n.mat-header-cell{\r\n    color: white;\r\n}\r\n.mat-cell{\r\n    max-height: 30px;\r\n}\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/account-post/account-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-alert></app-alert>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">\r\n      <!-- <div *ngFor=\"let p of postDatas; let j = index\"> -->\r\n      <div class=\"example-container mat-elevation-z8\">\r\n        <mat-table #table [dataSource]=\"dataSource\">\r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"title\">\r\n            <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.info.title}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Weight Column -->\r\n          <ng-container matColumnDef=\"location\">\r\n            <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.info.address}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- <ng-container matColumnDef=\"tasks\">\r\n              <mat-header-cell *matHeaderCellDef> Tasks </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> {{element.content.tasks}} </mat-cell>\r\n            </ng-container> -->\r\n        \r\n          <ng-container matColumnDef=\"start_date\">\r\n            <mat-header-cell *matHeaderCellDef> Start date </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.info.start}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"end_date\">\r\n            <mat-header-cell *matHeaderCellDef> End date </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.info.end}} </mat-cell>\r\n          </ng-container>\r\n        \r\n          <ng-container matColumnDef=\"apply\">\r\n            <mat-header-cell *matHeaderCellDef> Apply </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.applies}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"list_apply\">\r\n            <mat-header-cell *matHeaderCellDef> List apply </mat-header-cell>\r\n            <mat-cell (click)=\"viewApply(element)\" *matCellDef=\"let element\" style=\"cursor: pointer; color: turquoise;\"> View </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"edit\">\r\n              <mat-header-cell *matHeaderCellDef> Edit </mat-header-cell>\r\n              <mat-cell (click)=\"edit(element._id)\"  *matCellDef=\"let element\" style=\"cursor: pointer; color: turquoise;\"> <mat-icon>edit</mat-icon> </mat-cell>              \r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"remove\">\r\n                <mat-header-cell *matHeaderCellDef> Remove </mat-header-cell>\r\n                <mat-cell (click)=\"remove(element)\" *matCellDef=\"let element\" style=\"text-align: center; cursor: pointer; color: red;\">                    \r\n                  <mat-icon>remove</mat-icon>\r\n                 </mat-cell>              \r\n              </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n\r\n        <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n        </mat-paginator>\r\n      </div>\r\n      <!-- <app-account-post-item (remove)=\"remove($event)\" [p]=\"p\" [index]=\"j\"></app-account-post-item> -->\r\n      <!-- </div> -->\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <app-account-post-item [p]=\"post\"></app-account-post-item>\r\n    </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/account-post/account-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountPostComponent = /** @class */ (function () {
    function AccountPostComponent(alertService, postService, route) {
        this.alertService = alertService;
        this.postService = postService;
        this.route = route;
        this.postDatas = [];
        this.displayedColumns = ['title', 'location', 'start_date', 'end_date', 'apply', 'list_apply', 'edit', 'remove'];
        this.loading = false;
    }
    AccountPostComponent.prototype.checkAuth = function () {
        if (!JSON.parse(localStorage.getItem('currentUser'))) {
            this.alertService.error('Please login to continuos!');
            return false;
        }
        else
            return true;
    };
    AccountPostComponent.prototype.ngOnInit = function () {
        if (this.checkAuth()) {
            this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
            this.loadPosts();
        }
        else {
            return;
        }
    };
    AccountPostComponent.prototype.loadPosts = function () {
        var _this = this;
        if (!this.checkAuth())
            return;
        this.postService.getPostsByUserId(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* appConfig */].LIMIT, 0, this.currUser._id)
            .catch(function (err) {
            console.log(err || 'Server error!');
            window.alert(err || 'Server error!');
        })
            .then(function (data) {
            console.log(data);
            // this.postDatas = data.data;
            data.data.forEach(function (e) {
                e.applies = e.apply.length;
                e.info.start = e.info.start_date.toString().substring(0, 10);
                e.info.end = e.info.end_date.toString().substring(0, 10);
                _this.postDatas.push(e);
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */](_this.postDatas);
            });
        });
    };
    AccountPostComponent.prototype.viewApply = function (e) {
        this.post = e;
        console.log(e);
    };
    AccountPostComponent.prototype.edit = function (id) {
        window.open(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* appConfig */].WEB_SITE + "/post/update/" + id, '_blank');
        // this.route.navigate(['/post', {id:id}]);
        console.log(id);
    };
    AccountPostComponent.prototype.remove = function (e) {
        var _this = this;
        this.loading = true;
        this.postService.removePostById(e._id).catch(function (err) {
            window.alert('An error occurred while removing!');
        })
            .then(function (data) {
            if (data.result == 1) {
                _this.postDatas.forEach(function (el, i) {
                    if (el._id == e._id) {
                        if (_this.post._id == e._id)
                            _this.post = new __WEBPACK_IMPORTED_MODULE_2__models_index__["c" /* PostData */]();
                        _this.postDatas.splice(i, 1);
                        _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */](_this.postDatas);
                        _this.loading = false;
                        return;
                    }
                });
            }
        });
    };
    AccountPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account-post',
            template: __webpack_require__("../../../../../src/app/_pages/account-post/account-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/account-post/account-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]])
    ], AccountPostComponent);
    return AccountPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  .profile-setting li{\r\n    box-shadow: 0 1px 3px rgba(0,0,1,.1);\r\n    display: inline;\r\n    padding: 1vh;\r\n  }\r\n  .profile-setting li a:hover{\r\n    color: #EB1919;\r\n    text-decoration: none;\r\n    cursor:pointer;\r\n}\r\n.active a {\r\n  color: #EB1919;\r\n  text-decoration: none;\r\n}\r\n.profile-setting{\r\n  -webkit-padding-start:1%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div  style=\"padding-left: 5%; padding-top: 2%;\">\r\n  <div>\r\n    <div class=\"row\">\r\n      <ul class=\"profile-setting\" *ngFor=\"let tab of tabs\">\r\n        <li [ngClass]=\"tab.active?'active':''\">\r\n          <a (click)=\"tabClick(tab)\" routerLink={{tab.link}}>{{tab.title}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_tab__ = __webpack_require__("../../../../../src/app/_models/tab.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_apply_account_apply_component__ = __webpack_require__("../../../../../src/app/_pages/account-apply/account-apply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_post_account_post_component__ = __webpack_require__("../../../../../src/app/_pages/account-post/account-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountComponent = /** @class */ (function () {
    function AccountComponent(verifyService, router, titleService, accountPost, accountApply) {
        this.verifyService = verifyService;
        this.router = router;
        this.titleService = titleService;
        this.accountPost = accountPost;
        this.accountApply = accountApply;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabs = [new __WEBPACK_IMPORTED_MODULE_4__models_tab__["a" /* Tab */](0, 'Applies', 'apply', this.accountApply),
            new __WEBPACK_IMPORTED_MODULE_4__models_tab__["a" /* Tab */](1, 'Posts', 'post', this.accountPost)];
        this.tabs.forEach(function (t) {
            t.active = false;
            if (window.location.pathname === '/account/' + t.link || _this.router.url === '/account/' + t.link)
                t.active = true;
        });
    };
    AccountComponent.prototype.tabClick = function (tab) {
        this.tabs.forEach(function (t) {
            t.active = false;
        });
        tab.active = true;
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/_pages/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_verify_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */],
            __WEBPACK_IMPORTED_MODULE_6__pages_account_post_account_post_component__["a" /* AccountPostComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pages_account_apply_account_apply_component__["a" /* AccountApplyComponent */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/apply-item/apply-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n    padding: 25px;\r\n    box-shadow: 0 2px 3px 0 rgba(0,0,0,.2), 0 1px 2px 0 rgba(0,0,0,.39);\r\n}\r\n.right{\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/apply-item/apply-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"card\" style=\"margin-bottom: 2vh;\">\r\n    <div class=\"row\">\r\n      <label style=\"font-weight: bold; font-size: 18px; cursor: pointer;\">{{p.info.title}}</label>\r\n    </div>\r\n    <div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <p class=\"col-md-12  col-sm-12\" class=\"text-primary\">{{p.info.address}}</p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <p>Start date: {{startDate}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p>End date: {{endDate}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <!-- <button (click)=\"detail()\" class=\"btn btn-sm btn-success\" style=\"margin-right: 5px;\">Detail</button> -->\r\n      <button (click)=\"remove()\" class=\"btn btn-sm btn-danger\">Remove</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/apply-item/apply-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post_data__ = __webpack_require__("../../../../../src/app/_models/post_data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__socket_apply_socket_service__ = __webpack_require__("../../../../../src/app/_socket/apply-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApplyItemComponent = /** @class */ (function () {
    function ApplyItemComponent(verifyService, postService, alertService, mApplySocket) {
        this.verifyService = verifyService;
        this.postService = postService;
        this.alertService = alertService;
        this.mApplySocket = mApplySocket;
        this.p = new __WEBPACK_IMPORTED_MODULE_1__models_post_data__["a" /* PostData */]();
        this.index = 0;
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ;
    ApplyItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verifyService.verify().then(function (res) {
            if (res.result === 1) {
                _this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
            }
            else {
                return;
            }
            // }else alert.error('');
        }).catch(function (err) { Promise.reject(err || 'error'); });
        this.startDate = this.p.info.start_date.toString().substr(0, 10);
        this.endDate = this.p.info.end_date.toString().substr(0, 10);
    };
    ApplyItemComponent.prototype.remove = function () {
        var _this = this;
        this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
        if (!this.currUser)
            return;
        var data = {
            user: this.currUser._id,
            _id: this.p._id
        };
        this.postService.unApply(data).subscribe(function (rs) {
            if (JSON.parse(JSON.parse(JSON.stringify(rs))._body).result == 1) {
                _this.removed.emit({ removed: 1, _id: _this.p._id, index: _this.index });
            }
            else
                _this.alertService.error('Error when un apply this post!');
        }, function (err) {
            if (err)
                _this.alertService.error('Error when un apply this post!');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_post_data__["a" /* PostData */])
    ], ApplyItemComponent.prototype, "p", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ApplyItemComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])("remove"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ApplyItemComponent.prototype, "removed", void 0);
    ApplyItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-apply-item',
            template: __webpack_require__("../../../../../src/app/_pages/apply-item/apply-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/apply-item/apply-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_verify_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_5__socket_apply_socket_service__["a" /* ApplySocketService */]])
    ], ApplyItemComponent);
    return ApplyItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"cursor: pointer;\" class=\"row\" class=\"comment-event\">\r\n    <small style=\"color: #0c7dee; padding-left: 15px;\"> {{countComments}} comments</small>\r\n\r\n</div>\r\n<div class=\"\">\r\n    <form class=\"form-inline\" style=\"margin: 1em;\">\r\n            <img *ngIf=\"isAdding\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">\r\n        <input name=\"comment\" style=\"width: 70%; font-size: 13px;border-radius: 15px 0 0 15px; height: 2.3em;\" (keydown)=\"keyDownFunction($event)\"\r\n            [ngModel]=\"commentVal\" (click)=\"valuechange($event)\" #txtComment id=\"txtComment\" class=\"form-control\" type=\"text\"\r\n            placeholder=\"Comment...\">\r\n        <button style=\"text-align: center;border-radius: 0 15px 15px 0; height: 2.3em;font-size: 13px;\" (click)=\"comment()\" class=\"btn btn-default\">Comment</button>\r\n    </form>\r\n</div>\r\n<small *ngIf=\"isCommentRemaining\" (click)=\"loadmoreComments()\" style=\"color: #0c7dee; padding-left: 10px; cursor: pointer;\">Load more old comments</small>\r\n<!-- *ngIf=\"showComment\" -->\r\n<div style=\"margin-top: 1em;\">\r\n    <img *ngIf=\"loadingComment\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">\r\n    <div *ngFor=\"let c of comments\">\r\n        <app-item-comment [comment]=\"c\"></app-item-comment>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reply_service__ = __webpack_require__("../../../../../src/app/_services/reply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comment_service__ = __webpack_require__("../../../../../src/app/_services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socket_socket_service__ = __webpack_require__("../../../../../src/app/_socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__socket_comment_socket_service__ = __webpack_require__("../../../../../src/app/_socket/comment-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_comment__ = __webpack_require__("../../../../../src/app/_models/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CommentComponent = /** @class */ (function () {
    // socket = io(appConfig.socket);
    function CommentComponent(postService, verifyService, router, mSocket, mCommentSocket, commentService, replyService) {
        this.postService = postService;
        this.verifyService = verifyService;
        this.router = router;
        this.mSocket = mSocket;
        this.mCommentSocket = mCommentSocket;
        this.commentService = commentService;
        this.replyService = replyService;
        this.updatePost = new __WEBPACK_IMPORTED_MODULE_9__models_index__["b" /* Post */]();
        this.comments = new Array();
        this.countComments = 0;
        this.commentVal = '';
        this.user = new __WEBPACK_IMPORTED_MODULE_9__models_index__["d" /* Users */]();
        this.loadingComment = false;
        this.loadmoreComment = false;
        this.isCommentRemaining = false;
        this.commentRemaining = 0;
        this.isAdding = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.socket = this.mSocket.getSocket();
        var that = this;
        // this.socket.on('connect', function (data) {
        //   console.log("connected");
        // });
        this.mCommentSocket.join(this.post._id);
        this.mCommentSocket.getCommentMessages().subscribe(function (data) {
            console.log('co tin nhan ne');
            that.postService.getPostById((JSON.parse(JSON.stringify(data))._body).room).catch(function (err) {
                console.log(err || 'Get post by id is failed.');
            }).then(function (data) {
                // that.comments = data.data.comments;
                // this.countComments = this.comments.length;
                // this.comments.forEach(e => {
                //   this.countComments += e.reply.length;
                // });
            });
        }, function (err) {
            console.log();
        });
        this.countCommentsByPost(0);
        this.showComment();
        // this.comments = this.post.comments;
        // this.countComments = this.comments.length;
        // this.comments.forEach(e => {
        //   this.countComments += e.reply.length;
        // });
    };
    CommentComponent.prototype.countCommentsByPost = function (skip) {
        var _this = this;
        this.postService.countCommentByPostId(this.post._id, skip).catch(function (err) {
            return 0;
        })
            .then(function (data) {
            _this.countComments = data.data || 0;
            console.log('count comment ' + data);
            return _this.countComments;
        });
    };
    CommentComponent.prototype.comment = function () {
        var _this = this;
        if (this.txtComment.nativeElement.value) {
            this.isAdding = true;
            var cmt_1 = new __WEBPACK_IMPORTED_MODULE_8__models_comment__["a" /* Comment */]();
            cmt_1.post = this.post._id;
            cmt_1.content = this.txtComment.nativeElement.value;
            cmt_1.owner = this.user._id;
            cmt_1.create_at = new Date();
            this.commentService.addComment(cmt_1).catch(function (err) {
                window.alert('Server error! (add comment)');
            })
                .then(function (data) {
                _this.comments[_this.comments.length] = data.data;
                _this.countCommentsByPost(0);
                console.log(data);
                _this.txtComment.nativeElement.value = '';
                _this.isAdding = false;
                _this.socket.emit('add-comment', { "room": _this.post._id, "data": cmt_1 });
            });
        }
        console.log(this.txtComment.nativeElement.value);
    };
    CommentComponent.prototype.valuechange = function ($event) {
        var _this = this;
        this.verifyService.verify().catch(function (err) {
        }).then(function (data) {
            if (data.result === 1) {
                _this.user = JSON.parse(localStorage.getItem('currentUser')).user;
            }
            else {
                if (window.confirm('Please go to page login!')) {
                    window.open(__WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* appConfig */].apiUrl + "/login", '_blank');
                    return false;
                }
            }
        });
        return true;
    };
    CommentComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            //this.comment();
        }
    };
    CommentComponent.prototype.getComments = function () {
        var _this = this;
        this.loadingComment = true;
        this.commentService.getComments(this.post._id, __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* appConfig */].LIMIT_COMMENT, this.comments.length)
            .catch(function (err) {
            console.log('get comment err ' + err);
        })
            .then(function (data) {
            var arr = new Array();
            arr = data.data || [];
            arr.reverse();
            _this.comments = arr.concat(_this.comments);
            _this.commentRemaining = data.number || 0;
            if (_this.commentRemaining > 0)
                _this.isCommentRemaining = true;
            else
                _this.isCommentRemaining = false;
            _this.loadingComment = false;
            console.log(data);
        });
    };
    CommentComponent.prototype.showComment = function () {
        this.getComments();
    };
    CommentComponent.prototype.loadmoreComments = function () {
        this.getComments();
        console.log('load more');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('txtComment'),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "txtComment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__models_index__["c" /* PostData */])
    ], CommentComponent.prototype, "post", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comment',
            template: __webpack_require__("../../../../../src/app/_pages/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_5__services_verify_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__socket_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_7__socket_comment_socket_service__["a" /* CommentSocketService */],
            __WEBPACK_IMPORTED_MODULE_3__services_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_2__services_reply_service__["a" /* ReplyService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"row\">\n      <div  *ngIf=\"load\" >\n          <img src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">          \n      </div>\n      <p style=\"color: red;\">{{message}}</p>\n    <div *ngIf=\"!load&&!message\" class=\"col-xs-11 col-sm-8 col-md-6\">\n        <h6 style=\"margin-top: 1em\">Contact</h6>\n        <hr>\n      <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && save(f.value)\">\n        <fieldset ngModelGroup=\"contact\">\n          <div class=\"form-group\">\n            <label>Email:</label>\n            <div>\n              <input type=\"email\" name=\"email\" required #eemail=\"ngModel\" id=\"\" [(ngModel)]=\"email\" class=\"form-control\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n              <div *ngIf=\"f.submitted&&eemail.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Email is required</div>\n              <div *ngIf=\"eemail.errors?.pattern\" style=\"color:red;\" class=\"form-control-feedback\">Email is invalid</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Telephone:</label>\n            <div>\n              <input class=\"form-control\" pattern=\"[0-9]{9,40}\" type=\"text\" required name=\"phone\" id=\"\" [(ngModel)]=\"phone\" #pphone=\"ngModel\">\n              <div *ngIf=\"f.submitted&&pphone.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Telephone is required</div>\n              <div *ngIf=\"!pphone.errors?.required&&pphone?.invalid\" style=\"color:red;\" class=\"form-control-feedback\">Telephone is invalid</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Web page:</label>\n            <div>\n              <input type=\"url\" name=\"web_page\" id=\"\" [(ngModel)]=\"web_page\" class=\"form-control\">\n            </div>\n          </div>\n        </fieldset>\n        \n        <h6>Address recidence</h6>\n        <hr>\n        <fieldset ngModelGroup=\"address_residence\">\n          <div class=\"form-group\">\n            <input value={{address}} placeholder=\"search for location\" type=\"text\"\n              class=\"form-control\" #search>\n          </div>\n          <agm-map [latitude]=\"lat\" [longitude]=\"long\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n            <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\n          </agm-map>\n          <div class=\"form-group\">\n            <input type=\"text\" hidden=\"\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\">\n            <input type=\"text\" hidden=\"\" name=\"latitude\" [(ngModel)]=\"latitude\" class=\"form-control\">\n            <input type=\"text\" hidden=\"\" name=\"longitude\" [(ngModel)]=\"longitude\" class=\"form-control\">\n          </div>\n        </fieldset>\n        <app-alert></app-alert>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">\n        <button [disabled]=\"loading\" class=\"btn btn-sm btn-primary\" name=\"\" id=\"\">Update</button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__("../../../../../src/app/_services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactComponent = /** @class */ (function () {
    function ContactComponent(userService, alertService, mapsAPILoader, ngZone) {
        var _this = this;
        this.userService = userService;
        this.alertService = alertService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_index__["d" /* Users */]();
        this.loading = false;
        this.load = true;
        this.lat = 10.8480966697085;
        this.long = 106.81203118029157;
        if (localStorage.getItem('currentUser') === null) {
            this.load = false;
            this.message = 'Please login to continues...';
            return;
        }
        this.message = 'Chờ em xíu...';
        var id = JSON.parse(localStorage.getItem('currentUser')).user._id;
        this.userService.getUsersById(id).catch(function (err) { console.log(err); })
            .then(function (data) {
            if (data.result === 1) {
                _this.user = data.data;
                _this.email = _this.user.contact.email;
                _this.phone = _this.user.contact.phone;
                _this.web_page = _this.user.contact.web_page;
                if (_this.user.address_residence.latitude) {
                    _this.latitude = _this.user.address_residence.latitude.toString();
                    _this.lat = Number.parseFloat(_this.latitude.toString());
                }
                if (_this.user.address_residence.longitude) {
                    _this.longitude = _this.user.address_residence.longitude.toString();
                    _this.long = Number.parseFloat(_this.longitude.toString());
                }
                _this.address = _this.user.address_residence.address;
                _this.load = false;
                _this.message = '';
            }
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set google maps defaults
        this.zoom = 12;
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            _this.autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = _this.autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.viewport.toJSON().south.toString();
                    _this.longitude = place.geometry.viewport.toJSON().east.toString();
                    _this.lat = place.geometry.location.lat();
                    _this.long = place.geometry.location.lng();
                    _this.address = place.formatted_address;
                    _this.zoom = 12;
                });
            });
        });
    };
    ContactComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude.toString();
                _this.longitude = position.coords.longitude.toString();
                _this.zoom = 12;
            });
        }
    };
    ContactComponent.prototype.save = function (val) {
        var _this = this;
        if (val) {
            if (!this.latitude || !this.longitude) {
                this.alertService.error('Address is incorrect!');
                return;
            }
            this.loading = true;
            this.user.contact.email = this.email;
            this.user.contact.phone = this.phone;
            this.user.contact.web_page = this.web_page;
            this.user.address_residence.address = this.address;
            this.user.address_residence.latitude = this.latitude.toString();
            this.user.address_residence.longitude = this.longitude.toString();
            this.userService.updateUser(this.user).subscribe(function (data) {
                _this.loading = false;
                if (data.json().result === 1) {
                    _this.alertService.success('Update completed!');
                }
                else
                    _this.alertService.error(data.json().msg);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ContactComponent.prototype, "searchElementRef", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/_pages/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/_pages/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{\r\n    height: 45px;\r\n    background-color: rgb(9, 158, 146);\r\n    color: white;\r\n}\r\n/* mouse over link */\r\na:hover {\r\n    color: #EB1919;\r\n    text-decoration: none;\r\n}\r\nli a:hover{\r\n    color: #EB1919;\r\n}\r\na{\r\n    color: white;\r\n}\r\n.dropdown-menu a{\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg \">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Home</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>              \r\n        </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" *ngIf=\"isLogin\" [routerLink]=\"['/post']\">Post<span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\" style=\"margin-right: 10%;\">\r\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n                <li class=\"nav-item dropdown\">\r\n                    <a style=\"text-decoration: none;\" *ngIf=\"isLogin\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            <span><img class=\"rounded-circle img-fluid\" alt=\"#\" width=\"25\" height=\"25\" src={{image}}></span>\r\n                            <span>{{username}}</span>    \r\n                    </a>\r\n                    <div class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/account/apply']\">Account</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/profile/info']\">Settings</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a  class=\"dropdown-item\" (click)=\"logout()\">Log out</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a style=\"margin-right: 1em\" *ngIf=\"(!isLogin&&isRouteLogin)||(!isLogin&&!isRouteSignup)\" (click)=\"signup()\">Sign up</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a *ngIf=\"(!isLogin&&isRouteSignup) || !isLogin&&!isRouteLogin\" (click)=\"login()\">Log in</a>\r\n                </li>\r\n            </ul>\r\n            <!-- <input  class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\r\n        </form>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/_pages/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, alert, verifyService) {
        var _this = this;
        this.route = route;
        this.alert = alert;
        this.verifyService = verifyService;
        this.isLogin = false;
        this.isRouteLogin = false;
        this.isRouteSignup = false;
        this.image = '';
        this.username = '';
        verifyService.verify().then(function (res) {
            if (res.result === 1) {
                _this.isLogin = true;
                var currUser = JSON.parse(localStorage.getItem('currentUser')).user;
                _this.image = currUser.image;
            }
            else {
            }
            // }else alert.error('');
        }).catch(function (err) { Promise.reject(err || 'error'); });
        if (window.location.pathname === '/login' || this.route.url === '/login')
            this.isRouteLogin = true;
        if (window.location.pathname === '/signup' || this.route.url === '/signup')
            this.isRouteSignup = true;
        console.log(window.location.pathname);
        console.log('this.route.url ' + this.route.url);
    }
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.route.navigate(['/login']);
    };
    HeaderComponent.prototype.signup = function () {
        this.route.navigate(['/signup']);
    };
    HeaderComponent.prototype.login = function () {
        this.route.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/_pages/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1__services_verify_service__["a" /* VerifyService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/home-center/home-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    font-family: inherit;    \r\n}\r\n.event{\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 4px 12px 0 rgba(0,0,0,.22);\r\n    background-color: white;\r\n}\r\n.container-event{  \r\n    padding: 5%;  \r\n}\r\n.container-event p{\r\n    line-height: 1.2;\r\n    color: black;\r\n    text-overflow: ellipsis;\r\n    /* display:block;\r\n    white-space: nowrap;\r\n    overflow: hidden; */\r\n}\r\n.badge{\r\n    background-color: #33b5e5;\r\n    color: white;\r\n}\r\n.organi-event{\r\n    color: black;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n.tab-content label{\r\n    color: black;\r\n}\r\n.event .social-event-button{\r\n    cursor: pointer;\r\n    color: #00C851;\r\n    padding-left: 15px;\r\n}\r\n.nav li{\r\n    padding: 5px;\r\n}\r\n.nav li a{\r\n    text-decoration: none;\r\n}\r\nsmall{\r\n    margin-bottom: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/home-center/home-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"event\" style=\"margin-top: 5px;\">\r\n  <div class=\"container-event\">\r\n    <div class=\"head-event\">\r\n      <form class=\"form-inline\">\r\n        <div class=\"\" style=\"width: 70%;\">\r\n          <p class=\"organi-event\" id=\"username\">\r\n            <span>\r\n              <img class=\"rounded-circle img-fluid\" alt=\"#\" width=\"45\" height=\"45\" src={{post.owner.image}}>\r\n            </span>\r\n            {{post.owner.info.full_name}}</p>\r\n        </div>\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-default btn-sm\" id=\"share\">Share</button>\r\n          <button [ngStyle]=\"{'background-color': isApply? 'whitesmoke' : 'yellowgreen'}\" (click)=\"applySubmit()\" type=\"button\" class=\"btn btn-default btn-sm\"\r\n            id=\"apply\">{{txtApply}}\r\n            <span class=\"badge\">{{apply}}</span>\r\n            <!-- [ngStyle]=\"{'background-color': isApply? 'green' : 'gray'}\" -->\r\n            <!-- [ngClass]=\"{greenClass: list.enabled, redClass: !list.enabled}\"> -->\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"content-event\">\r\n      <div class=\"row\">\r\n        <p style=\"margin-left: 15px; margin-top: 0.5em;\" class=\"col-md-12 col-sm-12\" class=\"organi-event\">{{post.info.title}}</p>\r\n      </div>\r\n      <div class=\"row\">\r\n        <small class=\"col-md-12  col-sm-12\" style=\"color: #868e96!important;\">#{{post.info.areas_expertise.name}}</small>\r\n      </div>\r\n      <div class=\"row\">\r\n        <p class=\"col-md-12  col-sm-12\" style=\"color: #FF8800;\">{{post.info.address}}</p>\r\n      </div>\r\n      <div class=\"row\">\r\n        <p style=\"font-weight: bold;\" class=\"col-md-12  col-sm-12\">Need {{this.post.info.number}} volunteers</p>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6  col-sm-6\">\r\n          <p>Start date: {{startDate}}</p>\r\n        </div>\r\n        <div class=\"col-md-6  col-sm-6\">\r\n          <p>End date: {{endDate}}</p>\r\n        </div>\r\n      </div>\r\n      <div id=\"tasks\">\r\n        <p style=\"color:#2BBBAD\">Tasks</p>\r\n        <p>{{post.content.tasks}}\r\n        </p>\r\n      </div>\r\n      <p style=\"color: #000000; cursor: pointer; font-weight: bold; font-size: 12px;\" (click)=\"readMore()\">{{txtReadMore}}</p>\r\n      <div *ngIf=\"show\" class=\"tab-content\">\r\n        <div id=\"objectives\">\r\n          <p style=\"color:#2BBBAD\">Objectives</p>\r\n          <p>{{post.content.objective}}</p>\r\n        </div>\r\n        <div id=\"requirements\">\r\n          <p style=\"color:#2BBBAD\">Requirements</p>\r\n          <p>{{post.content.requirement}}</p>\r\n        </div>\r\n        <!-- </div> -->\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <p class=\"col-md-12\" style=\"color: teal\">Contact with us</p>\r\n      </div>\r\n      <div class=\"row\">\r\n        <p style=\"color: #4267b2;\" class=\"col-md-12\">E-mail: {{post.contact.email}}</p>\r\n      </div>\r\n      <div class=\"row\">\r\n        <p style=\"color: #4267b2\" class=\"col-md-12\">Phone: {{post.contact.phone}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <app-comment class=\"col-md-12\" [post]=\"post\"></app-comment>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/home-center/home-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_post_data__ = __webpack_require__("../../../../../src/app/_models/post_data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket_apply_socket_service__ = __webpack_require__("../../../../../src/app/_socket/apply-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeCenterComponent = /** @class */ (function () {
    function HomeCenterComponent(verifyService, myElement, postService, mApplySocket) {
        this.verifyService = verifyService;
        this.myElement = myElement;
        this.postService = postService;
        this.mApplySocket = mApplySocket;
        this.show = false;
        this.comments = 0;
        this.txtReadMore = 'Read more...';
        this.applies = [];
        this.apply = 0;
        this.txtApply = 'Apply';
        this.isApply = false;
    }
    HomeCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = this.post.info.start_date.toString().substr(0, 10);
        this.endDate = this.post.info.end_date.toString().substr(0, 10);
        this.post.owner.info.full_name = this.post.owner.info.first_name + ' ' + this.post.owner.info.last_name;
        this.applies = this.post.apply;
        this.apply = this.applies.length;
        this.verifyService.verify().then(function (res) {
            if (res.result === 1) {
                _this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
                _this.mApplySocket.join(_this.currUser._id);
                _this.image = _this.currUser.image;
                _this.post.apply.forEach(function (e) {
                    console.log(e);
                    if (_this.currUser._id == e) {
                        _this.txtApply = 'Un Apply';
                        _this.isApply = true;
                        return;
                    }
                });
                _this.mApplySocket.getUnApplyMessage().subscribe(function (msg) {
                    if (JSON.parse(JSON.stringify(msg)).data._id == _this.post._id) {
                        console.log('co tin nhan un apply');
                        _this.txtApply = 'Apply';
                        _this.isApply = false;
                        _this.applies.splice(_this.applies.indexOf(_this.currUser._id), 1);
                        _this.apply = _this.applies.length;
                    }
                });
            }
            else {
            }
            // }else alert.error('');
        }).catch(function (err) { Promise.reject(err || 'error'); });
    };
    HomeCenterComponent.prototype.readMore = function () {
        if (this.show) {
            this.show = false;
            this.txtReadMore = 'Read more...';
        }
        else {
            this.show = true;
            this.txtReadMore = 'Hide...';
        }
    };
    HomeCenterComponent.prototype.addReply = function () {
        var _this = this;
        this.currUser = JSON.parse(localStorage.getItem('currentUser')).user;
        if (!this.currUser)
            return;
        var data = {
            user: this.currUser._id,
            _id: this.post._id
        };
        if (!this.isApply) {
            this.isApply = true;
            this.postService.addApply(data).subscribe(function (rs) {
                console.log(rs);
                _this.applies[_this.applies.length] = _this.currUser._id;
                _this.apply = _this.applies.length;
                _this.txtApply = 'Un Apply';
                console.log(_this.post.owner._id);
                _this.mApplySocket.apply({ room: _this.currUser._id, data: _this.post });
            }, function (err) {
                if (err)
                    console.log(err || 'apply err');
            });
        }
        else {
            this.isApply = false;
            this.postService.unApply(data).subscribe(function (rs) {
                console.log(rs);
                _this.applies.splice(_this.applies.indexOf(_this.currUser._id), 1);
                _this.apply = _this.applies.length;
                _this.txtApply = 'Apply';
                _this.mApplySocket.remove({ room: _this.currUser._id, data: _this.post });
            }, function (err) {
                if (err)
                    console.log(err || 'un apply err');
            });
        }
    };
    HomeCenterComponent.prototype.applySubmit = function () {
        var _this = this;
        this.verifyService.verify().then(function (res) {
            if (res.result === 1) {
                _this.addReply();
            }
            else {
                if (window.confirm('Please go to page login!')) {
                    console.log('login');
                    window.open('http://localhost:4200/login', '_blank');
                    return false;
                }
            }
        }).catch(function (err) { Promise.reject(err || 'error'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_post_data__["a" /* PostData */])
    ], HomeCenterComponent.prototype, "post", void 0);
    HomeCenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-center',
            template: __webpack_require__("../../../../../src/app/_pages/home-center/home-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/home-center/home-center.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_verify_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_4__socket_apply_socket_service__["a" /* ApplySocketService */]])
    ], HomeCenterComponent);
    return HomeCenterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 250px;\r\n  }\r\n.places input{\r\n    height: 25px;\r\n}\r\n\r\n.home{\r\n    padding-left: 1%;\r\n    padding-right: 1%;\r\n}\r\n/* .column-left {\r\n    float: left;\r\n    width: 20%;\r\n    padding: 5px;\r\n    line-height: 0.9;\r\n} */\r\n.row-custom{\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n.column-right {\r\n    /* display: none;\r\n    float: left;\r\n    width: 20%;\r\n    padding: 15px;\r\n    background-color: yellow; */\r\n}\r\n.column-center {\r\n    margin-bottom: 10em;\r\n    /* width: 60%; */\r\n    /* padding-top: 5px;\r\n    padding-left: 8%;\r\n    padding-right: 8%; */\r\n}\r\n.custom-row:after {\r\n    /* content: \"\";\r\n    display: table;\r\n    clear: both; */\r\n}\r\n/* \r\n @media (max-width:900px) {\r\n    .column-left {\r\n        width: 30%;\r\n    }\r\n    .column-center {\r\n        width: 70%;\r\n    }\r\n    .column-right {\r\n        display: none;\r\n    }\r\n}\r\n@media (max-width:600px) {\r\n    .column-left {\r\n       display: none;\r\n    }\r\n    .column-center {\r\n        width: 100%;\r\n    }\r\n    .column-right {\r\n        display: none;\r\n    }\r\n}  */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"home\">\r\n    <div>\r\n        <!-- <div class=\"row\">\r\n            <div class=\"places\" class=\"col-md-12\">\r\n                <input placeholder=\"search for location\" type=\"text\" class=\"form-control\" #search>\r\n                <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                </agm-map>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <ul *ngFor=\"let e of areaExsCounts\" class=\"list-inline\">\r\n                    <li>\r\n                        <a (click)=clickArea(e) style=\"font-weight: bold; cursor: pointer; color: turquoise;\">{{e?.area_ex?.name}}</a>\r\n                        <br>\r\n                        <label>#{{e?.count}} posts</label>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"column-center\" class=\"col-md-6\">\r\n                <div *ngFor=\"let p of posts; let j = index\">\r\n                    <app-home-center [post]=\"p\"></app-home-center>\r\n                </div>\r\n                <img style=\"text-align: center;\" *ngIf=\"loadMore\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">\r\n            </div>\r\n            <div class=\"col-md-3\" class=\"column-right\">\r\n                <p>Welcome to the MEAN Stack!!</p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket_apply_socket_service__ = __webpack_require__("../../../../../src/app/_socket/apply-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_area_exper_service__ = __webpack_require__("../../../../../src/app/_services/area-exper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_area_ex__ = __webpack_require__("../../../../../src/app/_models/area-ex.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = /** @class */ (function () {
    function HomeComponent(usersService, titleService, mapsAPILoader, ngZone, areaExService, postService, mApplySocket) {
        this.usersService = usersService;
        this.titleService = titleService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.areaExService = areaExService;
        this.postService = postService;
        this.mApplySocket = mApplySocket;
        this.users = [];
        this.posts = [];
        this.loadMore = false;
        this.remaining = true;
        this.skip = 0;
        this.areaExsCounts = [__WEBPACK_IMPORTED_MODULE_7__models_area_ex__["a" /* AreaExpertiseCount */]];
        this.titleService.setTitle("Volunteers | Home");
    }
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.usersService.getAll().then(function (data) {
            _this.users = data;
        }).catch(function (err) {
            console.log('Error ' + err);
        });
    };
    HomeComponent.prototype.loadPosts = function (limit, spkip) {
        var _this = this;
        this.postService.getPosts(limit, spkip).catch(function (err) {
            window.alert('Server error!');
        }).then(function (data) {
            if (data.result === 1) {
                if (data.data.length > 0) {
                    console.log('data.data ' + data.data.length);
                    var arr = new Array();
                    arr = data.data;
                    // this.posts.forEach(e=>{
                    //   arr.forEach((p,i)=>{
                    //     if(e._id==p._id)
                    //      arr.splice(i,1);
                    //   })
                    // });
                    _this.posts = _this.posts.concat(arr);
                }
                else {
                    _this.remaining = false;
                }
                _this.loadMore = false;
            }
            else
                window.alert('Server error!');
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts = [];
        // this.loadPosts(appConfig.LIMIT, this.posts.length);
        this.areaExService.countPostByAreaEx().subscribe(function (data) {
            if (data.result == 1 && data) {
                _this.areaExsCounts = data.data;
            }
            else {
            }
        }, function (err) {
            console.log(err || 'err');
        });
        // this.loadAllUsers();
        // //set google maps defaults
        // this.zoom = 4;
        // this.latitude = 39.8282;
        // this.longitude = -98.5795;
        // //create search FormControl
        // this.searchControl = new FormControl();
        // //set current position
        // this.setCurrentPosition();
        // //load Places Autocomplete
        // this.mapsAPILoader.load().then(() => {
        //   let autocomplete = new google.maps.places.Autocomplete
        //     (this.searchElementRef.nativeElement, {
        //     });
        //   autocomplete.addListener('place_changed', () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //       //verify result
        //       if (place.geometry === undefined || place.geometry === null) {
        //         return;
        //       }
        //       //set latitude, longitude and zoom
        //       this.latitude = place.geometry.location.lat();
        //       this.longitude = place.geometry.location.lng();
        //       console.log('lat, long ' + this.latitude + ' ' + this.longitude);
        //       console.log(place);
        //       this.zoom = 12;
        //     });
        //   });
        // });
    };
    HomeComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    HomeComponent.prototype.clickArea = function (e) {
        var _this = this;
        console.log(e.area_ex._id);
        this.postService.getPostsByArea(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* appConfig */].LIMIT, 0, e.area_ex._id).catch(function (err) {
            console.log(err || 'Error');
            window.alert('Error get data from server!');
        })
            .then(function (data) {
            // this.posts = [];
            _this.posts = data.data;
            // this.posts.forEach(e=>{
            //   e.info.title= e.info.title.toUpperCase();
            //   this.posts[this.posts.length] = e;
            // });
        });
    };
    HomeComponent.prototype.onScroll = function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight
            && !this.loadMore) {
            // you're at the bottom of the page
            console.log('// youre at the bottom of the page');
            this.loadMore = true;
            this.loadPosts(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* appConfig */].LIMIT, this.posts.length);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomeComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onScroll", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/_pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__services_area_exper_service__["a" /* AreaExperService */],
            __WEBPACK_IMPORTED_MODULE_6__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_4__socket_apply_socket_service__["a" /* ApplySocketService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/info/info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    line-height: 1;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"row\">\n      <div  *ngIf=\"load\" >\n          <img src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">          \n      </div>\n      <p style=\"color: red;\">{{message}}</p>\n    <div *ngIf=\"!load&&!message\"  class=\"col-xs-11 col-sm-8 col-md-6\">\n        <h6 style=\"margin-top: 1em\">Your profile</h6>\n        <hr>\n      <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && save(f.value)\">\n        <fieldset ngModelGroup=\"info\">\n          <div class=\"form-group\">\n            <label>Firstname:</label>\n            <div>\n              <input type=\"text\" name=\"first_name\" required minlength=\"1\" maxlength=\"30\" #firstName=\"ngModel\" class=\"form-control\" [(ngModel)]=\"first_name\">\n              <div *ngIf=\"f.submitted&&firstName.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">First Name is required</div>\n              <!-- <div *ngIf=\"firstName.errors?.maxlength&&!firstName.errors?.required\" class=\"form-control-feedback\">First Name must less than 30 character.</div> -->\n              <!-- <div *ngIf=\"!firstName?.valid&&f.submitted&&!firstName.errors?.required\" class=\"form-control-feedback\">First Name must less than 30 character.</div> -->\n              <!-- <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div> -->\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Lastname:</label>\n            <div>\n              <input type=\"text\" required minlength=\"1\" maxlength=\"30\" class=\"form-control\" #lastName=\"ngModel\" name=\"last_name\" [(ngModel)]=\"last_name\">\n              <div *ngIf=\"f.submitted&&lastName.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Last Name is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Gender:</label>\n            <div>\n              <select required name=\"gender\" [(ngModel)]=\"gender\" #ggender=\"ngModel\" class=\"form-control\">\n                                  <option value=\"0\" selected=\"\">Female</option>\n                                  <option value=\"1\">Male</option>\n                                  <option value=\"2\">Other</option>\n                              </select>\n              <div *ngIf=\"f.submitted&&ggender.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Gender is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>DOB:</label>\n            <div>\n              <input min=\"{{minYear}}\" max=\"{{maxYear}}\" required type=\"date\" name=\"dob\" #ddob=\"ngModel\" [(ngModel)]=\"dob\" class=\"form-control\">\n              <div *ngIf=\"f.submitted&&ddob.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Dob is required</div>\n              <div *ngIf=\"f.submitted&&ddob?.invalid&&!ddob.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Dob is invalid</div>\n            </div>\n          </div>\n        </fieldset>\n        <app-alert></app-alert>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">\n        <button [disabled]=\"loading\" class=\"btn btn-sm btn-primary\" name=\"\" id=\"\">Update</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/_services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoComponent = /** @class */ (function () {
    function InfoComponent(userService, alertService) {
        var _this = this;
        this.userService = userService;
        this.alertService = alertService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_index__["d" /* Users */]();
        this.loading = false;
        this.load = true;
        this.minYear = (new Date().getFullYear() - 100).toString() + '-12-01';
        this.maxYear = ((new Date()).getFullYear() - 10).toString() + '-12-01';
        if (localStorage.getItem('currentUser') === null) {
            this.load = false;
            this.message = 'Please login to continues...';
            return;
        }
        this.message = 'Chờ em xíu...';
        var id = JSON.parse(localStorage.getItem('currentUser')).user._id;
        this.userService.getUsersById(id).catch(function (err) { console.log(err); })
            .then(function (data) {
            if (data.result === 1) {
                console.log(data);
                _this.user = data.data;
                _this.dob = (_this.user.info.dob + '').substring(0, 10);
                _this.last_name = _this.user.info.last_name;
                _this.first_name = _this.user.info.first_name;
                _this.gender = _this.user.info.gender;
                _this.load = false;
                _this.message = '';
            }
        });
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent.prototype.save = function (val) {
        var _this = this;
        console.log(val);
        if (val) {
            this.loading = true;
            this.user.info.first_name = this.first_name;
            this.user.info.last_name = this.last_name;
            this.user.info.dob = this.dob;
            this.user.info.gender = this.gender;
            console.log(this.user);
            this.userService.updateUser(this.user).subscribe(function (data) {
                _this.loading = false;
                if (data.json().result === 1) {
                    _this.alertService.success('Update completed!');
                }
                else
                    _this.alertService.error(data.json().msg);
            });
        }
    };
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info',
            template: __webpack_require__("../../../../../src/app/_pages/info/info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/item-comment/item-comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.comment{\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    font-size: 14px;\r\n    background-color: rgba(236, 245, 247, 0.933);\r\n    border-radius: 10px;\r\n    margin: 0.5em;\r\n    padding: 0.5em;\r\n}\r\np{\r\n    margin-top: 0;\r\n    margin-bottom: 5px;;\r\n}\r\n.cursor{\r\n    color: royalblue;\r\n    cursor: pointer;\r\n}\r\n@media (max-width:518px) {\r\n    \r\n    .reply-comment{\r\n        margin-left: 30px;\r\n    }\r\n}\r\ninput{\r\n    border-radius: 10px 0 0 10px;height:28px; width: 80%;font-size: 13px;\r\n}\r\n\r\nsmall {\r\n    margin-bottom: 0;\r\n    font-size: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/item-comment/item-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment\">\r\n  <form class=\"form-inline\">\r\n    <img class=\"rounded-circle img-fluid\" alt=\"#\" width=\"30\" src={{comment.owner.image}}>\r\n    <p style=\"padding-left: 5px; padding-right: 5px;\" class=\"cursor\">{{comment.owner.info.first_name}} {{comment.owner.info.last_name}} </p>\r\n  </form>\r\n  <form>\r\n      <p style=\"margin-left:35px;\">{{comment.content}}</p>\r\n  </form>\r\n  <form style=\"margin-left: 35px;\" class=\"form-inline\">\r\n    <small (click)=\"reply()\" class=\"cursor\" style=\"margin-right: 5px;\">Reply</small>\r\n    <small class=\"\">{{create_at}}</small>\r\n  </form>\r\n  <div style=\"margin-bottom: 0.5em;margin-top: 0.5em;\">\r\n    <small *ngIf=\"isReplyRemaining\" (click)=\"loadmoreReplies()\" style=\"color: #0c7dee; padding-left: 35px; cursor: pointer; font-size: 11px;\">Load more old replies</small>\r\n  </div>\r\n  <form *ngIf=\"isReply\" #f=\"ngForm\" class=\"form-inline\" style=\"margin: 1em;margin-left: 35px;\">\r\n      <img *ngIf=\"isAdding\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">\r\n    <input (click)=\"change()\" [(ngModel)]=\"replyVal\" placeholder=\"Reply...\" class=\"form-control\"\r\n      type=\"text\" name=\"replyV\" id=\"\">\r\n    <button style=\"border-radius: 0 10px 10px 0;\" (click)=\"submitReply()\" class=\"btn btn-sm btn-default\">Reply</button>\r\n  </form>\r\n  <div style=\"margin-left: 35px;\" class=\"reply-comment\" *ngFor=\"let r of repliesList\">\r\n    <img *ngIf=\"loadingReply\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">\r\n    <app-reply [reply]=\"r\"></app-reply>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/item-comment/item-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_comment__ = __webpack_require__("../../../../../src/app/_models/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_reply_service__ = __webpack_require__("../../../../../src/app/_services/reply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket_socket_service__ = __webpack_require__("../../../../../src/app/_socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_utils__ = __webpack_require__("../../../../../src/app/app.utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemCommentComponent = /** @class */ (function () {
    function ItemCommentComponent(replyService, mSocket, verifyService) {
        this.replyService = replyService;
        this.mSocket = mSocket;
        this.verifyService = verifyService;
        this.isReply = false;
        this.comment = new __WEBPACK_IMPORTED_MODULE_1__models_comment__["b" /* CommentData */]();
        // @Output('outReply') outReply: EventEmitter<any> = new EventEmitter();
        // @Output('changeReply') changeReply: EventEmitter<any> = new EventEmitter();
        this.repliesList = new Array();
        this.repComment = new __WEBPACK_IMPORTED_MODULE_1__models_comment__["a" /* Comment */]();
        this.isReplyRemaining = false;
        this.loadingReply = false;
        this.countReplyRemaining = 0;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_index__["d" /* Users */]();
        this.isAdding = false;
    }
    ItemCommentComponent.prototype.valuechange = function ($event) {
        var _this = this;
        this.verifyService.verify().catch(function (err) {
        }).then(function (data) {
            if (data.result === 1) {
                _this.user = JSON.parse(localStorage.getItem('currentUser')).user;
            }
            else {
                if (window.confirm('Please go to page login!')) {
                    window.open(__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* appConfig */].apiUrl + "/login", '_blank');
                    return false;
                }
            }
        });
        return true;
    };
    ItemCommentComponent.prototype.addReply = function () {
        var _this = this;
        if (this.valuechange(event) && this.replyVal) {
            this.isAdding = true;
            this.user = JSON.parse(localStorage.getItem('currentUser')).user;
            var myReply_1 = new __WEBPACK_IMPORTED_MODULE_1__models_comment__["c" /* Reply */]();
            myReply_1.content = this.replyVal;
            myReply_1.create_at = new Date();
            myReply_1.owner = this.user._id;
            myReply_1.comment = this.comment._id;
            this.replyService.addReply(myReply_1).then(function (data) {
                _this.repliesList[_this.repliesList.length] = data.data;
                console.log(JSON.stringify(data));
                _this.replyVal = '';
                _this.isReply = false;
                _this.isAdding = false;
                _this.socket.emit('add-comment', { "room": _this.comment._id, "data": myReply_1 });
            }).catch(function (err) {
                console.log(err || 'error');
            });
        }
    };
    ItemCommentComponent.prototype.ngOnInit = function () {
        this.socket = this.mSocket.getSocket();
        var d = new Date(this.comment.create_at);
        this.create_at = __WEBPACK_IMPORTED_MODULE_7__app_utils__["a" /* utils */].fomartDateTimeForComment(d);
        this.getReplies(__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* appConfig */].LIMIT_REPLY);
    };
    ItemCommentComponent.prototype.reply = function () {
        if (this.valuechange(event)) {
            if (!this.isReply) {
                this.isReply = true;
                console.log('ad reply click');
            }
            else
                this.isReply = false;
        }
    };
    ItemCommentComponent.prototype.change = function () {
        // console.log('Enter');
        // this.outReply.emit({ "click": true });
    };
    ItemCommentComponent.prototype.submitReply = function () {
        this.addReply();
        // this.outReply.emit({ "id": this.comment._id, val: this.replyVal, create_at: this.comment.create_at });
    };
    ItemCommentComponent.prototype.getReplies = function (limit) {
        var _this = this;
        this.loadingReply = true;
        this.replyService.getReplies(this.comment._id, limit, this.repliesList.length)
            .catch(function (err) {
            console.log("get reply err" + err);
        })
            .then(function (data) {
            var arr = new Array();
            arr = data.data || [];
            arr.reverse();
            _this.repliesList = arr.concat(_this.repliesList);
            if ((data.number || 0) > 0)
                _this.isReplyRemaining = true;
            else
                _this.isReplyRemaining = false;
            _this.loadingReply = false;
            console.log(data);
        });
    };
    ItemCommentComponent.prototype.loadmoreReplies = function () {
        this.getReplies(__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* appConfig */].LIMIT_REPLY + 2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_comment__["b" /* CommentData */])
    ], ItemCommentComponent.prototype, "comment", void 0);
    ItemCommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-comment',
            template: __webpack_require__("../../../../../src/app/_pages/item-comment/item-comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/item-comment/item-comment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_reply_service__["a" /* ReplyService */],
            __WEBPACK_IMPORTED_MODULE_4__socket_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_5__services_verify_service__["a" /* VerifyService */]])
    ], ItemCommentComponent);
    return ItemCommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-field{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n.card{\r\n    max-width: 500px;\r\n    \r\n}\r\n* {\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n.card {\r\n    display: block;\r\n    position: relative;\r\n    margin: 0 auto 10px auto;\r\n    padding: 16px;\r\n    box-sizing: border-box;\r\n    background: white;\r\n    box-shadow: 0 0 0 1px rgba(200, 215, 225, 0.5), 0 1px 2px #e9eff3;\r\n}\r\n@media (min-width: 481px){\r\n    .card {\r\n        margin-bottom: 16px;\r\n        padding: 24px;\r\n    }\r\n}\r\n.require{\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div>\r\n  <app-alert></app-alert>\r\n  <h3 class=\"text-center\" style=\"color: #ff9900; margin-bottom: 2em;margin-top: 1em\">Log in</h3>\r\n  <div class=\"card\">\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\">\r\n    <!-- <div class=\"col-md-7\">\r\n    </div> -->\r\n    <div *ngIf=\"!isLoginFB\">\r\n      <form #f=\"ngForm\" (submit)=\"login(f.form.valid&&f.value)\">\r\n        <div class=\"form-field\">\r\n          <!-- <label>Email:</label> -->\r\n          <mat-form-field class=\"\">\r\n            <input matInput type=\"email\" placeholder=\"E-mail\" name=\"email\" required #eemail=\"ngModel\" id=\"\" [(ngModel)]=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n          </mat-form-field>\r\n          <div *ngIf=\"f.submitted&&eemail.errors?.required\">\r\n            <small class=\"form-text text-muted\">Email is required</small>\r\n          </div>\r\n          <div *ngIf=\"eemail.errors?.pattern\">\r\n            <small class=\"form-text text-muted\">Email is invalid</small>\r\n          </div>\r\n          <mat-form-field>\r\n            <!-- <label>Password:</label> -->\r\n            <input matInput required type=\"password\" #p=\"ngModel\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\r\n          </mat-form-field>\r\n          <div *ngIf=\"f.submitted&&p.errors?.required\">\r\n            <small class=\"form-text text-muted\">Password is required</small>\r\n          </div>\r\n        </div>\r\n  \r\n        <button style=\"margin-top: 1em\" [disabled]=\"loading\"  [disabled]=\"isLoginFB\" class=\"btn btn-block btn-info\">Log in</button>\r\n      </form>\r\n      <!-- <a href=\"#\">Forgot your password? </a> -->\r\n      <button type=\"\" style=\"margin-top: 1em\" class=\"btn btn-md btn-block\" [routerLink]=\"['/signup']\" [disabled]=\"isLoginFB\" >Create an account!</button>\r\n      <label style=\"width: 100%; padding: 1em ;text-align: center; color: black; font-weight: bold\">Or</label>\r\n    \r\n      <button [disabled]=\"isLoginFB\" style=\"color: white;\" (click)=\"loginWithFacebook()\" class=\"btn btn-block btn-primary\">\r\n        <span class=\"fa fa-facebook\"></span> | Login with Facebook</button>\r\n        \r\n    </div>\r\n    <div *ngIf=\"isLoginFB\">\r\n      <label class=\"form-text\" style=\"color: teal; font-weight: bold;\">Please enter new password for first time login!</label>\r\n      <form #frm=\"ngForm\" (submit)=\"loginFB(frm.form.valid&&frm.value)\">\r\n        <div class=\"form-field\">\r\n          <!-- <label>Email:</label> -->\r\n          <mat-form-field class=\"\">\r\n            <input matInput required type=\"password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\" name=\"password\"\r\n              id=\"\" [(ngModel)]=\"password1\" #ppassword=\"ngModel\" placeholder=\"New password\">\r\n          </mat-form-field>\r\n          <!-- <div *ngIf=\"frm.submitted&&ppassword.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Password is required</div> -->\r\n          <div *ngIf=\"ppassword.errors?.pattern\" style=\"color:red;\" class=\"form-control-feedback\">Minimum eight characters, at least one letter, one number and one special character.</div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Re-enter Password\" required type=\"password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\" name=\"password2\"\r\n              id=\"\" [(ngModel)]=\"password2\" #ppassword2=\"ngModel\">\r\n          </mat-form-field>\r\n          <!-- <div *ngIf=\"frm.submitted&&ppassword2.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Password is required</div> -->\r\n          <div *ngIf=\"!ppassword2.errors?.required&&!(password2===password1)\" style=\"color:red;\" class=\"form-control-feedback\">Password is not match.</div>\r\n        </div>\r\n        \r\n        <button type=\"submit\" style=\"margin-top: 1em\" [disabled]=\"loading\" class=\"btn btn-block btn-info\">Log in</button>\r\n      </form>\r\n    </div>\r\n    <!-- <div  (click)=\"loginWithFacebook()\"  class=\"fb-login-button\" data-max-rows=\"1\" data-size=\"medium\" data-button-type=\"continue_with\" data-show-faces=\"true\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\"></div> -->\r\n    <div class=\"fb-login-button\" data-scope=\"email\" data-show-faces=\"true\" data-width=\"200\" data-max-rows=\"1\">Start w/ Facebook</div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_users__ = __webpack_require__("../../../../../src/app/_models/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_gender__ = __webpack_require__("../../../../../src/app/_models/gender.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authen_service__ = __webpack_require__("../../../../../src/app/_services/authen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_users_service__ = __webpack_require__("../../../../../src/app/_services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginComponent = /** @class */ (function () {
    function LoginComponent(authen, alert, router, verifyService, titleService, userService, fbService) {
        var _this = this;
        this.authen = authen;
        this.alert = alert;
        this.router = router;
        this.verifyService = verifyService;
        this.titleService = titleService;
        this.userService = userService;
        this.fbService = fbService;
        // login with options
        this.options = {
            scope: 'public_profile,email,pages_show_list,publish_actions,user_birthday,user_location',
            return_scopes: true,
            enable_profile_selector: true
        };
        this.isLoginFB = false;
        this.loading = false;
        this.isRouteHome = false;
        this.mGender = new __WEBPACK_IMPORTED_MODULE_5__models_gender__["a" /* Gender */]();
        verifyService.verify().then(function (res) {
            if (res.result === 1) {
                _this.router.navigate(['/']);
            }
        }).catch(function (err) { Promise.reject(err || ''); });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.fbInit();
        this.titleService.setTitle('Volunteer | Login');
    };
    LoginComponent.prototype.login = function (value) {
        var _this = this;
        var that = this;
        if (value) {
            this.loading = true;
            this.authen.login(this.email, this.password).then(function (data) {
                _this.loading = false;
                if (data.result === 1) {
                    if (data.data || data.token) {
                        that.userService.updateLocal(data.data, data.token);
                    }
                    _this.router.navigate(['/home']);
                }
                else
                    _this.alert.error(data.msg);
            }).catch(function (err) {
                _this.loading = false;
                _this.alert.error(err);
                console.log(err);
            });
        }
    };
    LoginComponent.prototype.fbInit = function () {
        var initParams = {
            appId: '172610086812672',
            xfbml: true,
            version: 'v2.8',
            status: true,
            cookie: true,
        };
        this.fbService.init(initParams).catch(function (err) {
            console.log(err);
        })
            .then(function (data) {
            console.log(data);
        });
    };
    LoginComponent.prototype.loginWithFB = function () {
        var _this = this;
        this.fbService.api('/me?fields=id,email')
            .then(function (res) {
            _this.userService.loginWithFB(res.email).then(function (data) {
                console.log(data);
                if (data.result == 1) {
                    _this.userService.updateLocal(data.data, data.token);
                    window.open('/');
                    // this.router.navigate(['/']);
                }
            }).catch(function (err) {
                console.log(err);
            });
            console.log(res);
        });
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this.loading = true;
        this.fbService.login(this.options)
            .then(function (response) {
            console.log(response);
            if (response.status == 'connected') {
                _this.userService.checkLoginFB(response.authResponse.userID, 'FACEBOOK') // da co tai khoang chua?
                    .then(function (data) {
                    console.log('check fb ' + JSON.stringify(data));
                    if (data.result == 1) {
                        _this.loginWithFB(); // LOGIN with fb
                        _this.loading = false;
                    }
                    else {
                        _this.isLoginFB = true;
                        _this.loading = false;
                    }
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    LoginComponent.prototype.loginFB = function (value) {
        var _this = this;
        if (value) {
            this.loading = true;
            this.fbService.api('/me?fields=id,name,email,permissions,first_name,last_name,birthday,location,gender')
                .then(function (res) {
                var u = new __WEBPACK_IMPORTED_MODULE_4__models_users__["a" /* Users */]();
                u.info.name = res.name;
                u.provider = 'FACEBOOK';
                u.image = "https://graph.facebook.com/" + res.id + "/picture?type=large";
                u.password = _this.password1;
                u.id = res.id;
                u.info.first_name = res.first_name;
                u.info.last_name = res.last_name;
                u.info.gender = _this.mGender.compare(res.gender);
                u.contact.email = res.email;
                u.address_residence.address = res.location.name + '';
                u.info.dob = new Date(res.birthday + '');
                _this.userService.addUsers(u).subscribe(function (data) {
                    console.log(data);
                    if (data.json().result == 1) {
                        _this.userService.updateLocal(data.json().data, data.json().token);
                        _this.router.navigate(['/']);
                    }
                    _this.loading = false;
                }, function (err) {
                    console.log(err);
                });
                console.log(res);
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/_pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_authen_service__["a" /* AuthenService */],
            __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_9__services_verify_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["f" /* Title */],
            __WEBPACK_IMPORTED_MODULE_7__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n  }\r\n  input{\r\n    line-height: 20px;\r\n  }\r\n  .col-form-label {\r\n    padding-top: calc(.375rem + 1px);\r\n    padding-bottom: calc(.375rem + 1px);\r\n    margin-bottom: 0;\r\n    line-height: 0.7;\r\n  }\r\n\r\n  .require{\r\n    color: red;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"\">\r\n    <h3 class=\"text-center\" style=\"color: #ff9900;margin-top: 1em\">Create an event</h3>\r\n\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && submit(f.value)\" style=\"margin-top: 1rem;\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8 col-sm-8\">\r\n                <h4>Infomation</h4>\r\n                <small class=\"form-text text-muted\">Information of this volunteer event.</small>\r\n                <fieldset ngModelGroup=\"info\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Title\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-8 col-sm-8\">\r\n                            <input name=\"title\" type=\"text\" required minlength=\"1\" maxlength=\"100\" #ttitle=\"ngModel\" class=\"form-control\" [(ngModel)]=\"post.info.title\">\r\n                            <div *ngIf=\"f.submitted&&ttitle.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Title is required</div>\r\n                            <!-- <div *ngIf=\"title.errors?.maxlength&&!title.errors?.required\" class=\"form-control-feedback\">First Name must less than 30 character.</div> -->\r\n                            <!-- <div *ngIf=\"!title?.valid&&f.submitted&&!title.errors?.required\" class=\"form-control-feedback\">First Name must less than 30 character.</div> -->\r\n                            <!-- <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Description</label>\r\n                        <div class=\"col-md-8 col-sm-8\">\r\n                            <textarea rows=\"4\" type=\"text\"  minlength=\"1\" class=\"form-control\" #ddescription=\"ngModel\" name=\"desciption\" [(ngModel)]=\"post.info.desciption\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Start date\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input min=\"{{minYear}}\" max=\"{{maxYear}}\" required type=\"date\" name=\"start_date\" #startdate=\"ngModel\" [(ngModel)]=\"post.info.start_date\"\r\n                                class=\"form-control\">\r\n                            <div *ngIf=\"f.submitted&&startdate.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Start date is required</div>\r\n                            <div *ngIf=\"f.submitted&&startdate?.invalid&&!startdate.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Start date is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">End date\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input min=\"{{minYear}}\" max=\"{{maxYear}}\" required type=\"date\" name=\"end_date\" #enddate=\"ngModel\" [(ngModel)]=\"post.info.end_date\"\r\n                                class=\"form-control\">\r\n                            <div *ngIf=\"f.submitted&&enddate.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">End date is required</div>\r\n                            <div *ngIf=\"f.submitted&&enddate?.invalid&&!enddate.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">End date is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Areas expertise\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <!-- [attr.selected]=\"areaExs?.data ? true : null\" -->\r\n                            <select required #aareas=\"ngModel\" name=\"areas_expertise\" (ngModelChange)=\"onChangeAreasExpertise($event)\" class=\"form-control\"\r\n                                [(ngModel)]=\"post.info.areas_expertise\">\r\n                                <option *ngFor=\"let e of areaExs?.data\" value=\"{{e._id}}\">{{e.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"f.submitted&&aareas.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Areas expertise is required</div>\r\n                        </div>\r\n                        <!-- <div class=\"offset-md-0 col-md-4 offset-sm-4 col-sm-8\">\r\n                            <select required #areasExpertiseDetail=\"ngModel\" name=\"areas_expertise_detail\" class=\"form-control\" [(ngModel)]=\"post.info.areas_expertise_detail\">\r\n                                <!-- [attr.selected]=\"employSt?.data ? true : null\"   -->\r\n                                <!-- <option *ngFor=\"let e of areaExsDetails\" value=\"{{e?._id}}\">{{e.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"f.submitted&&areasExpertiseDetail.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Areas experises's detail is required</div>\r\n                        </div>  -->\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Volunteers needed\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input type=\"number\" pattern=\"[0-9]{1,5}\" name=\"number\" required #nnumber=\"ngModel\" id=\"\" [(ngModel)]=\"post.info.number\"\r\n                                class=\"form-control\">\r\n                            <div *ngIf=\"f.submitted&&nnumber.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Number of volunteers is required</div>\r\n                            <div *ngIf=\"f.submitted&&!nnumber.errors?.required&&nnumber?.invalid\" style=\"color:red;\" class=\"form-control-feedback\">Number of volunteers is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"> \r\n                        <div class=\"row\">\r\n                            <label class=\"col-md-2 col-form-label\">Address\r\n                                <span class=\"require\">*</span>                                \r\n                            </label>\r\n                            <div class=\"offset-md-0 col-md-8 offset-sm-4 col-sm-8\">\r\n                                <input name=\"addr\" [(ngModel)]=\"post.info.address\" placeholder=\"search for location\" type=\"text\" class=\"form-control\"\r\n                                    #search >\r\n                                <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n                                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                                </agm-map>\r\n                                <div class=\"form-group row\">\r\n                                    <input type=\"text\" hidden=\"\" class=\"form-control\">\r\n                                    <input type=\"text\" hidden=\"\" name=\"latitude\" [(ngModel)]=\"post.info.latitude\" class=\"form-control\">\r\n                                    <input type=\"text\" hidden=\"\" name=\"longitude\" [(ngModel)]=\"post.info.longitude\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8 col-sm-8\">\r\n                <h4>Contact\r\n                </h4>\r\n                <small class=\"form-text text-muted\">How to volunteers contact to you?</small>\r\n                <fieldset ngModelGroup=\"contact\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2 col-sm-4 col-form-label\">Phone number\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input min=\"0\" type=\"number\" pattern=\"[0-9]{9,40}\" name=\"phone\" required #pphone=\"ngModel\" id=\"\" [(ngModel)]=\"post.contact.phone\"\r\n                                class=\"form-control\">\r\n                            <div *ngIf=\"f.submitted&&pphone.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Phone number is required</div>\r\n                            <div *ngIf=\"!pphone.errors?.required&&pphone?.invalid\" style=\"color:red;\" class=\"form-control-feedback\">Phone number more than 8 and less than 40 number.</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Email\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input type=\"email\" name=\"email\" required #eemail=\"ngModel\" id=\"\" [(ngModel)]=\"post.contact.email\" class=\"form-control\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n                            <div *ngIf=\"f.submitted&&eemail.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Email is required</div>\r\n                            <div *ngIf=\"eemail.errors?.pattern\" style=\"color:red;\" class=\"form-control-feedback\">Email is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8 col-sm-8\">\r\n                <h4>Content</h4>\r\n                <small class=\"form-text text-muted\">About the tasks and objectives of this volunteer work, and what your requirements are for volunteers.\r\n                </small>\r\n                <fieldset ngModelGroup=\"content\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Tasks\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                            <textarea rows=\"5\" type=\"text\" required minlength=\"1\" class=\"form-control\" #ttasks=\"ngModel\" name=\"tasks\" [(ngModel)]=\"post.content.tasks\"></textarea>\r\n                            <div *ngIf=\"f.submitted&&ttasks.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Tasks is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Objectives\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                            <textarea rows=\"5\" #oobjectives=\"ngModel\" type=\"text\" required minlength=\"1\" class=\"form-control\" name=\"objectives\" [(ngModel)]=\"post.content.objective\"></textarea>\r\n                            <div *ngIf=\"f.submitted&&oobjectives.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Objectives is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-12 col-sm-12 col-form-label\">Requirements\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                            <textarea rows=\"5\" type=\"text\" required minlength=\"1\" class=\"form-control\" #rrequirements=\"ngModel\" name=\"requirements\" [(ngModel)]=\"post.content.requirement\"></textarea>\r\n                            <div *ngIf=\"f.submitted&&rrequirements.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Requirements is required</div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8 col-sm-8\">\r\n                <div class=\"form-group\">\r\n                    <app-alert></app-alert>\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                    />\r\n                    <button style=\"margin-top: 5%\" [disabled]=\"loading\" class=\"btn btn-primary btn-block\">Create</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n<!-- <script src=\"//connect.facebook.net/en_US/sdk.js\"></script> -->"

/***/ }),

/***/ "../../../../../src/app/_pages/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_employ_situation_service__ = __webpack_require__("../../../../../src/app/_services/employ-situation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_area_exper_service__ = __webpack_require__("../../../../../src/app/_services/area-exper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PostComponent = /** @class */ (function () {
    function PostComponent(alert, usersService, router, activatedRoute, verifyService, locationService, areaExService, employSTService, mapsAPILoader, ngZone, titleService, postService) {
        var _this = this;
        this.alert = alert;
        this.usersService = usersService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.verifyService = verifyService;
        this.locationService = locationService;
        this.areaExService = areaExService;
        this.employSTService = employSTService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.titleService = titleService;
        this.postService = postService;
        this.loading = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_10__models_index__["d" /* Users */]();
        this.isRouteHome = false;
        this.post = new __WEBPACK_IMPORTED_MODULE_10__models_index__["b" /* Post */]();
        verifyService.verify().then(function (res) {
            if (res.result !== 1) {
                _this.router.navigate(['/']);
            }
        }).catch(function (err) { Promise.reject('' || err); });
        var d = new Date();
        this.minYear = d.getFullYear().toString() + '-' + d.getMonth() + '-' + d.getDay();
        this.maxYear = (d.getFullYear() + 100).toString() + '-' + d.getMonth() + '-' + d.getDay();
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.titleService.setTitle('Volunteer | Create an event');
        this.load();
        //set google maps defaults
        this.zoom = 4;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {});
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.post.info.latitude = _this.latitude.toString();
                    _this.post.info.longitude = _this.longitude.toString();
                    _this.post.info.address = place.formatted_address;
                    console.log('lat, long ' + _this.latitude + ' ' + _this.longitude);
                    console.log(place);
                    _this.zoom = 12;
                });
            });
        });
    };
    PostComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    PostComponent.prototype.submit = function (value) {
        var _this = this;
        console.log(value);
        console.log(this.post);
        if (value) {
            // if (!this.latitude || !this.longitude) {
            //   this.alert.error('Address is incorrect!');
            //   return;
            // }
            this.loading = true;
            this.postService.addPost(JSON.stringify(this.post)).subscribe(function (data) {
                if (data.json().result === 1) {
                    _this.loading = false;
                    console.log('post OK ' + data);
                    _this.alert.success('Create event successful!', true);
                    // window.open('/');
                    _this.router.navigate(['/']);
                    window.location.reload();
                }
                else {
                    _this.loading = false;
                    console.log('dang ky err ' + data);
                    _this.alert.error("" + data.json().msg, true);
                }
            }, function (err) {
                console.log('err ' + err);
                _this.alert.error(err, false);
                _this.loading = false;
            });
        }
    };
    PostComponent.prototype.load = function () {
        var _this = this;
        var id = JSON.parse(localStorage.getItem('currentUser')).user._id;
        this.post.owner = id;
        this.usersService.getUsersById(id).catch(function (err) { console.log(err); })
            .then(function (data) {
            if (data.result === 1) {
                _this.user = data.data;
                _this.post.contact.email = _this.user.contact.email;
                _this.post.contact.phone = _this.user.contact.phone;
            }
        });
        this.areaExService.getAreaEx().subscribe(function (data) {
            _this.areaExs = data;
            console.log(_this.areaExs.data);
        }, function (err) { console.log(err); });
    };
    PostComponent.prototype.onChangeAreasExpertise = function ($event) {
        var _this = this;
        console.log($event);
        this.areaExService.getAreaExById($event).subscribe(function (data) {
            if (data.result === 1) {
                // console.log(data);
                _this.areaExsDetails = data.data.areas_ex_details;
            }
        }, function (err) {
        });
        //this.areaExs.data.
        // this.areaExsDetails = this.areaExs.data.areas_ex_details;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PostComponent.prototype, "searchElementRef", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/_pages/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_5__services_index__["d" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__services_verify_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_index__["c" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_area_exper_service__["a" /* AreaExperService */],
            __WEBPACK_IMPORTED_MODULE_7__services_employ_situation_service__["a" /* EmploySituationService */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */],
            __WEBPACK_IMPORTED_MODULE_9__services_post_service__["a" /* PostService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-img{box-shadow: 0 5px 15px rgba(0,0,0,.5)}\r\n.image:hover .middle {\r\n    opacity: 1;\r\n    color: white;\r\n  }\r\n  .profile-img {\r\n    opacity: 1;\r\n    transition: .5s ease;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    left: 50%;\r\n  }\r\n  .image{\r\n    position: relative;\r\n  }\r\n  .text {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    font-size: 11px;\r\n  }\r\n  .middle {\r\n    transition: .5s ease;\r\n    opacity: 0;\r\n    position: absolute ;\r\n    -ms-flex-item-align: auto;\r\n        -ms-grid-row-align: auto;\r\n        align-self: auto;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%)\r\n  }\r\n  \r\n  .image:hover .profile-img {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  .profile-setting li{\r\n    text-align: center;\r\n    box-shadow: 0 1px 3px rgba(0,0,1,.1);\r\n    display: inline;\r\n    padding-left: 5vh;\r\n    padding-right: 5vh;  \r\n    padding: 1vh;\r\n  }\r\n  .profile-setting li a:hover{\r\n    color: #EB1919;\r\n    text-decoration: none;\r\n    cursor:pointer;\r\n}\r\n.active a {\r\n  color: #EB1919;\r\n  text-decoration: none;\r\n}\r\n.profile-setting{\r\n  -webkit-padding-start:1%;\r\n}\r\nform{\r\n  margin-top: 1rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div  style=\"padding-left: 5%; padding-top: 2%;\">\r\n    <div class=\"row\">\r\n        <!-- <div class=\" col-sm-5 col-md-3\">\r\n            <div class=\"row user\">\r\n                <div class=\"col-xs-3 col-sm-4 col-md-4\" style=\"align-content: center\">\r\n                    <div class=\"image\">\r\n                        <img class=\"profile-img rounded-circle img-fluid\" src={{image}} alt={{username}}>\r\n                        <div class=\"middle\">\r\n                            <div class=\"text\"><a style=\"text-decoration: none;\" href=\"\">Change</a></div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-xs-9 col-sm-8 col-md-8\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"top: 50%\">\r\n                            <p><strong>{{username}}</strong></p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\" col-md-4\" style=\"align-content: center\">\r\n                            <h6>10,7K</h6>\r\n                            <p><small>Followers</small></p>\r\n                             <button class=\"btn btn-success btn-block\"><span class=\"fa fa-plus-circle\"></span> Follow </button> -->\r\n                        <!-- </div>                       \r\n                        <div class=\"col-md-8\" style=\"align-content: center\">\r\n                            <h6>35</h6>\r\n                            <p><small>Following</small></p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"col-sm-8 col-md-9\">\r\n            <div class=\"row\">\r\n                <ul class=\"profile-setting\" *ngFor=\"let tab of tabs\">\r\n                    <li [ngClass]=\"tab.active?'active':''\">\r\n                        <a (click)=\"tabClick(tab)\" routerLink={{tab.link}}>{{tab.title}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_tab__ = __webpack_require__("../../../../../src/app/_models/tab.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/_pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account_component__ = __webpack_require__("../../../../../src/app/_pages/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__security_security_component__ = __webpack_require__("../../../../../src/app/_pages/security/security.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/_pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_info_component__ = __webpack_require__("../../../../../src/app/_pages/info/info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(titleService, verifyService, router, infoComponent, contactComponent, aboutComonent, accountComponent, securityComponent) {
        var _this = this;
        this.titleService = titleService;
        this.verifyService = verifyService;
        this.router = router;
        this.infoComponent = infoComponent;
        this.contactComponent = contactComponent;
        this.aboutComonent = aboutComonent;
        this.accountComponent = accountComponent;
        this.securityComponent = securityComponent;
        verifyService.verify().then(function (res) {
            if (res.result === 0) {
                _this.router.navigate(['/']);
            }
        })
            .catch(function (err) {
            _this.router.navigate(['/']);
            Promise.reject('');
        });
        var currUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this.titleService.setTitle(currUser.info.fullname);
        this.image = currUser.image;
        this.username = currUser.info.fullname;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabs = [new __WEBPACK_IMPORTED_MODULE_4__models_tab__["a" /* Tab */](0, 'Info', 'info', this.infoComponent),
            new __WEBPACK_IMPORTED_MODULE_4__models_tab__["a" /* Tab */](1, 'Contact', 'contact', this.contactComponent),
            new __WEBPACK_IMPORTED_MODULE_4__models_tab__["a" /* Tab */](2, 'About', 'about', this.aboutComonent),
            new __WEBPACK_IMPORTED_MODULE_4__models_tab__["a" /* Tab */](3, 'Security', 'security', this.securityComponent)];
        this.tabs.forEach(function (t) {
            t.active = false;
            if (window.location.pathname === '/profile/' + t.link || _this.router.url === '/profile/' + t.link)
                t.active = true;
        });
    };
    ProfileComponent.prototype.tabClick = function (tab) {
        this.tabs.forEach(function (t) {
            t.active = false;
        });
        tab.active = true;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/_pages/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__services_verify_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_9__info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_7__security_security_component__["a" /* SecurityComponent */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/reply/reply.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\r\n    margin-top: 0;\r\n    margin-bottom: 5px;;\r\n}\r\n.cursor{\r\n    color: royalblue;\r\n    cursor: pointer;\r\n}\r\n\r\nsmall {\r\n    font-size: 10px;\r\n    margin-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/reply/reply.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <form class=\"form-inline\">\r\n    <img class=\"rounded-circle img-fluid\" alt=\"#\" width=\"20\" src={{reply.owner.image}}>\r\n    <p style=\"padding-left: 5px; padding-right: 5px;\" class=\"cursor\">{{reply.owner.info.first_name}} {{reply.owner.info.last_name}} </p>\r\n    <p style=\"margin-left: 5px;\">{{reply.content}}</p>\r\n  </form>\r\n  <form style=\"margin-left: 25px;\" class=\"form-inline\">\r\n    <small (click)=\"reply()\" class=\"cursor\" style=\"margin-right: 5px;\"></small>\r\n    <small class=\"\">{{create_at}}</small>\r\n  </form>\r\n\r\n  <!-- <div *ngIf=\"isReply\" class=\"row\">\r\n      <div class=\"col-md-8 col-sm-8 col-xs-8\">\r\n        <input (click)=\"change()\" name=\"replyVal\" [(ngModel)]=\"replyVal\" placeholder=\"Reply...\" style=\"height:28px; font-size: 13px;\"\r\n          class=\"form-control\" type=\"text\" name=\"\" id=\"\">\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-4\">\r\n        <button (click)=\"submitReply()\" class=\"btn btn-sm\">Reply</button>\r\n      </div>\r\n    </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_pages/reply/reply.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_comment__ = __webpack_require__("../../../../../src/app/_models/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utils__ = __webpack_require__("../../../../../src/app/app.utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReplyComponent = /** @class */ (function () {
    function ReplyComponent() {
        this.isReply = false;
        this.reply = new __WEBPACK_IMPORTED_MODULE_1__models_comment__["d" /* ReplyData */]();
    }
    ReplyComponent.prototype.ngOnInit = function () {
        var d = new Date(this.reply.create_at);
        this.create_at = __WEBPACK_IMPORTED_MODULE_2__app_utils__["a" /* utils */].fomartDateTimeForComment(d);
    };
    ReplyComponent.prototype.submitReply = function () {
        // this.outReply.emit({"id":this.comment._id,val:this.replyVal, create_at:this.comment.create_at});
        this.isReply = false;
        this.replyVal = '';
    };
    ReplyComponent.prototype.subReply = function () {
        if (!this.isReply) {
            this.isReply = true;
            console.log('ad reply click');
            // this.outReply.emit({"click":true});
        }
        else
            this.isReply = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_comment__["d" /* ReplyData */])
    ], ReplyComponent.prototype, "reply", void 0);
    ReplyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reply',
            template: __webpack_require__("../../../../../src/app/_pages/reply/reply.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/reply/reply.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReplyComponent);
    return ReplyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/security/security.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/security/security.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  security works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/_pages/security/security.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecurityComponent = /** @class */ (function () {
    function SecurityComponent() {
    }
    SecurityComponent.prototype.ngOnInit = function () {
    };
    SecurityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-security',
            template: __webpack_require__("../../../../../src/app/_pages/security/security.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/security/security.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecurityComponent);
    return SecurityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 300px;\r\n  }\r\n  input{\r\n    line-height: 20px;\r\n  }\r\n  \r\n  .require{\r\n    color: red;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"\">\r\n    <app-alert></app-alert>\r\n    <h3 class=\"text-center\" style=\"color: #ff9900; margin-bottom: 2em;margin-top: 1em\">Sign up</h3>\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && signup(f.value)\" style=\"margin-top: 1rem;\">\r\n        <div class=\"row justify-content-start\">\r\n            <div class=\"col-md-5 offset-md-1\">\r\n                <h4>Infomation</h4>\r\n                <fieldset ngModelGroup=\"info\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-5 col-form-label\">Firstname\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-7\">\r\n                            <input type=\"text\" name=\"first_name\" required minlength=\"1\" maxlength=\"30\" #firstName=\"ngModel\" class=\"form-control\" [(ngModel)]=\"first_name\">\r\n                            <div *ngIf=\"f.submitted&&firstName.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">First Name is required</div>\r\n                            <!-- <div *ngIf=\"firstName.errors?.maxlength&&!firstName.errors?.required\" class=\"form-control-feedback\">First Name must less than 30 character.</div> -->\r\n                            <!-- <div *ngIf=\"!firstName?.valid&&f.submitted&&!firstName.errors?.required\" class=\"form-control-feedback\">First Name must less than 30 character.</div> -->\r\n                            <!-- <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-5 col-form-label\">Lastname\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-7\">\r\n                            <input type=\"text\" required minlength=\"1\" maxlength=\"30\" class=\"form-control\" #lastName=\"ngModel\" name=\"last_name\" [(ngModel)]=\"last_name\">\r\n                            <div *ngIf=\"f.submitted&&lastName.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Last Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-5 col-form-label\">Gender\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-7\">\r\n                            <select required name=\"gender\" [(ngModel)]=\"gender\" #ggender=\"ngModel\" class=\"form-control\">\r\n                                <option value=\"0\">Female</option>\r\n                                <option value=\"1\">Male</option>\r\n                                <option value=\"2\">Other</option>\r\n                            </select>\r\n                            <div *ngIf=\"f.submitted&&ggender.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Gender is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-5 col-form-label\">DOB\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-7\">\r\n                            <input min=\"{{minYear}}\" max=\"{{maxYear}}\" required type=\"date\" name=\"dob\" #ddob=\"ngModel\" [(ngModel)]=\"dob\" class=\"form-control\">\r\n                            <div *ngIf=\"f.submitted&&ddob.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Dob is required</div>\r\n                            <div *ngIf=\"f.submitted&&ddob?.invalid&&!ddob.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Dob is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-5 col-form-label\">Areas expertise\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-7\">\r\n                            <!-- [attr.selected]=\"areaExs?.data ? true : null\" -->\r\n                            <select required #aareas=\"ngModel\" name=\"areas_expertise\" class=\"form-control\" [(ngModel)]=\"areas_expertise\">\r\n                                <option *ngFor=\"let e of areaExs?.data\" value=\"{{e._id}}\">{{e.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"f.submitted&&aareas.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Areas expertise is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-5 col-form-label\">Employment situation\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-7\">\r\n                            <select required #empl=\"ngModel\" name=\"employment_sitution\" class=\"form-control\" [(ngModel)]=\"employment_sitution\">\r\n                                <!-- [attr.selected]=\"employSt?.data ? true : null\"   -->\r\n                                <option *ngFor=\"let e of employSt?.data\" value=\"{{e._id}}\">{{e.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"f.submitted&&empl.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Employment situation is required</div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <h4>Contact</h4>\r\n                <fieldset ngModelGroup=\"contact\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-5 col-form-label\">Email\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-7\">\r\n                            <input type=\"email\" name=\"email\" required #eemail=\"ngModel\" id=\"\" [(ngModel)]=\"email\" class=\"form-control\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n                            <div *ngIf=\"f.submitted&&eemail.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Email is required</div>\r\n                            <div *ngIf=\"eemail.errors?.pattern\" style=\"color:red;\" class=\"form-control-feedback\">Email is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-5 col-form-label\">Telehone number\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-7\">\r\n                            <input class=\"form-control\" pattern=\"[0-9]{9,40}\" type=\"text\" required name=\"phone\" id=\"\" [(ngModel)]=\"phone\" #pphone=\"ngModel\">\r\n                            <div *ngIf=\"f.submitted&&pphone.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Telephone is required</div>\r\n                            <div *ngIf=\"!pphone.errors?.required&&pphone?.invalid\" style=\"color:red;\" class=\"form-control-feedback\">Telephone is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-5 col-form-label\">Web page</label>\r\n                        <div class=\"col-md-7\">\r\n                            <input type=\"url\" name=\"web_page\" id=\"\" [(ngModel)]=\"web_page\" class=\"form-control\">\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"col-md-5 offset-md-1\">\r\n                <h4>Address recidence\r\n                    <span class=\"require\">*</span>\r\n                </h4>\r\n                <fieldset ngModelGroup=\"address_residence\">\r\n                    <div class=\"form-group\">\r\n                        <input  placeholder=\"search for location\" type=\"text\" class=\"form-control\"\r\n                            #search >\r\n                    </div>\r\n                    <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n                        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                    </agm-map>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" hidden=\"\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\">\r\n                        <input type=\"text\" hidden=\"\" name=\"latitude\" [(ngModel)]=\"latitude\" class=\"form-control\">\r\n                        <input type=\"text\" hidden=\"\" name=\"longitude\" [(ngModel)]=\"longitude\" class=\"form-control\">\r\n                    </div>\r\n                    <!-- [attr.selected]=\"cities?.data ? true : null\"  -->\r\n                    <!-- <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\">City</label>\r\n                    <div class=\"col-md-7\">\r\n                        <select #ccity=\"ngModel\" required name=\"city\" class=\"form-control\" [(ngModel)]=\"city\" (ngModelChange)=\"onChangeCity($event)\">\r\n                            <option   *ngFor=\"let e of cities?.data ; let i = index\" value=\"{{e.CityName}}\">{{e.CityName}}</option>    \r\n                        </select>\r\n                        <div *ngIf=\"f.submitted&&ccity?.invalid\" style=\"color:red;\" class=\"form-control-feedback\">City is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\">District</label>\r\n                    <div class=\"col-md-7\">\r\n                        <select required #ddistrict=\"ngModel\" required name=\"district\" class=\"form-control\" [(ngModel)]=\"district\" (ngModelChange)=\"onChangeDistrict($event)\">\r\n                            <option  *ngFor=\"let e of districtes?.data\" value=\"{{e.ProvinceName}}\">{{e.ProvinceName}}</option>                            \r\n                        </select>\r\n                        <div *ngIf=\"f.submitted&&ddistrict.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">District is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\">Ward</label>\r\n                    <div class=\"col-md-7\">\r\n                        <select required #wward=\"ngModel\" required name=\"ward\" class=\"form-control\" [(ngModel)]=\"ward\">\r\n                            <option [attr.selected]=\"wards?.data ? true : null\"  *ngFor=\"let e of wards?.data\" value=\"{{e.WardId}}\">{{e.WardName}}</option>                            \r\n                            </select>\r\n                        <div *ngIf=\"f.submitted&&wward.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Ward is required</div>\r\n                    </div>\r\n                </div> -->\r\n                </fieldset>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\">Password\r\n                        <span class=\"require\">*</span>\r\n                    </label>\r\n                    <div class=\"col-md-7\">\r\n                        <input required type=\"password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\" name=\"password\"\r\n                            id=\"\" [(ngModel)]=\"password\" class=\"form-control\" #ppassword=\"ngModel\">\r\n                        <div *ngIf=\"f.submitted&&ppassword.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Password is required</div>\r\n                        <div *ngIf=\"f.submitted&&ppassword.errors?.pattern\" style=\"color:red;\" class=\"form-control-feedback\">Minimum eight characters, at least one letter, one number and one special character.</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-5 col-form-label\">Reenter Password\r\n                        <span class=\"require\">*</span>\r\n                    </label>\r\n                    <div class=\"col-md-7\">\r\n                        <input required type=\"password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\" name=\"password2\"\r\n                            id=\"\" [(ngModel)]=\"password2\" class=\"form-control\" #ppassword2=\"ngModel\">\r\n                        <div *ngIf=\"f.submitted&&ppassword2.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Password is required</div>\r\n                        <div *ngIf=\"f.submitted&&!ppassword2.errors?.required&&!(password2===password)\" style=\"color:red;\" class=\"form-control-feedback\">Password is not match.</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-10\">\r\n                <div class=\"form-group\">\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                    />\r\n                    <button style=\"margin-top: 5%\" [disabled]=\"loading\" class=\"btn btn-primary btn-block\">Register</button>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                    <label>Already have an account? </label>\r\n                    <a [routerLink]=\"['/login']\">Sign in</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n<!-- <script src=\"//connect.facebook.net/en_US/sdk.js\"></script> -->"

/***/ }),

/***/ "../../../../../src/app/_pages/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_employ_situation_service__ = __webpack_require__("../../../../../src/app/_services/employ-situation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_area_exper_service__ = __webpack_require__("../../../../../src/app/_services/area-exper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupComponent = /** @class */ (function () {
    function SignupComponent(alert, usersService, router, verifyService, locationService, areaExService, employSTService, mapsAPILoader, ngZone, titleService) {
        var _this = this;
        this.alert = alert;
        this.usersService = usersService;
        this.router = router;
        this.verifyService = verifyService;
        this.locationService = locationService;
        this.areaExService = areaExService;
        this.employSTService = employSTService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.titleService = titleService;
        this.loading = false;
        this.districtes = new __WEBPACK_IMPORTED_MODULE_9__models_index__["a" /* District */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_9__models_index__["d" /* Users */]();
        this.isRouteHome = false;
        verifyService.verify().then(function (res) {
            if (res.result === 1) {
                _this.router.navigate(['/']);
            }
        }).catch(function (err) { Promise.reject('' || err); });
        this.minYear = (new Date().getFullYear() - 100).toString() + '-12-01';
        this.maxYear = ((new Date()).getFullYear() - 10).toString() + '-12-01';
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Volunteer | Signup');
        this.gender = 0;
        this.load();
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    console.log('lat, long ' + _this.latitude + ' ' + _this.longitude);
                    console.log(place);
                    _this.address = place.formatted_address;
                    _this.zoom = 12;
                });
            });
        });
    };
    SignupComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    SignupComponent.prototype.signup = function (value) {
        var _this = this;
        if (value) {
            if (!this.latitude || !this.longitude) {
                this.alert.error('Address is incorrect!');
                return;
            }
            this.loading = true;
            this.usersService.addUsers(JSON.stringify(value)).subscribe(function (data) {
                if (data.json().result === 1) {
                    _this.loading = false;
                    console.log('dang ky OK ' + data);
                    _this.alert.success('Sign up successful!', true);
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.loading = false;
                    console.log('dang ky err ' + data);
                    _this.alert.success("" + data.json().msg, true);
                }
            }, function (err) {
                console.log('err ' + err);
                _this.alert.error(err, false);
                _this.loading = false;
            });
        }
    };
    SignupComponent.prototype.load = function () {
        // this.locationService.getCities().subscribe(
        //   data => {
        //     if (!data.error) {
        //       this.cities = data;
        //     }
        //   }, err => { console.log(err); });
        var _this = this;
        this.employSTService.getEmploySituations().subscribe(function (data) {
            _this.employSt = data;
            console.log(_this.employSt);
        }, function (err) { console.log(err); });
        this.areaExService.getAreaEx().subscribe(function (data) {
            _this.areaExs = data;
            console.log(_this.areaExs);
        }, function (err) { console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SignupComponent.prototype, "searchElementRef", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/_pages/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_5__services_index__["d" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_verify_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_index__["c" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_area_exper_service__["a" /* AreaExperService */],
            __WEBPACK_IMPORTED_MODULE_7__services_employ_situation_service__["a" /* EmploySituationService */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_pages/update-post/update-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".require{\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_pages/update-post/update-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"\">\r\n    <h3 class=\"text-center\" style=\"color: #ff9900;margin-top: 1em\">Create an event</h3>\r\n\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && submit(f.value)\" style=\"margin-top: 1rem;\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8 col-sm-8\">\r\n                <h4>Infomation</h4>\r\n                <small class=\"form-text text-muted\">Information of this volunteer event.</small>\r\n                <fieldset ngModelGroup=\"info\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Title\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-8 col-sm-8\">\r\n                            <input name=\"title\" type=\"text\" required minlength=\"1\" maxlength=\"100\" #ttitle=\"ngModel\" class=\"form-control\" [(ngModel)]=\"post.info.title\">\r\n                            <div *ngIf=\"f.submitted&&ttitle.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Title is required</div>\r\n                            <!-- <div *ngIf=\"title.errors?.maxlength&&!title.errors?.required\" class=\"form-control-feedback\">First Name must less than 30 character.</div> -->\r\n                            <!-- <div *ngIf=\"!title?.valid&&f.submitted&&!title.errors?.required\" class=\"form-control-feedback\">First Name must less than 30 character.</div> -->\r\n                            <!-- <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Description</label>\r\n                        <div class=\"col-md-8 col-sm-8\">\r\n                            <textarea rows=\"4\" type=\"text\"  minlength=\"1\" class=\"form-control\" #ddescription=\"ngModel\" name=\"desciption\" [(ngModel)]=\"post.info.desciption\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Start date\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input min=\"{{minYear}}\" max=\"{{maxYear}}\" required type=\"date\" name=\"start_date\" #startdate=\"ngModel\" [(ngModel)]=\"start_date\"\r\n                                class=\"form-control\">\r\n                            <div *ngIf=\"f.submitted&&startdate.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Start date is required</div>\r\n                            <div *ngIf=\"f.submitted&&startdate?.invalid&&!startdate.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Start date is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">End date\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input min=\"{{minYear}}\" max=\"{{maxYear}}\" required type=\"date\" name=\"end_date\" #enddate=\"ngModel\" [(ngModel)]=\"end_date\"\r\n                                class=\"form-control\">\r\n                            <div *ngIf=\"f.submitted&&enddate.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">End date is required</div>\r\n                            <div *ngIf=\"f.submitted&&enddate?.invalid&&!enddate.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">End date is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Areas expertise\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <!-- [attr.selected]=\"areaExs?.data ? true : null\" -->\r\n                            <select required #aareas=\"ngModel\" name=\"areas_expertise\" (ngModelChange)=\"onChangeAreasExpertise($event)\" class=\"form-control\"\r\n                                [(ngModel)]=\"post.info.areas_expertise\">\r\n                                <option *ngFor=\"let e of areaExs?.data\" value=\"{{e._id}}\">{{e.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"f.submitted&&aareas.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Areas expertise is required</div>\r\n                        </div>\r\n                        <!-- <div class=\"offset-md-0 col-md-4 offset-sm-4 col-sm-8\">\r\n                            <select required #areasExpertiseDetail=\"ngModel\" name=\"areas_expertise_detail\" class=\"form-control\" [(ngModel)]=\"post.info.areas_expertise_detail\">\r\n                                <!-- [attr.selected]=\"employSt?.data ? true : null\"   -->\r\n                                <!-- <option *ngFor=\"let e of areaExsDetails\" value=\"{{e?._id}}\">{{e.name}}</option>\r\n                            </select>\r\n                            <div *ngIf=\"f.submitted&&areasExpertiseDetail.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Areas experises's detail is required</div>\r\n                        </div>  -->\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Volunteers needed\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input type=\"number\" pattern=\"[0-9]{1,5}\" name=\"number\" required #nnumber=\"ngModel\" id=\"\" [(ngModel)]=\"post.info.number\"\r\n                                class=\"form-control\">\r\n                            <div *ngIf=\"f.submitted&&nnumber.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Number of volunteers is required</div>\r\n                            <div *ngIf=\"f.submitted&&!nnumber.errors?.required&&nnumber?.invalid\" style=\"color:red;\" class=\"form-control-feedback\">Number of volunteers is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\"> \r\n                        <div class=\"row\">\r\n                            <label class=\"col-md-2 col-form-label\">Address\r\n                                <span class=\"require\">*</span>                                \r\n                            </label>\r\n                            <div class=\"offset-md-0 col-md-8 offset-sm-4 col-sm-8\">\r\n                                <input name=\"addr\" [(ngModel)]=\"post.info.address\" placeholder=\"search for location\" type=\"text\" class=\"form-control\"\r\n                                    #search >\r\n                                <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n                                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                                </agm-map>\r\n                                <div class=\"form-group row\">\r\n                                    <input type=\"text\" hidden=\"\" class=\"form-control\">\r\n                                    <input type=\"text\" hidden=\"\" name=\"latitude\" [(ngModel)]=\"post.info.latitude\" class=\"form-control\">\r\n                                    <input type=\"text\" hidden=\"\" name=\"longitude\" [(ngModel)]=\"post.info.longitude\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8 col-sm-8\">\r\n                <h4>Contact\r\n                </h4>\r\n                <small class=\"form-text text-muted\">How to volunteers contact to you?</small>\r\n                <fieldset ngModelGroup=\"contact\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2 col-sm-4 col-form-label\">Phone number\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input min=\"0\" type=\"number\" pattern=\"[0-9]{9,40}\" name=\"phone\" required #pphone=\"ngModel\" id=\"\" [(ngModel)]=\"post.contact.phone\"\r\n                                class=\"form-control\">\r\n                            <div *ngIf=\"f.submitted&&pphone.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Phone number is required</div>\r\n                            <div *ngIf=\"!pphone.errors?.required&&pphone?.invalid\" style=\"color:red;\" class=\"form-control-feedback\">Phone number more than 8 and less than 40 number.</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Email\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-4 col-sm-8\">\r\n                            <input type=\"email\" name=\"email\" required #eemail=\"ngModel\" id=\"\" [(ngModel)]=\"post.contact.email\" class=\"form-control\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n                            <div *ngIf=\"f.submitted&&eemail.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Email is required</div>\r\n                            <div *ngIf=\"eemail.errors?.pattern\" style=\"color:red;\" class=\"form-control-feedback\">Email is invalid</div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8 col-sm-8\">\r\n                <h4>Content</h4>\r\n                <small class=\"form-text text-muted\">About the tasks and objectives of this volunteer work, and what your requirements are for volunteers.\r\n                </small>\r\n                <fieldset ngModelGroup=\"content\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Tasks\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                            <textarea rows=\"5\" type=\"text\" required minlength=\"1\" class=\"form-control\" #ttasks=\"ngModel\" name=\"tasks\" [(ngModel)]=\"post.content.tasks\"></textarea>\r\n                            <div *ngIf=\"f.submitted&&ttasks.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Tasks is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-2  col-sm-4 col-form-label\">Objectives\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                            <textarea rows=\"5\" #oobjectives=\"ngModel\" type=\"text\" required minlength=\"1\" class=\"form-control\" name=\"objectives\" [(ngModel)]=\"post.content.objective\"></textarea>\r\n                            <div *ngIf=\"f.submitted&&oobjectives.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Objectives is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-md-12 col-sm-12 col-form-label\">Requirements\r\n                            <span class=\"require\">*</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                            <textarea rows=\"5\" type=\"text\" required minlength=\"1\" class=\"form-control\" #rrequirements=\"ngModel\" name=\"requirements\" [(ngModel)]=\"post.content.requirement\"></textarea>\r\n                            <div *ngIf=\"f.submitted&&rrequirements.errors?.required\" style=\"color:red;\" class=\"form-control-feedback\">Requirements is required</div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8 col-sm-8\">\r\n                <div class=\"form-group\">\r\n                    <app-alert></app-alert>\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                    />\r\n                    <button style=\"margin-top: 5%\" [disabled]=\"loading\" class=\"btn btn-info btn-block\">Update</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n<!-- <script src=\"//connect.facebook.net/en_US/sdk.js\"></script> -->"

/***/ }),

/***/ "../../../../../src/app/_pages/update-post/update-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_employ_situation_service__ = __webpack_require__("../../../../../src/app/_services/employ-situation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_area_exper_service__ = __webpack_require__("../../../../../src/app/_services/area-exper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UpdatePostComponent = /** @class */ (function () {
    function UpdatePostComponent(alert, usersService, router, activatedRoute, verifyService, locationService, areaExService, employSTService, mapsAPILoader, ngZone, titleService, postService) {
        var _this = this;
        this.alert = alert;
        this.usersService = usersService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.verifyService = verifyService;
        this.locationService = locationService;
        this.areaExService = areaExService;
        this.employSTService = employSTService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.titleService = titleService;
        this.postService = postService;
        this.loading = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_10__models_index__["d" /* Users */]();
        this.isRouteHome = false;
        this.post = new __WEBPACK_IMPORTED_MODULE_10__models_index__["b" /* Post */]();
        verifyService.verify().then(function (res) {
            if (res.result !== 1) {
                _this.router.navigate(['/']);
            }
        }).catch(function (err) { Promise.reject('' || err); });
        var d = new Date();
        this.minYear = d.getFullYear().toString() + '-' + d.getMonth() + '-' + d.getDay();
        this.maxYear = (d.getFullYear() + 100).toString() + '-' + d.getMonth() + '-' + d.getDay();
    }
    UpdatePostComponent.prototype.getPostById = function () {
        var _this = this;
        if (this.id) {
            this.postService.getPostById(this.id).catch(function (err) {
            })
                .then(function (data) {
                if (data.result == 1) {
                    _this.post = data.data;
                    _this.end_date = _this.post.info.end_date.toString().substring(0, 10);
                    _this.start_date = _this.post.info.start_date.toString().substring(0, 10);
                    // this.latitude = +this.post.info.latitude;
                    // this.longitude = +this.post.info.longitude;
                }
                console.log(data);
            });
        }
    };
    UpdatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            _this.id = params['id']; // (+) converts string 'id' to a number
            _this.getPostById();
            // In a real app: dispatch action to load the details here.
        });
        console.log(this.id);
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.titleService.setTitle('Volunteer | Create an event');
        this.load();
        //set google maps defaults
        this.zoom = 4;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {});
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.post.info.latitude = _this.latitude.toString();
                    _this.post.info.longitude = _this.longitude.toString();
                    _this.post.info.address = place.formatted_address;
                    console.log('lat, long ' + _this.latitude + ' ' + _this.longitude);
                    console.log(place);
                    _this.zoom = 12;
                });
            });
        });
    };
    UpdatePostComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    UpdatePostComponent.prototype.submit = function (value) {
        var _this = this;
        console.log(value);
        console.log(this.post);
        this.post.info.end_date = new Date(this.end_date);
        this.post.info.start_date = new Date(this.start_date);
        if (value) {
            // if (!this.latitude || !this.longitude) {
            //   this.alert.error('Address is incorrect!');
            //   return;
            // }
            this.loading = true;
            this.postService.updatePost(JSON.stringify(this.post)).subscribe(function (data) {
                if (data.json().result === 1) {
                    _this.loading = false;
                    console.log('post OK ' + data);
                    _this.alert.success('Update event successful!', true);
                    // this.router.navigate(['/']);
                }
                else {
                    _this.loading = false;
                    console.log('update err ' + data);
                    _this.alert.error("" + data.json().msg, true);
                }
            }, function (err) {
                console.log('err ' + err);
                _this.alert.error(err, false);
                _this.loading = false;
            });
        }
    };
    UpdatePostComponent.prototype.load = function () {
        var _this = this;
        this.post.info.address = 'aa';
        var id = JSON.parse(localStorage.getItem('currentUser')).user._id;
        this.post.owner = id;
        this.usersService.getUsersById(id).catch(function (err) { console.log(err); })
            .then(function (data) {
            if (data.result === 1) {
                _this.user = data.data;
                _this.post.contact.email = _this.user.contact.email;
                _this.post.contact.phone = _this.user.contact.phone;
            }
        });
        this.areaExService.getAreaEx().subscribe(function (data) {
            _this.areaExs = data;
            console.log(_this.areaExs.data);
        }, function (err) { console.log(err); });
    };
    UpdatePostComponent.prototype.onChangeAreasExpertise = function ($event) {
        var _this = this;
        console.log($event);
        this.areaExService.getAreaExById($event).subscribe(function (data) {
            if (data.result === 1) {
                // console.log(data);
                _this.areaExsDetails = data.data.areas_ex_details;
            }
        }, function (err) {
        });
        //this.areaExs.data.
        // this.areaExsDetails = this.areaExs.data.areas_ex_details;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UpdatePostComponent.prototype, "searchElementRef", void 0);
    UpdatePostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-post',
            template: __webpack_require__("../../../../../src/app/_pages/update-post/update-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_pages/update-post/update-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_5__services_index__["d" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__services_verify_service__["a" /* VerifyService */],
            __WEBPACK_IMPORTED_MODULE_5__services_index__["c" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_area_exper_service__["a" /* AreaExperService */],
            __WEBPACK_IMPORTED_MODULE_7__services_employ_situation_service__["a" /* EmploySituationService */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */],
            __WEBPACK_IMPORTED_MODULE_9__services_post_service__["a" /* PostService */]])
    ], UpdatePostComponent);
    return UpdatePostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/area-exper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaExperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AreaExperService = /** @class */ (function () {
    function AreaExperService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'applicaton/json;charset=utf-8',
            'Cache-Control': 'no-cache',
        });
        this.api = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* appConfig */].apiUrl;
    }
    AreaExperService.prototype.getAreaEx = function () {
        return this.http.get(this.api + "/areaexs", { headers: this.headers })
            .map(this.extracData)
            .catch(this.handleError);
    };
    AreaExperService.prototype.getAreaExById = function (id) {
        return this.http.get(this.api + "/areaex/" + id, { headers: this.headers }).
            map(this.extracData)
            .catch(this.handleError);
    };
    AreaExperService.prototype.countPostByAreaEx = function () {
        return this.http.get(this.api + "/countPostByAreaEx", { headers: this.headers })
            .map(this.extracData)
            .catch(this.handleError);
    };
    AreaExperService.prototype.handleError = function (err) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(err.json().error || 'Server error!');
    };
    AreaExperService.prototype.extracData = function (res) {
        var body = res.json();
        return body || {};
    };
    AreaExperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AreaExperService);
    return AreaExperService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map'


var AuthenService = /** @class */ (function () {
    function AuthenService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* appConfig */].apiUrl;
        // FB.init({
        //   appId      : "YOUR-APP-ID-HERE",
        //   status     : false, // the SDK will attempt to get info about the current user immediately after init
        //   cookie     : true,  // enable cookies to allow the server to access
        //   // the session
        //   xfbml      : true,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
        //   version    : 'v2.8' // use graph api version 2.5
        // });
    }
    // fbLogin() {
    //   return new Promise((resolve, reject) => {
    //     FB.login(result => {
    //       if (result.authResponse) {
    //         return this.http.post(`http://localhost:4000/api/v1/auth/facebook`, {access_token: result.authResponse.accessToken})
    //             .toPromise()
    //             .then(response => {
    //               var token = response.headers.get('x-auth-token');
    //               if (token) {
    //                 localStorage.setItem('id_token', token);
    //               }
    //               resolve(response.json());
    //             })
    //             .catch(() => reject());
    //       } else {
    //         reject();
    //       }
    //     }, {scope: 'public_profile,email'})
    //   });
    // }
    // login(email: String, password: String){
    //   return this.http.post('/users/authenticate',{email: email, password: password})
    //   .map((res: Response)=>{res.json()}).subscribe(res=>{
    //    
    //   })
    // }
    AuthenService.prototype.login = function (email, password) {
        return this.http.post(this.api + "/user/authenticate", { email: email, password: password, token: localStorage.getItem("currentToken") })
            .toPromise()
            .then(this.extracData)
            .catch(this.handelError);
    };
    AuthenService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenService.prototype.handelError = function (err) {
        return Promise.reject(err.message || err);
    };
    AuthenService.prototype.extracData = function (res) {
        var body = res.json() || {};
        return body;
    };
    AuthenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenService);
    return AuthenService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'applicaton/json;charset=utf-8',
            'Cache-Control': 'no-cache',
        });
        // this.headers.append("Access-Control-Allow-Origin", "*");
    }
    CommentService.prototype.getComments = function (post_id, limit, skip) {
        return this.http.get(this.apiUrl + "/comments/" + limit + "/" + skip + "/" + post_id, { headers: this.headers })
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    CommentService.prototype.addComment = function (cmt) {
        return this.http.post(this.apiUrl + "/comment", cmt)
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    CommentService.prototype.countComment = function (skip, post_id) {
        var data = {
            "skip": skip,
            "post_id": post_id
        };
        return this.http.post(this.apiUrl + "/count_comment_post_id", data)
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    CommentService.prototype.handleError = function (error) {
        console.log('An error occurred', error.message); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CommentService.prototype.extracData = function (res) {
        var body = res.json();
        return body || {};
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/employ-situation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmploySituationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmploySituationService = /** @class */ (function () {
    function EmploySituationService(http) {
        this.http = http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* appConfig */].apiUrl;
    }
    EmploySituationService.prototype.getEmploySituations = function () {
        return this.http.get(this.api + "/employsituations")
            .map(this.extractData)
            .catch(this.handelError);
    };
    EmploySituationService.prototype.getEmploySituationById = function (id) {
        return this.http.get(this.api + "/employsituation/" + id)
            .map(this.extractData)
            .catch(this.handelError);
    };
    EmploySituationService.prototype.handelError = function (err) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.json().error || 'Server error!');
    };
    EmploySituationService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EmploySituationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EmploySituationService);
    return EmploySituationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_service__ = __webpack_require__("../../../../../src/app/_services/users.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__users_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authen_service__ = __webpack_require__("../../../../../src/app/_services/authen.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authen_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/_services/location.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__location_service__["a"]; });






/***/ }),

/***/ "../../../../../src/app/_services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
        this.apiGetCities = 'http://prod.boxme.vn/api/public/api/merchant/rest/lading/city';
        this.apiGetDistrictByCity = 'http://prod.boxme.vn/api/public/api/merchant/rest/lading/province';
        this.apiGetWardByDistrict = 'http://prod.boxme.vn/api/public/api/merchant/rest/lading/ward';
    }
    LocationService.prototype.getCities = function () {
        return this.http.get(this.apiGetCities)
            .map(this.extractData)
            .catch(this.handelError);
    };
    LocationService.prototype.getDistrictByCity = function (id) {
        return this.http.get(this.apiGetDistrictByCity + "/" + id)
            .map(this.extractData)
            .catch(this.handelError);
    };
    LocationService.prototype.getWardByDistrict = function (id) {
        return this.http.get(this.apiGetWardByDistrict + "/" + id)
            .map(this.extractData)
            .catch(this.handelError);
    };
    LocationService.prototype.handelError = function (err) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.json().error || 'Server error!');
    };
    LocationService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* appConfig */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'applicaton/json;charset=utf-8',
            'Cache-Control': 'no-cache',
        });
        // this.headers.append("Access-Control-Allow-Origin", "*");
    }
    PostService.prototype.removePostById = function (id) {
        return this.http.delete(this.apiUrl + "/post/" + id)
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    PostService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/posts")
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    PostService.prototype.getPosts = function (limit, skip) {
        return this.http.get(this.apiUrl + "/posts/" + limit + "/" + skip, { headers: this.headers })
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    PostService.prototype.getPostsByArea = function (limit, skip, area_id) {
        var data = {
            "skip": skip,
            "limit": limit,
            "area_id": area_id
        };
        return this.http.post(this.apiUrl + "/posts", data)
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    PostService.prototype.getPostsByUserId = function (limit, skip, user_id) {
        return this.http.get(this.apiUrl + "/posts_user_id/" + limit + "/" + skip + "/" + user_id, { headers: this.headers })
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    PostService.prototype.getPostById = function (id) {
        return this.http.get(this.apiUrl + "/post/" + id, { headers: this.headers })
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    // addUsers(user):Promise<any>{
    //   console.log('user '+user);
    //   return this.http.post(`${this.apiUrl}/user`, user)
    //   .toPromise()
    //   .then(this.extracData)
    //   .catch(this.handleError);
    // }
    PostService.prototype.addPost = function (post) {
        console.log('add_post_service: ' + post);
        //var u = { "first_name":"Hang" };
        var p = new __WEBPACK_IMPORTED_MODULE_2__models_index__["b" /* Post */]();
        p = JSON.parse(post);
        return this.http.post(this.apiUrl + "/post", p);
    };
    PostService.prototype.updatePost = function (post) {
        return this.http.put(this.apiUrl + "/post", post);
    };
    PostService.prototype.addComment = function (post) {
        return this.http.post(this.apiUrl + "/add_comment", post);
    };
    PostService.prototype.addRyply = function (post) {
        return this.http.post(this.apiUrl + "/add_reply", post);
    };
    PostService.prototype.addApply = function (post) {
        return this.http.post(this.apiUrl + "/apply", post);
    };
    PostService.prototype.unApply = function (post) {
        return this.http.post(this.apiUrl + "/un_apply", post);
    };
    PostService.prototype.countCommentByPostId = function (post_id, skip) {
        console.log(post_id);
        var data = {
            "skip": skip,
            "post_id": post_id
        };
        return this.http.post(this.apiUrl + "/count_comment_post_id", data)
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    PostService.prototype.handleError = function (error) {
        console.log('An error occurred', error.message); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PostService.prototype.extracData = function (res) {
        var body = res.json();
        return body || {};
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/reply.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReplyService = /** @class */ (function () {
    function ReplyService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'applicaton/json;charset=utf-8',
            'Cache-Control': 'no-cache',
        });
        // this.headers.append("Access-Control-Allow-Origin", "*");
    }
    ReplyService.prototype.getReplies = function (cmt_id, limit, skip) {
        return this.http.get(this.apiUrl + "/replies/" + limit + "/" + skip + "/" + cmt_id, { headers: this.headers })
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    ReplyService.prototype.countCommentByPostId = function (cmt_id, skip) {
        var data = {
            "skip": skip,
            "cmt_id": cmt_id
        };
        return this.http.post(this.apiUrl + "/count_reply_comment_id", data, { headers: this.headers })
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    ReplyService.prototype.addReply = function (cmt) {
        return this.http.post(this.apiUrl + "/reply", cmt)
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    ReplyService.prototype.countReply = function (skip, post_id) {
        var data = {
            "skip": skip,
            "post_id": post_id
        };
        return this.http.post(this.apiUrl + "/count_reply_comment_id", data)
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    ReplyService.prototype.handleError = function (error) {
        console.log('An error occurred', error.message); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ReplyService.prototype.extracData = function (res) {
        var body = res.json();
        return body || {};
    };
    ReplyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ReplyService);
    return ReplyService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* appConfig */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'applicaton/json;charset=utf-8',
            'Cache-Control': 'no-cache',
        });
        // this.headers.append("Access-Control-Allow-Origin", "*");
    }
    UsersService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/users", { headers: this.headers })
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    UsersService.prototype.getUsersById = function (id) {
        return this.http.get(this.apiUrl + "/user/" + id, { headers: this.headers })
            .toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    // addUsers(user):Promise<any>{
    //   console.log('user '+user);
    //   return this.http.post(`${this.apiUrl}/user`, user)
    //   .toPromise()
    //   .then(this.extracData)
    //   .catch(this.handleError);
    // }
    UsersService.prototype.addUsers = function (user) {
        console.log('user ' + user);
        //var u = { "first_name":"Hang" };
        var u;
        u = new __WEBPACK_IMPORTED_MODULE_2__models_index__["d" /* Users */]();
        u = JSON.parse(JSON.stringify(user));
        return this.http.post(this.apiUrl + "/user", u);
    };
    UsersService.prototype.updateUser = function (user) {
        return this.http.put(this.apiUrl + "/user", user);
    };
    UsersService.prototype.handleError = function (error) {
        console.log('An error occurred', error.message); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UsersService.prototype.extracData = function (res) {
        var body = res.json();
        return body || {};
    };
    UsersService.prototype.getUserByIdApply = function (id) {
        return this.http.get(this.apiUrl + "/user_apply/" + id, { headers: this.headers })
            .toPromise()
            .catch(this.handleError)
            .then(this.extracData);
    };
    UsersService.prototype.updateLocal = function (data, token) {
        if (!token)
            token = JSON.parse(localStorage.getItem('currentUser')).token;
        if (data || token) {
            var u = {
                contact: {
                    email: data.contact.email
                },
                info: {
                    full_name: data.info.first_name + " " + data.info.last_name
                },
                _id: data._id,
                image: data.image
            };
            localStorage.setItem('currentUser', JSON.stringify({ user: u, token: token }));
        }
    };
    UsersService.prototype.checkLoginFB = function (id, provider) {
        return this.http.get(this.apiUrl + "/ckeck_login_fb/" + id + "/" + provider, { headers: this.headers })
            .toPromise()
            .catch(this.handleError)
            .then(this.extracData);
    };
    UsersService.prototype.loginWithFB = function (email) {
        return this.http.post(this.apiUrl + "/login_fb", { "email": email })
            .toPromise()
            .catch(this.handleError)
            .then(this.extracData);
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/verify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyService = /** @class */ (function () {
    function VerifyService(http) {
        this.http = http;
        this.token = '';
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* appConfig */].apiUrl;
    }
    VerifyService.prototype.verify = function () {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = (currUser && 'token' in currUser) ? currUser.token : this.token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'x-access-token': token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiUrl + "/verify", { token: token }).toPromise()
            .then(this.extracData)
            .catch(this.handleError);
    };
    VerifyService.prototype.getVerify = function () {
        var currUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = (currUser && 'token' in currUser) ? currUser.token : this.token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'x-access-token': token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.apiUrl + "/verify", { token: token }).subscribe(function (data) {
            if (data.json().result === 1)
                return true;
            else
                return false;
        }, function (err) {
            return false;
        });
    };
    VerifyService.prototype.extracData = function (res) {
        var body = res.json();
        if (!body || body.result == 0)
            localStorage.setItem("currentUser", null);
        return body || {};
    };
    VerifyService.prototype.handleError = function (err) {
        console.log(err.message || err);
        return Promise.reject(err.message || err);
    };
    VerifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], VerifyService);
    return VerifyService;
}());



/***/ }),

/***/ "../../../../../src/app/_socket/apply-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplySocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("../../../../../src/app/_socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as io from 'socket.io-client';

var ApplySocketService = /** @class */ (function () {
    function ApplySocketService(mSocket) {
        this.mSocket = mSocket;
        this.socket = this.mSocket.getSocket();
    }
    ApplySocketService.prototype.remove = function (data) {
        this.socket.emit('remove-apply', data);
    };
    ApplySocketService.prototype.apply = function (data) {
        this.socket.emit('apply', data);
    };
    ApplySocketService.prototype.join = function (room) {
        this.socket.emit('join-room', room);
    };
    ApplySocketService.prototype.getAppyMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('apply-message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ApplySocketService.prototype.getUnApplyMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('remove-apply-message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ApplySocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */]])
    ], ApplySocketService);
    return ApplySocketService;
}());



/***/ }),

/***/ "../../../../../src/app/_socket/comment-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("../../../../../src/app/_socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as io from 'socket.io-client';

var CommentSocketService = /** @class */ (function () {
    function CommentSocketService(mSocket) {
        this.mSocket = mSocket;
        this.socket = this.mSocket.getSocket();
    }
    CommentSocketService.prototype.addComment = function (data) {
        this.socket.emit('add-comment', data);
    };
    CommentSocketService.prototype.addReply = function (data) {
        this.socket.emit('add-reply', data);
    };
    CommentSocketService.prototype.join = function (room) {
        this.socket.emit('join-room', room);
    };
    CommentSocketService.prototype.getCommentMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('comment-message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    CommentSocketService.prototype.getReplyMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('reply-message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    CommentSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */]])
    ], CommentSocketService);
    return CommentSocketService;
}());



/***/ }),

/***/ "../../../../../src/app/_socket/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.getSocket = function () {
        return __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].socket);
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = {
    // apiUrl: 'http://localhost:4000',
    apiUrl: 'https://tlcn-mean.herokuapp.com',
    socket: 'https://tlcn-mean.herokuapp.com',
    // socket:'http://localhost:4000',
    // WEB_SITE:'http://localhost:4200',
    WEB_SITE: 'https://tlcn-mean.herokuapp.com',
    LIMIT: 2,
    LIMIT_COMMENT: 2,
    LIMIT_REPLY: 1
};


/***/ }),

/***/ "../../../../../src/app/app.material.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_material__ = __webpack_require__("../../../../../src/app/app.material.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_employ_situation_service__ = __webpack_require__("../../../../../src/app/_services/employ-situation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_area_exper_service__ = __webpack_require__("../../../../../src/app/_services/area-exper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_verify_service__ = __webpack_require__("../../../../../src/app/_services/verify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_post_service__ = __webpack_require__("../../../../../src/app/_services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_reply_service__ = __webpack_require__("../../../../../src/app/_services/reply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__socket_socket_service__ = __webpack_require__("../../../../../src/app/_socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__socket_apply_socket_service__ = __webpack_require__("../../../../../src/app/_socket/apply-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__socket_comment_socket_service__ = __webpack_require__("../../../../../src/app/_socket/comment-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_comment_service__ = __webpack_require__("../../../../../src/app/_services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login_component__ = __webpack_require__("../../../../../src/app/_pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup_component__ = __webpack_require__("../../../../../src/app/_pages/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home_component__ = __webpack_require__("../../../../../src/app/_pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_alert_alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile_component__ = __webpack_require__("../../../../../src/app/_pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_header_header_component__ = __webpack_require__("../../../../../src/app/_pages/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_footer_footer_component__ = __webpack_require__("../../../../../src/app/_pages/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_post_post_component__ = __webpack_require__("../../../../../src/app/_pages/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_info_info_component__ = __webpack_require__("../../../../../src/app/_pages/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_about_about_component__ = __webpack_require__("../../../../../src/app/_pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/_pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_account_account_component__ = __webpack_require__("../../../../../src/app/_pages/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_security_security_component__ = __webpack_require__("../../../../../src/app/_pages/security/security.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_home_center_home_center_component__ = __webpack_require__("../../../../../src/app/_pages/home-center/home-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_comment_comment_component__ = __webpack_require__("../../../../../src/app/_pages/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_item_comment_item_comment_component__ = __webpack_require__("../../../../../src/app/_pages/item-comment/item-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_reply_reply_component__ = __webpack_require__("../../../../../src/app/_pages/reply/reply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__directives_drobdown_dropdown_directive__ = __webpack_require__("../../../../../src/app/_directives/drobdown/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_account_apply_account_apply_component__ = __webpack_require__("../../../../../src/app/_pages/account-apply/account-apply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_account_post_account_post_component__ = __webpack_require__("../../../../../src/app/_pages/account-post/account-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_apply_item_apply_item_component__ = __webpack_require__("../../../../../src/app/_pages/apply-item/apply-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_account_post_item_account_post_item_component__ = __webpack_require__("../../../../../src/app/_pages/account-post-item/account-post-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_update_post_update_post_component__ = __webpack_require__("../../../../../src/app/_pages/update-post/update-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Service










//
// component



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_40__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__directives_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_security_security_component__["a" /* SecurityComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_home_center_home_center_component__["a" /* HomeCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pages_item_comment_item_comment_component__["a" /* ItemCommentComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_reply_reply_component__["a" /* ReplyComponent */],
                __WEBPACK_IMPORTED_MODULE_37__directives_drobdown_dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_38__pages_account_apply_account_apply_component__["a" /* AccountApplyComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_account_post_account_post_component__["a" /* AccountPostComponent */],
                __WEBPACK_IMPORTED_MODULE_41__pages_apply_item_apply_item_component__["a" /* ApplyItemComponent */],
                __WEBPACK_IMPORTED_MODULE_42__pages_account_post_item_account_post_item_component__["a" /* AccountPostItemComponent */],
                __WEBPACK_IMPORTED_MODULE_43__pages_update_post_update_post_component__["a" /* UpdatePostComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_44_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_material__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_21__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDY8UvTl6TiF0W_NB7ycIj-feAfVbmftOs',
                    libraries: ['places']
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["c" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_9__services_employ_situation_service__["a" /* EmploySituationService */],
                __WEBPACK_IMPORTED_MODULE_10__services_area_exper_service__["a" /* AreaExperService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["b" /* AuthenService */],
                __WEBPACK_IMPORTED_MODULE_11__services_verify_service__["a" /* VerifyService */],
                __WEBPACK_IMPORTED_MODULE_32__pages_security_security_component__["a" /* SecurityComponent */],
                __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["f" /* Title */],
                __WEBPACK_IMPORTED_MODULE_28__pages_info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pages_account_apply_account_apply_component__["a" /* AccountApplyComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_account_post_account_post_component__["a" /* AccountPostComponent */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["d" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_14__socket_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_15__socket_apply_socket_service__["a" /* ApplySocketService */],
                __WEBPACK_IMPORTED_MODULE_16__socket_comment_socket_service__["a" /* CommentSocketService */],
                __WEBPACK_IMPORTED_MODULE_17__services_comment_service__["a" /* CommentService */],
                __WEBPACK_IMPORTED_MODULE_13__services_reply_service__["a" /* ReplyService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_40__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__ = __webpack_require__("../../../../../src/app/_pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__ = __webpack_require__("../../../../../src/app/_pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup_component__ = __webpack_require__("../../../../../src/app/_pages/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_component__ = __webpack_require__("../../../../../src/app/_pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_post_post_component__ = __webpack_require__("../../../../../src/app/_pages/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_info_info_component__ = __webpack_require__("../../../../../src/app/_pages/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/_pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account_component__ = __webpack_require__("../../../../../src/app/_pages/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about_component__ = __webpack_require__("../../../../../src/app/_pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_security_security_component__ = __webpack_require__("../../../../../src/app/_pages/security/security.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_apply_account_apply_component__ = __webpack_require__("../../../../../src/app/_pages/account-apply/account-apply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_post_account_post_component__ = __webpack_require__("../../../../../src/app/_pages/account-post/account-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_update_post_update_post_component__ = __webpack_require__("../../../../../src/app/_pages/update-post/update-post.component.ts");















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup_component__["a" /* SignupComponent */] },
    {
        path: 'account', component: __WEBPACK_IMPORTED_MODULE_9__pages_account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_index__["a" /* AuthGuard */]], children: [
            { path: 'apply', component: __WEBPACK_IMPORTED_MODULE_12__pages_account_apply_account_apply_component__["a" /* AccountApplyComponent */] },
            { path: 'post', component: __WEBPACK_IMPORTED_MODULE_13__pages_account_post_account_post_component__["a" /* AccountPostComponent */] }
        ]
    },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    {
        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_index__["a" /* AuthGuard */]],
        children: [
            { path: 'info', component: __WEBPACK_IMPORTED_MODULE_7__pages_info_info_component__["a" /* InfoComponent */] },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__pages_about_about_component__["a" /* AboutComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact_component__["a" /* ContactComponent */] },
            { path: 'security', component: __WEBPACK_IMPORTED_MODULE_11__pages_security_security_component__["a" /* SecurityComponent */] }
        ]
    },
    { path: 'post/update/:id', component: __WEBPACK_IMPORTED_MODULE_14__pages_update_post_update_post_component__["a" /* UpdatePostComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_6__pages_post_post_component__["a" /* PostComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_12__pages_account_apply_account_apply_component__["a" /* AccountApplyComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_info_info_component__["a" /* InfoComponent */] },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/app.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utils; });
var utils = {
    fomartDateTimeForComment: function (date) {
        var now = new Date();
        var d = '';
        // let h = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
        // let m = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
        // let s = date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds();
        var dofm = date.getDate();
        var day = date.getDay();
        var month = date.getMonth();
        var y = date.getFullYear();
        if (y == now.getFullYear())
            d = dofm + '-' + (month + 1) + '-' + y + ' ' +
                fomartTime(date);
        if (now.getFullYear() == y && month == now.getMonth()
            && dofm == now.getDate() && day == now.getDay())
            d = fomartTime(date);
        if (date.getTime() >= (now.getTime() - 70000))
            d = '1 minutes ago.';
        if (date.getTime() >= (now.getTime() - 59000))
            d = 'Just now';
        // this.getHrs(date);
        return d;
    }
};
var fomartTime = function (date) {
    var dayInWeek = ["Sunday", "Monday", "Tuesday", "Threeday", "Wednesday", "Thusday", "Friday", "Startday"];
    // console.log("To day is: " + dayInWeek[date.getDay()]);
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var p = "AM";
    if (h > 12) {
        h = h - 12;
        p = "PM";
    }
    if (m === 0 && s === 0) {
        if (h === 0)
            p = "Midnight";
        else if (h === 12)
            p = "Noon";
    }
    var str_h = h + '', str_m = m + '', str_s = s + '';
    if (h < 10)
        str_h = '0' + h;
    if (m < 10)
        str_m = '0' + m;
    if (s < 10)
        str_s = '0' + s;
    return str_h + ':' + str_m + ':' + str_s + ' ' + p;
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map