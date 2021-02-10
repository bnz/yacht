import { makeAutoObservable } from 'mobx'
import { setItem } from './setItem'
import { getItem } from './getItem'
import { getRandomInt } from '../../../helpers/random'
import { gateways } from '../Ids'
import { PlayerId } from '../Players/Player'

export interface Player {
  id: PlayerId
}

export enum GamePhase {
  PRE_GAME,
  PLAYERS_SELECTION,
  IN_PLAY,
}

export interface iStore {
  dispose(): void

  colsAmount: number
  itemsCount: any[]

  getItemLocation(dataId: number): string

  helpingToolVisible: boolean
  gamePhase: GamePhase

  setGamePhase(phase: GamePhase): void

  players: Player[]

  getPlayerById(playerId: string): Player | undefined

  addPlayer(): void

  removePlayerById(playerId: string): void

  playerMove: PlayerId

  nextMove(): void

  isGateway(dataId: number): boolean
}

export const AM = 13

export class Store implements iStore {

  dispose(): void {
    console.log('Store::dispose')
  }

  constructor() {
    makeAutoObservable(this)
  }

  colsAmount = AM

  itemsCount = (new Array(this.colsAmount * 11)).fill(null)

  getItemLocation(dataId: number): string {
    const amount = this.colsAmount
    return [(dataId % amount) || amount, Math.ceil(dataId / amount)].join('|')
  }

  helpingToolVisible = false

  gamePhase = getItem('phase') !== null ? getItem('phase') : GamePhase.PRE_GAME

  setGamePhase(phase: GamePhase) {
    this.gamePhase = phase
    setItem('phase', this.gamePhase)
  }

  players = getItem('players') ? getItem('players') as Player[] : (() => {
    const first = getRandomInt(1, 4)
    let second

    do {
      second = getRandomInt(1, 4)
    } while (second === first)

    const defaultPlayers = [
      { id: `player-${first}` as PlayerId },
      { id: `player-${second}` as PlayerId },
    ]

    setItem('players', defaultPlayers)

    return defaultPlayers
  })()

  getPlayerById(playerId: string) {
    return this.players.find(({ id }) => id === playerId)
  }

  addPlayer() {
    const ids = this.players.map(({ id }) => parseInt(id.split('-')[1], 10))
    let index = 0
    for (let i = 1; i <= 4; i++) {
      if (ids.indexOf(i) === -1) {
        index = i
        break
      }
    }
    this.players.push({ id: `player-${index}` as PlayerId })
    setItem('players', this.players)
    setItem('player-move', this.players[0].id)
    return this.players
  }

  removePlayerById(playerId: string) {
    this.players.splice(
      this.players.findIndex(({ id }) => id === playerId),
      1,
    )
    setItem('players', this.players)
    setItem('player-move', this.players[0].id)
    return this.players
  }

  playerMove = getItem('player-move') ? getItem('player-move') as Player['id'] : (() => {
    const id = this.players[0].id
    setItem('player-move', id)
    return id
  })()

  nextMove() {
    const index = this.players.findIndex(({ id }) => id === this.playerMove)
    this.playerMove = this.players[this.players.length - 1 > index ? index + 1 : 0].id
    setItem('player-move', this.playerMove)
  }

  private get gatewayKeys(): string[] {
    return Object.keys(gateways[this.players.length])
  }

  isGateway(dataId: number) {
    return this.gatewayKeys.indexOf(`${dataId}`) !== -1
  }
}
