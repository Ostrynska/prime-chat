import styled from 'styled-components';

export const Wrapper = styled.div`
 margin-left: auto;
 margin-right: auto;

 min-width: 320px;
 padding-left: 15px;
 padding-right: 15px;
 @media screen and (min-width: 420px) {
  padding: 0 10px;
  width: 420px;
 }
 @media screen and (min-width: 480px) {
  padding: 0 20px;
  width: 480px;
 }
 @media screen and (min-width: 768px) {
  padding-left: 140px;
  padding-right: 140px;
  width: 768px;
 }
 @media screen and (min-width: 1200px) {
  padding: 0 120px;
  min-width: 1200px;
 }
 @media screen and (min-width: 1920px) {
  padding: 0 260px;
  width: 1920px;
 }
`;
