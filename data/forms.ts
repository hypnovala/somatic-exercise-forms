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
    summary: 'Notice movement between activation and settling without forcing either state.',
    description:
      'Track how your system moves between intensity and ease so you can observe change in smaller, steadier steps.',
    estimatedTime: '3 minutes',
    audience: 'Helpful after a stressful moment, before a transition, or when you want to notice what supports settling.',
    fields: [
      { name: 'activationLevel', label: 'Activation level right now', type: 'range', min: 1, max: 10, description: '1 is very settled, 10 is very activated.' },
      { name: 'settlingLevel', label: 'How much settling do you notice?', type: 'range', min: 1, max: 10, description: '1 is very little, 10 is a strong sense of ease.' },
      { name: 'resourceNoticed', label: 'What feels resourcing right now?', type: 'text', placeholder: 'Example: the chair under me, warm light, a steady breath' },
      { name: 'transitionNotes', label: 'What do you notice between activation and settling?', type: 'textarea', rows: 4, placeholder: 'Observe shifts in breath, pace, posture, or attention.' },
      { name: 'steadyMoment', label: 'Describe one steadier moment', type: 'textarea', rows: 3, placeholder: 'Notice one moment that feels even slightly more settled.' },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 3, placeholder: 'Anything else you want to remember from this pendulation practice.' },
    ],
  },
  {
    slug: 'resource-anchoring',
    title: 'Resource Anchoring Form',
    shortTitle: 'Resource Anchoring',
    summary: 'Identify a supportive cue and notice how it lands in your body.',
    description:
      'Use this form to anchor into something supportive and observe how your system responds.',
    estimatedTime: '2 minutes',
    audience: 'Useful when you want to return to a supportive cue before a task, conversation, or transition.',
    fields: [
      { name: 'resourceName', label: 'Resource or support cue', type: 'text', placeholder: 'Example: a memory, a person, a phrase, a place, or a sensation' },
      { name: 'bodyArea', label: 'Where do you notice it in your body?', type: 'select', options: tensionAreaOptions },
      { name: 'sensation', label: 'What sensation comes with it?', type: 'select', options: sensationOptions },
      { name: 'anchorPhrase', label: 'Anchor phrase', type: 'text', placeholder: 'Example: I can come back to this support.' },
      { name: 'supportLevel', label: 'How supportive does it feel?', type: 'range', min: 1, max: 10, description: '1 is barely supportive, 10 is strongly supportive.' },
      { name: 'nextSupport', label: 'What will help you stay connected to it?', type: 'textarea', rows: 3, placeholder: 'Notice one small way to keep this support close.' },
    ],
  },
  {
    slug: 'titration-awareness',
    title: 'Titration Awareness Form',
    shortTitle: 'Titration Awareness',
    summary: 'Break a bigger experience into a smaller, more manageable next step.',
    description:
      'Use this form to notice a small amount at a time so you can move with more choice and less overwhelm.',
    estimatedTime: '3 minutes',
    audience: 'Helpful when something feels like too much and you want to slow the pace into smaller steps.',
    fields: [
      { name: 'activationLevel', label: 'Activation level before you slow it down', type: 'range', min: 1, max: 10 },
      { name: 'smallerStep', label: 'What is one smaller step you can notice?', type: 'text', placeholder: 'Example: one breath, one sentence, one body area, one part of the task' },
      { name: 'pauseSignal', label: 'What tells you it is time to pause?', type: 'textarea', rows: 3, placeholder: 'Observe the signal that lets you know you need more space.' },
      { name: 'afterShift', label: 'What changed after slowing it down?', type: 'textarea', rows: 4, placeholder: 'Notice any change in pace, clarity, or body sensation.' },
      {
        name: 'paceSupported',
        label: 'Did the slower pace feel supportive?',
        type: 'radio',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'A little', value: 'a-little' },
          { label: 'Not yet', value: 'not-yet' },
        ],
      },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 3, placeholder: 'Add any reminder that may support your next small step.' },
    ],
  },
  {
    slug: 'boundary-containment',
    title: 'Boundary and Containment Form',
    shortTitle: 'Boundary & Containment',
    summary: 'Observe where you need more support, space, or structure around a situation.',
    description:
      'Use this form to notice body cues around boundaries and identify one supportive next step.',
    estimatedTime: '3 minutes',
    audience: 'Helpful after a demanding interaction or anytime you want more clarity about support and limits.',
    fields: [
      { name: 'situation', label: 'Situation you are responding to', type: 'text', placeholder: 'Keep it brief and concrete.' },
      { name: 'bodyCue', label: 'What body cue tells you a boundary is needed?', type: 'text', placeholder: 'Example: tight jaw, shallow breath, urge to withdraw' },
      { name: 'supportNeeded', label: 'What kind of support or containment feels useful?', type: 'textarea', rows: 4, placeholder: 'Example: more space, clearer timing, a pause, help from someone else' },
      { name: 'boundaryStep', label: 'One next boundary-supporting step', type: 'textarea', rows: 3, placeholder: 'Notice one clear, supportive next step.' },
      { name: 'settledLevel', label: 'How settled do you feel after naming it?', type: 'range', min: 1, max: 10, description: '1 is not settled, 10 is much steadier.' },
      { name: 'notes', label: 'Notes', type: 'textarea', rows: 3, placeholder: 'Anything else you want to observe about this boundary practice.' },
    ],
  },
  {
    slug: 'somatic-tracking',
    title: 'Somatic Tracking Form',
    shortTitle: 'Somatic Tracking',
    summary: 'Track a sensation with gentle curiosity and notice what support fits the moment.',
    description:
      'Use this form to stay with a sensation in a steady way and observe how it shifts over time.',
    estimatedTime: '2 minutes',
    audience: 'Useful when you want to observe a sensation with more curiosity and less urgency.',
    fields: [
      { name: 'bodyArea', label: 'Body area', type: 'select', options: tensionAreaOptions },
      { name: 'sensation', label: 'Sensation', type: 'select', options: sensationOptions },
      { name: 'intensity', label: 'Intensity', type: 'range', min: 1, max: 10, description: '1 is subtle, 10 is strong.' },
      {
        name: 'pace',
        label: 'What pace feels most supportive?',
        type: 'radio',
        options: [
          { label: 'Slow down', value: 'slow-down' },
          { label: 'Stay here', value: 'stay-here' },
          { label: 'Step back', value: 'step-back' },
        ],
      },
      { name: 'observation', label: 'What do you notice as you track it?', type: 'textarea', rows: 4, placeholder: 'Observe changes in shape, temperature, movement, or intensity.' },
      { name: 'supportNow', label: 'What support fits right now?', type: 'textarea', rows: 3, placeholder: 'Example: rest, movement, water, a pause, connection, quiet.' },
    ],
  },
];

export const formLookup = Object.fromEntries(formDefinitions.map((form) => [form.slug, form]));
