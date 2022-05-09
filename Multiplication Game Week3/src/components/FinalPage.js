import React, {useEffect} from "react";
import "./finalpage.css";
import { Link } from "react-router-dom";

function FinalPage() {
  let storedArray = JSON.parse(sessionStorage.getItem("alldata")); // for All Question part

  let localarray = JSON.parse(localStorage.getItem("localarray"));
  let finalArray = JSON.parse(sessionStorage.getItem("scoreCorrectAnswerList")) || []; // for Final part
 
  
   useEffect(() => {
    localStorage.setItem(("localarray"), JSON.stringify({
      Point: localarray.Point + finalArray[0],
      Total_Questions: localarray.Total_Questions + 10,
      Correct_Answers: localarray.Correct_Answers + finalArray[1]
    }))
   } , [])

  
  return (
    
    <div>
      <div className="final">
        <h1>
          Final<br/>
          <svg
            width="228"
            height="8"
            viewBox="0 0 228 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M227.999 1.38396C228.435 -1.20343 4.46015 0.459886 1.84811 1.38396C-0.763925 2.30802 -0.463579 4.58158 1.84811 7.298C4.1598 10.0144 220.742 3.97134 220.742 3.97134C220.742 3.97134 227.564 3.97134 227.999 1.38396Z"
              fill="#FF0000"
            />
          </svg>
        </h1>
        <h2>Point: {finalArray[0]}</h2>
        <h2>Questions: 10</h2>
        <h2>Correct Answers: {finalArray[1]}</h2>
      
        <Link to="/" style={{ textDecoration: 'none' }}>
        <svg
          width="200"
          height="139"
          viewBox="0 0 447 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.965 97.6124C-59.2656 35.2924 132.507 6.33039 232.022 7.29094C241.757 5.44668 225.802 4.40928 216.608 4.1211C138.456 2.19999 0 20.5466 0 64.9243C0 128.609 174.422 137.254 214.986 138.695C289.622 141.346 465.667 127.457 445.385 67.5178C425.103 7.5791 257.171 -1.01049 203.628 0.0867675C169.879 0.778373 177.667 3.06449 185.78 4.1211C362.636 -1.93041 440.737 49.1335 440.737 75.3567C440.737 147.687 99.5451 147.465 28.965 97.6124Z"
            fill="white"
          />
        </svg>
         <p style={{ marginTop:'-95px',textAlign:'center',fontSize:'25px'}}>Restart</p>
      </Link>
      </div>
  
      <div className="questionslist">
        <h1>
          All Question
          <svg
            width="350"
            height="8"
            viewBox="0 0 350 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M349.999 1.38396C350.667 -1.20343 6.84672 0.459886 2.83702 1.38396C-1.17269 2.30802 -0.711634 4.58158 2.83702 7.298C6.38567 10.0144 338.858 3.97134 338.858 3.97134C338.858 3.97134 349.331 3.97134 349.999 1.38396Z"
              fill="#FF0000"
            />
          </svg>
        </h1>

        <ul>
          {storedArray.map((item, index) => (
            <li key={index}>
              <h1>
                {item[0]} X {item[1]} = {item[0] * item[1]} {"\u00A0"}
                {item[2] === true ? (
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25977 18.9267C5.61273 21.6994 8.87383 24.543 11.6068 27.9592C12.8074 29.46 12.3118 30.0385 13.4941 27.1952C17.3552 17.9103 20.5776 8.62604 28.9526 2.3448"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="21"
                    height="26"
                    viewBox="0 0 21 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1.21545C0.589109 0.405148 1.33416 0 2.23515 0C2.58168 0 2.92822 0.0880763 3.27475 0.264228C4.00248 4.9851 5.52723 9.31843 7.84901 13.2642C9.37376 10.3753 11.2104 6.30623 13.3589 1.05691C14.1906 0.598916 14.849 0.369919 15.3342 0.369919C15.854 0.369919 16.2698 0.422764 16.5817 0.528456C15.8886 2.81843 15.0743 4.94986 14.1386 6.92276C13.203 8.89566 12.3193 10.71 11.4876 12.3659C10.6559 14.0217 10.0495 15.2371 9.66832 16.0122C10.6386 17.2453 11.453 18.2317 12.1114 18.9715C12.8045 19.6762 13.7574 20.416 14.9703 21.1911C16.5644 22.248 18.0718 22.7764 19.4926 22.7764C20.2203 22.7764 20.7228 22.9173 21 23.1992C20.6188 24.397 19.7005 24.9959 18.2451 24.9959C15.8193 24.9959 13.3936 24.0271 10.9678 22.0894C10.0668 21.3496 9.5297 20.9092 9.35644 20.7683C9.21782 20.5921 8.75 20.1165 7.95297 19.3415C7.67574 19.7642 7.27723 20.5041 6.75743 21.561C6.27228 22.6179 5.85644 23.4634 5.5099 24.0976C5.16337 24.6965 4.69554 25.1721 4.10644 25.5244C3.51733 25.8415 2.99752 26 2.54703 26C2.13119 26 1.73267 25.9472 1.35149 25.8415C1.90594 24.6789 2.7203 23.0935 3.79455 21.0854C4.90347 19.0772 5.64851 17.7033 6.0297 16.9634C4.29703 14.2154 2.91089 11.6612 1.87129 9.30081C0.866337 6.90515 0.242574 4.21003 0 1.21545Z"
                      fill="white"
                    />
                  </svg>
                )}{" "}
              </h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FinalPage;
