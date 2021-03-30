

export const getYear = date => {

    let dateElements = date.split('-', 3)

    if (dateElements !== undefined) {
        return dateElements[0].substr(1)
    }

    const year = date.split('/', 3)[2]

    return year

}