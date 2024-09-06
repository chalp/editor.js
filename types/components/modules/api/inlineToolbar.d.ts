import type { InlineToolbar } from '../../../api';
import Module from '../../__module';
/**
 * @class InlineToolbarAPI
 * Provides methods for working with the Inline Toolbar
 */
export default class InlineToolbarAPI extends Module {
    /**
     * Available methods
     *
     * @returns {InlineToolbar}
     */
    get methods(): InlineToolbar;
    /**
     * Open Inline Toolbar
     */
    open(): void;
    /**
     * Close Inline Toolbar
     */
    close(): void;
}
