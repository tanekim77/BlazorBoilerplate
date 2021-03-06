"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const webpack_html_webpack_plugin_service_1 = require("./webpack-html-webpack-plugin.service");
describe('WebpackHtmlWebpackPluginService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [webpack_html_webpack_plugin_service_1.WebpackHtmlWebpackPluginService],
        }).compile();
        service = module.get(webpack_html_webpack_plugin_service_1.WebpackHtmlWebpackPluginService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=webpack-html-webpack-plugin.service.spec.js.map