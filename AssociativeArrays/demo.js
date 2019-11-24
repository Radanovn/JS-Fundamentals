let obj = {
    name: 'Peter', age: 22
};

obj['name'];

let map = new Map ();
map.set('name', 'Peter');
console.log(map.get('name'));

obj.hasOwnProperty('name');
map.has('name');

delete obj['name'];
map.delete('name');



