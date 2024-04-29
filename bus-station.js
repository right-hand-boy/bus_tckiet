"use strict";
let overlayer = document.querySelector(".overlayer");
let openReserve = document.querySelector(".to-reserve");
let openMain = document.querySelector(".main-page");
let navreserv = document.querySelector(".nav-reserve");
let navavali = document.querySelector(".nav-available");
let openInfo = document.querySelector(".user");
let openHome = document.querySelector(".home-page");
let openList = document.querySelector(".list");
let navinfo = document.querySelector(".nav-info");
const closeModal = document.querySelector(".close-modal ");
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".signup");
const openModal1 = document.querySelector(".login");
const closeModal2 = document.querySelector(".close-modal2");
const closeModal1 = document.querySelector(".close-modal1");
const listItem = document.querySelector(".movements-rows");
const modal1 = document.querySelector(".modal1");
let starts = document.querySelectorAll(".movements-from").textContent;
let destinies = document.querySelectorAll(".movements-from").textContent;
const header = document.querySelector("header");
const height = document.querySelector(".navi").getBoundingClientRect().height;
const passenger = [];
const users = [];
const user = function (name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.userName = this.name
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
};

const Passenger = function (
  name,
  start,
  destiny,
  seat,
  date,
  id,
  payment,
  fee,
  conCode
) {
  this.name = name;
  this.date = date;
  this.start = start;
  this.destiny = destiny;
  this.seat = seat;
  this.id = id;
  this.payment = payment;
  this.fee = fee;
  this.conifrmation = conCode;
};
const stickyNav = function (enteries) {
  const [entry] = enteries;
  if (!entry.isIntersecting)
    document.querySelector(".navi").classList.add("sticky");
  else document.querySelector(".navi").classList.remove("sticky");
};
const headObsever = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${height}px`,
});
headObsever.observe(header);
const capitalizer = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    name = namesUpper.join(" ");
  }
  return name;
};
const reserve = function () {
  openReserve.classList.remove("hidden");
  navreserv.classList.remove("hidden");
  openHome.classList.add("hidden");
  openList.classList.add("hidden");
  navavali.classList.add("hidden");
  openMain.classList.add("hidden");
  document.querySelector(".menu-icon").style.opacity = "1";
  openInfo.classList.add("hidden");
  navinfo.classList.add("hidden");

  document.querySelector(".aboutt").classList.add("hidden");
};
const infoChecker = function () {
  let seatEl = Number(document.querySelector("#seat").textContent);
  let start = document.querySelector(".select-start").value;
  let destiny = document.querySelector(".select-destiny").value;
  let name = document.querySelector("#name").value;
  let id = document.querySelector("#id").value;
  let seat = document.querySelector("#seat").value;
  let date = document.querySelector("#date").value;
  if (seat < 1 || seat > 30 || !date || !name || !start || !destiny || !id) {
    if (!name) {
      document.querySelector(
        ".seat-number"
      ).textContent = `please enter your fullname`;
    } else if (!date) {
      document.querySelector(
        ".seat-number"
      ).textContent = `please enter the date`;
    } else if (!start) {
      document.querySelector(
        ".seat-number"
      ).textContent = `please enter your starting place`;
    } else if (!destiny) {
      document.querySelector(
        ".seat-number"
      ).textContent = `please enter your destination`;
    } else if (!id) {
      document.querySelector(
        ".seat-number"
      ).textContent = `please enter your identification card number`;
    } else if (seat < 1 || seat > 30) {
      document.querySelector(
        ".seat-number"
      ).textContent = `please enter a valid seat number`;
    }
  } else if (start === destiny) {
    document.querySelector(
      ".seat-number"
    ).textContent = `please enter prperly you have the same starting place and destination`;
  } else {
    const newDate = date.split("-").join("");
    for (let i = 0; passenger[i]; i++) {
      const newDATE = passenger[i].date.split("-").join("");

      if (
        passenger[i].seat == seat &&
        newDATE == newDate &&
        passenger[i].start == start &&
        passenger[i].destiny == destiny
      ) {
        document.querySelector(
          ".seat-number"
        ).textContent = `the seat is taken`;
        return;
      }
    }
    navinfo.classList.remove("hidden");
    openInfo.classList.remove("hidden");
    openMain.classList.add("hidden");
    openReserve.classList.add("hidden");
    document.querySelector(".seat-number").textContent = ``;
    name = capitalizer(name);
    document.querySelector(".passenger-name").textContent = name;
    document.querySelector(".user-date").textContent = date;
    document.querySelector(".user-seat").textContent = seat;
    document.querySelector(".user-start").textContent = start;
    document.querySelector(".user-destiny").textContent = destiny;
    document.querySelector(".user-id").textContent = id;
    let payment = Math.trunc(Math.random() * 10000000) + 121320;
    let fee = Math.trunc(Math.random() * 20000);
    let conCode = Math.trunc(Math.random() * 10000000) + 121320;
    document.querySelector(".user-payment-code").textContent = payment;
    document.querySelector(".user-fee").textContent = fee;
    document.querySelector(".user-conifermation").textContent = conCode;
    passenger.push(
      new Passenger(name, start, destiny, seat, date, id, payment, fee, conCode)
    );
    document.querySelector(".select-start").value = "";
    document.querySelector(".select-destiny").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#id").value = "";
    document.querySelector("#seat").value = "";
    document.querySelector("#date").value = "";
  }
};
const see = function () {
  let searchDestiny = document.querySelector("#select-resered-destiny").value;
  let searchStart = document.querySelector("#select-resered-start").value;
  if (searchDestiny === destinies && searchStart === starts) {
    this.classList.remove("hidden");
  }
};
const home = function () {
  document.querySelector(".aboutt").classList.add("hidden");
  openReserve.classList.add("hidden");
  navreserv.classList.add("hidden");
  openInfo.classList.add("hidden");
  navinfo.classList.add("hidden");
  openHome.classList.remove("hidden");
  modal.classList.add("hidden");
  modal1.classList.add("hidden");
  navavali.classList.add("hidden");
  document.querySelector(".list").classList.add("hidden");
};
const seaAvailaible = function () {
  openHome.classList.add("hidden");
  document.querySelector(".aboutt").classList.add("hidden");
  openMain.classList.add("hidden");
  openReserve.classList.add("hidden");
  openList.classList.remove("hidden");
  navavali.classList.remove("hidden");
  navreserv.classList.add("hidden");
  document.querySelector(".menu-icon").style.opacity = "1";
};
const about = function () {
  document.querySelector(".aboutt").classList.remove("hidden");
  openReserve.classList.add("hidden");
  navreserv.classList.add("hidden");
  openInfo.classList.add("hidden");
  navinfo.classList.add("hidden");
  modal.classList.add("hidden");
  modal1.classList.add("hidden");
  navavali.classList.add("hidden");
  document.querySelector(".list").classList.add("hidden");
  openHome.classList.add("hidden");

  openMain.classList.add("hidden");
  document.querySelector(".menu-icon").style.opacity = "1";
};
//navigation nar
document.querySelector(".nav-home").addEventListener("click", home);
document.querySelector(".nav-reserve").addEventListener("click", reserve);
document
  .querySelector(".see-available1")
  .addEventListener("click", seaAvailaible);
document.querySelector(".reserve1").addEventListener("click", reserve);
//main bar
document.querySelector(".menu-icon").addEventListener("click", function () {
  openMain.classList.remove("hidden");
  document.querySelector(".menu-icon").style.opacity = "0";
  modal.classList.add("hidden");
  modal1.classList.add("hidden");
});
document
  .querySelector(".see-available")
  .addEventListener("click", seaAvailaible);
document.querySelector(".reserve").addEventListener("click", reserve);
//btn
document.querySelector(".btn--ticket").addEventListener("click", infoChecker);
document.querySelector(".finish").addEventListener("click", home);
document.querySelector(".see").addEventListener("click", function (e) {
  e.preventDefault();
  const searchStart = document.querySelector("#select-reserved-start").value;
  const searchDestiny = document.querySelector("#select-resered-destiny").value;
  if (!searchDestiny || !searchStart) {
    return;
  } else {
    document
      .querySelectorAll(".movements-row")
      .forEach((t) => t.classList.add("hidden"));
    for (let i = 0; passenger[i]; i++) {
      if (
        passenger[i].start == searchStart &&
        passenger[i].destiny == searchDestiny
      ) {
        const html = `
            <div class="movements-row">
                <p>name:<span class="passenger-name">${passenger[i].name}</span></p>
                <p>from:<span class="movements-from">${passenger[i].start}</span></p>
                <p>to:<span class="movements-to"> ${passenger[i].destiny}</span></p>
                <p>date:<span class=" movements-date"> ${passenger[i].date}</span></p>
                <p>seat:<span class=" movements-seat"> ${passenger[i].seat}</span></p>
                <p>payment code:<span class=" movements-payment-code">MB${passenger[i].payment} </span></p>
            </div>`;
        listItem.insertAdjacentHTML("afterbegin", html);
      }
    }
  }
});
////////

// login and sign in
closeModal.addEventListener("click", function () {
  openMain.classList.add("hidden");
  document.querySelector(".menu-icon").style.opacity = "1";
});
openModal.addEventListener("click", function () {
  modal1.classList.add("hidden");
  modal.classList.remove("hidden");
  overlayer.classList.remove("hidden");
});

openModal1.addEventListener("click", function () {
  modal.classList.add("hidden");
  modal1.classList.remove("hidden");
  overlayer.classList.remove("hidden");
});
closeModal2.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlayer.classList.add("hidden");
});
closeModal1.addEventListener("click", function () {
  modal1.classList.add("hidden");
  overlayer.classList.add("hidden");
});
document.querySelector(".signin-btn").addEventListener("click", function (e) {
  let email = document.querySelector("#sign-email").value;
  let password = document.querySelector("#sign-password").value;
  let confirmPassword = document.querySelector("#confirm-password").value;
  let userName = document.querySelector("#full-name").value;
  if (!email || !password || !userName || !confirmPassword) {
    return;
  } else if (password !== confirmPassword)
    document.querySelector(".message-sig").textContent =
      "password do not match";
  else {
    users.push(new user(userName, password, email));
    overlayer.classList.add("hidden");
    modal.classList.add("hidden");
    modal1.classList.add("hidden");
    document.querySelector(".message-sig").textContent = "";
    document.querySelector(".primary").classList.add("hidden");
    document.querySelector(".sign-in").classList.remove("hidden");
    document.querySelector(".user-").textContent = `${userName.slice(" ")}`;
    document.querySelector(".user-name").textContent = `${
      users[users.findIndex((acc) => acc.name === userName)].userName
    }`;
  }
});
document.querySelector(".log-out").addEventListener("click", function (e) {
  document.querySelector(".primary").classList.remove("hidden");
  document.querySelector(".sign-in").classList.add("hidden");
});
document.querySelector(".login-btn").addEventListener("click", function (e) {
  const email = document.querySelector("#login-email").value.toLowerCase();
  const password = document.querySelector("#login-password").value;
  const index = users.findIndex((acc) => acc.email === email);
  if (index == -1) {
    document.querySelector(".message-log").textContent =
      "unregisterd email please sign up ";
  } else if (users[index].password !== password)
    document.querySelector(".message-log").textContent = "incorrect password";
  else {
    overlayer.classList.add("hidden");
    modal.classList.add("hidden");
    modal1.classList.add("hidden");
    document.querySelector(".message-log").textContent = "";
    document.querySelector(".primary").classList.add("hidden");
    document.querySelector(".sign-in").classList.remove("hidden");
    document.querySelector(".user-").textContent = `${users[index].name}`;
    document.querySelector(
      ".user-name"
    ).textContent = `${users[index].userName}`;
  }
});
///esc
document.querySelector(".home-page").addEventListener("click", function () {
  openMain.classList.add("hidden");
  document.querySelector(".menu-icon").style.opacity = "1";
  modal1.classList.add("hidden");
  modal.classList.add("hidden");
});
overlayer.addEventListener("click", function () {
  overlayer.classList.add("hidden");
  modal.classList.add("hidden");
  modal1.classList.add("hidden");
});
document.querySelector(".About").addEventListener("click", about);
document.querySelector(".nav-about").addEventListener("click", about);
document.querySelector(".to-reserve").addEventListener("click", function () {
  openMain.classList.add("hidden");
  document.querySelector(".menu-icon").style.opacity = "1";
  modal1.classList.add("hidden");
  modal.classList.add("hidden");
});
document.querySelector(".to-reserve").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    infoChecker();
  }
});
document.querySelector(".user").addEventListener("click", function () {
  openMain.classList.add("hidden");
  document.querySelector(".menu-icon").style.opacity = "1";
  modal1.classList.add("hidden");
  modal.classList.add("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    openMain.classList.add("hidden");
    document.querySelector(".menu-icon").style.opacity = "1";

    overlayer.classList.add("hidden");
    modal1.classList.add("hidden");
    openHome.classList.remove("blur");
    modal.classList.add("hidden");
    openHome.classList.remove("blur");
  }
});

// const sort = function () {
//     for (let i = 0; passenger[i]; i++) {

//         const n = passenger.length;
//         for (let i = 0; i < n - 1; i++)
//             for (let j = i + 1; j < n; j++) {
//                 if (passenger[i].date.split('-').join('') > passenger[j].date.split('-').join('')) {
//                     let temp = passenger[i];
//                     passenger[i] = passenger[j];
//                     passenger[j] = temp;
//                 }
//             }
//     }

// }

/////////////////////////////////////////
