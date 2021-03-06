import { CustomModule } from '@shared/src/functions/process-webpack-providers';

import { BlazorAppMergeService } from './merge/merge.service';

@CustomModule({
    providers: [BlazorAppMergeService],
})
export class MergeModule {}
