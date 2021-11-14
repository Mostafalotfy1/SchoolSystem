import React, { useState } from "react";

import AddStudentImg from "../../assets/addStudentForm.svg";
import BackBtnImg from "../../assets/backBtn.svg";

import Styles from "../../styles/request/addStudentFrom.module.css";

import { connect } from "react-redux";

import axios from "axios";

function AddStudenModal({ user, toggleAddStudentModal }) {
  const { uid, displayName } = user;
  const [formData, setFromData] = useState({
    parent_name: displayName,
    nationality: "",
    phoneNumber: "",
    address: "",
    civilRegistry: "",
    first_name: "",
    dateOfBirth: "",
    choosedTeacher: "",
    signature: "",
    disease: "لا يعانى",
  });
  const handleInputChange = (value) => {
    setFromData({ ...formData, [value.target.name]: value.target.value });
  };

  // submiting
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      uid,
      parent_full_name: formData.parent_name,
      student_full_name: formData.first_name,
      applicant_year: formData.choosedTeacher,
      nationality: formData.nationality,
      full_address: formData.address,
      parent_sgl_madany: formData.signature,
      desease: formData.disease,
      student_date_of_birth: formData.dateOfBirth,
    };

    let theFormData = new FormData();
    theFormData.append("uid", data.uid);
    theFormData.append("parent_full_name", data.parent_full_name);
    theFormData.append("student_full_name", data.student_full_name);
    theFormData.append("applicant_year", data.applicant_year);
    theFormData.append("nationality", data.nationality);
    theFormData.append("full_address", data.full_address);
    theFormData.append("parent_sgl_madany", data.parent_sgl_madany);
    theFormData.append("desease", data.desease);
    theFormData.append("student_date_of_birth", data.student_date_of_birth);

    axios
      .post({
        method: "post",
        url: "https://abnaey-dashboard.herokuapp.com/api/",
        data: theFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className={Styles.modal}>
      <div className={Styles.modalContent}>
        <div className="row">
          {/* img  */}
          <div className="col-4">
            <div
              className={`${Styles.modalImage} d-flex align-items-center justify-content-center text-center`}
            >
              {/* backbtn  */}
              <button
                onClick={toggleAddStudentModal}
                type="button"
                className={Styles.modalbtn}
              >
                <img src={BackBtnImg} alt="shape" className="img-fluid" />
                <span>عودة</span>
              </button>
              <div className={`${Styles.modalIntro}`}>
                <h4 className={`${Styles.modalIntroText}`}>
                  قدم لابنك مع افضل
                  <br /> نظام متكامل
                </h4>
                <img
                  src={AddStudentImg}
                  alt="add student"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          {/* form  */}
          <div className="col-8">
            <div className={`${Styles.modalForm}`}>
              {/* title  */}
              <h3 className={`${Styles.modalFormTitle}`}>تقديم طلب</h3>
              {/* form content  */}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* parent data  */}
                  <div className="col-6">
                    <div className={`${Styles.formContent}`}>
                      <h5 className={`${Styles.formContentTitle}`}>
                        بيانات ولى الامر
                      </h5>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label htmlFor="parent_name" className={Styles.label}>
                          اسم ولى الامر
                        </label>
                        <input
                          className={`${Styles.input} form-control`}
                          type="text"
                          id="parent_name"
                          value={formData.parent_name}
                          name="parent_name"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label htmlFor="nationality" className={Styles.label}>
                          الجنسية
                        </label>
                        <input
                          className={`${Styles.input} form-control`}
                          type="text"
                          id="nationality"
                          value={formData.nationality}
                          name="nationality"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label htmlFor="phoneNumber" className={Styles.label}>
                          رقم الجوال
                        </label>
                        <input
                          className={`${Styles.input} form-control`}
                          type="text"
                          id="phoneNumber"
                          value={formData.phoneNumber}
                          name="phoneNumber"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label htmlFor="address" className={Styles.label}>
                          مكان السكن
                        </label>
                        <input
                          className={`${Styles.input} form-control`}
                          type="text"
                          id="address"
                          value={formData.address}
                          name="address"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label htmlFor="civilRegistry" className={Styles.label}>
                          السجل المدتى للاب
                        </label>
                        <input
                          className={`${Styles.input} form-control`}
                          type="text"
                          id="civilRegistry"
                          value={formData.civilRegistry}
                          name="civilRegistry"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* student data  */}
                  <div className="col-6">
                    <div className={`${Styles.formContent}`}>
                      <h5 className={`${Styles.formContentTitle}`}>
                        بيانات الطالب
                      </h5>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label htmlFor="first_name" className={Styles.label}>
                          الاسم الاول
                        </label>
                        <input
                          className={`${Styles.input} form-control`}
                          type="text"
                          id="first_name"
                          value={formData.first_name}
                          name="first_name"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label htmlFor="dateOfBirth" className={Styles.label}>
                          تاريخ الميلاد
                        </label>
                        <input
                          className={`${Styles.input} form-control`}
                          type="text"
                          id="dateOfBirth"
                          value={formData.dateOfBirth}
                          name="dateOfBirth"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label
                          htmlFor="choosedTeacher"
                          className={Styles.label}
                        >
                          المعلم المختار
                        </label>
                        <input
                          className={`${Styles.input} form-control`}
                          type="text"
                          id="choosedTeacher"
                          value={formData.choosedTeacher}
                          name="choosedTeacher"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label htmlFor="signature" className={Styles.label}>
                          توقيع ولى الامر
                        </label>
                        <input
                          className={`${Styles.input} form-control`}
                          type="text"
                          id="signature"
                          value={formData.signature}
                          name="signature"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      {/* box  */}
                      <div className={`form-group ${Styles.formGroup}`}>
                        <label htmlFor="disease" className={Styles.label}>
                          هل يشكو الطالب من اى مرض
                        </label>
                        <div className={Styles.radioWrapper}>
                          <input
                            type="radio"
                            id="disease_true"
                            value="يعانى"
                            name="disease"
                            onChange={(e) => handleInputChange(e)}
                          />
                          <label
                            htmlFor="disease_true"
                            className={Styles.labelCheck}
                          >
                            نعم
                          </label>
                          <input
                            type="radio"
                            id="disease_false"
                            value="لا يعانى"
                            name="disease"
                            onChange={(e) => handleInputChange(e)}
                            defaultChecked={true}
                          />
                          <label
                            htmlFor="disease_false"
                            className={Styles.labelCheck}
                          >
                            لا
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* fooer / */}
                  <div
                    className={`col-12 d-flex justify-content-between align-items-center ${Styles.btnsWrapper}`}
                  >
                    <button className={Styles.resetBtn} type="reset">
                      الغاء
                    </button>
                    <button className={Styles.submitBtn} type="submit">
                      التالى
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.regularUser.user,
  };
};

export default connect(mapStateToProps)(AddStudenModal);
