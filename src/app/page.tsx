'use client'
import { useState } from "react";
import  Input  from "../../components/Input";
import TableRow from "../../components/TableRow";

export default function Home() {
  const [id, setId] = useState<number>(0)
  const [name, setName] = useState<string>('')
  const [elemente, setElement] = useState<React.ReactNode>([])
  
  interface typeArray {
    id: number
    name: string
  }
  const arrayList = new Map()

  function addList() {
    
    arrayList.set(id, {id, name})
    setElement(createList)
  }

  function createList() {
    const result: React.ReactNode[] = []
    arrayList.forEach(e => {
      result.push(<TableRow key={e.id} id={e.id} name={e.name}/>)
    })
    return result
  }

  return (
    <main className="h-screen w-screen flex flex-col items-center text-white bg-black">
      <h1 className="text-3xl font-bold my-2.5">My to-do List</h1>
      <div className="w-2/4 my-2.5">
        <Input onClick={addList} idChange={setId} textChange={setName}></Input>
      </div>
      <section className="w-2/4 ">
        <table className="table-auto border border-gray-400 w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">
                ID
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">
                To-do
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {elemente}
          </tbody>
        </table>
      </section>
    </main>
  );
}
