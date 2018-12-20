export function getChipAt (state) {
    return function (index) {
        return state.chipList[index];
    }
}