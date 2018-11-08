const express = require("express");
const data = require('./database/presidents');

const app = express()

const PORT = 3000 //port 3000 used for local testing

//implemented a comparison function to sort the JSON data.
const presidentsAscending = () => {
  let returnArray = data.presidents.sort((aPresident, bPresident) =>  {

    if (aPresident.name < bPresident.name) {
      return -1
    }
    if (aPresident.name > bPresident.name) {
      return 1
    }
    if (aPresident.name == bPresident.name) {
      return 0
    }
  })
  return returnArray
}

//same comparison function for the JSON data.
const presidentsDescending = () => {
  let returnArray = data.presidents.sort((aPresident, bPresident) =>  {

    if (aPresident.name > bPresident.name) {
      return -1
    }
    if (aPresident.name < bPresident.name) {
      return 1
    }
    if (aPresident.name == bPresident.name) {
      return 0
    }
  })
  return returnArray
}

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`)
})

//standard route for all presidents, in the order they are in the database.
app.get("/api/presidents", (req, res) => {
 res.json(data.presidents);
});

//two different routes for ascending/descending requests.
app.get("/api/presidents/ascending", (req, res) => {
 res.json(presidentsAscending());
});

app.get("/api/presidents/descending", (req, res) => {
 res.json(presidentsDescending());
});
