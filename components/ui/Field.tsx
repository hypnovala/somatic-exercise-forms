'use client';

import { Control, Controller, FieldErrors, UseFormRegister } from 'react-hook-form';
import { FieldDefinition } from '@/types/forms';
import { cn } from '@/lib/utils';

type FieldProps<T extends Record<string, any>> = {
  field: FieldDefinition;
  register: UseFormRegister<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
};

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm text-[#8b4f4f]">
      {message}
    </p>
  );
}

export function Field<T extends Record<string, any>>({ field, register, control, errors }: FieldProps<T>) {
  const error = errors[field.name as keyof T];
  const message = typeof error?.message === 'string' ? error.message : undefined;
  const helperId = `${field.name}-helper`;
  const errorId = `${field.name}-error`;
  const describedBy = [field.description ? helperId : null, message ? errorId : null].filter(Boolean).join(' ') || undefined;

  const commonInput = cn(
    'w-full rounded-2xl border bg-white px-4 py-3 text-sm text-ink shadow-sm transition focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/40',
    message ? 'border-[#b96b6b]' : 'border-mist',
  );

  if (field.type === 'date' || field.type === 'text') {
    return (
      <label className="block space-y-2">
        <span className="text-sm font-medium text-ink">{field.label}</span>
        {field.description ? (
          <span id={helperId} className="block text-sm text-stone">
            {field.description}
          </span>
        ) : null}
        <input
          type={field.type}
          placeholder={field.placeholder}
          aria-invalid={Boolean(message)}
          aria-describedby={describedBy}
          className={commonInput}
          {...register(field.name as any)}
        />
        <ErrorMessage id={errorId} message={message} />
      </label>
    );
  }

  if (field.type === 'textarea') {
    return (
      <label className="block space-y-2">
        <span className="text-sm font-medium text-ink">{field.label}</span>
        {field.description ? (
          <span id={helperId} className="block text-sm text-stone">
            {field.description}
          </span>
        ) : null}
        <textarea
          rows={field.rows ?? 4}
          placeholder={field.placeholder}
          aria-invalid={Boolean(message)}
          aria-describedby={describedBy}
          className={commonInput}
          {...register(field.name as any)}
        />
        <ErrorMessage id={errorId} message={message} />
      </label>
    );
  }

  if (field.type === 'range') {
    return (
      <Controller
        control={control}
        name={field.name as any}
        render={({ field: controllerField }) => (
          <label className="block space-y-2">
            <span className="text-sm font-medium text-ink">{field.label}</span>
            {field.description ? (
              <span id={helperId} className="block text-sm text-stone">
                {field.description}
              </span>
            ) : null}
            <div className={cn('rounded-2xl border bg-white px-4 py-4', message ? 'border-[#b96b6b]' : 'border-mist')}>
              <div className="mb-2 flex items-center justify-between text-sm text-stone">
                <span>{field.min}</span>
                <span className="text-lg font-semibold text-ink">{controllerField.value}</span>
                <span>{field.max}</span>
              </div>
              <input
                type="range"
                min={field.min}
                max={field.max}
                value={controllerField.value}
                aria-invalid={Boolean(message)}
                aria-describedby={describedBy}
                onChange={(event) => controllerField.onChange(Number(event.target.value))}
                className="h-2 w-full accent-sky"
              />
            </div>
            <ErrorMessage id={errorId} message={message} />
          </label>
        )}
      />
    );
  }

  if (field.type === 'checkbox-group') {
    return (
      <Controller
        control={control}
        name={field.name as any}
        render={({ field: controllerField }) => {
          const values = Array.isArray(controllerField.value) ? controllerField.value : [];
          return (
            <fieldset aria-describedby={describedBy} aria-invalid={Boolean(message)} className="space-y-3">
              <legend className="text-sm font-medium text-ink">{field.label}</legend>
              {field.description ? (
                <p id={helperId} className="text-sm text-stone">
                  {field.description}
                </p>
              ) : null}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {field.options?.map((option) => {
                  const checked = values.includes(option.value);
                  return (
                    <label
                      key={option.value}
                      className={cn(
                        'flex cursor-pointer items-center gap-2 rounded-2xl border px-3 py-3 text-sm transition focus-within:ring-2 focus-within:ring-sky/40',
                        checked ? 'border-sage bg-sage/15 text-ink' : 'border-mist bg-white',
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        aria-invalid={Boolean(message)}
                        onChange={(event) => {
                          const nextValues = event.target.checked
                            ? [...values, option.value]
                            : values.filter((value: string) => value !== option.value);
                          controllerField.onChange(nextValues);
                        }}
                      />
                      {option.label}
                    </label>
                  );
                })}
              </div>
              <ErrorMessage id={errorId} message={message} />
            </fieldset>
          );
        }}
      />
    );
  }

  if (field.type === 'select') {
    return (
      <label className="block space-y-2">
        <span className="text-sm font-medium text-ink">{field.label}</span>
        {field.description ? (
          <span id={helperId} className="block text-sm text-stone">
            {field.description}
          </span>
        ) : null}
        <select
          className={commonInput}
          aria-invalid={Boolean(message)}
          aria-describedby={describedBy}
          defaultValue=""
          {...register(field.name as any)}
        >
          <option value="" disabled>
            Select an option
          </option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ErrorMessage id={errorId} message={message} />
      </label>
    );
  }

  if (field.type === 'radio') {
    return (
      <fieldset aria-describedby={describedBy} aria-invalid={Boolean(message)} className="space-y-3">
        <legend className="text-sm font-medium text-ink">{field.label}</legend>
        {field.description ? (
          <p id={helperId} className="text-sm text-stone">
            {field.description}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          {field.options?.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-2 rounded-full border border-mist bg-white px-4 py-3 text-sm transition hover:border-sage focus-within:ring-2 focus-within:ring-sky/40">
              <input type="radio" value={option.value} {...register(field.name as any)} />
              {option.label}
            </label>
          ))}
        </div>
        <ErrorMessage id={errorId} message={message} />
      </fieldset>
    );
  }

  if (field.type === 'multi-text') {
    return (
      <fieldset aria-describedby={describedBy} className="space-y-3">
        <legend className="text-sm font-medium text-ink">{field.label}</legend>
        {field.description ? (
          <p id={helperId} className="text-sm text-stone">
            {field.description}
          </p>
        ) : null}
        <div className="space-y-3">
          {[0, 1, 2].map((index) => (
            <input
              key={index}
              type="text"
              placeholder={`${field.itemLabel ?? 'Item'} ${index + 1}`}
              aria-invalid={Boolean(message)}
              className={commonInput}
              {...register(`${field.name}.${index}` as any)}
            />
          ))}
        </div>
        <ErrorMessage id={errorId} message={message} />
      </fieldset>
    );
  }

  return null;
}
