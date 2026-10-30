import React from "react"
import { H1, Subhead } from "~/components/Typography"
import { TextInput } from "~/components/TextInput"
import { TextArea } from "~/components/TextArea"
import { Form, useActionData } from "remix"
import { Button, buttonClassName } from "~/components/Button"
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
    <section id="contact" className="section bg-mist">
      <div className="section-content flex flex-col items-center text-center">
        <H1>Get in touch.</H1>
        <Subhead className="mt-3 text-secondary">
          Email me directly at{" "}
          <a href="mailto:lindsaybloomdev@gmail.com">
            lindsaybloomdev@gmail.com
          </a>
          , or send a note below.
        </Subhead>
        <a
          className={`${buttonClassName("primary")} mt-8`}
          href="mailto:lindsaybloomdev@gmail.com"
        >
          Email me
        </a>

        <div className="tile bg-white w-full max-w-reading mt-12 p-8 lg:p-10">
          {!isOpen ? (
            <Form
              id="contact-form"
              name="contact-form"
              method="post"
              data-netlify="true"
              netlify-honeypot="form-name"
              encType="application/x-www-form-urlencoded"
              className="flex flex-col gap-5 w-full"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <div className="grid md:grid-cols-2 gap-5">
                <TextInput
                  id="input-name"
                  name="name"
                  required
                  label="Name"
                  onChange={handleChange}
                />
                <TextInput
                  id="input-email"
                  name="email"
                  type="email"
                  required
                  label="Email"
                  onChange={handleChange}
                />
              </div>
              <TextArea
                id="input-message"
                name="message"
                label="Message"
                onChange={handleChange}
              />
              <div className="flex justify-center mt-2">
                <Button type="submit">Send message</Button>
              </div>
            </Form>
          ) : (
            <FormSubmitted
              className="fadeIn"
              copy="Thanks! Your message is on its way."
            />
          )}
        </div>
      </div>
    </section>
  )
}
