import React, { Component, ReactElement } from "react";
import InputField from "../Input";
import { Grid, TextFieldProps } from "@mui/material";
// import "./form.scss";
import DropDownInput from "../DropDownInput";
import DateInput from "../DateInput/DateInput";
import dayjs from "dayjs";



export default class Form extends Component {
  state = {
    formData: {},
    isFormValid: false,
  };

  componentDidMount() {
    this.prepareFormData();
  }

  componentDidUpdate(prevProps) {
    const { values, strings } = this.props;
    if (
      this.props.isFormUpdated !== prevProps.isFormUpdated ||
      strings !== prevProps.strings ||
      (values && Object.keys(values).length > 0 && values !== prevProps.values)
    ) {
      this.prepareFormData();
    }
  }

  handleChange = (
    value,
    field,
    error,
    deleted 
  ) => {
    console.log("VALUE", value);
    const formData= this.state.formData;
    formData[field] = value;
    if (deleted?.deletedField === field) {
      formData[field + "deleted"] = deleted?.DeletedFile;
    }
    formData[field + "Error"] = error && error.error;
    this.setState({
      formData,
      isFormValid: this.validateForm(formData),
    });
    if (this.props.onChange) {
      // const isFormValid = this.validateForm(formData);
      this.props.onChange(field, value, formData, deleted);
    }
  };

  validateForm = (formData) => {
    const { model } = this.props;
    let isFormValid = true;
    model.forEach((item) => {
      if (item.required || formData[item.field + "Error"]) {
        isFormValid = isFormValid && !formData[item.field + "Error"];
      }
    });
    return isFormValid;
  };


  //  current formData return 
  getFormData = () => {
    const { formData, isFormValid } = this.state;
    return { formData, isFormValid };
  };

  resetForm = () => {
    this.prepareFormData();
  };

  prepareFormData() {
    const { model, values } = this.props;
    const formData = {};
    if (values && Object.keys(values).length !== 0) {
      model.forEach((item) => {
        formData[item.field] =
          values &&
            (values[item.field] || values[item.field] === 0) &&
            values[item.field] !== ""
            ? values[item.field]
            : "";
        if (formData[item.field] || !item.required) {
          formData[item.field + "Error"] = values && values[item.field] && values[item.field && item.field !== ''] && item.required ? true : false;
        } else {
          formData[item.field + 'Error'] =
            values && values[item.field] && values[item.field && item.field !== ''] && item.required ? false : true;
        }
      });
      this.setState({ formData, isFormValid: this.validateForm(formData) });
    } else {
      model.forEach((item) => {
        formData[item.field] =
          values && values[item.field] ? values[item.field] : "";
        formData[item.field + "Error"] = item.required;
      });

      this.setState({ formData, isFormValid: this.validateForm(formData) });
    }
  }

  renderFormFields() {
    const { model, hasError, dropdownData } = this.props;
    const { formData } = this.state;
    const arrayOfFields = [];
    model.forEach((item, key) => {
      switch (item.type) {
        case "text":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <InputField
                disabled={item.disabled || false}
                autoFocus={item.autoFocus || false}
                variant={item.variant}
                size={item.size}
                inputProps={item.inputProps || {}}
                hasError={hasError || false}
                field={item.field}
                multiline={item.multiline}
                rows={item.rows}
                inputValue={
                  formData[item.field] || formData[item.field] === 0
                    ? (formData[item.field])
                    : ""
                }
                style={item.style}
                typeValue={item.typeValue || ""}
                label={item.label || ""}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] )
                    : false
                }
                validators={item.validators}
                className={item.className}
                textChange={this.handleChange}
                sx={item.sx}
              />
            </Grid>
          );
          break;
        case "drop-down":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <DropDownInput
                options={item.options}
                className={""}
                id={""}
                style={item.style}
                labelId={""}
                disabled={item.disabled || false}
                inputProps={item.inputProps || {}}
                hasError={hasError || false}
                field={item.field}
                inputValue={
                  formData[item.field] || formData[item.field] === 0
                    ? (formData[item.field])
                    : ""
                }
                placeholder={item.placeholder}
                label={item.label || ""}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] )
                    : false
                }
                validators={item.validators}
                onChange={this.handleChange}
                size={item.size}
              />
            </Grid>
          );
          break;
        case "date":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <DateInput
                label={item.label}
                validators={item.validators}
                textChange={this.handleChange}
                value={
                  formData[item.field] || formData[item.field] === 0
                    ? dayjs(new Date(formData[item.field]))
                    : null
                }
                field={item.field}
                className={item.className}
                size={item.size}
                onChange={(e ) => e}
                disablePast={item.disablePast}
                disableFuture={item.disableFuture}
                placeholder={item.placeholder}
                hasError={hasError || false}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"])
                    : false
                }
                
                renderInput={(params) => (
                  <InputField
                    size={item.size}
                    hasError={hasError || false}
                    inputValue={params.value}
                    fieldError={
                      item.field
                        ? (formData[item.field + "Error"])
                        : false
                    }
                    {...params}
                  />
                )}
              />
            </Grid>
          );
          break;
        default:
          break;
      }
    });

    return arrayOfFields;
  }

  render() {
    return <>{this.renderFormFields()}</>;
  }
}
