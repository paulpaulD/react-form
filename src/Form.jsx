import React from 'react';
function Form(){
    return(
        <form>
            <label for='name'>Name</label>
                <input type="text" id="name"/><br/>

            <lable for="nname">NickName</lable>
                <input type="text" id="nname"/><br/>

            <lable for="add">Address</lable>
                <textarea id='add'></textarea> <br/>

            <label for="pno">Phone number</label>
                <input type="tel" id="pno"/><br/>

            <label for="memo">Memories</label>
                <textarea id="memo"/><br/>

            <label for="gender">Gender</label>
                <input type="radio" id="Male" name='Male'>Male</input>
                <input type="radio" id="Female" name='Female'>Female</input><br/>

            <label for="act">Fev Actors</label>
                <input type="checkbox" id="act">Actor1</input><br/>
                <input type="checkbox" id="act">Actor2</input><br/>
                <input type="checkbox" id="act">Actor3</input><br/>
                <input type="checkbox" id="act">Actor4</input><br/>

            <label for="scl">School</label>
                <select id="scl" name="school">
                    <option value="School1">School1</option>
                    <option value="School2">School2</option>
                    <option value="School3">School3</option>
                </select>
        </form>
    )

}
export default Form;