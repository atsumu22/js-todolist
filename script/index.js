const onClickAdd = () => {
  const inputText = document.getElementById("text-input").value;
  document.getElementById("text-input").value = "";
  alert(inputText);
}

document.querySelector('#add-button').addEventListener("click", onClickAdd);
