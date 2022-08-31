import Layout from "../components/layout";

export default function CreateCard() {
  return (
    <Layout>
      <h1>Create a card here!</h1>
      <form
        className="p-4 bg-slate-300 border rounded drop-shadow-lg"
        action="api/card-form"
        method="post"
      >
        <div className="grid grid-cols-2 gap-4 mt-2">
          <label className="mr-2" htmlFor="name">
            Name
          </label>
          <input
            className="rounded border-2"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-2">
          <label className="" htmlFor="description">
            Description
          </label>
          <input
            className="rounded border-2"
            type="text"
            id="description"
            name="description"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-2">
          <label className="" htmlFor="stage">
            Stage
          </label>
          <input
            className="rounded border-2"
            type="text"
            id="stage"
            name="stage"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-2">
          <label className="" htmlFor="enabled">
            Enabled
          </label>
          <input
            className="rounded border-2"
            type="radio"
            id="enabled"
            name="enabled"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-2">
          <label className="" htmlFor="cpu">
            CPU
          </label>
          <input
            className="rounded border-2"
            type="text"
            id="cpu"
            name="cpu"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-2">
          <label className="" htmlFor="time">
            Time
          </label>
          <input
            className="rounded border-2"
            type="number"
            id="time"
            name="time"
            required
          />
        </div>

        <button
          className="mt-4 p-2 bg-red-700 text-white rounded focus:bg-white focus:text-red-700 hover:bg-white hover:text-red-700"
          type="submit"
        >
          Add Card!
        </button>
      </form>
    </Layout>
  );
}
