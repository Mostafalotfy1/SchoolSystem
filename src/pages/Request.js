import React, { useState, useEffect } from "react";

import { PayInfo, StudentTable, AddStudenModal } from "../components/request";

export default function Request() {
  const [addStudent, setAddStudent] = useState(false);

  const data = [
    {
      name: "سارة سلام",
      ser: "1244558",
      school: "مدرسة النبلاء",
      recorded: true,
      pay: true,
    },
    {
      name: "احمد سلام",
      ser: "1244558",
      school: "مدرسة النبلاء",
      recorded: true,
      pay: true,
    },
    {
      name: "مهند سلام",
      ser: "1244558",
      school: "مدرسة النبلاء",
      recorded: true,
      pay: true,
    },
  ];

  useEffect(() => {
    document.getElementById("chartsSideBar").style.display = "none";
  }, []);

  return (
    <section className="request-page page">
      <PayInfo toggleAddStudentModal={() => setAddStudent(!addStudent)} />
      <div className="request-table">
        <h4 className="request-table-title our-table-title">الطلاب المقيدين</h4>
        <StudentTable data={data[0]} />
        <StudentTable data={data[1]} />
        <StudentTable data={data[2]} />
      </div>

      {addStudent && (
        <AddStudenModal
          toggleAddStudentModal={() => setAddStudent(!addStudent)}
        />
      )}
    </section>
  );
}
