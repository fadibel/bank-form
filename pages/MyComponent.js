import MyInput from "./My Inputs";


export default function MyComponent() {
  return (
    <div>
        <h1>this is the header</h1>
      {/* <label className="mt-3 ">{InputName}</label>
      <input
        value={valueComponent}
        onChange={(event) => {
          HandleChangeComponent(event.target.value);
        }}
        className="w-full text-black h-[30px] border-none "
      /> */}
      <MyInput
      />
    
      <h1>this is the footer</h1>
    </div>
  );
}
 