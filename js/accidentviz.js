  var sample_data = [
      //Removing dhaka and chittagong since it produces biased result
      {
          "death_count": 32,
          "district": "rajshahi",
          "group": "Accident Count by District"
      },
      //{"death_count": 137, "district": "dhaka", "group" : "Accident Count by District"},
      /*
      {
          "death_count": 54,
          "district": "chittagong",
          "group": "Accident Count by District"
      }, 
      */
      {
          "death_count": 29,
          "district": "khulna",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "magura",
          "group": "Accident Count by District"
      }, {
          "death_count": 10,
          "district": "gazipur",
          "group": "Accident Count by District"
      }, {
          "death_count": 13,
          "district": "barisal",
          "group": "Accident Count by District"
      }, {
          "death_count": 2,
          "district": "panchagarh",
          "group": "Accident Count by District"
      }, {
          "death_count": 5,
          "district": "meherpur",
          "group": "Accident Count by District"
      }, {
          "death_count": 4,
          "district": "madaripur",
          "group": "Accident Count by District"
      }, {
          "death_count": 3,
          "district": "bhola",
          "group": "Accident Count by District"
      }, {
          "death_count": 12,
          "district": "pabna",
          "group": "Accident Count by District"
      }, {
          "death_count": 7,
          "district": "manikganj",
          "group": "Accident Count by District"
      }, {
          "death_count": 14,
          "district": "bogra",
          "group": "Accident Count by District"
      }, {
          "death_count": 5,
          "district": "jessore",
          "group": "Accident Count by District"
      }, {
          "death_count": 3,
          "district": "chandpur",
          "group": "Accident Count by District"
      }, {
          "death_count": 8,
          "district": "comilla",
          "group": "Accident Count by District"
      }, {
          "death_count": 11,
          "district": "tangail",
          "group": "Accident Count by District"
      }, {
          "death_count": 7,
          "district": "moulvibazar",
          "group": "Accident Count by District"
      }, {
          "death_count": 9,
          "district": "sirajganj",
          "group": "Accident Count by District"
      }, {
          "death_count": 7,
          "district": "gaibandha",
          "group": "Accident Count by District"
      }, {
          "death_count": 16,
          "district": "dinajpur",
          "group": "Accident Count by District"
      }, {
          "death_count": 10,
          "district": "khagrachhari",
          "group": "Accident Count by District"
      }, {
          "death_count": 4,
          "district": "faridpur",
          "group": "Accident Count by District"
      }, {
          "death_count": 6,
          "district": "sylhet",
          "group": "Accident Count by District"
      }, {
          "death_count": 7,
          "district": "satkhira",
          "group": "Accident Count by District"
      }, {
          "death_count": 9,
          "district": "narayanganj",
          "group": "Accident Count by District"
      }, {
          "death_count": 3,
          "district": "lalmonirhat",
          "group": "Accident Count by District"
      }, {
          "death_count": 5,
          "district": "rangamati",
          "group": "Accident Count by District"
      }, {
          "death_count": 5,
          "district": "bandarban",
          "group": "Accident Count by District"
      }, {
          "death_count": 7,
          "district": "brahmanbaria",
          "group": "Accident Count by District"
      }, {
          "death_count": 6,
          "district": "netrakona",
          "group": "Accident Count by District"
      }, {
          "death_count": 2,
          "district": "feni",
          "group": "Accident Count by District"
      }, {
          "death_count": 3,
          "district": "natore",
          "group": "Accident Count by District"
      }, {
          "death_count": 9,
          "district": "naogaon",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "narsingdia",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "narsingdi",
          "group": "Accident Count by District"
      }, {
          "death_count": 3,
          "district": "sherpur",
          "group": "Accident Count by District"
      }, {
          "death_count": 9,
          "district": "bagerhat",
          "group": "Accident Count by District"
      }, {
          "death_count": 4,
          "district": "patuakhali",
          "group": "Accident Count by District"
      }, {
          "death_count": 3,
          "district": "chapainawabganj",
          "group": "Accident Count by District"
      }, {
          "death_count": 4,
          "district": "kushtia",
          "group": "Accident Count by District"
      }, {
          "death_count": 4,
          "district": "rangpur",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "barguna",
          "group": "Accident Count by District"
      }, {
          "death_count": 2,
          "district": "pirojpur",
          "group": "Accident Count by District"
      }, {
          "death_count": 2,
          "district": "munshiganj",
          "group": "Accident Count by District"
      }, {
          "death_count": 3,
          "district": "jamalpur",
          "group": "Accident Count by District"
      }, {
          "death_count": 3,
          "district": "gopalganj",
          "group": "Accident Count by District"
      }, {
          "death_count": 6,
          "district": "thakurgaon",
          "group": "Accident Count by District"
      }, {
          "death_count": 2,
          "district": "joypurhat",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "rajbari",
          "group": "Accident Count by District"
      }, {
          "death_count": 2,
          "district": "habiganj",
          "group": "Accident Count by District"
      }, {
          "death_count": 5,
          "district": "mymensingh",
          "group": "Accident Count by District"
      }, {
          "death_count": 3,
          "district": "sunamganj",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "dinajpuri",
          "group": "Accident Count by District"
      }, {
          "death_count": 2,
          "district": "nilphamari",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "barisal",
          "group": "Accident Count by District"
      }, {
          "death_count": 2,
          "district": "shariatpur",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "chapainawabganja",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "chuadanga",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "jhenaidah",
          "group": "Accident Count by District"
      }, {
          "death_count": 1,
          "district": "kishoreganj",
          "group": "Accident Count by District"
      },
  ];
  // instantiate d3plus
  var visualization = d3plus.viz()
      .container("#vis") // container DIV to hold the visualization
      .data(sample_data) // data to use with the visualization
      .type("bubbles") // visualization type
      .id(["group", "district"]) // nesting keys
      .depth(1) // 0-based depth
      .size("death_count") // key name to size bubbles
      .color("group") // color by each group
      .draw() // finally, draw the visualization!