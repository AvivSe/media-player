import { email, firstName, lastName, password, retypePassword, signUpValidationSchema } from "./global-validations";
import TextField from "../components/form-kit/TextField";

export default {
  initialValues: {
    [email]: 'avivsegal@gmail.com',
    [firstName]: 'Aviv',
    [lastName]: 'Segal',
    [password]: '123456',
    [retypePassword]: '123456',

  },
  title: "Sign Up",
  hidePreloader: false,
  flexDirection: 'column',
  validationSchema: signUpValidationSchema,
  sendForm: values =>
    new Promise(resolve => {
      setTimeout(() => {
        // TODO: backend call
        //.......
        //.......

        resolve({ error: false });
      }, 3000);
    }),
  groups: [
    {
      inputs: [
        {
          name: email,
          component: TextField,
          type: "email",
          required: true
        }
      ]
    },
    {
      inputs: [
        {
          name: firstName,
          component: TextField,
        },
        {
          name: lastName,
          component: TextField,
        }
      ]
    },
    {
      inputs: [
        {
          name: password,
          component: TextField,
          required: true,
          type: password,
        }
      ]
    },
    {
      inputs: [
        {
          name: retypePassword,
          component: TextField,
          required: true,
          type: password,
        }
      ]
    }
  ]
};
