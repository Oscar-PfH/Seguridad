let lower = 'abcdefghijklmnñopqrstuvwxyz';
let upper = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

let text = 'mEnsaJe';
let steps = 2;
let direction = -1;

cipher = (text, steps, direction) => {
    let textLength = text.length;
    let cipherText = '';
    steps *= direction;
    for (let i = 0; i < textLength; i++) {
        let k = lower.indexOf(text[i]);
        if (k > -1) {
            if (k + steps > 26) k -= 27;
            else if (k + steps < 0) k += 27;
            cipherText += lower[k+steps];
        }
        else {
            k = upper.indexOf(text[i]);
            if (k + steps > 26) k -= 27;
            else if (k + steps < 0) k += 27;
            cipherText += upper[k+steps];
        }
    }
    console.log(cipherText);
}

cipher(text, steps, direction);
