import drawTriangle from './index.js';

QUnit.test('test drawTriangle with size 4', function(assert) {

   let actualOutput = '';
   console.log = function(output) { actualOutput += `${output}\n`; };

   const triangleSize = 4;
   const expectedOutput = `*
**
***
****
`;

   drawTriangle(triangleSize);
   assert.equal(actualOutput, expectedOutput,
      `Test drawTriangle(${triangleSize}) draws a triangle of size ${triangleSize}`);
});

QUnit.test('test drawTriangle with size 7', function(assert) {
   let actualOutput = '';
   console.log = function(output) { actualOutput += `${output}\n`; };

   const triangleSize = 7;
   const expectedOutput = `*
**
***
****
*****
******
*******
`;

   drawTriangle(triangleSize);
   assert.equal(actualOutput, expectedOutput,
      `Test drawTriangle(${triangleSize}) draws a triangle of size ${triangleSize}`);
});
