# JS Mini Challenge: Event Handling

In this challenge, we're going to keep working on Ian's Liverpool fan page and give our users the ability to:

- Toggle the header color
- Add new players
- 'Like' a player 

We've got some starter code already written for us (this should look somewhat familiar from the previous challenge). Your job is to add some additional functionality to make our app more dynamic by handling user interactions.

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

## Deliverable 1: Toggle Header

**When a user clicks the header**, the color should toggle between black and red. 

To get you started, there's a helper function already written takes in an element and toggles its color that you can use. You can try it out in your console:

```js
toggleColor(document.querySelector("h1#header"))
```

Try calling it a few times to see the color switch back and forth. 

Once you have it working in the console, write an event listener that will use this helper function to change the color of the header when a user clicks on it.

**YOUR NOTES**
1. find the header element('h1#header')
2. addEventListener
3. toggleColor(header)

## Deliverable 2: Create Player

Our app already has a few players in it (check out the starter code in `index.js` to see how the initial render is set up), but we want our users to have the ability to add additional players by entering the player's details in the `form#new-player-form`.

**When a user submits the form**, the new player should be displayed on the bottom of the page (you can use the `renderPlayer` helper function from the starter code if you like). The data won't persist (when you refresh the page, the new player won't show up) - we'll see how to fix this later in the mod. For now, focus on getting the player on the page when the form is submitted!

Some things to keep in mind:
- If you see the page refresh, consider adding some code to *prevent* the *default* behavior of a form submitting.
- Make sure you're using the form *submit* event, not the *click* event.
- You can use the `name` attribute of the input elements as an easy way to reference the input fields within the form. For example: `document.querySelector("#new-player-form").nickname` will look inside the `form#new-player-form` and return the `input` element with the `name='nickname'` attribute
- Once you have access to an input field, you still need to retrieve its *value* to see what the user entered in the form!

**YOUR NOTES**
1. Find #new-player-form
2. .addEventListener (don't forget event.preventDefault())
3. create const player
4. reference to the previous render function
5. reset()

## Deliverable 3: Like Button

**When a user clicks the like button for a player**, that player's likes should increase by 1. 

You can decide if you'd like to use *event delegation* to handle this, or if you'd like to attach *individual event listeners* to each like button. Regardless of the approach you take, the like button feature should work for all players (including new players that get added when a user fills out the form).

**YOUR NOTES**
1. playerContainer.addListenerEvent
2. condition -> if event.target matches the like-button
3. find closest class (.player)
4. check who was liked (.likes)
5. parseInt, then see current likes
