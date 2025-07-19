
export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center text-white bg-black">
      <h1 className="text-3xl font-bold my-2.5">My to-do List</h1>
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
            <tr>
              <td className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">1</td>
              <td className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">Estudar React</td>
              <td className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wider">X</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
