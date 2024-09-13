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
      className="primary__button w-20 p-2"
      onClick={handleSubmitButton}
    >
      Submit
    </button>
  );
}
