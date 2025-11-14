const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/edumarine", {
  useNewUrlParser: true, useUnifiedTopology: true
});
