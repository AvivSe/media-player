import { email, loginValidationSchema, password } from "./global-validations";
import TextField from "../components/form-kit/TextField";
import authService from "../services/auth.service";

export default {
  initialValues: {
    [email]: "avivsegal@gmail.com",
    [password]: "123456",
  },
  flexDirection: 'column',
  hidePreloader: false,
  validationSchema: loginValidationSchema,
  sendForm: ({ [email]: username, [password]: _password }) => {
    return authService.login({ username, password: _password });
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
          type: password,
        }
      ]
    }
  ]
};
