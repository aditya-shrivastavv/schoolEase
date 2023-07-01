import ColorHash from 'color-hash'

/**
 * Returns a random color in Hex Code format.
 * Lightness: 0.7
 * @returns {string} Hex Code
 */
export default function getRandomColor(): string {
  const colorHash = new ColorHash({ lightness: 0.7 })
  const randomString = Math.random()
    .toString(36)
    .substring(2, Math.floor(Math.random() * 7) + 2)
  const color = colorHash.hex(randomString)
  return color
}
