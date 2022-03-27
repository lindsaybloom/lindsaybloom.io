import { H1 } from "~/components/Typography"
import { BsCheckCircleFill } from "react-icons/bs"

export const FormSubmitted = ({
  copy,
  className,
}: {
  copy: string
  className?: string
}) => (
  <div
    className={`flex flex-col justify-center mt-8 items-center gap-3 ${className}`}
  >
    <H1>{copy}</H1>
    <BsCheckCircleFill className="h-6 w-6" />
  </div>
)
