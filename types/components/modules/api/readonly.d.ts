import type { ReadOnly } from '../../../api';
import Module from '../../__module';
/**
 * @class ReadOnlyAPI
 * @classdesc ReadOnly API
 */
export default class ReadOnlyAPI extends Module {
    /**
     * Available methods
     */
    get methods(): ReadOnly;
    /**
     * Set or toggle read-only state
     *
     * @param {boolean|undefined} state - set or toggle state
     * @returns {boolean} current value
     */
    toggle(state?: boolean): Promise<boolean>;
    /**
     * Returns current read-only state
     */
    get isEnabled(): boolean;
}
