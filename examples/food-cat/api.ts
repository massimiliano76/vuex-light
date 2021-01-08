import { Restaurant } from 'static'
import { sleep } from './util'

export async function fetchMoreRestaurants(): Promise<Restaurant[]> {
  await sleep(1000)
  return [
    {
      id: 'et culpa est anim',
      name: 'Sipes - Oberbrunner',
      phoneNumber: 'ipsum',
      address: 'qui dolor deserunt est',
      dishes: [
        {
          name: 'Ergonomic Steel Bacon',
          description: 'non est velit do',
          price: '487.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Unbranded Wooden Ball',
          description: 'non minim in veniam',
          price: '237.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Generic Cotton Gloves',
          description: 'quis id dolore amet pariatur',
          price: '901.00',
          remaining: 3,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Small Concrete Shirt',
          description: 'irure ullamco',
          price: '478.00',
          remaining: 8,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Gorgeous Plastic Sausages',
          description: 'eiusmod',
          price: '246.00',
          remaining: 5,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Refined Granite Cheese',
          description: 'eu incididunt voluptate',
          price: '910.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Refined Cotton Car',
          description: 'aliquip',
          price: '876.00',
          remaining: 3,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Fantastic Plastic Car',
          description: 'officia',
          price: '358.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Fantastic Granite Salad',
          description: 'minim eiusmod ex',
          price: '591.00',
          remaining: 3,
          imageUrl: 'http://lorempixel.com/640/480',
        },
      ],
    },
    {
      id: 'aute irure Excepteur',
      name: 'Rolfson - Quigley',
      phoneNumber: 'id pariatur do',
      address: 'eiusmod non Excepteur',
      dishes: [
        {
          name: 'Refined Plastic Bike',
          description: 'Lorem ad',
          price: '10.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Licensed Soft Shoes',
          description: 'ipsum',
          price: '454.00',
          remaining: 5,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Refined Concrete Soap',
          description: 'ad anim magna aliquip',
          price: '470.00',
          remaining: 7,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Sleek Metal Tuna',
          description: 'et',
          price: '736.00',
          remaining: 10,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Incredible Cotton Keyboard',
          description: 'sunt',
          price: '952.00',
          remaining: 4,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Intelligent Frozen Bacon',
          description: 'cupidatat sit deserunt quis magna',
          price: '907.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Unbranded Granite Pants',
          description: 'Duis sit incididunt laborum',
          price: '738.00',
          remaining: 2,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Small Metal Bacon',
          description: 'sit elit proident',
          price: '868.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Handmade Soft Shoes',
          description: 'dolore',
          price: '299.00',
          remaining: 4,
          imageUrl: 'http://lorempixel.com/640/480',
        },
      ],
    },
    {
      id: 'sed',
      name: 'Keeling - Herzog',
      phoneNumber: 'ut in',
      address: 'Duis nisi',
      dishes: [
        {
          name: 'Awesome Plastic Ball',
          description: 'id aute non',
          price: '180.00',
          remaining: 8,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Licensed Fresh Cheese',
          description: 'sunt laboris tempor irure',
          price: '844.00',
          remaining: 9,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Gorgeous Rubber Sausages',
          description: 'proident ut ullamco',
          price: '942.00',
          remaining: 5,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Handcrafted Metal Towels',
          description: 'culpa pariatur Duis labore',
          price: '889.00',
          remaining: 5,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Handmade Rubber Ball',
          description: 'amet sit',
          price: '5.00',
          remaining: 10,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Unbranded Wooden Sausages',
          description: 'eu eiusmod ea mollit',
          price: '649.00',
          remaining: 10,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Handmade Plastic Chips',
          description: 'ex',
          price: '722.00',
          remaining: 1,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Rustic Granite Mouse',
          description: 'et',
          price: '465.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Awesome Granite Bacon',
          description: 'reprehenderit sed',
          price: '734.00',
          remaining: 9,
          imageUrl: 'http://lorempixel.com/640/480',
        },
      ],
    },
    {
      id: 'eiusmod',
      name: 'Sauer Inc',
      phoneNumber: 'dolore cupidatat',
      address: 'consectetur Lorem in est fugiat',
      dishes: [
        {
          name: 'Ergonomic Metal Shirt',
          description: 'eiusmod qui',
          price: '278.00',
          remaining: 7,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Sleek Cotton Tuna',
          description: 'laboris exercitation ea',
          price: '895.00',
          remaining: 8,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Generic Frozen Pants',
          description: 'ut fugiat incididunt labore',
          price: '45.00',
          remaining: 8,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Licensed Soft Tuna',
          description: 'culpa laborum sint do eiusmod',
          price: '971.00',
          remaining: 10,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Intelligent Concrete Bike',
          description: 'veniam consectetur ex id',
          price: '478.00',
          remaining: 10,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Licensed Soft Salad',
          description: 'consectetur Duis adipisicing ex consequat',
          price: '904.00',
          remaining: 1,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Ergonomic Fresh Bacon',
          description: 'cillum dolore velit in pariatur',
          price: '558.00',
          remaining: 3,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Sleek Wooden Car',
          description: 'velit sint',
          price: '431.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Gorgeous Frozen Tuna',
          description: 'sit',
          price: '170.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
      ],
    },
    {
      id: 'incididunt minim',
      name: 'Hirthe - Roberts',
      phoneNumber: 'in Duis nostrud',
      address: 'dolor occaecat',
      dishes: [
        {
          name: 'Incredible Steel Sausages',
          description: 'in exercitation dolore dolor reprehenderit',
          price: '801.00',
          remaining: 10,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Refined Concrete Car',
          description: 'anim dolore commodo ea adipisicing',
          price: '69.00',
          remaining: 9,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Awesome Rubber Bacon',
          description: 'dolore commodo eiusmod laboris voluptate',
          price: '389.00',
          remaining: 4,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Ergonomic Cotton Hat',
          description: 'in quis officia tempor dolor',
          price: '149.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Ergonomic Fresh Tuna',
          description: 'amet mollit minim',
          price: '526.00',
          remaining: 9,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Ergonomic Plastic Sausages',
          description: 'quis velit',
          price: '760.00',
          remaining: 9,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Fantastic Soft Mouse',
          description: 'ea cupidatat anim sed amet',
          price: '474.00',
          remaining: 8,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Incredible Granite Computer',
          description: 'ut enim elit eiusmod aliqua',
          price: '514.00',
          remaining: 1,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Small Wooden Chips',
          description: 'et',
          price: '164.00',
          remaining: 2,
          imageUrl: 'http://lorempixel.com/640/480',
        },
      ],
    },
    {
      id: 'cillum cupidatat Lorem',
      name: 'Koepp - Corkery',
      phoneNumber: 'et',
      address: 'aliqua Excepteur veniam fugiat in',
      dishes: [
        {
          name: 'Rustic Plastic Tuna',
          description: 'exercitation ex',
          price: '668.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Fantastic Granite Sausages',
          description: 'mollit',
          price: '254.00',
          remaining: 10,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Handcrafted Metal Mouse',
          description: 'magna quis aliqua sit',
          price: '674.00',
          remaining: 10,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Intelligent Rubber Hat',
          description: 'in velit',
          price: '321.00',
          remaining: 4,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Handmade Soft Chips',
          description: 'laboris commodo esse',
          price: '653.00',
          remaining: 3,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Fantastic Soft Fish',
          description: 'commodo pariatur occaecat elit est',
          price: '741.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Tasty Wooden Gloves',
          description: 'do aute',
          price: '206.00',
          remaining: 2,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Ergonomic Metal Fish',
          description: 'nisi irure ex',
          price: '679.00',
          remaining: 7,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Awesome Fresh Chicken',
          description: 'ipsum dolor incididunt',
          price: '275.00',
          remaining: 4,
          imageUrl: 'http://lorempixel.com/640/480',
        },
      ],
    },
    {
      id: 'in consequat enim in sit',
      name: 'Daniel - Bergstrom',
      phoneNumber: 'dolor aliquip',
      address: 'labore non',
      dishes: [
        {
          name: 'Handcrafted Fresh Chair',
          description: 'reprehenderit eu deserunt esse',
          price: '674.00',
          remaining: 2,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Generic Concrete Sausages',
          description: 'aliquip esse quis incididunt',
          price: '336.00',
          remaining: 9,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Gorgeous Plastic Sausages',
          description: 'exercitation cupidatat amet',
          price: '389.00',
          remaining: 1,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Intelligent Plastic Gloves',
          description: 'laborum',
          price: '743.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Awesome Soft Chicken',
          description: 'in nulla pariatur cillum minim',
          price: '458.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Licensed Cotton Ball',
          description: 'eu amet occaecat',
          price: '103.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Small Frozen Bike',
          description: 'sunt in dolor aliquip',
          price: '293.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Awesome Steel Gloves',
          description: 'tempor dolor commodo ex ipsum',
          price: '807.00',
          remaining: 1,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Handcrafted Granite Computer',
          description: 'anim officia velit in consectetur',
          price: '349.00',
          remaining: 8,
          imageUrl: 'http://lorempixel.com/640/480',
        },
      ],
    },
    {
      id: 'Ut',
      name: 'Vandervort LLC',
      phoneNumber: 'mollit est',
      address: 'occaecat dolor Lorem ut sint',
      dishes: [
        {
          name: 'Intelligent Steel Table',
          description: 'dolor velit laboris ea',
          price: '851.00',
          remaining: 3,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Incredible Frozen Soap',
          description: 'consequat mollit eiusmod',
          price: '284.00',
          remaining: 10,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Practical Metal Table',
          description: 'culpa',
          price: '593.00',
          remaining: 7,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Licensed Rubber Salad',
          description: 'est',
          price: '311.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Handcrafted Steel Keyboard',
          description: 'ea amet elit',
          price: '95.00',
          remaining: 3,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Intelligent Fresh Fish',
          description: 'ut irure esse ut dolor',
          price: '112.00',
          remaining: 7,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Generic Granite Bike',
          description: 'irure anim dolor laboris',
          price: '623.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Incredible Granite Shirt',
          description: 'sit ex anim cillum',
          price: '50.00',
          remaining: 7,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Ergonomic Plastic Pizza',
          description: 'amet consequat fugiat',
          price: '953.00',
          remaining: 2,
          imageUrl: 'http://lorempixel.com/640/480',
        },
      ],
    },
    {
      id: 'aliquip dolore non aute',
      name: 'Will - Hyatt',
      phoneNumber: 'ut elit aliqua enim',
      address: 'non occaecat',
      dishes: [
        {
          name: 'Small Soft Tuna',
          description: 'ex aliquip magna aliqua',
          price: '408.00',
          remaining: 4,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Intelligent Metal Table',
          description: 'sint',
          price: '566.00',
          remaining: 4,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Generic Soft Keyboard',
          description: 'Excepteur ut consectetur aliquip in',
          price: '743.00',
          remaining: 0,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Tasty Concrete Cheese',
          description: 'sed',
          price: '491.00',
          remaining: 6,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Fantastic Wooden Cheese',
          description: 'consequat officia',
          price: '527.00',
          remaining: 5,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Unbranded Rubber Salad',
          description: 'pariatur ut',
          price: '405.00',
          remaining: 1,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Awesome Rubber Fish',
          description: 'eu commodo Ut cupidatat officia',
          price: '951.00',
          remaining: 8,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Awesome Soft Computer',
          description: 'consectetur in eu occaecat veniam',
          price: '530.00',
          remaining: 8,
          imageUrl: 'http://lorempixel.com/640/480',
        },
        {
          name: 'Licensed Granite Shoes',
          description: 'sunt nulla in',
          price: '383.00',
          remaining: 9,
          imageUrl: 'http://lorempixel.com/640/480',
        },
      ],
    },
  ]
}
