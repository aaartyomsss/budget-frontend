import { getYear } from './dateFromatters'

export const getAllYears = expensesList => {
    console.log(expensesList)
    const fullDates = expensesList.map(expenseLog => expenseLog.date)
    console.log(fullDates)
    const years = fullDates.map(date => getYear(date))
    return [...new Set(years)]

}