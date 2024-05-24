import { SanitizerConfig } from '../configs';
import { SavedData } from '../data-formats';


/**
 * Sanitize Blocks
 *
 * Enumerate blocks and clean data
 *
 * @param blocksData - blocks' data to sanitize
 * @param sanitizeConfig — sanitize config to use or function to get config for Tool
 */
export declare function sanitizeBlocks(
  blocksData: Pick<SavedData, 'data' | 'tool'>[],
  sanitizeConfig: SanitizerConfig | ((toolName: string) => SanitizerConfig)
): Pick<SavedData, 'data' | 'tool'>[]
/**
 * Cleans string from unwanted tags
 * Method allows to use default config
 *
 * @param {string} taintString - taint string
 * @param {SanitizerConfig} customConfig - allowed tags
 * @returns {string} clean HTML
 */
export declare function clean(taintString: string, customConfig: SanitizerConfig): string
