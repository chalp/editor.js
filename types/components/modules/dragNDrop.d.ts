import Module from '../__module';
/**
 *
 */
export default class DragNDrop extends Module {
    /**
     * If drag has been started at editor, we save it
     *
     * @type {boolean}
     * @private
     */
    private isStartedAtEditor;
    /**
     * Toggle read-only state
     *
     * if state is true:
     *  - disable all drag-n-drop event handlers
     *
     * if state is false:
     *  - restore drag-n-drop event handlers
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(readOnlyEnabled: boolean): void;
    /**
     * Add drag events listeners to editor zone
     */
    private enableModuleBindings;
    /**
     * Unbind drag-n-drop event handlers
     */
    private disableModuleBindings;
    /**
     * Handle drop event
     *
     * @param {DragEvent} dropEvent - drop event
     */
    private processDrop;
    /**
     * Handle drag start event
     */
    private processDragStart;
    /**
     * @param {DragEvent} dragEvent - drag event
     */
    private processDragOver;
}
