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

  const emails: EmailProps[] = await req.json();
//   const {emails} = body;
  console.log(emails);
  

  if (!emails || emails.length === 0) {
    return new Response(JSON.stringify({ message: "No emails provided" }), {status: 400});
  }

  let success: string[] = [];
  let failures: string[] = [];
  
  await Promise.all(
    emails.map(async (email) => {
      try {
        const { error } = await resend.emails.send({
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
        console.log(error);
        
        if (error) {
          console.error(`Error sending to ${email.address}:`, error);
          failures.push(email.address);
        } else {
          success.push(email.name);
        }
      } catch (err) {        
        failures.push(email.address);
      }
    })
  );

  return new Response(JSON.stringify({ success, failures }), {status: 200});
}
