import React, { Component } from "react";
import Avatar from "react-avatar";
import Button from "../ButtonComponent/button";
import TextInput from "../TextInputComponent/textInputComponent";
import axios from "axios";
import "./userAccount.css";
import { Redirect } from "react-router";

export default class userAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      isEdited: false,
      userDetails: {},
      userId: "",
    };
  }

  async componentDidMount() {
    const id = localStorage.getItem("UserID");
    this.setState({ userId: id });

    await axios
      .get(`http://localhost:5000/userDetails/userDetails/${id}`)
      .then((result) => {
        console.log("result", result);
        this.setState({ userDetails: result.data.customer });
        this.setState({ fullName: result.data.customer.fullName });
        this.setState({ email: result.data.customer.email });
        this.setState({ phone: result.data.customer.phone });
      });
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isEditEnable = (e) => {
    console.log("ss");
    this.setState({ isEdited: true });
    console.log(this.state.isEdited);
  };

  deleteProfile = async (e) => {
    console.log("del");
    const { userId } = this.state;
    await axios
      .delete(`http://localhost:5000/userDetails/userProfile/${userId}`)
      .then((result) => {
        console.log(result);
        alert("Delete Successfull");
        this.props.history.push("/register");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlerSubmit = async (e) => {
    const { fullName, email, phone, userId } = this.state;
    const details = {
      fullName,
      email,
      phone,
    };
    await axios
      .put(`http://localhost:5000/userDetails/updateProfile/${userId}`, details)
      .then((result) => {
        console.log(result);
        alert("Update Successfull");
        this.setState({ isEdited: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { userDetails } = this.state;
    return (
      <div className="mainContainer">
        <div className="row">
          <div className="col-3 picContainer">
            <div className="lestContainer">
              <Avatar
                size="200"
                round={true}
                src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
              />
              <br />
              <center>
                <label className="profileName">{userDetails.fullName} </label>
                <br />
                {this.state.isEdited ? null : (
                  <>
                    <button
                      type="submit"
                      class="btn btn-outline-primary"
                      onClick={this.isEditEnable}
                    >
                      Edit Details
                    </button>
                    <br />
                    <br />
                    <button
                      type="submit"
                      class="btn btn-outline-danger"
                      onClick={this.deleteProfile}
                    >
                      Delete Profile
                    </button>
                  </>
                )}
              </center>
            </div>
          </div>
          <div className="col-md">
            {this.state.isEdited ? (
              <>
                <TextInput
                  type={"text"}
                  value={this.state.fullName}
                  textFeildName={"Full Name "}
                  name={"fullName"}
                  placeholder={"Enter Your Full Name Here"}
                  onChange={this.handlerChange}
                />
                <TextInput
                  type={"email"}
                  textFeildName={"Email "}
                  name={"email"}
                  value={this.state.email}
                  placeholder={"Enter Your Email Here"}
                  onChange={this.handlerChange}
                />
                <TextInput
                  type={"text"}
                  textFeildName={"Phone Number "}
                  name={"phone"}
                  value={this.state.phone}
                  placeholder={"Enter Your Phone Number Here"}
                  onChange={this.handlerChange}
                />
                <Button
                  id={"editSave"}
                  value={"Save changes"}
                  classname={"btn btn-outline-info btn-lg"}
                  type={"submit"}
                  onSubmit={this.handlerSubmit}
                />
              </>
            ) : (
              <>
                <label>
                  <b>Full Name</b>: {userDetails.fullName}
                </label>
                <br />
                <label>
                  <b>Email</b>: {userDetails.email}
                </label>
                <br />
                <label>
                  <b>Contact Number</b>: {userDetails.phone}
                </label>
                <br />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
