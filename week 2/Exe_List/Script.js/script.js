// selecionar os elementos
const list = document.getElementById("inputList");
const inputElement = document.getElementById("inputValue");
const btn = document.getElementById("btnInput");
const task = document.getElementById("taskList");

// btn.addEventListener( 'click', ()=> {})

btn.addEventListener("click", () => {
  // extrair o valor do nosso input

  const inputValue = inputElement.value;

  console.log(inputValue);

  // criar um elemento
  const li = ` <div class="d-flex align-items-center list-unstyled list-group-item list-group-item-action">
   <input id="inputList" type="checkbox" class="form-check-input me-1" type="checkbox"/>
   <li> ${inputValue} </li>
   </div>`;

  //  como funciona a insertAdjacentHTML descrever!
  task.insertAdjacentHTML("afterbegin", li);
  inputElement = " ";
});

document.addEventListener("click", (event) => {
  //console.log("EVENT", event);

  if (event.target.type === "checkbox") {
    const li = event.target.parentElement;
    console.log("LI =>", li);

    const ul = li.parentElement;
    console.log("UL =>", ul);

    ul.removeChild(li);

    li.classList.add("disable", "text-decoration-line-through");

    const lastItem = ul.lastElementChild;
    console.log("lastItem", lastItem)

    lastItem.insertAdjacentElement("afterend", li);
  }
});
