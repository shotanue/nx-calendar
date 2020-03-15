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
import { GetterTree, ActionTree, MutationTree } from 'vuex'

const getDates = function (today: Date) {
  const max = 7 * 6 // week * rows
  const start = subDays(startOfMonth(today), getDay(startOfMonth(today)))

  const differenceInDays1 = differenceInCalendarDays(lastDayOfMonth(today), start) + 1
  return eachDayOfInterval({
    start,
    end: addDays(lastDayOfMonth(today), max - differenceInDays1)
  })
}

interface Month {
  prev: Date,
  cur: Date,
  next: Date
}

interface Calendar {
  today: Date,
  baseDate: Date,
  dates: Date[],
  month: Month
}

const createState = (today: Date, baseDate: Date) => {
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

export const getters: GetterTree<Calendar, Calendar> = {
  dates: (state) => {
    return state.dates.map((x: Date) => {
      return {
        date: format(x, 'd'),
        isSameMonth: isSameMonth(x, state.baseDate)
      }
    })
  },
  month: state => (req: keyof Month) => {
    const monthElement = state.month[req]
    return {
      month: format(monthElement, 'MMMM'),
      year: format(monthElement, 'Y')
    }
  }
}

export const actions: ActionTree<Calendar, Calendar> = {
  moveMonth ({ commit }, offset: number) {
    commit('MOVE_MONTH', offset)
  }
}

export const mutations: MutationTree<Calendar> = {
  MOVE_MONTH (state, offset: number) {
    const baseDate = addMonths(state.baseDate, offset)
    const newState = createState(state.today, baseDate)
    state.dates = newState.dates
    state.month = newState.month
    state.baseDate = newState.baseDate
  }
}
