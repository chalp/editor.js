import Module from '../__module';
import type { OutputBlockData } from '../../';
/**
 * Module that responsible for rendering Blocks on editor initialization
 */
export default class Renderer extends Module {
    /**
     * Renders passed blocks as one batch
     *
     * @param blocksData - blocks to render
     */
    render(blocksData: OutputBlockData[]): Promise<void>;
    /**
     * Create data for the Stub Tool that will be used instead of unavailable tool
     *
     * @param tool - unavailable tool name to stub
     * @param data - data of unavailable block
     * @param [id] - id of unavailable block
     */
    private composeStubDataForTool;
}
