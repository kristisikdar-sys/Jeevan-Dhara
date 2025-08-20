const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
