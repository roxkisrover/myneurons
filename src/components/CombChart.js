import React from 'react';
import PropTypes from 'prop-types';
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

import omTypesData from '../data/oldhamMorris/types';

const CombChart = ({ data }) => (
  <HighchartsChart>
    <Chart />
    <Legend />
    <XAxis categories={omTypesData.map(item => item.chartName)} />
    <YAxis>
      <ColumnSeries name="Result" data={data} showInLegend={false} />
    </YAxis>
  </HighchartsChart>
);

CombChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default withHighcharts(CombChart, Highcharts);
