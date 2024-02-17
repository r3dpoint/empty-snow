"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesGameSagas = void 0;
var common_1 = require("@nestjs/common");
var cqrs_1 = require("@nestjs/cqrs");
var operators_1 = require("rxjs/operators");
var drop_ancient_item_command_1 = require("../commands/impl/drop-ancient-item.command");
var hero_killed_dragon_event_1 = require("../events/impl/hero-killed-dragon.event");
var itemId = '0';
var HeroesGameSagas = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _dragonKilled_decorators;
    var _dragonKilled_initializers = [];
    var HeroesGameSagas = _classThis = /** @class */ (function () {
        function HeroesGameSagas_1() {
            this.dragonKilled = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _dragonKilled_initializers, function (events$) {
                return events$.pipe((0, cqrs_1.ofType)(hero_killed_dragon_event_1.HeroKilledDragonEvent), (0, operators_1.delay)(1000), (0, operators_1.map)(function (event) {
                    console.log('Inside [HeroesGameSagas] Saga', event);
                    return new drop_ancient_item_command_1.DropAncientItemCommand(event.heroId, itemId);
                }));
            }));
        }
        return HeroesGameSagas_1;
    }());
    __setFunctionName(_classThis, "HeroesGameSagas");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _dragonKilled_decorators = [(0, cqrs_1.Saga)()];
        __esDecorate(null, null, _dragonKilled_decorators, { kind: "field", name: "dragonKilled", static: false, private: false, access: { has: function (obj) { return "dragonKilled" in obj; }, get: function (obj) { return obj.dragonKilled; }, set: function (obj, value) { obj.dragonKilled = value; } }, metadata: _metadata }, _dragonKilled_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HeroesGameSagas = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HeroesGameSagas = _classThis;
}();
exports.HeroesGameSagas = HeroesGameSagas;
