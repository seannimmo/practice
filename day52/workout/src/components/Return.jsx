import React, { Component } from "react"
const units = ["m", "km", "cm", "mi", "ft", "yd"]

export function Return({ km, mi, ft, yd, cm }) {
  //   const unitsList = units.map(unit => {
  //     return (
  //       <>
  //         <div className="unitField">
  //           <div className="amount">{}</div>
  //           <div className={unit}>{unit}</div>
  //         </div>
  //       </>
  //     )
  //   })
  //   return unitsList
  return (
    <>
      <div className="unitField">
        <div className="amount">{km}</div>
        <div className="kg">kg</div>
      </div>
      <div className="unitField">
        <div className="amount">{mi}</div>
        <div className="mi">mi</div>
      </div>
      <div className="unitField">
        <div className="amount">{ft}</div>
        <div className="ft">ft</div>
      </div>
      <div className="unitField">
        <div className="amount">{cm}</div>
        <div className="cm">cm</div>
      </div>
      <div className="unitField">
        <div className="amount">{yd}</div>
        <div className="yd">yd</div>
      </div>
    </>
  )
}

export default Return
