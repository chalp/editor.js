import Module from '../../__module';
import type { Ui } from '../../../api';
/**
 * API module allowing to access some Editor UI elements
 */
export default class UiAPI extends Module {
    /**
     * Available methods / getters
     */
    get methods(): Ui;
    /**
     * Exported classes
     */
    private get editorNodes();
}
