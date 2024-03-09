const people = ['mum', 'dad', 'uncle', 'sister', 'brother']
const ages = [37, 37, 42, 18, 12]

console.log(people)

// defining what will be exported to other files
module.exports = {
    people: people,
    ages: ages
}