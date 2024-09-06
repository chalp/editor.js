import type { BlockAPI as BlockAPIInterface, Blocks } from '../../../api';
import type { BlockToolData, ToolConfig } from '../../../tools';
import type { OutputData } from '../../../data-formats';
import Module from '../../__module';
import type { BlockTuneData } from '../../../../types/block-tunes/block-tune-data';
/**
 * @class BlocksAPI
 * provides with methods working with Block
 */
export default class BlocksAPI extends Module {
    /**
     * Available methods
     *
     * @returns {Blocks}
     */
    get methods(): Blocks;
    /**
     * Returns Blocks count
     *
     * @returns {number}
     */
    getBlocksCount(): number;
    /**
     * Returns current block index
     *
     * @returns {number}
     */
    getCurrentBlockIndex(): number;
    /**
     * Returns the index of Block by id;
     *
     * @param id - block id
     */
    getBlockIndex(id: string): number | undefined;
    /**
     * Returns BlockAPI object by Block index
     *
     * @param {number} index - index to get
     */
    getBlockByIndex(index: number): BlockAPIInterface | undefined;
    /**
     * Returns BlockAPI object by Block id
     *
     * @param id - id of block to get
     */
    getById(id: string): BlockAPIInterface | null;
    /**
     * Get Block API object by any child html element
     *
     * @param element - html element to get Block by
     */
    getBlockByElement(element: HTMLElement): BlockAPIInterface | undefined;
    /**
     * Call Block Manager method that swap Blocks
     *
     * @param {number} fromIndex - position of first Block
     * @param {number} toIndex - position of second Block
     * @deprecated — use 'move' instead
     */
    swap(fromIndex: number, toIndex: number): void;
    /**
     * Move block from one index to another
     *
     * @param {number} toIndex - index to move to
     * @param {number} fromIndex - index to move from
     */
    move(toIndex: number, fromIndex?: number): void;
    /**
     * Deletes Block
     *
     * @param {number} blockIndex - index of Block to delete
     */
    delete(blockIndex?: number): void;
    /**
     * Clear Editor's area
     */
    clear(): Promise<void>;
    /**
     * Fills Editor with Blocks data
     *
     * @param {OutputData} data — Saved Editor data
     */
    render(data: OutputData): Promise<void>;
    /**
     * Render passed HTML string
     *
     * @param {string} data - HTML string to render
     * @returns {Promise<void>}
     */
    renderFromHTML(data: string): Promise<void>;
    /**
     * Stretch Block's content
     *
     * @param {number} index - index of Block to stretch
     * @param {boolean} status - true to enable, false to disable
     * @deprecated Use BlockAPI interface to stretch Blocks
     */
    stretchBlock(index: number, status?: boolean): void;
    /**
     * Insert new Block and returns it's API
     *
     * @param {string} type — Tool name
     * @param {BlockToolData} data — Tool data to insert
     * @param {ToolConfig} config — Tool config
     * @param {number?} index — index where to insert new Block
     * @param {boolean?} needToFocus - flag to focus inserted Block
     * @param replace - pass true to replace the Block existed under passed index
     * @param {string} id — An optional id for the new block. If omitted then the new id will be generated
     */
    insert: (type?: string, data?: BlockToolData, config?: ToolConfig, index?: number, needToFocus?: boolean, replace?: boolean, id?: string) => BlockAPIInterface;
    /**
     * Creates data of an empty block with a passed type.
     *
     * @param toolName - block tool name
     */
    composeBlockData: (toolName: string) => Promise<BlockToolData>;
    /**
     * Insert new Block
     * After set caret to this Block
     *
     * @todo remove in 3.0.0
     * @deprecated with insert() method
     */
    insertNewBlock(): void;
    /**
     * Updates block data by id
     *
     * @param id - id of the block to update
     * @param data - (optional) the new data
     * @param tunes - (optional) tune data
     */
    update: (id: string, data?: Partial<BlockToolData>, tunes?: {
        [name: string]: BlockTuneData;
    }) => Promise<BlockAPIInterface>;
    /**
     * Converts block to another type. Both blocks should provide the conversionConfig.
     *
     * @param id - id of the existing block to convert. Should provide 'conversionConfig.export' method
     * @param newType - new block type. Should provide 'conversionConfig.import' method
     * @param dataOverrides - optional data overrides for the new block
     * @throws Error if conversion is not possible
     */
    private convert;
    /**
     * Inserts several Blocks to a specified index
     *
     * @param blocks - blocks data to insert
     * @param index - index to insert the blocks at
     */
    private insertMany;
    /**
     * Validated block index and throws an error if it's invalid
     *
     * @param index - index to validate
     */
    private validateIndex;
}
