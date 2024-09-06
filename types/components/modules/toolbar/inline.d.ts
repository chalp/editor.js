import Module from '../../__module';
import type { ModuleConfig } from '../../module-config';
/**
 * Inline Toolbar elements
 */
interface InlineToolbarNodes {
    wrapper: HTMLElement | undefined;
}
/**
 * Inline toolbar with actions that modifies selected text fragment
 *
 * |¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|
 * |   B  i [link] [mark]   |
 * |________________________|
 */
export default class InlineToolbar extends Module<InlineToolbarNodes> {
    /**
     * CSS styles
     */
    CSS: {
        inlineToolbar: string;
    };
    /**
     * State of inline toolbar
     */
    opened: boolean;
    /**
     * Popover instance reference
     */
    private popover;
    /**
     * Margin above/below the Toolbar
     */
    private readonly toolbarVerticalMargin;
    /**
     * Currently visible tools instances
     */
    private toolsInstances;
    /**
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config, eventsDispatcher }: ModuleConfig);
    /**
     * Toggles read-only mode
     *
     * @param {boolean} readOnlyEnabled - read-only mode
     */
    toggleReadOnly(readOnlyEnabled: boolean): void;
    /**
     *  Moving / appearance
     *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    /**
     * Shows Inline Toolbar if something is selected
     *
     * @param [needToClose] - pass true to close toolbar if it is not allowed.
     *                                  Avoid to use it just for closing IT, better call .close() clearly.
     */
    tryToShow(needToClose?: boolean): Promise<void>;
    /**
     * Hides Inline Toolbar
     */
    close(): void;
    /**
     * Check if node is contained by Inline Toolbar
     *
     * @param {Node} node — node to check
     */
    containsNode(node: Node): boolean;
    /**
     * Removes UI and its components
     */
    destroy(): void;
    /**
     * Making DOM
     */
    private make;
    /**
     * Shows Inline Toolbar
     */
    private open;
    /**
     * Move Toolbar to the selected text
     *
     * @param popoverWidth - width of the toolbar popover
     */
    private move;
    /**
     * Clear orientation classes and reset position
     */
    private reset;
    /**
     * Need to show Inline Toolbar or not
     */
    private allowedToShow;
    /**
     *  Working with Tools
     *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    /**
     * Returns Inline Tools segregated by their appearance type: popover items and custom html elements.
     * Sets this.toolsInstances map
     */
    private getInlineTools;
    /**
     * Get shortcut name for tool
     *
     * @param toolName — Tool name
     */
    private getToolShortcut;
    /**
     * Enable Tool shortcut with Editor Shortcuts Module
     *
     * @param toolName - tool name
     * @param shortcut - shortcut according to the ShortcutData Module format
     */
    private enableShortcuts;
    /**
     * Inline Tool button clicks
     *
     * @param tool - Tool's instance
     */
    private toolClicked;
    /**
     * Check Tools` state by selection
     */
    private checkToolsState;
    /**
     * Get inline tools tools
     * Tools that has isInline is true
     */
    private get inlineTools();
}
export {};
