// Objetos

export let person = {
  name: 'John',
  age: 30,
  isActive: true,
  hobbies:[ 'Soccer', 'Baseball'],
  toString() {
    let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
    console.log(objectString)
  }
}

/* person.toString(); */

let car = {
  brand: 'Nissan',
  model: 'Pathfinder',
  year: 2020,
  color: 'white',
  }

let smartTv = {
  brand: 'Samsung',
  model: 'TV3433BK',
  smart: true,
  sizeInches: 85,
  
  }

let youtubeVideo = {
  format: 'mp4',
  resolution: '1080p',
  bitrate: 1000000,
  author: 'John',
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);