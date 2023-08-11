export {
  useArrowNavigationGroup,
  useFocusableGroup,
  useFocusFinders,
  useFocusVisible,
  useFocusWithin,
  useKeyboardNavAttribute,
  useModalAttributes,
  useTabsterAttributes,
  useObservedElement,
  useFocusObserved,
  useMergedTabsterAttributes_unstable,
  useRestoreFocusSource,
  useRestoreFocusTarget,
} from './hooks/index';
export type {
  UseArrowNavigationGroupOptions,
  UseFocusableGroupOptions,
  UseModalAttributesOptions,
} from './hooks/index';

export { createCustomFocusIndicatorStyle, createFocusOutlineStyle } from './focus/index';

export type {
  CreateCustomFocusIndicatorStyleOptions,
  CreateFocusOutlineStyleOptions,
  FocusOutlineOffset,
  FocusOutlineStyleOptions,
} from './focus/index';

export { applyFocusVisiblePolyfill } from './focus/index';
import { Types as TabsterTypes } from 'tabster';

export type TabsterDOMAttribute = TabsterTypes.TabsterDOMAttribute;
