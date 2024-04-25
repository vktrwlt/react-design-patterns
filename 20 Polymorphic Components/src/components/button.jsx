import styled from "styled-components";

const StyledButton = styled.div`
  > button {
    border: none;
    background: none;
    outline: none;
    box-shadow: none;
    background-color: #0066cc;
    color: #ffffff;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    &:hover {
      background-color: #004080;
    }
  }

  > a {
    color: #3399cc;
    border-bottom: 1px solid #3399cc;
    padding: 10px;
    text-decoration: none;
    margin: 5px;
    &:hover {
      color: #336699;
      border-bottom: 1px solid #336699;
    }
  }
`;

const Button = (props) => {
  const { children, as, ...buttonProps } = props;
  const Component = as || "button";

  return (
    <StyledButton>
      <Component {...buttonProps}>{children}</Component>
    </StyledButton>
  );
};

export default Button;
