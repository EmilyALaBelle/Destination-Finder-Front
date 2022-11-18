export default [
  {
    label: 'What is your destinations desired climate?',
    value: 'desiredClimate',
    options: [
      {value:1, label: '1: Polar'},
      {value:2, label: '2: Temperate'},
      {value:3, label: '3: Arid'},
      {value:4, label: '4: Tropical'},
      {value:5, label: '5: Meditaranian'},
      {value:6, label: '6: Alpine'},
    ]
  },
  {
    label: 'What is your destinations desired terrain?',
    value: 'desiredTerrain',
    options: [
      {value:1, label: '1: Canyons'},
      {value:2, label: '2: Mountainous'},
      {value:3, label: '3: Desert'},
      {value:4, label: '4: Forest'},
      {value:5, label: '5: Glacial'},
      {value:6, label: '6: Beaches'},
      {value:7, label: '7: Volcanic'},
    ]
  },
  {
    label: 'What is your budget for your vacation?',
    value: 'desiredBudget',
    options: [
      {value:1, label: '1: $'},
      {value:2, label: '2: $$'},
      {value:3, label: '3: $$$'},
    ]
  }
]