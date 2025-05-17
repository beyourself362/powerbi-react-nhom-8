import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import olapData from './olapMock.json';

export default function OlapDemo() {
  const [pivotState, setPivotState] = React.useState({
    data: olapData.facts.map(f => ({
      Product: f.Product,
      Region: f.Region,
      Time: f.Time,
      Sales: f.Sales
    })),
    rendererName: 'Table',
    cols: ['Product'],
    rows: ['Region'],
    vals: ['Sales'],
    aggregatorName: 'Sum'
  });

  return (
    <div>
      <h2>OLAP Demo: Pivot Table</h2>
      <PivotTableUI
        data={pivotState.data}
        onChange={s => setPivotState(s)}
        {...pivotState}
      />
    </div>
  );
}