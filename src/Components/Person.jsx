import React, {useState} from 'react';
import names from "./Userlist";

function Person({person}) {

    return (
        <div>
            <p>Name: {person}</p>
        </div>
      );

}

export default Person;