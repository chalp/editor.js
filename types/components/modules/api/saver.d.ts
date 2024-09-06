import type { Saver } from '../../../api';
import type { OutputData } from '../../../';
import Module from '../../__module';
/**
 * @class SaverAPI
 * provides with methods to save data
 */
export default class SaverAPI extends Module {
    /**
     * Available methods
     *
     * @returns {Saver}
     */
    get methods(): Saver;
    /**
     * Return Editor's data
     *
     * @returns {OutputData}
     */
    save(): Promise<OutputData>;
}
