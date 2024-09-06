import Module from '../__module';
import type { SanitizerConfig } from '../../';
import type { InlineToolAdapter } from '../../tools/adapters/inline-tool-adapter';
import type { BlockToolAdapter } from '../../tools/adapters/block-tool-adapter';
import type { BlockTuneAdapter } from '../../tools/adapters/block-tune-adapter';
import type { ToolsCollection } from '../../tools/adapters/tools-collection';
/**
 * @module Editor.js Tools Submodule
 *
 * Creates Instances from Plugins and binds external config to the instances
 */
/**
 * Modules that works with tools classes
 */
export default class Tools extends Module {
    /**
     * Name of Stub Tool
     * Stub Tool is used to substitute unavailable block Tools and store their data
     *
     * @type {string}
     */
    stubTool: string;
    /**
     * Returns available Tools
     */
    get available(): ToolsCollection;
    /**
     * Returns unavailable Tools
     */
    get unavailable(): ToolsCollection;
    /**
     * Return Tools for the Inline Toolbar
     */
    get inlineTools(): ToolsCollection<InlineToolAdapter>;
    /**
     * Return editor block tools
     */
    get blockTools(): ToolsCollection<BlockToolAdapter>;
    /**
     * Return available Block Tunes
     *
     * @returns {object} - object of Inline Tool's classes
     */
    get blockTunes(): ToolsCollection<BlockTuneAdapter>;
    /**
     * Returns default Tool object
     */
    get defaultTool(): BlockToolAdapter;
    /**
     * Tools objects factory
     */
    private factory;
    /**
     * Tools` classes available to use
     */
    private readonly toolsAvailable;
    /**
     * Tools` classes not available to use because of preparation failure
     */
    private readonly toolsUnavailable;
    /**
     * Returns internal tools
     */
    get internal(): ToolsCollection;
    /**
     * Creates instances via passed or default configuration
     *
     * @returns {Promise<void>}
     */
    prepare(): Promise<void>;
    /**
     * Return general Sanitizer config for all inline tools
     */
    getAllInlineToolsSanitizeConfig(): SanitizerConfig;
    /**
     * Calls each Tool reset method to clean up anything set by Tool
     */
    destroy(): void;
    /**
     * Returns internal tools
     * Includes Bold, Italic, Link and Paragraph
     */
    private get internalTools();
    /**
     * Tool prepare method success callback
     *
     * @param {object} data - append tool to available list
     */
    private toolPrepareMethodSuccess;
    /**
     * Tool prepare method fail callback
     *
     * @param {object} data - append tool to unavailable list
     */
    private toolPrepareMethodFallback;
    /**
     * Binds prepare function of plugins with user or default config
     *
     * @returns {Array} list of functions that needs to be fired sequentially
     * @param config - tools config
     */
    private getListOfPrepareFunctions;
    /**
     * Assign enabled Inline Tools and Block Tunes for Block Tool
     */
    private prepareBlockTools;
    /**
     * Assign enabled Inline Tools for Block Tool
     *
     * @param tool - Block Tool
     */
    private assignInlineToolsToBlockTool;
    /**
     * Assign enabled Block Tunes for Block Tool
     *
     * @param tool — Block Tool
     */
    private assignBlockTunesToBlockTool;
    /**
     * Validate Tools configuration objects and throw Error for user if it is invalid
     */
    private validateTools;
    /**
     * Unify tools config
     */
    private prepareConfig;
}
