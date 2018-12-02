# Toy Robot Simulator

## Instruction

This application is implemented in JavaScript based on Node.js.

Here is the detail of my coding environment:

    OS: Windows 10
    IDE: VS Code
    Node.js Version: v10.13.0 (LTS 'Dubnium')
    App entry: main.js

Input is from standard input. In order to run this application, go to Terminal and `cd` to the root directory, and then run `node main.js`

```
cd /YOUR_PATH_TO/robot/
node main.js
```

When you see a greeting message then you can start to type in command and enter (one command per line). The application will continue to receive command until you manually terminate the process (ctrl + c).

## Thoughts

1. I utilised Command Pattern to implement this application, not only because the behavour of this problem fits well, but also providing potentials to further extension (undo feature, new commands, new way of inputting commands and etc.)

2. Test cases down below are summarised from the instruction of this problem and need to be tested manually, which can be improved. A more comprehensive approach could be writing proper user stories based on requirement in advance, and coding up unit test/behaviour test to automatically test the app.

## Test Cases

### Combined Example a, b, c from problem instruction

    PLACE 0,0,NORTH
    MOVE
    REPORT
    PLACE 0,0,NORTH
    LEFT
    REPORT
    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output:

    0,1,NORTH
    0,0,WEST
    3,3,NORTH

### Prevent falling however allow further valid movement command

    PLACE 100,100,NORTH
    REPORT
    PLACE 4,4,EAST
    MOVE
    REPORT
    LEFT
    MOVE
    REPORT
    PLACE 0,0,WEST
    MOVE
    REPORT
    LEFT
    MOVE
    REPORT

Expected output:

    4,4,EAST
    4,4,NORTH
    0,0,WEST
    0,0,SOUTH

### Discard all commands in the sequence until a valid PLACE command has been executed

    LEFT
    RIGHT
    MOVE
    PLACE 100,100,NORTH
    REPORT
    PLACE 0,0,NORTH
    REPORT

Expected output:

    0,0,NORTH
