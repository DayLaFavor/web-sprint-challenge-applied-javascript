const Header = (title, date, temp) => {
  // TASK 1
  const header = document.createElement('div')
  header.classList.add('header')

  const dateElem = document.createElement('span')
  dateElem.classList.add('date')

  const titleElem = document.createElement('h1')
  titleElem.classList.add('title')

  const tempElem = document.createElement('span')
  tempElem.classList.add('temp')

  header.appendChild(dateElem)
  header.appendChild(titleElem)
  header.appendChild(tempElem)

  dateElem.textContent = `${date}`
  titleElem.textContent = `${title}`
  tempElem.textContent = `${temp}`

  return header;

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
  const selectorDate = document.querySelector(selector);
  selectorDate.appendChild(Header(
    'Bloom Times', 'December 3, 2021', '4 degrees Celsius'
  ))
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
