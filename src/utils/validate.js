export const validatePhone = phone => {
  if (typeof phone === 'number') phone += ''

  phone = phone.trim()

  const reg = /^1[3456789]\d{9}$/

  return reg.test(phone)
}
