import Module from '../../__module';
import type { Events } from '../../../api';
/**
 * @class EventsAPI
 * provides with methods working with Toolbar
 */
export default class EventsAPI extends Module {
    /**
     * Available methods
     *
     * @returns {Events}
     */
    get methods(): Events;
    /**
     * Subscribe on Events
     *
     * @param {string} eventName - event name to subscribe
     * @param {Function} callback - event handler
     */
    on(eventName: any, callback: any): void;
    /**
     * Emit event with data
     *
     * @param {string} eventName - event to emit
     * @param {object} data - event's data
     */
    emit(eventName: any, data: any): void;
    /**
     * Unsubscribe from Event
     *
     * @param {string} eventName - event to unsubscribe
     * @param {Function} callback - event handler
     */
    off(eventName: any, callback: any): void;
}
