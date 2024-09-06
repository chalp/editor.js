import type { Tooltip as ITooltip } from '../../../api';
import type { TooltipContent, TooltipOptions } from 'codex-tooltip';
import Module from '../../__module';
import type { ModuleConfig } from '../../module-config';
/**
 * @class TooltipAPI
 * @classdesc Tooltip API
 */
export default class TooltipAPI extends Module {
    /**
     * @class
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config, eventsDispatcher }: ModuleConfig);
    /**
     * Available methods
     */
    get methods(): ITooltip;
    /**
     * Method show tooltip on element with passed HTML content
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    show(element: HTMLElement, content: TooltipContent, options?: TooltipOptions): void;
    /**
     * Method hides tooltip on HTML page
     */
    hide(): void;
    /**
     * Decorator for showing Tooltip by mouseenter/mouseleave
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    onHover(element: HTMLElement, content: TooltipContent, options?: TooltipOptions): void;
}
