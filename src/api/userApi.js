import 'whatwg-fetch';
// import { get } from 'http';

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch (url).then(onSuccess, onError);
}

function onSuccess(res) {
  return res.json();
}

function onError(error) {
  console.log(error);
}
