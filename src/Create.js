import React from 'react';

const Create = () => {
    return (<div>
        <div className="create">
            <label htmlFor="">Username</label>
            <input type="text" name='uname' />
            <label htmlFor="">Message</label>
            <input type="text" name='mes'/>
        </div>
    </div> );
}
 
export default Create;