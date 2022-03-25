import React from "react"

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  onChange?: (e: React.ChangeEvent) => void
}

export const TextArea = React.forwardRef(
  (
    { label, placeholder, onChange, name, value }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className="form-group">
        {label && <label htmlFor="input-field">{label}</label>}
        <textarea
          value={value}
          name={name}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
      </div>
    )
  }
)
