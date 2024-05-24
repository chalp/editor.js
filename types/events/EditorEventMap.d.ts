import { BlockHovered, BlockHoveredPayload } from './BlockHovered';
import { RedactorDomChanged, RedactorDomChangedPayload } from './RedactorDomChanged';
import { BlockChanged, BlockChangedPayload } from './BlockChanged';
import { FakeCursorAboutToBeToggled, FakeCursorAboutToBeToggledPayload } from './FakeCursorAboutToBeToggled';
import { FakeCursorHaveBeenSet, FakeCursorHaveBeenSetPayload } from './FakeCursorHaveBeenSet';
import { EditorMobileLayoutToggled, EditorMobileLayoutToggledPayload } from './EditorMobileLayoutToggled';


/**
 * Event name -> Event payload
 */
export interface EditorEventMap {
  [BlockHovered]: BlockHoveredPayload;
  [RedactorDomChanged]: RedactorDomChangedPayload;
  [BlockChanged]: BlockChangedPayload;
  [FakeCursorAboutToBeToggled]: FakeCursorAboutToBeToggledPayload;
  [FakeCursorHaveBeenSet]: FakeCursorHaveBeenSetPayload;
  [EditorMobileLayoutToggled]: EditorMobileLayoutToggledPayload
}
