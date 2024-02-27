import styled, { ThemeProvider, css } from "styled-components";
// Styled bu obyekt bolib Biz bu orqali component yasaymiz va tengdan keyin bu styled obyektini yozib undan keyin nuqta qoyamiz va u bizga hmtl teglarini ushlab olishga yordam beradi!//

import Button from "./button";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Asul:wght@100;200;300;400;500;600;700&display=swap");
  font-size: 24px;
  text-align: center;
  color: #000fff;
  font-family: "Asul", sans-serif;
`;
// Bu component bolib ozgaruvchi nomini yozamiz va bu yozuv har doim katta harfda bolishi kerak. Tengdan keyin styled sozini yozamiz va nuqta qoyib htmlda hohlagan tegimizni nomini yozib ushlab olamiz. Ushlab olgandan keyin joy tashamasdan backtick(``) belgisini qoyamiz va bu biga css dunyosiga kirishga yordam beradi. Backtickdan keyin enterni bosib css stylelarni yozib ketamiz. Biz ozgaruvchini nomini olib qaysi html tegiga style bergan bolsak osha tegga bu ozgaruvchi nomini qoyib qoyamiz! //

const theme = {
  radius: 10,
};
// Bu yerda esa umumiy bolishi kerak bolgan stillarni beramiz

const StyledH2 = styled.h2`
  ${(props) => css`
    color: red;
  `}/* Bu yerda esa biz styled-componentsdan css degan narsani olib kelamiz va shartli ravishda style bermoqchi bolganimizda ishlatamiz  */
`;
// Biz har doim ozgaruvchilarni function ni tashqarisida yozishimiz kerak yoqsa ishlamaydi!

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Bu yerda biz Context ishlatganmiz yani tema context biz tema contextga bergan propsni hohlagan joyda ishlatishimiz mumkin! */}

        <Container>Hello Styled Components</Container>
        <Button variant="success" />
        <Button />
        {/* // Bu yerda biz Biror componentga hohlagan nomdagi property berib yuboryapmiz va uning ichida css dunyosiga taluqli narsa berib yuboramiz! // */}
        
        <StyledH2>Salom Styled Components</StyledH2>
      </ThemeProvider>
    </>
  );
}

export default App;
