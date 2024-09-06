/**
 * @class RectangleSelection
 * @classdesc Manages Block selection with mouse
 * @module RectangleSelection
 * @version 1.0.0
 */
import Module from '../__module';
/**
 *
 */
export default class RectangleSelection extends Module {
    /**
     * CSS classes for the Block
     *
     * @returns {{wrapper: string, content: string}}
     */
    static get CSS(): {
        [name: string]: string;
    };
    /**
     * Using the selection rectangle
     *
     * @type {boolean}
     */
    private isRectSelectionActivated;
    /**
     *  Speed of Scrolling
     */
    private readonly SCROLL_SPEED;
    /**
     *  Height of scroll zone on boundary of screen
     */
    private readonly HEIGHT_OF_SCROLL_ZONE;
    /**
     *  Scroll zone type indicators
     */
    private readonly BOTTOM_SCROLL_ZONE;
    private readonly TOP_SCROLL_ZONE;
    /**
     * Id of main button for event.button
     */
    private readonly MAIN_MOUSE_BUTTON;
    /**
     *  Mouse is clamped
     */
    private mousedown;
    /**
     *  Is scrolling now
     */
    private isScrolling;
    /**
     *  Mouse is in scroll zone
     */
    private inScrollZone;
    /**
     *  Coords of rect
     */
    private startX;
    private startY;
    private mouseX;
    private mouseY;
    /**
     * Selected blocks
     */
    private stackOfSelected;
    /**
     * Does the rectangle intersect blocks
     */
    private rectCrossesBlocks;
    /**
     * Selection rectangle
     */
    private overlayRectangle;
    /**
     * Listener identifiers
     */
    private listenerIds;
    /**
     * Module Preparation
     * Creating rect and hang handlers
     */
    prepare(): void;
    /**
     * Init rect params
     *
     * @param {number} pageX - X coord of mouse
     * @param {number} pageY - Y coord of mouse
     */
    startSelection(pageX: any, pageY: any): void;
    /**
     * Clear all params to end selection
     */
    endSelection(): void;
    /**
     * is RectSelection Activated
     */
    isRectActivated(): boolean;
    /**
     * Mark that selection is end
     */
    clearSelection(): void;
    /**
     * Sets Module necessary event handlers
     */
    private enableModuleBindings;
    /**
     * Handle mouse down events
     *
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    private processMouseDown;
    /**
     * Handle mouse move events
     *
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    private processMouseMove;
    /**
     * Handle mouse leave
     */
    private processMouseLeave;
    /**
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    private processScroll;
    /**
     * Handle mouse up
     */
    private processMouseUp;
    /**
     * Scroll If mouse in scroll zone
     *
     * @param {number} clientY - Y coord of mouse
     */
    private scrollByZones;
    /**
     * Generates required HTML elements
     *
     * @returns {Object<string, Element>}
     */
    private genHTML;
    /**
     * Activates scrolling if blockSelection is active and mouse is in scroll zone
     *
     * @param {number} speed - speed of scrolling
     */
    private scrollVertical;
    /**
     * Handles the change in the rectangle and its effect
     *
     * @param {MouseEvent} event - mouse event
     */
    private changingRectangle;
    /**
     * Shrink rect to singular point
     */
    private shrinkRectangleToPoint;
    /**
     * Select or unselect all of blocks in array if rect is out or in selectable area
     */
    private inverseSelection;
    /**
     * Updates size of rectangle
     */
    private updateRectangleSize;
    /**
     * Collects information needed to determine the behavior of the rectangle
     *
     * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
     */
    private genInfoForMouseSelection;
    /**
     * Select block with index index
     *
     * @param index - index of block in redactor
     */
    private addBlockInSelection;
    /**
     * Adds a block to the selection and determines which blocks should be selected
     *
     * @param {object} index - index of new block in the reactor
     */
    private trySelectNextBlock;
}
