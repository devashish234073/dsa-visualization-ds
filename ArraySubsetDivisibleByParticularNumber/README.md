This example demonstrate two ways of calculating count of array subset with sum divisible by a partcular number

Video Explainng the usage: []

At the top of the page there is a form where one can enter comma separated list and the sum that we are expecting from a sub array.
The entered elements are also shown in green colored boxes in the bottom
![image](https://github.com/devashish234073/dsa-visualization-html-js/assets/20777854/aaad8845-85d8-4b71-943c-74821ea09027)

The two buttons do optimal and do brute force are demonstrating the two algorithms:

## Do brute force displays an output like this(iterating over the array multiple times to get all teh sub arrays get the total do a mod operation to get the remainder and highlight in green if the reminder is 0):

![image](https://github.com/devashish234073/dsa-visualization-html-js/assets/20777854/2d61415b-9c46-454c-b518-87aeed697dad)


## The optimal one in comparison does the same calculation in just one iteration:

![image](https://github.com/devashish234073/dsa-visualization-html-js/assets/20777854/76f07bd5-6af4-4744-bfaf-1476b6bdfed9)


Here in each row the red highligted are sums and remainders , a map is updated at each step storing the remainder as key and its frequency as value. [the map is initialized as {0,1} as while iterating we are only taking care of what arrays to remove and in between we also encounter arrays which matches the exact divisibility so to account for that we start the map with remainder 0 as having frequency 1, it will only be used when the list actually has a subarray giving us remainder 0]

The green highlighted gets the frequency of the difference from the map of remainders, it does that because if the difference existed in a previous subset same can be removed from the current subset to get the expected sum, the orange highlighted cells shows the sublist that can be removed to get the sum which is divisibe by the particular number.



