"use server";

import { Resend } from "resend";
import { validateString , getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    // simple server-side validation
    if (!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email",
        }
    }
    if (!validateString(message, 5000)){
        return {
            error : "Invalid message",
        };
    }

    // console.log("Running on server"); //เอาไว้เช็ค For log check
    // console.log(formData.get("senderEmail"));
    // console.log(formData.get("message"));



try {
    await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "phonlapats.2002@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail as string,
        text: message as string,
        });
    } catch (error: unknown) {

        return  {
            error: getErrorMessage(error),
        }
    }
};
