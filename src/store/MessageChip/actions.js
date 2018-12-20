export function addChip (context, chip) {
    context.commit("addChip", chip);
}

export function delChip (context, chip) {
    if (typeof chip == "number") {
        context.commit("delChip", chip);
    } else {
        let chipList = context.state.chipList;
        let index = chipList.findIndex(item => item.title === chip.title && item.content === chip.content && item.type === chip.type);
        context.commit("delChip", index);
    }
}