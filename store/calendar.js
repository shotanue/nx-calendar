import {
  addDays,
  addMonths,
  differenceInCalendarDays,
  eachDayOfInterval,
  format,
  getDay,
  isSameMonth,
  lastDayOfMonth,
  startOfMonth,
  subDays,
  subMonths
} from 'date-fns'

const getDates = function (today) {
  const max = 7 * 6 // week * rows
  const start = subDays(startOfMonth(today), getDay(startOfMonth(today)))

  const differenceInDays1 = differenceInCalendarDays(lastDayOfMonth(today), start) + 1
  return eachDayOfInterval({
    start,
    end: addDays(lastDayOfMonth(today), max - differenceInDays1)
  })
}

const createState = (today, baseDate) => {
  return {
    today,
    baseDate,
    dates: getDates(baseDate),
    month: {
      prev: subMonths(baseDate, 1),
      cur: baseDate,
      next: addMonths(baseDate, 1)
    }
  }
}

export const state = () => {
  return createState(new Date(), new Date())
}

export const getters = {
  dates: (state) => {
    return state.dates.map((x) => {
      return {
        date: format(x, 'd'),
        isSameMonth: isSameMonth(x, state.baseDate)
      }
    })
  },
  month: state => (req) => {
    const monthElement = state.month[req]
    return {
      month: format(monthElement, 'MMMM'),
      year: format(monthElement, 'Y')
    }
  }
}

export const actions = {
  moveMonth ({ commit }, offset) {
    commit('MOVE_MONTH', offset)
  }
}

export const mutations = {
  MOVE_MONTH (state, offset) {
    const baseDate = addMonths(state.baseDate, offset)
    const newState = createState(state.today, baseDate)
    state.dates = newState.dates
    state.month = newState.month
    state.baseDate = newState.baseDate
  }
}
