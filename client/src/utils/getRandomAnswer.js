export default function getRandomAnswer(answers) {
    if(!answers){
        return undefined;
    }
    return answers[Math.floor(Math.random() * answers.length)];
}