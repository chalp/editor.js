/** ./api */
import BlocksAPI from './modules/api/blocks';
import CaretAPI from './modules/api/caret';
import EventsAPI from './modules/api/events';
import I18nAPI from './modules/api/i18n';
import API from './modules/api/index';
import InlineToolbarAPI from './modules/api/inlineToolbar';
import ListenersAPI from './modules/api/listeners';
import NotifierAPI from './modules/api/notifier';
import ReadOnlyAPI from './modules/api/readonly';
import SanitizerAPI from './modules/api/sanitizer';
import SaverAPI from './modules/api/saver';
import SelectionAPI from './modules/api/selection';
import StylesAPI from './modules/api/styles';
import ToolbarAPI from './modules/api/toolbar';
import TooltipAPI from './modules/api/tooltip';
import UiAPI from './modules/api/ui';

/** ./toolbar */
import BlockSettings from './modules/toolbar/blockSettings';
import Toolbar from './modules/toolbar/index';
import InlineToolbar from './modules/toolbar/inline';

/** . */
import BlockEvents from './modules/blockEvents';
import BlockManager from './modules/blockManager';
import BlockSelection from './modules/blockSelection';
import Caret from './modules/caret';
import CrossBlockSelection from './modules/crossBlockSelection';
import DragNDrop from './modules/dragNDrop';
import ModificationsObserver from './modules/modificationsObserver';
import Paste from './modules/paste';
import ReadOnly from './modules/readonly';
import RectangleSelection from './modules/rectangleSelection';
import Renderer from './modules/renderer';
import Saver from './modules/saver';
import Tools from './modules/tools';
import UI from './modules/ui';
import ToolsAPI from './modules/api/tools';

export interface EditorModules {
  // API Modules
  BlocksAPI: BlocksAPI,
  CaretAPI: CaretAPI,
  ToolsAPI: ToolsAPI,
  EventsAPI: EventsAPI,
  I18nAPI: I18nAPI,
  API: API,
  InlineToolbarAPI: InlineToolbarAPI,
  ListenersAPI: ListenersAPI,
  NotifierAPI: NotifierAPI,
  ReadOnlyAPI: ReadOnlyAPI,
  SanitizerAPI: SanitizerAPI,
  SaverAPI: SaverAPI,
  SelectionAPI: SelectionAPI,
  StylesAPI: StylesAPI,
  ToolbarAPI: ToolbarAPI,
  TooltipAPI: TooltipAPI,
  UiAPI: UiAPI,

  // Toolbar Modules
  BlockSettings: BlockSettings,
  Toolbar: Toolbar,
  InlineToolbar: InlineToolbar,

  // Modules
  BlockEvents: BlockEvents,
  BlockManager: BlockManager,
  BlockSelection: BlockSelection,
  Caret: Caret,
  CrossBlockSelection: CrossBlockSelection,
  DragNDrop: DragNDrop,
  ModificationsObserver: ModificationsObserver,
  Paste: Paste,
  ReadOnly: ReadOnly,
  RectangleSelection: RectangleSelection,
  Renderer: Renderer,
  Saver: Saver,
  Tools: Tools,
  UI: UI,
}
