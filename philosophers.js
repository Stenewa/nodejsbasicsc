philosophers= ['nietzche', 'karl', 'dali', 'albus'];
ideologies = ['nihilism', 'marxism', 'surrealism', 'absurdism'];
console.log(philosophers);
console.log(ideologies)

const disp = () => {
    for (var i = 0; i <= philosophers.length - 1; i++) {
      
      //how you can list the philosophers and their respective ideologies
        console.log(philosophers[i], ideologies[i]);
       
      
    }
}

disp();
module.export = { philosophers, ideologies,disp};