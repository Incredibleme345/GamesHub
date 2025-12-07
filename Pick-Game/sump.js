let cellNumberIndex;
let imagesListIndex;
let displayImage;
let checkWinner = [];
let doblePress = [];

let last = doblePress.length;
let before = doblePress.length;
let imageList = ['😐','👍','🤷‍♀️','😎','😁','😭','🤦‍♀️','👏'];
let newImagesList = [...imageList, ...imageList]
newImagesList.sort(() => Math.random() - 0.5)
let count = 0;
console.log(newImagesList)

function choosed(cellId) {
    const cell = document.getElementById(cellId)

    cellNumberIndex = (Number(cellId));
    console.log(cellNumberIndex)
    for (let i = 0; i < newImagesList.length; i++) {
        const value = newImagesList[i];
    }
    displayImage = newImagesList[cellNumberIndex];
    console.log(newImagesList)
    document.getElementById(cellNumberIndex).innerHTML = `${displayImage}`;
    console.log(displayImage)
    checkWinner.push(displayImage)

    console.log(checkWinner)
    doblePress.push(cellNumberIndex);
    if (doblePress[0] === doblePress[1]) {
        console.log('go sleep'); 

        if (doblePress.length < 2) {
            if(last === before) {
                console.log('nice')
            }
        }
        doblePress = [];
        document.getElementById('alertmassege').innerHTML = 'click other image';
    } else {
        if (checkWinner.length == 2) {
            if(checkWinner[0] == checkWinner[1]) {
                console.log('hello')
            } 
        } else {
            if (checkWinner.length == 0 || checkWinner.length == 1 || checkWinner.length < 2)
            checkWinner = []
        };
    }
    doblePress.forEach(() => {
        
    })
    console.log(doblePress)
    console.log(last)
    console.log(before)
    
}
choosed(cellId)


let imageList = ['😐', '👍', '🤷‍♀️', '😎', '😁', '😭', '🤦‍♀️', '👏'];
let cellIdIndex;
let displayImage;
let comperListOfValues = [];
let clickIndex = [];
let winedFleaped = [];
let listOfNUmberOfBoxes = [];
let removedImages = [];
let indexOfCommonImages = [];

// creating a rondom images for the boxes
let newImageList = [...imageList, ...imageList];
newImageList.sort(() => Math.random() - 0.5);
console.log(`dobled image list: ${newImageList}`);

// makeing a list that tha have 16 values on it
for (let i = 1; i <= 16; i++) {
    1
    listOfNUmberOfBoxes.push(i)

}
let cell;
// funcrion that run when you click a box
function choosed(cellId) {
    //Getting the values for the clicked boxes on thew page
    cell = document.getElementById(cellId)
    cellIdIndex = (Number(cellId));
    console.log(`cell id: ${cellIdIndex}`);
    displayImage = newImageList[cellIdIndex];
    document.getElementById(cellIdIndex).innerHTML = `${displayImage}`

    // Making llist of the images that are displayed on the screen
    comperListOfValues.push(displayImage);

    //Making a list of the index of the pressed boxes to clickedindex
    clickIndex.push(cellIdIndex)
    console.log(`celll index ${clickIndex}`)

    checkIfDobleClicked();
    comperingImages();
    return cell;
}

function checkIfDobleClicked() {
    // Getting last 2 values of the clicked index on the boxes
    let lastIndex = clickIndex[clickIndex.length - 1];
    let previasIndex = clickIndex[clickIndex.length - 2];

    // Compering the if the privias value is the same the last value
    if (previasIndex == lastIndex) {
        console.log('you have dobled clicked the same box');

        //Remove the last value of the list if you have clicked
        comperListOfValues.splice(comperListOfValues.length - 1);
    }

}



function comperingImages(cellIdIndex) {
    if (cellIdIndex = 2) {
        if (comperListOfValues.length % 2 === 0) {
            let lastImage = comperListOfValues[comperListOfValues.length - 1];
            let previasLastImage = comperListOfValues[comperListOfValues.length - 2];

            // Compere if the last image is the same as before.
            // If then the are the same
            if (previasLastImage === lastImage) {
                console.log('both of the image are the same')

                // Append the list to a new list 
                // To remove the values that are not same
                let previasvalueIndex = clickIndex[clickIndex.length - 1];
                let lastValueIndex = clickIndex[clickIndex.length - 2];

                // Put the common values on list
                indexOfCommonImages.push(previasvalueIndex, lastValueIndex)
            } else {
                clickIndex.forEach((valuesOfIndex) => {
                    console.log(valuesOfIndex);
                    checkUniqueValues();
                    //document.getElementById(valuesOfIndex).innerHTML = ''; 
                })
            }
        }
    }
}
function checkUniqueValues() {
    listOfNUmberOfBoxes;
    indexOfCommonImages;
    console.log(indexOfCommonImages);

    // Finding a common value between 2 list
    const commonValues = listOfNUmberOfBoxes.filter(value => indexOfCommonImages.includes(value));
    // checking if the common value is present on 'listOfNumberOfBoxes' and 'indexOfCommonImages'
    let uniqueValueList1 = listOfNUmberOfBoxes.filter(value => !commonValues.includes(value));
    let uniqueValueList2 = indexOfCommonImages.filter(value => !commonValues.includes(value));
    // Combing thise two list to a single list
    let removeImgesList = [...uniqueValueList1, ...uniqueValueList2];
    console.log('remove this list', removeImgesList)

    // printing every value of the list.That is common on both of the list
    removeImgesList.forEach((value) => {
        // remove value that is don't mach or not equal string
        let codeEnable = false;
        let counter = 0;
        while (!codeEnable) {
            document.body.style.pointerEvents = 'none';
            counter++;
            if (counter >= 1) {
                function enableCode() {

                    console.log('run the code')
                    document.getElementById(value).innerHTML = '';
                    codeEnable = true;
                }
                setTimeout(enableCode, 2000)
            }
        }


        //document.getElementById(value).innerHTML = '';  


    })


}






































/*
const imageList = [
    {id: '😐'},
    {id: '👍'},
    {id: '🤷‍♀️'},
    {id: '😎'},
    {id: '😁'},
    {id: '😭'},
    {id: '🤦‍♀️'},
    {id: '👏'},
]
let newImagesList = [...imageList, ...imageList]
console.log(newImagesList)
*/