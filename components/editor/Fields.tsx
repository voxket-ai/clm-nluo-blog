'use client'

import { cn } from '@/lib/utils'

interface BaseProps {
  label: string
  name: string
  error?: string
  hint?: string
  required?: boolean
  className?: string
}

function Shell({
  label,
  name,
  error,
  hint,
  required,
  className,
  counter,
  children,
}: BaseProps & { counter?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={name} className="text-sm font-semibold text-slate-800">
          {label}
          {required && <span className="ml-0.5 text-blue-600">*</span>}
        </label>
        {counter && <span className="text-xs tabular-nums text-slate-400">{counter}</span>}
      </div>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  )
}

const controlClasses = (error?: string) =>
  cn(
    'w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-slate-900 shadow-sm outline-none transition-all',
    'placeholder:text-slate-300',
    error
      ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100'
      : 'border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
  )

export function TextField({
  value,
  onChange,
  placeholder,
  maxLength,
  type = 'text',
  ...base
}: BaseProps & {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  maxLength?: number
  type?: string
}) {
  return (
    <Shell {...base} counter={maxLength ? `${value.length}/${maxLength}` : undefined}>
      <input
        id={base.name}
        name={base.name}
        type={type}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={controlClasses(base.error)}
      />
    </Shell>
  )
}

export function TextArea({
  value,
  onChange,
  placeholder,
  maxLength,
  rows = 4,
  ...base
}: BaseProps & {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  maxLength?: number
  rows?: number
}) {
  return (
    <Shell {...base} counter={maxLength ? `${value.length}/${maxLength}` : undefined}>
      <textarea
        id={base.name}
        name={base.name}
        value={value}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={cn(controlClasses(base.error), 'resize-y leading-relaxed')}
      />
    </Shell>
  )
}

export function SelectField({
  value,
  onChange,
  options,
  placeholder,
  ...base
}: BaseProps & {
  value: string
  onChange: (v: string) => void
  options: readonly string[]
  placeholder?: string
}) {
  return (
    <Shell {...base}>
      <select
        id={base.name}
        name={base.name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(controlClasses(base.error), 'cursor-pointer appearance-none bg-no-repeat pr-10')}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
          backgroundPosition: 'right 0.85rem center',
          backgroundSize: '1.1rem',
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Shell>
  )
}

/** Segmented control — used for the submission type. */
export function ChoiceGroup({
  value,
  onChange,
  options,
  ...base
}: BaseProps & { value: string; onChange: (v: string) => void; options: readonly string[] }) {
  return (
    <Shell {...base}>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={cn(
                'rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200',
                active
                  ? 'border-blue-500 bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm'
              )}
            >
              {option}
            </button>
          )
        })}
      </div>
    </Shell>
  )
}
