        const notesContainer = document.querySelector(".notes-container");
        
        let notes = document.querySelectorAll(".input-box");

        function getData(){
            notesContainer.innerHTML = localStorage.getItem("notes")
        }
        getData()

        function saveData(){
            localStorage.setItem("notes", notesContainer.innerHTML)
        }
        // localStorage.clear()
        console.log(localStorage)

        function createBtn(){
            let inputBox = document.createElement('p');
            let img  = document.createElement("img");
            inputBox.className = "input-box"
            inputBox.setAttribute("contenteditable", "true");
            img.src = "images/delete.png";
            notesContainer.appendChild(inputBox).appendChild(img);
            saveData()
        }

        notesContainer.addEventListener("click", (e) => {
            if(e.target.tagName === "IMG"){
                e.target.parentElement.remove();
                saveData()
            }
            else if(e.target.tagName === "P"){
                notes = document.querySelectorAll(".input-box")
                notes.forEach(nt => {
                    nt.onkeyup = function(){
                        saveData();
                    }
                })
            }
        })

        
        document.addEventListener("keydown", event => {
            if(event.key === "Enter"){
                document.execCommand("insertLineBreak");
                event.preventDefault();
            }
        })