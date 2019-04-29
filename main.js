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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"center\" id=\"div-phaser\" style=\"font-family : BIT\">\r\n\r\n</div>\r\n\r\n"

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
                phaser_component_library__WEBPACK_IMPORTED_MODULE_4__["PhaserModule"],
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

/***/ "./src/app/objects/character.ts":
/*!**************************************!*\
  !*** ./src/app/objects/character.ts ***!
  \**************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
var Character = /** @class */ (function () {
    function Character() {
        this.nextAttackEffects = [];
        this.isStuned = false;
        this.isImmune = false;
        this.isProtected = false;
        this.effects = [];
    }
    Character.prototype.getMaxHealth = function () {
        return this.maxHealth;
    };
    Character.prototype.setMaxHealth = function (maxHealth) {
        this.maxHealth = maxHealth;
    };
    Character.prototype.getCurrentHealth = function () {
        return this.currentHealth;
    };
    Character.prototype.setCurrentHealth = function (currentHealth) {
        this.currentHealth = currentHealth < this.maxHealth ? currentHealth : this.maxHealth;
    };
    Character.prototype.getCurrentAttack = function () {
        return this.currentAttack;
    };
    Character.prototype.setCurrentAttack = function (currentAttack) {
        this.currentAttack = currentAttack;
    };
    Character.prototype.getCurrentArmor = function () {
        return this.currentArmor;
    };
    Character.prototype.setCurrentArmor = function (currentArmor) {
        this.currentArmor = currentArmor;
    };
    Character.prototype.getNextAttackEffects = function () {
        return this.nextAttackEffects;
    };
    Character.prototype.setNextAttackEffects = function (nextAttackEffects) {
        this.nextAttackEffects = nextAttackEffects;
    };
    Character.prototype.getIsStuned = function () {
        return this.isStuned;
    };
    Character.prototype.setIsStuned = function (isStuned) {
        this.isStuned = isStuned;
    };
    Character.prototype.getIsImmune = function () {
        return this.isImmune;
    };
    Character.prototype.setIsImmune = function (isImmune) {
        this.isImmune = isImmune;
    };
    Character.prototype.getIsProtected = function () {
        return this.isProtected;
    };
    Character.prototype.setIsProtected = function (isProtected) {
        this.isProtected = isProtected;
    };
    Character.prototype.getEffects = function () {
        return this.effects;
    };
    Character.prototype.setEffects = function (effects) {
        this.effects = effects;
    };
    return Character;
}());



/***/ }),

/***/ "./src/app/objects/enemy.ts":
/*!**********************************!*\
  !*** ./src/app/objects/enemy.ts ***!
  \**********************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character */ "./src/app/objects/character.ts");


var Enemy = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Enemy, _super);
    function Enemy(jsonObj) {
        var _this = _super.call(this) || this;
        _this.actions = jsonObj.actions;
        _this.level = jsonObj.level;
        _this.frame = jsonObj.frame;
        _this.name = jsonObj.name;
        _this.text = jsonObj.text;
        _this.maxHealth = jsonObj.maxHealth;
        _this.currentHealth = jsonObj.maxHealth;
        _this.currentAttack = 1;
        _this.currentArmor = 0;
        return _this;
    }
    Enemy.prototype.getName = function () {
        return this.name;
    };
    Enemy.prototype.getFrame = function () {
        return this.frame;
    };
    return Enemy;
}(_character__WEBPACK_IMPORTED_MODULE_1__["Character"]));



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
        this.alreadyStart = false;
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
                if (scene.scene.isActive(sceneToLoad)) {
                    scene.scene.restart(sceneToLoad);
                }
                else {
                    scene.scene.start(sceneToLoad);
                }
            });
        }
    };
    return Menu;
}());



/***/ }),

/***/ "./src/app/objects/merchantOption.ts":
/*!*******************************************!*\
  !*** ./src/app/objects/merchantOption.ts ***!
  \*******************************************/
/*! exports provided: MerchantOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantOption", function() { return MerchantOption; });
var MerchantOption = /** @class */ (function () {
    function MerchantOption(obj) {
        this.text = obj.text;
        this.cards = obj.cards;
        this.cardsHidden = obj.cardsHidden;
        this.cost = obj.cost;
    }
    return MerchantOption;
}());



/***/ }),

/***/ "./src/app/objects/player.ts":
/*!***********************************!*\
  !*** ./src/app/objects/player.ts ***!
  \***********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character */ "./src/app/objects/character.ts");


var Player = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Player, _super);
    function Player(jsonObject) {
        var _this = _super.call(this) || this;
        _this.deck = [];
        _this.hand = [];
        _this.discard = [];
        _this.maxHealth = jsonObject.maxHealth;
        _this.currentHealth = jsonObject.maxHealth;
        _this.currentAttack = 1;
        _this.currentArmor = 0;
        _this.maxActionPoint = jsonObject.maxAction;
        _this.currentActionPoint = jsonObject.maxAction;
        return _this;
    }
    Player.prototype.getDeck = function () {
        return this.deck;
    };
    Player.prototype.setDeck = function (deck) {
        this.deck = deck;
    };
    Player.prototype.getHand = function () {
        return this.hand;
    };
    Player.prototype.setHand = function (hand) {
        this.hand = hand;
    };
    Player.prototype.getDiscard = function () {
        return this.discard;
    };
    Player.prototype.setDiscard = function (discard) {
        this.discard = discard;
    };
    Player.prototype.getMaxActionPoint = function () {
        return this.maxActionPoint;
    };
    Player.prototype.setMaxActionPoint = function (maxActionPoint) {
        this.maxActionPoint = maxActionPoint;
    };
    Player.prototype.getCurrentActionPoint = function () {
        return this.currentActionPoint;
    };
    Player.prototype.setCurrentActionPoint = function (currentActionPoint) {
        this.currentActionPoint = currentActionPoint;
    };
    return Player;
}(_character__WEBPACK_IMPORTED_MODULE_1__["Character"]));



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
/* harmony import */ var _objects_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/player */ "./src/app/objects/player.ts");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _objects_enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/enemy */ "./src/app/objects/enemy.ts");
/* harmony import */ var _services_round_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/round.service */ "./src/app/services/round.service.ts");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils */ "./src/app/services/utils.ts");
/* harmony import */ var _services_merchant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/merchant.service */ "./src/app/services/merchant.service.ts");







