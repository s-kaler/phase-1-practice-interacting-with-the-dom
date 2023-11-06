document.addEventListener('DOMContentLoaded',() => {
    let pauseButton = document.getElementById('pause');
    let minusButton = document.getElementById('minus');
    let plusButton = document.getElementById('plus');
    let heartButton = document.getElementById('heart');

    let counterText = document.getElementById('counter');
    let counter = 0;
    
    let likeArray = [0];
    let listCollection = [];
    let interval = setInterval(() => {
        counter += 1;
        counterText.innerText = counter;
        likeArray.push(0);
        //console.log(likeArray);
        let newLi = document.createElement('li');
        newLi['data-num'] = counter;
        listCollection.push(newLi);
    }, 1000);

    

    //pause timer
    pauseButton.addEventListener('click', () => {
        //pause
        if(pauseButton.innerText === 'pause'){
            clearInterval(interval);
            pauseButton.innerText = 'resume';
            minusButton.disabled = true;
            plusButton.disabled = true;
            heartButton.disabled = true;
        }
        //resume
        else if(pauseButton.innerText === 'resume'){
            interval = setInterval(() => {
                counter += 1;
                counterText.innerText = counter;
            }, 1000);
            pauseButton.innerText = 'pause';
            minusButton.disabled = false;
            plusButton.disabled = false;
            heartButton.disabled = false;
        }
    })
    //decrement counter
    minusButton.addEventListener('click', () => {
        if(minusButton.disabled === false){
            counter -= 1;
            counterText.innerText = counter;
        }
    })
    //increment counter
    plusButton.addEventListener('click', () => {
        if(plusButton.disabled === false){
            counter += 1;
            counterText.innerText = counter;
        }
    })
    
    //like counter
    let ul = document.querySelector('.likes');
    heartButton.addEventListener('click', () => {
    //console.log(ul);
    /*let likedNum = document.querySelector(`[data-num=${counter}]`);
    console.log(likedNum);
    if(likedNum === undefined){

    }
    */
    likeArray[counter] += 1;
    console.log(likeArray[counter])
    if(likeArray[counter] === 1){
        let newLi = document.createElement('li');
        newLi.dataset.num = counter;
        let newSpan = document.createElement('span');
        newLi.innerHTML = `${counter} has been liked ` + `<span>${counter}</span>` + ` time`;
        ul.appendChild(newLi);
        console.log(ul);
       }
    else if(likeArray[counter] > 1){
        let currentLi = ul.querySelector(`[data-num="${counter}"]`);
        currentLi.innerHTML = `${counter} has been liked ` + `<span>${likeArray[counter]}</span>` + ` times`
    }
        
    })
    
    let form = document.querySelector('#comment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let parent = e.target.parentNode;
        console.log(e.target.comment.value);
        let newComment = document.createElement('p');
        newComment.textContent = e.target.comment.value;
        parent.appendChild(newComment);
        form.reset(); 
    })
})
