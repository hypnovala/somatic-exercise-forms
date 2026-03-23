import { FormDefinition } from '@/types/forms';

const tensionAreaOptions = [
  'jaw',
  'neck',
  'shoulders',
  'chest',
  'stomach',
  'back',
  'hands',
  'legs',
  'feet',
].map((value) => ({ label: value[0].toUpperCase() + value.slice(1), value }));

const sensationOptions = [
  'warmth',
  'tightness',
  'heaviness',
  'numbness',
  'buzzing',
  'fluttering',
  'pressure',
  'other',
].map((value) => ({ label: value[0].toUpperCase() + value.slice(1), value }));

export const formDefinitions: FormDefinition[] = [
  {
    slug: 'daily-check-in',
    title: 'Daily Nervous System Check-In',
    shortTitle: 'Daily Check-In',
    summary: 'A quick daily reset to notice energy, stress, sleep, and body signals.',
    description:
      'Notice how your body and energy feel today before moving into the rest of your day.',
    estimatedTime: '3 minutes',
    audience: 'Ideal before a shift, during a break, or when the day starts to feel loud.',
    fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'energyLevel', label: 'Energy level', type: 'range', min: 1, max: 10, description: '1 is very low, 10 is fully resourced.' },
      { name: 'stressLevel', label: 'Stress level', type: 'range', min: 1, max: 10, description: '1 is steady, 10 is highly activated.' },
      { name: 'sleepQuality', label: 'Sleep quality', type: 'range', min: 1, max: 10, description: 'Notice the quality of rest, not perfection.' },
      { name: 'tensionAreas', label: 'Tension areas', type: 'checkbox-group', options: tensionAreaOptions },
      { name: 'sensations', label: 'Sensations', type: 'checkbox-group', options: sensationOptions },
      { name: 'emotion', label: 'What emotion feels closest right now?', type: 'text', placeholder: 'Examples: steady, worried, frustrated, hopeful' },
      { name: 'reflection', label: 'Short reflection', type: 'textarea', rows: 4, placeholder: 'What are you noticing right now?' },
      { name: 'supportiveAction', label: 'One small supportive action I can take today', type: 'textarea', rows: 3, placeholder: 'Examples: drink water, step outside, soften shoulders' },
    ],
  },
  {
    slug: 'body-awareness',
    title: '60-Second Body Awareness Form',
    shortTitle: '60-Second Awareness',
    summary: 'Compare stress and body tension before and after one minute of noticing.',
    description:
      'Track what shifts when you pause for one minute and bring attention back to your body.',
    estimatedTime: '1 minute',
    audience: 'Helpful between meetings, after a patient interaction, or before entering home mode.',
    fields: [
      { name: 'beforeStressLevel', label: 'Before exercise stress level', type: 'range', min: 1, max: 10 },
      { name: 'tensionArea', label: 'Where did you notice the most tension?', type: 'text', placeholder: 'Example: jaw, shoulders, stomach' },
      { name: 'changeAfter', label: 'What changed after 60 seconds?', type: 'textarea', rows: 4, placeholder: 'Notice any shift in breath, posture, speed, or thoughts.' },
      { name: 'afterStressLevel', label: 'After exercise stress level', type: 'range', min: 1, max: 10 },
      {
        name: 'grounded',
        label: 'Did you feel more grounded?',
        type: 'radio',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
          { label: 'A little', value: 'a-little' },
        ],
      },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 4, placeholder: 'Anything else you want to remember?' },
    ],
  },
  {
    slug: 'end-of-shift-reset',
    title: 'End-of-Shift Reset Form',
    shortTitle: 'End-of-Shift Reset',
    summary: 'A structured reset to help you transition out of work mode with more steadiness.',
    description:
      'Use this form to gently transition out of work mode and notice what feels different after a brief reset.',
    estimatedTime: '2 minutes',
    audience: 'Best used at the end of a long shift, class day, caregiving block, or after an intense task.',
    fields: [
      { name: 'activationLevel', label: 'How activated do you feel right now?', type: 'range', min: 1, max: 10 },
      { name: 'jawRelaxed', label: 'Jaw relaxed?', type: 'radio', options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }] },
      { name: 'shouldersSoftened', label: 'Shoulders softened?', type: 'radio', options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }] },
      { name: 'breathingHelped', label: 'Did slow breathing help?', type: 'radio', options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }, { label: 'A little', value: 'a-little' }] },
      { name: 'neutralThings', label: 'Name 3 neutral things you noticed', type: 'multi-text', itemLabel: 'Neutral observation', description: 'Think simple and concrete: a chair, a sound, cool air.' },
      { name: 'softerNow', label: 'What feels slightly softer now?', type: 'textarea', rows: 3, placeholder: 'A breath, a thought, a body area, or your pace.' },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 4, placeholder: 'Capture anything worth noticing before you transition.' },
    ],
  },
  {
    slug: 'emotional-body-map',
    title: 'Emotional Body Map Reflection Form',
    shortTitle: 'Body Map Reflection',
    summary: 'Observe where a sensation shows up and what support may fit that moment.',
    description:
      'Explore where a sensation shows up in your body and what it may be asking for.',
    estimatedTime: '2 minutes',
    audience: 'Useful after a hard conversation, unexpected stressor, or anytime you want more clarity.',
    fields: [
      { name: 'bodyArea', label: 'Body area', type: 'select', options: tensionAreaOptions },
      { name: 'sensation', label: 'Sensation', type: 'select', options: sensationOptions },
      {
        name: 'possibleEmotion',
        label: 'Possible emotion',
        type: 'select',
        options: ['Concerned', 'Overloaded', 'Steady', 'Tender', 'Irritated', 'Numb', 'Hopeful', 'Unsure'].map((value) => ({ label: value, value: value.toLowerCase() })),
      },
      { name: 'intensity', label: 'Intensity', type: 'range', min: 1, max: 10, description: '1 is subtle, 10 is very strong.' },
      { name: 'needRightNow', label: 'What do I need right now?', type: 'textarea', rows: 3, placeholder: 'Example: a pause, water, space, quiet, movement, support.' },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 4, placeholder: 'Any extra context or observations.' },
    ],
  },
  {
    slug: 'regulation-tracker',
    title: '7-Day Regulation Tracker',
    shortTitle: '7-Day Tracker',
    summary: 'Track simple daily resets over a week and note what supported steadiness.',
    description:
      'Track simple daily practices and see which small actions help you feel more supported.',
    estimatedTime: '5 minutes for setup, then 30 seconds per day',
    audience: 'Helpful when you want a broader view of what supports you through a demanding week.',
    fields: [{ name: 'days', label: '7-day tracker', type: 'tracker' }],
  },
];

export const formLookup = Object.fromEntries(formDefinitions.map((form) => [form.slug, form]));
