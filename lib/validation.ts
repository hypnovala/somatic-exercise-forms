import { z } from 'zod';
import { FormSlug, FormValuesMap } from '@/types/forms';

const nonEmptyMessage = 'Please complete this field.';

const daySchema = z.object({
  day: z.number(),
  bodyScanCompleted: z.boolean(),
  breathingCompleted: z.boolean(),
  groundingCompleted: z.boolean(),
  shoulderResetCompleted: z.boolean(),
  notes: z.string().max(240, 'Keep notes under 240 characters.').default(''),
});

export const formSchemas = {
  'daily-check-in': z.object({
    date: z.string().min(1, nonEmptyMessage),
    energyLevel: z.number().min(1).max(10),
    stressLevel: z.number().min(1).max(10),
    sleepQuality: z.number().min(1).max(10),
    tensionAreas: z.array(z.string()).min(1, 'Choose at least one area.'),
    sensations: z.array(z.string()).min(1, 'Choose at least one sensation.'),
    emotion: z.string().min(2, nonEmptyMessage),
    reflection: z.string().min(5, nonEmptyMessage),
    supportiveAction: z.string().min(5, nonEmptyMessage),
  }),
  'body-awareness': z.object({
    beforeStressLevel: z.number().min(1).max(10),
    tensionArea: z.string().min(2, nonEmptyMessage),
    changeAfter: z.string().min(5, nonEmptyMessage),
    afterStressLevel: z.number().min(1).max(10),
    grounded: z.enum(['yes', 'no', 'a-little']),
    notes: z.string().min(2, nonEmptyMessage),
  }),
  'end-of-shift-reset': z.object({
    activationLevel: z.number().min(1).max(10),
    jawRelaxed: z.enum(['yes', 'no']),
    shouldersSoftened: z.enum(['yes', 'no']),
    breathingHelped: z.enum(['yes', 'no', 'a-little']),
    neutralThings: z.array(z.string().min(1, nonEmptyMessage)).length(3, 'Add three neutral observations.'),
    softerNow: z.string().min(3, nonEmptyMessage),
    notes: z.string().min(2, nonEmptyMessage),
  }),
  'emotional-body-map': z.object({
    bodyArea: z.string().min(1, nonEmptyMessage),
    sensation: z.string().min(1, nonEmptyMessage),
    possibleEmotion: z.string().min(1, nonEmptyMessage),
    intensity: z.number().min(1).max(10),
    needRightNow: z.string().min(3, nonEmptyMessage),
    notes: z.string().min(2, nonEmptyMessage),
  }),
  'regulation-tracker': z.object({
    days: z.array(daySchema).length(7, 'Track seven days.'),
  }),
} satisfies { [K in FormSlug]: z.ZodTypeAny };

export const defaultValues: FormValuesMap = {
  'daily-check-in': {
    date: new Date().toISOString().slice(0, 10),
    energyLevel: 5,
    stressLevel: 5,
    sleepQuality: 5,
    tensionAreas: [],
    sensations: [],
    emotion: '',
    reflection: '',
    supportiveAction: '',
  },
  'body-awareness': {
    beforeStressLevel: 5,
    tensionArea: '',
    changeAfter: '',
    afterStressLevel: 4,
    grounded: 'a-little',
    notes: '',
  },
  'end-of-shift-reset': {
    activationLevel: 5,
    jawRelaxed: 'no',
    shouldersSoftened: 'no',
    breathingHelped: 'a-little',
    neutralThings: ['', '', ''],
    softerNow: '',
    notes: '',
  },
  'emotional-body-map': {
    bodyArea: '',
    sensation: '',
    possibleEmotion: '',
    intensity: 5,
    needRightNow: '',
    notes: '',
  },
  'regulation-tracker': {
    days: Array.from({ length: 7 }, (_, index) => ({
      day: index + 1,
      bodyScanCompleted: false,
      breathingCompleted: false,
      groundingCompleted: false,
      shoulderResetCompleted: false,
      notes: '',
    })),
  },
};
