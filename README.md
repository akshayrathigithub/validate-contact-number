# :package: validate-contact-number :package:

![Test suite](https://github.com/jankapunkt/npm-package-template/workflows/Test%20suite/badge.svg)
[![Build Status](https://travis-ci.org/jankapunkt/npm-package-template.svg?branch=master)](https://travis-ci.org/jankapunkt/npm-package-template)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![GitHub](https://img.shields.io/github/license/jankapunkt/npm-package-template)

## About this package

A simpler and smaller NPM package which can be
used to verify and format contact numbers.
The package takes advantage of Regex patterns,
rather than relying on Google’s [libphonenumber](https://github.com/google/libphonenumber)
library’s validation rules, to validate different types
of contact numbers for different countries.

## Installation

With NPM:

```
npm install validate-contact-number --save
```

With Yarn:

```
yarn add validate-contact-number
```

## Usage

With Frontend frameworks like React, Angular, Vue, Svelte.

```ts
import { isValidContactNumber } from "validate-contact-number";
```

In Node:

```ts
const validateContactNumberPackage = require("validate-contact-number");
```

In React-Native:

```ts
import { isValidContactNumber } from "validate-contact-number";
```

## API

```ts
import {
  isValidContactNumber,
  isValidLandlineNumber,
  isValidMobileNumber,
  validateContactNumber,
  formatContactNumber,
} from "validate-contact-number";
```

### isValidContactNumber

Returns a boolean `(true | false)` based on whether a contact number (mobile | landline) belongs to a country. The functions accepts two argument `contactNumber` and `countryISO | countryISO[]`

#### Example:

```ts
// javascript
import { isValidContactNumber } from "validate-contact-number";
const validContactNumber = "9876543210"; // same goes for 09876543210, +919876543210
const countryISO = "IN"; // Indian ISO

console.log(isValidContactNumber(validContactNumber, countryISO)); // true
```

```ts
import { isValidContactNumber } from "validate-contact-number";
const validContactNumber = "2212345678"; // same goes for +91 22 1234 5678
const countryISOList = ["IN", "MY", "AF"]; // a list of countries

console.log(isValidContactNumber(validContactNumber, countryISOList)); // true
```

### isValidMobileNumber

Returns a boolean `(true | false)` based on whether a mobile number belongs to a country. The functions accepts two argument `mobileNumber` and `countryISO | countryISO[]`

#### Example:

```ts
import { isValidMobileNumber } from "validate-contact-number";
const validMobileNumber = "9876543210"; // same goes for 09876543210, +919876543210
const countryISO = "IN"; // Indian ISO

console.log(isValidMobileNumber(validMobileNumber, countryISO)); // true
```

```ts
import { isValidMobileNumber } from "validate-contact-number";
const validMobileNumber = "9876543210"; // same goes for 09876543210, +919876543210
const countryISOList = ["IN", "MY", "AF"]; // a list of countries

console.log(isValidMobileNumber(validMobileNumber, countryISOList)); // true
```

### isValidLandlineNumber

Returns a boolean `(true | false)` based on whether a landline number belongs to a country. The functions accepts two argument `landlineNumber` and `countryISO | countryISO[]`

#### Example:

```ts
import { isValidLandlineNumber } from "validate-contact-number";
const validLandlineNumber = "+91 22 1234 5678"; // same goes for 22 1234 5678
const countryISO = "IN"; // Indian ISO

console.log(isValidLandlineNumber(validLandlineNumber, countryISO)); // true
```

```ts
import { isValidLandlineNumber } from "validate-contact-number";
const validLandlineNumber = "+91 22 1234 5678"; // same goes for 22 1234 5678
const countryISOList = ["IN", "MY", "AF"]; // a list of countries

console.log(isValidLandlineNumber(validLandlineNumber, countryISOList)); // true
```

### validateContactNumber

Returns a detailed response about contact number like country name, country code, contact type etc. Functions accepts a required `contactNumber` as argument. The contact number is matched with available regex patterns of countries. The country details are returned when contact number satisfies the country regex (either mobile or landline).<br>
Function also accepts optional argument `countryISO | countryISO[]` which can narrow down the available regex patterns against which the contact number needs to be checked.

#### Example:

```ts
// Without countryISO
import { validateContactNumber } from "validate-contact-number";
const validLandlineNumber = "+91 22 1234 5678"; // same goes for 9876543210

const contactDetails = validateContactNumber(validLandlineNumber);
// conatctDetails: {valid: true, countryISO: "IN", contactNumber: "2212345678", dialCode: "+91", countryName: "India", contactType: "landline" }

// invalid number
const invalidLandlineNumber = "+91 22 1234 56";
const contactDetails = validateContactNumber(invalidLandlineNumber);
// conatctDetails: {valid: false }
```

```ts
// With countryISO
import { validateContactNumber } from "validate-contact-number";
const validLandlineNumber = "+91 22 1234 5678"; // same goes for 9876543210
const countryISO = "IN"; // Indian ISO

const contactDetails = validateContactNumber(validLandlineNumber, countryISO);
// conatctDetails: {valid: true, countryISO: "IN", contactNumber: "2212345678", dialCode: "+91", countryName: "India", contactType: "landline" }

// invalid number
const invalidLandlineNumber = "+91 22 1234 56";
const countryISO = "IN"; // Indian ISO
const contactDetails = validateContactNumber(invalidLandlineNumber, countryISO);
// conatctDetails: {valid: false }
```

```ts
// With a list of countryISO
import { validateContactNumber } from "validate-contact-number";
const validLandlineNumber = "+91 22 1234 5678"; // same goes for 9876543210
const countryISOList = ["IN", "MY", "AF"]; // a list of countries

const contactDetails = validateContactNumber(
  validLandlineNumber,
  countryISOList
);
// conatctDetails: {valid: true, countryISO: "IN", contactNumber: "2212345678", dialCode: "+91", countryName: "India", contactType: "landline" }

// pattern not satisfied
const validLandlineNumber = "+91 22 1234 5678"; // same goes for 9876543210
const countryISOList = ["SG", "MY", "AF"]; // a list of countries
const contactDetails = validateContactNumber(validLandlineNumber, countryISO);
// conatctDetails: {valid: false }
```

### formatContactNumber,

Returns a number in a specified format. Function accepts `contactNumber` and `contactFormat` as required arguments. The formats can be given in patterns of `d`. Examples:

#### Example:

```ts
import { formatContactNumber } from "validate-contact-number";
const contactNumber = "9876543210";

console.log(formatContactNumber(contactNumber, "+91dddddddddd")); // +919876543210
console.log(formatContactNumber(contactNumber, "+91-dd-dddd-dddd")); // +91-98-7654-3210
console.log(formatContactNumber(contactNumber, "dd dddd dddd")); // 98 7654 3210
console.log(formatContactNumber(contactNumber, "dd dddd-dddd dd.dd")); // 98 7654-3210
```
