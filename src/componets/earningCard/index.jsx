import Skeleton from "react-loading-skeleton";
import { EarningCardStyled } from "./style";
import { GoArrowDownLeft, GoArrowUpRight, GoPlus } from "react-icons/go";

const EarningCard = ({
  earningCardClass,
  earningHead,
  earningData,
  profit,
  isProfit,
  isNuetral,
  loading,
}) => {
  return (
    <EarningCardStyled
      isProfit={isProfit}
      isNuetral={isNuetral}
      className={earningCardClass}
    >
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <div className="earning-left">
            <h6>{earningHead}</h6>
            <p>{earningData}</p>
          </div>
          <div className="earning-right">
            <p>
              {isNuetral ? (
                <GoPlus />
              ) : isProfit ? (
                <GoArrowUpRight />
              ) : (
                <GoArrowDownLeft />
              )}
              {profit}
            </p>
          </div>
        </>
      )}
    </EarningCardStyled>
  );
};

export default EarningCard;
