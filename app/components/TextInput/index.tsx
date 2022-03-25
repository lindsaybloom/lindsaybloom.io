import React from "react"

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  onChange?: (e: React.ChangeEvent) => void
}

export const TextInput = React.forwardRef(
  (
    { label, placeholder, onChange, name, value, type }: TextInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="form-group flex flex-col items-start">
        {label && <label htmlFor="input-field">{label}</label>}
        <input
          type={type}
          value={value}
          name={name}
          className="bg-grayDarkest focus:outline-none border-b-2 border-pinkLightest"
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
      </div>
    )
  }
)