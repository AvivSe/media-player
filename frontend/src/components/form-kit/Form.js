import Button from "./Button";
import { Formik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { fieldToLabelMap } from "../../configurations/global-validations";
import LinearProgress from "@material-ui/core/LinearProgress";

const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: space-between;
`;

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction === "column" ? "row" : "column")};
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Cover = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  
`;

const StyledHtmlForm = styled.form`
  margin: auto;
  padding: 1rem;
  width: fit-content;
  display: flex;
  flex-direction: ${({flexDirection})=> flexDirection || 'row'};
`;

const Form = ({ successContent, onSecondaryButtonClick,secondaryButtonLabel, configuration, loading, submitLabel, hidePreloader, onSubmit, ...otherProps }) => {
  const { title, initialValues, direction, groups, validationSchema } = configuration;
  const [submitted, setSubmitted] = useState(false);
  const secondaryButtonEnabled = !!onSecondaryButtonClick && typeof onSecondaryButtonClick === "function";

  const handleSuccess = () => {
    setSubmitted(true);
  };

  const handleError = err => {
    setSubmitted(false);
  };

  const handleSubmit = (values) => {
    if(onSubmit) {
      return onSubmit({values, onSuccess: handleSuccess, onError: handleError})
    }
  };

  const handleSecondaryButtonClick = () => {
    setSubmitted(false);
    if (secondaryButtonEnabled) {
      onSecondaryButtonClick();
    }
  };

  const extractLabel = ({ label, name, required }) => {
    const optionalHelperText = !required ? " (Optional)" : "";
    if (Boolean(label)) {
      return `${label}${optionalHelperText}`;
    }
    if (Boolean(name)) {
      return `${name}${optionalHelperText}`;
    }

    return null;
  };

  return submitted ? (
    successContent || <div>Success</div>
  ) : (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
        <Wrapper>

          {loading && !configuration.hidePreloader && (
            <>
              <LinearProgress color={"secondary"} />
              <Cover>
              {/*<StyledPreloader />*/}
            </Cover>
            </>
          )}
          <StyledHtmlForm flexDirection={configuration.flexDirection} onSubmit={handleSubmit} {...otherProps}>
            {Boolean(title) && (
              <div>
                <h2>{title}</h2>
              </div>
            )}
            <FieldsWrapper direction={direction}>
              {groups.map(({ title, inputs }, index) => (
                <Group key={index} direction={direction}>
                  {inputs.map(({ name, component, required, options, label, hide, ...props }) => {
                    const Input = component;
                    label = extractLabel({ label: fieldToLabelMap[label], name, required });
                    return (
                      !hide && (
                        <Input
                          key={name}
                          id={name}
                          name={name}
                          value={values[name]}
                          error={touched[name] && Boolean(errors[name])}
                          helperText={touched[name] ? errors[name] : null}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          options={options}
                          label={label}
                          fullWidth={inputs.length === 1}
                          style={{ margin: "0.5rem" }}
                          disabled={loading}
                          {...props}
                        />
                      )
                    );
                  })}
                </Group>
              ))}
            </FieldsWrapper>
            <Group style={{ padding: "0.5rem" }}>
              <Button type="submit"  disabled={loading}> {submitLabel || "Submit"}</Button>
              {secondaryButtonEnabled && (
                <Button onClick={handleSecondaryButtonClick} disabled={loading}>
                  {secondaryButtonLabel || "Cancel"}
                </Button>
              )}
            </Group>
          </StyledHtmlForm>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Form;
