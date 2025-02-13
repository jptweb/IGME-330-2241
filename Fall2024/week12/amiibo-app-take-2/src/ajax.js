const loadXHR = (url, callback) => {
    // set up the connection
    // when the data loads, invoke the callback function and pass it the `xhr` object
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload = function(){
      callback(xhr);
    }
    xhr.send();
  };

export {loadXHR};