var ratingButton = document.querySelector(".rating");
var ratingBtns = ratingButton.children;
var l = ratingBtns.length;

var no = -1;


for(i = 0; i < l; i++){
    ratingButton.children[i].addEventListener("click", ratingToggle);
}

var submit = document.querySelector(".submit");
submit.addEventListener("click" , function(){
    console.log("submit clicked");
    console.log(no);

    if(no > 0){
        var message = "You selected " + no + " out of 5";
        document.querySelector(".ratingGiven").innerText = message;

        document.querySelector(".ratingContainer").classList.add("displayNone");
        document.querySelector(".thankuContainer").classList.remove("displayNone");

        


    }else{
        window.alert("Please select a rating!");
    }

});

function ratingToggle(event){
    console.log(event.target);
    var btn = event.target.classList;
    console.log(btn);
    
    btn.toggle("unclicked");
    btn.toggle("clicked");

    no = Number(event.target.innerText);
    console.log(no);
    

    for(var i = 1; i <= 5; i++){
        if(i != no){
            var tempBtn = ratingBtns[i - 1];
            console.log(tempBtn);
            if(tempBtn.classList.contains("clicked")){
                tempBtn.classList.remove("clicked");
                tempBtn.classList.add("unclicked");
            }
        }

    }

}

