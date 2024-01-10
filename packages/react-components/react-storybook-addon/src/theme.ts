import {
  webLightTheme,
  webDarkTheme,
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
  azureDarkTheme,
  azureLightTheme,
} from '@fluentui/react-theme';

import type { Theme } from '@fluentui/react-theme';

export const themes = [
  { id: 'web-light', label: 'Web Light', theme: webLightTheme },
  { id: 'web-dark', label: 'Web Dark', theme: webDarkTheme },
  { id: 'teams-light', label: 'Teams Light', theme: teamsLightTheme },
  { id: 'teams-dark', label: 'Teams Dark', theme: teamsDarkTheme },
  { id: 'teams-high-contrast', label: 'Teams High Contrast', theme: teamsHighContrastTheme },
  { id: 'azure-dark', label: 'Azure Dark', theme: azureDarkTheme },
  { id: 'azure-light', label: 'Azure Light', theme: azureLightTheme },
] as const;

export const defaultTheme = themes[0];

export type ThemeIds = (typeof themes)[number]['id'];
export type ThemeLabels = (typeof themes)[number]['label'];

export type { Theme };
