/**
 * Editor.js Saver
 *
 * @module Saver
 * @author Codex Team
 * @version 2.0.0
 */
import Module from '../__module';
import type { OutputData } from '../../';
/**
 * @classdesc This method reduces all Blocks asyncronically and calls Block's save method to extract data
 * @typedef {Saver} Saver
 * @property {Element} html - Editor HTML content
 * @property {string} json - Editor JSON output
 */
export default class Saver extends Module {
    /**
     * Composes new chain of Promises to fire them alternatelly
     *
     * @returns {OutputData}
     */
    save(): Promise<OutputData>;
    /**
     * Saves and validates
     *
     * @param {Block} block - Editor's Tool
     * @returns {ValidatedData} - Tool's validated data
     */
    private getSavedData;
    /**
     * Creates output object with saved data, time and version of editor
     *
     * @param {ValidatedData} allExtractedData - data extracted from Blocks
     * @returns {OutputData}
     */
    private makeOutput;
}
