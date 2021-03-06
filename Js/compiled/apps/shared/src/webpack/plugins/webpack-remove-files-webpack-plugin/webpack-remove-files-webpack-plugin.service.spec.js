"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const webpack_remove_files_webpack_plugin_service_1 = require("./webpack-remove-files-webpack-plugin.service");
describe('WebpackRemoveFilesWebpackPluginService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [webpack_remove_files_webpack_plugin_service_1.WebpackRemoveFilesWebpackPluginService],
        }).compile();
        service = module.get(webpack_remove_files_webpack_plugin_service_1.WebpackRemoveFilesWebpackPluginService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=webpack-remove-files-webpack-plugin.service.spec.js.map