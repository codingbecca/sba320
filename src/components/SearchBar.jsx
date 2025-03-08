export default function SearchBar() {
  return (
    <div className="mt-5 flex justify-center">
      <form>
        <input type="text" name="" id="" className="border rounded-sm mx-2"/>
        <select name="" id="" className="border rounded-sm">
          <option value="">Refine your search</option>
          <option value="intitle:">Title</option>
          <option value="inauthor:">Author</option>
          <option value="inpublisher:">Publisher</option>
          <option value="subject:">Subject</option>
          <option value="isbn:">ISBN</option>
        </select>
        <input type="submit" value="search" className="border rounded-sm ml-2 px-1"/>
      </form>
    </div>
  );
}
