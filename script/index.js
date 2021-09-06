const userList = document.getElementById("user-list");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.getElementById("account-details");

const addUserForm = document.getElementById("add-user-form");
const submit = document.getElementById("submit");
const fetchData = document.getElementById("fetch-data");

// hiding links
const setupUI = (user) => {
  if (user) {
    const html = `<div class="text-center mb-2">Logged in as <strong>${user.email}</strong></div>`;
    accountDetails.innerHTML = html;
    //   toggle UI links
    loggedInLinks.forEach((links) => (links.style.display = "block"));
    loggedOutLinks.forEach((links) => (links.style.display = "none"));
  } else {
    accountDetails.innerHTML = "";
    //   toggle UI links
    loggedInLinks.forEach((links) => (links.style.display = "none"));
    loggedOutLinks.forEach((links) => (links.style.display = "block"));
  }
};

const renderUser = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const item = doc.data();
      const li = `<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-start" data-id=${doc.id}>
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">${item.name}</div>
                    <span class="blockquote-footer">${item.city}</span>
                    </div>
                    <span class="badge bg-primary rounded-pill py-2 px-3" type="button">Pop</span>
                </li>`;
      html += li;
    });
    fetchData.innerHTML = html;
  } else {
    fetchData.innerHTML = `<h1 class="text-center mt-4 pt-4"><code>Login    </code> to see data</h1>`;
  }

  document.querySelectorAll(".badge").forEach((item) =>
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute("data-id");
      db.doc(id).delete();
    })
  );
};
