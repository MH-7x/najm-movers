"use server";

import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { FormDataType } from "@/components/shared/QuoteForm";



export const SendMail = async ({
  data,
}: {
  data: FormDataType;
}): Promise<{ success: boolean; error?: string }> => {
  // Validate input
  const hasEmptyField = Object.values(data).some((val) => val.trim() === "");
  if (hasEmptyField) {
    return { success: false, error: "All fields are required." };
  }

  // Check for API key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set in environment variables.");
    return { success: false, error: "Server configuration error." };
  }

  try {
    const resend = new Resend(apiKey);

    const emailResponse = await resend.emails.send({
      from: "New Quote From Website <onboarding@resend.dev>",
      to: "nadfurniture.movers.llc@gmail.com",
      subject: "New Moving Quote Request",
      react: EmailTemplate({
        formData: data,
      }),
    });

    if (emailResponse.error) {
      console.error("Email sending error:", emailResponse.error);
      return { success: false, error: "Failed to send email." };
    }

    console.log("Email sent:", emailResponse.data.id);
    return { success: true };
  } catch (err) {
    console.error("Unexpected error in SendMail:", err);
    return {
      success: false,
      error: "An unexpected error occurred while sending the email.",
    };
  }
};
