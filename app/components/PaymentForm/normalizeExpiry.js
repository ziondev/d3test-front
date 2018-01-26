const normalizeExpiry = (value) => {
    const onlyNums = value.replace(/[^\d]/g, '')

    if (!value) {
        return value
    }

    if (onlyNums.length <= 2) {
        return onlyNums
    }

    if (onlyNums.length <= 6) {
        return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`
    }

}

export default normalizeExpiry