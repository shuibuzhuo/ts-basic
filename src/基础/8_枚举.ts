enum Color1 {
  Red,
  Green,
  Blue
}

const color = Color1.Blue
console.log(color) // 2

enum Color2 {
  Red = 5,
  Green,
  Blue
}

enum Color3 {
  Red = 5,
  Green = 10,
  Blue = 1
}

enum Color4 {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

const color2 = Color4.Blue
console.log(color2) // blue
