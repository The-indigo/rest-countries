import styled from "styled-components";
import './Button.css'

const StyledButton = styled.button` 
background:hsl(209, 23%, 22%);
border-radius: 2px;
border:none;
margin:0;
margin-top:.5rem;
box-shadow:1px -.5px hsl(207, 26%, 17%);
padding:.3rem 1rem;
overflow:hidden;
margin-right:15px;
color:hsl(0, 0%, 100%);
`
const Button = ({ buttonText }) => {
    return (
        <StyledButton>
            <p className="button-text">{ buttonText}</p>
        </StyledButton>
    )
}
export default Button