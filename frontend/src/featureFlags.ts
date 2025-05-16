// Feature flag utility for NextGenDAP
// Usage: import { useFeatureFlag } from './featureFlags';

/**
 * Feature flags for NextGenDAP
 * @example
 * if (featureFlags.enable3DDashboard) { ... }
 */
export const featureFlags = {
  enable3DDashboard: true, // Example: toggle 3D dashboard
  enableBetaWidget: false, // Example: toggle a beta widget
  // Add more flags as needed
};

/**
 * React hook to check if a feature flag is enabled.
 * @param flag - The feature flag key
 * @returns boolean
 * @example
 * const show3D = useFeatureFlag('enable3DDashboard');
 */
export function useFeatureFlag(flag: keyof typeof featureFlags): boolean {
  return featureFlags[flag];
} 