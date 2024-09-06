import type { Toolbar } from '../../../api';
import Module from '../../__module';
/**
 * @class ToolbarAPI
 * Provides methods for working with the Toolbar
 */
export default class ToolbarAPI extends Module {
    /**
     * Available methods
     *
     * @returns {Toolbar}
     */
    get methods(): Toolbar;
    /**
     * Open toolbar
     */
    open(): void;
    /**
     * Close toolbar and all included elements
     */
    close(): void;
    /**
     * Toggles Block Setting of the current block
     *
     * @param {boolean} openingState —  opening state of Block Setting
     */
    toggleBlockSettings(openingState?: boolean): void;
    /**
     * Open toolbox
     *
     * @param {boolean} openingState - Opening state of toolbox
     */
    toggleToolbox(openingState: boolean): void;
}
