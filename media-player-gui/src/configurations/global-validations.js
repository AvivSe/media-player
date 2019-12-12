import * as yup from "yup";

export const firstName = "First Name";
export const lastName = "Last Name";
export const email = "Email";
export const password = "Password";

const tooShort = "Too short";
const tooLong = "Too long";
const notValid = "Not valid";
const required = "Required";

export const genericValidationSchema = yup.object().shape({
  [firstName]: yup
    .string()
    .max(35, tooLong),
  [lastName]: yup
    .string()
    .max(35, tooLong),
  [email]: yup
    .string()
    .email(notValid)
    .required(required),
  [password]: yup
    .string()
    .min(4, tooShort)
    .max(12, tooLong)
    .required(required)
});
