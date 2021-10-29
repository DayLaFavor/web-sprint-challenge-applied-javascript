const Header = (title, date, temp) => {
  // TASK 1
  const header = document.createElement('div')
  header.classList.add('header')

  const date = document.createElement('span')
  date.classList.add('date')

  const title = document.createElement('h1')
  title.classList.add('title')

  const temp = document.createElement('span')
  temp.classList.add('temp')

  header.appendChild(date)
  header.appendChild(title)
  header.appendChild(temp)

  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  // TASK 2
  const selector = document.createElement('header')
  selector.classList.add('header')
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
