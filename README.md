```
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number."
Code: 
beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5];

Test: "It should replace each element with a 1 with the phrase 'Beep!'."
Code:
beepBoop(5);
Expected Output: [0, "Beep!", 2, 3, 4, 5];

Test: "It should replace each 2 with the phrase 'Boop!'."
Code:
beepBoop(5);
Expected output: [0, "Beep!", "Boop!", 3, 4, 5];

Test: "It should replace each 3 with the phrase 'Won't you be my neighbor?'."
Code:
beepBoop(5);
Expected output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5];

Test: "It should replace every element that contains the digit 1 with the phrase 'Beep!'."
Code:
beepBoop(11);
Expected output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"];

Test: "It should replace each and every element that contains the digit 2 with the phrase 'Boop!' and the digit 3 with the phrase 'Won't you be my neighbor?' with the hierarchy of 3>2>1."
Code:
beepBoop(14);
Expected output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep"];

```