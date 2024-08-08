export default function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div className="flex items-center justify-center absolute  w-[100vw] h-[100vh] ">
        <div className=" bg-white ">
          {/* <h1 className="text-green-700 text-4xl p-5 font-semibold">the form has been submitted successfully</h1> */}
          <h1 className="text-green-700 text-4xl p-5 font-semibold">
           
            {errorMessage != null
              ? errorMessage
              : "the form has been submitted successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
