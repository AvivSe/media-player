import MuiButton from "@material-ui/core/Button/Button";
import styled from "styled-components";

// TODO: put all colors in theme
const Button = styled(MuiButton)`
  background: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ secondary, theme }) => (secondary ? "#6b6b6b" : theme.palette.primary.text)};
  min-width: 10rem !important;
  font-size: 1.3rem;
  font-weight: ${({ secondary }) => (secondary ? "normal" : "bold")};
  ${({ secondary }) => secondary && "border: 1px solid #c4c4c4"};
  ${({ fullWidth }) => (fullWidth ? "width: 100%;" : null)}
`;
export default Button;