var sprite;
var heroSprite;
var enemySprite;
var attackHeroSprite;
var rect;
var graph;
var lifeText;
var armorText;
var attackText;
var handText;
var journeyX = 0;
var enemyName;
var enemyFrame;
var spriteJourney;
var animEnemy;
var currentArmor = 0;
var waitShow = 0;
var animEnemyAttack;
var saveCurrentArmor = 0;
var saveCurrentHealth = 0;
var saveCurrentAttack = 0;
var parchment;
var statutIsplayed;
var bulleH;
var bulle;
var Option1;
var Option2;
var Option3;
var OptionMerchant;
var nb_deck;
var HudScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HudScene, _super);
    function HudScene() {
        var _this_1 = _super.call(this, {
            key: "HudScene"
        }) || this;
        _this_1.initCard = -750;
        _this_1.handCardSprites = [];
        _this_1._cardService = new _services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]();
        _this_1._roundService = new _services_round_service__WEBPACK_IMPORTED_MODULE_4__["RoundService"]();
        _this_1._merchantService = new _services_merchant_service__WEBPACK_IMPORTED_MODULE_6__["MerchantService"]();
        _this_1.ratio = Number(localStorage.getItem("resolution_ratio"));
        return _this_1;
    }
    HudScene.prototype.create = function () {
        if (!this.ratio) {
            this.ratio = 1.875;
        }
        if (this.ratio == 1.00) {
            this.px = "30px";
        }
        else if (this.ratio == 1.50) {
            this.px = "20px";
        }
        else {
            this.px = "16px";
        }
        var _this = this;
        this.width = this.game.config.width;
        this.height = this.game.config.height;
        this.player = new _objects_player__WEBPACK_IMPORTED_MODULE_1__["Player"](this.cache.json.get("player")); // Add the player
        this.fakePlayer = new _objects_enemy__WEBPACK_IMPORTED_MODULE_3__["Enemy"](this.cache.json.get("enemy")[journeyX][_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].getRandomInt(this.cache.json.get("enemy")[journeyX].length)]); // Add the enemy (n° day, 0/1)
        enemyName = this.fakePlayer.getName();
        enemyFrame = this.fakePlayer.getFrame();
        this.cards = new Array();
        for (var _i = 0, _a = this.cache.json.get("cards"); _i < _a.length; _i++) {
            var cardObj = _a[_i];
            this.cards.push(cardObj);
        }
        var theme = this.sound.add("game");
        theme.play('', { loop: true });
        this.deck = this._cardService.createDeck(this.cards);
        this.player.setDeck(this.deck);
        this.cameras.main.startFollow(this.add.text(0, 0, 'the deck is ' + this.deck.toString()).setOrigin(0.5), false);
        this.createBackground(); // Creat background méthod
        this.createProgressbar(); // Creat progreess bar méthod
        this.createHero(); // Creat Hero méthod
        this.createEnemy(enemyName, enemyFrame); // Creat Hero méthod
        this.createEndRound(_this); // Creat end round méthod
        this.createJourney(journeyX); //Update journey
        this.createDeck(); // Creat deck méthod
        this.parchment = this.add.image(-350 / this.ratio, -100 / this.ratio, 'parchment');
        this.parchment.setDisplaySize(350 / this.ratio, 200 / this.ratio);
        this.parchment.alpha = 0.8;
        this.parchment.setVisible(false);
        this._roundService.startRoundPlayer(this.player, this.fakePlayer);
        this.addCardInHand(_this);
    };
    HudScene.prototype.createBackground = function () {
        var bgAnimation = this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('background', { start: 1, end: 7 }),
            frameRate: 5,
            repeat: -1,
            yoyo: true
        });
        sprite = this.add.sprite(0 / this.ratio, 0 / this.ratio, 'background');
        sprite.setDisplaySize(this.width, this.height);
        sprite.play('run');
    };
    HudScene.prototype.createProgressbar = function () {
        var health = this.add.image(-920 / this.ratio, -500 / this.ratio, 'coeur');
        health.setDisplaySize(70 / this.ratio, 57 / this.ratio);
        var armor = this.add.image(-920 / this.ratio, -400 / this.ratio, 'armor');
        armor.setDisplaySize(60 / this.ratio, 49 / this.ratio);
        var attack = this.add.image(-920 / this.ratio, -300 / this.ratio, 'attack');
        attack.setDisplaySize(70 / this.ratio, 70 / this.ratio);
        var hand = this.add.image(-920 / this.ratio, -200 / this.ratio, 'hand');
        hand.setDisplaySize(70 / this.ratio, 57 / this.ratio);
        lifeText = this.add.text(-870 / this.ratio, -500 / this.ratio, '' + this.player.getCurrentHealth(), {
            fontfamily: 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
        armorText = this.add.text(-870 / this.ratio, -400 / this.ratio, '' + this.player.getCurrentArmor(), {
            fontfamily: 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
        attackText = this.add.text(-870 / this.ratio, -300 / this.ratio, '' + this.player.getCurrentAttack(), {
            fontfamily: 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
        handText = this.add.text(-870 / this.ratio, -200 / this.ratio, '' + this.player.getCurrentActionPoint(), {
            fontfamily: 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
    };
    HudScene.prototype.addCardInHand = function (_this) {
        var _this_1 = this;
        this.initCard = -750;
        for (var _i = 0, _a = this.player.getHand(); _i < _a.length; _i++) {
            var handCard = _a[_i];
            sprite = this.add.sprite((this.initCard += 250) / this.ratio, 400 / this.ratio, handCard.spriteUrl);
            sprite.setDisplaySize(200 / this.ratio, 200 / this.ratio);
            sprite.setInteractive();
            sprite.card = handCard;
            this.handCardSprites.push(sprite);
        }
        var _loop_1 = function (cardSprite) {
            var textCard = this_1.make.text({
                x: -470 / this_1.ratio,
                y: -140 / this_1.ratio,
                text: cardSprite.card.description,
                style: {
                    font: 'bold 16px Arial',
                    fill: 'black',
                    textAlign: 'center',
                    wordWrap: { width: 280 / this_1.ratio }
                }
            });
            textCard.setVisible(false);
            cardSprite.on("pointerdown", function () {
                statutIsplayed = _this._cardService.isPlayed(_this.player, cardSprite.card);
                currentArmor = _this_1.player.getCurrentArmor();
                if (!statutIsplayed) {
                    if (_this_1.player.getIsStuned()) {
                        var noselect = _this_1.sound.add("noselect");
                        noselect.play();
                        var text = _this_1.add.text(-200 / _this_1.ratio, -400 / _this_1.ratio, 'STTTTUUUUNNNNNN', {
                            font: 'Arial',
                            fontSize: '64px',
                            fill: "white",
                            align: "center"
                        });
                        text.setVisible(true);
                        setTimeout(function () {
                            text.destroy();
                        }, 1000);
                    }
                    else {
                        var noselect2 = _this_1.sound.add("noselect");
                        noselect2.play();
                        var text = _this_1.add.text(-200 / _this_1.ratio, -400 / _this_1.ratio, 'You have no point of action !!!', {
                            font: 'Britannic Bold',
                            fontSize: '64px',
                            fill: "white",
                            align: "center"
                        });
                        setTimeout(function () {
                            text.destroy();
                        }, 500);
                    }
                    return;
                }
                else {
                    var cardmp3 = _this_1.sound.add("carte");
                    cardmp3.play();
                    _this.parchment.setVisible(false);
                    textCard.setVisible(false);
                    cardSprite.destroy();
                }
                if (saveCurrentArmor != _this_1.player.getCurrentArmor()) {
                    //boost_armor
                    var armormp3 = _this_1.sound.add("boost1");
                    armormp3.play();
                    var configBoostArmor = {
                        key: 'boostArmor',
                        frames: _this_1.anims.generateFrameNumbers("boost_armor", { start: 0, end: 10 }),
                        frameRate: 30,
                    };
                    _this_1.anims.create(configBoostArmor);
                    var boostArmor = _this_1.add.sprite(-800 / _this_1.ratio, 150 / _this_1.ratio, "boost_armor");
                    boostArmor.setDisplaySize(250 / _this_1.ratio, 250 / _this_1.ratio);
                    boostArmor.alpha = 0.5;
                    boostArmor.anims.play('boostArmor');
                    setTimeout(function () {
                        boostArmor.destroy();
                    }, 500);
                }
                if (saveCurrentHealth < _this_1.player.getCurrentHealth()) {
                    //boost_Health
                    var healthmp3 = _this_1.sound.add("boost2");
                    healthmp3.play();
                    var configBoostHealth = {
                        key: 'boostHealth',
                        frames: _this_1.anims.generateFrameNumbers("boost_health", { start: 0, end: 10 }),
                        frameRate: 30,
                    };
                    _this_1.anims.create(configBoostHealth);
                    var boostHealth = _this_1.add.sprite(-800 / _this_1.ratio, 150 / _this_1.ratio, "boost_health");
                    boostHealth.setDisplaySize(250 / _this_1.ratio, 250 / _this_1.ratio);
                    boostHealth.alpha = 0.5;
                    boostHealth.anims.play('boostHealth');
                    setTimeout(function () {
                        boostHealth.destroy();
                    }, 500);
                }
                if (saveCurrentAttack < _this_1.player.getCurrentAttack()) {
                    //boost_attack
                    var attackmp3 = _this_1.sound.add("boost3");
                    attackmp3.play();
                    var configBoostAttack = {
                        key: 'boostAttack',
                        frames: _this_1.anims.generateFrameNumbers("boost_attack", { start: 0, end: 10 }),
                        frameRate: 30,
                    };
                    _this_1.anims.create(configBoostAttack);
                    var boostAttack = _this_1.add.sprite(-800 / _this_1.ratio, 150 / _this_1.ratio, "boost_attack");
                    boostAttack.setDisplaySize(250 / _this_1.ratio, 250 / _this_1.ratio);
                    boostAttack.alpha = 0.5;
                    boostAttack.anims.play('boostAttack');
                    setTimeout(function () {
                        boostAttack.destroy();
                    }, 500);
                }
                saveCurrentArmor = _this_1.player.getCurrentArmor();
                saveCurrentHealth = _this_1.player.getCurrentHealth();
                saveCurrentAttack = _this_1.player.getCurrentAttack();
            });
            cardSprite.on('pointerover', function (event, gameObjects) {
                _this.parchment.setVisible(true);
                textCard.setVisible(true);
            });
            cardSprite.on('pointerout', function (event, gameObjects) {
                _this.parchment.setVisible(false);
                textCard.setVisible(false);
            });
        };
        var this_1 = this;
        for (var _b = 0, _c = this.handCardSprites; _b < _c.length; _b++) {
            var cardSprite = _c[_b];
            _loop_1(cardSprite);
        }
    };
    HudScene.prototype.createHero = function () {
        var configHero = {
            key: 'hero',
            frames: this.anims.generateFrameNumbers('hero_idle', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
            //yoyo : true
        };
        var anim = this.anims.create(configHero);
        heroSprite = this.add.sprite(-800 / this.ratio, 150 / this.ratio, 'hero_idle').setScale(1);
        heroSprite.setDisplaySize(200 / this.ratio, 300 / this.ratio);
        heroSprite.anims.play('hero');
        var configAttackHero = {
            key: 'heroAttack',
            frames: this.anims.generateFrameNumbers('hero_attack', { start: 0, end: 6 }),
            frameRate: 10,
            //repeat : -1,
            yoyo: true
        };
        this.anims.create(configAttackHero);
    };
    HudScene.prototype.createEnemy = function (name, frame) {
        var _this_1 = this;
        ///////////ATTENTION ICI PEUT SPAWN UN MARCHANT => CONDIFTION POUR AFFICHAGE
        if (this.fakePlayer.getName() == "Merchant") {
            var marchentOption = this._merchantService.createOptions(this.cards);
            bulle = this.add.image(390 / this.ratio, -120 / this.ratio, 'bulle_merchant');
            bulle.setDisplaySize((700) / this.ratio, (600) / this.ratio);
            OptionMerchant = this.add.text(170 / this.ratio, -350 / this.ratio, marchentOption.text, {
                fontfamily: 'Arial Black',
                fontSize: this.px,
                fill: "black",
                align: "center",
                wordWrap: { width: 450 / this.ratio }
            });
            bulleH = this.add.image(-400 / this.ratio, -120 / this.ratio, 'bulle_hero');
            bulleH.setDisplaySize((700) / this.ratio, (400) / this.ratio);
            Option1 = this.add.text(-650 / this.ratio, -200 / this.ratio, "Option : 1   -1 Health\n", {
                fontfamily: 'Arial',
                fontWeight: 'bold',
                fontSize: this.px,
                fill: "purple",
                align: "center",
            });
            Option1.setInteractive();
            Option1.on("pointerdown", function () {
                _this_1._merchantService.chooseOption(_this_1.player, marchentOption.options[0]);
                Option1.destroy();
            });
            Option2 = this.add.text(-650 / this.ratio, -150 / this.ratio, "Option : 2   -2 Health\n", {
                fontfamily: 'Arial',
                fontWeight: 'bold',
                fontSize: this.px,
                fill: "black",
                align: "center",
            });
            Option2.setInteractive();
            Option2.on("pointerdown", function () {
                _this_1._merchantService.chooseOption(_this_1.player, marchentOption.options[1]);
                Option2.destroy();
            });
            Option3 = this.add.text(-650 / this.ratio, -100 / this.ratio, "Option : 3   -3 Health\n", {
                fontfamily: 'Arial',
                fontWeight: 'bold',
                fontSize: this.px,
                fill: "black",
                align: "center",
            });
            Option3.setInteractive();
            Option3.on("pointerdown", function () {
                _this_1._merchantService.chooseOption(_this_1.player, marchentOption.options[2]);
                Option3.destroy();
            });
        }
        if (journeyX > 0) {
            enemySprite.destroy();
            animEnemy.destroy();
        }
        var configEnemy = {
            key: 'enemy',
            frames: this.anims.generateFrameNumbers(name, { start: 0, end: frame }),
            frameRate: 6,
            repeat: -1
        };
        animEnemy = this.anims.create(configEnemy);
        enemySprite = this.add.sprite(0 / this.ratio, 150 / this.ratio, name);
        enemySprite.setDisplaySize((enemySprite.width / 2) / this.ratio, (enemySprite.height / 2) / this.ratio);
        enemySprite.anims.play('enemy');
    };
    HudScene.prototype.createEndRound = function (_this) {
        var _this_1 = this;
        handText.text = this.player.getCurrentActionPoint();
        var endRound = this.add.image(760 / this.ratio, 250 / this.ratio, 'endround');
        endRound.setDisplaySize(200 / this.ratio, 100 / this.ratio);
        endRound.setInteractive();
        endRound.on("pointerdown", function () {
            _this_1._roundService.endRoundPlayer(_this_1.player, _this_1.fakePlayer); // END ROUND PLAYER
            if (_this_1.fakePlayer.getCurrentHealth() <= 0 || _this_1.fakePlayer.getName() === "Merchant") {
                if (_this_1.fakePlayer.getName() === "Merchant") {
                    bulle.destroy();
                    bulleH.destroy();
                    OptionMerchant.destroy();
                    Option1.destroy();
                    Option2.destroy();
                    Option3.destroy();
                }
                var text_1 = _this_1.add.text(0, 0, "Day " + journeyX);
                text_1.setVisible(false);
                _this_1.cameras.main.fadeOut(3000, 1, 1, 1, function () {
                }, _this_1);
                _this_1.cameras.main.on("camerafadeoutcomplete", function () {
                    text_1.setVisible(true);
                    journeyX++;
                    _this_1.createJourney(journeyX); // NEW JOURNEY
                    _this_1._roundService.initPlayerForBattle(_this_1.player);
                    _this_1.fakePlayer = new _objects_enemy__WEBPACK_IMPORTED_MODULE_3__["Enemy"](_this_1.cache.json.get("enemy")[journeyX][_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].getRandomInt(_this_1.cache.json.get("enemy")[journeyX].length)]); // Add the enemy (n° day, 0/1)
                    enemyName = _this_1.fakePlayer.getName();
                    enemyFrame = _this_1.fakePlayer.getFrame();
                    _this_1.createEnemy(enemyName, enemyFrame); // NEW ENEMY or MERCHENT
                    _this_1._roundService.startRoundPlayer(_this_1.player, _this_1.fakePlayer); // START ROUND OF PLAYER
                    _this_1.initCard = -750;
                    _this_1.deleteCards(); // DELETE HAND CARDS
                    _this_1.addCardInHand(_this); // NEW HAND
                    saveCurrentArmor = _this_1.player.getCurrentArmor();
                    saveCurrentHealth = _this_1.player.getCurrentHealth();
                    saveCurrentAttack = _this_1.player.getCurrentAttack();
                    _this.cameras.main.fadeIn(3000, 1, 1, 1, function () { }, _this_1);
                });
                _this_1.cameras.main.on("camerafadeincomplete", function () {
                    text_1.setVisible(false);
                });
                return;
            }
            _this_1._roundService.startRoundEnemy(_this_1.player, _this_1.fakePlayer); // START ROUND OF ENEMY
            _this_1._roundService.roundEnemy(_this_1.fakePlayer); // ROUND OF ENEMY
            if (_this_1.player.getCurrentHealth() <= 0) {
                journeyX = 0;
                _this_1.scene.start("MainMenuScene");
            }
            var attackmp3 = _this_1.sound.add("monster_attack");
            setTimeout(function () {
                attackmp3.play();
                if (_this_1.fakePlayer.getCurrentAttack() > 0) { // SPRITE ATTACK ENEMY
                    setTimeout(function () {
                        _this_1.attackEnemy();
                    }, 1500);
                }
            }, 500);
            _this_1._roundService.endRoundEnemy(_this_1.player, _this_1.fakePlayer);
            if (_this_1.fakePlayer.getName() === "Merchant") {
                // si player est  mort ???
                // this._roundService.endBatlle();  
                journeyX++;
                _this_1.createJourney(journeyX);
                _this_1._roundService.initPlayerForBattle(_this_1.player);
                _this_1.fakePlayer = new _objects_enemy__WEBPACK_IMPORTED_MODULE_3__["Enemy"](_this_1.cache.json.get("enemy")[journeyX][_services_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].getRandomInt(_this_1.cache.json.get("enemy")[journeyX].length)]); // Add the enemy (n° day, 0/1)
                enemyName = _this_1.fakePlayer.getName();
                enemyFrame = _this_1.fakePlayer.getFrame();
                _this_1.createEnemy(enemyName, enemyFrame);
                _this_1._roundService.startRoundPlayer(_this_1.player, _this_1.fakePlayer);
                _this_1.initCard = -750;
                _this_1.deleteCards();
                _this_1.addCardInHand(_this);
                saveCurrentArmor = _this_1.player.getCurrentArmor();
                saveCurrentHealth = _this_1.player.getCurrentHealth();
                saveCurrentAttack = _this_1.player.getCurrentAttack();
                return;
            }
            _this_1._roundService.startRoundPlayer(_this_1.player, _this_1.fakePlayer);
            _this_1.initCard = -750;
            _this_1.deleteCards();
            _this_1.addCardInHand(_this);
            saveCurrentArmor = _this_1.player.getCurrentArmor();
            saveCurrentHealth = _this_1.player.getCurrentHealth();
            saveCurrentAttack = _this_1.player.getCurrentAttack();
            _this.attackHero();
        });
    };
    HudScene.prototype.attackHero = function () {
        var attackmp3 = this.sound.add("epee");
        attackmp3.play();
        heroSprite.visible = false;
        attackHeroSprite = this.add.sprite(-800 / this.ratio, 150 / this.ratio, 'hero_attack').setScale(1);
        attackHeroSprite.setDisplaySize(200 / this.ratio, 300 / this.ratio);
        attackHeroSprite.anims.play('heroAttack');
        attackHeroSprite.x += 200;
        setTimeout(function () {
            attackHeroSprite.x -= 200;
            heroSprite.visible = true;
            attackHeroSprite.visible = false;
        }, 1000);
        var configEnemyAnim = {
            key: 'enemyDamage',
            frames: this.anims.generateFrameNumbers("anim_attack_enemy", { start: 0, end: 11 }),
            frameRate: 30,
        };
        animEnemyAttack = this.anims.create(configEnemyAnim);
        var damage = this.add.sprite(0 / this.ratio, 150 / this.ratio, "anim_attack_enemy");
        damage.setDisplaySize(250 / this.ratio, 250 / this.ratio);
        damage.anims.play('enemyDamage');
        setTimeout(function () {
            damage.destroy();
        }, 1200);
    };
    HudScene.prototype.attackEnemy = function () {
        //  setTimeout(() => {
        enemySprite.x -= 200;
        setTimeout(function () {
            enemySprite.x += 200;
        }, 1000);
        var configHeroAnim = {
            key: 'heroDamage',
            frames: this.anims.generateFrameNumbers("anim_attack_hero", { start: 0, end: 11 }),
            frameRate: 30,
        };
        var animHeroAttack = this.anims.create(configHeroAnim);
        var damageHero = this.add.sprite(-800 / this.ratio, 150 / this.ratio, "anim_attack_hero");
        damageHero.setDisplaySize(250 / this.ratio, 250 / this.ratio);
        damageHero.anims.play('heroDamage');
        setTimeout(function () {
            damageHero.destroy();
        }, 1200);
        // }, 1500);
    };
    HudScene.prototype.createJourney = function (journey) {
        if (journeyX > 0) {
            spriteJourney.destroy();
        }
        spriteJourney = this.add.sprite(0 / this.ratio, -473 / this.ratio, 'journey', journey);
        spriteJourney.setDisplaySize(1000 / this.ratio, 100 / this.ratio);
    };
    HudScene.prototype.deleteCards = function () {
        for (var _i = 0, _a = this.handCardSprites; _i < _a.length; _i++) {
            var cardSprite = _a[_i];
            cardSprite.destroy();
        }
    };
    HudScene.prototype.createDeck = function () {
        var deck = this.add.image(760 / this.ratio, 410 / this.ratio, 'deck');
        deck.setDisplaySize(200 / this.ratio, 200 / this.ratio);
        nb_deck = this.add.text(800 / this.ratio, 450 / this.ratio, '' + this.player.getDeck().length, {
            fontfamily: 'BIT',
            fontSize: '32px',
            fill: "white",
            align: "center"
        });
    };
    HudScene.prototype.update = function () {
        lifeText.text = this.player.getCurrentHealth();
        armorText.text = this.player.getCurrentArmor();
        attackText.text = this.player.getCurrentAttack();
        nb_deck.text = this.player.getDeck().length;
        if (statutIsplayed) {
            handText.text = this.player.getCurrentActionPoint();
        }
        // if(sprite.input.pointerOver())
        // {
        //     parchment.visible = true;
        // }
    };
    HudScene.prototype.cardClicked = function () {
    };
    HudScene.prototype.endTurn = function () {
    };
    HudScene.prototype.rerollTurn = function () {
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
            localStorage.setItem("resolution_ratio", _this.carousel.getContentToSave().ratio);
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
        /**********************************************/
        /*****************JSON*************************/
        /**********************************************/
        this.load.json("options", "configuration/env-config.json");
        this.load.json("cards", "assets/json/cards.json");
        this.load.json("enemy", "assets/json/enemy.json");
        this.load.json("player", "assets/json/player.json");
        /**********************************************/
        /*****************SPRITESHEET******************/
        /**********************************************/
        this.load.spritesheet('background', 'assets/background/BG_JEU.png', { frameWidth: 1920, frameHeight: 1080 });
        this.load.spritesheet('hero_idle', 'assets/sprites/hero_idle_sprite.png', { frameWidth: 200, frameHeight: 300 });
        this.load.spritesheet('hero_attack', 'assets/sprites/hero_attack_sprite.png', { frameWidth: 200, frameHeight: 300 });
        this.load.spritesheet('journey', 'assets/images/parcours.png', { frameWidth: 1000, frameHeight: 100 });
        this.load.spritesheet('parchment', 'assets/Cards/carte_texte.png', { frameWidth: 350, frameHeight: 200 });
        this.load.spritesheet('bulle_merchant', 'assets/animations/bulle_hero.png', { frameWidth: 700, frameHeight: 600 });
        this.load.spritesheet('bulle_hero', 'assets/animations/bulle_marchand.png', { frameWidth: 700, frameHeight: 400 });
        //Enemy
        this.load.spritesheet('Spidy', 'assets/enemy/enemy_1.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Frodo', 'assets/enemy/enemy_2.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Razmo', 'assets/enemy/enemy_3.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Cultiz', 'assets/enemy/enemy_4.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Caspor', 'assets/enemy/enemy_5.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Bigznoise', 'assets/enemy/enemy_6.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Slid', 'assets/enemy/enemy_7.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Coweird', 'assets/enemy/enemy_8.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Chtoing', 'assets/enemy/enemy_9.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Spidhell', 'assets/enemy/enemy_11.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Grey Knight', 'assets/enemy/enemy_12.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Rapido', 'assets/enemy/enemy_13.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Cultist', 'assets/enemy/enemy_14.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Ghoulst', 'assets/enemy/enemy_15.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('IT', 'assets/enemy/enemy_16.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Solidsssssss', 'assets/enemy/enemy_17.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Mino', 'assets/enemy/enemy_18.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Yogstot', 'assets/enemy/enemy_19.png', { frameWidth: 600, frameHeight: 600 });
        this.load.spritesheet('Merchant', 'assets/enemy/shop_1.png', { frameWidth: 600, frameHeight: 600 });
        //Boost
        this.load.spritesheet('boost_attack', 'assets/animations/boost_yellow.png', { frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('boost_armor', 'assets/animations/boost_green.png', { frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('boost_health', 'assets/animations/boost_red.png', { frameWidth: 500, frameHeight: 500 });
        //anim_attack
        this.load.spritesheet('anim_attack_enemy', 'assets/animations/anim_attack_enemy.png', { frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('anim_attack_hero', 'assets/animations/anim_attack_hero.png', { frameWidth: 500, frameHeight: 500 });
        //Deck
        this.load.spritesheet('deck', 'assets/images/deck.png', { frameWidth: 200, frameHeight: 200 });
        this.load.image("coeur", 'assets/images/coeur.png');
        this.load.image("armor", 'assets/images/armor.png');
        this.load.image("attack", 'assets/images/attack.png');
        this.load.image("endround", 'assets/images/FinTour.png');
        this.load.image("hand", 'assets/images/main.png');
        this.load.image("Carte_1", 'assets/Cards/Carte_1.png');
        this.load.image("Carte_2", 'assets/Cards/Carte_2.png');
        this.load.image("Carte_3", 'assets/Cards/Carte_3.png');
        this.load.image("Carte_4", 'assets/Cards/Carte_4.png');
        this.load.image("Carte_5", 'assets/Cards/Carte_5.png');
        this.load.image("Carte_6", 'assets/Cards/Carte_6.png');
        this.load.image("Carte_7", 'assets/Cards/Carte_7.png');
        this.load.image("Carte_8", 'assets/Cards/Carte_8.png');
        this.load.image("Carte_9", 'assets/Cards/Carte_9.png');
        this.load.image("Carte_10", 'assets/Cards/Carte_10.png');
        this.load.image("Carte_11", 'assets/Cards/Carte_11.png');
        this.load.image("Carte_12", 'assets/Cards/Carte_12.png');
        this.load.image("Carte_13", 'assets/Cards/Carte_13.png');
        this.load.image("Carte_14", 'assets/Cards/Carte_14.png');
        this.load.image("Carte_15", 'assets/Cards/Carte_15.png');
        this.load.image("Carte_16", 'assets/Cards/Carte_16.png');
        this.load.image("Carte_17", 'assets/Cards/Carte_17.png');
        this.load.image("Carte_18", 'assets/Cards/Carte_18.png');
        this.load.image("Carte_19", 'assets/Cards/Carte_19.png');
        this.load.image("Carte_20", 'assets/Cards/Carte_20.png');
        this.load.image("Carte_21", 'assets/Cards/Carte_21.png');
        this.load.image("Carte_22", 'assets/Cards/Carte_22.png');
        this.load.image("Carte_23", 'assets/Cards/Carte_23.png');
        this.load.image("Carte_24", 'assets/Cards/Carte_24.png');
        this.load.image("Carte_25", 'assets/Cards/Carte_25.png');
        this.load.image("Carte_26", 'assets/Cards/Carte_26.png');
        this.load.image("Carte_27", 'assets/Cards/Carte_27.png');
        this.load.image("Carte_28", 'assets/Cards/Carte_28.png');
        this.load.image("Carte_29", 'assets/Cards/Carte_29.png');
        this.load.image("Carte_30", 'assets/Cards/Carte_30.png');
        this.load.image("Carte_31", 'assets/Cards/Carte_31.png');
        this.load.image("Carte_32", 'assets/Cards/Carte_32.png');
        this.load.image("Carte_33", 'assets/Cards/Carte_33.png');
        this.load.image("Carte_34", 'assets/Cards/Carte_34.png');
        this.load.image("Carte_35", 'assets/Cards/Carte_35.png');
        this.load.image("Carte_36", 'assets/Cards/Carte_36.png');
        this.load.image("Carte_37", 'assets/Cards/Carte_37.png');
        this.load.image("Carte_38", 'assets/Cards/Carte_38.png');
        this.load.image("Carte_39", 'assets/Cards/Carte_39.png');
        this.load.image("Carte_40", 'assets/Cards/Carte_40.png');
        this.load.image("Carte_41", 'assets/Cards/Carte_41.png');
        this.load.image("Carte_42", 'assets/Cards/Carte_42.png');
        this.load.image("Carte_43", 'assets/Cards/Carte_43.png');
        this.load.image("Carte_44", 'assets/Cards/Carte_44.png');
        this.load.image("Carte_45", 'assets/Cards/Carte_45.png');
        this.load.image("Carte_46", 'assets/Cards/Carte_46.png');
        this.load.image("Carte_47", 'assets/Cards/Carte_47.png');
        this.load.image("Carte_48", 'assets/Cards/Carte_48.png');
        this.load.image("Carte_49", 'assets/Cards/Carte_49.png');
        //Music
        this.load.audio('game', ['assets/music/game.mp3']);
        this.load.audio('gametitle', ['assets/music/gametitle.mp3']);
        this.load.audio('gameend', ['assets/music/gameend.mp3']);
        this.load.audio('gameover', ['assets/music/gameover.mp3']);
        this.load.audio('gameshop', ['assets/music/gameshop.mp3']);
        this.load.audio('boost1', ['assets/music/boost1.mp3']);
        this.load.audio('boost2', ['assets/music/boost2.mp3']);
        this.load.audio('boost3', ['assets/music/boost3.mp3']);
        this.load.audio('carte', ['assets/music/carte.mp3']);
        this.load.audio('epee', ['assets/music/épée.mp3']);
        this.load.audio('monster_attack', ['assets/music/monster_attack.mp3']);
        this.load.audio('monster_cri', ['assets/music/monster_cri.mp3']);
        this.load.audio('noselect', ['assets/music/noselect.mp3']);
        this.load.audio('select', ['assets/music/select.mp3']);
        this.load.audio('poison', ['assets/music/poison.mp3']);
        this.load.audio('stun', ['assets/music/stun.mp3']);
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

/***/ "./src/app/services/card.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/card.service.ts ***!
  \******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/app/services/utils.ts");

var CardService = /** @class */ (function () {
    function CardService() {
    }
    CardService.prototype.isPlayed = function (player, card) {
        // console.log(player);
        // console.log(card);
        if (player.getIsStuned()) {
            return false;
        }
        if (player.getCurrentActionPoint() < card.cost) {
            return false;
        }
        player.setCurrentActionPoint(player.getCurrentActionPoint() - card.cost);
        player.setCurrentAttack(player.getCurrentAttack() + card.attack);
        player.setCurrentArmor(player.getCurrentArmor() + card.armor);
        player.setCurrentHealth(player.getCurrentHealth() + card.heal);
        player.setNextAttackEffects(player.getNextAttackEffects().concat(card.effects));
        player.getHand().splice(player.getHand().indexOf(card), 1);
        player.getDiscard().push(card);
        return true;
    };
    CardService.prototype.createDeck = function (cards) {
        return _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].shuffle([cards[0], cards[0], cards[1], cards[1], cards[1], cards[1], cards[2], cards[2], cards[3], cards[3], cards[4], cards[5], cards[3], cards[2], cards[9]]);
    };
    return CardService;
}());



/***/ }),

/***/ "./src/app/services/enemyAction.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/enemyAction.service.ts ***!
  \*************************************************/
/*! exports provided: EnemyActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyActionService", function() { return EnemyActionService; });
var EnemyActionService = /** @class */ (function () {
    function EnemyActionService() {
    }
    EnemyActionService.prototype.isUsed = function (enemy, action) {
        if (enemy.getIsStuned()) {
            return false;
        }
        enemy.setCurrentAttack(enemy.getCurrentAttack() + action.attack);
        enemy.setCurrentArmor(enemy.getCurrentArmor() + action.armor);
        enemy.setCurrentHealth(enemy.getCurrentHealth() + action.heal);
        enemy.setNextAttackEffects(enemy.getNextAttackEffects().concat(action.effects));
        return true;
    };
    return EnemyActionService;
}());



/***/ }),

/***/ "./src/app/services/merchant.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/merchant.service.ts ***!
  \**********************************************/
/*! exports provided: MerchantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantService", function() { return MerchantService; });
/* harmony import */ var _objects_merchantOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/merchantOption */ "./src/app/objects/merchantOption.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/services/utils.ts");


var MerchantService = /** @class */ (function () {
    function MerchantService() {
    }
    MerchantService.prototype.createOptions = function (cards) {
        var option1 = new _objects_merchantOption__WEBPACK_IMPORTED_MODULE_0__["MerchantOption"]({
            text: "For a small part of your life, you can have a card.",
            cards: [cards[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(cards.length)]],
            cardsHidden: false,
            cost: 1
        });
        var option2 = new _objects_merchantOption__WEBPACK_IMPORTED_MODULE_0__["MerchantOption"]({
            text: "For a moderate part of your life, you can have three cards.",
            cards: [
                cards[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(cards.length)],
                cards[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(cards.length)],
                cards[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(cards.length)]
            ],
            cardsHidden: true,
            cost: 2
        });
        var option3 = new _objects_merchantOption__WEBPACK_IMPORTED_MODULE_0__["MerchantOption"]({
            text: "For a large part of your life, you can have five card.",
            cards: [
                cards[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(cards.length)],
                cards[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(cards.length)],
                cards[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(cards.length)],
                cards[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(cards.length)],
                cards[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(cards.length)]
            ],
            cardsHidden: true,
            cost: 3
        });
        var text = "Welcome to the Shop ! Here you can trade your life to get cards.";
        text += "\n1 : " + option1.text;
        text += "\n2 : " + option2.text;
        text += "\n3 : " + option3.text;
        text += "\nChoose carefully !";
        return {
            "text": text,
            "options": [option1, option2, option3]
        };
    };
    MerchantService.prototype.chooseOption = function (player, option) {
        for (var _i = 0, _a = option.cards; _i < _a.length; _i++) {
            var card = _a[_i];
            player.getDeck().push(card);
        }
        player.setMaxHealth(player.getMaxHealth() - option.cost);
        player.setCurrentHealth(player.getMaxHealth());
        player.setDeck(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].shuffle(player.getDeck()));
    };
    return MerchantService;
}());



/***/ }),

/***/ "./src/app/services/round.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/round.service.ts ***!
  \*******************************************/
/*! exports provided: RoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundService", function() { return RoundService; });
/* harmony import */ var _services_enemyAction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/enemyAction.service */ "./src/app/services/enemyAction.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/services/utils.ts");


var RoundService = /** @class */ (function () {
    function RoundService() {
        this.enemyActionService = new _services_enemyAction_service__WEBPACK_IMPORTED_MODULE_0__["EnemyActionService"]();
    }
    RoundService.prototype.initPlayerForBattle = function (player) {
        player.setCurrentActionPoint(player.getMaxActionPoint());
        player.setCurrentHealth(player.getMaxHealth());
        player.setDeck(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].shuffle(player.getDeck().concat(player.getDiscard().concat(player.getHand()))));
        player.setDiscard([]);
        player.setHand([]);
    };
    RoundService.prototype.startRoundPlayer = function (player, enemy) {
        console.log(player);
        console.log(enemy);
        draw(player, 5);
        player.setCurrentActionPoint(player.getMaxActionPoint());
        resetStats(player);
        applyEffects(player, enemy);
    };
    RoundService.prototype.endRoundPlayer = function (player, enemy) {
        inflictDamage(player, enemy);
        inflictEffects(player, enemy, player.getNextAttackEffects());
        player.setNextAttackEffects([]);
    };
    RoundService.prototype.startRoundEnemy = function (player, enemy) {
        console.log(player);
        console.log(enemy);
        resetStats(enemy);
        applyEffects(enemy, player);
    };
    RoundService.prototype.roundEnemy = function (enemy) {
        var action = enemy.actions[_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(enemy.actions.length)];
        this.enemyActionService.isUsed(enemy, action);
    };
    RoundService.prototype.endRoundEnemy = function (player, enemy) {
        inflictDamage(enemy, player);
        inflictEffects(player, enemy, enemy.getNextAttackEffects());
        enemy.setNextAttackEffects([]);
    };
    return RoundService;
}());

function draw(player, n) {
    while (player.getHand().length > 0) {
        player.getDiscard().push(player.getHand().pop());
    }
    for (var i = n; i > 0; i--) {
        if (player.getDeck().length <= 0) {
            player.setDeck(_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].shuffle(player.getDiscard()));
            player.setDiscard([]);
        }
        player.getHand().push(player.getDeck().pop());
    }
}
function resetStats(caracter) {
    caracter.setIsStuned(false);
    caracter.setCurrentAttack(1);
    caracter.setCurrentArmor(0);
}
function applyEffects(character1, character2) {
    for (var _i = 0, _a = character1.getEffects(); _i < _a.length; _i++) {
        var effect = _a[_i];
        if (effect.delay === 0) {
            if (effect.duration > 0) {
                effect.duration--;
                if (effect.type === 'boost') {
                    character1.setCurrentAttack(character1.getCurrentAttack() + effect.attack);
                    character1.setCurrentArmor(character1.getCurrentArmor() + effect.armor);
                    character1.setCurrentHealth(character1.getCurrentHealth() + effect.health);
                }
                if (effect.type === 'stun') {
                    character1.setIsStuned(true);
                }
                if (effect.type === 'immune') {
                    character1.setIsImmune(true);
                }
                if (effect.type === 'protect') {
                    character1.setIsProtected(true);
                }
                if (effect.type === 'poison' && !character1.getIsImmune()) {
                    var poisonDamage = (character2.getCurrentAttack() - character1.getCurrentArmor()) / 2;
                    character1.setCurrentHealth(character1.getCurrentHealth() - poisonDamage);
                }
            }
            else {
                character1.getEffects().splice(character1.getEffects().indexOf(effect), 1);
            }
        }
        else {
            effect.delay--;
        }
    }
}
function inflictDamage(character1, character2) {
    var attackDamage = character1.getCurrentAttack() - character2.getCurrentArmor();
    attackDamage = attackDamage > 0 ? attackDamage : 0;
    attackDamage = character1.getIsProtected() ? attackDamage / 2 : attackDamage;
    character2.setCurrentHealth(character2.getCurrentHealth() - attackDamage);
}
function inflictEffects(player, enemy, effects) {
    for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
        var effect = effects_1[_i];
        if (areConditionsFullfiled(player, enemy, effect.conditions)) {
            if (effect.probability > _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getRandomInt(99)) {
                if (effect.target === 'enemy') {
                    if (effect.type === 'boost') {
                        enemy.getEffects().unshift(effect);
                    }
                    else {
                        enemy.getEffects().push(effect);
                    }
                }
                else {
                    if (effect.type === 'boost') {
                        player.getEffects().unshift(effect);
                    }
                    else {
                        player.getEffects().push(effect);
                    }
                }
            }
        }
    }
}
function areConditionsFullfiled(player, enemy, conditions) {
    if (conditions.length > 0) {
        for (var _i = 0, conditions_1 = conditions; _i < conditions_1.length; _i++) {
            var condition = conditions_1[_i];
            if (condition.type === 'state' && condition.caracteristic === 'stun') {
                if ((condition.target === 'enemy' && !enemy.getIsStuned())
                    || (condition.target === 'player' && !player.getIsStuned())) {
                    return false;
                }
            }
            if (condition.type === 'state' && condition.caracteristic === 'immune') {
                if ((condition.target === 'enemy' && !enemy.getIsImmune())
                    || (condition.target === 'player' && !player.getIsImmune())) {
                    return false;
                }
            }
            if (condition.type === 'state' && condition.caracteristic === 'protected') {
                if ((condition.target === 'enemy' && !enemy.getIsProtected())
                    || (condition.target === 'player' && !player.getIsProtected())) {
                    return false;
                }
            }
            if (condition.type === 'stats' && condition.caracteristic === 'attack') {
                if ((condition.target === 'enemy' && !(enemy.getCurrentAttack() > condition.value))
                    || (condition.target === 'player' && !(player.getCurrentAttack() > condition.value))) {
                    return false;
                }
            }
            if (condition.type === 'stats' && condition.caracteristic === 'armor') {
                if ((condition.target === 'enemy' && !(enemy.getCurrentArmor() > condition.value))
                    || (condition.target === 'player' && !(player.getCurrentArmor() > condition.value))) {
                    return false;
                }
            }
            if (condition.type === 'stats' && condition.caracteristic === 'health') {
                if ((condition.target === 'enemy' && !(enemy.getCurrentHealth() > condition.value))
                    || (condition.target === 'player' && !(player.getCurrentHealth() > condition.value))) {
                    return false;
                }
            }
        }
    }
    return true;
}


/***/ }),

/***/ "./src/app/services/utils.ts":
/*!***********************************!*\
  !*** ./src/app/services/utils.ts ***!
  \***********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Utils.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    return Utils;
}());



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

module.exports = __webpack_require__(/*! C:\Users\trist\Documents\GitHub\LD44\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map