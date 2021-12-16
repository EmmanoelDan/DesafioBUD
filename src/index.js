const { info, reader } = require('./reader.js');
const highestConsecutiveNumber = require('./highestConsecutiveNumber.js');

const initProject = () => {
    reader.question(
        info.question,
        (answer) => highestConsecutiveNumber(answer)
    );
};

initProject();