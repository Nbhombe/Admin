import { EarningCardStyled } from "./style";
import { GoArrowDownLeft, GoArrowUpRight, GoPlus } from "react-icons/go";

const EarningCard = ({earningCardClass, earningHead, earningData, profit, isProfit, isNuetral }) => {
    return (
        <EarningCardStyled isProfit={isProfit} isNuetral={isNuetral} className={earningCardClass}>
            <div className="earning-left">
                <h6>{earningHead}</h6>
                <p>{earningData}</p>
            </div>
            <div className="earning-right">
                <p>{isNuetral ? <GoPlus /> : isProfit ? <GoArrowUpRight /> : <GoArrowDownLeft />}{profit}</p>
            </div>
        </EarningCardStyled>
    )
}


export default EarningCard;