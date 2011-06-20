Ti.include('lib/vendor/joli.js/joli.js');
Ti.include('lib/model/models.js');

Titanium.UI.setBackgroundColor('#fff');

// create a Window and a TextArea in it
var win = Titanium.UI.createWindow({
    title:'joli.js demonstration',
    backgroundColor:'#fff'
});
var label = Titanium.UI.createLabel({
  top:10,
	left:10,
	width:'auto',
	height:'auto'
});
win.add(label);
win.open();



joli.models.initialize();

// create a "City" record and persist it
var newYork = models.city.newRecord({
  name:        'New York',
  description: 'A big Apple'
});
newYork.save();

label.text = 'New York saved in database';

// create a "human" record (not persisted)
var john = models.human.newRecord({
  first_name: 'John',
  last_name: 'Doe'
});
label.text = label.text + '\nJohn created';

// move him to New York
john.move('New York');
label.text = label.text + '\nJohn moved to New York';

// persist it
john.save();
label.text = label.text + '\nJohn saved in database';

// create an other "human" record (not persisted)
var sarah = models.human.newRecord({
  first_name: 'Sarah',
  last_name: 'Sure'
});
sarah.move('New York');
sarah.save();
label.text = label.text + '\nSarah created and saved in database';

// count the number of New York habitants
var count = models.human.countIn('New York');
label.text = label.text + '\nThere are ' + count + ' inhabitants in New York';