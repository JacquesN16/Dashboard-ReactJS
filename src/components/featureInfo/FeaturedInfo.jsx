import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Eur 3.000</span>
                    <span className="featuredMoneyRate"> <ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Eur 3.000</span>
                    <span className="featuredMoneyRate"> <ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Eur 3.000</span>
                    <span className="featuredMoneyRate"> <ArrowUpward className="featuredIcon"/> </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            
        </div>
    )
}
