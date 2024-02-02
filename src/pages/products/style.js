import styled from "styled-components";

export const ProductsStyled = styled.div`
  position: relative;
  .product-wrapper {
    border-radius: 5px;
    background-color: ${(props) => props.theme.customColor.primary};
    .search-product {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      border-bottom: 1px solid ${(props) => props.theme.darkColor.dark4};
    }
    .filter-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      gap: 15px;
      h5 {
        color: ${(props) => props.theme.customColor.purpleText};
        font-size: ${(props) => props.theme.fontSize.small};
        font-weight: 500;
      }
      .filter-select {
        flex: 1;
      }
    }
    .product-list {
      padding: 15px 0px;
      //   height: 332px;
      overflow: auto;
      .table-responsive {
        height: 100%;
      }
      table {
        margin: 0;
        thead {
          position: sticky;
          top: 0;
          background: rgba(
            ${(props) => props.theme.transparency.darkColor.dark3},
            0.2
          );
          th {
            padding: 11px 20px;
            color: ${(props) => props.theme.darkColor.dark2};
            font-size: ${(props) => props.theme.fontSize.small};
            background: transparent;
          }
        }
        tbody {
          tr {
            td {
              text-transform: capitalize;
              padding: 15px 0px 15px 20px !important;
              background: transparent;
              color: ${(props) => props.theme.darkColor.dark1};
              font-size: ${(props) => props.theme.fontSize.small};
              p {
                color: ${(props) => props.theme.darkColor.dark1};
                font-size: ${(props) => props.theme.fontSize.small};
                font-weight: 500;
              }
              .actions {
                display: flex;
                align-items: center;
                gap: 5px;
                svg {
                  stroke: ${(props) => props.theme.darkColor.dark1};
                  width: 17px;
                  height: 17px;
                }
                .dropdown {
                  button {
                    background: transparent;
                    margin: 0;
                    padding: 0;
                    border: 0;
                    svg {
                      fill: ${(props) => props.theme.darkColor.dark1};
                      width: 17px;
                      height: 17px;
                    }
                    &:after {
                      display: none;
                    }
                  }
                }
              }
              &:nth-child(3) {
                p {
                  border-radius: 4px;
                  background: #e7ffe4;
                  padding: 5px;
                  color: #63b25d;
                  text-align: center;
                }
              }
              .product-detail {
                display: flex;
                align-items: center;
                gap: 12px;
                .product-image {
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                  }
                }
                .product-name {
                  h6 {
                    color: ${(props) => props.theme.darkColor.dark1};
                    font-size: ${(props) => props.theme.fontSize.small};
                    font-weight: 500;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    max-width: 200px;
                  }
                  p {
                    color: ${(props) => props.theme.darkColor.dark3};
                    font-size: ${(props) => props.theme.fontSize.semiSmall};
                    font-weight: 400;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    max-width: 187px;
                  }
                }
              }
            }
          }
        }
      }
    }
    @media only screen and (max-width: ${(props) => props.theme.breakPoints.md}) {
      .search-product {
        flex-direction: column;
        gap: 20px;
        .search-button, .search-input {
          width: 100%;
        }
      }
      .filter-wrap {
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
        .filter-select {
          width: 100%;
        }
      }
    }
  }
`;
