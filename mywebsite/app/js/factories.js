myApp.factory('db', function() {
  var items = [];

  var modify = {};
  modify.addItem = function(item) {
    items.push(item);
    console.log('Successfully Added items');
    return 'added item';
  };
  modify.getItems = function() {
	console.log('Successfully Added items');
    return items;
  }
  return modify; // returning this is very important
});