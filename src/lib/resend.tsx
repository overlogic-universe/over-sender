import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendMultipleEmail = async (emails: EmailProps[]): Promise<EmailResponse> => {
  let success: string[] = [];
  let failures: string[] = [];
  emails.forEach(async (email) => {
    console.log(`Sending to ${email.address}`);
    
    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email.address,
      subject: "Proposal Sponsorship FOSTIFEST 2024 - FOSTI UMS",
      react: EmailTemplate({
        receiverName: email.address,
        senderContact: "0895383211221",
        senderEmail: "fostiums@gmail.com",
        senderName: "Fosti UMS",
        senderPosition: "Posisi",
      }),
    });
    if (error) {
      console.log(error);
      
      failures.push(email.address);
    } else {
      success.push(email.name);
    }
  });
  return { success, failures };
};
