'use client'
import { useState, useEffect } from "react";
import  Input  from "../../components/Input";
import TableRow from "../../components/TableRow";

interface ListItem {
  id: number
  name: string
}

export default function Home() {
  const [currentId, setCurrentId] = useState<number>(0)
  const [currentName, setCurrentName] = useState<string>('')
  const [todoList, setTodoList] = useState<ListItem[]>([])
  const [currentFilter , setCurrentFilter] = useState<string>('')

  useEffect(() => {

  }, [currentFilter])
  

  function addListItem() {
    const newItem: ListItem = {id: currentId, name: currentName}
    setTodoList(prevTodoList => [...prevTodoList, newItem]);
    console.log(todoList)

    setCurrentId(0)
    setCurrentName('')
  }

  const filterList = currentFilter 
    ? todoList.filter((item) => 
      item.name.toLocaleLowerCase().includes(currentFilter.toLocaleLowerCase())
    )
    : todoList

  const deleteListItem = (idToDelete: number) => {
    setTodoList(prevTodoList => prevTodoList.filter(item => item.id !== idToDelete));
  };

  return (
    <main className="h-screen w-screen flex flex-col items-center text-white bg-black">
      <h1 className="text-3xl font-bold my-2.5">My to-do List</h1>
      <div className="w-2/4 my-2.5">
        <Input onSave={addListItem} idChange={setCurrentId} textChange={setCurrentName} currentId={currentId} currentNome={currentName} filterChange={setCurrentFilter} currentFilter={currentFilter}></Input>
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
            {filterList.map(item => (
              <TableRow
              key={item.id}
              id={item.id}
              name={item.name}
              onDelete={deleteListItem}/> 
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
