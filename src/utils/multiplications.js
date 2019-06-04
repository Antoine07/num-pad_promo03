const max = 3;

const generateAllProposition = () => {
    let propositions = [];
    for(let i = 1; i < max + 1; i++){
        for(let j = 1; j < max + 1; j++){
            propositions.push({num1 : i, num2 : j});
        }
    }

    return propositions;
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export default shuffle( generateAllProposition() );