import React, { FC, useState } from "react";
import { DesktopDatePicker, DesktopDatePickerProps, LocalizationProvider } from "@mui/x-date-pickers";
import { validateInput } from "../../utils/validators/Validators";
import { Dayjs } from "dayjs";
import { identifiers } from "../../utils/constants/identifiers";
import { Stack, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";



const DateInput = ({
  hasError,
  validators,
  textChange,
  className,
  field,
  value,
  placeholder,
  fieldError,
  disabled,
  disableFuture,
  label,
  typeValue,
  size,
  ...rest
}) => {
  const [error, setError] = useState(null);
  const handleChange = ()=> {

    if (value) {
      const inputError = validateInput(
        validators ,
        value.format(identifiers.date_input)
      );
      textChange(
        value.format(identifiers.date_input),
        field,
        inputError
      );
      setError(inputError);
    }
  };
  const onKeyDown = (e) => {
    e.preventDefault();
  };
  return (
    <Stack sx={{ '&.inline-row .input-field': { width: 'auto' }, '&.inline-row': { gap: '20px', alignItems: 'center' } }} direction={className === 'inline-row' ? 'row' : 'column'} className={className}>
      {/* <Typography variant="body2" mb={1}>{label}</Typography> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <Typography variant="body2" mb={1}>{label}</Typography> */}
        <DesktopDatePicker
          {...rest}
          label={label}
          inputFormat={identifiers.date_format}
          value={value}
          onChange={(newValue) => handleChange(newValue)}
          disabled={disabled}
          className={`input-field ${fieldError}`}
          OpenPickerButtonProps={{ color: "primary" }}
          disableFuture={disableFuture}
          renderInput={(params) => (
            <TextField onKeyDown={onKeyDown} {...params}
              sx={{ '&.input-field': { backgroundColor: '#fff' } }}
              size='medium'
              helperText={error && error.error ? error.message : !error && (hasError && fieldError) ? 'This field is required' : ''}
              error={((error && error.error) || (!error && hasError && fieldError)) ? true : false}
            />
          )}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export default DateInput;
