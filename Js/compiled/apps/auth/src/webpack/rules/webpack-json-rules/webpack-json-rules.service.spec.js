"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const webpack_json_rules_service_1 = require("./webpack-json-rules.service");
describe('AuthWebpackJsonRulesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [webpack_json_rules_service_1.AuthWebpackJsonRulesService],
        }).compile();
        service = module.get(webpack_json_rules_service_1.AuthWebpackJsonRulesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=webpack-json-rules.service.spec.js.map