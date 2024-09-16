export default function SubmitButton() {

    const handleSubmitButton = () => {  
        const activeButtons = document.querySelectorAll(".active");

        activeButtons.forEach((button) => {
            button.classList.remove("active");
        });
    }   

  return (
    <button
      type="submit"
      className="primary__button flex items-center justify-center text-base xl:text-sm w-20 xl:w-16 h-10 xl:h-8 p-2"
      onClick={handleSubmitButton}
    >
      Submit
    </button>
  );
}
