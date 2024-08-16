const fs = require('fs').promises;

async function processFiles(filePaths) {
    let totalSum = 0;
    const errors = [];
    for (const filePath of filePaths) {
        try {
            const data = await fs.readFile(filePath, 'utf-8');
            const lines = data.split('\n');
            let fileSum = 0;
            for (const line of lines) {
                const number = parseFloat(line.trim());
                if (isNaN(number)) {
                    throw new Error('Invalid number format');
                }
                fileSum += number;
            }
            totalSum += fileSum;
        } catch (err) {
            console.error(`Error processing file ${filePath}:`, err.message);
            errors.push({ filePath, error: err.message });
        }
    }
    return { totalSum, errors };
}

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

async function main() {
    const filePaths = [
        'files/numbers1.txt',
        'files/numbers2.txt',
        'files/invalid.txt',
        'files/nonexistent.txt'
    ];

    const result = await processFiles(filePaths);
    console.log('Total Sum:', result.totalSum);
    console.log('Errors:', result.errors);
}

main().catch(err => {
    console.error('An unexpected error occurred:', err);
});