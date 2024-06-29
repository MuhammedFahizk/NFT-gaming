
const SecondPage = () => {
    const items = [
       {
        count: 40,
        name: 'User'
       },
       {
        count: 40,
        name: 'User'
       },{
        count: 40,
        name: 'User'
       },{
        count: 40,
        name: 'User'
       },
    ]
  return (
    <div    className="bg-gradient-to-r py-10 from-[#1D09BD] via-black via-black to-[#EB01E3]">

<div className="w-full  flex justify-between px-20  border-t-2 border-b-2  border-[#9609bd]">
   {items.map((item, index) => (
    <div key={index} className="flex gap-2">
        <h1 className="text-4xl font-bold text-white" >{item.count}K</h1>
        <p className=" text-start font-thin text-white">Our <br /> {item.name}</p>
    </div>
   ))}
</div>
    </div>
  )
}

export default SecondPage