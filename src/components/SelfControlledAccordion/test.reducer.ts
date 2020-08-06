import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test('reducer should change value to opposite value', () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(true)

})