import { Note } from '~/types/index'

/* STATES */
export interface MainState {
    version: string
    $localForage: any
}
export interface NoteState {
    notes: Note[] | {}[]
}
