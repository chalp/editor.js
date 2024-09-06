import type { Caret } from '../../../api';
import Module from '../../__module';
/**
 * @class CaretAPI
 * provides with methods to work with caret
 */
export default class CaretAPI extends Module {
    /**
     * Available methods
     *
     * @returns {Caret}
     */
    get methods(): Caret;
    /**
     * Sets caret to the first Block
     *
     * @param {string} position - position where to set caret
     * @param {number} offset - caret offset
     * @returns {boolean}
     */
    private setToFirstBlock;
    /**
     * Sets caret to the last Block
     *
     * @param {string} position - position where to set caret
     * @param {number} offset - caret offset
     * @returns {boolean}
     */
    private setToLastBlock;
    /**
     * Sets caret to the previous Block
     *
     * @param {string} position - position where to set caret
     * @param {number} offset - caret offset
     * @returns {boolean}
     */
    private setToPreviousBlock;
    /**
     * Sets caret to the next Block
     *
     * @param {string} position - position where to set caret
     * @param {number} offset - caret offset
     * @returns {boolean}
     */
    private setToNextBlock;
    /**
     * Sets caret to the Block by passed index
     *
     * @param blockOrIdOrIndex - either BlockAPI or Block id or Block index
     * @param position - position where to set caret
     * @param offset - caret offset
     * @returns {boolean}
     */
    private setToBlock;
    /**
     * Sets caret to the Editor
     *
     * @param {boolean} atEnd - if true, set Caret to the end of the Editor
     * @returns {boolean}
     */
    private focus;
}
