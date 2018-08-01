import React, { Component } from 'react';
import Wizard from './Wizard';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.showResults = this.showResults.bind(this);
  }

  showResults() {
    window.alert(`You submitted your info!`);
  };

  render() {
    console.log('contact')
    return (
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <h2 className="title">Snail Mail</h2>
            <p className="description">Get in touch</p>
            <div className="form_wrapper">
              <Wizard onSubmit={this.showResults} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// // dom variables
// var getFieldset = document.querySelectorAll("fieldset");

// // declaring the active fieldset & the total fieldset count
// var formCounter = 0;
// var fieldset = getFieldset[formCounter];
// fieldset.className = "showForm";

// // creates and stores a number of bullets
// var bulletNum = "<div class='bullet'></div>";
// var numOfForms = getFieldset.length;
// for (var i = 1; i < numOfForms; ++i) {
//   bulletNum += "<div class='bullet'></div>";
// };
// // injects bullets
// var bullet_o = document.getElementsByClassName("bullet_o");
// for (var i = 0; i < bullet_o.length; ++i) {
//   console.log('step one')
//     var b_item = bullet_o[i];
//     b_item.innerHTML = bulletNum;
// };

// // removes the first back button & the last next button
// document.getElementsByName("back")[0].className = "hideForm";
// document.getElementsByName("next")[bullet_o.length - 1].className += " hideForm";

// // Makes the first dot active
// var bullets = document.getElementsByClassName("bullet");
// console.log('step two')
// bullets[formCounter].className += " bullet_active";

// // Validation loop & goes to the next step
// function btn_next() {
//   var boolVal = true;

//   var fieldsets = document.querySelectorAll("fieldset")[formCounter];
//   var inputCount = fieldsets.querySelectorAll("input").length;

//   for (i = 0; i < inputCount; ++i) {
//     var singleInput = fieldsets.querySelectorAll("input")[i];
//     if (singleInput.getAttribute("type") === "button") {
//         // nothing happens
//     } else {
//       if (singleInput.value === "") {
//         singleInput.style.borderWidth = '2px';
//         singleInput.style.borderColor = "#ee0979";
//         singleInput.style.opacity = .8;
//         singleInput.style.animation = "pulse .35s 0s";
//         boolVal = false;
//       } else if (boolVal === false) {} else {
//         boolVal = true;
//       }
//     };
//   };
//   if (boolVal === true) {
//     console.log('step three')
//     // goes to the next step
//     var selection = getFieldset[formCounter];
//     selection.className = "hideForm";
//     formCounter += 1;
//     if (formCounter===3) {
//       document.querySelector('.contact-icon.mail').style.display = "block"
//     }
//     var selection = getFieldset[formCounter];
//     selection.className = "showForm";
//     // refreshes the bullet
//     var activeBullets = formCounter * numOfForms + formCounter;
//     bullets[activeBullets].className += " bullet_active";
//     console.log('step four')
//   }
// };

// if (formCounter===3) {
//   document.querySelector('.contact-icon.mail').style.display = "block"
// }

// // goes one step back
// function btn_back() {
//   getFieldset[formCounter].className = "hideForm";
//   formCounter -= 1;
//   getFieldset[formCounter].className = "msf_showhide";
//   document.querySelector('input[type="text"]').value = "";
//   document.querySelector('input[type="text"]').style.borderColor = "#21ce99";
// };

// console.log("loaded");

// function mail_animation() {
//   document.querySelector('.circle').style.display = "block"
//   // document.querySelector('.contact-icon.mail').style.display = "block"

//   // document.querySelector('.circle').style.animation = "circle 1s ease-in-out"
//   // document.querySelector('.circle').style.animationFillMode = "both"
//   // document.querySelector('.contact-icon.mail').style.animation = 'button 1.5s ease-in-out 1.7s'
//   // document.querySelector('.contact-icon.mail').style.animationFillMode = "both"

//   document.querySelector('.contact-icon.mail').style.strokeDashoffset = 326
//   document.querySelector('.contact-icon.mail').style.transition = 'stroke-dashoffset 1s ease-in-out'
//   document.querySelector('.contact-icon.mail').style.animation = "reset 1s ease-in-out 3.7s"
//   document.querySelector('.contact-icon.mail').style.animationFillMode = "both"
//   document.querySelector('.contact-icon.plane').style.display = "block"
//   document.querySelector('.contact-icon.plane').style.strokeDashoffset = 0
//   document.querySelector('.contact-icon.plane').style.transition = 'stroke-dashoffset 1s ease-in-out .6s'
//   document.querySelector('.contact-icon.plane').style.animation = "fly 2.4s ease-in-out"
//   document.querySelector('.contact-icon.plane').style.animationFillMode = "both"
//   // 	animation: button 1.5s ease-in-out 1.7s;
// // 	animation-fill-mode: both;
// }

// function send_mail() {
//   // document.querySelector('fieldset').style.animation = "button 5s ease-in 3s"
//   // document.querySelector('fieldset').style.animationFillMode = "both"
//   mail_animation();
//   // getFieldset[3].className = "hideForm";
//   // formCounter = 0;
//   // fieldset.className = "showForm";
//   document.querySelector('input[type="text"]').value = "";
//   document.querySelector('.circle').style.display = "none"
//   this.form.reset()
// }










//   render() {
//     return (
//       <section className="contact-section">
//         <div className="container">
//           <div className="row">
//               <h2 className="title">Snail Mail</h2>
//               <p className="description">Fill out the form to get in touch. I'll get get back to you as soon as possible.
//               </p>
//               <div className="form_wrapper">
//                 {/*<!-- msf_hide -->*/}
//                 <fieldset className="hideForm">
//                   <div className="form-group">
//                     <input type="text" name="firstname" placeholder="First Name" />
//                     <span className="arrow-btn" name="next" onclick="btn_next()" href="#">
//                       <span className="next-arrow" ></span>
//                     </span>
//                   </div>
//                   <div className="contact-button-container">
//                     <input className="contact-btn" type="button" name="back" value="Back"  onclick="btn_back()" />
//                   </div>
//                   <div className="bullet_o"></div>
//                   <div className="msf_line"></div>
//                 </fieldset>

//                 <fieldset className="hideForm">
//                   <div className="form-group">
//                     <input type="text" name="lastname" placeholder="Last Name" />
//                     <span className="arrow-btn" name="next" onclick="btn_next()" href="#">
//                       <span className="next-arrow" ></span>
//                     </span>
//                   </div>
//                   <div className="contact-button-container">
//                     <input className="contact-btn" type="button" name="back" value="Back"  onclick="btn_back()" />
//                   </div>
//                   <div className="bullet_o"></div>
//                   <div className="msf_line"></div>
//                 </fieldset>

//                 <fieldset className="hideForm">
//                   <div className="form-group">
//                     <input type="text" name="message" className="form-control" id="message" placeholder="Your Message"></input>
//                     <span className="arrow-btn" name="next" onclick="btn_next()" href="#">
//                       <span className="next-arrow" ></span>
//                     </span>
//                   </div>
//                   <div className="contact-button-container">
//                     <input className="contact-btn" type="button" name="back" value="Back"  onclick="btn_back()" />
//                   </div>
//                   <div className="bullet_o"></div>
//                   <div className="msf_line"></div>
//                 </fieldset>

//                 <fieldset className="hideForm">
//                   <div className="form-group">
//                     <input type="email" name="email" placeholder="Your Email" />
//                     <span className="arrow-btn" name="next" onclick="btn_next()" href="#">
//                       <svg className="contact-icon mail" onclick="send_mail()" />
//                       <span className="next-arrow" ></span>
//                     </span>
//                     <div className="circle"></div>
//                     <svg className="contact-icon mail" onclick="send_mail()">
//                       <polyline points="101,1 101,19 71,19 71,1"></polyline>
//                       <polyline points="100,1 86,10 73,1 100,1"></polyline>
//                     </svg>
//                     <svg className="contact-icon plane">
//                       <polyline points="119,1 50,29 106,50 119,1"></polyline>
//                       <polyline points="119,1 77,39 77,60 88,45"></polyline>
//                     </svg>
//                   </div>
//                   <div className="contact-button-container">
//                     <input className="contact-btn" type="button" name="back" value="Back"  onclick="btn_back()" />
//                   </div>
//                   <div className="bullet_o"></div>
//                   <div className="msf_line"></div>
//                 </fieldset>
//               </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

export default Contact;