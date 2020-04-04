import app from './app';

const port = 3333
app.listen(process.env.PORT || port, () =>{
  console.log(`API Running on http://localhost:${port}`)
})