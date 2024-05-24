import BlockTool from '../../src/components/tools/block';
import InlineTool from '../../src/components/tools/inline';
import BlockTune from '../../src/components/tools/tune';

export type ToolClass = BlockTool | InlineTool | BlockTune;

/**
 * Class to store Editor Tools
 */
export declare class ToolsCollection<V extends ToolClass = ToolClass> extends Map<string, V> {
  /**
   * Returns Block Tools collection
   */
  public get blockTools(): ToolsCollection<BlockTool>

  /**
   * Returns Inline Tools collection
   */
  public get inlineTools(): ToolsCollection<InlineTool>

  /**
   * Returns Block Tunes collection
   */
  public get blockTunes(): ToolsCollection<BlockTune>

  /**
   * Returns internal Tools collection
   */
  public get internalTools(): ToolsCollection<V>

  /**
   * Returns Tools collection provided by user
   */
  public get externalTools(): ToolsCollection<V>
}

export default ToolsCollection;
