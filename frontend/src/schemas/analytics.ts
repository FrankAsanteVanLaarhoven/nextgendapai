/**
 * Zod schema for analytics data
 * @example
 * const parsed = analyticsSchema.parse({ label: 'Active Users', value: 1280, trend: '+5.2%' });
 */
import { z } from 'zod';

export const analyticsSchema = z.object({
  label: z.string(),
  value: z.union([z.string(), z.number()]),
  trend: z.string(),
});

export const analyticsArraySchema = z.array(analyticsSchema); 