import {FormDataModel} from "../../components/Form";
import { clearStorage } from "../storage";


export const getFormFields: (formData: FormDataModel) => {
    [p: string]: string | number | boolean;
} = (formData: FormDataModel) => {
    const fields: { [key: string]: string | number | boolean } = {};
    for (const key in formData) {
        if (!key.includes('Error')) {
            fields[key] = formData[key];
        }
    }
    return fields;
};

export const removeErrorFieldsFromValues = (formData: FormDataModel) => {
    const fields: FormDataModel = {};
    for (const key in formData) {
        if (!key.includes('Error')) {
            fields[key] = formData[key];
        }
    }
    return fields;
};

export const createDropdownData = (data:any = [], keys:any = []) => {
    const createdArray: { value: any; label: any; }[] = [];
    if (data && data?.length) {
      data?.forEach((item:any) => {
        createdArray?.push({
          value: item[keys[0]],
          label: item[keys[1]],
        });
      });
    }
    return createdArray;
  };
  
  /**
   * This function will extract `value` from selected multiple dropdown. This will only used when Dropdown component has isMulti: true
   * @param values - selected values from dropdown
   * @returns {[]}
   */
  export const fetchIdsFromSelectedDropdownValues = (values = []) => {
    const extractedValue: any[] = [];
    if (values && values.length) {
      values.forEach((item:any) => {
        extractedValue.push(item.value);
      });
    }
    return extractedValue;
  };
  export const fetchLabelsFromSelectedDropdownValues = (values = []) => {
    const extractedValue: any[] = [];
    if (values && values.length) {
      values.forEach((item:any) => {
        extractedValue.push(item.label);
      });
    }
    return extractedValue.join(',');
  };
  export const logoutUser = () => {
    clearStorage('all');
    window.location.reload()
  }