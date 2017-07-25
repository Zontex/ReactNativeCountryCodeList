export const getAlphabet = () => {
    let data =
    { A:
   [ { name: 'Abkhazia', code: '+99544' },
     { name: 'Afghanistan', code: '+93' },
     { name: 'Albania', code: '+355' },
     { name: 'Algeria', code: '+213' },
     { name: 'American Samoa', code: '+1684' },
     { name: 'Andorra', code: '+376' },
     { name: 'Angola', code: '+244' },
     { name: 'Anguilla', code: '+1264' },
     { name: 'Antigua and Barbuda', code: '+1268' },
     { name: 'Argentina', code: '+54' },
     { name: 'Armenia', code: '+374' },
     { name: 'Aruba', code: '+297' },
     { name: 'Ascension', code: '+247' },
     { name: 'Australia', code: '+61' },
     { name: 'Australian External Territories', code: '+672' },
     { name: 'Austria', code: '+43' },
     { name: 'Azerbaijan', code: '+994' } ],
  'Å': [ { name: 'Åland Islands', code: '+35818' } ],
  B:
   [ { name: 'Bahamas', code: '+1242' },
     { name: 'Bahrain', code: '+973' },
     { name: 'Bangladesh', code: '+880' },
     { name: 'Barbados', code: '+1246' },
     { name: 'Barbuda', code: '+1268' },
     { name: 'Belarus', code: '+375' },
     { name: 'Belgium', code: '+32' },
     { name: 'Belize', code: '+501' },
     { name: 'Benin', code: '+229' },
     { name: 'Bermuda', code: '+1441' },
     { name: 'Bhutan', code: '+975' },
     { name: 'Bolivia', code: '+591' },
     { name: 'Bonaire', code: '+5997' },
     { name: 'Bosnia and Herzegovina', code: '+387' },
     { name: 'Botswana', code: '+267' },
     { name: 'Brazil', code: '+55' },
     { name: 'British Indian Ocean Territory', code: '+246' },
     { name: 'British Virgin Islands', code: '+1284' },
     { name: 'Brunei Darussalam', code: '+673' },
     { name: 'Bulgaria', code: '+359' },
     { name: 'Burkina Faso', code: '+226' },
     { name: 'Burundi', code: '+257' } ],
  C:
   [ { name: 'Cambodia', code: '+855' },
     { name: 'Cameroon', code: '+237' },
     { name: 'Canada', code: '+1' },
     { name: 'CapeVerde', code: '+238' },
     { name: 'Caribbean Netherlands', code: '+5997' },
     { name: 'Cayman Islands', code: '+1345' },
     { name: 'Central African Republic', code: '+236' },
     { name: 'Chad', code: '+235' },
     { name: 'Chatham Island, NewZealand', code: '+64' },
     { name: 'Chile', code: '+56' },
     { name: 'China', code: '+86' },
     { name: 'Christmas Island', code: '+61' },
     { name: 'Cocos (Keeling) Islands', code: '+61' },
     { name: 'Colombia', code: '+57' },
     { name: 'Comoros', code: '+269' },
     { name: 'Congo', code: '+242' },
     { name: 'Congo, Democratic Republic of the (Zaire)',
       code: '+243' },
     { name: 'Cook Islands', code: '+682' },
     { name: 'Costa Rica', code: '+506' },
     { name: 'Croatia', code: '+385' },
     { name: 'Cuba', code: '+53' },
     { name: 'Curaçao', code: '+5999' },
     { name: 'Cyprus', code: '+357' },
     { name: 'Czech Republic', code: '+420' } ],
  I:
   [ { name: 'Ivory Coast', code: '+225' },
     { name: 'Iceland', code: '+354' },
     { name: 'ICO Global (Mobile Satellite Service)', code: '+8810' },
     { name: 'India', code: '+91' },
     { name: 'Indonesia', code: '+62' },
     { name: 'Inmarsat SNAC', code: '+870' },
     { name: 'International Freephone Service', code: '+800' },
     { name: 'International Shared Cost Service (ISCS)',
       code: '+808' },
     { name: 'Iran', code: '+98' },
     { name: 'Iraq', code: '+964' },
     { name: 'Ireland', code: '+353' },
     { name: 'Iridium (Mobile Satellite service)', code: '+8817' },
     { name: 'IsleofMan', code: '+44' },
     { name: 'Israel', code: '+972' },
     { name: 'Italy', code: '+39' } ],
  G:
   [ { name: 'Guantanamo Bay, Cuba', code: '+5399' },
     { name: 'Gabon', code: '+241' },
     { name: 'Gambia', code: '+220' },
     { name: 'Georgia', code: '+995' },
     { name: 'Germany', code: '+49' },
     { name: 'Ghana', code: '+233' },
     { name: 'Gibraltar', code: '+350' },
     { name: 'Global Mobile Satellite System (GMSS)', code: '+881' },
     { name: 'Globalstar (Mobile Satellite Service)', code: '+8818' },
     { name: 'Greece', code: '+30' },
     { name: 'Greenland', code: '+299' },
     { name: 'Grenada', code: '+1473' },
     { name: 'Guadeloupe', code: '+590' },
     { name: 'Guam', code: '+1671' },
     { name: 'Guatemala', code: '+502' },
     { name: 'Guernsey', code: '+44' },
     { name: 'Guinea', code: '+224' },
     { name: 'Guinea-Bissau', code: '+245' },
     { name: 'Guyana', code: '+592' } ],
  D:
   [ { name: 'Denmark', code: '+45' },
     { name: 'Diego Garcia', code: '+246' },
     { name: 'Djibouti', code: '+253' },
     { name: 'Dominica', code: '+1767' },
     { name: 'Dominican Republic', code: '+1849' } ],
  E:
   [ { name: 'East Timor', code: '+670' },
     { name: 'Easter Island', code: '+56' },
     { name: 'Ecuador', code: '+593' },
     { name: 'Egypt', code: '+20' },
     { name: 'El Salvador', code: '+503' },
     { name: 'Ellipso (Mobile Satellite service)', code: '+8813' },
     { name: 'EMSAT (Mobile Satellite service)', code: '+88213' },
     { name: 'Equatorial Guinea', code: '+240' },
     { name: 'Eritrea', code: '+291' },
     { name: 'Estonia', code: '+372' },
     { name: 'Ethiopia', code: '+251' } ],
  F:
   [ { name: 'Falkland Islands', code: '+500' },
     { name: 'Faroe Islands', code: '+298' },
     { name: 'Fiji', code: '+679' },
     { name: 'Finland', code: '+358' },
     { name: 'France', code: '+33' },
     { name: 'French Antilles', code: '+596' },
     { name: 'French Guiana', code: '+594' },
     { name: 'French Polynesia', code: '+689' } ],
  H:
   [ { name: 'Haiti', code: '+509' },
     { name: 'Honduras', code: '+504' },
     { name: 'Hong Kong', code: '+852' },
     { name: 'Hungary', code: '+36' } ],
  J:
   [ { name: 'Jamaica', code: '+1876' },
     { name: 'Jan Mayen', code: '+4779' },
     { name: 'Japan', code: '+81' },
     { name: 'Jersey', code: '+44' },
     { name: 'Jordan', code: '+962' } ],
  K:
   [ { name: 'Kazakhstan', code: '+77[notes1]' },
     { name: 'Kenya', code: '+254' },
     { name: 'Kiribati', code: '+686' },
     { name: 'Korea, North', code: '+850' },
     { name: 'Korea, South', code: '+82' },
     { name: 'Kosovo', code: '+383' },
     { name: 'Kuwait', code: '+965' },
     { name: 'Kyrgyzstan', code: '+996' } ],
  L:
   [ { name: 'Laos', code: '+856' },
     { name: 'Latvia', code: '+371' },
     { name: 'Lebanon', code: '+961' },
     { name: 'Lesotho', code: '+266' },
     { name: 'Liberia', code: '+231' },
     { name: 'Libya', code: '+218' },
     { name: 'Liechtenstein', code: '+423' },
     { name: 'Lithuania', code: '+370' },
     { name: 'Luxembourg', code: '+352' } ],
  M:
   [ { name: 'Macau', code: '+853' },
     { name: 'Macedonia', code: '+389' },
     { name: 'Madagascar', code: '+261' },
     { name: 'Malawi', code: '+265' },
     { name: 'Malaysia', code: '+60' },
     { name: 'Maldives', code: '+960' },
     { name: 'Mali', code: '+223' },
     { name: 'Malta', code: '+356' },
     { name: 'Marshall Islands', code: '+692' },
     { name: 'Martinique', code: '+596' },
     { name: 'Mauritania', code: '+222' },
     { name: 'Mauritius', code: '+230' },
     { name: 'Mayotte', code: '+262' },
     { name: 'Mexico', code: '+52' },
     { name: 'Micronesia, Federated States of', code: '+691' },
     { name: 'Midway Island, USA', code: '+1808' },
     { name: 'Moldova', code: '+373' },
     { name: 'Monaco', code: '+377' },
     { name: 'Mongolia', code: '+976' },
     { name: 'Montenegro', code: '+382' },
     { name: 'Montserrat', code: '+1664' },
     { name: 'Morocco', code: '+212' },
     { name: 'Mozambique', code: '+258' },
     { name: 'Myanmar', code: '+95' } ],
  N:
   [ { name: 'Namibia', code: '+264' },
     { name: 'Nauru', code: '+674' },
     { name: 'Nepal', code: '+977' },
     { name: 'Netherlands', code: '+31' },
     { name: 'Nevis', code: '+1869' },
     { name: 'New Caledonia', code: '+687' },
     { name: 'New Zealand', code: '+64' },
     { name: 'Nicaragua', code: '+505' },
     { name: 'Niger', code: '+227' },
     { name: 'Nigeria', code: '+234' },
     { name: 'Niue', code: '+683' },
     { name: 'Norfolk Island', code: '+672' },
     { name: 'Northern Cyprus', code: '+90392' },
     { name: 'Northern Mariana Islands', code: '+1670' },
     { name: 'Norway', code: '+47' } ],
  O: [ { name: 'Oman', code: '+968' } ],
  P:
   [ { name: 'Pakistan', code: '+92' },
     { name: 'Palau', code: '+680' },
     { name: 'Palestine, State of', code: '+970' },
     { name: 'Panama', code: '+507' },
     { name: 'Papua New Guinea', code: '+675' },
     { name: 'Paraguay', code: '+595' },
     { name: 'Peru', code: '+51' },
     { name: 'Philippines', code: '+63' },
     { name: 'Pitcairn Islands', code: '+64' },
     { name: 'Poland', code: '+48' },
     { name: 'Portugal', code: '+351' },
     { name: 'Puerto Rico', code: '+1939' } ],
  Q: [ { name: 'Qatar', code: '+974' } ],
  R:
   [ { name: 'Réunion', code: '+262' },
     { name: 'Romania', code: '+40' },
     { name: 'Russia', code: '+7' },
     { name: 'Rwanda', code: '+250' } ],
  S:
   [ { name: 'Saba', code: '+5994' },
     { name: 'Saint Barthélemy', code: '+590' },
     { name: 'Saint Helena', code: '+290' },
     { name: 'Saint Kitts and Nevis', code: '+1869' },
     { name: 'Saint Lucia', code: '+1758' },
     { name: 'Saint Martin (France)', code: '+590' },
     { name: 'Saint Pierre and Miquelon', code: '+508' },
     { name: 'Saint Vincent and the Grenadines', code: '+1784' },
     { name: 'Samoa', code: '+685' },
     { name: 'San Marino', code: '+378' },
     { name: 'São Tomé and Príncipe', code: '+239' },
     { name: 'Saudi Arabia', code: '+966' },
     { name: 'Senegal', code: '+221' },
     { name: 'Serbia', code: '+381' },
     { name: 'Seychelles', code: '+248' },
     { name: 'Sierra Leone', code: '+232' },
     { name: 'Singapore', code: '+65' },
     { name: 'Sint Eustatius', code: '+5993' },
     { name: 'Sint Maarten (Netherlands)', code: '+1721' },
     { name: 'Slovakia', code: '+421' },
     { name: 'Slovenia', code: '+386' },
     { name: 'Solomon Islands', code: '+677' },
     { name: 'Somalia', code: '+252' },
     { name: 'South Africa', code: '+27' },
     { name: 'South Georgia and the South Sandwich Islands',
       code: '+500' },
     { name: 'South Ossetia', code: '+99534' },
     { name: 'South Sudan', code: '+211' },
     { name: 'Spain', code: '+34' },
     { name: 'Sri Lanka', code: '+94' },
     { name: 'Sudan', code: '+249' },
     { name: 'Suriname', code: '+597' },
     { name: 'Svalbard', code: '+4779' },
     { name: 'Swaziland', code: '+268' },
     { name: 'Sweden', code: '+46' },
     { name: 'Switzerland', code: '+41' },
     { name: 'Syria', code: '+963' } ],
  T:
   [ { name: 'Taiwan', code: '+886' },
     { name: 'Tajikistan', code: '+992' },
     { name: 'Tanzania', code: '+255' },
     { name: 'Thailand', code: '+66' },
     { name: 'Thuraya (Mobile Satellite service)', code: '+88216' },
     { name: 'Togo', code: '+228' },
     { name: 'Tokelau', code: '+690' },
     { name: 'Tonga', code: '+676' },
     { name: 'Trinidad and Tobago', code: '+1868' },
     { name: 'Tristanda Cunha', code: '+2908' },
     { name: 'Tunisia', code: '+216' },
     { name: 'Turkey', code: '+90' },
     { name: 'Turkmenistan', code: '+993' },
     { name: 'Turks and Caicos Islands', code: '+1649' },
     { name: 'Tuvalu', code: '+688' } ],
  U:
   [ { name: 'Uganda', code: '+256' },
     { name: 'Ukraine', code: '+380' },
     { name: 'United Arab Emirates', code: '+971' },
     { name: 'United Kingdom', code: '+44' },
     { name: 'United States', code: '+1' },
     { name: 'Universal Personal Telecommunications (UPT)',
       code: '+878' },
     { name: 'Uruguay', code: '+598' },
     { name: 'US Virgin Islands', code: '+1340' },
     { name: 'Uzbekistan', code: '+998' } ],
  V:
   [ { name: 'Vanuatu', code: '+678' },
     { name: 'Venezuela', code: '+58' },
     { name: 'Vatican City State (Holy See)', code: '+379' },
     { name: 'Vietnam', code: '+84' } ],
  W:
   [ { name: 'Wake Island,USA', code: '+1808' },
     { name: 'Wallis and Futuna', code: '+681' } ],
  Y: [ { name: 'Yemen', code: '+967' } ],
  Z:
   [ { name: 'Zambia', code: '+260' },
     { name: 'Zanzibar', code: '+255' },
     { name: 'Zimbabwe', code: '+263' } ] }
  return data
}
