import styled from 'styled-components';

export const Wrapper = styled.div`
 margin-left: auto;
 margin-right: auto;
 padding-left: 260px;
 padding-right: 260px;
 min-width: 1920px;

 ${
  '' /* @media screen and (max-width: ${p => p.theme.breakpoints.mobMax}) {
  max-width: ${p => p.theme.breakpoints.mob};
 }

 @media screen and (min-width: ${p => p.theme.breakpoints.tab}) {
  width: ${p => p.theme.breakpoints.tab};
  padding-left: 32px;
  padding-right: 32px;
 }
 @media screen and (min-width: ${p => p.theme.breakpoints.desk}) {
  width: ${p => p.theme.breakpoints.desk};
  padding-left: 100px;
  padding-right: 100px;
 } */
 }
`;
