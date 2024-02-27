import styled from "styled-components";

const buttonTypes = {
    'success': 'mediumseagreen'
}
// Bu yerda biz poropsdan kelyatgan narsani cssda bor bror ranga tenglashtirib qoyyapmiz

const StyledButton = styled.button`
  border: none;
  background: ${(props)=> buttonTypes[props.variant] || "blue"};
  /* Biz bu yerda background colorni javaScript orqali tanlashga harakat qildik !*/

  color: aliceblue;
  padding: 15px 30px;
  border-radius: ${props => props.theme.radius}px;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    opacity: 40%;
  }
  /* Bu yerda &-bu belgi ampersand deyiladi. Ampersand degani ushbu elementning ozi degani bu yordamida biz bu elementga hover beryapmiz! */
`;
// Bu amal ham App.jsx da aytganimdek style va css dunyosiga kirish usuli. Biz componentni hohlagan joyida callback function chaqirishimiz mumkin //

function Button({ variant }) {
  return <StyledButton variant={variant}>button</StyledButton>;
  //   Biz bu yerda App.jsx da bergan propsni olib Compononentli tegga qoydik! //

}

export default Button;
