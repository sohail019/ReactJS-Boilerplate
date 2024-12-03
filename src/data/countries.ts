type Country = {
  abbr: string;
  code: string;
  icon: string;
  name: string;
  suggested?: boolean;
};

export const allCountries: Array<Country> = [
  { icon: 'ðŸ‡¦ðŸ‡«', name: 'Afghanistan', abbr: 'AF', code: '93' },
  { icon: 'ðŸ‡¦ðŸ‡½', name: 'Alland Islands', abbr: 'AX', code: '358' },
  { icon: 'ðŸ‡¦ðŸ‡±', name: 'Albania', abbr: 'AL', code: '355' },
  { icon: 'ðŸ‡©ðŸ‡¿', name: 'Algeria', abbr: 'DZ', code: '213' },
  { icon: 'ðŸ‡¦ðŸ‡¸', name: 'American Samoa', abbr: 'AS', code: '1-684' },
  { icon: 'ðŸ‡¦ðŸ‡©', name: 'Andorra', abbr: 'AD', code: '376' },
  { icon: 'ðŸ‡¦ðŸ‡´', name: 'Angola', abbr: 'AO', code: '244' },
  { icon: 'ðŸ‡¦ðŸ‡®', name: 'Anguilla', abbr: 'AI', code: '1-264' },
  { icon: 'ðŸ‡¦ðŸ‡¶', name: 'Antarctica', abbr: 'AQ', code: '672' },
  { icon: 'ðŸ‡¦ðŸ‡¬', name: 'Antigua and Barbuda', abbr: 'AG', code: '1-268' },
  { icon: 'ðŸ‡¦ðŸ‡·', name: 'Argentina', abbr: 'AR', code: '54' },
  { icon: 'ðŸ‡¦ðŸ‡²', name: 'Armenia', abbr: 'AM', code: '374' },
  { icon: 'ðŸ‡¦ðŸ‡¼', name: 'Aruba', abbr: 'AW', code: '297' },
  { icon: 'ðŸ‡¦ðŸ‡º', name: 'Australia', abbr: 'AU', code: '61', suggested: true },
  { icon: 'ðŸ‡¦ðŸ‡¹', name: 'Austria', abbr: 'AT', code: '43' },
  { icon: 'ðŸ‡¦ðŸ‡¿', name: 'Azerbaijan', abbr: 'AZ', code: '994' },
  { icon: 'ðŸ‡§ðŸ‡¸', name: 'Bahamas', abbr: 'BS', code: '1-242' },
  { icon: 'ðŸ‡§ðŸ‡­', name: 'Bahrain', abbr: 'BH', code: '973' },
  { icon: 'ðŸ‡§ðŸ‡©', name: 'Bangladesh', abbr: 'BD', code: '880' },
  { icon: 'ðŸ‡§ðŸ‡§', name: 'Barbados', abbr: 'BB', code: '1-246' },
  { icon: 'ðŸ‡§ðŸ‡¾', name: 'Belarus', abbr: 'BY', code: '375' },
  { icon: 'ðŸ‡§ðŸ‡ª', name: 'Belgium', abbr: 'BE', code: '32' },
  { icon: 'ðŸ‡§ðŸ‡¿', name: 'Belize', abbr: 'BZ', code: '501' },
  { icon: 'ðŸ‡§ðŸ‡¯', name: 'Benin', abbr: 'BJ', code: '229' },
  { icon: 'ðŸ‡§ðŸ‡²', name: 'Bermuda', abbr: 'BM', code: '1-441' },
  { icon: 'ðŸ‡§ðŸ‡¹', name: 'Bhutan', abbr: 'BT', code: '975' },
  { icon: 'ðŸ‡§ðŸ‡´', name: 'Bolivia', abbr: 'BO', code: '591' },
  { icon: 'ðŸ‡§ðŸ‡¦', name: 'Bosnia and Herzegovina', abbr: 'BA', code: '387' },
  { icon: 'ðŸ‡§ðŸ‡¼', name: 'Botswana', abbr: 'BW', code: '267' },
  { icon: 'ðŸ‡§ðŸ‡»', name: 'Bouvet Island', abbr: 'BV', code: '47' },
  { icon: 'ðŸ‡§ðŸ‡·', name: 'Brazil', abbr: 'BR', code: '55' },
  {
    icon: 'ðŸ‡®ðŸ‡´',
    name: 'British Indian Ocean Territory',
    abbr: 'IO',
    code: '246',
  },
  { icon: 'ðŸ‡»ðŸ‡¬', name: 'British Virgin Islands', abbr: 'VG', code: '1-284' },
  { icon: 'ðŸ‡§ðŸ‡³', name: 'Brunei Darussalam', abbr: 'BN', code: '673' },
  { icon: 'ðŸ‡§ðŸ‡¬', name: 'Bulgaria', abbr: 'BG', code: '359' },
  { icon: 'ðŸ‡§ðŸ‡«', name: 'Burkina Faso', abbr: 'BF', code: '226' },
  { icon: 'ðŸ‡§ðŸ‡®', name: 'Burundi', abbr: 'BI', code: '257' },
  { icon: 'ðŸ‡°ðŸ‡­', name: 'Cambodia', abbr: 'KH', code: '855' },
  { icon: 'ðŸ‡¨ðŸ‡²', name: 'Cameroon', abbr: 'CM', code: '237' },
  { icon: 'ðŸ‡¨ðŸ‡¦', name: 'Canada', abbr: 'CA', code: '1', suggested: true },
  { icon: 'ðŸ‡¨ðŸ‡»', name: 'Cape Verde', abbr: 'CV', code: '238' },
  { icon: 'ðŸ‡°ðŸ‡¾', name: 'Cayman Islands', abbr: 'KY', code: '1-345' },
  { icon: 'ðŸ‡¨ðŸ‡«', name: 'Central African Republic', abbr: 'CF', code: '236' },
  { icon: 'ðŸ‡¹ðŸ‡©', name: 'Chad', abbr: 'TD', code: '235' },
  { icon: 'ðŸ‡¨ðŸ‡±', name: 'Chile', abbr: 'CL', code: '56' },
  { icon: 'ðŸ‡¨ðŸ‡³', name: 'China', abbr: 'CN', code: '86' },
  { icon: 'ðŸ‡¨ðŸ‡½', name: 'Christmas Island', abbr: 'CX', code: '61' },
  { icon: 'ðŸ‡¨ðŸ‡¨', name: 'Cocos (Keeling) Islands', abbr: 'CC', code: '61' },
  { icon: 'ðŸ‡¨ðŸ‡´', name: 'Colombia', abbr: 'CO', code: '57' },
  { icon: 'ðŸ‡°ðŸ‡²', name: 'Comoros', abbr: 'KM', code: '269' },
  {
    icon: 'ðŸ‡¨ðŸ‡©',
    name: 'Congo, Democratic Republic of the',
    abbr: 'CG',
    code: '243',
  },
  {
    icon: 'ðŸ‡¨ðŸ‡¬',
    name: 'Congo, Republic of the',
    abbr: 'CD',
    code: '242',
  },
  { icon: 'ðŸ‡¨ðŸ‡°', name: 'Cook Islands', abbr: 'CK', code: '682' },
  { icon: 'ðŸ‡¨ðŸ‡·', name: 'Costa Rica', abbr: 'CR', code: '506' },
  { icon: 'ðŸ‡¨ðŸ‡®', name: "Cote d'Ivoire", abbr: 'CI', code: '225' },
  { icon: 'ðŸ‡­ðŸ‡·', name: 'Croatia', abbr: 'HR', code: '385' },
  { icon: 'ðŸ‡¨ðŸ‡º', name: 'Cuba', abbr: 'CU', code: '53' },
  { icon: 'ðŸ‡¨ðŸ‡¼', name: 'Curacao', abbr: 'CW', code: '599' },
  { icon: 'ðŸ‡¨ðŸ‡¾', name: 'Cyprus', abbr: 'CY', code: '357' },
  { icon: 'ðŸ‡¨ðŸ‡¿', name: 'Czech Republic', abbr: 'CZ', code: '420' },
  { icon: 'ðŸ‡©ðŸ‡°', name: 'Denmark', abbr: 'DK', code: '45' },
  { icon: 'ðŸ‡©ðŸ‡¯', name: 'Djibouti', abbr: 'DJ', code: '253' },
  { icon: 'ðŸ‡©ðŸ‡²', name: 'Dominica', abbr: 'DM', code: '1-767' },
  { icon: 'ðŸ‡©ðŸ‡´', name: 'Dominican Republic', abbr: 'DO', code: '1-809' },
  { icon: 'ðŸ‡ªðŸ‡¨', name: 'Ecuador', abbr: 'EC', code: '593' },
  { icon: 'ðŸ‡ªðŸ‡¬', name: 'Egypt', abbr: 'EG', code: '20' },
  { icon: 'ðŸ‡¸ðŸ‡»', name: 'El Salvador', abbr: 'SV', code: '503' },
  { icon: 'ðŸ‡¬ðŸ‡¶', name: 'Equatorial Guinea', abbr: 'GQ', code: '240' },
  { icon: 'ðŸ‡ªðŸ‡·', name: 'Eritrea', abbr: 'ER', code: '291' },
  { icon: 'ðŸ‡ªðŸ‡ª', name: 'Estonia', abbr: 'EE', code: '372' },
  { icon: 'ðŸ‡ªðŸ‡¹', name: 'Ethiopia', abbr: 'ET', code: '251' },
  { icon: 'ðŸ‡«ðŸ‡°', name: 'Falkland Islands (Malvinas)', abbr: 'FK', code: '500' },
  { icon: 'ðŸ‡«ðŸ‡´', name: 'Faroe Islands', abbr: 'FO', code: '298' },
  { icon: 'ðŸ‡«ðŸ‡¯', name: 'Fiji', abbr: 'FJ', code: '679' },
  { icon: 'ðŸ‡«ðŸ‡®', name: 'Finland', abbr: 'FI', code: '358' },
  { icon: 'ðŸ‡«ðŸ‡·', name: 'France', abbr: 'FR', code: '33', suggested: true },
  { icon: 'ðŸ‡¬ðŸ‡«', name: 'French Guiana', abbr: 'GF', code: '594' },
  { icon: 'ðŸ‡µðŸ‡«', name: 'French Polynesia', abbr: 'PF', code: '689' },
  { icon: 'ðŸ‡¹ðŸ‡«', name: 'French Southern Territories', abbr: 'TF', code: '262' },
  { icon: 'ðŸ‡¬ðŸ‡¦', name: 'Gabon', abbr: 'GA', code: '241' },
  { icon: 'ðŸ‡¬ðŸ‡²', name: 'Gambia', abbr: 'GM', code: '220' },
  { icon: 'ðŸ‡¬ðŸ‡ª', name: 'Georgia', abbr: 'GE', code: '995' },
  { icon: 'ðŸ‡©ðŸ‡ª', name: 'Germany', abbr: 'DE', code: '49', suggested: true },
  { icon: 'ðŸ‡¬ðŸ‡­', name: 'Ghana', abbr: 'GH', code: '233' },
  { icon: 'ðŸ‡¬ðŸ‡®', name: 'Gibraltar', abbr: 'GI', code: '350' },
  { icon: 'ðŸ‡¬ðŸ‡·', name: 'Greece', abbr: 'GR', code: '30' },
  { icon: 'ðŸ‡¬ðŸ‡±', name: 'Greenland', abbr: 'GL', code: '299' },
  { icon: 'ðŸ‡¬ðŸ‡©', name: 'Grenada', abbr: 'GD', code: '1-473' },
  { icon: 'ðŸ‡¬ðŸ‡µ', name: 'Guadeloupe', abbr: 'GP', code: '590' },
  { icon: 'ðŸ‡¬ðŸ‡º', name: 'Guam', abbr: 'GU', code: '1-671' },
  { icon: 'ðŸ‡¬ðŸ‡¹', name: 'Guatemala', abbr: 'GT', code: '502' },
  { icon: 'ðŸ‡¬ðŸ‡¬', name: 'Guernsey', abbr: 'GG', code: '44' },
  { icon: 'ðŸ‡¬ðŸ‡¼', name: 'Guinea-Bissau', abbr: 'GW', code: '245' },
  { icon: 'ðŸ‡¬ðŸ‡³', name: 'Guinea', abbr: 'GN', code: '224' },
  { icon: 'ðŸ‡¬ðŸ‡¾', name: 'Guyana', abbr: 'GY', code: '592' },
  { icon: 'ðŸ‡­ðŸ‡¹', name: 'Haiti', abbr: 'HT', code: '509' },
  {
    icon: 'ðŸ‡­ðŸ‡²',
    name: 'Heard Island and McDonald Islands',
    abbr: 'HM',
    code: '672',
  },
  {
    icon: 'ðŸ‡»ðŸ‡¦',
    name: 'Holy See (Vatican City State)',
    abbr: 'VA',
    code: '379',
  },
  { icon: 'ðŸ‡­ðŸ‡³', name: 'Honduras', abbr: 'HN', code: '504' },
  { icon: 'ðŸ‡­ðŸ‡°', name: 'Hong Kong', abbr: 'HK', code: '852' },
  { icon: 'ðŸ‡­ðŸ‡º', name: 'Hungary', abbr: 'HU', code: '36' },
  { icon: 'ðŸ‡®ðŸ‡¸', name: 'Iceland', abbr: 'IS', code: '354' },
  { icon: 'ðŸ‡®ðŸ‡³', name: 'India', abbr: 'IN', code: '91' },
  { icon: 'ðŸ‡®ðŸ‡©', name: 'Indonesia', abbr: 'ID', code: '62' },
  { icon: 'ðŸ‡®ðŸ‡·', name: 'Iran, Islamic Republic of', abbr: 'IR', code: '98' },
  { icon: 'ðŸ‡®ðŸ‡¶', name: 'Iraq', abbr: 'IQ', code: '964' },
  { icon: 'ðŸ‡®ðŸ‡ª', name: 'Ireland', abbr: 'IE', code: '353' },
  { icon: 'ðŸ‡®ðŸ‡²', name: 'Isle of Man', abbr: 'IM', code: '44' },
  { icon: 'ðŸ‡®ðŸ‡±', name: 'Israel', abbr: 'IL', code: '972' },
  { icon: 'ðŸ‡®ðŸ‡¹', name: 'Italy', abbr: 'IT', code: '39' },
  { icon: 'ðŸ‡¯ðŸ‡²', name: 'Jamaica', abbr: 'JM', code: '1-876' },
  { icon: 'ðŸ‡¯ðŸ‡µ', name: 'Japan', abbr: 'JP', code: '81', suggested: true },
  { icon: 'ðŸ‡¯ðŸ‡ª', name: 'Jersey', abbr: 'JE', code: '44' },
  { icon: 'ðŸ‡¯ðŸ‡´', name: 'Jordan', abbr: 'JO', code: '962' },
  { icon: 'ðŸ‡°ðŸ‡¿', name: 'Kazakhstan', abbr: 'KZ', code: '7' },
  { icon: 'ðŸ‡°ðŸ‡ª', name: 'Kenya', abbr: 'KE', code: '254' },
  { icon: 'ðŸ‡°ðŸ‡®', name: 'Kiribati', abbr: 'KI', code: '686' },
  {
    icon: 'ðŸ‡°ðŸ‡µ',
    name: "Korea, Democratic People's Republic of",
    abbr: 'KP',
    code: '850',
  },
  { icon: 'ðŸ‡°ðŸ‡·', name: 'Korea, Republic of', abbr: 'KR', code: '82' },
  { icon: 'ðŸ‡½ðŸ‡°', name: 'Kosovo', abbr: 'XK', code: '383' },
  { icon: 'ðŸ‡°ðŸ‡¼', name: 'Kuwait', abbr: 'KW', code: '965' },
  { icon: 'ðŸ‡°ðŸ‡¬', name: 'Kyrgyzstan', abbr: 'KG', code: '996' },
  {
    icon: 'ðŸ‡±ðŸ‡¦',
    name: "Lao People's Democratic Republic",
    abbr: 'LA',
    code: '856',
  },
  { icon: 'ðŸ‡±ðŸ‡»', name: 'Latvia', abbr: 'LV', code: '371' },
  { icon: 'ðŸ‡±ðŸ‡§', name: 'Lebanon', abbr: 'LB', code: '961' },
  { icon: 'ðŸ‡±ðŸ‡¸', name: 'Lesotho', abbr: 'LS', code: '266' },
  { icon: 'ðŸ‡±ðŸ‡·', name: 'Liberia', abbr: 'LR', code: '231' },
  { icon: 'ðŸ‡±ðŸ‡¾', name: 'Libya', abbr: 'LY', code: '218' },
  { icon: 'ðŸ‡±ðŸ‡®', name: 'Liechtenstein', abbr: 'LI', code: '423' },
  { icon: 'ðŸ‡±ðŸ‡¹', name: 'Lithuania', abbr: 'LT', code: '370' },
  { icon: 'ðŸ‡±ðŸ‡º', name: 'Luxembourg', abbr: 'LU', code: '352' },
  { icon: 'ðŸ‡²ðŸ‡´', name: 'Macao', abbr: 'MO', code: '853' },
  {
    icon: 'ðŸ‡²ðŸ‡°',
    name: 'Macedonia, the Former Yugoslav Republic of',
    abbr: 'MK',
    code: '389',
  },
  { icon: 'ðŸ‡²ðŸ‡¬', name: 'Madagascar', abbr: 'MG', code: '261' },
  { icon: 'ðŸ‡²ðŸ‡¼', name: 'Malawi', abbr: 'MW', code: '265' },
  { icon: 'ðŸ‡²ðŸ‡¾', name: 'Malaysia', abbr: 'MY', code: '60' },
  { icon: 'ðŸ‡²ðŸ‡»', name: 'Maldives', abbr: 'MV', code: '960' },
  { icon: 'ðŸ‡²ðŸ‡±', name: 'Mali', abbr: 'ML', code: '223' },
  { icon: 'ðŸ‡²ðŸ‡¹', name: 'Malta', abbr: 'MT', code: '356' },
  { icon: 'ðŸ‡²ðŸ‡­', name: 'Marshall Islands', abbr: 'MH', code: '692' },
  { icon: 'ðŸ‡²ðŸ‡¶', name: 'Martinique', abbr: 'MQ', code: '596' },
  { icon: 'ðŸ‡²ðŸ‡·', name: 'Mauritania', abbr: 'MR', code: '222' },
  { icon: 'ðŸ‡²ðŸ‡º', name: 'Mauritius', abbr: 'MU', code: '230' },
  { icon: 'ðŸ‡¾ðŸ‡¹', name: 'Mayotte', abbr: 'YT', code: '262' },
  { icon: 'ðŸ‡²ðŸ‡½', name: 'Mexico', abbr: 'MX', code: '52' },
  {
    icon: 'ðŸ‡«ðŸ‡²',
    name: 'Micronesia, Federated States of',
    abbr: 'FM',
    code: '691',
  },
  { icon: 'ðŸ‡²ðŸ‡©', name: 'Moldova, Republic of', abbr: 'MD', code: '373' },
  { icon: 'ðŸ‡²ðŸ‡¨', name: 'Monaco', abbr: 'MC', code: '377' },
  { icon: 'ðŸ‡²ðŸ‡³', name: 'Mongolia', abbr: 'MN', code: '976' },
  { icon: 'ðŸ‡²ðŸ‡ª', name: 'Montenegro', abbr: 'ME', code: '382' },
  { icon: 'ðŸ‡²ðŸ‡¸', name: 'Montserrat', abbr: 'MS', code: '1-664' },
  { icon: 'ðŸ‡²ðŸ‡¦', name: 'Morocco', abbr: 'MA', code: '212' },
  { icon: 'ðŸ‡²ðŸ‡¿', name: 'Mozambique', abbr: 'MZ', code: '258' },
  { icon: 'ðŸ‡²ðŸ‡²', name: 'Myanmar', abbr: 'MM', code: '95' },
  { icon: 'ðŸ‡³ðŸ‡¦', name: 'Namibia', abbr: 'NA', code: '264' },
  { icon: 'ðŸ‡³ðŸ‡·', name: 'Nauru', abbr: 'NR', code: '674' },
  { icon: 'ðŸ‡³ðŸ‡µ', name: 'Nepal', abbr: 'NP', code: '977' },
  { icon: 'ðŸ‡³ðŸ‡±', name: 'Netherlands', abbr: 'NL', code: '31' },
  { icon: 'ðŸ‡³ðŸ‡¨', name: 'New Caledonia', abbr: 'NC', code: '687' },
  { icon: 'ðŸ‡³ðŸ‡¿', name: 'New Zealand', abbr: 'NZ', code: '64' },
  { icon: 'ðŸ‡³ðŸ‡®', name: 'Nicaragua', abbr: 'NI', code: '505' },
  { icon: 'ðŸ‡³ðŸ‡ª', name: 'Niger', abbr: 'NE', code: '227' },
  { icon: 'ðŸ‡³ðŸ‡¬', name: 'Nigeria', abbr: 'NG', code: '234' },
  { icon: 'ðŸ‡³ðŸ‡º', name: 'Niue', abbr: 'NU', code: '683' },
  { icon: 'ðŸ‡³ðŸ‡«', name: 'Norfolk Island', abbr: 'NF', code: '672' },
  { icon: 'ðŸ‡²ðŸ‡µ', name: 'Northern Mariana Islands', abbr: 'MP', code: '1-670' },
  { icon: 'ðŸ‡³ðŸ‡´', name: 'Norway', abbr: 'NO', code: '47' },
  { icon: 'ðŸ‡´ðŸ‡²', name: 'Oman', abbr: 'OM', code: '968' },
  { icon: 'ðŸ‡µðŸ‡°', name: 'Pakistan', abbr: 'PK', code: '92' },
  { icon: 'ðŸ‡µðŸ‡¼', name: 'Palau', abbr: 'PW', code: '680' },
  { icon: 'ðŸ‡µðŸ‡¸', name: 'Palestine, State of', abbr: 'PS', code: '970' },
  { icon: 'ðŸ‡µðŸ‡¦', name: 'Panama', abbr: 'PA', code: '507' },
  { icon: 'ðŸ‡µðŸ‡¬', name: 'Papua New Guinea', abbr: 'PG', code: '675' },
  { icon: 'ðŸ‡µðŸ‡¾', name: 'Paraguay', abbr: 'PY', code: '595' },
  { icon: 'ðŸ‡µðŸ‡ª', name: 'Peru', abbr: 'PE', code: '51' },
  { icon: 'ðŸ‡µðŸ‡­', name: 'Philippines', abbr: 'PH', code: '63' },
  { icon: 'ðŸ‡µðŸ‡³', name: 'Pitcairn', abbr: 'PN', code: '870' },
  { icon: 'ðŸ‡µðŸ‡±', name: 'Poland', abbr: 'PL', code: '48' },
  { icon: 'ðŸ‡µðŸ‡¹', name: 'Portugal', abbr: 'PT', code: '351' },
  { icon: 'ðŸ‡µðŸ‡·', name: 'Puerto Rico', abbr: 'PR', code: '1' },
  { icon: 'ðŸ‡¶ðŸ‡¦', name: 'Qatar', abbr: 'QA', code: '974' },
  { icon: 'ðŸ‡·ðŸ‡ª', name: 'Reunion', abbr: 'RE', code: '262' },
  { icon: 'ðŸ‡·ðŸ‡´', name: 'Romania', abbr: 'RO', code: '40' },
  { icon: 'ðŸ‡·ðŸ‡º', name: 'Russian Federation', abbr: 'RU', code: '7' },
  { icon: 'ðŸ‡·ðŸ‡¼', name: 'Rwanda', abbr: 'RW', code: '250' },
  { icon: 'ðŸ‡§ðŸ‡±', name: 'Saint Barthelemy', abbr: 'BL', code: '590' },
  { icon: 'ðŸ‡¸ðŸ‡­', name: 'Saint Helena', abbr: 'SH', code: '290' },
  { icon: 'ðŸ‡°ðŸ‡³', name: 'Saint Kitts and Nevis', abbr: 'KN', code: '1-869' },
  { icon: 'ðŸ‡±ðŸ‡¨', name: 'Saint Lucia', abbr: 'LC', code: '1-758' },
  { icon: 'ðŸ‡²ðŸ‡«', name: 'Saint Martin (French part)', abbr: 'MF', code: '590' },
  { icon: 'ðŸ‡µðŸ‡²', name: 'Saint Pierre and Miquelon', abbr: 'PM', code: '508' },
  {
    icon: 'ðŸ‡»ðŸ‡¨',
    name: 'Saint Vincent and the Grenadines',
    abbr: 'VC',
    code: '1-784',
  },
  { icon: 'ðŸ‡¼ðŸ‡¸', name: 'Samoa', abbr: 'WS', code: '685' },
  { icon: 'ðŸ‡¸ðŸ‡²', name: 'San Marino', abbr: 'SM', code: '378' },
  { icon: 'ðŸ‡¸ðŸ‡¹', name: 'Sao Tome and Principe', abbr: 'ST', code: '239' },
  { icon: 'ðŸ‡¸ðŸ‡¦', name: 'Saudi Arabia', abbr: 'SA', code: '966' },
  { icon: 'ðŸ‡¸ðŸ‡³', name: 'Senegal', abbr: 'SN', code: '221' },
  { icon: 'ðŸ‡·ðŸ‡¸', name: 'Serbia', abbr: 'RS', code: '381' },
  { icon: 'ðŸ‡¸ðŸ‡¨', name: 'Seychelles', abbr: 'SC', code: '248' },
  { icon: 'ðŸ‡¸ðŸ‡±', name: 'Sierra Leone', abbr: 'SL', code: '232' },
  { icon: 'ðŸ‡¸ðŸ‡¬', name: 'Singapore', abbr: 'SG', code: '65' },
  { icon: 'ðŸ‡¸ðŸ‡½', name: 'Sint Maarten (Dutch part)', abbr: 'SX', code: '1-721' },
  { icon: 'ðŸ‡¸ðŸ‡°', name: 'Slovakia', abbr: 'SK', code: '421' },
  { icon: 'ðŸ‡¸ðŸ‡®', name: 'Slovenia', abbr: 'SI', code: '386' },
  { icon: 'ðŸ‡¸ðŸ‡§', name: 'Solomon Islands', abbr: 'SB', code: '677' },
  { icon: 'ðŸ‡¸ðŸ‡´', name: 'Somalia', abbr: 'SO', code: '252' },
  { icon: 'ðŸ‡¿ðŸ‡¦', name: 'South Africa', abbr: 'ZA', code: '27' },
  {
    icon: 'ðŸ‡¬ðŸ‡¸',
    name: 'South Georgia and the South Sandwich Islands',
    abbr: 'GS',
    code: '500',
  },
  { icon: 'ðŸ‡¸ðŸ‡¸', name: 'South Sudan', abbr: 'SS', code: '211' },
  { icon: 'ðŸ‡ªðŸ‡¸', name: 'Spain', abbr: 'ES', code: '34' },
  { icon: 'ðŸ‡±ðŸ‡°', name: 'Sri Lanka', abbr: 'LK', code: '94' },
  { icon: 'ðŸ‡¸ðŸ‡©', name: 'Sudan', abbr: 'SD', code: '249' },
  { icon: 'ðŸ‡¸ðŸ‡·', name: 'Suriname', abbr: 'SR', code: '597' },
  { icon: 'ðŸ‡¸ðŸ‡¯', name: 'Svalbard and Jan Mayen', abbr: 'SJ', code: '47' },
  { icon: 'ðŸ‡¸ðŸ‡¿', name: 'Swaziland', abbr: 'SZ', code: '268' },
  { icon: 'ðŸ‡¸ðŸ‡ª', name: 'Sweden', abbr: 'SE', code: '46' },
  { icon: 'ðŸ‡¨ðŸ‡­', name: 'Switzerland', abbr: 'CH', code: '41' },
  { icon: 'ðŸ‡¸ðŸ‡¾', name: 'Syrian Arab Republic', abbr: 'SY', code: '963' },
  { icon: 'ðŸ‡¹ðŸ‡¼', name: 'Taiwan, Province of China', abbr: 'TW', code: '886' },
  { icon: 'ðŸ‡¹ðŸ‡¯', name: 'Tajikistan', abbr: 'TJ', code: '992' },
  { icon: 'ðŸ‡¹ðŸ‡­', name: 'Thailand', abbr: 'TH', code: '66' },
  { icon: 'ðŸ‡¹ðŸ‡±', name: 'Timor-Leste', abbr: 'TL', code: '670' },
  { icon: 'ðŸ‡¹ðŸ‡¬', name: 'Togo', abbr: 'TG', code: '228' },
  { icon: 'ðŸ‡¹ðŸ‡°', name: 'Tokelau', abbr: 'TK', code: '690' },
  { icon: 'ðŸ‡¹ðŸ‡´', name: 'Tonga', abbr: 'TO', code: '676' },
  { icon: 'ðŸ‡¹ðŸ‡¹', name: 'Trinidad and Tobago', abbr: 'TT', code: '1-868' },
  { icon: 'ðŸ‡¹ðŸ‡³', name: 'Tunisia', abbr: 'TN', code: '216' },
  { icon: 'ðŸ‡¹ðŸ‡·', name: 'Turkey', abbr: 'TR', code: '90' },
  { icon: 'ðŸ‡¹ðŸ‡²', name: 'Turkmenistan', abbr: 'TM', code: '993' },
  { icon: 'ðŸ‡¹ðŸ‡¨', name: 'Turks and Caicos Islands', abbr: 'TC', code: '1-649' },
  { icon: 'ðŸ‡¹ðŸ‡»', name: 'Tuvalu', abbr: 'TV', code: '688' },
  { icon: 'ðŸ‡ºðŸ‡¬', name: 'Uganda', abbr: 'UG', code: '256' },
  { icon: 'ðŸ‡ºðŸ‡¦', name: 'Ukraine', abbr: 'UA', code: '380' },
  { icon: 'ðŸ‡¦ðŸ‡ª', name: 'United Arab Emirates', abbr: 'AE', code: '971' },
  { icon: 'ðŸ‡¬ðŸ‡§', name: 'United Kingdom', abbr: 'GB', code: '44' },
  { icon: 'ðŸ‡¹ðŸ‡¿', name: 'United Republic of Tanzania', abbr: 'TZ', code: '255' },
  { icon: 'ðŸ‡ºðŸ‡²', name: 'United States', abbr: 'US', code: '1', suggested: true },
  { icon: 'ðŸ‡ºðŸ‡¾', name: 'Uruguay', abbr: 'UY', code: '598' },
  { icon: 'ðŸ‡»ðŸ‡®', name: 'US Virgin Islands', abbr: 'VI', code: '1-340' },
  { icon: 'ðŸ‡ºðŸ‡¿', name: 'Uzbekistan', abbr: 'UZ', code: '998' },
  { icon: 'ðŸ‡»ðŸ‡º', name: 'Vanuatu', abbr: 'VU', code: '678' },
  { icon: 'ðŸ‡»ðŸ‡ª', name: 'Venezuela', abbr: 'VE', code: '58' },
  { icon: 'ðŸ‡»ðŸ‡³', name: 'Vietnam', abbr: 'VN', code: '84' },
  { icon: 'ðŸ‡¼ðŸ‡«', name: 'Wallis and Futuna', abbr: 'WF', code: '681' },
  { icon: 'ðŸ‡ªðŸ‡­', name: 'Western Sahara', abbr: 'EH', code: '212' },
  { icon: 'ðŸ‡¾ðŸ‡ª', name: 'Yemen', abbr: 'YE', code: '967' },
  { icon: 'ðŸ‡¿ðŸ‡²', name: 'Zambia', abbr: 'ZM', code: '260' },
  { icon: 'ðŸ‡¿ðŸ‡¼', name: 'Zimbabwe', abbr: 'ZW', code: '263' },
];
