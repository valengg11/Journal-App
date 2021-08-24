import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://media-exp1.licdn.com/dms/image/C4E1BAQFhqtOBNMQ5EA/company-background_10000/0/1519802595418?e=1629842400&v=beta&t=_b8UNU7cKtM7u1jmMQPzyjO4BTEkEVD4XC09JqX3AyU)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
