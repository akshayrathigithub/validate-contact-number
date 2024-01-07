import { CONTACT_TYPE } from "../src/types";
import { isValidContactNumber } from "../src/main";

// https://en.wikipedia.org/wiki/Telephone_numbers_in_Afghanistan

const AFGHANISTAN_CONTACT_NUMBER = [
  {
    input: "020-12-32654",
    output: "",
    type: CONTACT_TYPE.LANDLINE,
    isValid: true,
  },
  {
    input: "26-12-37865",
    output: "",
    type: CONTACT_TYPE.LANDLINE,
    isValid: false,
  },
  {
    input: "+93-30-1232583",
    output: "",
    type: CONTACT_TYPE.LANDLINE,
    isValid: true,
  },
  {
    input: "401233654",
    output: "",
    type: CONTACT_TYPE.LANDLINE,
    isValid: true,
  },
  {
    input: "0501-231-593",
    output: "",
    type: CONTACT_TYPE.LANDLINE,
    isValid: true,
  },
  {
    input: "+93-60-123-7531",
    output: "",
    type: CONTACT_TYPE.LANDLINE,
    isValid: true,
  },
  {
    input: "60 123 7531",
    output: "",
    type: CONTACT_TYPE.LANDLINE,
    isValid: true,
  },
  {
    input: "+93-70-1234567",
    output: "",
    type: CONTACT_TYPE.MOBILE,
    isValid: true,
  },
  {
    input: "0-77-880-7620",
    output: "",
    type: CONTACT_TYPE.MOBILE,
    isValid: true,
  },
  {
    input: "78 123 1478",
    output: "",
    type: CONTACT_TYPE.MOBILE,
    isValid: true,
  },
  {
    input: "722931436",
    output: "",
    type: CONTACT_TYPE.MOBILE,
    isValid: true,
  },
];
test.each(AFGHANISTAN_CONTACT_NUMBER)(
  "Afghanistan Test suite -> $input",
  ({ input, output, isValid }) => {
    expect(isValidContactNumber(input, "AF")).toBe(isValid);
  }
);
