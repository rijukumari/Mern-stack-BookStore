import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto mb:px-20 px-4 ">
        <div className="  text-center mt-9">
          <h1 className="text-2xl font-semibold md:text-4xl mt-56">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>

          <p className=" dark:bg-slate-900 dark:text-white mt-12 ">
            In a town where everyone has something to hide, one woman holds the
            key to unraveling a decades-old mystery. The Silent Witness is a
            gripping psychological thriller that will keep you turning pages
            late into the night. When investigative journalist Meera Shah
            returns to her hometown after her estranged father’s sudden death,
            she intends to stay only long enough to settle his affairs. But when
            she discovers a series of cryptic journals hidden in his attic,
            Meera is pulled into a chilling mystery that dates back to a missing
            persons case from twenty-five years ago — a case that was never
            solved and quietly buried by local authorities.
          </p>
          <Link to="/">
            <button className="btn bg-pink-500 text-white mt-6 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-12">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
