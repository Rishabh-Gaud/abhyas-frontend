import emailjs from "emailjs-com";
export const sendEmail = (formData:any) => {
  emailjs
    .send(
      String(process.env.service),
      String(process.env.template),
      formData,
      String(process.env.key)
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
};
