const signupForm = document.getElementById("signup-form");

// listen the auth status changes then fetch data
auth.onAuthStateChanged((user) => {
  if (user) {
    setupUI(user);
    db.onSnapshot((snap) => renderUser(snap.docs));
  } else {
    setupUI();
    renderUser([]);
  }
});

// create new guide
const createGuideForm = document.getElementById("createguide-form");
createGuide.addEventListener("submit", (e) => {
  e.preventDefault();
  db.add({
    name: createGuideForm["create-guide-title"].value,
    city: createGuideForm["create-guide-content"].value,
  })
    .then(() => {
      const modal = document.getElementById("createGuide");
      var getModal = bootstrap.Modal.getInstance(modal);
      getModal.hide();
      createGuideForm.reset();
    })
    .catch((err) => console.log("Login sir, in order to create data!"));
});

// signup the user
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      const modal = document.getElementById("signUp");
      var getModal = bootstrap.Modal.getInstance(modal);
      getModal.hide();
      signupForm.reset();
    })
    .catch((err) => {
      console.log("error", err);
    });
});

// logout the user
const logOut = document.getElementById("log-out");
logOut.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});

// login the user
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      const modal = document.getElementById("login");
      var getModal = bootstrap.Modal.getInstance(modal);
      getModal.hide();
      loginForm.reset();
    })
    .catch("User unable to logged in");
});
