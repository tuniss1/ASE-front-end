export const COOKIE_EXPIRE_TIME = 1 / 1440 // 1 minute
export const MIN_DESKTOP_WIDTH = 1200
export const MIN_TABLET_WIDTH = 768
export const MIN_MOBILE_WIDTH = 320
export const MIN_LARGE_MOBILE_WIDTH = 576
export const MAXIMUM_SIGNIFICANT_DIGITS = 3
export const TOTAL_SLIDERs = 3
export const IMAGE_QUALITY = {
  LOW: 320,
  MED: 480,
  HIGH: 720,
  HD: 1080,
}

export const FOCUS_WITH_MOBILE = 330
export const FOCUS_WITH_DESKTOP = 510
export const WIDTH_ABOVE_MOBILE = 500
export const MODEL_WIDTH_ABOVE_DESKTOP = 540
export const MODEL_WIDTH_BELOW_DESKTOP = 450
export const PRODUCT_TYPE = {
  SINGLE: 1,
  LIST: 2,
}
export const ORDER_TYPE = {
  SINGLE: 1,
  LIST: 2,
}
export const ACCOMODATION_TYPE = {
  SINGLE: 1,
  LIST: 2,
}
export const ORDER_STATUS = {
  ALL: -1,
  PENDING: 0,
  CONFIRMED: 1,
  DELIVERING: 2,
  FINISHED: 3,
  CANCELLED: 4,
}
export const LIMIT_PRODUCT_ORDER_LIST = 2
export const POPUP_STATE_CLOSE = -1

