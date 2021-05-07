import { getYear } from './dateFromatters'

export const getAllYears = expensesList => {
    const fullDates = expensesList.map(expenseLog => expenseLog.date)
    const years = fullDates.map(date => getYear(date))
    return [...new Set(years)]

}