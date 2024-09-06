import type { I18n } from '../../../api';
import Module from '../../__module';
/**
 * Provides methods for working with i18n
 */
export default class I18nAPI extends Module {
    /**
     * Return namespace section for tool or block tune
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    private static getNamespace;
    /**
     * Return I18n API methods with global dictionary access
     */
    get methods(): I18n;
    /**
     * Return I18n API methods with tool namespaced dictionary
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    getMethodsForTool(toolName: string, isTune: boolean): I18n;
}
