import { SanitizerConfig } from './configs';

import {
  BlockTool,
  BlockToolData,
  ToolConfig,
  ToolboxConfigEntry,
  ToolsCollection
} from './tools';

import { PopoverItemParams } from './popover';

import { BlockTune } from './block-tunes';
import { BlockTuneData } from './block-tunes/block-tune-data';
import { SavedData } from './data-formats';

import ApiModules from '../modules/api';


import { EditorEventMap } from './events/EditorEventMap';
import EventsDispatcher from './events/events-dispatcher';

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
  tool: BlockTool;

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
  tunesData: { [name: string]: BlockTuneData };
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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  APPEND_CALLBACK = 'appendCallback',
  RENDERED = 'rendered',
  MOVED = 'moved',
  UPDATED = 'updated',
  REMOVED = 'removed',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ON_PASTE = 'onPaste',
}

/**
 * Names of events used in Block
 */
interface BlockEvents {
  'didMutated': Block,
}


/**
 *
 */
declare class Block extends EventsDispatcher<BlockEvents> {
  /**
   * Block unique identifier
   */
  public id: string;

  /**
   * Block Tool`s name
   */
  public readonly name: string;

  /**
   * Instance of the Tool Block represents
   */
  public readonly tool: BlockTool;

  /**
   * User Tool configuration
   */
  public readonly settings: ToolConfig;

  /**
   * Wrapper for Block`s content
   */
  public readonly holder: HTMLDivElement;

  /**
   * Tunes used by Tool
   */
  public readonly tunes: ToolsCollection<BlockTune>;

  /**
   * Tool's user configuration
   */
  public readonly config: ToolConfig;


  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor(options: BlockConstructorOptions, eventBus?: EventsDispatcher<EditorEventMap>);

  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   *
   * @returns {HTMLElement[]}
   */
  public get inputs(): HTMLElement[];

  /**
   * Return current Tool`s input
   *
   * @returns {HTMLElement}
   */
  public get currentInput(): HTMLElement | Node;

  /**
   * Set input index to the passed element
   *
   * @param {HTMLElement | Node} element - HTML Element to set as current input
   */
  public set currentInput(element: HTMLElement | Node);

  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  public get firstInput(): HTMLElement;

  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  public get lastInput(): HTMLElement;

  /**
   * Return next Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  public get nextInput(): HTMLElement;

  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  public get previousInput(): HTMLElement;

  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  public get data(): Promise<BlockToolData>;

  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  public get sanitize(): SanitizerConfig;

  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  public get mergeable(): boolean;

  /**
   * If Block contains inputs, it is focusable
   */
  public get focusable(): boolean;

  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  public get isEmpty(): boolean;

  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  public get hasMedia(): boolean;

  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  public set selected(state: boolean);

  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  public get selected(): boolean;

  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  public set stretched(state: boolean);

  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  public get stretched(): boolean;

  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  public set dropTarget(state: boolean);

  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  public get pluginsContent(): HTMLElement;

  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  public call(methodName: string, params?: object): void;

  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  public mergeWith(data: BlockToolData): Promise<void>;

  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  public save(): Promise<undefined | SavedData>;

  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  public validate(data: BlockToolData): Promise<boolean>;

  /**
   * Returns data to render in Block Tunes menu.
   * Splits block tunes into 2 groups: block specific tunes and common tunes
   */
  public getTunes(): {toolTunes: PopoverItemParams[]; commonTunes: PopoverItemParams[];};

  /**
   * Update current input index with selection anchor node
   */
  public updateCurrentInput(): void;

  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  public dispatchChange(): void;

  /**
   * Call Tool instance destroy method
   */
  public destroy(): void;

  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  public getActiveToolboxEntry(): Promise<ToolboxConfigEntry | undefined>;

  /**
   * Exports Block data as string using conversion config
   */
  public exportDataAsString(): Promise<string>;
}


export default Block;