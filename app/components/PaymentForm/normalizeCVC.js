const normalizeCVC = (value) => {
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!value) {
        return value
    }

    if (onlyNums.length <= 4) {
        return onlyNums
    }
}

export default normalizeCVC