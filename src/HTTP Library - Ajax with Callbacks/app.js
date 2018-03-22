const http = new easyHTTP();

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});