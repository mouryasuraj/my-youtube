<!-- Debouncing -->

typing slow = 200ms
typing fast = 40ms

performace:

- iphone pro max = 14 letter \* 1000 = 14000
- with debounding = 4 letter \* 1000 = 4000


Search debounding logic
--> if difference between two key press is less than 200ms then don't make an API call
--> if difference is greater than 200ms then make an api call