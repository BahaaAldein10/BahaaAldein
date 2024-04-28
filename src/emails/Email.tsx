import { Heading, Html } from "@react-email/components";

type EmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function Email({ firstName, lastName, email, message }: EmailProps) {
  return (
    <Html>
      <Heading as="h1">New Hiring Inquiry</Heading>
      <Heading as="h3">
        Name: {firstName} {lastName}
      </Heading>
      <Heading as="h3">email: {email}</Heading>
      <Heading as="h3">message: {message}</Heading>
    </Html>
  );
}

export default Email;
