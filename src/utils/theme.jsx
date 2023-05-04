const mainVars = {
 breakpoints: {
  mob: '375px',
  mobMax: '767px',
  tab: '768px',
  tabMax: '1439px',
  desk: '1920px',
 },
 transitions: {
  main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
 },
};
export const lightTheme = {
 ...mainVars,
 //  image: {
 //   imageMob: categoryCenterMob,
 //   imageMobRet: categoryCenterMobRetina,
 //   imageDesk: categoryCenterDesk,
 //   imageDeskRet: categoryCenterDeskRetina,
 //  },
 colors: {
  bgColor: '#FFFFFF',
  bgSecondaryColor: '#FFF3E1',
  bgGrey: '#ECECEC',
  contentColor: '#4e4e4e',
  primaryColor: '#625FFB',
  secondaryColor: '#E2992B',
  headerColor: '#303030',
  titleColor: '#263238',
  textColor: '#4E4E4E',
  whiteColor: '#FFFFFF',
  greyColor: '#F3F3F3',
  darkGreyColor: '#454545',
  lightGreyColor: '#F7F7F7',
 },
};
