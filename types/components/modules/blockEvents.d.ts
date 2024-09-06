/**
 * Contains keyboard and mouse events bound on each Block by Block Manager
 */
import Module from '../__module';
/**
 *
 */
export default class BlockEvents extends Module {
    /**
     * All keydowns on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    keydown(event: KeyboardEvent): void;
    /**
     * Fires on keydown before event processing
     *
     * @param {KeyboardEvent} event - keydown
     */
    beforeKeydownProcessing(event: KeyboardEvent): void;
    /**
     * Key up on Block:
     * - shows Inline Toolbar if something selected
     * - shows conversion toolbar with 85% of block selection
     *
     * @param {KeyboardEvent} event - keyup event
     */
    keyup(event: KeyboardEvent): void;
    /**
     * Add drop target styles
     *
     * @param {DragEvent} event - drag over event
     */
    dragOver(event: DragEvent): void;
    /**
     * Remove drop target style
     *
     * @param {DragEvent} event - drag leave event
     */
    dragLeave(event: DragEvent): void;
    /**
     * Copying selected blocks
     * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
     *
     * @param {ClipboardEvent} event - clipboard event
     */
    handleCommandC(event: ClipboardEvent): void;
    /**
     * Copy and Delete selected Blocks
     *
     * @param {ClipboardEvent} event - clipboard event
     */
    handleCommandX(event: ClipboardEvent): void;
    /**
     * Tab pressed inside a Block.
     *
     * @param {KeyboardEvent} event - keydown
     */
    private tabPressed;
    /**
     * '/' + 'command' keydown inside a Block
     */
    private commandSlashPressed;
    /**
     * '/' keydown inside a Block
     *
     * @param event - keydown
     */
    private slashPressed;
    /**
     * ENTER pressed on block
     *
     * @param {KeyboardEvent} event - keydown
     */
    private enter;
    /**
     * Handle backspace keydown on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    private backspace;
    /**
     * Handles delete keydown on Block
     * Removes char after the caret.
     * If caret is at the end of the block, merge next block with current
     *
     * @param {KeyboardEvent} event - keydown
     */
    private delete;
    /**
     * Merge passed Blocks
     *
     * @param targetBlock - to which Block we want to merge
     * @param blockToMerge - what Block we want to merge
     */
    private mergeBlocks;
    /**
     * Handle right and down keyboard keys
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    private arrowRightAndDown;
    /**
     * Handle left and up keyboard keys
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    private arrowLeftAndUp;
    /**
     * Cases when we need to close Toolbar
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    private needToolbarClosing;
    /**
     * If Toolbox is not open, then just open it and show plus button
     */
    private activateToolbox;
    /**
     * Open Toolbar and show BlockSettings before flipping Tools
     */
    private activateBlockSettings;
}
