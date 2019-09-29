import React from 'react';
import './index.css';


class App extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["mobileno"] = "";
          fields["firstname"] = "";
          fields["lastname"] = "";
          fields["emailid"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }      

      if (!fields["firstname"]) {
        formIsValid = false;
        errors["firstname"] = "*Please enter your firstname.";
      }

      if (typeof fields["firstname"] !== "undefined") {
        if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["firstname"] = "*Please enter alphabet characters only.";
        }
       }

      if (!fields["lastname"]) {
        formIsValid = false;
        errors["lastname"] = "*Please enter your lastname.";
      }

      if (typeof fields["lastname"] !== "undefined") {
        if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lastname"] = "*Please enter alphabet characters only.";
        }
       }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }
      

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h1 style={{ textAlign: "left" }}>Registration</h1>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        
        <input type="text" name="mobileno" placeholder="Mobile Number" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        
        <input type="text" name="firstname" placeholder="First Name" value={this.state.fields.firstname} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.firstname}</div>
        
        <input type="text" name="lastname" placeholder="Last Name" value={this.state.fields.lastname} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.lastname}</div>

        <div className="k-form-field">
                                        <span>Gender</span>

                                        <input type="radio" name="gender" id="female" className="k-radio" />
                                        <label className="k-radio-label" for="female">Female</label>

                                        <input type="radio" name="gender" id="male" className="k-radio" checked="checked" />
                                        <label className="k-radio-label" for="male">Male</label>
                                    </div>

        <input type="text" name="emailid" placeholder="Email" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>        
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>    
    <footer/>
      <input type="submit" className="buttonLogin"  value="Login"/>
</div>

      );
  }


}


export default App;