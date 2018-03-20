document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true); // if you want it asynchronous set it to true

  console.log('READYSTATE', xhr.readyState); // Start - 1

  // Optional - Use for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState); // Process - 3
  }

  // when everything is ready, call
  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState); // Finished - 4
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // OLD CODE
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState); // Process
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  // In case something goes wrong
  xhr.onerror = function() {
    console.log('Request error...')
  }

  // SEND
  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Common Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}