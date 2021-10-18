// Tasks: 

// - write the JS so that the word count appears on the screen
// - update the count as the user types



var textarea = document.querySelector('textarea');
var p = document.querySelector('p');
var arr = []
let countEl= 0


textarea.addEventListener('input', function (event) {
    arr = event.target.value.split(" ").filter((w) => w.length > 0);
 
    countEl=arr.length
    p.innerText=`Word count: ${countEl}, Longest word: ${calcLongestWord()}`
        
    console.log(`${arr}`)

  

});

function calcLongestWord(){
    let wordMap = arr.map(w => w.length)
    let longestWord = ""
    
    console.log(`Word Map Count: ${wordMap}`)
    // if(arr.length <=1){
    //     longestWord = arr[0]
    
    // }else{
    //     for(i=1;i<wordMap.length;i++){
    //         if(wordMap[i]>wordMap[i-1]){
    //             longestWord = arr[i]
    //         }else if(wordMap[i]<wordMap[i-1]){
    //         longestWord = arr[i-1]
    //         }else if(wordMap[i]==wordMap[i-1]){
    //         longestWord = arr[i-1]
    //         }
    //     console.log(`Longest Word: ${longestWord}`)
    //     }
    // }
    
        for(i=1;i<wordMap.length;i++){
            if(wordMap[i]>wordMap[i-1]){
                longestWord = arr[i]
            }else if(wordMap[i]<wordMap[i-1]){
            longestWord = arr[i-1]
            }else if(wordMap[i]==wordMap[i-1]){
            longestWord = arr[i-1]
            }
        console.log(`Longest Word: ${longestWord}`)
        }
    
  return longestWord
}