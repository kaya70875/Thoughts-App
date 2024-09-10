import { useRef } from "react";

export default function Tag({tags, setTags}: {tags: string[], setTags: React.Dispatch<React.SetStateAction<string[]>>}) {
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      setTags((prevTags) => [...prevTags, inputValue]);
      inputRef.current!.value = "";
    }
  };

  const handleRemoveTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const tagToRemove = e.currentTarget.parentElement?.textContent;
    if (tagToRemove) {
      setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
    }
  };

  return (
    <div className="w-2/4">
      <input
        type="text"
        className="bg-transparent border-none outline-none p-2 placeholder-black"
        placeholder="Tags..."
        ref={inputRef}
      />
      <button onClick={handleAddTag}></button>
      <div className="flex gap-2 p-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-white rounded-full p-2 flex justify-center items-center gap-1"
          >
            {tag}
            <button onClick={handleRemoveTag}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="12"
                height="12"
                viewBox="0 0 32 32"
              >
                <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
