"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const webpack_style_rules_service_1 = require("./webpack-style-rules.service");
describe('BlazorAppWebpackStyleRulesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [webpack_style_rules_service_1.BlazorAppWebpackStyleRulesService],
        }).compile();
        service = module.get(webpack_style_rules_service_1.BlazorAppWebpackStyleRulesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=webpack-style-rules.service.spec.js.map