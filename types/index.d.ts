/**
 * For export type there should be one entry point,
 * so we export all types from this file
 * ------------------------------------
 */

import {
  EditorConfig,
} from './configs';

import {
  Blocks,
  Caret,
  Events,
  I18n,
  InlineToolbar,
  Listeners,
  Notifier,
  ReadOnly,
  Sanitizer,
  Saver,
  Selection,
  Styles,
  Toolbar,
  Tools,
  Tooltip,
  Ui,
} from './api';

import { OutputData } from './data-formats';
import { BlockMutationEvent, BlockMutationEventMap, BlockMutationType } from './events/block';
import { BlockAddedEvent, BlockAddedMutationType } from './events/block/BlockAdded';
import { BlockChangedEvent, BlockChangedMutationType } from './events/block/BlockChanged';
import { BlockMovedEvent, BlockMovedMutationType } from './events/block/BlockMoved';
import { BlockRemovedEvent, BlockRemovedMutationType } from './events/block/BlockRemoved';

/**
 * Interfaces used for development
 */
export {
  BaseTool,
  BaseToolConstructable,
  InlineTool,
  InlineToolConstructable,
  InlineToolConstructorOptions,
  BlockToolConstructable,
  BlockToolConstructorOptions,
  BlockTool,
  BlockToolData,
  Tool,
  ToolConstructable,
  ToolboxConfig,
  ToolboxConfigEntry,
  ToolSettings,
  ToolConfig,
  PasteEvent,
  PasteEventDetail,
  PatternPasteEvent,
  PatternPasteEventDetail,
  HTMLPasteEvent,
  HTMLPasteEventDetail,
  FilePasteEvent,
  FilePasteEventDetail,
  MenuConfig,
  MenuConfigItemDefaultParams,
  MenuConfigItem,
  MenuConfigItemDefaultWithConfirmationParams,
  MenuConfigDefaultBaseParams,
} from './tools';

export { ToolType } from './tools/adapters/tool-type';
export { InlineToolAdapter } from './tools/adapters/inline-tool-adapter';
export { BlockToolAdapter } from './tools/adapters/block-tool-adapter';
export { BlockTuneAdapter } from './tools/adapters/block-tune-adapter';

export {BlockTune, BlockTuneConstructable} from './block-tunes';

export {
  EditorConfig,
  SanitizerConfig,
  SanitizerRule,
  PasteConfig,
  LogLevels,
  ConversionConfig,
  I18nDictionary,
  Dictionary,
  DictValue,
  I18nConfig,
} from './configs';

export * from './utils/popover';
export { SavedData } from './data-formats';
export { OutputData, OutputBlockData } from './data-formats/output-data';
export { BlockId } from './data-formats/block-id';
export { BlockAPI } from './api'
export {
  BlockMutationType,
  BlockMutationEvent,
  BlockMutationEventMap,
  BlockAddedMutationType,
  BlockAddedEvent,
  BlockRemovedMutationType,
  BlockRemovedEvent,
  BlockMovedMutationType,
  BlockMovedEvent,
  BlockChangedMutationType,
  BlockChangedEvent,
}

/**
 * We have a namespace API {@link ./api/index.d.ts} (APIMethods) but we can not use it as interface
 * So we should create new interface for exporting API type
 */
export interface API {
  blocks: Blocks;
  caret: Caret;
  tools: Tools;
  events: Events;
  listeners: Listeners;
  notifier: Notifier;
  sanitizer: Sanitizer;
  saver: Saver;
  selection: Selection;
  styles: Styles;
  toolbar: Toolbar;
  inlineToolbar: InlineToolbar;
  tooltip: Tooltip;
  i18n: I18n;
  readOnly: ReadOnly;
  ui: Ui;
}

import Module from './components/__module'
import * as SanitizerUtils from './components/utils/sanitizer';

/**
 * Main Editor class
 */
declare class EditorJS {
  public static version: string;

  public isReady: Promise<void>;

  public blocks: Blocks;
  public caret: Caret;
  public sanitizer: Sanitizer;
  public saver: Saver;
  public selection: Selection;
  public styles: Styles;
  public toolbar: Toolbar;
  public inlineToolbar: InlineToolbar;
  public readOnly: ReadOnly;
  constructor(configuration?: EditorConfig|string);

  /**
   * API shorthands
   */

  /**
   * @see Saver.save
   */
  public save(): Promise<OutputData>;

  /**
   * @see Blocks.clear
   */
  public clear(): void;

  /**
   * @see Blocks.render
   */
  public render(data: OutputData): Promise<void>;

  /**
   * @see Caret.focus
   */
  public focus(atEnd?: boolean): boolean;

  /**
   * @see Events.on
   */
  public on(eventName: string, callback: (data?: any) => void): void;

  /**
   * @see Events.off
   */
  public off(eventName: string, callback: (data?: any) => void): void;

  /**
   * @see Events.emit
   */
  public emit(eventName: string, data: any): void;

  /**
   * Destroy Editor instance and related DOM elements
   */
  public destroy(): void;
}

export {
  SanitizerUtils as Sanitizer,
  EditorJS,
  Module,
}

export default EditorJS;
