import type { Sanitizer as ISanitizer } from '../../../api';
import type { SanitizerConfig } from '../../../configs';
import Module from '../../__module';
/**
 * @class SanitizerAPI
 * Provides Editor.js Sanitizer that allows developers to clean their HTML
 */
export default class SanitizerAPI extends Module {
    /**
     * Available methods
     *
     * @returns {SanitizerConfig}
     */
    get methods(): ISanitizer;
    /**
     * Perform sanitizing of a string
     *
     * @param {string} taintString - what to sanitize
     * @param {SanitizerConfig} config - sanitizer config
     * @returns {string}
     */
    clean(taintString: string, config: SanitizerConfig): string;
}
