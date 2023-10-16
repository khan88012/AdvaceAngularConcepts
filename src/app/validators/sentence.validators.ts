import { AbstractControl } from "@angular/forms";

export function ValidateSentence(control : AbstractControl) {
    const abusiveWords = ['fool', 'idiot', "damn", 'stupid', 'bastard'];
    const sentence = control.value;
    const words = sentence.split(' ');
    let isOkay = true;
    for(let word of words)
    {
        if(abusiveWords.includes(word))
        {
            isOkay = false;
        }
    }
    if(isOkay)
    {
        return null;
    }
    else
    {
        return {isAbusive : true} // if sentence contains abusive words send an Object {isAbusive : true}
    }
}