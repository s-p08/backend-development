require('dotenv').config()

console.log("chai aur code");
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    
  "login": "SP-08",
  "id": 56309576,
  "node_id": "MDQ6VXNlcjU2MzA5NTc2",
  "avatar_url": "https://avatars.githubusercontent.com/u/56309576?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SP-08",
  "html_url": "https://github.com/SP-08",
  "followers_url": "https://api.github.com/users/SP-08/followers",
  "following_url": "https://api.github.com/users/SP-08/following{/other_user}",
  "gists_url": "https://api.github.com/users/SP-08/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SP-08/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SP-08/subscriptions",
  "organizations_url": "https://api.github.com/users/SP-08/orgs",
  "repos_url": "https://api.github.com/users/SP-08/repos",
  "events_url": "https://api.github.com/users/SP-08/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SP-08/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2019-10-08T14:24:53Z",
  "updated_at": "2022-07-22T13:44:25Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('shivamdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login my website</h1>')
})
app.get('/linkedin',(req,res)=>{
    res.send('<h2>click here to go to linkedin</h2>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
