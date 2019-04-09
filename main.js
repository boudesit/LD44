(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/screenfull/dist/screenfull.js":
/*!****************************************************!*\
  !*** ./node_modules/screenfull/dist/screenfull.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v4.2.0 - 2019-04-01
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			return new Promise(function (resolve) {
				var request = fn.requestFullscreen;

				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				elem = elem || document.documentElement;

				// Work around Safari 5.1 bug: reports support for
				// keyboard in fullscreen even though it doesn't.
				// Browser sniffing, since the alternative with
				// setTimeout is even worse.
				if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
					elem[request]();
				} else {
					elem[request](keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
				}

				this.on('change', onFullScreenEntered);
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				document[fn.exitFullscreen]();

				this.on('change', onFullScreenExit);
			}.bind(this));
		},
		toggle: function (elem) {
			return this.isFullscreen ? this.exit() : this.request(elem);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
		// TODO: remove this in the next major version
		module.exports.default = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"center\" id=\"div-phaser\">\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scenes_boot_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/boot-scene */ "./src/app/scenes/boot-scene.ts");
/* harmony import */ var _scenes_preload_scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/preload-scene */ "./src/app/scenes/preload-scene.ts");
/* harmony import */ var _scenes_main_menu_scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/main-menu-scene */ "./src/app/scenes/main-menu-scene.ts");
/* harmony import */ var _scenes_hud_scene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/hud-scene */ "./src/app/scenes/hud-scene.ts");
/* harmony import */ var _scenes_options_scene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scenes/options-scene */ "./src/app/scenes/options-scene.ts");








var gameConfig = {
    title: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].title,
    version: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version,
    type: Phaser.AUTO,
    width: localStorage.getItem("resolution_width") ? +localStorage.getItem("resolution_width") : 1024,
    height: localStorage.getItem("resolution_height") ? +localStorage.getItem("resolution_height") : 576,
    parent: "div-phaser",
    scene: [_scenes_boot_scene__WEBPACK_IMPORTED_MODULE_3__["BootScene"], _scenes_preload_scene__WEBPACK_IMPORTED_MODULE_4__["PreloadScene"], _scenes_main_menu_scene__WEBPACK_IMPORTED_MODULE_5__["MainMenuScene"], _scenes_hud_scene__WEBPACK_IMPORTED_MODULE_6__["HudScene"], _scenes_options_scene__WEBPACK_IMPORTED_MODULE_7__["OptionScene"]]
};
var AppComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppComponent, _super);
    function AppComponent() {
        return _super.call(this, gameConfig) || this;
    }
    AppComponent.prototype.NgOnInit = function () {
        this.game = new Phaser.Game;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}(Phaser.Game));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var phaser_component_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phaser-component-library */ "./node_modules/phaser-component-library/fesm5/phaser-component-library.js");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                phaser_component_library__WEBPACK_IMPORTED_MODULE_4__["PhaserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/objects/carousel.ts":
/*!*************************************!*\
  !*** ./src/app/objects/carousel.ts ***!
  \*************************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
var Carousel = /** @class */ (function () {
    function Carousel(scene, carouselContent, x, y) {
        this.isDown = false;
        this.textList = new Array();
        for (var _i = 0, _a = carouselContent.resolutions; _i < _a.length; _i++) {
            var content = _a[_i];
            var text = scene.add.text(x = x - 120, y, content.width + " x " + content.height, { color: 'grey', opacity: 0.0 });
            text.content = content;
            this.textList.push(text);
        }
        for (var _b = 0, _c = this.textList; _b < _c.length; _b++) {
            var text = _c[_b];
            // text.setOrigin(0.5,0.5);
            y = +100;
            text.setInteractive();
            this.eventLauncher(scene, text);
        }
    }
    Carousel.prototype.eventLauncher = function (scene, text) {
        var _this = this;
        var isDown = false;
        text.on("pointerover", function () {
            text.setStyle({ color: "white" });
        });
        text.on("pointerout", function () {
            if (!isDown)
                text.setStyle({ color: "grey" });
        });
        text.on('pointerdown', function () {
            for (var _i = 0, _a = _this.textList; _i < _a.length; _i++) {
                var content = _a[_i];
                if (content !== text) {
                    console.log("ccc");
                    content.setStyle({ color: "grey" });
                }
            }
            _this.contentToSave = text.content;
            isDown = !isDown;
            // scene.scene.start(sceneToLoad);
        });
    };
    Carousel.prototype.getContentToSave = function () {
        return this.contentToSave;
    };
    return Carousel;
}());



/***/ }),

/***/ "./src/app/objects/menu.ts":
/*!*********************************!*\
  !*** ./src/app/objects/menu.ts ***!
  \*********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu(scene, x, y, text, sceneToLoad) {
        this.menu = scene.add.text(x, y, text, { color: 'grey', opacity: 0.0 });
        this.menu.setInteractive();
        this.eventLauncher(scene, sceneToLoad);
    }
    Menu.prototype.getMenuText = function () {
        return this.menu;
    };
    Menu.prototype.eventLauncher = function (scene, sceneToLoad) {
        var _this = this;
        this.menu.on("pointerover", function () {
            _this.menu.setStyle({ color: "white" });
        });
        this.menu.on("pointerout", function () {
            _this.menu.setStyle({ color: "grey" });
        });
        if (sceneToLoad) {
            this.menu.on('pointerdown', function () {
                scene.scene.start(sceneToLoad);
            });
        }
    };
    return Menu;
}());



/***/ }),

/***/ "./src/app/scenes/boot-scene.ts":
/*!**************************************!*\
  !*** ./src/app/scenes/boot-scene.ts ***!
  \**************************************/
