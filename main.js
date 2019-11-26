


// let items = [
//     { item: "cheese", price: 15 },
//     { item: "arak", price: 68 },
//     { item: "hummus", price: 15 },
//     { item: "pita", price: 5 }
// ]


// // turn our "template" into html
// let source = $("#store-template").html()
// console.log(source)

// // compile our template html using handlebars

// // let template = Handlebars.compile(source)
// let template = Handlebars.compile(source);

// // fill our template with information
// for (let i of items) {
//     let newHTML = template(i)
//     $('.items').append(newHTML)
// }

//   // append our new html to the page


// const classData = {
//     classmates: [
//         { name: "That on gal", description: "Always has the ansswer" },
//         { name: "The weird dude", description: "Quick with a smile" },
//         { name: "Taylor", description: "Just Taylor" }
//     ]
// }


// const source = $("#class-template").html();

// const template = Handlebars.compile(source);
// const newHTML = template(classData);

// $('.classroom').append(newHTML);


const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]
const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const renderFirst = function(){
    const source = $('#first-template').html();
    const template = Handlebars.compile(source);
    // let newHTML = template({ text: "This gets rendered" });
   
    const newHTML = template({animals});
    $('body').append(newHTML)
  }
  
  const renderSecond = function(){
    const source = $('#second-template').html();
    const template = Handlebars.compile(source);
    // let newHTML = template({ moreText: "This also gets rendered" });
    let newHTML = template({languages});
    $('#special').append(newHTML);  
  }
  
  renderFirst()
  renderSecond()
  