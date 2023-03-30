const onClickAdd = () => {
  const inputText = document.getElementById("text-input").value;
  document.getElementById("text-input").value = "";

  // li要素の作成
  const li = document.createElement("li");
  li.className = "item";

  // p要素を作成し、li要素の子要素としてセット
  const p = document.createElement("p");
  p.innerText = inputText;
  li.appendChild(p);

  // DONEボタンを作成し、li要素の子要素としてセット
  const btnDone = document.createElement("button");
  btnDone.className = "btn-done btn btn-success";
  btnDone.innerText = 'DONE';
  li.appendChild(btnDone);

  // deleteボタンを作成し、li要素の子要素としてセット
  const btnDelete = document.createElement("button");
  btnDelete.className = "btn-delete btn btn-secondary";
  btnDelete.innerText = 'Delete';
  li.appendChild(btnDelete);

  // id="todo-field"にここで生成したliタグ要素を追加
  document.getElementById("todo-field").appendChild(li);
}

document.querySelector('#add-button').addEventListener("click", onClickAdd);



// const btnDeletes = document.querySelectorAll(".btn-delete");
// btnDeletes.forEach(btnDelete => btnDelete.addEventListener("click", () => {
//   console.log(btnDelete);
// }))

// // const onClickDelete = () => {
// //   console.log(btnDelete);
// //   const deleteTarget = btnDelete.parentNode;
// //   document.getElementById("todo-field").removeChild(deleteTarget);
// // }
