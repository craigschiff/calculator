Check out my calculator!

To use this calculator run npm start

It should work as the IOS version does including edge cases. It was created with a local state in the calculator component. All of the logic is in this component. The state holds two terms, and an answer. There is a separate indicator for status which informs whether or not an operation is 'in progress'.

Conditionals handle many edge cases. For example, the most recent term remains in place even after an expression is evaluated as does the status. So if one types into an IOS calculator '3' '+' '5' '=' and then types in '9' and '=' again the answer is 14. This is because the 'add' status and the '5' term are both in place for the next expression if not replaced.

I have also accounted for evaluating more than two terms calling the evaluate function when the second operator is called. I have accounted for inputting only one term and a operator, i.e. '3' '+' '=' is 6 consistent with IOS response.
