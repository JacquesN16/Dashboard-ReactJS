import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featureInfo/FeaturedInfo';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { usersData } from '../../dummyData';

import "./home.css";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={usersData} title="User Analytics" dataKey = "Active Users" grid  />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
