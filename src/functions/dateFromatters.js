

export const getYear = date => {

    const deteminer = new RegExp('-')

    if (deteminer.test(date)) {
        return date.split('-', 3)[0]
    } 

    const year = date.split('/')[2]

    return year
    

}