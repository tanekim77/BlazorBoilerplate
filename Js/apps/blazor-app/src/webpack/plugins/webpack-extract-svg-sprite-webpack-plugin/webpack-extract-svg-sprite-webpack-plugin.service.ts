import { WebpackExtractSvgSpriteWebpackPluginService } from '@shared/src/webpack/plugins/webpack-extract-svg-sprite-webpack-plugin/webpack-extract-svg-sprite-webpack-plugin.service';

const ExtractSvgSpriteWebpackPlugin = require('extract-svg-sprite-webpack-plugin');

import { CustomInjectable } from '@shared/src/functions/process-webpack-providers';

@CustomInjectable()
export class BlazorAppWebpackExtractSvgSpriteWebpackPluginService extends WebpackExtractSvgSpriteWebpackPluginService {
    createOptions(options?) {
        return this.mergeService.mergeOptions(super.createOptions(), {}, options);
    }
}
