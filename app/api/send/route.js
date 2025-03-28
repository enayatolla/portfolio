import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
   const { email, subject, message } = await req.json();
   console.log(email, subject, message);
   console.log("code -------------", process.env.RESEND_API_KEY);
   try {
      resend.emails.send({
         from: "onboarding@resend.dev",
         to: "enayatullarezaie@gmail.com",
         subject: `${subject}`,
         html: `<div>
				<strong>You have a email from ${email}</strong>	
				<p>${message}</p>
			</div>`,
      });

      return NextResponse.json(data);
   } catch (error) {
      return NextResponse.json({ error });
   }
}
