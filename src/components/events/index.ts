import { RedactorDomChanged, RedactorDomChangedPayload } from './RedactorDomChanged';
import { BlockChanged, BlockChangedPayload } from './BlockChanged';
import { BlockHovered, BlockHoveredPayload } from './BlockHovered';
import { FakeCursorAboutToBeToggled, FakeCursorAboutToBeToggledPayload } from './FakeCursorAboutToBeToggled';
import { FakeCursorHaveBeenSet, FakeCursorHaveBeenSetPayload } from './FakeCursorHaveBeenSet';
import { SelectionChanged, SelectionChangedPayload } from './SelectionChanged';

/**
 * Events fired by Editor Event Dispatcher
 */
export {
  RedactorDomChanged,
  BlockChanged,
  FakeCursorAboutToBeToggled,
  FakeCursorHaveBeenSet,
  SelectionChanged
};

/**
 * Event name -> Event payload
 */
export interface EditorEventMap {
  [BlockHovered]: BlockHoveredPayload;
  [RedactorDomChanged]: RedactorDomChangedPayload;
  [BlockChanged]: BlockChangedPayload;
  [FakeCursorAboutToBeToggled]: FakeCursorAboutToBeToggledPayload;
  [FakeCursorHaveBeenSet]: FakeCursorHaveBeenSetPayload;
  [SelectionChanged]: SelectionChangedPayload;
}
