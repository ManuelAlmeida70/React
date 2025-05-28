import Header from "@/components/Header";
import { constants } from "fs/promises";
import { useState } from "react";

const coursesList = ["Html", "React", "Javascript", "Arduino", "Css"];


export default function inputs()
{
	const [name, setName] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [courses, setCourse] = useState<string>("");

	return (
		<div>
			<Header/>
			<div className="fieldForm">
				<label>Nome</label>
				<input type="text" placeholder="your name" value={name} onChange={(events)=>setName(events.target.value)}/>
			</div>
			<div className="fieldForm">
				<label>Course:</label>
				<select name="course" id="course" value={courses} onChange={(evt)=>setCourse(evt.target.value)}>
					{
						coursesList.map((c:any)=>{
							return <option value={c}>{c}</option>;
						})
					}
				</select>
			</div>
			<div className="fieldForm">
				<label>Senha</label>
				<input type="password" placeholder="your password" value={password} onChange={(events) =>setPassword(events.target.value)}/>
			</div>
			<div>Nome: {name}</div>
			<div>Password: {password}</div>
		</div>
	);
}
