import { PreTitle } from '../PreTitle/PreTitle';

import { Section, TitleWrapp, Title, Image } from './PageTitle.styled';

const PageTitle = ({ text, title }) => {
 const words = title.split(' ');
 const lastWord = words.pop();

 return (
  <Section>
   <TitleWrapp>
    <PreTitle variant="primary" text={text} style={{ width: 119 }} />
    <Title>
     {words.join(' ')} <span>{lastWord}</span>
    </Title>
    <Image />
   </TitleWrapp>
  </Section>
 );
};

export default PageTitle;
