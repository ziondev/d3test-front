const normalizeZip = (value) => {
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!value) {
    return value
  }

  if (onlyNums.length <= 2) {
    return onlyNums
  }

  if (onlyNums.length <= 5) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2)}`
  }

  return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}-${onlyNums.slice(
    5,
    8
  )}`
}

export default normalizeZip;