/**
 * Flipper construction options
 *
 * @interface FlipperOptions
 */
export interface FlipperOptions {
  /**
   * CSS-modifier for focused item
   */
  focusedItemClass?: string;
  /**
   * If flipping items are the same for all Block (for ex. Toolbox), ypu can pass it on constructing
   */
  items?: HTMLElement[];
  /**
   * Optional callback for button click
   */
  activateCallback?: (item: HTMLElement) => void;
  /**
   * List of keys allowed for handling.
   * Can include codes of the following keys:
   *  - Tab
   *  - Enter
   *  - Arrow up
   *  - Arrow down
   *  - Arrow right
   *  - Arrow left
   * If not specified all keys are enabled
   */
  allowedKeys?: number[];
}
/**
 * Flipper is a component that iterates passed items array by TAB or Arrows and clicks it by ENTER
 */
export default class Flipper {
  /**
   * True if flipper is currently activated
   */
  get isActivated(): boolean;
  /**
   * Instance of flipper iterator
   */
  private readonly iterator;
  /**
   * Flag that defines activation status
   */
  private activated;
  /**
   * List codes of the keys allowed for handling
   */
  private readonly allowedKeys;
  /**
   * Call back for button click/enter
   */
  private readonly activateCallback;
  /**
   * Contains list of callbacks to be executed on each flip
   */
  private flipCallbacks;
  /**
   * @param options - different constructing settings
   */
  constructor(options: FlipperOptions);
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys(): number[];
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(items?: HTMLElement[], cursorPosition?: number): void;
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate(): void;
  /**
   * Focus first item
   */
  focusFirst(): void;
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft(): void;
  /**
   * Focuses next flipper iterator item
   */
  flipRight(): void;
  /**
   * Return true if some button is focused
   */
  hasFocus(): boolean;
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(cb: () => void): void;
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(cb: () => void): void;
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  private dropCursor;
  /**
   * KeyDown event handler
   *
   * @param event - keydown event
   */
  private onKeyDown;
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  private isEventReadyForHandling;
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  private handleTabPress;
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  private handleEnterPress;
  /**
   * Fired after flipping in any direction
   */
  private flipCallback;
}
