/**
 * @class BlockSelection
 * @classdesc Manages Block selection with shortcut CMD+A
 * @module BlockSelection
 * @version 1.0.0
 */
import Module from '../__module';
import type Block from '../block';
/**
 *
 */
export default class BlockSelection extends Module {
    /**
     * Sometimes .anyBlockSelected can be called frequently,
     * for example at ui@selectionChange (to clear native browser selection in CBS)
     * We use cache to prevent multiple iterations through all the blocks
     *
     * @private
     */
    private anyBlockSelectedCache;
    /**
     * Sanitizer Config
     *
     * @returns {SanitizerConfig}
     */
    private get sanitizerConfig();
    /**
     * Flag that identifies all Blocks selection
     *
     * @returns {boolean}
     */
    get allBlocksSelected(): boolean;
    /**
     * Set selected all blocks
     *
     * @param {boolean} state - state to set
     */
    set allBlocksSelected(state: boolean);
    /**
     * Flag that identifies any Block selection
     *
     * @returns {boolean}
     */
    get anyBlockSelected(): boolean;
    /**
     * Return selected Blocks array
     *
     * @returns {Block[]}
     */
    get selectedBlocks(): Block[];
    /**
     * Flag used to define block selection
     * First CMD+A defines it as true and then second CMD+A selects all Blocks
     *
     * @type {boolean}
     */
    private needToSelectAll;
    /**
     * Flag used to define native input selection
     * In this case we allow double CMD+A to select Block
     *
     * @type {boolean}
     */
    private nativeInputSelected;
    /**
     * Flag identifies any input selection
     * That means we can select whole Block
     *
     * @type {boolean}
     */
    private readyToBlockSelection;
    /**
     * SelectionUtils instance
     *
     * @type {SelectionUtils}
     */
    private selection;
    /**
     * Module Preparation
     * Registers Shortcuts CMD+A and CMD+C
     * to select all and copy them
     */
    prepare(): void;
    /**
     * Toggle read-only state
     *
     *  - Remove all ranges
     *  - Unselect all Blocks
     */
    toggleReadOnly(): void;
    /**
     * Remove selection of Block
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    unSelectBlockByIndex(index?: any): void;
    /**
     * Clear selection from Blocks
     *
     * @param {Event} reason - event caused clear of selection
     * @param {boolean} restoreSelection - if true, restore saved selection
     */
    clearSelection(reason?: Event, restoreSelection?: boolean): void;
    /**
     * Reduce each Block and copy its content
     *
     * @param {ClipboardEvent} e - copy/cut event
     * @returns {Promise<void>}
     */
    copySelectedBlocks(e: ClipboardEvent): Promise<void>;
    /**
     * Select Block by its index
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    selectBlockByIndex(index: number): void;
    /**
     * Select passed Block
     *
     * @param {Block} block - Block to select
     */
    selectBlock(block: Block): void;
    /**
     * Remove selection from passed Block
     *
     * @param {Block} block - Block to unselect
     */
    unselectBlock(block: Block): void;
    /**
     * Clear anyBlockSelected cache
     */
    clearCache(): void;
    /**
     * Module destruction
     * De-registers Shortcut CMD+A
     */
    destroy(): void;
    /**
     * First CMD+A selects all input content by native behaviour,
     * next CMD+A keypress selects all blocks
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    private handleCommandA;
    /**
     * Select All Blocks
     * Each Block has selected setter that makes Block copyable
     */
    private selectAllBlocks;
}
