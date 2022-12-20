import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Card from "../Components/Card";
import Modal from "../Components/Modal";
import Home from "../Components/Home";
import { useState } from "react";
import DataContext from "../Context/DataContext";

let valtext = {
  category: {
    quality: "good",
  },
  _id: "639aad1d9512feab115031c6",
  title: "dalsss",
  price: 729,
  description:
    "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
  img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
  userId: "4",
  __v: 0,
};

let data = [
  {
    category: {
      quality: "good",
    },
    _id: "639aad1d9512feab115031c6",
    title: "dalsss",
    price: 729,
    description:
      "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
    img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
    userId: "4",
    __v: 0,
  },
  {
    category: {
      quality: "good",
    },
    _id: "639aad1d9512feab115031c7",
    title: "dalsss",
    price: 729,
    description:
      "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
    img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
    userId: "4",
    __v: 0,
  },
  {
    category: {
      quality: "good",
    },
    _id: "639aad1d9512feab115031c8",
    title: "dalsss",
    price: 729,
    description:
      "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
    img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
    userId: "4",
    __v: 0,
  },
];

test("SEARCH", async () => {
  render(
    <DataContext>
      <Router>
        <Home data={data} />
      </Router>
    </DataContext>
  );
});

// function toJson(component) {
//   console.log(component);
// }

// describe("Accordion test", () => {
//
// });

//   render(<Modal modalval={val} />);
//   let textinput = screen.getByPlaceholderText("title");
//   userEvent.type(textinput, "sahibaba");
//   expect(textinput.value).toBe("sahibaba");
// });

test("SEARCH", async () => {
  render(
    <DataContext>
      <Router>
        <Home data={data} />
      </Router>
    </DataContext>
  );
  expect(screen.getAllByRole("article").length).toBe(3);
  const clickbutton = screen.getAllByText("click");
  // console.log();
  fireEvent.click(clickbutton[0]);
  // userEvent.click(clickbutton[0]);
  // let userclick = await screen.getAllByText("Edit");
  // console.log(userclick);
  // userEvent.click(userclick[0]);
  // let textinput = screen.getByPlaceholderText("title");

  // cosnt edit = screen
  // console.log(Deletelement);
});

test("modal", async () => {
  // const [modelVal, setmodalval] = useState(valtext);
  render(<Modal modalval={valtext} />);
  let val = screen.getByPlaceholderText("title");
  fireEvent.change(val, { target: { value: "24/05/2020" } });
  expect(val.value).toBe("24/05/2020");
});

// userEvent.click(Deletelement);

// test("Edit items", () => {
//   // const [edit, setedit] = useState(val);
//   // function handlleChange(e) {
//   //   setedit({
//   //     ...edit,
//   //     [e.target.name]: e.target.value,
//   //   });
//   // }
