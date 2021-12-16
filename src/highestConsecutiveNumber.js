const { info, reader } = require('./reader.js');

const finalResult = (slicedSequenceResult) => {
    const higherNumberResult = [];

    slicedSequenceResult.map(array => {
        if (array.length > higherNumberResult.length) {
            while(higherNumberResult.length) {
                higherNumberResult.pop();
            }

            for (let i = 0; i < array.length; i+=1) {
                higherNumberResult.push(array[i]);
            }
        }
    });

    return higherNumberResult.join('');
}

const highestConsecutiveNumber = (answer) => {
    let question = answer;
    const slicedSequenceIndex = [];
    const slicedSequenceResult = [];

    if (isNaN(question)) {
        console.info(info.errorIsNaN);
        reader.question(info.questionAlternative, (newAnswer) => highestConsecutiveNumber(newAnswer));
    } else {
        question.split('').map(number => slicedSequenceIndex.push(parseInt(number)));
        
        for (let i = 0; i <= slicedSequenceIndex.length; i+=1) {
            let initializeStack = [slicedSequenceIndex[i]];
            let pointsToTheFirstConsecutive = i + 1;

            for (; slicedSequenceIndex[pointsToTheFirstConsecutive] == initializeStack[initializeStack.length - 1] + 1; pointsToTheFirstConsecutive++) {
                initializeStack.push(slicedSequenceIndex[pointsToTheFirstConsecutive]);
            }

            if (initializeStack.length > 1) {
                slicedSequenceResult.push(initializeStack);
            }

            i = pointsToTheFirstConsecutive - 1;
        }

        console.info(info.success, finalResult(slicedSequenceResult), '\n\n-------------------');
        reader.close();
    }
};

module.exports = highestConsecutiveNumber;