// create an express server
const express = require('express');
const app = express();

const users = [
  {
    name: 'john',
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get('/', (req, res) => {
  const johnkidney = users[0].kidneys;
  const nokidneys = johnkidney.length;
  let numberofhealthykidneys = 0;
  //   console.log(johnkidney);
  for (let i = 0; i < nokidneys; i++) {
    if (johnkidney[i].healthy) {
      numberofhealthykidneys++;
    }
  }
  res.json({
    name: users[0].name,
    numberofhealthykidneys,
  });
});
app.post('/', (req, res) => {});
app.patch('/', (req, res) => {});
app.delete('/', (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
