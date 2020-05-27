const words = ["hängmatta", "sommarlov", "havsutsikt", "pilsner", "vårbris"];


export function randomWord(){
    let random = Math.floor(Math.random() * words.length);;
    return words[random];
}
