import React from "react"

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  label?: string
  onChange?: (e: React.ChangeEvent) => void
}

export const TextInput = React.forwardRef(
  (
    {
      id,
      label,
      placeholder,
      onChange,
      name,
      value,
      type,
      required,
      className = "",
    }: TextInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={`flex flex-col items-start text-left ${className}`}>
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          value={value}
          name={name}
          required={required}
          className="form-field"
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
      </div>
    )
  }
)
