/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // Nested Event Listener for likes
  // playerDiv.querySelector(".like-button").addEventListener("click", e => {
  //   player.likes++
  //   const likesP = playerDiv.querySelector(".likes")
  //   likesP.textContent = `${player.likes} likes`
  // })

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

document.querySelector("#header").addEventListener("click", e => {
  toggleColor(e.target)
})

/***** Deliverable 2 *****/
document.querySelector("#new-player-form").addEventListener("submit", e => {
  e.preventDefault()

  const newPlayer = {
    number: e.target.number.value,
    name: e.target.name.value,
    nickname: e.target.nickname.value,
    photo: e.target.photo.value,
    likes: 0
  }

  renderPlayer(newPlayer)
})

/***** Deliverable 3 *****/
// Event Delegation (see above for nested event listener approach)
document.querySelector(".player-container").addEventListener("click", e => {
  if (e.target.matches(".like-button")) {
    const playerDiv = e.target.closest(".player")
    const likesP = playerDiv.querySelector(".likes")
    const newLikes = parseInt(likesP.textContent) + 1
    likesP.textContent = `${newLikes} likes`
  }
})