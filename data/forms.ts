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
  {
    slug: 'pendulation-tracking',
    title: 'Pendulation Tracking Form',
    shortTitle: 'Pendulation Tracking',
    summary: 'Gently notice movement between discomfort and neutrality without forcing either state.',
    description:
      'Gently move your attention between an area of discomfort and a more neutral or steady area in your body.',
    estimatedTime: '3 minutes',
    audience: 'Helpful when you want to notice whether shifting attention creates even a slight sense of change.',
    fields: [
      { name: 'discomfortArea', label: 'Area of discomfort', type: 'text', placeholder: 'Example: chest, jaw, stomach' },
      { name: 'neutralArea', label: 'Neutral or steadier area', type: 'text', placeholder: 'Example: feet, hands, legs' },
      { name: 'sensationInDiscomfort', label: 'Sensation in the discomfort area', type: 'text', placeholder: 'Example: tight, hot, buzzing, heavy' },
      { name: 'sensationInNeutral', label: 'Sensation in the neutral area', type: 'text', placeholder: 'Example: steady, warm, supported, quiet' },
      { name: 'intensityBefore', label: 'Intensity before shifting attention', type: 'range', min: 1, max: 10 },
      { name: 'intensityAfter', label: 'Intensity after shifting attention', type: 'range', min: 1, max: 10 },
      {
        name: 'didShiftOccur',
        label: 'Did a shift occur?',
        type: 'radio',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
          { label: 'Slightly', value: 'slightly' },
        ],
      },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 3, placeholder: 'Observe anything else you want to remember from this pendulation practice.' },
    ],
  },
  {
    slug: 'resource-anchoring',
    title: 'Resource Anchoring Form',
    shortTitle: 'Resource Anchoring',
    summary: 'Anchor into a supportive cue and notice how it lands in your body.',
    description:
      'Bring attention to something that feels steady, supportive, or slightly pleasant.',
    estimatedTime: '2 minutes',
    audience: 'Useful when you want to return to a supportive cue before a task, conversation, or transition.',
    fields: [
      { name: 'resourceType', label: 'Resource type', type: 'text', placeholder: 'Example: person, place, memory, sensation' },
      { name: 'whereFeltInBody', label: 'Where do you feel it in your body?', type: 'text', placeholder: 'Example: chest, belly, shoulders, hands' },
      { name: 'sensationQuality', label: 'Sensation quality', type: 'text', placeholder: 'Example: warm, open, grounded, light' },
      { name: 'intensityOfResource', label: 'Intensity of the resource', type: 'range', min: 1, max: 10 },
      {
        name: 'didItExpand',
        label: 'Did it expand?',
        type: 'radio',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
          { label: 'Slightly', value: 'slightly' },
        ],
      },
      { name: 'whatHelpedItGrow', label: 'What helped it grow?', type: 'textarea', rows: 3, placeholder: 'Notice what made the resource feel more available.' },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 3, placeholder: 'Add anything else you want to remember about this resource.' },
    ],
  },
  {
    slug: 'titration-awareness',
    title: 'Titration Awareness Form',
    shortTitle: 'Titration Awareness',
    summary: 'Work with intensity in smaller, more manageable doses.',
    description:
      'Notice a small amount of sensation rather than the whole experience.',
    estimatedTime: '3 minutes',
    audience: 'Helpful when something feels like too much and you want to slow the pace into smaller steps.',
    fields: [
      { name: 'sensationNoticed', label: 'Sensation noticed', type: 'text', placeholder: 'Example: fluttering, pressure, heat, tightness' },
      { name: 'intensityLevel', label: 'Intensity level', type: 'range', min: 1, max: 10 },
      {
        name: 'wasItManageable',
        label: 'Was it manageable?',
        type: 'radio',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
          { label: 'Partially', value: 'partially' },
        ],
      },
      {
        name: 'didYouPause',
        label: 'Did you pause?',
        type: 'radio',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
      },
      { name: 'whatHelpedRegulate', label: 'What helped regulate?', type: 'textarea', rows: 3, placeholder: 'Notice what helped your system feel more manageable.' },
      { name: 'afterState', label: 'After state', type: 'range', min: 1, max: 10 },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 3, placeholder: 'Add anything else you want to remember about this titration practice.' },
    ],
  },
  {
    slug: 'boundary-containment',
    title: 'Boundary and Containment Form',
    shortTitle: 'Boundary & Containment',
    summary: 'Notice what helps you feel more contained, supported, and in contact with your boundaries.',
    description:
      'Notice where your body begins and ends, and what helps you feel contained or supported.',
    estimatedTime: '3 minutes',
    audience: 'Helpful after a demanding interaction or anytime you want more clarity about support and limits.',
    fields: [
      { name: 'boundaryAwareness', label: 'Boundary awareness', type: 'text', placeholder: 'Example: I notice my edges more clearly when I slow down.' },
      { name: 'whereYouFeelContained', label: 'Where do you feel contained?', type: 'text', placeholder: 'Example: around my ribs, back, feet, or hands' },
      { name: 'whereYouFeelOpenOrExposed', label: 'Where do you feel open or exposed?', type: 'text', placeholder: 'Example: chest, throat, stomach, shoulders' },
      {
        name: 'didContainmentIncrease',
        label: 'Did containment increase?',
        type: 'radio',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
          { label: 'Slightly', value: 'slightly' },
        ],
      },
      { name: 'whatHelpedContainment', label: 'What helped containment?', type: 'textarea', rows: 3, placeholder: 'Notice what supported more steadiness or structure.' },
      { name: 'bodyResponse', label: 'Body response', type: 'textarea', rows: 3, placeholder: 'Observe what your body did in response.' },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 3, placeholder: 'Anything else you want to observe about this containment practice.' },
    ],
  },
  {
    slug: 'somatic-tracking',
    title: 'Somatic Tracking Form',
    shortTitle: 'Somatic Tracking',
    summary: 'Track a sensation over time with gentle curiosity.',
    description:
      'Stay with a sensation and notice how it shifts over time without trying to change it.',
    estimatedTime: '2 minutes',
    audience: 'Useful when you want to observe a sensation with more curiosity and less urgency.',
    fields: [
      { name: 'sensationLocation', label: 'Sensation location', type: 'text', placeholder: 'Example: chest, belly, throat, hands' },
      { name: 'sensationType', label: 'Sensation type', type: 'text', placeholder: 'Example: tingling, heat, pressure, fluttering' },
      { name: 'sensationMovement', label: 'Sensation movement', type: 'text', placeholder: 'Example: rising, spreading, pulsing, staying still' },
      { name: 'intensityStart', label: 'Intensity at the start', type: 'range', min: 1, max: 10 },
      { name: 'intensityEnd', label: 'Intensity at the end', type: 'range', min: 1, max: 10 },
      {
        name: 'didItChange',
        label: 'Did it change?',
        type: 'radio',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
          { label: 'Slightly', value: 'slightly' },
        ],
      },
      { name: 'changeDescription', label: 'Describe the change', type: 'textarea', rows: 3, placeholder: 'Observe how the sensation shifted in shape, pace, or intensity.' },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 3, placeholder: 'Anything else you want to remember from this tracking practice.' },
    ],
  },
];

export const formLookup = Object.fromEntries(formDefinitions.map((form) => [form.slug, form]));
