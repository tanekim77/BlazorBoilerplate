"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlazorAppEnvironmentModule = void 0;
const configs_1 = require("@shared/configs");
const process_webpack_providers_1 = require("@shared/src/functions/process-webpack-providers");
const configs_2 = require("../../../configs");
const environment_service_1 = require("./environment/environment.service");
console.dir(configs_2.blazorAppConfig);
let BlazorAppEnvironmentModule = class BlazorAppEnvironmentModule {
};
BlazorAppEnvironmentModule = __decorate([
    process_webpack_providers_1.CustomModule({
        providers: [
            {
                provide: configs_1.LOCAL_CONFIG,
                useValue: configs_2.blazorAppConfig,
            },
            environment_service_1.BlazorAppEnvironmentService,
        ],
    })
], BlazorAppEnvironmentModule);
exports.BlazorAppEnvironmentModule = BlazorAppEnvironmentModule;
//# sourceMappingURL=environment.module.js.map