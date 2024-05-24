import { EditorConfig } from './configs';
import Listeners from './utils/listeners';
import EventsDispatcher from './events/events-dispatcher';
import { EditorEventMap } from './events/EditorEventMap';


export interface EditorModules {
  // API Modules
  BlocksAPI: Module,
  CaretAPI: Module,
  EventsAPI: Module,
  I18nAPI: Module,
  API: Module,
  InlineToolbarAPI: Module,
  ListenersAPI: Module,
  NotifierAPI: Module,
  ReadOnlyAPI: Module,
  SanitizerAPI: Module,
  SaverAPI: Module,
  SelectionAPI: Module,
  StylesAPI: Module,
  ToolbarAPI: Module,
  TooltipAPI: Module,
  UiAPI: Module,

  // Toolbar Modules
  BlockSettings: Module,
  ConversionToolbar: Module,
  Toolbar: Module,
  InlineToolbar: Module,

  // Modules
  BlockEvents: Module,
  BlockManager: Module,
  BlockSelection: Module,
  Caret: Module,
  CrossBlockSelection: Module,
  DragNDrop: Module,
  ModificationsObserver: Module,
  Paste: Module,
  ReadOnly: Module,
  RectangleSelection: Module,
  Renderer: Module,
  Saver: Module,
  Tools: Module,
  UI: Module,
}

/**
 * The type <T> of the Module generic.
 * It describes the structure of nodes used in modules.
 */
export type ModuleNodes = object;

/**
 * Describes object passed to Editor modules constructor
 */
export interface ModuleConfig {
  config: EditorConfig;
  eventsDispatcher: EventsDispatcher<EditorEventMap>;
}


declare class Module<T extends ModuleNodes = Record<string, HTMLElement>> {
  /**
   * Each module can provide some UI elements that will be stored in this property
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public nodes: T;

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
     */
    on: (
      element: EventTarget,
      eventType: string,
      handler: (event: Event) => void,
      options: boolean | AddEventListenerOptions,
    ) => void

    /**
     * Clears all mutable listeners
     */
    clearAll: () => void
  }

  constructor(params: ModuleConfig);

  /**
   * Editor modules setter
   */
  public set state(Editor: EditorModules);

  /**
   * Remove memorized nodes
   */
  public removeAllNodes(): void;

  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  protected get isRtl(): boolean;
}

export default Module;