export const LIST_REGION = [
  { key: 'SA', value: 'Ả Rập Saudi' },
  { key: 'AF', value: 'Afghanistan' },
  { key: 'EG', value: 'Ai Cập' },
  { key: 'AX', value: 'Åland Islands' },
  { key: 'AL', value: 'Albania' },
  { key: 'DZ', value: 'Algeria' },
  { key: 'AS', value: 'American Samoa' },
  { key: 'AD', value: 'Andorra' },
  { key: 'AO', value: 'Angola' },
  { key: 'AI', value: 'Anguilla' },
  { key: 'GB', value: 'Anh (UK)' },
  { key: 'AQ', value: 'Antarctica' },
  { key: 'AG', value: 'Antigua và Barbuda' },
  { key: 'AT', value: 'Áo' },
  { key: 'AR', value: 'Argentina' },
  { key: 'AM', value: 'Armenia' },
  { key: 'AW', value: 'Aruba' },
  { key: 'AZ', value: 'Azerbaijan' },
  { key: 'IN', value: 'Ấn Độ' },
  { key: 'BS', value: 'Bahamas' },
  { key: 'BH', value: 'Bahrain' },
  { key: 'BD', value: 'Bangladesh' },
  { key: 'BB', value: 'Barbados' },
  { key: 'BY', value: 'Belarus' },
  { key: 'PW', value: 'Belau' },
  { key: 'BZ', value: 'Belize' },
  { key: 'BJ', value: 'Benin' },
  { key: 'BM', value: 'Bermuda' },
  { key: 'BT', value: 'Bhutan' },
  { key: 'BE', value: 'Bỉ' },
  { key: 'BO', value: 'Bolivia' },
  { key: 'BQ', value: 'Bonaire, Saint Eustatius và Saba' },
  { key: 'BA', value: 'Bosnia và Herzegovina' },
  { key: 'BW', value: 'Botswana' },
  { key: 'PT', value: 'Bồ Đào Nha' },
  { key: 'CI', value: 'Bờ biển Ngà' },
  { key: 'BR', value: 'Brazil' },
  { key: 'BN', value: 'Brunei' },
  { key: 'BG', value: 'Bulgaria' },
  { key: 'BF', value: 'Burkina Faso' },
  { key: 'BI', value: 'Burundi' },
  { key: 'UM', value: 'Các Tiểu đảo xa của Hoa Kỳ (US)' },
  { key: 'AE', value: 'Các tiểu vương quốc Ả Rập' },
  { key: 'CM', value: 'Cameroon' },
  { key: 'KH', value: 'Campuchia' },
  { key: 'CA', value: 'Canada' },
  { key: 'CV', value: 'Cape Verde' },
  { key: 'TD', value: 'Chad' },
  { key: 'CL', value: 'Chile' },
  { key: 'CX', value: 'Christmas Island' },
  { key: 'CO', value: 'Colombia' },
  { key: 'KM', value: 'Comoros' },
  { key: 'CG', value: 'Congo (Brazzaville)' },
  { key: 'CD', value: 'Congo (Kinshasa)' },
  { key: 'CR', value: 'Costa Rica' },
  { key: 'DO', value: 'Cộng hòa Dominica' },
  { key: 'CZ', value: 'Cộng hòa Séc' },
  { key: 'CF', value: 'Cộng hòa Trung Phi' },
  { key: 'HR', value: 'Croatia' },
  { key: 'CU', value: 'Cuba' },
  { key: 'CW', value: 'CuraÇao' },
  { key: 'CY', value: 'Cyprus' },
  { key: 'DJ', value: 'Djibouti' },
  { key: 'DM', value: 'Dominica' },
  { key: 'TW', value: 'Đài Loan' },
  { key: 'DK', value: 'Đan Mạch' },
  { key: 'BV', value: 'Đảo Bouvet' },
  { key: 'HM', value: 'Đảo Heard và quần đảo McDonald' },
  { key: 'IM', value: 'Đảo Man' },
  { key: 'WS', value: 'Đảo Samoa' },
  { key: 'TL', value: 'Đông Timo' },
  { key: 'DE', value: 'Đức' },
  { key: 'EC', value: 'Ecuador' },
  { key: 'SV', value: 'El Salvador' },
  { key: 'ER', value: 'Eritrea' },
  { key: 'EE', value: 'Estonia' },
  { key: 'ET', value: 'Ethiopia' },
  { key: 'FJ', value: 'Fiji' },
  { key: 'GA', value: 'Gabon' },
  { key: 'GM', value: 'Gambia' },
  { key: 'GE', value: 'Georgia' },
  { key: 'GH', value: 'Ghana' },
  { key: 'GI', value: 'Gibraltar' },
  { key: 'GL', value: 'Greenland' },
  { key: 'GD', value: 'Grenada' },
  { key: 'GP', value: 'Guadeloupe' },
  { key: 'GU', value: 'Guam' },
  { key: 'GT', value: 'Guatemala' },
  { key: 'GG', value: 'Guernsey' },
  { key: 'GN', value: 'Guinea' },
  { key: 'GQ', value: 'Guinea Xích đạo' },
  { key: 'GW', value: 'Guinea-Bissau' },
  { key: 'GY', value: 'Guyana' },
  { key: 'GF', value: 'Guyane thuộc Pháp' },
  { key: 'NL', value: 'Hà Lan' },
  { key: 'HT', value: 'Haiti' },
  { key: 'KR', value: 'Hàn Quốc' },
  { key: 'HN', value: 'Honduras' },
  { key: 'HK', value: 'Hồng Kông' },
  { key: 'HU', value: 'Hungary' },
  { key: 'GR', value: 'Hy Lạp' },
  { key: 'IS', value: 'Iceland' },
  { key: 'ID', value: 'Indonesia' },
  { key: 'IR', value: 'Iran' },
  { key: 'IQ', value: 'Iraq' },
  { key: 'IE', value: 'Ireland' },
  { key: 'IL', value: 'Israel' },
  { key: 'JM', value: 'Jamaica' },
  { key: 'JE', value: 'Jersey' },
  { key: 'JO', value: 'Jordan' },
  { key: 'KZ', value: 'Kazakhstan' },
  { key: 'KE', value: 'Kenya' },
  { key: 'KI', value: 'Kiribati' },
  { key: 'KW', value: 'Kuwait' },
  { key: 'KG', value: 'Kyrgyzstan' },
  { key: 'IO', value: 'Lãnh thổ Ấn Độ Dương thuộc Anh' },
  { key: 'TF', value: 'Lãnh thổ miền Nam nước Pháp' },
  { key: 'LA', value: 'Lào' },
  { key: 'LV', value: 'Latvia' },
  { key: 'LB', value: 'Lebanon' },
  { key: 'LS', value: 'Lesotho' },
  { key: 'LR', value: 'Liberia' },
  { key: 'LY', value: 'Libya' },
  { key: 'LI', value: 'Liechtenstein' },
  { key: 'LT', value: 'Lithuania' },
  { key: 'LU', value: 'Luxembourg' },
  { key: 'MO', value: 'Ma Cao' },
  { key: 'MG', value: 'Madagascar' },
  { key: 'MW', value: 'Malawi' },
  { key: 'MY', value: 'Malaysia' },
  { key: 'MV', value: 'Maldives' },
  { key: 'ML', value: 'Mali' },
  { key: 'MT', value: 'Malta' },
  { key: 'MQ', value: 'Martinique' },
  { key: 'MR', value: 'Mauritania' },
  { key: 'MU', value: 'Mauritius' },
  { key: 'YT', value: 'Mayotte' },
  { key: 'MX', value: 'Mexico' },
  { key: 'FM', value: 'Micronesia' },
  { key: 'MD', value: 'Moldova' },
  { key: 'MC', value: 'Monaco' },
  { key: 'ME', value: 'Montenegro' },
  { key: 'MS', value: 'Montserrat' },
  { key: 'MA', value: 'Morocco' },
  { key: 'MZ', value: 'Mozambique' },
  { key: 'MN', value: 'Mông Cổ' },
  { key: 'US', value: 'Mỹ (US)' },
  { key: 'MM', value: 'Myanmar' },
  { key: 'NO', value: 'Na Uy' },
  { key: 'GS', value: 'Nam Georgia và Quần đảo Nam Sandwich' },
  { key: 'ZA', value: 'Nam Phi' },
  { key: 'SS', value: 'Nam Sudan' },
  { key: 'NA', value: 'Namibia' },
  { key: 'NR', value: 'Nauru' },
  { key: 'NP', value: 'Nepal' },
  { key: 'NC', value: 'New Caledonia' },
  { key: 'NZ', value: 'New Zealand' },
  { key: 'RU', value: 'Nga' },
  { key: 'JP', value: 'Nhật Bản' },
  { key: 'NI', value: 'Nicaragua' },
  { key: 'NE', value: 'Niger' },
  { key: 'NG', value: 'Nigeria' },
  { key: 'NU', value: 'Niue' },
  { key: 'NF', value: 'Norfolk Island' },
  { key: 'MK', value: 'North Macedonia' },
  { key: 'OM', value: 'Oman' },
  { key: 'PK', value: 'Pakistan' },
  { key: 'PS', value: 'Palestinian Territory' },
  { key: 'PA', value: 'Panama' },
  { key: 'PG', value: 'Papua New Guinea' },
  { key: 'PY', value: 'Paraguay' },
  { key: 'PE', value: 'Peru' },
  { key: 'FR', value: 'Pháp' },
  { key: 'FI', value: 'Phần Lan' },
  { key: 'PL', value: 'Phần Lan' },
  { key: 'PH', value: 'Philippines' },
  { key: 'PN', value: 'Pitcairn' },
  { key: 'PF', value: 'Polynesia thuộc Pháp' },
  { key: 'PR', value: 'Puerto Rico' },
  { key: 'QA', value: 'Qatar' },
  { key: 'MP', value: 'Quần đảo Bắc Mariana' },
  { key: 'KY', value: 'Quần đảo Cayman' },
  { key: 'CC', value: 'Quần đảo Cocos (Keeling)' },
  { key: 'CK', value: 'Quần đảo Cook' },
  { key: 'FK', value: 'Quần đảo Falkland' },
  { key: 'FO', value: 'Quần đảo Faroe' },
  { key: 'MH', value: 'Quần đảo Marshall' },
  { key: 'SB', value: 'Quần đảo Solomon' },
  { key: 'RE', value: 'Reunion' },
  { key: 'RO', value: 'Romania' },
  { key: 'RW', value: 'Rwanda' },
  { key: 'ST', value: 'São Tomé và Príncipe' },
  { key: 'BL', value: 'Saint Barthélemy' },
  { key: 'SH', value: 'Saint Helena' },
  { key: 'KN', value: 'Saint Kitts và Nevis' },
  { key: 'LC', value: 'Saint Lucia' },
  { key: 'SX', value: 'Saint Martin (thuộc Hà Lan)' },
  { key: 'PM', value: 'Saint Pierre và Miquelon' },
  { key: 'VC', value: 'Saint Vincent và Grenadines' },
  { key: 'MF', value: 'Saint-Martin (thuộc Pháp)' },
  { key: 'SM', value: 'San Marino' },
  { key: 'SN', value: 'Senegal' },
  { key: 'RS', value: 'Serbia' },
  { key: 'SC', value: 'Seychelles' },
  { key: 'SL', value: 'Sierra Leone' },
  { key: 'SG', value: 'Singapore' },
  { key: 'SK', value: 'Slovakia' },
  { key: 'SI', value: 'Slovenia' },
  { key: 'SO', value: 'Somalia' },
  { key: 'LK', value: 'Sri Lanka' },
  { key: 'SD', value: 'Sudan' },
  { key: 'SR', value: 'Suriname' },
  { key: 'SJ', value: 'Svalbard và Jan Mayen' },
  { key: 'SZ', value: 'Swaziland' },
  { key: 'SY', value: 'Syria' },
  { key: 'TJ', value: 'Tajikistan' },
  { key: 'TZ', value: 'Tanzania' },
  { key: 'ES', value: 'Tây Ban Nha' },
  { key: 'TH', value: 'Thái Lan' },
  { key: 'TR', value: 'Thổ Nhĩ Kỳ' },
  { key: 'SE', value: 'Thụy Điển' },
  { key: 'CH', value: 'Thụy Sĩ' },
  { key: 'TG', value: 'Togo' },
  { key: 'TK', value: 'Tokelau' },
  { key: 'TO', value: 'Tonga' },
  { key: 'KP', value: 'Triều Tiên' },
  { key: 'TT', value: 'Trinidad và Tobago' },
  { key: 'CN', value: 'Trung Quốc' },
  { key: 'TN', value: 'Tunisia' },
  { key: 'TM', value: 'Turkmenistan' },
  { key: 'TC', value: 'Turks và quần đảo Caicos' },
  { key: 'TV', value: 'Tuvalu' },
  { key: 'AU', value: 'Úc' },
  { key: 'UG', value: 'Uganda' },
  { key: 'UA', value: 'Ukraine' },
  { key: 'UY', value: 'Uruguay' },
  { key: 'UZ', value: 'Uzbekistan' },
  { key: 'VU', value: 'Vanuatu' },
  { key: 'VA', value: 'Vatican' },
  { key: 'VE', value: 'Venezuela' },
  { key: 'VN', value: 'Việt Nam' },
  { key: 'VG', value: 'Virgin Islands (British)' },
  { key: 'VI', value: 'Virgin Islands (Mỹ)' },
  { key: 'WF', value: 'Wallis và Futuna' },
  { key: 'EH', value: 'Western Sahara' },
  { key: 'IT', value: 'Ý' },
  { key: 'YE', value: 'Yemen' },
  { key: 'ZM', value: 'Zambia' },
  { key: 'ZW', value: 'Zimbabwe' },
]
