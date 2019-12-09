import Button from '@material-ui/core/Button/Button';
import styled from 'styled-components';

// TODO: put all colors in theme
export default styled(Button)`
    background: ${({secondary, theme}) =>
  secondary
    ? 'white'
    : `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`};
    color: ${({secondary}) => (secondary ? '#6b6b6b' : 'white')};
    min-width: 10rem !important;
    font-size: 1.3rem;
    font-weight: ${({secondary}) => (secondary ? 'normal' : 'bold')};
    ${({secondary}) => secondary && 'border: 1px solid #c4c4c4'};
    ${({fullWidth}) => (fullWidth ? 'width: 100%;' : null)}
`;
