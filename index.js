function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
    let rankedList = document.querySelectorAll('.ranked-list')
    for(let i = 0; i < rankedList.length; i++) {
        let listChildren = rankedList[i].children

        for(let j = 0; j < listChildren.length; j++) {
            listChildren[j].innerHTML = parseInt(listChildren[j].innerHTML) + n;
        }
    }
}