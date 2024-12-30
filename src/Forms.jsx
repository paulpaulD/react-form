import './Forms.css'

function Forms(){
    return(
        <>
        <h2>Slam Book</h2>
        <div>
        <form>
        <label for='name'>Name : </label>
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
            <input type="radio" id="Male" name="gender" value="Male"/> Male
            <input type="radio" id="Female" name="gender" value="Female"/> Female<br/>

        <label for="act">Fev Actors</label>
            <input type="checkbox" id="act1" name="act" value="Actor1"/>Actor1
            <input type="checkbox" id="act2" name="act" value="Actor1"/>Actor2
            <input type="checkbox" id="act3" name="act" value="Actor1"/>Actor3
            <input type="checkbox" id="act4" name="act" value="Actor1"/>Actor4      
            <label for="scl">School</label>
            <select id="scl" name="school">
                <option value="School1">School1</option>
                <option value="School2">School2</option>
                <option value="School3">School3</option>
            </select>   <br/>
       <button>Submit</button>
      
    </form></div>
        </>
    )
}

export default Forms;