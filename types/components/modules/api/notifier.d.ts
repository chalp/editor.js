import type { Notifier as INotifier } from '../../../api';
import type { ConfirmNotifierOptions, NotifierOptions, PromptNotifierOptions } from 'codex-notifier';
import Module from '../../__module';
import type { ModuleConfig } from '../../module-config';
/**
 *
 */
export default class NotifierAPI extends Module {
    /**
     * Notifier utility Instance
     */
    private notifier;
    /**
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config, eventsDispatcher }: ModuleConfig);
    /**
     * Available methods
     */
    get methods(): INotifier;
    /**
     * Show notification
     *
     * @param {NotifierOptions} options - message option
     */
    show(options: NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions): void;
}
