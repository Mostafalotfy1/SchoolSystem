import React, { useState, useEffect } from "react";

import Chart from "./Chart";

import Styles from "../../../styles/chartsAsideBar/chartsAsideBar.module.css";

import ToggleScreen from "../../../assets/toggleScreen.svg";
import PeopleIcon from "../../../assets/peopleIcon.svg";
import SchoolIcon from "../../../assets/schoolIcon.svg";
import BookIcon from "../../../assets/bookIcon.svg";

import ChildChartIcon from "../../../assets/childChart.svg";
import ActivityChartIcon from "../../../assets/activityChart.svg";
import CompletedChartIcon from "../../../assets/completedChart.svg";
import StepsChartIcon from "../../../assets/stepsChart.svg";

export default function ChartsSideBar() {
  const [toggle, settoggle] = useState(false);

  return (
    <div
      className={`${Styles.chartsSideBar} ${
        toggle ? Styles.toggle : ""
      } radius`}
      id="chartsSideBar"
    >
      <img
        src={ToggleScreen}
        alt=""
        className={`img-fluid ${Styles.toggleScreen}`}
        onClick={() => settoggle(!toggle)}
      />

      <div className={`${Styles.chartWrapper}`}>
        <div className={`row flex-nowrap ${toggle ? Styles.to : ""}`}>
          <div className="col">
            <Chart
              img={BookIcon}
              precentage="10,00+"
              title="محتوى تعليمى"
              toggle={toggle}
            />
          </div>
          <div className="col">
            <Chart
              img={SchoolIcon}
              precentage="110,00+"
              title="مدرسة"
              toggle={toggle}
            />
          </div>
          <div className="col">
            <Chart
              img={PeopleIcon}
              precentage="150,00+"
              title="طالب وطالبه"
              toggle={toggle}
            />
          </div>
        </div>
      </div>

      <div>
        <p className={Styles.chartWrapperTitle}>التفاعل اليومى</p>
        <div className={`${Styles.chartWrapper}`}>
          <div className="row">
            <div className="col-6">
              <Chart
                img={ChildChartIcon}
                precentage="25%"
                title="حضور الطالب"
                noIcon={true}
              />
            </div>
            <div className="col-6">
              <Chart
                img={ActivityChartIcon}
                precentage="50%"
                title="مشاركة الطالب"
                noIcon={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <h4 className={Styles.chartWrapperTitle}>الانشطة</h4>
        <div className={`${Styles.chartWrapper}`}>
          <div className="row">
            <div className="col-12">
              <Chart
                img={CompletedChartIcon}
                precentage={false}
                title="اكتمل من حل الواجب"
                noIcon={true}
              />
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <p className={Styles.chartWrapperTitle}>تقدم الطالب</p>
        <div className={`${Styles.chartWrapper} ${Styles.last}`}>
          <div className="row">
            <div className="col-12">
              <Chart
                img={StepsChartIcon}
                precentage={false}
                title=""
                noIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
