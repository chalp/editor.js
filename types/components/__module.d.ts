import { EditorConfig } from '../configs';
import { ModuleConfig } from './module-config';
import { default as Listeners } from './utils/listeners';
import { default as EventsDispatcher } from './utils/events';
import { EditorModules } from './editor-modules'
import { EditorEventMap } from './events';

/**
 * The type <T> of the Module generic.
 * It describes the structure of nodes used in modules.
 */
export type ModuleNodes = object;
/**
 * @abstract
 * @class      Module
 * @classdesc  All modules inherits from this class.
 * @typedef {Module} Module
 * @property {object} config - Editor user settings
 * @property {EditorModules} Editor - List of Editor modules
 */
export default class Module<T extends ModuleNodes = Record<string, HTMLElement>> {
    /**
     * Each module can provide some UI elements that will be stored in this property
     */
    nodes: T;
    /**
     * Editor modules list
     *
     * @type {EditorModules}
     */
    protected Editor: EditorModules;
    /**
     * Editor configuration object
     *
     * @type {EditorConfig}
     */
    protected config: EditorConfig;
    /**
     * Editor event dispatcher class
     */
    protected eventsDispatcher: EventsDispatcher<EditorEventMap>;
    /**
     * Util for bind/unbind DOM event listeners
     */
    protected listeners: Listeners;
    /**
     * This object provides methods to push into set of listeners that being dropped when read-only mode is enabled
     */
    protected readOnlyMutableListeners: {
        /**
         * Assigns event listener on DOM element and pushes into special array that might be removed
         *
         * @param {EventTarget} element - DOM Element
         * @param {string} eventType - Event name
         * @param {Function} handler - Event handler
         * @param {boolean|AddEventListenerOptions} options - Listening options
         */
        on: (element: EventTarget, eventType: string, handler: (event: Event) => void, options?: boolean | AddEventListenerOptions) => void;
        /**
         * Clears all mutable listeners
         */
        clearAll: () => void;
    };
    /**
     * The set of listener identifiers which will be dropped in read-only mode
     */
    private mutableListenerIds;
    /**
     * @class
     * @param options - Module options
     * @param options.config - Module config
     * @param options.eventsDispatcher - Common event bus
     */
    constructor({ config, eventsDispatcher }: ModuleConfig);
    /**
     * Editor modules setter
     *
     * @param {EditorModules} Editor - Editor's Modules
     */
    set state(Editor: EditorModules);
    /**
     * Remove memorized nodes
     */
    removeAllNodes(): void;
    /**
     * Returns true if current direction is RTL (Right-To-Left)
     */
    protected get isRtl(): boolean;
}
