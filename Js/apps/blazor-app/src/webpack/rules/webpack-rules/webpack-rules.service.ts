import {
    WebpackRulesConfigService,
    WebpackRulesService,
} from '@shared/src/webpack/rules/webpack-rules/webpack-rules.service';

import { CustomInjectable } from '@shared/src/functions/process-webpack-providers';

@CustomInjectable()
export class BlazorAppWebpackRulesConfigService extends WebpackRulesConfigService {}

@CustomInjectable()
export class BlazorAppWebpackRulesService extends WebpackRulesService {}
