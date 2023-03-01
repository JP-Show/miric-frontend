import clownpiece from './assets/img.png'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className=" ring-2 ring-gold-500 outline-2 outline-gold-500 rounded h-64 w-44"></div>
      <img
        className="focus:outline-2 outline-gold-500 rounded h-64 w-44"
        src={clownpiece}
        alt="d"
      />
    </>
  )
}
{
  /* <input
        id="draft"
        className="peer/draft"
        type="radio"
        name="status"
        checked
      />
      <label htmlFor="draft" className="peer-checked/draft:text-sky-500">
        Draft
      </label>
      <input
        id="published"
        className="peer/published"
        type="radio"
        name="status"
      />
      <label
        htmlFor="published"
        className="peer-checked/published:text-sky-500"
      >
        Published
      </label>

      <div className="hidden peer-checked/draft:block">
        Drafts are only visible to administrators.
      </div>
      <div className="hidden peer-checked/published:block">
        Your post will be publicly visible on your site.
      </div> */
}
