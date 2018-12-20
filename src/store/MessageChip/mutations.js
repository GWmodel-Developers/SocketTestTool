export function addChip (state, chip) {
    state.chipList.push(chip);
}

export function delChip (state, chipIndex) {
    state.chipList.splice(chipIndex, 1);
}

export function updateChip (state, { chipIndex, chip }) {
    state.chipList.splice(chipIndex, 1, chip);
}

export function setChipList(state, chipList) {
    state.chipList = chipList;
}