/*! exports provided: BootScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootScene", function() { return BootScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var BootScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BootScene, _super);
    function BootScene() {
        return _super.call(this, {
            key: "BootScene"
        }) || this;
    }
    BootScene.prototype.preload = function () {
        this.load.image("loading", "assets/logo/logo.png");
    };
    BootScene.prototype.create = function () {
        this.scene.start("PreloadScene");
    };
    BootScene.prototype.update = function () {
    };
    return BootScene;
}(Phaser.Scene));



/***/ }),

/***/ "./src/app/scenes/hud-scene.ts":
/*!*************************************!*\
  !*** ./src/app/scenes/hud-scene.ts ***!
  \*************************************/
/*! exports provided: HudScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HudScene", function() { return HudScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var HudScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HudScene, _super);
    function HudScene() {
        return _super.call(this, {
            key: "HudScene"
        }) || this;
    }
    HudScene.prototype.create = function () {
        this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the first screen of the game').setOrigin(0.5), false);
    };
    HudScene.prototype.update = function () {
    };
    return HudScene;
}(Phaser.Scene));



/***/ }),

/***/ "./src/app/scenes/main-menu-scene.ts":
/*!*******************************************!*\
  !*** ./src/app/scenes/main-menu-scene.ts ***!
  \*******************************************/
/*! exports provided: MainMenuScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuScene", function() { return MainMenuScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _objects_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/menu */ "./src/app/objects/menu.ts");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var MainMenuScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, {
            key: "MainMenuScene"
        }) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        this.canvas = document.getElementsByTagName("canvas").item(0);
        if (!document.fullscreenEnabled) {
            return;
        }
        this.launchMenu = new _objects_menu__WEBPACK_IMPORTED_MODULE_1__["Menu"](this, this.game.config.width / 2, this.game.config.height / 2, "Start game", "HudScene");
        this.launchMenu.getMenuText().setInteractive();
        this.optionMenu = new _objects_menu__WEBPACK_IMPORTED_MODULE_1__["Menu"](this, this.game.config.width / 2, (this.game.config.height / 2) + 20, "options", "OptionScene");
        this.optionMenu.getMenuText().setInteractive();
        this.fullscreenMenu = new _objects_menu__WEBPACK_IMPORTED_MODULE_1__["Menu"](this, 20, 20, "fullscreen", null);
        this.canvas.onfullscreenchange = function (event) {
            console.log("FULLSCREEN CHANGE");
            console.log(event);
            event.stopPropagation();
            return null;
        };
        this.canvas.onfullscreenerror = function (event) {
            console.log("FULLSCREEN ERROR");
            console.log(event);
        };
        this.fullscreenMenu.getMenuText().on("pointerdown", function () {
            if (screenfull__WEBPACK_IMPORTED_MODULE_2___default.a.enabled) {
                screenfull__WEBPACK_IMPORTED_MODULE_2___default.a.toggle(_this.canvas);
            }
        });
    };
    MainMenuScene.prototype.update = function () { };
    return MainMenuScene;
}(Phaser.Scene));



/***/ }),

/***/ "./src/app/scenes/options-scene.ts":
/*!*****************************************!*\
  !*** ./src/app/scenes/options-scene.ts ***!
  \*****************************************/
/*! exports provided: OptionScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionScene", function() { return OptionScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _objects_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/carousel */ "./src/app/objects/carousel.ts");
/* harmony import */ var _objects_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/menu */ "./src/app/objects/menu.ts");



var OptionScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OptionScene, _super);
    function OptionScene() {
        return _super.call(this, {
            key: "OptionScene"
        }) || this;
    }
    OptionScene.prototype.preload = function () { };
    OptionScene.prototype.create = function () {
        var _this = this;
        var options = this.cache.json.get("options");
        this.carousel = new _objects_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"](this, options, 400, -200);
        this.okMenu = new _objects_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this, 400, -150, "ok", "MainMenuScene");
        this.okMenu.getMenuText().on("pointerdown", function () {
            localStorage.setItem("resolution_width", _this.carousel.getContentToSave().width);
            localStorage.setItem("resolution_height", _this.carousel.getContentToSave().height);
            // fs.writeFileSync('configuration/custom-config.json', this.carousel.getContentToSave); 
        });
        this.cameras.main.startFollow(this.add.text(0, 0, 'It\'s the options screen of the game').setOrigin(0.5), false);
    };
    OptionScene.prototype.update = function () {
    };
    return OptionScene;
}(Phaser.Scene));



/***/ }),

/***/ "./src/app/scenes/preload-scene.ts":
/*!*****************************************!*\
  !*** ./src/app/scenes/preload-scene.ts ***!
  \*****************************************/
/*! exports provided: PreloadScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadScene", function() { return PreloadScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PreloadScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PreloadScene, _super);
    function PreloadScene() {
        return _super.call(this, {
            key: "PreloadScene"
        }) || this;
    }
    PreloadScene.prototype.preload = function () {
        var _this = this;
        this.loadingBar = this.add.image(this.game.config.width / 2, this.game.config.height / 2, "loading");
        this.load.json("options", "configuration/env-config.json");
        this.load.on('progress', function (value) {
            _this.loadingBar.setCrop(0, 0, 525 * value, 900);
        });
    };
    PreloadScene.prototype.create = function () {
        var _this_1 = this;
        setTimeout(function () {
            _this_1.scene.start("MainMenuScene");
        }, 2000);
    };
    PreloadScene.prototype.update = function () { };
    return PreloadScene;
}(Phaser.Scene));



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
var environment = {
    production: false,
    title: "LD44 wech",
    version: "1.0.1"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/LD44/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map