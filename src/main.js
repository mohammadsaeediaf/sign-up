const root = document.getElementById("root");

// Create Element with attributes link class,src,href, and you can add text to p,h1.. tags
function createElement(tag, attributes = {}, text) {
  const element = document.createElement(tag);

  for (key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  text ? (element.textContent = text) : "";
  return element;
}

const container = createElement("div", { class: "container" });

// sign up section
const sign_up = createElement("div", { class: "sign-up" });
const sign__up__image = createElement("div", { class: "sign-up--image" });
const welcome__text = createElement(
  "p",
  { class: "welcome-text" },
  "Welcome, We are glad to see you again!"
);

const hero__image = createElement("img", {
  src: "src/hero.png",
  alt: "women-image",
});

// sign up form
const sign_up__form = createElement("div", { class: "sign-up--form" });
const form__title = createElement("h2", { class: "form--title" }, "Sign Up");
const sign_up__input = createElement("div", { class: "sign-up--input" });

const label__name = createElement("label", {}, "First Name");
const btn__name = createElement("input", {
  class: "form--btn",
  id: "btn--name",
  type: "text",
  placeholder: "Enter Your First Name",
});

const label__last_name = createElement("label", {}, "Last Name");
const btn__last_name = createElement("input", {
  class: "form--btn",
  id: "btn--last-name",
  type: "text",
  placeholder: "Enter Your Last Name",
});

const label__email = createElement("label", {}, "Email Address");
const btn__email = createElement("input", {
  class: "form--btn",
  id: "btn--email",
  type: "email",
  placeholder: "Enter Your Last Name",
});

const label__password = createElement("label", {}, "Password");
const btn__password = createElement("input", {
  class: "form--btn",
  id: "btn--password",
  type: "password",
  placeholder: "Re Enter Password",
});
const already__account = createElement("div", { class: "already-account" });
const text_have__acount = createElement("p", {}, "Already have an account?");
const login__link = createElement(
  "a",
  { href: "#", class: "form--link" },
  "Log In"
);
const link__login = createElement(
  "a",
  { href: "#", class: "form--link" },
  "Log in"
);

const form__submit = createElement(
  "button",
  { class: "form--button" },
  "Sign Up"
);

// Add element to DOM

container.append(sign_up);

sign_up.append(sign__up__image, sign_up__form);
sign__up__image.append(hero__image, welcome__text);

// sign up form
sign_up__form.append(form__title, sign_up__input);
sign_up__input.append(label__name, btn__name);
sign_up__input.append(label__last_name, btn__last_name);
sign_up__input.append(label__email, btn__email);
sign_up__input.append(
  label__password,
  btn__password,
  already__account,
  form__submit
);

already__account.append(text_have__acount, link__login);

root.appendChild(container);

// Send Information to API

form__submit.addEventListener("click", fetchData);

async function fetchData() {
  try {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: btn__name.value,
        lastName: btn__last_name.value,
        password: btn__password.value,
        email: btn__email.value,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch {
    (err) => console.log("SomeThing went Wrong!");
  }
}
