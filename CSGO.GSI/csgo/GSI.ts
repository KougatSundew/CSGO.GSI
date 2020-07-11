declare module 'csgo.gsi.types' {
    export import Provider = GSICSGO.Provider
    export import Map = GSICSGO.Map
    export import PhaseMap = GSICSGO.PhaseMap
    export import RoundWinningType = GSICSGO.RoundWinningType
//     export import Provider = GSICSGO.Provider
//     export import Map = GSICSGO.Map
//     export import Auth = GSICSGO.Auth
//     export import Player = GSICSGO.Player
//     export import PlayerState = GSICSGO.PlayerState
//     export import PlayerStats = GSICSGO.PlayerStats
//     export import Grenades = GSICSGO.Grenades
//     export import Grenade = GSICSGO.Grenade
//     export import AllPlayers = GSICSGO.AllPlayers
//     export import PlayerList = GSICSGO.PlayerList
//     export import PhaseCountDown = GSICSGO.Phase
//     export import Bomb = GSICSGO.Bomb
//     export import Round = GSICSGO.Round
//     export import Weapons = GSICSGO.Weapons
//     export import Weapon = GSICSGO.Weapon
  
//     export import weaponTypes = GSICSGO.weaponTypes
//     export import grenadeTypes = GSICSGO.grenadeTypes
//     export import WeaponSlotType = GSICSGO.WeaponSlotType
  
//     export import TeamType = GSICSGO.TeamType
//     export import RoundWinningType = GSICSGO.RoundWinningType
//     export import BombState = GSICSGO.BombState
//     export import PhaseExt = GSICSGO.PhaseExt
//     export import PhaseMap = GSICSGO.PhaseMap
  
//     export import GameStateSpectating = GSICSGO.GameStateSpectating
//     export import GameStatePlaying = GSICSGO.GameStatePlaying
//     export import GameStateMenu = GSICSGO.GameStateMenu
//     export import GameState = GSICSGO.GameState
// }

declare namespace GSICSGO {
    export interface GameState {
        provider: Provider
        map: Map
        round: Round
        team: Team
    }
    export interface Provider {
        name: string
        appid: number
        version: number
        steamid: string
        timestamp: number
      }
    export interface Map {
        mode: string
        name: string
        phase: PhaseMap
        round: number
        team_ct: Team 
        team_t: Team 
        num_matches_to_win_series: number
        current_spectators: number
        souvenirs_total: number
        round_wins?: { [key: string]: RoundWinningType }
    }
    export interface Round {
        phase: PhaseRound
        bomb?: 'planted' | 'defused' | 'exploded'
        win_team?: TeamType
      }
    export interface Team {
        name?: string
        score: number
        consecutive_round_losses: number
        timeouts_remaining: number
        matches_won_this_series: number
    }
    export type RoundWinningType = 'ct_win_time' |
    'ct_win_elimination' |
    't_win_elimination' |
    't_win_bomb' |
    'ct_win_defuse'

    export type PhaseMap = 'live' | 'intermission' | 'gameover' | 'warmup'
    export type PhaseRound = 'live' | 'freezetime' | 'over'
    export type TeamType = 'CT' | 'T'
}