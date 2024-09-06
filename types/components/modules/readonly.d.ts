import Module from '../__module';
/**
 * @module ReadOnly
 *
 * Has one important method:
 *    - {Function} toggleReadonly - Set read-only mode or toggle current state
 * @version 1.0.0
 * @typedef {ReadOnly} ReadOnly
 * @property {boolean} readOnlyEnabled - read-only state
 */
export default class ReadOnly extends Module {
    /**
     * Array of tools name which don't support read-only mode
     */
    private toolsDontSupportReadOnly;
    /**
     * Value to track read-only state
     *
     * @type {boolean}
     */
    private readOnlyEnabled;
    /**
     * Returns state of read only mode
     */
    get isEnabled(): boolean;
    /**
     * Set initial state
     */
    prepare(): Promise<void>;
    /**
     * Set read-only mode or toggle current state
     * Call all Modules `toggleReadOnly` method and re-render Editor
     *
     * @param state - (optional) read-only state or toggle
     * @param isInitial - (optional) true when editor is initializing
     */
    toggle(state?: boolean, isInitial?: boolean): Promise<boolean>;
    /**
     * Throws an error about tools which don't support read-only mode
     */
    private throwCriticalError;
}
