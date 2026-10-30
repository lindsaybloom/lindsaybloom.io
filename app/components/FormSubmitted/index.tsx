import { H3 } from "~/components/Typography"
import { BsCheckCircleFill } from "react-icons/bs"

export const FormSubmitted = ({
  copy,
  className = "",
}: {
  copy: string
  className?: string
}) => (
  <div
    className={`flex flex-col justify-center items-center gap-4 py-8 ${className}`}
  >
    <BsCheckCircleFill className="h-10 w-10 text-accent" />
    <H3>{copy}</H3>
  </div>
)
