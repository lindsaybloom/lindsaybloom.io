import React from "react"
import { H1, H3, Text } from "../../components/Typography"
import { IoCloseOutline } from "react-icons/io5"
import { TextInput } from "~/components/TextInput"
import { Modal } from "~/components/Modal"
import { Button } from "~/components/Button"
import { Form } from "remix"

type EmailSignUpProps = {
  className?: string
}

export const EmailSignUp = ({ className }: EmailSignUpProps) => {
  const [state, setState] = React.useState({})

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const [open, setOpen] = React.useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => {
    setOpen(false)
    window.location.reload()
  }
  const handleSubmit = (e: React.FormEvent) => {
    let form = document.getElementById("email-signup") as HTMLFormElement
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
    <>
      <div
        className={`flex flex-col items-center border-1 p-4 w-fit self-center border-2 border-solid border-pinkLightest rounded-2xl ${className}`}
      >
        <H1 className="text-center">Sign up for my email list!</H1>
        <Text className="m-4 text-center">
          Get an email notification for every post.
        </Text>
        <Form
          id="email-signup"
          name="email-signup"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
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
      </div>
      <>
        {open && (
          <Modal>
            <div className="p-2 flex justify-end">
              <Button onClick={onClose}>
                <IoCloseOutline />
              </Button>
            </div>
            <div className="p-3 gap-2">
              <H3 className="m-0">
                Thanks for signing up! You'll receive an email when I release my
                next post.
              </H3>
            </div>
          </Modal>
        )}
      </>
    </>
  )
}
