import Link from "next/link";

export default function Header() {
	return (
	  <div className='flex justify-between bg-amber-700 h-20'>
		<div className="text-amber-300">Logo</div>
		<h1 className='title'>Manuel Mazunga de Almeida</h1>
		<div>Learning react with next.js is so good</div>
		<div>
			<nav className="flex gap-5">
				<Link href={"/"}>
					Home
				</Link>
				<Link href={
					{
						pathname: "/products/product",
						query: {name: "Almeida",course: 'React Next'}
					}
				}>
					Produtos
				</Link>
				<Link href={"/usestate/usestate"}>
					User state
				</Link>
				<Link href={"/inputs/inputs"}>
					Inputs
				</Link>
			</nav>
		</div>
	  </div>
	)
  }  
