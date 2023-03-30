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
  // ボタンの機能も合わせて設定する
  const btnDone = document.createElement("button");
  btnDone.className = "btn-done btn btn-success";
  btnDone.innerText = 'DONE';
  btnDone.addEventListener("click", () => {
    const doneTarget = btnDone.parentNode;
    document.getElementById("todo-field").removeChild(doneTarget);
    const btnBack = document.createElement("button");
    btnBack.className = "btn btn-warning";
    btnBack.innerText = "Back to TODO";
    li.insertBefore(btnBack, btnDone);
    doneTarget.removeChild(btnDone);
    document.getElementById("completed-field").appendChild(doneTarget);
  });
  li.appendChild(btnDone);

  // deleteボタンを作成し、li要素の子要素としてセット
  // ボタンの機能も合わせて設定する
  const btnDelete = document.createElement("button");
  btnDelete.className = "btn-delete btn btn-secondary";
  btnDelete.innerText = 'Delete';
  btnDelete.addEventListener("click", () => {
    const deleteTarget = btnDelete.parentNode;
    const whichField = deleteTarget.parentNode;
    if (whichField.id === "todo-field") {
      document.getElementById("todo-field").removeChild(deleteTarget);
    } else {
      document.getElementById("completed-field").removeChild(deleteTarget);
    }
  });
  li.appendChild(btnDelete);





  // id="todo-field"にここで生成したliタグ要素を追加
  document.getElementById("todo-field").appendChild(li);
}

document.querySelector('#add-button').addEventListener("click", onClickAdd);
