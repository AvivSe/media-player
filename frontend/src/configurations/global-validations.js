import * as yup from "yup";

export const firstName = "firstName";
export const lastName = "lastName";
export const email = "email";
export const password = "password";
export const retypePassword = "retypePassword";

export const fieldToLabelMap = {
  [firstName]: "First Name",
  [lastName]: "Last Name",
  [email]: "Email",
  [password]: "Password",
  [retypePassword]: "Retype password",
};

const tooShort = "Too short";
const tooLong = "Too long";
const required = "Required";
const emailNotValid = "Email not valid";

export const signUpValidationSchema = yup.object().shape({
  [firstName]: yup.string().max(35, tooLong),
  [lastName]: yup.string().max(35, tooLong),
  [email]: yup
    .string()
    .email(emailNotValid)
    .max(35, tooLong)
    .required(required),
  [password]: yup
    .string()
    .min(4, tooShort)
    .max(12, tooLong)
    .required(required),
  [retypePassword]: yup.string().oneOf([yup.ref(password), null], 'Passwords do not math').required('Retype password')
});

export const loginValidationSchema = yup.object().shape({
  [email]: yup
    .string()
    .email(emailNotValid)
    .max(35, tooLong)
    .required(required),
  [password]: yup
    .string()
    .min(4, tooShort)
    .max(12, tooLong)
    .required(required),
});
