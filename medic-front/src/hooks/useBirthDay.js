import { useEffect, useState, useRef } from 'react'
import moment from 'moment';
import { MONTHS } from '../constants/labels';

export function useDay() {
    const DIAS = Array(31).fill(1);
    let DAYS = []
    DIAS.map((item, index) => {
        DAYS.push({value: index + 1,label: index + 1 })
      })
      return DAYS
}

export function useMonths(lenguaje) {
    let MONTH = []
    lenguaje.map((item, index) => {
        MONTH.push({value: item,label: item })
      })
      return MONTH
}

export function useYears() {
    let YEARINICIAL = moment().subtract(110, 'years').format('YYYY')
    let YEARFINAL = moment().format('YYYY')
    let YEAR = []

    for (let i = YEARINICIAL; i < YEARFINAL; i++) {
        YEAR.push({value: i,label: i })  
                }

      return YEAR
}

