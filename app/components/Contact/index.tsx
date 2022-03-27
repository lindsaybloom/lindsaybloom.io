import React from "react"
import { H1, Text } from "~/components/Typography"
import { TextInput } from "~/components/TextInput"
import { TextArea } from "~/components/TextArea"
import { Form, useActionData } from "remix"
import { Button } from "~/components/Button"
import { FormSubmitted } from "~/components/FormSubmitted"

export const Contact = () => {
  const [state, setState] = React.useState({})
  const [isOpen, toggle] = React.useState(false)

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const actionData = useActionData()

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
    <section id="contact">
      <div className="w-full mt-6 mb-6 lg:mb-0 items-center text-center">
        <H1 className="mb-4">Get in touch with me!</H1>
        <Text className="mb-7">
          Please email me directly at
          <a
            className="text-pinkLightest"
            href="mailto: lindsaybloomdev@gmail.com"
          >
            {" "}
            lindsaybloomdev@gmail.com
          </a>
          .
        </Text>

        <a
          className="mt-6 border-2 rounded-3xl border-pinkLightest text-pinkLightest px-1 py-4 w-auto"
          href="mailto: lindsaybloomdev@gmail.com"
        >
          Email me!
        </a>
        {!isOpen ? (
          <>
            <Text className="my-6">Or, fill out this form!</Text>

            <Form
              id="contact-form"
              name="contact-form"
              method="post"
              data-netlify="true"
              netlify-honeypot="form-name"
              encType="application/x-www-form-urlencoded"
              className="flex flex-col items-center gap-6 w-full"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <div className="flex flex-col lg:flex-row justify-between w-full lg:w-1/2 gap-3">
                <TextInput
                  id="input-name"
                  name="name"
                  required
                  label="Name"
                  onChange={handleChange}
                  className="w-full"
                />
                <TextInput
                  id="input-email"
                  name="email"
                  input-type="email"
                  required
                  label="Email"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <TextArea
                className="w-full lg:w-1/2"
                id="input-message"
                name="message"
                label="Message"
                onChange={handleChange}
              />
              <div className="mt-3 flex gap-3 lg:w-1/2">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </>
        ) : (
          <FormSubmitted
            className="fadeIn"
            copy="Form successfully submitted"
          />
        )}
      </div>
    </section>
  )
}
