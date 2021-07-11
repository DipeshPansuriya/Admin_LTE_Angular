import { Injectable } from '@angular/core';
import { switchAll } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  errorMessage(control: any) {
    for (const propertyName in control.errors) {
      if (control.errors.hasOwnProperty(propertyName) && control.touched) {
        return this.getValidatorErrorMessage(
          propertyName,
          control.errors[propertyName]
        );
      }
    }

    return null;
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config: any = {
      required: 'Required',
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidMobile: 'Invalid Mobile no',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Max length ${validatorValue.requiredLength}`,
      invalidtwoDecimal: 'Please enter decimal value with 2 precision',
      invalidthreeDecimal: 'Please enter decimal value with 3 precision',
      invalidonlynumber: 'Please enter only numbers',
    };
    return config[validatorName];
  }

  emailValidator(control: any) {
    // RFC 2822 compliant regex
    // tslint:disable-next-line:max-line-length
    let val: string;
    if (typeof control.value === 'object') {
      val = control.value.value;
    } else {
      val = control.value;
    }
    if (val !== '' && val !== undefined) {
      //alert(val);
      if (
        val.match(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        )
      ) {
        return null;
      } else {
        return { invalidEmailAddress: true };
      }
    }
    return null;
  }

  mobileValidator(control: any) {
    // RFC 2822 compliant regex
    let val: string;
    if (typeof control.value === 'object') {
      val = control.value.value;
    } else {
      val = control.value;
    }

    if (val !== '' && val !== undefined) {
      //alert(val);
      if (val.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
        return null;
      } else {
        return { invalidMobile: true };
      }
    }
    return null;
  }

  decimalthreeValidator(control: any) {
    // RFC 2822 compliant regex
    let val: string;
    if (typeof control.value === 'object') {
      val = control.value.value;
    } else {
      val = control.value;
    }

    if (val !== '' && val !== undefined) {
      //alert(val);
      if (val.match(/^[0-9]+(\.[0-9]{1,3})?$/)) {
        return null;
      } else {
        return { invalidthreeDecimal: true };
      }
    }
    return null;
  }

  decimaltwoValidator(control: any) {
    // RFC 2822 compliant regex
    let val: string;
    if (typeof control.value === 'object') {
      val = control.value.value;
    } else {
      val = control.value;
    }

    if (val !== '' && val !== undefined) {
      //alert(val);
      if (val.match(/^[0-9]+(\.[0-9]{1,2})?$/)) {
        return null;
      } else {
        return { invalidtwoDecimal: true };
      }
    }
    return null;
  }

  onlynumberValidator(control: any) {
    // RFC 2822 compliant regex
    let val: string;
    if (typeof control.value === 'object') {
      val = control.value.value;
    } else {
      val = control.value;
    }

    if (val !== '' && val !== undefined) {
      //alert(val);
      if (val.match(/^[0-9]*$/)) {
        return null;
      } else {
        return { invalidonlynumber: true };
      }
    }
    return null;
  }

  trimValue(control: any) {
    if (control !== undefined) {
      if (control.value !== undefined) {
        control.setValue(control.value.replace(/ +/g, ' ').trimLeft());
      }
    }
  }
  trimValueEnd(control: any) {
    if (control !== undefined) {
      if (control.value !== undefined) {
        control.setValue(control.value.trimEnd());
      }
    }
  }
}
