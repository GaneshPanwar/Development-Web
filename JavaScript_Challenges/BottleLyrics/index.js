function bottles(numofBottles=100) {
  var bottle = numofBottles;
      
      for (bottle; bottle>0; bottle--) {
          console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer, Take 1 down, pass it around, " + (bottle-1) + " bottles of beer on the wall.");
      }
      
  }