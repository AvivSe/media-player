import { email, firstName, genericValidationSchema, lastName, password } from "./global-validations";
import TextField from "../components/form-kit/TextField";

export default {
  initialValues: {
    [email]: "", //'avivsegal@gmail.com',
    [firstName]: "", //'Aviv',
    [lastName]: "", //'Segal',
    [password]: "" //'123456',
  },
  hidePreloader: false,
  validationSchema: genericValidationSchema,
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
      title: "", // optional
      inputs: [
        {
          name: firstName,
          component: TextField,
          required: false
        },
        {
          name: lastName,
          component: TextField,
          required: false
        }
      ]
    },
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
          name: password,
          component: TextField,
          required: true,
          autoComplete: "new-password",
        }
      ]
    },
    {
      inputs: [
        {
          name: `_${password}`,
          component: TextField,
          required: true,
          autoComplete: "new-password",
        }
      ]
    }
  ]
};
