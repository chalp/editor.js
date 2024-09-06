import { BlockToolData, ToolboxConfigEntry, ToolConfig } from '../../tools';
import { PopoverItemParams } from '../../utils/popover';
import { SanitizerConfig } from '../../configs';

import { BlockToolAdapter } from '../../tools/adapters/block-tool-adapter'
import { ToolsCollection } from '../../tools/adapters/tools-collection'
import { BlockTuneAdapter } from '../../tools/adapters/block-tune-adapter'
import { SavedData } from '../../data-formats';
import ApiModules from '../modules/api';
import { BlockTuneData } from '../../block-tunes/block-tune-data';
import EventsDispatcher from '../utils/events';
import type { EditorEventMap } from '../events';
/**
 * Interface describes Block class constructor argument
 */
interface BlockConstructorOptions {
  /**
   * Block's id. Should be passed for existed block, and omitted for a new one.
   */
  id?: string;
  /**
   * Initial Block data
   */
  data: BlockToolData;
  /**
   * Tool object
   */
  tool: BlockToolAdapter;
  /**
   * Editor's API methods
   */
  api: ApiModules;
  /**
   * This flag indicates that the Block should be constructed in the read-only mode.
   */
  readOnly: boolean;
  /**
   * Tunes data for current Block
   */
  tunesData: {
    [name: string]: BlockTuneData;
  };
}
/**
 * @class Block
 * @classdesc This class describes editor`s block, including block`s HTMLElement, data and tool
 * @property {BlockTool} tool — current block tool (Paragraph, for example)
 * @property {object} CSS — block`s css classes
 */
/**
 * Available Block Tool API methods
 */
export declare enum BlockToolAPI {
  /**
   * @todo remove method in 3.0.0
   * @deprecated — use 'rendered' hook instead
   */
  APPEND_CALLBACK = 'appendCallback',
  RENDERED = 'rendered',
  MOVED = 'moved',
  UPDATED = 'updated',
  REMOVED = 'removed',
  ON_PASTE = 'onPaste'
}
/**
 * Names of events used in Block
 */
interface BlockEvents {
  'didMutated': Block;
}
/**
 * @classdesc Abstract Block class that contains Block information, Tool name and Tool class instance
 * @property {BlockTool} tool - Tool instance
 * @property {HTMLElement} holder - Div element that wraps block content with Tool's content. Has `ce-block` CSS class
 * @property {HTMLElement} pluginsContent - HTML content that returns by Tool's render function
 */
export default class Block extends EventsDispatcher<BlockEvents> {
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS(): {
    [name: string]: string;
  };
  /**
   * Block unique identifier
   */
  id: string;
  /**
   * Block Tool`s name
   */
  readonly name: string;
  /**
   * Instance of the Tool Block represents
   */
  readonly tool: BlockToolAdapter;
  /**
   * User Tool configuration
   */
  readonly settings: ToolConfig;
  /**
   * Wrapper for Block`s content
   */
  readonly holder: HTMLDivElement;
  /**
   * Tunes used by Tool
   */
  readonly tunes: ToolsCollection<BlockTuneAdapter>;
  /**
   * Tool's user configuration
   */
  readonly config: ToolConfig;
  /**
   * Cached inputs
   */
  private cachedInputs;
  /**
   * We'll store a reference to the tool's rendered element to access it later
   */
  private toolRenderedElement;
  /**
   * Tool class instance
   */
  private readonly toolInstance;
  /**
   * User provided Block Tunes instances
   */
  private readonly tunesInstances;
  /**
   * Editor provided Block Tunes instances
   */
  private readonly defaultTunesInstances;
  /**
   * If there is saved data for Tune which is not available at the moment,
   * we will store it here and provide back on save so data is not lost
   */
  private unavailableTunesData;
  /**
   * Focused input index
   *
   * @type {number}
   */
  private inputIndex;
  /**
   * Common editor event bus
   */
  private readonly editorEventBus;
  /**
   * Link to editor dom change callback. Used to remove listener on remove
   */
  private redactorDomChangedCallback;
  /**
   * Current block API interface
   */
  private readonly blockAPI;
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({ id, data, tool, readOnly, tunesData, }: BlockConstructorOptions, eventBus?: EventsDispatcher<EditorEventMap>);
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   */
  get inputs(): HTMLElement[];
  /**
   * Return current Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get currentInput(): HTMLElement | undefined;
  /**
   * Set input index to the passed element
   *
   * @param element - HTML Element to set as current input
   */
  set currentInput(element: HTMLElement);
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get firstInput(): HTMLElement | undefined;
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get lastInput(): HTMLElement | undefined;
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get nextInput(): HTMLElement | undefined;
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get previousInput(): HTMLElement | undefined;
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data(): Promise<BlockToolData>;
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize(): SanitizerConfig;
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable(): boolean;
  /**
   * If Block contains inputs, it is focusable
   */
  get focusable(): boolean;
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty(): boolean;
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia(): boolean;
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(state: boolean);
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected(): boolean;
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(state: boolean);
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched(): boolean;
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(state: any);
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent(): HTMLElement;
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(methodName: string, params?: object): void;
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  mergeWith(data: BlockToolData): Promise<void>;
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  save(): Promise<undefined | SavedData>;
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  validate(data: BlockToolData): Promise<boolean>;
  /**
   * Returns data to render in Block Tunes menu.
   * Splits block tunes into 2 groups: block specific tunes and common tunes
   */
  getTunes(): {
    toolTunes: PopoverItemParams[];
    commonTunes: PopoverItemParams[];
  };
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput(): void;
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange(): void;
  /**
   * Call Tool instance destroy method
   */
  destroy(): void;
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  getActiveToolboxEntry(): Promise<ToolboxConfigEntry | undefined>;
  /**
   * Exports Block data as string using conversion config
   */
  exportDataAsString(): Promise<string>;
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  private compose;
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  private composeTunes;
  /**
   * Is fired when text input or contentEditable is focused
   */
  private handleFocus;
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  private addInputEvents;
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  private removeInputEvents;
  /**
   * Is fired when DOM mutation has been happened
   *
   * @param mutationsOrInputEvent - actual changes
   *   - MutationRecord[] - any DOM change
   *   - InputEvent — <input> change
   *   - undefined — manual triggering of block.dispatchChange()
   */
  private readonly didMutated;
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  private watchBlockMutations;
  /**
   * Remove redactor dom change event listener
   */
  private unwatchBlockMutations;
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  private detectToolRootChange;
  /**
   * Clears inputs cached value
   */
  private dropInputsCache;
  /**
   * Mark inputs with 'data-empty' attribute with the empty state
   */
  private toggleInputsEmptyMark;
}
export {};
