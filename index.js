// fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1') // fetch returns a poromise so to get the data we use then for resolved and catch for rejected
  .then((response) => response.json()) // .json method returns a poromise so to get the data we use then for resolved and catch for rejected
  .then((data) => console.log(data))
  .catch((err) => console.log('rejected', err)); 



// fetch API using async & await
const getPosts = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/2'); // we use async & await like this to replace then because thats more organized 
  if (response.status !== 200){ // we use this to show the error message when there is an error in the fetched link
    throw new Error('Can not fetch the data');
  }
  const data = await response.json();
  return data;

};

getPosts() // async function retuns a promise so we use then for resolved and catch for rejected to get the data
  .then((data) => console.log('Resolved:', data))
  .catch((err) => console.log('rejected:', err.message));
