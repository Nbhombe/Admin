import styled from "styled-components";

export const PageHeadStyled = styled.div`
  margin: 20px 0;
  h4 {
    color: ${(props) => props.theme.customColor.headText};
    font-weight: 700;
    margin-bottom: 15px;
  }
`;
