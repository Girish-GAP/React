

const regex = {
    email: new RegExp(
        '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}])|(([a-zA-Z\\-\\d]+\\.)+[a-zA-Z]{2,}))$',
    ),
    mobile: new RegExp(/^\d{10}$/),
    username: new RegExp(/^[a-zA-Z\d](?:[a-zA-Z\d_-]*[a-zA-Z\d])?$/),
    url: new RegExp(
        '^(https?://)?(www\\.)?([-a-z\\d]{1,63}\\.)*?[a-z\\d][-a-z\\d]{0,61}[a-z\\d]\\.[a-z]{2,6}(/[-\\w@+.~#?&/=%]*)?$',
    ),
    price: new RegExp(/^\d+(\.\d{1,2})?$/),
    number: new RegExp('^\\d+$'),
    amount: new RegExp(/^[+]?(\d+(?:[.]\d*)?|\.\d+)$/),
    floatNumber: new RegExp(/^\d+(\.\d{1,2})?$/),
    amountRefunded: new RegExp(/^d{10}$/),
    referenceNumber: new RegExp('^[a-zA-Z\\d]+$'),
    GST: new RegExp(
        /^(0[1-9]|[1-2]\d|3[0-5])([a-zA-Z]{5}\d{4}[a-zA-Z][1-9a-zA-Z][zZ][\da-zA-Z])+$/,
    ),
    Time: new RegExp('^(\\d|0\\d|1\\d|2[0-3]):[0-5]\\d$'),
    pinCode: new RegExp(/^\d{6}$/),
    name: new RegExp(/^[a-zA-Z. ]+$/),
    password: new RegExp(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d])(?!.*\s).{8,32}$/,
    ),
};

export class Validators {
    static password(value, message) {
        const result = regex.password.test(value);
        if (!result) {
            return { error: true, message };
        }
        return false;
    }
    static time(value, message) {
        if (value) {
          const result = regex.Time.test(value);
          if (!result) return { error: true, message };
        }
      }

    static pinCode(value, message) {
        if (value) {
            const result = regex.pinCode.test(value);
            if (!result) {
                return { error: true, message };
            }
        }
    }

    static validUrl(value, message) {
        if (value) {
            const result = regex.url.test(value.toLowerCase());
            if (!result) {
                return { error: true, message };
            }
        }
    }

    static email(value, message) {
        if (value) {
            const result = regex.email.test(value);
            if (!result) {
                return { error: true, message };
            }
        }
    }

    static Name(value, message) {
        if (value) {
            const result = regex.name.test(value);
            if (!result) {
                return { error: true, message };
            }
        }
    }

    static username(value, message) {
        if (value) {
            const result = regex.username.test(value);
            if (!result) {
                return { error: true, message };
            }
        }
    }

    static mobile(value, message) {
        if (value) {
            const result = regex.mobile.test(value);
            if (!result) {
                return { error: true, message };
            }
        }
    }

    static required(value, message) {
        if (!value || !value.toString().trim().length || value === '') {
            return { error: true, message };
        }
        return false;
    }

    static maxCharLimit(value, message, num) {
        const length = value.trim() ? value.toString().length : 0;
        if (length !== 0 && length > num) {
            return { error: true, message };
        }
        return false;
    }

    static minCharLimit(value, message, num) {
        const length = value.trim() ? value.toString().length : 0;
        if (length < num) {
            return { error: true, message };
        }
        return false;
    }

    static minDate(value, message, date) {
        if (new Date(value).getTime() < new Date(date).getTime()) {
            return { error: true, message };
        }
        return false;
    }

    static maxDate(value, message, date) {
        if (new Date(value).getTime() > new Date(date).getTime()) {
            return { error: true, message };
        }
        return false;
    }

    static number(value, message) {
        const length = value ? value.toString().length : 0;

        if (length > 0) {
            const result = regex.number.test(value);
            if (!result) {
                return { error: true, message };
            }
        }

        return false;
    }
    static max100(value, message) {
        if (parseFloat(value) > 100) {
          return { error: true, message };
        }
      }

    static amount(value, message) {
        const length = value ? value.toString().length : 0;

        if (length > 0) {
            const result = regex.amount.test(value);
            if (!result) {
                return { error: true, message };
            }
        }

        return false;
    }

    static phoneNumber(value, message) {
        const length = value ? value.toString().length : 0;

        if (length > 0) {
            const result = regex.number.test(value);
            if (!result || length < 10 || length > 10) {
                return { error: true, message };
            }
        }

        return false;
    }

    static minCount(value, message, num) {
        const length = value ? value.length : 0;
        if (length < num) {
            return { error: true, message };
        }
        return false;
    }

    static min(value, message, num) {
        if (parseFloat(value) < num) {
            return { error: true, message };
        }
        return false;
    }

    static max(value, message, num) {
        if (parseFloat(value) > num) {
            return { error: true, message };
        }
        return false;
    }

    static floatNumber(value, message) {
        const length = value ? value.toString().length : 0;

        if (length > 0) {
            const result = regex.floatNumber.test(value);
            if (!result) {
                return { error: true, message };
            }
        }

        return false;
    }
}

export const validateInput = (validators, value) => {
    if (validators && validators.length) {
        for (let i = 0; i < validators.length; i++) {
            const error = validators[i].check(
                value,
                validators[i].message,
                validators[i]?.num,
            );
            if (error) {
                return error;
            }
        }
    }
    return false;
};
