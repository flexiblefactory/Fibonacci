import React from 'react';
import isComposite from '@extra-number/is-composite';
const SATURDAY = 6
const SUNDAY = 7
function isWeekend() {
  const day = new Date().getDay()
  return day === SATURDAY || day === SUNDAY
}

export default function DisplayInteger({ n }) {
  const numberIsPrime = !isComposite(n)
  const weekend = isWeekend()
  const primeLabel = weekend ? 'wic' : 'tic'
  const compositeLabel = weekend ? 'woe' : 'toe'
  return <div style={{ color: numberIsPrime ? 'blue' : 'green' }}>
    {/* n.toString() */} {numberIsPrime ? primeLabel : compositeLabel}
  </div>
}