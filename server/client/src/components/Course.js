import React from "react";
import "./Course.css";
import coursesPagePicbootcamp from "../images/coursesPage-pic-2.jpg";

import deployAppImg from "../images/deploy-app-img.png";
import learnReact from "../images/learn-react.png";
import reactHooks from "../images/react-hooks-img.png";

const onlineCoursesArray = [
  {
    courseName: "Learn React In a Better Way",
    imgSrc: learnReact,
    href:
      "https://www.udemy.com/course/learn-react-in-a-better-way/?referralCode=4299350292063C517597",
  },
  {
    courseName: "Learn React Hooks in a Better Way",
    imgSrc: reactHooks,
    href:
      "https://www.udemy.com/course/learn-react-hooks-in-a-better-way/?referralCode=B2E5AC5DE2762AB8A667",
  },
  {
    courseName: "Deploy your NodeExpress App to the Cloud",
    imgSrc: deployAppImg,
    href:
      "https://www.udemy.com/course/deploy-your-node-express-app-to-the-cloud/?referralCode=69772F332A34A0921636",
  },
];

const bootcampsCoursesArray = [
  {
    bootcampName: "Web Develpment Bootcamps (Front  Fullstack)",
    subTitle: "FullStack Bootcamp",
    imgSrc: coursesPagePicbootcamp,
    desc:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum",
  },
  {
    bootcampName: "Web Develpment Bootcamps (Front  Fullstack)",
    subTitle: "FullStack Bootcamp",
    imgSrc: coursesPagePicbootcamp,
    desc:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum",
  },
];

export const onlineCourses = onlineCoursesArray.map((course, index) => (
  <div key={index} className="Course-online-1 courseOnline">
    <div className="course-img">
      <img src={course.imgSrc} alt="coursePic" />
      <a href={course.href} className="course-btn-enroll">
        Enroll
      </a>
    </div>
    <div className="course-name-text">
      <p>{course.courseName}</p>
    </div>
  </div>
));

export const bootcampCourses = bootcampsCoursesArray.map((bootcamp, index) => (
  <div key={index} className="Course-bootcamp Course-bootcamp-1 courseOnline">
    <div className="course-img">
      <img src={bootcamp.imgSrc} alt="coursePic" />
    </div>
    <div className="course-name-text">
      <p>{bootcamp.bootcampName}</p>
    </div>

    <div className="bootcamp-details">
      <h3 className="bootcamp-details-subtitle">{bootcamp.subTitle}</h3>
      <p className="bootcamp-details-desc">{bootcamp.desc}</p>
    </div>
  </div>
));
