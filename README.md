# CS208-06.03-Mini-Lab-1

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?skip_quickstart=true&machine=basicLinux32gb&repo=1117887487&ref=master&geo=UsWest)


Complete the drawTriangle() function in index.js using GitHub Codespaces.

The function should output a triangle with asterisks (*) based on the triangleSize parameter.
Change the argument to different numbers to verify that your function works with any positive integer. 

Ex: drawTriangle(4) outputs to the console a triangle with triangleSize 4, so the longest side (4 asterisks) appears on the bottom line:

    *
    **
    ***
    ****



Hint: Use a loop to output each line of asterisks. The number of asterisks should increase by one each time the loop iterates.

## Testing Your Code

To test your file go to the terminal in Codespaces and run the file directly.

- Install the dependencies by running `npm install`.
- Now test your code by running `npm test` in the terminal.

You should see output similar to the following if your code is correct:

```bash
$ npm test

> cs208-06.03-mini-lab-1@1.0.0 test
> qunit ./test.js

TAP version 13
ok 1 test drawTriangle with size 4
ok 2 test drawTriangle with size 7
1..2
# pass 2
# skip 0
# todo 0
# fail 0
```
