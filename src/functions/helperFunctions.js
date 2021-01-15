import moment from 'moment'

export const dateFormatter = (date) => {

    let parsed = new Date(date)

    let dd = String(parsed.getDate()).padStart(2, '0')

    let mm = String(parsed.getMonth() + 1).padStart(2, '0')

    let yyyy = parsed.getFullYear()

    return `${dd}/${mm}/${yyyy}`
} 

export const serverDateFormatter = dateString => {
    let dateMomentObject = moment(dateString, 'DD/MM/YYYY')
    let dateObj = dateMomentObject.toDate()
    return dateObj.toJSON()
}