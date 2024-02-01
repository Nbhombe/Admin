import { PageHeadStyled } from "./style";

const PageHead = ({head}) => {
  return (
    <PageHeadStyled>
      <h4>{head}</h4>
    </PageHeadStyled>
  );
};

export default PageHead;