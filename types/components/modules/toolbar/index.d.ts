import Module from '../../__module';
import type { ModuleConfig } from '../../module-config';
import type Block from '../../block';
/**
 * @todo Tab on non-empty block should open Block Settings of the hoveredBlock (not where caret is set)
 *          - make Block Settings a standalone module
 * @todo - Keyboard-only mode bug:
 *         press Tab, flip to the Checkbox. press Enter (block will be added), Press Tab
 *         (Block Tunes will be opened with Move up focused), press Enter, press Tab ———— both Block Tunes and Toolbox will be opened
 * @todo TEST CASE - show toggler after opening and closing the Inline Toolbar
 * @todo TEST CASE - Click outside Editor holder should close Toolbar and Clear Focused blocks
 * @todo TEST CASE - Click inside Editor holder should close Toolbar and Clear Focused blocks
 * @todo TEST CASE - Click inside Redactor zone when Block Settings are opened:
 *                  - should close Block Settings
 *                  - should not close Toolbar
 *                  - should move Toolbar to the clicked Block
 * @todo TEST CASE - Toolbar should be closed on the Cross Block Selection
 * @todo TEST CASE - Toolbar should be closed on the Rectangle Selection
 * @todo TEST CASE - If Block Settings or Toolbox are opened, the Toolbar should not be moved by Bocks hovering
 */
/**
 * HTML Elements used for Toolbar UI
 */
interface ToolbarNodes {
    wrapper: HTMLElement | undefined;
    content: HTMLElement | undefined;
    actions: HTMLElement | undefined;
    plusButton: HTMLElement | undefined;
    settingsToggler: HTMLElement | undefined;
}
/**
 *
 * «Toolbar» is the node that moves up/down over current block
 *
 *  ______________________________________ Toolbar ____________________________________________
 * |                                                                                           |
 * |  ..................... Content .........................................................  |
 * |  .                                                   ........ Block Actions ...........   |
 * |  .                                                   .        [Open Settings]         .   |
 * |  .  [Plus Button]  [Toolbox: {Tool1}, {Tool2}]       .                                .   |
 * |  .                                                   .        [Settings Panel]        .   |
 * |  .                                                   ..................................   |
 * |  .......................................................................................  |
 * |                                                                                           |
 * |___________________________________________________________________________________________|
 *
 *
 * Toolbox — its an Element contains tools buttons. Can be shown by Plus Button.
 *
 *  _______________ Toolbox _______________
 * |                                       |
 * | [Header] [Image] [List] [Quote] ...   |
 * |_______________________________________|
 *
 *
 * Settings Panel — is an Element with block settings:
 *
 *   ____ Settings Panel ____
 *  | ...................... |
 *  | .   Tool Settings    . |
 *  | ...................... |
 *  | .  Default Settings  . |
 *  | ...................... |
 *  |________________________|
 *
 *
 * @class
 * @classdesc Toolbar module
 * @typedef {Toolbar} Toolbar
 * @property {object} nodes - Toolbar nodes
 * @property {Element} nodes.wrapper        - Toolbar main element
 * @property {Element} nodes.content        - Zone with Plus button and toolbox.
 * @property {Element} nodes.actions        - Zone with Block Settings and Remove Button
 * @property {Element} nodes.blockActionsButtons   - Zone with Block Buttons: [Settings]
 * @property {Element} nodes.plusButton     - Button that opens or closes Toolbox
 * @property {Element} nodes.toolbox        - Container for tools
 * @property {Element} nodes.settingsToggler - open/close Settings Panel button
 * @property {Element} nodes.settings          - Settings Panel
 * @property {Element} nodes.pluginSettings    - Plugin Settings section of Settings Panel
 * @property {Element} nodes.defaultSettings   - Default Settings section of Settings Panel
 */
export default class Toolbar extends Module<ToolbarNodes> {
    /**
     * Block near which we display the Toolbox
     */
    private hoveredBlock;
    /**
     * Toolbox class instance
     * It will be created in requestIdleCallback so it can be null in some period of time
     */
    private toolboxInstance;
    /**
     * @class
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config, eventsDispatcher }: ModuleConfig);
    /**
     * CSS styles
     *
     * @returns {object}
     */
    get CSS(): {
        [name: string]: string;
    };
    /**
     * Returns the Toolbar opening state
     *
     * @returns {boolean}
     */
    get opened(): boolean;
    /**
     * Public interface for accessing the Toolbox
     */
    get toolbox(): {
        opened: boolean | undefined;
        close: () => void;
        open: () => void;
        toggle: () => void;
        hasFocus: () => boolean | undefined;
    };
    /**
     * Block actions appearance manipulations
     */
    private get blockActions();
    /**
     * Methods for working with Block Tunes toggler
     */
    private get blockTunesToggler();
    /**
     * Toggles read-only mode
     *
     * @param {boolean} readOnlyEnabled - read-only mode
     */
    toggleReadOnly(readOnlyEnabled: boolean): void;
    /**
     * Move Toolbar to the passed (or current) Block
     *
     * @param block - block to move Toolbar near it
     */
    moveAndOpen(block?: Block): void;
    /**
     * Close the Toolbar
     */
    close(): void;
    /**
     * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
     */
    private reset;
    /**
     * Open Toolbar with Plus Button and Actions
     *
     * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
     *                                     This flag allows to open Toolbar without Actions.
     */
    private open;
    /**
     * Draws Toolbar elements
     */
    private make;
    /**
     * Creates the Toolbox instance and return it's rendered element
     */
    private makeToolbox;
    /**
     * Handler for Plus Button
     */
    private plusButtonClicked;
    /**
     * Enable bindings
     */
    private enableModuleBindings;
    /**
     * Disable bindings
     */
    private disableModuleBindings;
    /**
     * Clicks on the Block Settings toggler
     */
    private settingsTogglerClicked;
    /**
     * Draws Toolbar UI
     *
     * Toolbar contains BlockSettings and Toolbox.
     * That's why at first we draw its components and then Toolbar itself
     *
     * Steps:
     *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
     *  - Make itself and append dependent nodes to itself
     *
     */
    private drawUI;
    /**
     * Removes all created and saved HTMLElements
     * It is used in Read-Only mode
     */
    private destroy;
}
export {};
