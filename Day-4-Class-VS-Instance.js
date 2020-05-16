function Person(initialAge){
    // Add some more code to run some checks on initialAge
    let age = initialAge;

  this.amIOld= () => {
   // Do some computations in here and print out the correct statement to the console
   if (age < 13 && age > -1)
          console.log("You are young.");
      else if (age < 18 && age > 12)
          console.log("You are a teenager.");
      else if (age > 17)
          console.log("You are old.");
      else
        {
            console.log("Age is not valid, setting age to 0.")
            age = 0;
            this.amIOld();
        }

  };
   this.yearPasses= () => {
          // Increment the age of the person in here
          age ++;
   };
}
