import Module from '../__module';
/**
 * @class Paste
 * @classdesc Contains methods to handle paste on editor
 * @module Paste
 * @version 2.0.0
 */
export default class Paste extends Module {
    /** If string`s length is greater than this number we don't check paste patterns */
    static readonly PATTERN_PROCESSING_MAX_LENGTH = 450;
    /** Custom EditorJS mime-type to handle in-editor copy/paste actions */
    readonly MIME_TYPE = "application/x-editor-js";
    /**
     * Tags` substitutions parameters
     */
    private toolsTags;
    /**
     * Store tags to substitute by tool name
     */
    private tagsByTool;
    /** Patterns` substitutions parameters */
    private toolsPatterns;
    /** Files` substitutions parameters */
    private toolsFiles;
    /**
     * List of tools which do not need a paste handling
     */
    private exceptionList;
    /**
     * Set onPaste callback and collect tools` paste configurations
     */
    prepare(): Promise<void>;
    /**
     * Set read-only state
     *
     * @param {boolean} readOnlyEnabled - read only flag value
     */
    toggleReadOnly(readOnlyEnabled: boolean): void;
    /**
     * Handle pasted or dropped data transfer object
     *
     * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
     * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
     */
    processDataTransfer(dataTransfer: DataTransfer, isDragNDrop?: boolean): Promise<void>;
    /**
     * Process pasted text and divide them into Blocks
     *
     * @param {string} data - text to process. Can be HTML or plain.
     * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
     */
    processText(data: string, isHTML?: boolean): Promise<void>;
    /**
     * Set onPaste callback handler
     */
    private setCallback;
    /**
     * Unset onPaste callback handler
     */
    private unsetCallback;
    /**
     * Get and process tool`s paste configs
     */
    private processTools;
    /**
     * Process paste config for each tool
     *
     * @param tool - BlockTool object
     */
    private processTool;
    /**
     * Get tags name list from either tag name or sanitization config.
     *
     * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
     * @returns {string[]} array of tags.
     */
    private collectTagNames;
    /**
     * Get tags to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    private getTagsConfig;
    /**
     * Get files` types and extensions to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    private getFilesConfig;
    /**
     * Get RegExp patterns to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    private getPatternsConfig;
    /**
     * Check if browser behavior suits better
     *
     * @param {EventTarget} element - element where content has been pasted
     * @returns {boolean}
     */
    private isNativeBehaviour;
    /**
     * Check if Editor should process pasted data and pass data transfer object to handler
     *
     * @param {ClipboardEvent} event - clipboard event
     */
    private handlePasteEvent;
    /**
     * Get files from data transfer object and insert related Tools
     *
     * @param {FileList} items - pasted or dropped items
     */
    private processFiles;
    /**
     * Get information about file and find Tool to handle it
     *
     * @param {File} file - file to process
     */
    private processFile;
    /**
     * Split HTML string to blocks and return it as array of Block data
     *
     * @param {string} innerHTML - html string to process
     * @returns {PasteData[]}
     */
    private processHTML;
    /**
     * Split plain text by new line symbols and return it as array of Block data
     *
     * @param {string} plain - string to process
     * @returns {PasteData[]}
     */
    private processPlain;
    /**
     * Process paste of single Block tool content
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    private processSingleBlock;
    /**
     * Process paste to single Block:
     * 1. Find patterns` matches
     * 2. Insert new block if it is not the same type as current one
     * 3. Just insert text if there is no substitutions
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    private processInlinePaste;
    /**
     * Get patterns` matches
     *
     * @param {string} text - text to process
     * @returns {Promise<{event: PasteEvent, tool: string}>}
     */
    private processPattern;
    /**
     * Insert pasted Block content to Editor
     *
     * @param {PasteData} data - data to insert
     * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
     * @returns {void}
     */
    private insertBlock;
    /**
     * Insert data passed as application/x-editor-js JSON
     *
     * @param {Array} blocks — Blocks' data to insert
     * @returns {void}
     */
    private insertEditorJSData;
    /**
     * Fetch nodes from Element node
     *
     * @param {Node} node - current node
     * @param {Node[]} nodes - processed nodes
     * @param {Node} destNode - destination node
     */
    private processElementNode;
    /**
     * Recursively divide HTML string to two types of nodes:
     * 1. Block element
     * 2. Document Fragments contained text and markup tags like a, b, i etc.
     *
     * @param {Node} wrapper - wrapper of paster HTML content
     * @returns {Node[]}
     */
    private getNodes;
    /**
     * Compose paste event with passed type and detail
     *
     * @param {string} type - event type
     * @param {PasteEventDetail} detail - event detail
     */
    private composePasteEvent;
}
