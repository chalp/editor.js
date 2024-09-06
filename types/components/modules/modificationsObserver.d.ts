import type { ModuleConfig } from '../module-config';
import Module from '../__module';
/**
 * Single entry point for Block mutation events
 */
export default class ModificationsObserver extends Module {
    /**
     * Flag shows onChange event is disabled
     */
    private disabled;
    /**
     * Blocks wrapper mutation observer instance
     */
    private readonly mutationObserver;
    /**
     * Timeout used to batched several events in a single onChange call
     */
    private batchingTimeout;
    /**
     * Array of onChange events used to batch them
     *
     * Map is used to filter duplicated events related to the same block
     */
    private batchingOnChangeQueue;
    /**
     * Fired onChange events will be batched by this time
     */
    private readonly batchTime;
    /**
     * Prepare the module
     *
     * @param options - options used by the modification observer module
     * @param options.config - Editor configuration object
     * @param options.eventsDispatcher - common Editor event bus
     */
    constructor({ config, eventsDispatcher }: ModuleConfig);
    /**
     * Enables onChange event
     */
    enable(): void;
    /**
     * Disables onChange event
     */
    disable(): void;
    /**
     * Call onChange event passed to Editor.js configuration
     *
     * @param event - some of our custom change events
     */
    private particularBlockChanged;
    /**
     * Fired on every blocks wrapper dom change
     *
     * @param mutations - mutations happened
     */
    private redactorChanged;
}
