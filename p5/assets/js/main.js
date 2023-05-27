//Results appear only when user clicks on Get Results Button
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("calculate").onclick = resultsOutputted;
});


//Function where everything happens
function resultsOutputted()
{
  //Clearing old data
  document.getElementById("max_result").innerHTML="";
  document.getElementById("min_result").innerHTML="";
  document.getElementById("avg_result").innerHTML="";
  document.getElementById("median_result").innerHTML="";
  document.getElementById("range_result").innerHTML="";

  //Get Numbers User Input
  var firstNumTemp =  parseInt(document.getElementById("num1").value);
  var secondNumTemp =  parseInt(document.getElementById("num2").value);
  var thirdNumTemp =  parseInt(document.getElementById("num3").value);  

  //error checking
  if (Number.isNaN(firstNumTemp) || Number.isNaN(secondNumTemp) || Number.isNaN(thirdNumTemp) ){
    console.log("Not a number");
    document.getElementById("results").innerHTML="Please Only Input Numbers";
  }
  else{

    console.log("All numbers")
    document.getElementById("results").innerHTML="Results";

    //Initializing the output values to zero
    var max, min, mean, median, range = 0;

    //Organize Numbers
    var nums = [firstNumTemp, secondNumTemp, thirdNumTemp];
    nums.sort(function(a, b){return a - b});

    firstNum = nums[0];
    secondNum = nums[1];
    thirdNum = nums[2];

    // Min Max
    min = firstNum;
    max = thirdNum;

    //Median
    median = secondNum;

    //Find Mean(avg)
    var sum = 0;
    var totalDigits = 3;
    sum = firstNum + secondNum + thirdNum;
    meanTemp = (sum/totalDigits);
    mean = meanTemp.toFixed(2);   

    //Find Range  
    range = thirdNum - firstNum;

    //--------------------------------------------------------------
    //                          Output Values
    //--------------------------------------------------------------

    //MAX
    var maxMax = document.createElement('p');
    maxMax.innerHTML =  max;
    document.getElementById("max_result").appendChild(maxMax);


    //MIN
    var minMin = document.createElement('p');
    minMin.innerHTML = min;
    document.getElementById("min_result").appendChild(minMin);

    //MEAN(AVG)
    var meanMean = document.createElement('p');
    meanMean.innerHTML = mean;
    document.getElementById("avg_result").appendChild(meanMean);

    //MEDIAN
    var medianMedian = document.createElement('p');
    medianMedian.innerHTML = median;
    document.getElementById("median_result").appendChild(medianMedian);

    //RANGE
    var rangeRange = document.createElement('p');
    rangeRange.innerHTML = range;
    document.getElementById("range_result").appendChild(rangeRange);
  }  

}

