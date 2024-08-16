const fs = require("fs/promises");

(async () => {
    const createFile = async (path) => {
        try {
            await fs.stat(path, (err, stat) =>{
                if (err == null){
                    return console.log(`The file ${path} already exists.`)
                }
            })
        } catch (e) {
            if (e.code === 'ENOENT') {
                await fs.writeFile(path, "");
                console.log("A new file" + path + "was successfully created")
            }
            console.error("An unexpected error occurred" + e)
        }
    };

    const deleteFile = async (path) => {
        try {
            await fs.unlink(path);
            console.log("The file was successfully removed.");
        } catch (e) {
            if (e.code === "ENOENT") {
                console.log("No file at this path to remove.");
            } else {
                console.log("An error occurred while removing the file: ");
                console.log(e);
            }
        }
    };

    const renameFile = async (oldPath, newPath) => {
        try {
            await fs.rename(oldPath, newPath);
            console.log("The file was successfully renamed.");
        } catch (e) {
            if (e.code === "ENOENT") {
                console.log(
                    "No file at this path to rename, or the destination doesn't exist."
                );
            } else {
                console.log("An error occurred while renaming the file: ");
                console.log(e);
            }
        }
    };


    const addToFile = async (path, content) => {
        try{
            await fs.appendFile(path, content);
            console.log(content + " successfully appended to " + path)
        } catch(e){
            console.log("An error occurred while adding to the file" + e)
        }
    };

    const readFile = async () => {
        const command = await fs.readFile('./commands.txt', "utf-8");
        if (command.includes("create a file")) {
            const filePath = command.substring(14);
            await createFile(filePath);
        }

        if (command.includes("delete the file")) {
            const filePath = command.substring(16);
            await deleteFile(filePath);
        }
        if (command.includes("rename the file")) {
            const _idx = command.indexOf(" to ");
            const oldFilePath = command.substring(16, _idx);
            const newFilePath = command.substring(_idx + 4);

            await renameFile(oldFilePath, newFilePath);
        }
        if (command.includes("add to the file")) {
            const _idx = command.indexOf(" this content: ");
            const filePath = command.substring(16, _idx);
            const content = command.substring(_idx + 15);
            await addToFile(filePath, content);
        }
    }


    const watcher = fs.watch("./commands.txt");
    for await (const event of watcher) {
        if (event.eventType === "change") {
            await readFile()
        }
    }
})();