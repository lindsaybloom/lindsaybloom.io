import React from "react"
import { H1, H3, Text } from "~/components/Typography"
import { TextInput } from "~/components/TextInput"
import { TextArea } from "~/components/TextArea"
import { Modal } from "~/components/Modal"

function encode(data: any) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

const Contact = () => {
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

  return (
    <section id="contact">
      <div className="mt-6 sm:mb-6 lg:mb-0 items-center">
        <H1>Get in touch with me!</H1>
        <Text>
          Please email me directly at{" "}
          <a href="mailto: lindsaybloomdev@gmail.com">
            lindsaybloomdev@gmail.com
          </a>
          .
        </Text>

        <a className="mt-6" href="mailto: lindsaybloomdev@gmail.com">
          <div className="h-80 w-150 items-center justify-center rounded-2xl border-2 border-solid">
            <Text>Email me!</Text>
          </div>
        </a>

        <Text className="my-6">Or, fill out this form!</Text>

        <form
          id="contact-form"
          name="contact-form"
          method="POST"
          data-netlify="true"
          netlify-honeypot="form-name"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="flex">
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
              input-type="email"
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
          <div className="mt-6 flex gap-3">
            <button type="submit">Submit</button>
          </div>
        </form>
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

export default Contact
