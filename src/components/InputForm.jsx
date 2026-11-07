function InputForm() {
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <label htmlFor="fullName"></label>
          <input
            type="text"
            name="fullName"
            id=""
            placeholder="enter fullname"
            className="w-full bg-white rounded-sm"
          />
        </div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
            className="w-full bg-white rounded-sm"
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </>
  );
}
export default InputForm;
