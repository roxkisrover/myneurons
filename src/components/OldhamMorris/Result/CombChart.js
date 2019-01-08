import React from 'react';
import Highcharts from 'highcharts';
import {
  Chart,
  ColumnSeries,
  HighchartsChart,
  Legend,
  withHighcharts,
  XAxis,
  YAxis,
} from 'react-jsx-highcharts';

import omTypesData from '../../../data/oldhamMorris/types';

const CombChart = () => (
  <HighchartsChart>
    <Chart />
    <Legend />
    <XAxis categories={omTypesData.map(item => item.title)} />
    <YAxis>
      <ColumnSeries name="Result" data={[2, 3, 2, 9, 3, 4, 3, 8, 1, 3, 4]} showInLegend={false} />
    </YAxis>
  </HighchartsChart>
);

export default withHighcharts(CombChart, Highcharts);
