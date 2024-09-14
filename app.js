const express  = require('express');
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');



app.use('/', indexRouter);
app.use('/new', userRouter);

app.listen(8080, () => {

})