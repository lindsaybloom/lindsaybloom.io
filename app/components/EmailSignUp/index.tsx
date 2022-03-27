import React from "react"
import { H1, Text } from "../../components/Typography"
import { TextInput } from "~/components/TextInput"
import { Button } from "~/components/Button"
import { Form, useActionData } from "remix"
import { FormSubmitted } from "../FormSubmitted"

type EmailSignUpProps = {
  className?: string
}

export const EmailSignUp = ({ className }: EmailSignUpProps) => {
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
    <>
      <div
        className={`flex flex-col items-center border-1 p-4 w-fit self-center border-2 border-solid border-pinkLightest rounded-2xl ${className}`}
      >
        <H1 className="text-center">Sign up for my email list!</H1>
        <Text className="m-4 text-center">
          Get an email notification for every post.
        </Text>
        {!isOpen ? (
          <Form
            id="email-signup"
            name="email-signup"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            style={{ marginBottom: "0" }}
          >
            <input type="hidden" name="form-name" value="email-signup" />
            <div className="flex flex-col lg:flex-row justify-between gap-3">
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
                input-type="email"
                label="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mt-4 flex gap-3 justify-center">
              <Button type="submit">Signup</Button>
            </div>
          </Form>
        ) : (
          <FormSubmitted copy="Form successfully submitted" />
        )}
      </div>
    </>
  )
}
