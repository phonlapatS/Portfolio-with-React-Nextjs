"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));

    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "phonlapats.2002@gmail.com",
        subject: "Message from contact form",
        text: `Email: ${formData.get("senderEmail")}, Message: ${formData.get("message")}`,
    });
};