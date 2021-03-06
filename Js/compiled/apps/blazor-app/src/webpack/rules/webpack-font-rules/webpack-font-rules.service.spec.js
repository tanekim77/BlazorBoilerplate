"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const webpack_font_rules_service_1 = require("./webpack-font-rules.service");
describe('BlazorAppWebpackFontRulesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [webpack_font_rules_service_1.BlazorAppWebpackFontRulesService],
        }).compile();
        service = module.get(webpack_font_rules_service_1.BlazorAppWebpackFontRulesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=webpack-font-rules.service.spec.js.map