"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const environment_service_1 = require("./environment.service");
describe('BlazorAppEnvironmentService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [environment_service_1.BlazorAppEnvironmentService],
        }).compile();
        service = module.get(environment_service_1.BlazorAppEnvironmentService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=environment.service.spec.js.map