import Module from '../__module';
/**
 *
 */
export default class CrossBlockSelection extends Module {
    /**
     * Block where selection is started
     */
    private firstSelectedBlock;
    /**
     * Last selected Block
     */
    private lastSelectedBlock;
    /**
     * Module preparation
     *
     * @returns {Promise}
     */
    prepare(): Promise<void>;
    /**
     * Sets up listeners
     *
     * @param {MouseEvent} event - mouse down event
     */
    watchSelection(event: MouseEvent): void;
    /**
     * Return boolean is cross block selection started:
     * there should be at least 2 selected blocks
     */
    get isCrossBlockSelectionStarted(): boolean;
    /**
     * Change selection state of the next Block
     * Used for CBS via Shift + arrow keys
     *
     * @param {boolean} next - if true, toggle next block. Previous otherwise
     */
    toggleBlockSelectedState(next?: boolean): void;
    /**
     * Clear saved state
     *
     * @param {Event} reason - event caused clear of selection
     */
    clear(reason?: Event): void;
    /**
     * Enables Cross Block Selection
     *
     * @param {MouseEvent} event - mouse down event
     */
    private enableCrossBlockSelection;
    /**
     * Mouse up event handler.
     * Removes the listeners
     */
    private onMouseUp;
    /**
     * Mouse over event handler
     * Gets target and related blocks and change selected state for blocks in between
     *
     * @param {MouseEvent} event - mouse over event
     */
    private onMouseOver;
    /**
     * Change blocks selection state between passed two blocks.
     *
     * @param {Block} firstBlock - first block in range
     * @param {Block} lastBlock - last block in range
     */
    private toggleBlocksSelectedState;
}
