import React from "react"
import { H3, Text } from "../../components/Typography"
import { TextInput } from "~/components/TextInput"
import { Button } from "~/components/Button"
import { Form, useActionData } from "remix"
import { FormSubmitted } from "../FormSubmitted"

type EmailSignUpProps = {
  className?: string
}

export const EmailSignUp = ({ className = "" }: EmailSignUpProps) => {
  const [state, setState] = React.useState({})
  const actionData = useActionData()

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const [isOpen, toggle] = React.useState(false)

  React.useEffect(() => {
    if (actionData?.formData?._fields) {
      toggle(true)
      const body = new URLSearchParams(
        actionData?.formData?._fields as any
      ).toString()
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      })
        .then(() => console.log("Form successfully submitted"))
        .catch(error => alert(error))
    }
  }, [actionData])

  return (
    <div
      className={`tile bg-white w-full p-8 lg:p-10 flex flex-col items-center text-center ${className}`}
    >
      <H3>Get new posts by email.</H3>
      <Text className="mt-2 text-secondary">
        One email for every new post. No spam.
      </Text>
      {!isOpen ? (
        <Form
          id="email-signup"
          name="email-signup"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="w-full mt-6"
        >
          <input type="hidden" name="form-name" value="email-signup" />
          <div className="grid md:grid-cols-2 gap-4">
            <TextInput
              id="input-name"
              name="name"
              label="Name"
              required
              onChange={handleChange}
            />
            <TextInput
              id="input-email"
              name="email"
              type="email"
              label="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Button type="submit">Sign up</Button>
          </div>
        </Form>
      ) : (
        <FormSubmitted className="fadeIn" copy="You're on the list." />
      )}
    </div>
  )
}
