import {
  type ContactNumberInfo,
  CONTACT_TYPE,
  type CountryISO,
  type CountryConfig,
} from "./types";

const contactInfo: { [key in CountryISO]: CountryConfig } = {
  AF: {
    name: "Afghanistan",
    dialCode: "+93",
    mobileRegex: "^(\\+93|0)?(7)-*[0-9]{8}$",
    landLineRegex: "^(\\+93|0)?[2-6]-*[0-9]{8}$",
  },
  AX: {
    name: "Aland Islands",
    dialCode: "+358",
    mobileRegex: "",
    landLineRegex: "",
  },
  AL: {
    name: "Albania",
    dialCode: "+355",
    mobileRegex: "",
    landLineRegex: "",
  },
  DZ: {
    name: "Algeria",
    dialCode: "+213",
    mobileRegex: "",
    landLineRegex: "",
  },
  AS: {
    name: "AmericanSamoa",
    dialCode: "+1684",
    mobileRegex: "",
    landLineRegex: "",
  },
  AD: {
    name: "Andorra",
    dialCode: "+376",
    mobileRegex: "",
    landLineRegex: "",
  },
  AO: {
    name: "Angola",
    dialCode: "+244",
    mobileRegex: "",
    landLineRegex: "",
  },
  AI: {
    name: "Anguilla",
    dialCode: "+1264",
    mobileRegex: "",
    landLineRegex: "",
  },
  AQ: {
    name: "Antarctica",
    dialCode: "+672",
    mobileRegex: "",
    landLineRegex: "",
  },
  AG: {
    name: "Antigua and Barbuda",
    dialCode: "+1268",
    mobileRegex: "",
    landLineRegex: "",
  },
  AR: {
    name: "Argentina",
    dialCode: "+54",
    mobileRegex: "",
    landLineRegex: "",
  },
  AM: {
    name: "Armenia",
    dialCode: "+374",
    mobileRegex:
      "^(00374|\\+374|0)?(33|41|43|44|50|55|66|77|79|91|93|94|95|96|97|98|99)-*\\d{6}$",
    landLineRegex: "",
  },
  AW: {
    name: "Aruba",
    dialCode: "+297",
    mobileRegex: "",
    landLineRegex: "",
  },
  AU: {
    name: "Australia",
    dialCode: "+61",
    mobileRegex: "",
    landLineRegex: "",
  },
  AT: {
    name: "Austria",
    dialCode: "+43",
    mobileRegex: "^(0043|\\+43|0)?(6)-*([5-9]){1}-*([0-9]){8,9}$",
    landLineRegex: "",
  },
  AZ: {
    name: "Azerbaijan",
    dialCode: "+994",
    mobileRegex: "",
    landLineRegex: "",
  },
  BS: {
    name: "Bahamas",
    dialCode: "+1242",
    mobileRegex: "",
    landLineRegex: "",
  },
  BH: {
    name: "Bahrain",
    dialCode: "+973",
    mobileRegex: "^(00973|\\+973)?(3)-*\\d{7}$",
    landLineRegex: "",
  },
  BD: {
    name: "Bangladesh",
    dialCode: "+880",
    mobileRegex: "^(\\+880|0)?(1)(1|3|4|5|6|7|8|9)-*[0-9]{8}$",
    landLineRegex: "",
  },
  BB: {
    name: "Barbados",
    dialCode: "+1246",
    mobileRegex: "",
    landLineRegex: "",
  },
  BY: {
    name: "Belarus",
    dialCode: "+375",
    mobileRegex: "",
    landLineRegex: "",
  },
  BE: {
    name: "Belgium",
    dialCode: "+32",
    mobileRegex: "",
    landLineRegex: "",
  },
  BZ: {
    name: "Belize",
    dialCode: "+501",
    mobileRegex: "",
    landLineRegex: "",
  },
  BJ: {
    name: "Benin",
    dialCode: "+229",
    mobileRegex: "",
    landLineRegex: "",
  },
  BM: {
    name: "Bermuda",
    dialCode: "+1441",
    mobileRegex: "",
    landLineRegex: "",
  },
  BT: {
    name: "Bhutan",
    dialCode: "+975",
    mobileRegex: "^(00975|\\+975|0)?(02|16|17|77)-*\\d{6}$",
    landLineRegex: "",
  },
  BO: {
    name: "Bolivia, Plurinational State of",
    dialCode: "+591",
    mobileRegex: "",
    landLineRegex: "",
  },
  BA: {
    name: "Bosnia and Herzegovina",
    dialCode: "+387",
    mobileRegex: "",
    landLineRegex: "",
  },
  BW: {
    name: "Botswana",
    dialCode: "+267",
    mobileRegex: "",
    landLineRegex: "",
  },
  BR: {
    name: "Brazil",
    dialCode: "+55",
    mobileRegex: "",
    landLineRegex: "",
  },
  IO: {
    name: "British Indian Ocean Territory",
    dialCode: "+246",
    mobileRegex: "",
    landLineRegex: "",
  },
  BN: {
    name: "Brunei Darussalam",
    dialCode: "+673",
    mobileRegex: "",
    landLineRegex: "",
  },
  BG: {
    name: "Bulgaria",
    dialCode: "+359",
    mobileRegex: "",
    landLineRegex: "",
  },
  BF: {
    name: "Burkina Faso",
    dialCode: "+226",
    mobileRegex: "",
    landLineRegex: "",
  },
  BI: {
    name: "Burundi",
    dialCode: "+257",
    mobileRegex: "",
    landLineRegex: "",
  },
  KH: {
    name: "Cambodia",
    dialCode: "+855",
    mobileRegex: "",
    landLineRegex: "",
  },
  CM: {
    name: "Cameroon",
    dialCode: "+237",
    mobileRegex: "",
    landLineRegex: "",
  },
  CA: {
    name: "Canada",
    dialCode: "+1",
    mobileRegex: "^(\\+1)?[2-9]{1}-*[0-9]{2}-*[2-9]{1}-*[0-9]{2}-*[0-9]{4}$",
    landLineRegex: "^(\\+1)?[2-9]{1}-*[0-9]{2}-*[2-9]{1}-*[0-9]{2}-*[0-9]{4}$",
  },
  CV: {
    name: "Cape Verde",
    dialCode: "+238",
    mobileRegex: "",
    landLineRegex: "",
  },
  KY: {
    name: "Cayman Islands",
    dialCode: "+ 345",
    mobileRegex: "",
    landLineRegex: "",
  },
  CF: {
    name: "Central African Republic",
    dialCode: "+236",
    mobileRegex: "",
    landLineRegex: "",
  },
  TD: {
    name: "Chad",
    dialCode: "+235",
    mobileRegex: "",
    landLineRegex: "",
  },
  CL: {
    name: "Chile",
    dialCode: "+56",
    mobileRegex: "",
    landLineRegex: "",
  },
  CN: {
    name: "China",
    dialCode: "+86",
    mobileRegex:
      "^(0086|\\+86|0)?(?!(154|161|164|174|194))((1[3-9])\\d{9}$|(14[14]\\d{10}$))",
    landLineRegex: "",
  },
  CX: {
    name: "Christmas Island",
    dialCode: "+61",
    mobileRegex: "",
    landLineRegex: "",
  },
  CC: {
    name: "Cocos (Keeling) Islands",
    dialCode: "+61",
    mobileRegex: "",
    landLineRegex: "",
  },
  CO: {
    name: "Colombia",
    dialCode: "+57",
    mobileRegex: "",
    landLineRegex: "",
  },
  KM: {
    name: "Comoros",
    dialCode: "+269",
    mobileRegex: "",
    landLineRegex: "",
  },
  CG: {
    name: "Congo",
    dialCode: "+242",
    mobileRegex: "",
    landLineRegex: "",
  },
  CD: {
    name: "Congo, The Democratic Republic of the Congo",
    dialCode: "+243",
    mobileRegex: "",
    landLineRegex: "",
  },
  CK: {
    name: "Cook Islands",
    dialCode: "+682",
    mobileRegex: "",
    landLineRegex: "",
  },
  CR: {
    name: "Costa Rica",
    dialCode: "+506",
    mobileRegex: "",
    landLineRegex: "",
  },
  CI: {
    name: "Cote d'Ivoire",
    dialCode: "+225",
    mobileRegex: "",
    landLineRegex: "",
  },
  HR: {
    name: "Croatia",
    dialCode: "+385",
    mobileRegex: "",
    landLineRegex: "",
  },
  CU: {
    name: "Cuba",
    dialCode: "+53",
    mobileRegex: "",
    landLineRegex: "",
  },
  CY: {
    name: "Cyprus",
    dialCode: "+357",
    mobileRegex: "",
    landLineRegex: "",
  },
  CZ: {
    name: "Czech Republic",
    dialCode: "+420",
    mobileRegex: "",
    landLineRegex: "",
  },
  DK: {
    name: "Denmark",
    dialCode: "+45",
    mobileRegex: "",
    landLineRegex: "",
  },
  DJ: {
    name: "Djibouti",
    dialCode: "+253",
    mobileRegex: "",
    landLineRegex: "",
  },
  DM: {
    name: "Dominica",
    dialCode: "+1767",
    mobileRegex: "",
    landLineRegex: "",
  },
  DO: {
    name: "Dominican Republic",
    dialCode: "+1849",
    mobileRegex: "",
    landLineRegex: "",
  },
  EC: {
    name: "Ecuador",
    dialCode: "+593",
    mobileRegex: "",
    landLineRegex: "",
  },
  EG: {
    name: "Egypt",
    dialCode: "+20",
    mobileRegex: "",
    landLineRegex: "",
  },
  SV: {
    name: "El Salvador",
    dialCode: "+503",
    mobileRegex: "",
    landLineRegex: "",
  },
  GQ: {
    name: "Equatorial Guinea",
    dialCode: "+240",
    mobileRegex: "",
    landLineRegex: "",
  },
  ER: {
    name: "Eritrea",
    dialCode: "+291",
    mobileRegex: "",
    landLineRegex: "",
  },
  EE: {
    name: "Estonia",
    dialCode: "+372",
    mobileRegex: "",
    landLineRegex: "",
  },
  ET: {
    name: "Ethiopia",
    dialCode: "+251",
    mobileRegex: "",
    landLineRegex: "",
  },
  FK: {
    name: "Falkland Islands (Malvinas)",
    dialCode: "+500",
    mobileRegex: "",
    landLineRegex: "",
  },
  FO: {
    name: "Faroe Islands",
    dialCode: "+298",
    mobileRegex: "",
    landLineRegex: "",
  },
  FJ: {
    name: "Fiji",
    dialCode: "+679",
    mobileRegex: "",
    landLineRegex: "",
  },
  FI: {
    name: "Finland",
    dialCode: "+358",
    mobileRegex: "",
    landLineRegex: "",
  },
  FR: {
    name: "France",
    dialCode: "+33",
    mobileRegex: "",
    landLineRegex: "",
  },
  GF: {
    name: "French Guiana",
    dialCode: "+594",
    mobileRegex: "",
    landLineRegex: "",
  },
  PF: {
    name: "French Polynesia",
    dialCode: "+689",
    mobileRegex: "",
    landLineRegex: "",
  },
  GA: {
    name: "Gabon",
    dialCode: "+241",
    mobileRegex: "",
    landLineRegex: "",
  },
  GM: {
    name: "Gambia",
    dialCode: "+220",
    mobileRegex: "",
    landLineRegex: "",
  },
  GE: {
    name: "Georgia",
    dialCode: "+995",
    mobileRegex:
      "^(00995|\\+995|0)?((5(11|14|51|55|57|58|59|68|70|71|74|77|78|79|91|92|93|95|96|97|98|99)\\d{6}$)|(79[01]\\d{6}$))",
    landLineRegex: "",
  },
  DE: {
    name: "Germany",
    dialCode: "+49",
    mobileRegex: "^(0049|\\+49|0)?(15|16|17)-*([0-9]){8,9}$",
    landLineRegex: "",
  },
  GH: {
    name: "Ghana",
    dialCode: "+233",
    mobileRegex: "",
    landLineRegex: "",
  },
  GI: {
    name: "Gibraltar",
    dialCode: "+350",
    mobileRegex: "",
    landLineRegex: "",
  },
  GR: {
    name: "Greece",
    dialCode: "+30",
    mobileRegex: "",
    landLineRegex: "",
  },
  GL: {
    name: "Greenland",
    dialCode: "+299",
    mobileRegex: "",
    landLineRegex: "",
  },
  GD: {
    name: "Grenada",
    dialCode: "+1473",
    mobileRegex: "",
    landLineRegex: "",
  },
  GP: {
    name: "Guadeloupe",
    dialCode: "+590",
    mobileRegex: "",
    landLineRegex: "",
  },
  GU: {
    name: "Guam",
    dialCode: "+1671",
    mobileRegex: "",
    landLineRegex: "",
  },
  GT: {
    name: "Guatemala",
    dialCode: "+502",
    mobileRegex: "",
    landLineRegex: "",
  },
  GG: {
    name: "Guernsey",
    dialCode: "+44",
    mobileRegex: "",
    landLineRegex: "",
  },
  GN: {
    name: "Guinea",
    dialCode: "+224",
    mobileRegex: "",
    landLineRegex: "",
  },
  GW: {
    name: "Guinea-Bissau",
    dialCode: "+245",
    mobileRegex: "",
    landLineRegex: "",
  },
  GY: {
    name: "Guyana",
    dialCode: "+595",
    mobileRegex: "",
    landLineRegex: "",
  },
  HT: {
    name: "Haiti",
    dialCode: "+509",
    mobileRegex: "",
    landLineRegex: "",
  },
  VA: {
    name: "Holy See (Vatican City State)",
    dialCode: "+379",
    mobileRegex: "",
    landLineRegex: "",
  },
  HN: {
    name: "Honduras",
    dialCode: "+504",
    mobileRegex: "",
    landLineRegex: "",
  },
  HK: {
    name: "Hong Kong",
    dialCode: "+852",
    mobileRegex: "^(00852|\\+852|0)?([5679]\\d{7}$)",
    landLineRegex: "",
  },
  HU: {
    name: "Hungary",
    dialCode: "+36",
    mobileRegex: "",
    landLineRegex: "",
  },
  IS: {
    name: "Iceland",
    dialCode: "+354",
    mobileRegex: "",
    landLineRegex: "",
  },
  IN: {
    name: "India",
    dialCode: "+91",
    mobileRegex: "^(\\+91|0)?[6-9]{1}-*[0-9]{9}$",
    landLineRegex: "",
  },
  ID: {
    name: "Indonesia",
    dialCode: "+62",
    mobileRegex: "^(0062|\\+62)?(8\\d{10}$)",
    landLineRegex: "",
  },
  IR: {
    name: "Iran, Islamic Republic of Persian Gulf",
    dialCode: "+98",
    mobileRegex: "^(0|0098|\\+98)?((91)\\d{8}|(99)-*[1-4]{1}\\d{7})$",
    landLineRegex: "",
  },
  IQ: {
    name: "Iraq",
    dialCode: "+964",
    mobileRegex: "",
    landLineRegex: "",
  },
  IE: {
    name: "Ireland",
    dialCode: "+353",
    mobileRegex: "",
    landLineRegex: "",
  },
  IM: {
    name: "Isle of Man",
    dialCode: "+44",
    mobileRegex: "",
    landLineRegex: "",
  },
  IL: {
    name: "Israel",
    dialCode: "+972",
    mobileRegex:
      "^(00972|\\+972|0)?5(([01234689]{1}\\d{7}$)|5((22|23|24|25|26|27|32|33|44|50|51|55|66|67|68|70|71|72|87|88|89)\\d{5}$|9\\d{6}$))",
    landLineRegex: "",
  },
  IT: {
    name: "Italy",
    dialCode: "+39",
    mobileRegex: "^(0039|\\+39|0)?(3)-*([0-9]){9}$",
    landLineRegex: "",
  },
  JM: {
    name: "Jamaica",
    dialCode: "+1876",
    mobileRegex: "",
    landLineRegex: "",
  },
  JP: {
    name: "Japan",
    dialCode: "+81",
    mobileRegex: "^(0081|\\+81|0)?(70|80|90)-*([0-9]){8}$",
    landLineRegex: "",
  },
  JE: {
    name: "Jersey",
    dialCode: "+44",
    mobileRegex: "",
    landLineRegex: "",
  },
  JO: {
    name: "Jordan",
    dialCode: "+962",
    mobileRegex: "^(00962|\\+962|0)?(7[5789]\\d{7}$)",
    landLineRegex: "",
  },
  KZ: {
    name: "Kazakhstan",
    dialCode: "+77",
    mobileRegex: "",
    landLineRegex: "",
  },
  KE: {
    name: "Kenya",
    dialCode: "+254",
    mobileRegex: "",
    landLineRegex: "",
  },
  KI: {
    name: "Kiribati",
    dialCode: "+686",
    mobileRegex: "",
    landLineRegex: "",
  },
  KP: {
    name: "Korea, Democratic People's Republic of Korea",
    dialCode: "+850",
    mobileRegex: "",
    landLineRegex: "",
  },
  KR: {
    name: "Korea, Republic of South Korea",
    dialCode: "+82",
    mobileRegex: "^(0082|\\+82|0)?(10|11|16|17|18|19)-*([0-9]){8}$",
    landLineRegex: "",
  },
  KW: {
    name: "Kuwait",
    dialCode: "+965",
    mobileRegex: "^(00965|\\+965|0)?([4569]\\d{7}$)",
    landLineRegex: "",
  },
  KG: {
    name: "Kyrgyzstan",
    dialCode: "+996",
    mobileRegex: "",
    landLineRegex: "",
  },
  LA: {
    name: "Laos",
    dialCode: "+856",
    mobileRegex: "",
    landLineRegex: "",
  },
  LV: {
    name: "Latvia",
    dialCode: "+371",
    mobileRegex: "",
    landLineRegex: "",
  },
  LB: {
    name: "Lebanon",
    dialCode: "+961",
    mobileRegex:
      "(00961|\\+961|0)?(((3)\\d{7})|((70|71)\\d{6}$)|(76[13456789]\\d{5}$)|(78[89]\\d{5}$)|(79[123]\\d{5}$)|(81[23467]\\d{5}$))",
    landLineRegex: "",
  },
  LS: {
    name: "Lesotho",
    dialCode: "+266",
    mobileRegex: "",
    landLineRegex: "",
  },
  LR: {
    name: "Liberia",
    dialCode: "+231",
    mobileRegex: "",
    landLineRegex: "",
  },
  LY: {
    name: "Libyan Arab Jamahiriya",
    dialCode: "+218",
    mobileRegex: "",
    landLineRegex: "",
  },
  LI: {
    name: "Liechtenstein",
    dialCode: "+423",
    mobileRegex: "",
    landLineRegex: "",
  },
  LT: {
    name: "Lithuania",
    dialCode: "+370",
    mobileRegex: "",
    landLineRegex: "",
  },
  LU: {
    name: "Luxembourg",
    dialCode: "+352",
    mobileRegex: "",
    landLineRegex: "",
  },
  MO: {
    name: "Macao",
    dialCode: "+853",
    mobileRegex: "",
    landLineRegex: "",
  },
  MK: {
    name: "Macedonia",
    dialCode: "+389",
    mobileRegex: "",
    landLineRegex: "",
  },
  MG: {
    name: "Madagascar",
    dialCode: "+261",
    mobileRegex: "",
    landLineRegex: "",
  },
  MW: {
    name: "Malawi",
    dialCode: "+265",
    mobileRegex: "",
    landLineRegex: "",
  },
  MY: {
    name: "Malaysia",
    dialCode: "+60",
    mobileRegex: "^(0060|\\+60|0)?((1|11)\\d{8})$",
    landLineRegex: "",
  },
  MV: {
    name: "Maldives",
    dialCode: "+960",
    mobileRegex:
      "^(00960|\\+960|0)?(((7|8)\\d{5}$)|(7[36789]\\d{5}$)|(8[126789]\\d{5}$))",
    landLineRegex: "",
  },
  ML: {
    name: "Mali",
    dialCode: "+223",
    mobileRegex: "",
    landLineRegex: "",
  },
  MT: {
    name: "Malta",
    dialCode: "+356",
    mobileRegex: "",
    landLineRegex: "",
  },
  MH: {
    name: "Marshall Islands",
    dialCode: "+692",
    mobileRegex: "",
    landLineRegex: "",
  },
  MQ: {
    name: "Martinique",
    dialCode: "+596",
    mobileRegex: "",
    landLineRegex: "",
  },
  MR: {
    name: "Mauritania",
    dialCode: "+222",
    mobileRegex: "",
    landLineRegex: "",
  },
  MU: {
    name: "Mauritius",
    dialCode: "+230",
    mobileRegex: "",
    landLineRegex: "",
  },
  YT: {
    name: "Mayotte",
    dialCode: "+262",
    mobileRegex: "",
    landLineRegex: "",
  },
  MX: {
    name: "Mexico",
    dialCode: "+52",
    mobileRegex: "",
    landLineRegex: "",
  },
  FM: {
    name: "Micronesia, Federated States of Micronesia",
    dialCode: "+691",
    mobileRegex: "",
    landLineRegex: "",
  },
  MD: {
    name: "Moldova",
    dialCode: "+373",
    mobileRegex: "",
    landLineRegex: "",
  },
  MC: {
    name: "Monaco",
    dialCode: "+377",
    mobileRegex: "",
    landLineRegex: "",
  },
  MN: {
    name: "Mongolia",
    dialCode: "+976",
    mobileRegex: "",
    landLineRegex: "",
  },
  ME: {
    name: "Montenegro",
    dialCode: "+382",
    mobileRegex: "",
    landLineRegex: "",
  },
  MS: {
    name: "Montserrat",
    dialCode: "+1664",
    mobileRegex: "",
    landLineRegex: "",
  },
  MA: {
    name: "Morocco",
    dialCode: "+212",
    mobileRegex: "",
    landLineRegex: "",
  },
  MZ: {
    name: "Mozambique",
    dialCode: "+258",
    mobileRegex: "",
    landLineRegex: "",
  },
  MM: {
    name: "Myanmar",
    dialCode: "+95",
    mobileRegex:
      "^(0095|\\+95|0)?9(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])\\d{7}$",
    landLineRegex: "",
  },
  NA: {
    name: "Namibia",
    dialCode: "+264",
    mobileRegex: "",
    landLineRegex: "",
  },
  NR: {
    name: "Nauru",
    dialCode: "+674",
    mobileRegex: "",
    landLineRegex: "",
  },
  NP: {
    name: "Nepal",
    dialCode: "+977",
    mobileRegex: "^(\\+977|0)?(9)[6-9]{1}-*[0-9]{8}$",
    landLineRegex: "",
  },
  NL: {
    name: "Netherlands",
    dialCode: "+31",
    mobileRegex: "",
    landLineRegex: "",
  },
  AN: {
    name: "Netherlands Antilles",
    dialCode: "+599",
    mobileRegex: "",
    landLineRegex: "",
  },
  NC: {
    name: "New Caledonia",
    dialCode: "+687",
    mobileRegex: "",
    landLineRegex: "",
  },
  NZ: {
    name: "New Zealand",
    dialCode: "+64",
    mobileRegex: "",
    landLineRegex: "",
  },
  NI: {
    name: "Nicaragua",
    dialCode: "+505",
    mobileRegex: "",
    landLineRegex: "",
  },
  NE: {
    name: "Niger",
    dialCode: "+227",
    mobileRegex: "",
    landLineRegex: "",
  },
  NG: {
    name: "Nigeria",
    dialCode: "+234",
    mobileRegex: "",
    landLineRegex: "",
  },
  NU: {
    name: "Niue",
    dialCode: "+683",
    mobileRegex: "",
    landLineRegex: "",
  },
  NF: {
    name: "Norfolk Island",
    dialCode: "+672",
    mobileRegex: "",
    landLineRegex: "",
  },
  MP: {
    name: "Northern Mariana Islands",
    dialCode: "+1670",
    mobileRegex: "",
    landLineRegex: "",
  },
  NO: {
    name: "Norway",
    dialCode: "+47",
    mobileRegex: "",
    landLineRegex: "",
  },
  OM: {
    name: "Oman",
    dialCode: "+968",
    mobileRegex: "^(00968|\\+968|0)?(7[1-2]|7[7-9]|9[0-9])\\d{6}$",
    landLineRegex: "",
  },
  PK: {
    name: "Pakistan",
    dialCode: "+92",
    mobileRegex: "^(\\+92|0)?(3)([0-5]){1}-*[0-9]{8}$",
    landLineRegex: "",
  },
  PW: {
    name: "Palau",
    dialCode: "+680",
    mobileRegex: "",
    landLineRegex: "",
  },
  PS: {
    name: "Palestinian Territory, Occupied",
    dialCode: "+970",
    mobileRegex: "",
    landLineRegex: "",
  },
  PA: {
    name: "Panama",
    dialCode: "+507",
    mobileRegex: "",
    landLineRegex: "",
  },
  PG: {
    name: "Papua New Guinea",
    dialCode: "+675",
    mobileRegex: "",
    landLineRegex: "",
  },
  PY: {
    name: "Paraguay",
    dialCode: "+595",
    mobileRegex: "",
    landLineRegex: "",
  },
  PE: {
    name: "Peru",
    dialCode: "+51",
    mobileRegex: "",
    landLineRegex: "",
  },
  PH: {
    name: "Philippines",
    dialCode: "+63",
    mobileRegex: "",
    landLineRegex: "",
  },
  PN: {
    name: "Pitcairn",
    dialCode: "+872",
    mobileRegex: "",
    landLineRegex: "",
  },
  PL: {
    name: "Poland",
    dialCode: "+48",
    mobileRegex: "",
    landLineRegex: "",
  },
  PT: {
    name: "Portugal",
    dialCode: "+351",
    mobileRegex: "",
    landLineRegex: "",
  },
  PR: {
    name: "Puerto Rico",
    dialCode: "+1939",
    mobileRegex: "",
    landLineRegex: "",
  },
  QA: {
    name: "Qatar",
    dialCode: "+974",
    mobileRegex: "",
    landLineRegex: "",
  },
  RO: {
    name: "Romania",
    dialCode: "+40",
    mobileRegex: "",
    landLineRegex: "",
  },
  RU: {
    name: "Russia",
    dialCode: "+7",
    mobileRegex: "^(007|\\+7|8)-*([0-9]){10}$",
    landLineRegex: "",
  },
  RW: {
    name: "Rwanda",
    dialCode: "+250",
    mobileRegex: "",
    landLineRegex: "",
  },
  RE: {
    name: "Reunion",
    dialCode: "+262",
    mobileRegex: "",
    landLineRegex: "",
  },
  BL: {
    name: "Saint Barthelemy",
    dialCode: "+590",
    mobileRegex: "",
    landLineRegex: "",
  },
  SH: {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dialCode: "+290",
    mobileRegex: "",
    landLineRegex: "",
  },
  KN: {
    name: "Saint Kitts and Nevis",
    dialCode: "+1869",
    mobileRegex: "",
    landLineRegex: "",
  },
  LC: {
    name: "Saint Lucia",
    dialCode: "+1758",
    mobileRegex: "",
    landLineRegex: "",
  },
  MF: {
    name: "Saint Martin",
    dialCode: "+590",
    mobileRegex: "",
    landLineRegex: "",
  },
  PM: {
    name: "Saint Pierre and Miquelon",
    dialCode: "+508",
    mobileRegex: "",
    landLineRegex: "",
  },
  VC: {
    name: "Saint Vincent and the Grenadines",
    dialCode: "+1784",
    mobileRegex: "",
    landLineRegex: "",
  },
  WS: {
    name: "Samoa",
    dialCode: "+685",
    mobileRegex: "",
    landLineRegex: "",
  },
  SM: {
    name: "San Marino",
    dialCode: "+378",
    mobileRegex: "",
    landLineRegex: "",
  },
  ST: {
    name: "Sao Tome and Principe",
    dialCode: "+239",
    mobileRegex: "",
    landLineRegex: "",
  },
  SA: {
    name: "Saudi Arabia",
    dialCode: "+966",
    mobileRegex: "",
    landLineRegex: "",
  },
  SN: {
    name: "Senegal",
    dialCode: "+221",
    mobileRegex: "",
    landLineRegex: "",
  },
  RS: {
    name: "Serbia",
    dialCode: "+381",
    mobileRegex: "",
    landLineRegex: "",
  },
  SC: {
    name: "Seychelles",
    dialCode: "+248",
    mobileRegex: "",
    landLineRegex: "",
  },
  SL: {
    name: "Sierra Leone",
    dialCode: "+232",
    mobileRegex: "",
    landLineRegex: "",
  },
  SG: {
    name: "Singapore",
    dialCode: "+65",
    mobileRegex: "",
    landLineRegex: "",
  },
  SK: {
    name: "Slovakia",
    dialCode: "+421",
    mobileRegex: "",
    landLineRegex: "",
  },
  SI: {
    name: "Slovenia",
    dialCode: "+386",
    mobileRegex: "",
    landLineRegex: "",
  },
  SB: {
    name: "Solomon Islands",
    dialCode: "+677",
    mobileRegex: "",
    landLineRegex: "",
  },
  SO: {
    name: "Somalia",
    dialCode: "+252",
    mobileRegex: "",
    landLineRegex: "",
  },
  ZA: {
    name: "South Africa",
    dialCode: "+27",
    mobileRegex: "",
    landLineRegex: "",
  },
  SS: {
    name: "South Sudan",
    dialCode: "+211",
    mobileRegex: "",
    landLineRegex: "",
  },
  GS: {
    name: "South Georgia and the South Sandwich Islands",
    dialCode: "+500",
    mobileRegex: "",
    landLineRegex: "",
  },
  ES: {
    name: "Spain",
    dialCode: "+34",
    mobileRegex: "",
    landLineRegex: "",
  },
  LK: {
    name: "Sri Lanka",
    dialCode: "+94",
    mobileRegex: "^(0|0094|\\+94)?7(0|1|2|4|5|6|7|8)\\d{7}$",
    landLineRegex: "",
  },
  SD: {
    name: "Sudan",
    dialCode: "+249",
    mobileRegex: "",
    landLineRegex: "",
  },
  SR: {
    name: "Suriname",
    dialCode: "+597",
    mobileRegex: "",
    landLineRegex: "",
  },
  SJ: {
    name: "Svalbard and Jan Mayen",
    dialCode: "+47",
    mobileRegex: "",
    landLineRegex: "",
  },
  SZ: {
    name: "Swaziland",
    dialCode: "+268",
    mobileRegex: "",
    landLineRegex: "",
  },
  SE: {
    name: "Sweden",
    dialCode: "+46",
    mobileRegex: "",
    landLineRegex: "",
  },
  CH: {
    name: "Switzerland",
    dialCode: "+41",
    mobileRegex: "^(0041|\\+41|41|0)?(7)-*([5-9]){1}-*([0-9]){7}$",
    landLineRegex: "",
  },
  SY: {
    name: "Syrian Arab Republic",
    dialCode: "+963",
    mobileRegex: "",
    landLineRegex: "",
  },
  TW: {
    name: "Taiwan",
    dialCode: "+886",
    mobileRegex: "",
    landLineRegex: "",
  },
  TJ: {
    name: "Tajikistan",
    dialCode: "+992",
    mobileRegex: "",
    landLineRegex: "",
  },
  TZ: {
    name: "Tanzania, United Republic of Tanzania",
    dialCode: "+255",
    mobileRegex: "",
    landLineRegex: "",
  },
  TH: {
    name: "Thailand",
    dialCode: "+66",
    mobileRegex: "",
    landLineRegex: "",
  },
  TL: {
    name: "Timor-Leste",
    dialCode: "+670",
    mobileRegex: "",
    landLineRegex: "",
  },
  TG: {
    name: "Togo",
    dialCode: "+228",
    mobileRegex: "",
    landLineRegex: "",
  },
  TK: {
    name: "Tokelau",
    dialCode: "+690",
    mobileRegex: "",
    landLineRegex: "",
  },
  TO: {
    name: "Tonga",
    dialCode: "+676",
    mobileRegex: "",
    landLineRegex: "",
  },
  TT: {
    name: "Trinidad and Tobago",
    dialCode: "+1868",
    mobileRegex: "",
    landLineRegex: "",
  },
  TN: {
    name: "Tunisia",
    dialCode: "+216",
    mobileRegex: "",
    landLineRegex: "",
  },
  TR: {
    name: "Turkey",
    dialCode: "+90",
    mobileRegex: "",
    landLineRegex: "",
  },
  TM: {
    name: "Turkmenistan",
    dialCode: "+993",
    mobileRegex: "",
    landLineRegex: "",
  },
  TC: {
    name: "Turks and Caicos Islands",
    dialCode: "+1649",
    mobileRegex: "",
    landLineRegex: "",
  },
  TV: {
    name: "Tuvalu",
    dialCode: "+688",
    mobileRegex: "",
    landLineRegex: "",
  },
  UG: {
    name: "Uganda",
    dialCode: "+256",
    mobileRegex: "",
    landLineRegex: "",
  },
  UA: {
    name: "Ukraine",
    dialCode: "+380",
    mobileRegex: "",
    landLineRegex: "",
  },
  AE: {
    name: "United Arab Emirates",
    dialCode: "+971",
    mobileRegex: "",
    landLineRegex: "",
  },
  GB: {
    name: "United Kingdom",
    dialCode: "+44",
    mobileRegex: "^(\\+44|0|\\+440)?(7)-*[0-9]{9}$",
    landLineRegex: "",
  },
  US: {
    name: "United States",
    dialCode: "+1",
    mobileRegex: "^(\\+1)?[2-9]{1}-*[0-9]{2}-*[2-9]{1}-*[0-9]{2}-*[0-9]{4}$",
    landLineRegex: "^(\\+1)?[2-9]{1}-*[0-9]{2}-*[2-9]{1}-*[0-9]{2}-*[0-9]{4}$",
  },
  UY: {
    name: "Uruguay",
    dialCode: "+598",
    mobileRegex: "",
    landLineRegex: "",
  },
  UZ: {
    name: "Uzbekistan",
    dialCode: "+998",
    mobileRegex: "",
    landLineRegex: "",
  },
  VU: {
    name: "Vanuatu",
    dialCode: "+678",
    mobileRegex: "",
    landLineRegex: "",
  },
  VE: {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dialCode: "+58",
    mobileRegex: "",
    landLineRegex: "",
  },
  VN: {
    name: "Vietnam",
    dialCode: "+84",
    mobileRegex: "",
    landLineRegex: "",
  },
  VG: {
    name: "Virgin Islands, British",
    dialCode: "+1284",
    mobileRegex: "",
    landLineRegex: "",
  },
  VI: {
    name: "Virgin Islands, U.S.",
    dialCode: "+1340",
    mobileRegex: "",
    landLineRegex: "",
  },
  WF: {
    name: "Wallis and Futuna",
    dialCode: "+681",
    mobileRegex: "",
    landLineRegex: "",
  },
  YE: {
    name: "Yemen",
    dialCode: "+967",
    mobileRegex: "",
    landLineRegex: "",
  },
  ZM: {
    name: "Zambia",
    dialCode: "+260",
    mobileRegex: "",
    landLineRegex: "",
  },
  ZW: {
    name: "Zimbabwe",
    dialCode: "+263",
    mobileRegex: "",
    landLineRegex: "",
  },
};

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
