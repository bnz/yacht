export type LocalStorageKeys = 'phase' | 'players' | 'player-move'

export const getItem = (key: LocalStorageKeys) => {
  const data = localStorage.getItem('indigo-data')

  if (data !== null) {
    const d = JSON.parse(data)
    return d[key]
  }

  return null
}
