"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandlers = void 0;
var hero_killed_dragon_handler_1 = require("./hero-killed-dragon.handler");
var hero_found_item_handler_1 = require("./hero-found-item.handler");
exports.EventHandlers = [hero_killed_dragon_handler_1.HeroKilledDragonHandler, hero_found_item_handler_1.HeroFoundItemHandler];
