export default function Signin() {
  return (
    <div>
      <div className="justify-between m-2 font-bold">
        <div>
          <div className="font-bold text-2xl mb-2">Signin</div>
        </div>
        <div>
          <div>Username:</div>
          <div>
            <input
              className="rounded-lg border bg-blue-100 p-2 w-full"
              type="text"
              name="username"
            />
          </div>
        </div>
        <div>
          <div>Password:</div>
          <div>
            <input
              className="rounded-lg border bg-blue-100 p-2 w-full"
              type="text"
              name="password"
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            name="signin"
            className="rounded-lg bg-blue-400 text-black w-full text-gray mb-20 mt-2 p-2 hover:bg-blue-300"
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  );
}
