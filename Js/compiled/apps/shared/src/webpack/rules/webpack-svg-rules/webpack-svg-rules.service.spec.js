"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const webpack_svg_rules_service_1 = require("./webpack-svg-rules.service");
describe('WebpackSvgRulesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [webpack_svg_rules_service_1.WebpackSvgRulesService],
        }).compile();
        service = module.get(webpack_svg_rules_service_1.WebpackSvgRulesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=webpack-svg-rules.service.spec.js.map