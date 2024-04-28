"use server";

import Email from "@/emails/Email";
import { Resend } from "resend";
import { z } from "zod";
import { handleError } from "../utils";
import { formSchema } from "../validator";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailProps = z.infer<typeof formSchema>;

export const sendEmail = async (data: EmailProps) => {
  const result = formSchema.safeParse(data);

  if (result.success) {
    const { firstName, lastName, email, message } = result.data;

    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "seniorwizard10@gmail.com",
        subject: "Hiring Inquiry",
        react: Email({ firstName, lastName, email, message }),
      });

      return { success: true, data };
    } catch (error) {
      handleError(error);
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
