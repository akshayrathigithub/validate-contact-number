import { contactInfo } from "./list";
import { ContactNumberInfo, CONTACT_TYPE, CountryISO } from "./types";

function sanitizeNumber(number: string) {
  const allowedCharacterRegex = /(\+|\d)+/g;
  const cleanedNumberArr = number.match(allowedCharacterRegex);
  return cleanedNumberArr ? cleanedNumberArr.join("") : "";
}

function isPossibleContactNumber(number: string) {
  const allowedCharactersInContact = /^[-\+\s.()\d]*$/;
  return allowedCharactersInContact.test(number);
}

function isValidMobileNumber(
  number: string,
  countryISO: CountryISO | CountryISO[]
) {
  if (Array.isArray(countryISO)) {
    for (const iso of countryISO) {
      const isValid = getContactInfo(number, iso).valid;
      if (isValid) {
        return true;
      }
    }
    return false;
  }
  return getContactInfo(number, countryISO).valid;
}

function isValidLandlineNumber(
  number: string,
  countryISO: CountryISO | CountryISO[]
) {
  if (Array.isArray(countryISO)) {
    for (const iso of countryISO) {
      const isValid = getContactInfo(number, iso, true).valid;
      if (isValid) {
        return true;
      }
    }
    return false;
  }
  return getContactInfo(number, countryISO, true).valid;
}

function isValidContactNumber(
  number: string,
  countryISO: CountryISO | CountryISO[]
) {
  if (
    isValidMobileNumber(number, countryISO) ||
    isValidLandlineNumber(number, countryISO)
  ) {
    return true;
  }
  return false;
}

function getContactInfo(
  number: string,
  countryISO: CountryISO,
  isLandline?: boolean
): ContactNumberInfo {
  const countryDetails = contactInfo[countryISO];
  if (!countryDetails) {
    throw new Error(`${countryISO} is not a valid country ISO`);
  }
  let regexString = countryDetails.mobileRegex;
  if (isLandline) {
    regexString = countryDetails.landLineRegex;
  }
  if (isValidNumber(number, regexString)) {
    return {
      valid: true,
      countryISO: countryISO,
      contactNumber: number,
      dialCode: countryDetails.dialCode,
      countryName: countryDetails.name,
      contactType: isLandline ? CONTACT_TYPE.LANDLINE : CONTACT_TYPE.MOBILE,
    };
  }
  return { valid: false };
}

function isValidNumber(number: string, regexString: string) {
  if (isPossibleContactNumber(number)) {
    const phoneNumber = sanitizeNumber(number);
    const phoneNumberRegex = new RegExp(regexString);
    if (regexString && phoneNumberRegex.test(phoneNumber)) {
      return true;
    }
  }
  return false;
}

function validateContactNumber(
  number: string,
  countryISO?: CountryISO | CountryISO[]
): ContactNumberInfo {
  if (Array.isArray(countryISO)) {
    for (const iso of countryISO) {
      const validNumber = getContactInfo(number, iso).valid
        ? getContactInfo(number, iso)
        : getContactInfo(number, iso, true);
      if (validNumber.valid) {
        return validNumber;
      }
    }
  } else if (countryISO) {
    const validNumber = getContactInfo(number, countryISO).valid
      ? getContactInfo(number, countryISO)
      : getContactInfo(number, countryISO, true);
    if (validNumber.valid) {
      return validNumber;
    }
  } else {
    for (const key in contactInfo) {
      const iso = key as CountryISO;
      const validNumber = getContactInfo(number, iso).valid
        ? getContactInfo(number, iso)
        : getContactInfo(number, iso, true);
      if (validNumber.valid) {
        return validNumber;
      }
    }
  }
  return { valid: false };
}

function formatContactNumber(number: string, format: string) {
  const contactNumber = sanitizeNumber(number);
  const formatArr = format.split("");
  let formattedNumber = format;
  let indexCount = 0;
  let lastDigitIndex = -1;

  formatArr.forEach((char, index) => {
    if (char === "d" && contactNumber[indexCount]) {
      formattedNumber =
        formattedNumber.substring(0, index) +
        contactNumber[indexCount] +
        formattedNumber.substring(index + 1);
      indexCount++;
      lastDigitIndex = index;
    }
  });
  return lastDigitIndex > -1
    ? formattedNumber.slice(0, lastDigitIndex + 1)
    : formattedNumber;
}

export {
  formatContactNumber,
  validateContactNumber,
  isValidContactNumber,
  isValidLandlineNumber,
  isValidMobileNumber,
};
