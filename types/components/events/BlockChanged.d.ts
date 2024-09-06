import { BlockMutationEvent } from '../../events/block';

/**
 * Fired when some block state has changed
 */
export declare const BlockChanged = 'block changed';
/**
 * Payload that will be passed with the event
 */
export interface BlockChangedPayload {
    /**
     * CustomEvent describing a block change
     */
    event: BlockMutationEvent;
}
