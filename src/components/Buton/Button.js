import styled from "styled-components";

const StyledButton = styled.button` 
background:hsl(209, 23%, 22%);
border-radius: 5px;
overflow:hidden;
margin-right:15px;
color:hsl(0, 0%, 100%);
`
const Button = ({ buttonText }) => {
    return (
        <StyledButton>
            <p>{ buttonText}</p>
        </StyledButton>
    )
}
export default Button