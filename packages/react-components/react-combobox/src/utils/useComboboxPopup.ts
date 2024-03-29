import { PositioningShorthandValue, resolvePositioningShorthand, usePositioning } from '@fluentui/react-positioning';
import { ExtractSlotProps, Slot, useMergedRefs } from '@fluentui/react-utilities';
import type { ComboboxBaseProps } from './ComboboxBase.types';
import { Listbox } from '../components/Listbox/Listbox';

export function useComboboxPopup(
  props: ComboboxBaseProps,
  triggerShorthand?: ExtractSlotProps<Slot<'button'>>,
  listboxShorthand?: ExtractSlotProps<Slot<typeof Listbox>>,
): [trigger: ExtractSlotProps<Slot<'button'>>, listbox?: ExtractSlotProps<Slot<typeof Listbox>>];
export function useComboboxPopup(
  props: ComboboxBaseProps,
  triggerShorthand?: ExtractSlotProps<Slot<'input'>>,
  listboxShorthand?: ExtractSlotProps<Slot<typeof Listbox>>,
): [trigger: ExtractSlotProps<Slot<'input'>>, listbox?: ExtractSlotProps<Slot<typeof Listbox>>];

export function useComboboxPopup(
  props: ComboboxBaseProps,
  triggerShorthand?: ExtractSlotProps<Slot<'input'>> | ExtractSlotProps<Slot<'button'>>,
  listboxShorthand?: ExtractSlotProps<Slot<typeof Listbox>>,
): [
  trigger: ExtractSlotProps<Slot<'input'>> | ExtractSlotProps<Slot<'button'>>,
  listbox?: ExtractSlotProps<Slot<typeof Listbox>>,
] {
  const { positioning } = props;

  // Set a default set of fallback positions to try if the dropdown does not fit on screen
  const fallbackPositions: PositioningShorthandValue[] = ['above', 'after', 'after-top', 'before', 'before-top'];

  // popper options
  const popperOptions = {
    position: 'below' as const,
    align: 'start' as const,
    offset: { crossAxis: 0, mainAxis: 2 },
    fallbackPositions,
    ...resolvePositioningShorthand(positioning),
  };

  const { targetRef, containerRef } = usePositioning(popperOptions);

  const listboxRef = useMergedRefs(listboxShorthand?.ref, containerRef);
  const listbox = listboxShorthand && { ...listboxShorthand, ref: listboxRef };

  return [{ ...triggerShorthand, ref: useMergedRefs(triggerShorthand?.ref, targetRef) }, listbox];
}
