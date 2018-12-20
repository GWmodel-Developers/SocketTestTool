export function addChip (state, chip) {
    state.chipList.push(chip);
}

export function delChip (state, chip) {
    let chipList = state.chipList;
    let index = chipList.findIndex(item => item.title === chip.title && item.content === chip.content && item.type === chip.type);
    state.chipList.splice(index, 1);
}
