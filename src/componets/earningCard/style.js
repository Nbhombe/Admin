import styled from "styled-components";

export const EarningCardStyled = styled.div`
  position: relative;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.customColor.greyText};
  background: ${(props) => props.theme.customColor.primary};
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .earning-left {
    h6 {
      color: ${(props) => props.theme.darkColor.dark2};
      margin-bottom: 20px;
    }
    p {
      color: ${(props) => props.theme.customColor.purpleText};
      font-weight: 600;
    }
  }
  .earning-right {
    p {
      font-size: ${(props) => props.theme.fontSize.semiSmall};
      color: ${({isProfit, theme}) =>
        isProfit ? theme.statusColor.success : theme.statusColor.error};
        font-weight: 400;
      ${({ isNuetral, theme }) =>
        isNuetral &&
        `
        color: ${theme.darkColor.dark2};
        `
       }
       svg {
        width: 17px;
        height: 17px;
        margin-right: 2px;
       }
    }
  }
`;
