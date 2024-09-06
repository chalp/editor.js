import { EditorConfig } from '../configs';
import { EditorEventMap } from './events';
import { default as EventsDispatcher } from './utils/events';

/**
 * Describes object passed to Editor modules constructor
 */
export interface ModuleConfig {
    config: EditorConfig;
    eventsDispatcher: EventsDispatcher<EditorEventMap>;
}
