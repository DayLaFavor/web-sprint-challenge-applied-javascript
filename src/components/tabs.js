import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  const array = Array.prototype.slice.call(nodeList)
  for(let i = 0; i < array.length; i++){
    array[i] = document.createElement('div')
    topics.classList.add('tab')
    array[i].textContent = `${array[i]}`
  }
  
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selectorTabs) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics`)
  .then(resp => {
    console.log(resp)
  })
  .catch(err => {
    console.error(err)
  })
}

export { Tabs, tabsAppender }
