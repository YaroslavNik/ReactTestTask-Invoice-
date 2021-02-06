import axios from 'axios'

const apiURL ='https://api.github.com';

const instance = axios.create({
    baseUrl: 'https://api.github.com/',
    headers: {
      'Content-Type': 'application/json'
    },
});

export const appAPI = {
    getUserGit (username) {
        return instance.get(apiURL + `/users/${username}`)
    }
}
  