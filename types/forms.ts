export type FormSlug =
  | 'daily-check-in'
  | 'body-awareness'
  | 'end-of-shift-reset'
  | 'emotional-body-map'
  | 'regulation-tracker'
  | 'pendulation-tracking'
  | 'resource-anchoring'
  | 'titration-awareness'
  | 'boundary-containment'
  | 'somatic-tracking';

export type ProgressStatus = 'draft' | 'completed';

export type Option = {
  label: string;
  value: string;
};

export type FormFieldType =
  | 'date'
  | 'range'
  | 'text'
  | 'textarea'
  | 'checkbox-group'
  | 'select'
  | 'radio'
  | 'multi-text'
  | 'tracker';

export type BaseField = {
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  type: FormFieldType;
};

export type FieldDefinition = BaseField & {
  options?: Option[];
  min?: number;
  max?: number;
  rows?: number;
  itemLabel?: string;
};

export type FormDefinition = {
  slug: FormSlug;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  estimatedTime: string;
  audience: string;
  fields: FieldDefinition[];
};

export type TrackerDay = {
  day: number;
  bodyScanCompleted: boolean;
  breathingCompleted: boolean;
  groundingCompleted: boolean;
  shoulderResetCompleted: boolean;
  notes: string;
};

export type DailyCheckInValues = {
  date: string;
  energyLevel: number;
  stressLevel: number;
  sleepQuality: number;
  tensionAreas: string[];
  sensations: string[];
  emotion: string;
  reflection: string;
  supportiveAction: string;
};

export type BodyAwarenessValues = {
  beforeStressLevel: number;
  tensionArea: string;
  changeAfter: string;
  afterStressLevel: number;
  grounded: string;
  notes: string;
};

export type EndOfShiftValues = {
  activationLevel: number;
  jawRelaxed: string;
  shouldersSoftened: string;
  breathingHelped: string;
  neutralThings: string[];
  softerNow: string;
  notes: string;
};

export type EmotionalBodyMapValues = {
  bodyArea: string;
  sensation: string;
  possibleEmotion: string;
  intensity: number;
  needRightNow: string;
  notes: string;
};

export type RegulationTrackerValues = {
  days: TrackerDay[];
};

export type PendulationTrackingValues = {
  activationLevel: number;
  settlingLevel: number;
  resourceNoticed: string;
  transitionNotes: string;
  steadyMoment: string;
  notes: string;
};

export type ResourceAnchoringValues = {
  resourceName: string;
  bodyArea: string;
  sensation: string;
  anchorPhrase: string;
  supportLevel: number;
  nextSupport: string;
};

export type TitrationAwarenessValues = {
  activationLevel: number;
  smallerStep: string;
  pauseSignal: string;
  afterShift: string;
  paceSupported: string;
  notes: string;
};

export type BoundaryContainmentValues = {
  situation: string;
  bodyCue: string;
  supportNeeded: string;
  boundaryStep: string;
  settledLevel: number;
  notes: string;
};

export type SomaticTrackingValues = {
  bodyArea: string;
  sensation: string;
  intensity: number;
  pace: string;
  observation: string;
  supportNow: string;
};

export type FormValuesMap = {
  'daily-check-in': DailyCheckInValues;
  'body-awareness': BodyAwarenessValues;
  'end-of-shift-reset': EndOfShiftValues;
  'emotional-body-map': EmotionalBodyMapValues;
  'regulation-tracker': RegulationTrackerValues;
  'pendulation-tracking': PendulationTrackingValues;
  'resource-anchoring': ResourceAnchoringValues;
  'titration-awareness': TitrationAwarenessValues;
  'boundary-containment': BoundaryContainmentValues;
  'somatic-tracking': SomaticTrackingValues;
};

export type SavedFormEntry<T = unknown> = {
  slug: FormSlug;
  title: string;
  values: T;
  status: ProgressStatus;
  updatedAt: string;
  completedAt?: string;
};
