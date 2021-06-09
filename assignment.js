// Feet to Mile 
function feetToMile(feet) {
    if (feet < 0 || isNaN(feet)) {
        return "Wrong Input";
    }
    var mile = feet / 5280;
    return mile;
};

// Wood Calculator
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0 || isNaN(chair) || isNaN(table) || isNaN(bed)) {
        return "Wrong Input";
    }
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
};

// Brick Calculator
function brickCalculator(floor) {
    if (floor < 0 || isNaN(floor)) {
        return "Wrong Input";
    } else {
        var totalBrick = 0;

        if (floor > 20) {
            // For 21 to Infinity Floor
            var twentyOneToInfinity = floor - 20;
            totalBrick = totalBrick + (twentyOneToInfinity * 10) * 1000;

            // For 11 to 20 Floor
            var elevenToTwenty = (floor - twentyOneToInfinity) - 10;
            totalBrick = totalBrick + ((elevenToTwenty * 12) * 1000);

            // For 1 to 10 Floor
            var oneToTen = (floor - twentyOneToInfinity - elevenToTwenty);
            totalBrick = totalBrick + ((oneToTen * 15) * 1000);

        } else if (floor > 10) {
            // For 11 to 20 Floor
            var elevenToTwenty = floor - 10;
            totalBrick = totalBrick + ((elevenToTwenty * 12) * 1000);

            // For 1 to 10 Floor
            var oneToTen = floor - elevenToTwenty;
            totalBrick = totalBrick + ((oneToTen * 15) * 1000);

        } else {
            // For 1 to 10 Floor
            totalBrick = totalBrick + ((floor * 15) * 1000);
        };

        return totalBrick;
    };
};

// Tiny Friend
function tinyFriend(array) {
    if (array.length === 0) {
        return "Wrong Input";
    } else {
        var tinyName = array[0];

        for (var i = 0; i < array.length; i++) {
            if (array[i].length < tinyName.length && array[i] !== "" && array[i] !== " " && isNaN(array[i])) {
                tinyName = array[i];
            };
        };
        return tinyName;
    };
};



