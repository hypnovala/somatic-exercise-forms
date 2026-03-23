'use client';

import { Control, Controller } from 'react-hook-form';
import { TrackerDay } from '@/types/forms';

export function TrackerField<T extends { days: TrackerDay[] }>({ control }: { control: Control<T> }) {
  return (
    <Controller
      name={'days' as any}
      control={control}
      render={({ field }) => {
        const days = field.value as TrackerDay[];
        return (
          <div className="space-y-4">
            {days.map((day, index) => {
              const dayCompletion = [day.bodyScanCompleted, day.breathingCompleted, day.groundingCompleted, day.shoulderResetCompleted].filter(Boolean).length;

              return (
                <div key={day.day} className="rounded-[24px] border border-mist bg-white p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-ink">Day {day.day}</h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-stone">Daily reset</p>
                    </div>
                    <span className="rounded-full bg-sky/15 px-3 py-1 text-xs font-semibold text-ink">
                      {dayCompletion}/4 complete
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ['bodyScanCompleted', 'Body scan completed'],
                      ['breathingCompleted', 'Breathing completed'],
                      ['groundingCompleted', 'Grounding completed'],
                      ['shoulderResetCompleted', 'Shoulder reset completed'],
                    ].map(([key, label]) => (
                      <label key={key} className="flex items-center gap-3 rounded-2xl border border-mist px-4 py-3 text-sm text-ink">
                        <input
                          type="checkbox"
                          checked={day[key as keyof TrackerDay] as boolean}
                          onChange={(event) => {
                            const nextDays = [...days];
                            nextDays[index] = {
                              ...day,
                              [key]: event.target.checked,
                            };
                            field.onChange(nextDays);
                          }}
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                  <label className="mt-4 block space-y-2">
                    <span className="text-sm font-medium text-ink">Short notes</span>
                    <textarea
                      rows={3}
                      value={day.notes}
                      onChange={(event) => {
                        const nextDays = [...days];
                        nextDays[index] = {
                          ...day,
                          notes: event.target.value,
                        };
                        field.onChange(nextDays);
                      }}
                      className="w-full rounded-2xl border border-mist bg-white px-4 py-3 text-sm text-ink focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/40"
                      placeholder="Notice what supported steadiness today."
                    />
                  </label>
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
}
