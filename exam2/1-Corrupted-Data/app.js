 var data = require("./data");
  var checkins = {};
  data.forEach(function( details ) {

       if (!checkins[details.fields.student + details.fields.date]){
          checkins[details.fields.student + details.fields.date] = 1;
       } else {
          console.log(details);
       }

  });



