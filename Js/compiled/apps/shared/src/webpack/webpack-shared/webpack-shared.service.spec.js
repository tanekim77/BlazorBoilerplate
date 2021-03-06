"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const webpack_shared_service_1 = require("./webpack-shared.service");
describe('WebpackSharedService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [webpack_shared_service_1.WebpackSharedService],
        }).compile();
        service = module.get(webpack_shared_service_1.WebpackSharedService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=webpack-shared.service.spec.js.map