import { email, password, genericValidationSchema, } from "./global-validations";
import TextField from "../components/form-kit/TextField";
import authService from "../services/auth.service"
export default {
  initialValues: {
    [email]: 'avivsegal@gmail.com',
    [password]: '123456',
  },
  hidePreloader: true,
  validationSchema: genericValidationSchema,
  sendForm: values => {
    return authService.authenticate(values);
  },
  groups: [
    {
      title: "", // optional
      inputs: [
        {
          name: email,
          component: TextField,
          type: "email",
          required: true
        },
        {
          name: password,
          component: TextField,
          required: true,
          autoComplete: "new-password"
        }
      ]
    }
  ]
};
