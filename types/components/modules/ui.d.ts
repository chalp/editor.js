/**
 * Module UI
 *
 * @type {UI}
 */
import Module from '../__module';
/**
 * HTML Elements used for UI
 */
interface UINodes {
    holder: HTMLElement;
    wrapper: HTMLElement;
    redactor: HTMLElement;
}
/**
 * @class
 * @classdesc Makes Editor.js UI:
 *                <codex-editor>
 *                    <ce-redactor />
 *                    <ce-toolbar />
 *                    <ce-inline-toolbar />
 *                </codex-editor>
 * @typedef {UI} UI
 * @property {EditorConfig} config   - editor configuration {@link EditorJS#configuration}
 * @property {object} Editor         - available editor modules {@link EditorJS#moduleInstances}
 * @property {object} nodes          -
 * @property {Element} nodes.holder  - element where we need to append redactor
 * @property {Element} nodes.wrapper  - <codex-editor>
 * @property {Element} nodes.redactor - <ce-redactor>
 */
export default class UI extends Module<UINodes> {
    /**
     * Editor.js UI CSS class names
     *
     * @returns {{editorWrapper: string, editorZone: string}}
     */
    get CSS(): {
        editorWrapper: string;
        editorWrapperNarrow: string;
        editorZone: string;
        editorZoneHidden: string;
        editorEmpty: string;
        editorRtlFix: string;
    };
    /**
     * Return Width of center column of Editor
     *
     * @returns {DOMRect}
     */
    get contentRect(): DOMRect;
    /**
     * Flag that became true on mobile viewport
     *
     * @type {boolean}
     */
    isMobile: boolean;
    /**
     * Cache for center column rectangle info
     * Invalidates on window resize
     *
     * @type {DOMRect}
     */
    private contentRectCache;
    /**
     * Handle window resize only when it finished
     *
     * @type {() => void}
     */
    private resizeDebouncer;
    /**
     * Making main interface
     */
    prepare(): Promise<void>;
    /**
     * Toggle read-only state
     *
     * If readOnly is true:
     *  - removes all listeners from main UI module elements
     *
     * if readOnly is false:
     *  - enables all listeners to UI module elements
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(readOnlyEnabled: boolean): void;
    /**
     * Check if Editor is empty and set CSS class to wrapper
     */
    checkEmptiness(): void;
    /**
     * Check if one of Toolbar is opened
     * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
     *
     * @returns {boolean}
     */
    get someToolbarOpened(): boolean;
    /**
     * Check for some Flipper-buttons is under focus
     */
    get someFlipperButtonFocused(): boolean;
    /**
     * Clean editor`s UI
     */
    destroy(): void;
    /**
     * Close all Editor's toolbars
     */
    closeAllToolbars(): void;
    /**
     * Check for mobile mode and save the result
     */
    private setIsMobile;
    /**
     * Makes Editor.js interface
     */
    private make;
    /**
     * Appends CSS
     */
    private loadStyles;
    /**
     * Bind events on the Editor.js interface
     */
    private enableModuleBindings;
    /**
     * Listen redactor mousemove to emit 'block-hovered' event
     */
    private watchBlockHoveredEvents;
    /**
     * Unbind events on the Editor.js interface
     */
    private disableModuleBindings;
    /**
     * Resize window handler
     */
    private windowResize;
    /**
     * All keydowns on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    private documentKeydown;
    /**
     * Ignore all other document's keydown events
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    private defaultBehaviour;
    /**
     * @param {KeyboardEvent} event - keyboard event
     */
    private backspacePressed;
    /**
     * Escape pressed
     * If some of Toolbar components are opened, then close it otherwise close Toolbar
     *
     * @param {Event} event - escape keydown event
     */
    private escapePressed;
    /**
     * Enter pressed on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    private enterPressed;
    /**
     * All clicks on document
     *
     * @param {MouseEvent} event - Click event
     */
    private documentClicked;
    /**
     * First touch on editor
     * Fired before click
     *
     * Used to change current block — we need to do it before 'selectionChange' event.
     * Also:
     * - Move and show the Toolbar
     * - Set a Caret
     *
     * @param {MouseEvent | TouchEvent} event - touch or mouse event
     */
    private documentTouched;
    /**
     * All clicks on the redactor zone
     *
     * @param {MouseEvent} event - click event
     * @description
     * - By clicks on the Editor's bottom zone:
     *      - if last Block is empty, set a Caret to this
     *      - otherwise, add a new empty Block and set a Caret to that
     */
    private redactorClicked;
    /**
     * Check if user clicks on the Editor's bottom zone:
     *  - set caret to the last block
     *  - or add new empty block
     *
     * @param event - click event
     */
    private processBottomZoneClick;
    /**
     * Handle selection changes on mobile devices
     * Uses for showing the Inline Toolbar
     */
    private selectionChanged;
    /**
     * Editor.js provides and ability to show placeholders for empty contenteditable elements
     *
     * This method watches for input and focus events and toggles 'data-empty' attribute
     * to workaroud the case, when inputs contains only <br>s and has no visible content
     * Then, CSS could rely on this attribute to show placeholders
     */
    private enableInputsEmptyMark;
}
export {};
