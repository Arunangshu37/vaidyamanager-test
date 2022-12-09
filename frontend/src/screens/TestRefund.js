import React, { useState } from "react";
import axios from "axios";

function TestRefund() {
    const [username, setUsername] = useState("");
  
   
    const eassbuzz = () => {
      const para = {
        // "surl": "http://localhost:5000/api/easebuzz/easebuzz_reponse",
        // "furl": "http://localhost:5000/api/easebuzz/easebuzz_reponse",
        'txnid': "T31Q6J1HM",
        'amount': "120.0",
        'refund_amount': "32.00",
        'email': "xyz@gmail.com",
        'phone': "9527336026",
      }
        const config = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDhmZjU1M2JlYjRhODA4MjNhNjYzYiIsImlhdCI6MTY2ODY4MzA1OSwiZXhwIjoxNjcxMjc1MDU5fQ.fojhrs7aiC2S6SVsv4EOHt4uec236QBQO3Nyh4HeJgE`,
          },
      }
        axios.post("http://localhost:5000/api/easebuzz/refund", config)
        .then((response) => {
          console.log("Response is",response.data)
          window.location.href = response.data
  
        })
  
  
    }

    return (
      <div className="App">
  
        <header className="App-header">
  
          {/* <Student /> */}
          <h1>Zoom Meeting</h1>
    
        </header>
        <div>
          <button
            onClick={eassbuzz}>
            Easebuzz
          </button>
        </div>
        

      </div>
    );
  }
  
  export default TestRefund;
  