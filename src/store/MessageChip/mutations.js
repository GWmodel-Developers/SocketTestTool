export function addChip (state, chip) {
    state.chipList.push(chip);
}

export function delChip (state, chipIndex) {
    state.chipList.splice(chipIndex, 1);
}
