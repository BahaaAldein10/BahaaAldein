import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/lib/actions/email.actions";
import { formSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Textarea } from "../ui/textarea";

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await sendEmail(values);

    if (result?.success) {
      toast.success("Successfully sent!");
      form.reset();
    } else {
      toast.error("Something went wrong!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <label className="block mb-1 pg-16">First Name</label>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    {...field}
                    maxLength={50}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <label className="block mb-1 pg-16">Last Name</label>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    {...field}
                    maxLength={50}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-4">
              <label className="block mb-1 pg-16">Email</label>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  maxLength={100}
                  className="input-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mt-4">
              <label className="block mb-1 pg-16">Message</label>
              <FormControl>
                <Textarea
                  placeholder="Enter your message"
                  {...field}
                  maxLength={500}
                  rows={5}
                  className="textarea-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="mt-4 pg-16"
        >
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
