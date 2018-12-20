import * as fs from "fs-extra";
import * as path from "path";

let chipListJsonPath = path.join(__statics, "chipList.json");

export function addChip (context, chip) {
    context.commit("addChip", chip);
    context.dispatch("saveToDisk");
}

export function delChip (context, chip) {
    if (typeof chip == "number") {
        context.commit("delChip", chip);
    } else {
        let chipList = context.state.chipList;
        let index = chipList.findIndex(item => item.title === chip.title && item.content === chip.content && item.type === chip.type);
        context.commit("delChip", index);
    }
    context.dispatch("saveToDisk");
}

export function saveToDisk(context) {
    fs.writeFile(chipListJsonPath, JSON.stringify(context.state.chipList), function (err) {
        if (err) console.error("写入文件失败：", err);
        else console.log("写入文件成功");
    });
}

export function readFromDisk(context) {
    fs.readJson(chipListJsonPath, function (err, data) {
        if (err) console.error("读取 ChipList 文件失败", err);
        else {
            context.commit("setChipList", data);
        }
    })
}