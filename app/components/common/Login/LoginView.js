import React from 'react';


// export default (props) =>
//     <div className="container">
//         <button onClick={props.onPress}>
//              {props.userName}
//         </button>
//     </div>;

export default (props) =>
    <div className="container">
        <label htmlFor="uname" ><b>User name</b></label>
        <input type="text" placeholder="Enter Username" name="uname" />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" />

        <button onClick={props.onPress}>Button {props.clickStatus}</button>
    </div>;
    
