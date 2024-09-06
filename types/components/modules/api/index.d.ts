/**
 * @module API
 * @copyright <CodeX> 2018
 *
 * Each block has an Editor API instance to use provided public methods
 * if you cant to read more about how API works, please see docs
 */
import Module from '../../__module';
import type { API as APIInterfaces } from '../../../';
/**
 * @class API
 */
export default class API extends Module {
    /**
     * Editor.js Core API modules
     */
    get methods(): APIInterfaces;
    /**
     * Returns Editor.js Core API methods for passed tool
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    getMethodsForTool(toolName: string, isTune: boolean): APIInterfaces;
}
