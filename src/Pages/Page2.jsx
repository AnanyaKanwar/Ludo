import React, { useEffect, useState } from "react";
import Boxes from "../components/Boxes";
import Button from "../components/Button";
import Cube1 from "../../public/cube1.png";
import Cube2 from "../../public/dice_2.png";
import Cube3 from "../../public/dice_3.png";
import Cube4 from "../../public/dice_4.png";
import Cube5 from "../../public/dice_5.png";
import Cube6 from "../../public/dice_6.png";
import Rules from "../../public/Frame 17.png";

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const cubeimg = [Cube1, Cube2, Cube3, Cube4, Cube4, Cube5, Cube6];
  const [cube, setcube] = useState(Cube1);
  const [rule, setRule] = useState(false);
  const [selectNum, setselectNum] = useState(-1);
  const [score, setscore] = useState(0);

  useEffect(() => {
    let no = Math.floor(Math.random() * 6);
    setcube(cubeimg[no]);
    if (selectNum == no) {
      setscore(score + no + 1);
    } else {
      if (score >= 2) {
        setscore(score - 2);
      } else {
        return;
      }
    }
  }, [selectNum]);

  return (
    <div className=" h-screen w-full ">
      <div className=" h-[20%] w-full flex justify-around">
        <div className=" h-full w-[10%] flex flex-col items-center justify-center">
          <p className=" text-7xl font-semibold">{score}</p>
          <p className=" text-2xl font-medium">Total Score</p>
        </div>
        <div className=" flex items-end flex-col w-[40%] h-full ">
          <div className=" h-full flex gap-2 justify-end items-center">
            {arr.map((value, index) => (
              <Boxes
                colour={
                  selectNum == value
                    ? "bg-black border-white text-white"
                    : "bg-white border-black"
                }
                clickhandler={() => setselectNum(value)}
                num={value}
                key={index}
              />
            ))}
          </div>

          <p className=" text-xl font-bold">Select Number</p>
        </div>
      </div>

      <div className=" w-full flex justify-center items-center flex-col gap-4">
        <img src={cube} alt="" />
        <p className="text-2xl">Click on Dice to roll</p>
        <Button clr="white" name=" Reset Score" onclick={()=>(setscore(0))} />
        <Button name="Show Rules" onclick={() => setRule(!rule)} />
        <img
          src={Rules}
          className={` ${rule ? " block " : "hidden"} my-10`}
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
