import React, { useState } from 'react';
import styled from "styled-components";
import formImage from "./assets/formImage.jpg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <LoginForm>
      <div className="main_container">
        <div className='image_container'>
          <img src={formImage} alt="" />
        </div>
        <div className="form_container">
          <form action="/">
            <h1>Login</h1>
            <div className='login_And_Input'>
              <label htmlFor="login" className='form_label'>Login ID</label>
              <input type="text" id='login' placeholder="Enter Login ID" required="true" />
            </div>
            <div className='login_And_Input'>
              <label htmlFor="password" className='form_label'>Password</label>
              <div className="password_input_box">
                <input type={showPassword ? "text" : "password"} id='password' placeholder="Enter Password" required="true" />
                {showPassword ?
                  <AiFillEye className='icon' onClick={() => setShowPassword(false)} /> :
                  <AiFillEyeInvisible className='icon' onClick={() => setShowPassword(true)} />
                }
              </div>
            </div>
            <div className="check_box">
              <div className="left">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className='checkbox_label'>Remember Me</label>
              </div>
              <div className="right">
                <p>Change Password</p>
              </div>
            </div>
            <div className="terms">
              <input type="checkbox" id="T&C" />
              <label htmlFor="T&C" className='checkbox_label'>Agree to <u>Terms & Conditions</u> </label>
            </div>
            <button>Login</button>
            <div className="registerLink">
              <p>Don't Have an Account?</p>
              <a href="/">Register Here</a>
            </div>
          </form>
        </div>
      </div>
    </LoginForm>
  )
}

const LoginForm = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Ubuntu', sans-serif;
  background-color: rgb(245,245,245);
  .main_container{
    display: flex;
    background-color: white;
    align-items: center;
    width: 80%;
    height: 70%;
    padding-top: 1.7rem;
    padding-right: 1.7rem;
    padding-bottom: 1.7rem;
    .image_container{
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 17vw;
        height: auto;
        object-fit: cover;
      }
    }
    .form_container{
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 0 4rem;
      form{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        h1{
          font-size: 30px;
          font-weight: bolder;
          margin-bottom: 1rem;
        }
        .login_And_Input{
          display: flex;
          flex-direction: column;
          width: 100%;
          height: fit-content;
          margin-top: 1rem;
          gap: 0.3rem;
          .password_input_box{
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;
            input{
              width: 100%;
            }
            .icon{
              position: absolute;
              right: 0.8rem;
              cursor: pointer;
            }
          }
          .form_label{
            font-size: 18px;
            font-weight: 500;
          }
          input{
            height: 2.5rem;
            outline: none;
            border: 1px solid grey;
            border-radius: 5px;
            padding-left: 10px;
            font-size: 13px;
          }
        }
        .check_box{
          display: flex;
          width: 100%;
          justify-content: space-between;
          height: fit-content;
          margin-top: 0.5rem;
          font-size: 13px;
          color: darkgray;
          .left{
            display: flex;
            align-items: center;
            gap: 5px;
            .checkbox_label{
              cursor: pointer;
              font-size: 13px;
            }
            input{
              cursor: pointer;
            }
          }
          .right{
            color: orange;
            cursor: pointer;
            font-size: 13px;
          }
        }
        .terms{
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: center;
          margin-top: 0.2rem;
          font-size: 13px;
          color: darkgray;
          gap: 5px;
          .checkbox_label{
            cursor: pointer;
            font-size: 13px;
            u{
              color: orange;
            }
          }
          input{
            cursor: pointer;
          }
        }
        button{
          border: none;
          outline: none;
          width: 60%;
          height: 2rem;
          margin: 2rem 0;
          background-color: rgb(21,117,167);
          color: white;
          font-size: 14px;
          font-weight: 500;
          border-radius: 5px;
          cursor: pointer;
        }
        .registerLink{
          display: flex;
          gap: 5px;
          align-items: center;
          p{
            font-size: 14px;
          }
          a{
            font-size: 14px;
            color: orange;
          }
        }
      }
    }
  }
  @media (max-width: 1208px){
  .main_container{
    width: 90%;
    padding-top: 1.3rem;
    padding-right: 1.3rem;
    padding-bottom: 1.3rem;
    .image_container{
      width: 45%;
      img{
        width: 18vw;
      }
    }
    .form_container{
      width: 55%;
      padding: 0 4rem;
      form{
        h1{
          font-size: 30px;
          margin-bottom: 0.7rem;
        }
        .login_And_Input{
          margin-top: 0.7rem;
          .form_label{
            font-size: 15px;
          }
          input{
            height: 2rem;
            border-radius: 3px;
            font-size: 14px;
          }
        }
        .check_box{
          margin-top: 0.7rem;
          .left{
            gap: 2px;
            .checkbox_label{
              font-size: 12px;
            }
            input{
              cursor: pointer;
            }
          }
          .right{
            font-size: 12px;
          }
        }
        .terms{
          font-size: 12px;
          gap: 2px;
          .checkbox_label{
            font-size: 12px;
          }
        }
        button{
          height: 2rem;
          margin: 1.5rem 0;
          font-size: 14px;
          border-radius: 3px;
        }
        .registerLink{
          gap: 2px;
          p{
            font-size: 12px;
          }
          a{
            font-size: 12px;
          }
        }
      }
    }
  }
  }
  @media (max-width: 860px){
  .main_container{
    .image_container{
      width: 45%;
      img{
        width: 22vw;
      }
    }
    .form_container{
      padding: 0 2rem;
      form{
        h1{
          font-size: 25px;
        }
        .login_And_Input{
          .form_label{
            font-size: 13px;
          }
          input{
            height: 2rem;
            border-radius: 3px;
            font-size: 11px;
          }
        }
        .check_box{
          font-size: 10px;
          .left{
            gap: 2px;
            .checkbox_label{
              font-size: 10px;
            }
          }
          .right{
            font-size: 10px;
          }
        }
        .terms{
          font-size: 10px;
          gap: 2px;
          .checkbox_label{
            font-size: 10px;
          }
        }
        button{
          height: 1.7rem;
          margin: 1.5rem 0;
          font-size: 12px;
          border-radius: 3px;
        }
        .registerLink{
          gap: 2px;
          p{
            font-size: 10px;
          }
          a{
            font-size: 10px;
          }
        }
      }
    }
  }
  }

  @media (max-width: 680px){
  .main_container{
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(245,245,245);
    .image_container{
      display: none;
    }
    .form_container{
      width: 60%;
      padding: 0 2rem;
      background-color: white;
    }
  }
  }
  @media (max-width: 500px){
  .main_container{
    .form_container{
      width: 80%;
    }
  }
  }
  
`

export default App;