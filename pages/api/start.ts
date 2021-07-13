import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { body, method } = req;

    // Extract the email and captcha code from the request body
    const { name, email, phone, message, captcha } = body;
    console.log(body)
    const googleSheetApiUri = 'https://script.google.com/macros/s/AKfycbzaY29_ZSAl6MFosSZhq2CrlEI4VJVnTMvrd7fusC3lAVdoEUcHU1I6uwgcjWSK1zWG/exec'
    // const serverlessForm = new FormData();
    // serverlessForm.append('name', name);
    // serverlessForm.append('email', email);
    // serverlessForm.append('phone', phone);
    // serverlessForm.append('message', message);

    if (method === "POST") {
        // If email or captcha are missing return an error
        if (!email || !captcha) {
            return res.status(422).json({
                message: "Invalid request, please provide the required fields",
            });
        }

        try {
            // Ping the google recaptcha verify API to verify the captcha code you received
            const response = await fetch(
                `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                    },
                    method: "POST",
                }
            );
            const captchaValidation = await response.json();

            if (captchaValidation.success) {

                const formSubmission = await fetch(googleSheetApiUri, {
                    method: 'POST',
                    body: JSON.stringify({ name, email, phone, message }),

                });;

                if (formSubmission['status'] == 200) {
                    // Return 200 if everything is successful
                    return res.status(200).send("Your form has been submitted!,We will get back to you soon. Have a great day!");

                } else {

                    return res.status(422).json({
                        message: "Something went wrong!, Please try after some time",
                    });
                }


            }
            else {

                return res.status(422).json({
                    message: "Invalid request, Invalid captcha code",
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(422).json({ message: "Something went wrong" });
        }
    }
    // Return 404 if someone pings the API with a method other than
    // POST
    return res.status(404).send("Not found");
}