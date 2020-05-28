const words = ["hängmatta", "sommarlov", "havsutsikt", "pilsner", "vårbris", "katt", "midsommaraftonsnatt"];


export function randomWord(){
    let random = Math.floor(Math.random() * words.length);;
    return words[random];
}
