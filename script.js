const obj = { names: ['Oscar', 'John', 'Lucas', 'David', 'George'],

              uberFacts: ['Sex burns an average of 3.6 calories per minute', 
                          'Men tend to take more risks when attractive women are nearby',
                          'Male giraffes taste the urine of female giraffes to determine if they are ready to mate',
                          'The mouth of a jellyfish is also its anus',
                          '40% of American adult still sleep with a teddy bear'],

              numbers: [28, 78, 4, 81, 15],

              randomName() {
                  return this.names[Math.floor(Math.random() * this.names.length)]
              },
              
              randomFacts() {
                  return this.uberFacts[Math.floor(Math.random() * this.uberFacts.length)]
              },

              randomNumber() {
                  return this.numbers[Math.floor(Math.random() * this.numbers.length)]
              },

};

console.log(`Today's lovely name: ${obj.randomName()}. \n And wonderful fact: ${obj.randomFacts()}. \n And the magic number: ${obj.randomNumber()}`)
