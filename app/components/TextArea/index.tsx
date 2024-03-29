import React from "react"

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
  label?: string
  onChange?: (e: React.ChangeEvent) => void
}

export const TextArea = React.forwardRef(
  (
    { label, placeholder, onChange, name, value, className }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className={`form-group flex flex-col items-start ${className}`}>
        {label && (
          <label htmlFor="input-field" className="mb-3">
            {label}
          </label>
        )}
        <textarea
          value={value}
          name={name}
          className="form-control bg-grayDarkest border border-pinkLightest rounded-md w-full"
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
      </div>
    )
  }
)
