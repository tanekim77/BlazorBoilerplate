"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const webpack_shared_config_service_1 = require("./webpack-shared-config.service");
describe('WebpackSharedConfigService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [webpack_shared_config_service_1.WebpackSharedConfigService],
        }).compile();
        service = module.get(webpack_shared_config_service_1.WebpackSharedConfigService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=webpack-shared-config.service.spec.js.map