/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excusesElement = document.getElementById("excuses");

  const newExcuse = generateExcuse();

  excusesElement.textContent = newExcuse;
  console.log("Hello Rigo from the console!");
};
const generateExcuse = () => {
  const pronouns = ["A ", "The "];
  const subjects = [
    "cyclist ",
    "squirrel ",
    "cat ",
    "magician ",
    "teacher ",
    "neighbor ",
    "alien ",
    "cow ",
    "pirate ",
    "ghost ",
    "superhero ",
    "chef ",
    "vampire ",
    "robot ",
    "athlete "
  ];
  const actions = [
    "ate my ",
    "hid my ",
    "painted my ",
    "washed my ",
    "borrowed my ",
    "destroyed my ",
    "teleported my ",
    "flew away with my ",
    "cursed my ",
    "transformed into my ",
    "pranked my ",
    "summoned my ",
    "buried my ",
    "telekinesis on my ",
    "sang to my "
  ];
  const possessions = [
    "keys ",
    "laptop ",
    "umbrella ",
    "guitar ",
    "lunchbox ",
    "glasses ",
    "wallet ",
    "passport ",
    "coffee mug ",
    "skateboard ",
    "diary ",
    "camera ",
    "scarf ",
    "watch ",
    "snack "
  ];
  const wheres = [
    "on the roof.",
    "at the beach.",
    "in the forest.",
    "at the movie theater.",
    "at the gym.",
    "under the bed.",
    "at the library.",
    "on a rollercoaster.",
    "in the mountains.",
    "at the zoo.",
    "in the swimming pool.",
    "at the concert.",
    "in the spaceship.",
    "at the amusement park.",
    "in the parallel universe."
  ];

  const pronounIndex = Math.floor(Math.random() * pronouns.length);
  const subjectIndex = Math.floor(Math.random() * subjects.length);
  const actionIndex = Math.floor(Math.random() * actions.length);
  const possessionIndex = Math.floor(Math.random() * possessions.length);
  const whereIndex = Math.floor(Math.random() * wheres.length);

  return (
    pronouns[pronounIndex] +
    subjects[subjectIndex] +
    actions[actionIndex] +
    possessions[possessionIndex] +
    wheres[whereIndex]
  );
};
