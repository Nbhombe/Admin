import styled from "styled-components";

export const AddProductStyled = styled.div`
  position: relative;
  .product-information {
    border-radius: 5px;
    background-color: ${(props) => props.theme.customColor.primary};
    padding: 20px;
    h6 {
      color: ${(props) => props.theme.customColor.purpleText};
    }
  }
  .product-details {
    border-radius: 5px;
    background-color: ${(props) => props.theme.customColor.primary};
    padding: 20px;
    h6 {
      color: ${(props) => props.theme.customColor.purpleText};
    }
  }
  .stock-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    label {
      font-size: ${(props) => props.theme.fontSize.small};
      color: ${(props) => props.theme.darkColor.dark2};
    }
  }
  .add-product {
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    button {
      &:first-child {
        padding: 14px 27px;
      }
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.breakPoints.md}) {
    .add-product {
      button {
        width: 100%;
      }
    }
  }
`;
