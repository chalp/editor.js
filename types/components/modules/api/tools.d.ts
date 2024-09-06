import type { Tools as ToolsAPIInterface } from '../../../api';
import Module from '../../__module';
/**
 * Provides methods for accessing installed Editor tools
 */
export default class ToolsAPI extends Module {
    /**
     * Available methods
     */
    get methods(): ToolsAPIInterface;
}
