import Module from '../../__module';
import type Block from '../../block';
import type Flipper from '../../flipper';
/**
 * HTML Elements that used for BlockSettings
 */
interface BlockSettingsNodes {
    /**
     * Block Settings wrapper. Undefined when before "make" method called
     */
    wrapper: HTMLElement | undefined;
}
/**
 * Block Settings
 *
 *  @todo Make Block Settings no-module but a standalone class, like Toolbox
 */
export default class BlockSettings extends Module<BlockSettingsNodes> {
    /**
     * Module Events
     */
    get events(): {
        opened: string;
        closed: string;
    };
    /**
     * Block Settings CSS
     */
    get CSS(): {
        [name: string]: string;
    };
    /**
     * Opened state
     */
    opened: boolean;
    /**
     * Getter for inner popover's flipper instance
     *
     * @todo remove once BlockSettings becomes standalone non-module class
     */
    get flipper(): Flipper | undefined;
    /**
     * Page selection utils
     */
    private selection;
    /**
     * Popover instance. There is a util for vertical lists.
     * Null until popover is not initialized
     */
    private popover;
    /**
     * Panel with block settings with 2 sections:
     *  - Tool's Settings
     *  - Default Settings [Move, Remove, etc]
     */
    make(): void;
    /**
     * Destroys module
     */
    destroy(): void;
    /**
     * Open Block Settings pane
     *
     * @param targetBlock - near which Block we should open BlockSettings
     */
    open(targetBlock?: Block): Promise<void>;
    /**
     * Returns root block settings element
     */
    getElement(): HTMLElement | undefined;
    /**
     * Close Block Settings pane
     */
    close: () => void;
    /**
     * Returns list of items to be displayed in block tunes menu.
     * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
     *
     * @param currentBlock –  block we are about to open block tunes for
     * @param commonTunes – common tunes
     * @param toolTunes - tool specific tunes
     */
    private getTunesItems;
    /**
     * Handles popover close event
     */
    private onPopoverClose;
    /**
     * Resolves aliases in tunes menu items
     *
     * @param item - item with resolved aliases
     */
    private resolveTuneAliases;
}
export {};
