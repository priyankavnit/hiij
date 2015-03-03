var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');

//mongoose.connect('mongodb://localhost:27017/mean-demo');
mongoose.connect('mongodb://root:root@ds029950.mongolab.com:29950/mean-demo');
app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.listen(process.env.PORT||5000) ;
  console.log('I\'m Listening...at 5000');
