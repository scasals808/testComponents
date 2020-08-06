type ActionType = {
    type: string
}
export const TOGGLE_CONSTANT = 'SET_TOGGLE_COLLAPSED'

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default :
            throw new Error('Bad actionType')
    }
    return state;
}