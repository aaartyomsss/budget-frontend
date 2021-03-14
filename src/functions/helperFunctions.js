import moment from 'moment'

export const capitalizeString = string => {

    const firstLetter = string.substr(0,1).toUpperCase()
    const other = string.substr(1)

    return firstLetter.concat(other)

}

export const spentPerMonth = data => {
    const result = [
        {
            month: 'Jan',
            spent: 0,
        },
        {
            month: 'Feb',
            spent: 0,
        },
        {
            month: 'Mar',
            spent: 0,
        },
        {
            month: 'Apr',
            spent: 0,
        },
        {
            month: 'May',
            spent: 0,
        },
        {
            month: 'Jun',
            spent: 0,
        },
        {
            month: 'Jul',
            spent: 0,
        },
        {
            month: 'Aug',
            spent: 0,
        },
        {
            month: 'Sep',
            spent: 0,
        },
        {
            month: 'Oct',
            spent: 0,
        },
        {
            month: 'Nov',
            spent: 0,
        },
        {
            month: 'Dec',
            spent: 0,
        },
]
    data.forEach(expense => {
        switch (expense.date.split('-')[1]) {
            case '01':
                result[0].spent += expense.amountSpent
                break;
            case '02':
                result[1].spent += expense.amountSpent
                break;
            case '03':
                result[2].spent += expense.amountSpent
                break;
            case '04':
                result[3].spent += expense.amountSpent
                break;
            case '05':
                result[4].spent += expense.amountSpent
                break;
            case '06':
                result[5].spent += expense.amountSpent
                break;
            case '07':
                result[6].spent += expense.amountSpent
                break;
            case '08':
                result[7].spent += expense.amountSpent
                break;
            case '09':
                result[8].spent += expense.amountSpent
                break;
            case '10':
                result[9].spent += expense.amountSpent
                break;
            case '11':
                result[10].spent += expense.amountSpent
                break;
            case '12':
                result[11].spent += expense.amountSpent
                break;
            default:
                break;
        }
    })
    return result
}

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

// Functions for applying different filters on expenses list
export const sortRecent = array => {
    return array.sort((a, b) => {
        let date1 = new Date(a.date)
        let date2 = new Date(b.date)
        if(!date1.getTime()) {
            const dummy1 = a.date.split('/')
            const dummy2 = b.date.split('/')
            date1 = new Date(dummy1[2], dummy1[1] - 1, dummy1[0])
            date2 = new Date(dummy2[2], dummy2[1] - 1, dummy2[0])
        }
        return date2.getTime() - date1.getTime()})
}

export const toTime = object => {
    const dummy = object.split('/')
    return new Date(dummy[2], dummy[1] - 1, dummy[0])
}

export const sortLatest = array => {
    
    
    return array.sort((a, b) => {
        let date1 = new Date(a.date)
        let date2 = new Date(b.date)
        if(!date1.getTime()) {
            const dummy1 = a.date.split('/')
            const dummy2 = b.date.split('/')
            date1 = new Date(dummy1[2], dummy1[1] - 1, dummy1[0])
            date2 = new Date(dummy2[2], dummy2[1] - 1, dummy2[0])
        }
        return date1.getTime() - date2.getTime()})
}

export const sortExpensive = array => {
    return array.sort((a, b) => b.amountSpent - a.amountSpent)
}

export const sortCheapest = array => {
    return array.sort((a, b) => a.amountSpent - b.amountSpent)
}