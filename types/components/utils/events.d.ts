/**
 * Event Dispatcher event listener
 */
type Listener<Data> = (data: Data) => void;
/**
 * Provides methods for working with Event Bus:
 *    - {Function} on - appends subscriber to the event. If event doesn't exist - creates new one
 *    - {Function} emit - fires all subscribers with data
 *    - {Function off - unsubscribes callback
 */
export default class EventsDispatcher<EventMap> {
    /**
     * All subscribers grouped by event name
     * Object with events` names as key and array of callback functions as value
     */
    private subscribers;
    /**
     * Subscribe any event on callback
     *
     * @param eventName - event name
     * @param callback - subscriber
     */
    on<Name extends keyof EventMap>(eventName: Name, callback: Listener<EventMap[Name]>): void;
    /**
     * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
     *
     * @param eventName - event name
     * @param callback - subscriber
     */
    once<Name extends keyof EventMap>(eventName: Name, callback: Listener<EventMap[Name]>): void;
    /**
     * Emit callbacks with passed data
     *
     * @param eventName - event name
     * @param data - subscribers get this data when they were fired
     */
    emit<Name extends keyof EventMap>(eventName: Name, data?: EventMap[Name]): void;
    /**
     * Unsubscribe callback from event
     *
     * @param eventName - event name
     * @param callback - event handler
     */
    off<Name extends keyof EventMap>(eventName: Name, callback: Listener<EventMap[Name]>): void;
    /**
     * Destroyer
     * clears subscribers list
     */
    destroy(): void;
}
export {};
