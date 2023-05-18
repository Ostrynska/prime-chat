import { SectionWrap, SectionContent } from './Resources.styled';

function Section({ children }) {
 return (
  <SectionWrap>
   <SectionContent>{children}</SectionContent>
  </SectionWrap>
 );
}

export default Section;
