"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandlers = void 0;
var kill_dragon_handler_1 = require("./kill-dragon.handler");
var drop_ancient_item_handler_1 = require("./drop-ancient-item.handler");
exports.CommandHandlers = [kill_dragon_handler_1.KillDragonHandler, drop_ancient_item_handler_1.DropAncientItemHandler];
