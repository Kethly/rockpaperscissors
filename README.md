
# rockpaperscissors website application
This was a project done for the odin project curriculum.

The game is simple, win the most out of 5 rounds of rock paper scissors.  If you don't, you simply lose.

#### Sample Display:
![image](https://user-images.githubusercontent.com/57457270/168398739-d1b5ddfb-d6fd-4aee-9062-2164e36df8a3.png)

### Challenges and Current Problems I acknowledge:
- The design was definitely one of the hardest parts to implement.  I had to plan out the positioning and structuring of the flexboxes.
  - This was evident in certain parts such as the computer choosing its randomized choice.  I had to figure out how to use setTimeout to create a pattern that the choosing would follow.  For example, for the time to delay for the action I used x * timeout in a loop to futuristically to create the animation.
- My coding design and layout is not the greatest right now.  It lacks proper comments and structure that would be more efficient and easier to read.  
- It was also one of my first times being able to understand and apply better arrow functions and it really helped my code when combined with commas and ternary operators.
### Interesting/Notable Features:
- Instead of a simple randomized choice for the opponent.  I decided to go a more interesting route of using that randomized choice and making the program do a for loop up to that number.  That way I would be able to make the computer seem like it was choosing its option (to the perspective of the user).  I used a combination of id's and modulus to loop through that pattern.
- Changing the round numbers and the score to display to the player for more information.
- Using flexboxes to structure the page and giving it more life.  I used figma in order to figure out the colors I liked.
### Things for next time:
- I would like to have more advanced CSS and advanced JS to make the choice the player and the computer makes to fly over to its final choice box.
- I would like to keep history and track the players and computers previous choices.
- I may add more colors and life ot the back of the page to use more of the whitespace.
### What I learned
- I definitely learned how to use arrow functions and commas better to more conveniently create functions and use them.
- I figured out how to use modulus in order to loop through the same set of numbers repeatedly
- Was able to comfortably work with flexboxes to get the page I want after designing it in figma.  

#### This was the planned skeleton project in figma:
![image](https://user-images.githubusercontent.com/57457270/168400005-476228e0-3089-4aa4-bc45-c502c3a8df44.png)
