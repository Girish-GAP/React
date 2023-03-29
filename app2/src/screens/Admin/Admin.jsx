import React from 'react'
import { useRef, useState } from 'react';

import { AdminForm } from './AdminForm'
import Form from '../../components/Form';
import DropDownInput from '../../components/DropDownInput';
import { Grid } from '@mui/material';
import dayjs from "dayjs";
import DateInput from '../../components/DateInput/DateInput';

export const Admin = () => {

    let adminForm = useRef();
    const [hasError, setHasError] = useState(false);
    const [dates, setDates] = useState({ startDate: dayjs().date(1).format("YYYY-MM-DD"), endDate: dayjs().endOf('month').format("YYYY-MM-DD") });

    const handleClick = (e) => {
        e.preventDefault();

        const { getFormData } = adminForm.current

        const { formData, isFormValid } = getFormData();
        console.log(formData.roles)
    }

    const handleDate = (value, field, error) => {
        console.log(value)
        if (field === 'startDate') {
          setDates({ ...dates, startDate: value });
        } else {
          setDates({ ...dates, endDate: value });
        }
    
      }

    return (
        <div>
            <form onSubmit={handleClick}>
                <Form
                    hasError={hasError}
                    ref={adminForm}
                    model={AdminForm()}
                    values={{}}
                />


                <Grid item xs={4} mb={2}>
                    <DateInput field="startDate" value={dates.startDate} textChange={handleDate} onChange={function (value, keyboardInputValue){
                        throw new Error("Function not implemented.");
                    }} renderInput={function (props) {
                        throw new Error("Function not implemented.");   
                    }} />
                </Grid>


                <button>YO</button>
            </form>
        </div>
    )
}
