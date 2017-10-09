/**
 * Created by Enter on 2017-10-09.
 */
var arr = [1,3,4,5,3,4,5,7,8,6,4,8,9,0];

function removeArr_02(arr){
    var arr = arr;
    var brr = [];
    var i = 0;
    while(i<arr.length){
        if(brr.indexOf(arr[i]) == -1){
            brr.push(arr[i]);
        }
        i++;
    }
    return brr;
}
removeArr_02(arr);