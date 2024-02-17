"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var cqrs_1 = require("@nestjs/cqrs");
var hero_found_item_event_1 = require("../events/impl/hero-found-item.event");
var hero_killed_dragon_event_1 = require("../events/impl/hero-killed-dragon.event");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        return _this;
    }
    Hero.prototype.killEnemy = function (enemyId) {
        // logic
        this.apply(new hero_killed_dragon_event_1.HeroKilledDragonEvent(this.id, enemyId));
    };
    Hero.prototype.addItem = function (itemId) {
        // logic
        this.apply(new hero_found_item_event_1.HeroFoundItemEvent(this.id, itemId));
    };
    return Hero;
}(cqrs_1.AggregateRoot));
exports.Hero = Hero;
