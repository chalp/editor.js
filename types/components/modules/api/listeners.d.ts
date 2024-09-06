import type { Listeners } from '../../../api';
import Module from '../../__module';
/**
 * @class ListenersAPI
 * Provides with methods working with DOM Listener
 */
export default class ListenersAPI extends Module {
    /**
     * Available methods
     *
     * @returns {Listeners}
     */
    get methods(): Listeners;
    /**
     * Ads a DOM event listener. Return it's id.
     *
     * @param {HTMLElement} element - Element to set handler to
     * @param {string} eventType - event type
     * @param {() => void} handler - event handler
     * @param {boolean} useCapture - capture event or not
     */
    on(element: HTMLElement, eventType: string, handler: () => void, useCapture?: boolean): string;
    /**
     * Removes DOM listener from element
     *
     * @param {Element} element - Element to remove handler from
     * @param eventType - event type
     * @param handler - event handler
     * @param {boolean} useCapture - capture event or not
     */
    off(element: Element, eventType: string, handler: () => void, useCapture?: boolean): void;
    /**
     * Removes DOM listener by the listener id
     *
     * @param id - id of the listener to remove
     */
    offById(id: string): void;
}
