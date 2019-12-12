import Button from "./Button";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Preloader from "../Preloader";

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
  background-color: rgba(255, 255, 255, 0.5);
`;

const StyledHtmlForm = styled.form`
  margin: auto;
  width: fit-content;
`;

const StyledPreloader = styled(Preloader)`
  z-index: 20;
  margin: auto;
`;
const Form = ({ successContent, onCancel, configuration, submitLabel, hidePreloader, onSubmit, ...otherProps }) => {
  const { title, initialValues, direction, groups, validationSchema } = configuration;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(null);

  const cancelButtonEnabled = typeof onCancel === "function";

  useEffect(() => {
    setDisabled(loading);
  }, [loading]);

  const handleSuccess = () => {
    setSubmitted(true);
  };

  const handleError = err => {
    setSubmitted(false);
    setError(err);
  };

  const handleSubmit = (values) => {
    if(onSubmit) {
      return onSubmit({values, onSuccess: handleSuccess, onError: handleError})
    }
  };

  const handleClickCancel = () => {
    setSubmitted(false);
    if (cancelButtonEnabled) {
      onCancel();
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
            <Cover>
              <StyledPreloader />
            </Cover>
          )}
          <StyledHtmlForm onSubmit={handleSubmit} {...otherProps}>
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
                    label = extractLabel({ label, name, required });
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
                          disabled={disabled}
                          {...props}
                        />
                      )
                    );
                  })}
                </Group>
              ))}
            </FieldsWrapper>
            <Group style={{ padding: "0.5rem" }}>
              <Button type="submit"  disabled={disabled}>{submitLabel || "Submit"}</Button>
              {cancelButtonEnabled && (
                <Button onClick={handleClickCancel} secondary disabled={disabled}>
                  {"Cancel"}
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
