import { CustomInjectable } from '@shared/src/functions/process-webpack-providers';

import {
    WebpackWatchEntriesPluginConfigService,
    WebpackWatchEntriesPluginService,
} from '@shared/src/webpack/plugins/webpack-watch-entries-plugin/webpack-watch-entries-plugin.service';

@CustomInjectable()
export class AuthWebpackWatchEntriesPluginConfigService extends WebpackWatchEntriesPluginConfigService {
    createOptions(options?) {
        return this.mergeService.mergeOptions(
            super.createOptions(),
            {
                id: WebpackWatchEntriesPluginConfigService.name,
                outputPath: this.environmentService.outputDir,
            },
            options,
        );
    }
}

@CustomInjectable()
export class AuthWebpackWatchEntriesPluginService extends WebpackWatchEntriesPluginService {
    createOptions(options?) {
        return this.mergeService.mergeOptions(
            super.createOptions(),
            {
                id: WebpackWatchEntriesPluginService.name,
                outputPath: this.environmentService.outputDir,
            },
            options,
        );
    }
}
