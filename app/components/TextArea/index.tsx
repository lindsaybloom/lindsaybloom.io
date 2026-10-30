import React from "react"

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
  label?: string
  onChange?: (e: React.ChangeEvent) => void
}

export const TextArea = React.forwardRef(
  (
    { id, label, placeholder, onChange, name, value, className = "" }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className={`flex flex-col items-start text-left ${className}`}>
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}
        <textarea
          id={id}
          value={value}
          name={name}
          rows={5}
          className="form-field resize-y"
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
      </div>
    )
  }
)
