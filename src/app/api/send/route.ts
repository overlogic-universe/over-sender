import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

interface EmailProps {
  address: string;
  name: string;
}

export async function POST(
  req: Request,
) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({message: "Method not Allowed"}), {status: 500});
  }

  const email: EmailProps = await req.json();

  const { data, error } = await resend.emails.send({
    from: "Fosti UMS <fostiums@ums-iid.com>",
    to: email.address,
    subject: "Proposal Sponsorship FOSTIFEST 2024 - FOSTI UMS",
    react: EmailTemplate({
      receiverName: email.name,
      senderContact: "0895383211221",
      senderEmail: "fostiums@gmail.com",
      senderName: "Fosti UMS",
      senderPosition: "Posisi",
    }),
  });

  return new Response(JSON.stringify({ data, error }), {status: 200});
}
