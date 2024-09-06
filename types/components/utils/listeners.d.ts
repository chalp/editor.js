/**
 * Event listener information
 *
 * @interface ListenerData
 */
export interface ListenerData {
    /**
     * Listener unique identifier
     */
    id: string;
    /**
     * Element where to listen to dispatched events
     */
    element: EventTarget;
    /**
     * Event to listen
     */
    eventType: string;
    /**
     * Event handler
     *
     * @param {Event} event - event object
     */
    handler: (event: Event) => void;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     */
    options: boolean | AddEventListenerOptions;
}
/**
 * Editor.js Listeners helper
 *
 * Decorator for event listeners assignment
 *
 * @author Codex Team
 * @version 2.0.0
 */
/**
 * @typedef {Listeners} Listeners
 * @property {ListenerData[]} allListeners - listeners store
 */
export default class Listeners {
    /**
     * Stores all listeners data to find/remove/process it
     *
     * @type {ListenerData[]}
     */
    private allListeners;
    /**
     * Assigns event listener on element and returns unique identifier
     *
     * @param {EventTarget} element - DOM element that needs to be listened
     * @param {string} eventType - event type
     * @param {Function} handler - method that will be fired on event
     * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
     */
    on(element: EventTarget, eventType: string, handler: (event: Event) => void, options?: boolean | AddEventListenerOptions): string;
    /**
     * Removes event listener from element
     *
     * @param {EventTarget} element - DOM element that we removing listener
     * @param {string} eventType - event type
     * @param {Function} handler - remove handler, if element listens several handlers on the same event type
     * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
     */
    off(element: EventTarget, eventType: string, handler?: (event: Event) => void, options?: boolean | AddEventListenerOptions): void;
    /**
     * Removes listener by id
     *
     * @param {string} id - listener identifier
     */
    offById(id: string): void;
    /**
     * Finds and returns first listener by passed params
     *
     * @param {EventTarget} element - event target
     * @param {string} [eventType] - event type
     * @param {Function} [handler] - event handler
     * @returns {ListenerData|null}
     */
    findOne(element: EventTarget, eventType?: string, handler?: (event: Event) => void): ListenerData;
    /**
     * Return all stored listeners by passed params
     *
     * @param {EventTarget} element - event target
     * @param {string} eventType - event type
     * @param {Function} handler - event handler
     * @returns {ListenerData[]}
     */
    findAll(element: EventTarget, eventType?: string, handler?: (event: Event) => void): ListenerData[];
    /**
     * Removes all listeners
     */
    removeAll(): void;
    /**
     * Module cleanup on destruction
     */
    destroy(): void;
    /**
     * Search method: looks for listener by passed element
     *
     * @param {EventTarget} element - searching element
     * @returns {Array} listeners that found on element
     */
    private findByEventTarget;
    /**
     * Search method: looks for listener by passed event type
     *
     * @param {string} eventType - event type
     * @returns {ListenerData[]} listeners that found on element
     */
    private findByType;
    /**
     * Search method: looks for listener by passed handler
     *
     * @param {Function} handler - event handler
     * @returns {ListenerData[]} listeners that found on element
     */
    private findByHandler;
    /**
     * Returns listener data found by id
     *
     * @param {string} id - listener identifier
     * @returns {ListenerData}
     */
    private findById;
}
