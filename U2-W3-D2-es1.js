const localStorageKey = "Username-memory";

const textAreaReference = document.getElementById("InputUserName");

const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");

const salva = () => {
  const content = textAreaReference.value;
  localStorage.setItem(localStorageKey, content);
  alert("Username salvato!");
  const memory = localStorage.getItem(localStorageKey); // può essere una stringa o null (se non abbiamo salvato niente preced.)
  if (memory) {
    // avevamo salvato un valore nel localStorage e l'abbiamo recuperato! rimettiamo il valore di "memory" nella textarea
    textAreaReference.value = memory;
  } else {
    // non è stato salvato niente precedentemente nella chiave 'notepad-memory', informo l'utente!
    alert("Username non presente!");
  }
};

const cancella = () => {
  if (window.confirm("ATTENZIONE! Cancellare lo Username")) {
    textAreaReference.value = "";
    localStorage.removeItem(localStorageKey);
  }
};

saveButton.addEventListener("click", salva);
deleteButton.addEventListener("click", cancella);
