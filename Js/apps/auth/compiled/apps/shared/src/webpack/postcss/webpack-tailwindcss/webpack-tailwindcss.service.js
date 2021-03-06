"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackTailwindcssService = void 0;
const tailwindcss_1 = __importDefault(require("tailwindcss"));
const webpack_postcss_base_service_1 = require("../webpack-postcss-base/webpack-postcss-base.service");
const process_webpack_providers_1 = require("@shared/src/functions/process-webpack-providers");
const tailwind_config_ts_1 = __importDefault(require("@shared/tailwind.config.ts"));
let WebpackTailwindcssService = class WebpackTailwindcssService extends webpack_postcss_base_service_1.WebpackPostcssBaseService {
    constructor() {
        super(tailwindcss_1.default);
    }
    createOptions(options) {
        console.dir(tailwind_config_ts_1.default);
        return this.mergeService.mergeOptions(super.createOptions(), {
            config: tailwind_config_ts_1.default,
        });
    }
};
WebpackTailwindcssService = __decorate([
    process_webpack_providers_1.CustomInjectable(),
    __metadata("design:paramtypes", [])
], WebpackTailwindcssService);
exports.WebpackTailwindcssService = WebpackTailwindcssService;
//# sourceMappingURL=webpack-tailwindcss.service.js.map