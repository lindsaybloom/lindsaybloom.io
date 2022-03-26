import React from "react"
import { H1, H3, Text } from "~/components/Typography"
import { TextInput } from "~/components/TextInput"
import { TextArea } from "~/components/TextArea"
import { Modal } from "~/components/Modal"
import { Form } from "remix"
import { Button } from "~/components/Button"
import { useTransition } from "remix"

function encode(data: any) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

export const Contact = () => {
  const [state, setState] = React.useState({})

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const [open, setOpen] = React.useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  const handleSubmit = (e: React.FormEvent) => {
    let form = document.getElementById("contact-form") as HTMLFormElement
    let formData = new FormData(form)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch(error => alert(error))
    e.preventDefault()
    onOpen()
  }

  const transition = useTransition()

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

        <Text className="my-6">Or, fill out this form!</Text>

        <Form
          id="contact-form"
          name="contact-form"
          method="post"
          data-netlify="true"
          netlify-honeypot="form-name"
          encType="application/x-www-form-urlencoded"
          onSubmit={handleSubmit}
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
      </div>
      {open && (
        <Modal>
          <div className="p-3 gap-2">
            <H3 className="m-0">
              Thanks for reaching out! I'll do my best to get back to you as
              soon as possible.
            </H3>
          </div>
        </Modal>
      )}
    </section>
  )
}
