This example demonstrate two ways of calculating count of array subset with a particular sum

At the top of the page there is a form where one can enter comma separated list and the sum that we are expecting from a sub array.
The entered elements are also shown in green colored boxes in the bottom
![image](https://github.com/devashish234073/dsa-visualization-html-js/assets/20777854/aaad8845-85d8-4b71-943c-74821ea09027)

The two buttons do optimal and do brute force are demonstrating the two algorithms:

## Do brute force displays an output like this(iterating over the array multiple times to get all teh sub arrays get the total and highlight in green if matches the sum):

![image](https://github.com/devashish234073/dsa-visualization-html-js/assets/20777854/4160b650-3609-4a12-8968-e9034dbd353e)

## The optimal one in comparison does the same calculation in just one iteration:

![image](https://github.com/devashish234073/dsa-visualization-html-js/assets/20777854/bc28c8f6-7010-4d83-bec6-092bf3441de6)

Here in each row the red highligted are sums , the gray highlighted are distance between the sum and the expected value, a map is updated at each step storing the sum as key and its frequency as value. [the map is initialized as {0,1} which can be understood by changing the expected sum to 10 and trying with the default example]

The green highlighted gets the frequency of the difference from the map of sums, it does that because if the difference existed in a previous subset same can be removed from the current subset to get the expected sum, the orange highlighted cells shows the sublist that can be removed to get the sum.



