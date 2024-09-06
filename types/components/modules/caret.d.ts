import Module from '../__module';
import type Block from '../block';
/**
 * Caret
 * Contains methods for working Caret
 *
 * @todo get rid of this module and separate it for utility functions
 */
export default class Caret extends Module {
    /**
     * Allowed caret positions in input
     *
     * @static
     * @returns {{START: string, END: string, DEFAULT: string}}
     */
    get positions(): {
        START: string;
        END: string;
        DEFAULT: string;
    };
    /**
     * Elements styles that can be useful for Caret Module
     */
    private static get CSS();
    /**
     * Method gets Block instance and puts caret to the text node with offset
     * There two ways that method applies caret position:
     *   - first found text node: sets at the beginning, but you can pass an offset
     *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
     *
     * @param {Block} block - Block class
     * @param {string} position - position where to set caret.
     *                            If default - leave default behaviour and apply offset if it's passed
     * @param {number} offset - caret offset regarding to the text node
     */
    setToBlock(block: Block, position?: string, offset?: number): void;
    /**
     * Set caret to the current input of current Block.
     *
     * @param {HTMLElement} input - input where caret should be set
     * @param {string} position - position of the caret.
     *                            If default - leave default behaviour and apply offset if it's passed
     * @param {number} offset - caret offset regarding to the text node
     */
    setToInput(input: HTMLElement, position?: string, offset?: number): void;
    /**
     * Creates Document Range and sets caret to the element with offset
     *
     * @param {HTMLElement} element - target node.
     * @param {number} offset - offset
     */
    set(element: HTMLElement, offset?: number): void;
    /**
     * Set Caret to the last Block
     * If last block is not empty, append another empty block
     */
    setToTheLastBlock(): void;
    /**
     * Extract content fragment of current Block from Caret position to the end of the Block
     */
    extractFragmentFromCaretPosition(): void | DocumentFragment;
    /**
     * Set's caret to the next Block or Tool`s input
     * Before moving caret, we should check if caret position is at the end of Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @param {boolean} force - pass true to skip check for caret position
     */
    navigateNext(force?: boolean): boolean;
    /**
     * Set's caret to the previous Tool`s input or Block
     * Before moving caret, we should check if caret position is start of the Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @param {boolean} force - pass true to skip check for caret position
     */
    navigatePrevious(force?: boolean): boolean;
    /**
     * Inserts shadow element after passed element where caret can be placed
     *
     * @param {Element} element - element after which shadow caret should be inserted
     */
    createShadow(element: Element): void;
    /**
     * Restores caret position
     *
     * @param {HTMLElement} element - element where caret should be restored
     */
    restoreCaret(element: HTMLElement): void;
    /**
     * Inserts passed content at caret position
     *
     * @param {string} content - content to insert
     */
    insertContentAtCaretPosition(content: string): void;
}
