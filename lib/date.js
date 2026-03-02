const DATE_OPTIONS = { year: "numeric", month: "long", day: "numeric" }

export function formatTimeAgo(inputDate) {
  const date = new Date(inputDate)
  const currentDate = new Date()

  const timeDifference = currentDate - date
  const secondsDifference = Math.floor(timeDifference / 1000)
  const minutesDifference = Math.floor(secondsDifference / 60)
  const hoursDifference = Math.floor(minutesDifference / 60)
  const daysDifference = Math.floor(hoursDifference / 24)

  if (secondsDifference < 60) return "just now"
  if (minutesDifference < 60) return `${minutesDifference}m ago`
  if (hoursDifference < 24) return `${hoursDifference}h ago`
  if (daysDifference < 7) return `${daysDifference}d ago`

  if (daysDifference < 30) {
    return `${Math.floor(daysDifference / 7)}w ago`
  }

  if (daysDifference < 365) {
    return `${Math.floor(daysDifference / 30)}mo ago`
  }

  return `${Math.floor(daysDifference / 365)}yr ago`
}

export function formatDate(inputDate) {
  return new Date(inputDate).toLocaleDateString(undefined, DATE_OPTIONS)
}

export function formatDateTimeFull(inputDate) {
  const formattedDate = new Date(inputDate).toLocaleDateString(undefined, DATE_OPTIONS)
  const timeAgo = formatTimeAgo(inputDate)
  return `${formattedDate} (${timeAgo})`
}
