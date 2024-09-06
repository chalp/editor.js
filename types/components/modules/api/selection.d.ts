import type { Selection as SelectionAPIInterface } from '../../../api';
import Module from '../../__module';
/**
 * @class SelectionAPI
 * Provides with methods working with SelectionUtils
 */
export default class SelectionAPI extends Module {
    /**
     * Global SelectionUtils instance
     */
    private selectionUtils;
    /**
     * Available methods
     *
     * @returns {SelectionAPIInterface}
     */
    get methods(): SelectionAPIInterface;
    /**
     * Looks ahead from selection and find passed tag with class name
     *
     * @param {string} tagName - tag to find
     * @param {string} className - tag's class name
     * @returns {HTMLElement|null}
     */
    findParentTag(tagName: string, className?: string): HTMLElement | null;
    /**
     * Expand selection to passed tag
     *
     * @param {HTMLElement} node - tag that should contain selection
     */
    expandToTag(node: HTMLElement): void;
}
