import Header from "@/components/Header";
import { useState } from "react";

export default function inputs()
{
	const [name, setName] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<div>
			<Header/>
			<div className="fieldForm">
				<label>Nome</label>
				<input type="text" placeholder="your name" value={name} onChange={(events)=>setName(events.target.value)}/>
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
