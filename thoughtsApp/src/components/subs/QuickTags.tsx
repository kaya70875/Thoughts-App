export default function QuickTags({setTags} : {setTags: React.Dispatch<React.SetStateAction<string[]>>}) {

  const quickTags = [
    {
      id: 1,
      name: "Sick",
      color: "bg-primaryButton",
    },
    {
      id: 2,
      name: "Sleepy",
      color: "bg-primaryButton",
    },
    {
      id: 3,
      name: "Tired",
      color: "bg-primaryButton",
    },
    {
      id: 4,
      name: "Angry",
      color: "bg-primaryButton",
    },
    {
      id: 5,
      name: "Love",
      color: "bg-primaryButton",
    },
    {
      id: 6,
      name: "Sorry",
      color: "bg-primaryButton",
    },
  ]

  return (
    <div className="flex flex-col gap-4 mt-6 max-w-96 xl:max-w-80">
      <h1 className="font-bold text-lg lg:text-base sm:text-sm text-textColor">Quick Tags</h1>
      <div className="flex gap-6 flex-wrap font-semibold w-full xl:max-w-72">
        {quickTags.map((tag) => (
          <button
            key={tag.id}
            className={`primary__button ${tag.color} px-4 py-2 cursor-pointer button-styles flex items-center justify-center`}
            onClick={(e) => {
              e.preventDefault();
              setTags((prev) => [...prev, tag.name]);
            }}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  )
}
