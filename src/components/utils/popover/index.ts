import { PopoverDesktop } from './popover-desktop';
import { PopoverMobile } from './popover-mobile';

export * from '../../../../types/popover';

/**
 * Union type for all popovers
 */
export type Popover = PopoverDesktop | PopoverMobile;

export { PopoverDesktop, PopoverMobile };
