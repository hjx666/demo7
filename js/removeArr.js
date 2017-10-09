/**
 * Created by Enter on 2017-10-09.
 */
var arr = [1,3,4,5,3,4,5,7,8,6,4,8,9,0];

function removeArr(arr){
    var arr = arr;
    var brr = [];
    for(var i=0; i<arr.length; i++){
        if(brr.indexOf(arr[i]) == -1){
            brr.push(arr[i]);
        }
    }
    return brr;
}
removeArr(arr);