/**
 * @class BlockManager
 * @classdesc Manage editor`s blocks storage and appearance
 * @module BlockManager
 * @version 2.0.0
 */
import Block from '../block';
import Module from '../__module';
import type { BlockToolData, PasteEvent } from '../../';
import type { BlockTuneData } from '../../block-tunes/block-tune-data';
/**
 * @typedef {BlockManager} BlockManager
 * @property {number} currentBlockIndex - Index of current working block
 * @property {Proxy} _blocks - Proxy for Blocks instance {@link Blocks}
 */
export default class BlockManager extends Module {
    /**
     * Returns current Block index
     *
     * @returns {number}
     */
    get currentBlockIndex(): number;
    /**
     * Set current Block index and fire Block lifecycle callbacks
     *
     * @param {number} newIndex - index of Block to set as current
     */
    set currentBlockIndex(newIndex: number);
    /**
     * returns first Block
     *
     * @returns {Block}
     */
    get firstBlock(): Block;
    /**
     * returns last Block
     *
     * @returns {Block}
     */
    get lastBlock(): Block;
    /**
     * Get current Block instance
     *
     * @returns {Block}
     */
    get currentBlock(): Block | undefined;
    /**
     * Set passed Block as a current
     *
     * @param block - block to set as a current
     */
    set currentBlock(block: Block);
    /**
     * Returns next Block instance
     *
     * @returns {Block|null}
     */
    get nextBlock(): Block | null;
    /**
     * Return first Block with inputs after current Block
     *
     * @returns {Block | undefined}
     */
    get nextContentfulBlock(): Block;
    /**
     * Return first Block with inputs before current Block
     *
     * @returns {Block | undefined}
     */
    get previousContentfulBlock(): Block;
    /**
     * Returns previous Block instance
     *
     * @returns {Block|null}
     */
    get previousBlock(): Block | null;
    /**
     * Get array of Block instances
     *
     * @returns {Block[]} {@link Blocks#array}
     */
    get blocks(): Block[];
    /**
     * Check if each Block is empty
     *
     * @returns {boolean}
     */
    get isEditorEmpty(): boolean;
    /**
     * Index of current working block
     *
     * @type {number}
     */
    private _currentBlockIndex;
    /**
     * Proxy for Blocks instance {@link Blocks}
     *
     * @type {Proxy}
     * @private
     */
    private _blocks;
    /**
     * Should be called after Editor.UI preparation
     * Define this._blocks property
     */
    prepare(): void;
    /**
     * Toggle read-only state
     *
     * If readOnly is true:
     *  - Unbind event handlers from created Blocks
     *
     * if readOnly is false:
     *  - Bind event handlers to all existing Blocks
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(readOnlyEnabled: boolean): void;
    /**
     * Creates Block instance by tool name
     *
     * @param {object} options - block creation options
     * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
     * @param {string} [options.id] - unique id for this block
     * @param {BlockToolData} [options.data] - constructor params
     * @returns {Block}
     */
    composeBlock({ tool: name, data, id, tunes: tunesData, }: {
        tool: string;
        id?: string;
        data?: BlockToolData;
        tunes?: {
            [name: string]: BlockTuneData;
        };
    }): Block;
    /**
     * Insert new block into _blocks
     *
     * @param {object} options - insert options
     * @param {string} [options.id] - block's unique id
     * @param {string} [options.tool] - plugin name, by default method inserts the default block type
     * @param {object} [options.data] - plugin data
     * @param {number} [options.index] - index where to insert new Block
     * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
     * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
     * @returns {Block}
     */
    insert({ id, tool, data, index, needToFocus, replace, tunes, }?: {
        id?: string;
        tool?: string;
        data?: BlockToolData;
        index?: number;
        needToFocus?: boolean;
        replace?: boolean;
        tunes?: {
            [name: string]: BlockTuneData;
        };
    }): Block;
    /**
     * Inserts several blocks at once
     *
     * @param blocks - blocks to insert
     * @param index - index where to insert
     */
    insertMany(blocks: Block[], index?: number): void;
    /**
     * Update Block data.
     *
     * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
     * Should not trigger 'block-removed' or 'block-added' events.
     *
     * If neither data nor tunes is provided, return the provided block instead.
     *
     * @param block - block to update
     * @param data - (optional) new data
     * @param tunes - (optional) tune data
     */
    update(block: Block, data?: Partial<BlockToolData>, tunes?: {
        [name: string]: BlockTuneData;
    }): Promise<Block>;
    /**
     * Replace passed Block with the new one with specified Tool and data
     *
     * @param block - block to replace
     * @param newTool - new Tool name
     * @param data - new Tool data
     */
    replace(block: Block, newTool: string, data: BlockToolData): Block;
    /**
     * Insert pasted content. Call onPaste callback after insert.
     *
     * @param {string} toolName - name of Tool to insert
     * @param {PasteEvent} pasteEvent - pasted data
     * @param {boolean} replace - should replace current block
     */
    paste(toolName: string, pasteEvent: PasteEvent, replace?: boolean): Block;
    /**
     * Insert new default block at passed index
     *
     * @param {number} index - index where Block should be inserted
     * @param {boolean} needToFocus - if true, updates current Block index
     *
     * TODO: Remove method and use insert() with index instead (?)
     * @returns {Block} inserted Block
     */
    insertDefaultBlockAtIndex(index: number, needToFocus?: boolean): Block;
    /**
     * Always inserts at the end
     *
     * @returns {Block}
     */
    insertAtEnd(): Block;
    /**
     * Merge two blocks
     *
     * @param {Block} targetBlock - previous block will be append to this block
     * @param {Block} blockToMerge - block that will be merged with target block
     * @returns {Promise} - the sequence that can be continued
     */
    mergeBlocks(targetBlock: Block, blockToMerge: Block): Promise<void>;
    /**
     * Remove passed Block
     *
     * @param block - Block to remove
     * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
     */
    removeBlock(block: Block, addLastBlock?: boolean): Promise<void>;
    /**
     * Remove only selected Blocks
     * and returns first Block index where started removing...
     *
     * @returns {number|undefined}
     */
    removeSelectedBlocks(): number | undefined;
    /**
     * Attention!
     * After removing insert the new default typed Block and focus on it
     * Removes all blocks
     */
    removeAllBlocks(): void;
    /**
     * Split current Block
     * 1. Extract content from Caret position to the Block`s end
     * 2. Insert a new Block below current one with extracted content
     *
     * @returns {Block}
     */
    split(): Block;
    /**
     * Returns Block by passed index
     *
     * If we pass -1 as index, the last block will be returned
     * There shouldn't be a case when there is no blocks at all — at least one always should exist
     */
    getBlockByIndex(index: -1): Block;
    /**
     * Returns Block by passed index.
     *
     * Could return undefined if there is no block with such index
     */
    getBlockByIndex(index: number): Block | undefined;
    /**
     * Returns an index for passed Block
     *
     * @param block - block to find index
     */
    getBlockIndex(block: Block): number;
    /**
     * Returns the Block by passed id
     *
     * @param id - id of block to get
     * @returns {Block}
     */
    getBlockById(id: any): Block | undefined;
    /**
     * Get Block instance by html element
     *
     * @param {Node} element - html element to get Block by
     */
    getBlock(element: HTMLElement): Block;
    /**
     * 1) Find first-level Block from passed child Node
     * 2) Mark it as current
     *
     * @param {Node} childNode - look ahead from this node.
     * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
     */
    setCurrentBlockByChildNode(childNode: Node): Block | undefined;
    /**
     * Return block which contents passed node
     *
     * @param {Node} childNode - node to get Block by
     * @returns {Block}
     */
    getBlockByChildNode(childNode: Node): Block | undefined;
    /**
     * Swap Blocks Position
     *
     * @param {number} fromIndex - index of first block
     * @param {number} toIndex - index of second block
     * @deprecated — use 'move' instead
     */
    swap(fromIndex: any, toIndex: any): void;
    /**
     * Move a block to a new index
     *
     * @param {number} toIndex - index where to move Block
     * @param {number} fromIndex - index of Block to move
     */
    move(toIndex: any, fromIndex?: number): void;
    /**
     * Converts passed Block to the new Tool
     * Uses Conversion Config
     *
     * @param blockToConvert - Block that should be converted
     * @param targetToolName - name of the Tool to convert to
     * @param blockDataOverrides - optional new Block data overrides
     */
    convert(blockToConvert: Block, targetToolName: string, blockDataOverrides?: BlockToolData): Promise<Block>;
    /**
     * Sets current Block Index -1 which means unknown
     * and clear highlights
     */
    unsetCurrentBlock(): void;
    /**
     * Clears Editor
     *
     * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
     *                                             we don't need to add an empty default block
     *                                        2) in api.blocks.clear we should add empty block
     */
    clear(needToAddDefaultBlock?: boolean): Promise<void>;
    /**
     * Cleans up all the block tools' resources
     * This is called when editor is destroyed
     */
    destroy(): Promise<void>;
    /**
     * Bind Block events
     *
     * @param {Block} block - Block to which event should be bound
     */
    private bindBlockEvents;
    /**
     * Disable mutable handlers and bindings
     */
    private disableModuleBindings;
    /**
     * Enables all module handlers and bindings for all Blocks
     */
    private enableModuleBindings;
    /**
     * Validates that the given index is not lower than 0 or higher than the amount of blocks
     *
     * @param {number} index - index of blocks array to validate
     * @returns {boolean}
     */
    private validateIndex;
    /**
     * Block mutation callback
     *
     * @param mutationType - what happened with block
     * @param block - mutated block
     * @param detailData - additional data to pass with change event
     */
    private blockDidMutated;
}
