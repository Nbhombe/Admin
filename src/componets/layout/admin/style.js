import styled from "styled-components";

export const AdminLayoutStyled = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  .sidebarOpen:has(~ .adminLayout-right){
    .navigation {
        ul {
            li {
                a {
                    display: block;
                    text-align: center;
                    transition: 0.5s all;
                    p {
                        display: none;
                        transition: 0.5s all;
                    }
                }
            }
        }
    }
    ~ .adminLayout-right {
        width: 100%;
    }
  }
  .adminLayout-right {
    width: calc(100% - 220px);
    height: 100%;
    padding: 20px 30px;
    overflow: auto;
  }
`;
