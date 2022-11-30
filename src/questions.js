export default [
  {
    label: 'What is your destinations desired climate?',
    value: 'Climate',
    options: [
      {value:'Polar', label: '1: Polar'},
      {value:'Temperate', label: '2: Temperate'},
      {value:'Continental', label: '3: Continental'},
      {value:'Tropical', label: '4: Tropical'},
      {value:'Dry', label: '5: Dry'},
    ]
  },
  {
    label: 'What is your destinations desired terrain?',
    value: 'Terrain',
    options: [
      {value:'Canyons', label: '1: Canyons'},
      {value:'Mountainous', label: '2: Mountainous'},
      {value:'Desert', label: '3: Desert'},
      {value:'Forest', label: '4: Forest'},
      {value:'Glacial', label: '5: Glacial'},
      {value:'Beaches', label: '6: Beaches'},
      {value:'Volcanic', label: '7: Volcanic'},
      {value:'Urban', label: '8: Urban'},
    ]
  },
  {
    label: 'What is your budget for your vacation?',
    value: 'Budget',
    options: [
      {value:'$', label: '1: $'},
      {value:'$$', label: '2: $$'},
      {value:'$$$', label: '3: $$$'},
    ]
  }
]