let startbtn = document.getElementById("startbtn");
let pvpbtn = document.getElementById("pvp")
document.getElementById("box").style.display = "none";
startbtn.addEventListener("click", xmainfn);
pvpbtn.addEventListener("click", pvpxmainfn)



function xmainfn(){
    document.getElementById("won").innerHTML = "";
    startbtn.style.display = "none";
    pvpbtn.style.display = "none";
    document.getElementById("box").style.display = "grid";
    let winer = '';
    let winst = false;
    const para = document.getElementById("status");
    const box = document.querySelectorAll(".ticbox");
    let nbox = [];
    let ibox = ["box0","box1","box2","box3","box4","box5","box6","box7","box8"];
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let rtxt = 0; rtxt< box.length ; rtxt++){
        box[rtxt].querySelector("span").innerHTML = "";
    };
    document.getElementById("status").innerHTML = "Game In Progress!!!";
    
    for (let i = 0 ; i < box.length ; i++){
        box[i].onclick = function(){
            mainfn(this, winer, winst, para, box, nbox, ibox, win);
        }; 
    };
};


function mainfn(element, winer, winst, para, box, nbox, ibox, win ){
    let txt = [];
    let box1 = document.querySelectorAll(".ticbox");
    ibox.splice(ibox.indexOf(element.id), 1);
    let a = document.getElementById(element.id);
    a.querySelector("span").innerHTML = "X";

    for (let m = 0 ; m < box.length ; m ++){
        txt.push(box1[m].querySelector("span").textContent);       
    }

    for (let lx = 0 ; lx < win.length ; lx++){

        if (txt[win[lx][0]] != '' && txt[win[lx][1]] != '' && txt[win[lx][2]] != ''){
            winst = txt[win[lx][0]] == txt[win[lx][1]] && txt[win[lx][1]] == txt[win[lx][2]];
            winer = txt[win[lx][0]]
        };
        
        if (winst == true){
            document.getElementById("won").innerHTML = winer + " won the game ";
            for (let vnb = 0; vnb < box.length; vnb++ ){
                box[vnb].onclick = null;
            };
            document.getElementById("startbtn").style.display = "inline";
            document.getElementById("pvp").style.display = "inline"
            document.getElementById("status").innerHTML = "Start The Game!!!";
            return 
        };
        
    };
    
    for (let n = 0; n <box.length ; n++){
        box[n].onclick = null;
    };

    if (ibox.length === 0){
        document.getElementById("won").innerHTML = "Match was a deaw!!";
        document.getElementById("startbtn").style.display = "inline";
        document.getElementById("pvp").style.display = "inline"
        document.getElementById("status").innerHTML = "Start The Game!!!";
        return "Draw"
    } else {
        let r = Math.floor(Math.random() * ((ibox.length - 1) + 1));
        let x = document.getElementById(ibox[r]);
        x.querySelector("span").innerHTML = "O";
        ibox.splice(r,1);
        box1 = document.querySelectorAll(".ticbox");
        txt = [];
        for (let m = 0 ; m < box.length ; m ++){
        txt.push(box1[m].querySelector("span").textContent);       
    }

        for (let lx = 0 ; lx < win.length ; lx++){
        
            if (txt[win[lx][0]] != '' && txt[win[lx][1]] != '' && txt[win[lx][2]] != ''){
                winst = txt[win[lx][0]] == txt[win[lx][1]] && txt[win[lx][1]] == txt[win[lx][2]];
                winer = txt[win[lx][0]];
            };
            
            if (winst == true){
                document.getElementById("won").innerHTML = winer + " won the game ";
                for (let vnb = 0; vnb < box.length; vnb++ ){
                    box[vnb].onclick = null;
                };
                document.getElementById("startbtn").style.display = "inline";
                document.getElementById("pvp").style.display = "inline"
                document.getElementById("status").innerHTML = "Start The Game!!!";
                return 
            };
            
        };

        for (let z = 0; z< ibox.length ; z++){
            document.getElementById(ibox[z]).onclick = function(){
                mainfn(this, winer, winst, para, box, nbox, ibox, win );
            };
        };

    }            
};




function pvpxmainfn(){
    document.getElementById("won").innerHTML = "";
    startbtn.style.display = "none";
    pvpbtn.style.display = "none";
    document.getElementById("box").style.display = "grid";
    let winer = '';
    let winst = false;
    const para = document.getElementById("status");
    const box = document.querySelectorAll(".ticbox");
    let nbox = [];
    let ibox = ["box0","box1","box2","box3","box4","box5","box6","box7","box8"];
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let rtxt = 0; rtxt< box.length ; rtxt++){
        box[rtxt].querySelector("span").innerHTML = "";
    };
    document.getElementById("status").innerHTML = "Game In Progress!!!";
    
    for (let i = 0 ; i < box.length ; i++){
        box[i].onclick = function(){
            pvpmainfn(this, winer, winst, para, box, nbox, ibox, win);
        }; 
    };
};


function pvpmainfn(element, winer, winst, para, box, nbox, ibox, win ){

    let a = document.getElementById(element.id);
    a.onclick = null;

    if (ibox.length === 0){
        document.getElementById("won").innerHTML = "Match was a deaw!!";
        document.getElementById("startbtn").style.display = "inline";
        document.getElementById("pvp").style.display = "inline"
        document.getElementById("status").innerHTML = "Start The Game!!!";
        return 
    }

    else if (ibox.length % 2 === 0 ){
        a.querySelector("span").innerHTML = "O";
    }
    else {
        a.querySelector("span").innerHTML = "X";
    };
    
    let txt = [];
    let box1 = document.querySelectorAll(".ticbox");

    for (let m = 0 ; m < box.length ; m ++){
        txt.push(box1[m].querySelector("span").textContent);       
    }

    for (let lx = 0 ; lx < win.length ; lx++){

        if (txt[win[lx][0]] != '' && txt[win[lx][1]] != '' && txt[win[lx][2]] != ''){
            winst = txt[win[lx][0]] == txt[win[lx][1]] && txt[win[lx][1]] == txt[win[lx][2]];
            winer = txt[win[lx][0]]
        };
        
        if (winst === true){
            document.getElementById("won").innerHTML = winer + " won the game ";
            for (let vnb = 0; vnb < box.length; vnb++ ){
                box[vnb].onclick = null;
            };
            document.getElementById("startbtn").style.display = "inline";
            document.getElementById("pvp").style.display = "inline"
            document.getElementById("status").innerHTML = "Start The Game!!!";
            return 
        };
    };
    ibox.splice(ibox.indexOf(element.id), 1);
    if (ibox.length === 0){
        document.getElementById("won").innerHTML = "Match was a deaw!!";
        document.getElementById("startbtn").style.display = "inline";
        document.getElementById("pvp").style.display = "inline"
        document.getElementById("status").innerHTML = "Start The Game!!!";
        return 
    }

};