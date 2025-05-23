import React, { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    const totalDays = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)

    const days = [];

    // Add empty boxes for the first week offset
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add actual days
    for (let d = 1; d <= totalDays; d++) {
      days.push(d);
    }

    return days;
  };

  const goToPrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const days = getDaysInMonth(year, month);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button onClick={goToPrevMonth}>❮</button>
        <h2>
          {monthName} {year}
        </h2>
        <button onClick={goToNextMonth}>❯</button>
      </div>

      {/* Weekdays */}
      <div style={styles.grid}>
        {daysOfWeek.map((day) => (
          <div
            key={day}
            style={{ ...styles.cell, fontWeight: "bold", color: "#444" }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div style={styles.grid}>
        {days.map((day, i) => (
          <div key={i} style={styles.cell}>
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    fontFamily: "sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem 0",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
  },
  cell: {
    width: "14.28%", // 100 / 7
    height: "60px",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
};

export default Calendar;
