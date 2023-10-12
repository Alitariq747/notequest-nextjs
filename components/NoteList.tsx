import NoteItem from "./NoteItem";
import { Note, NoteListType } from "@/typings";

const NoteList: React.FC<{ list: NoteListType }> = ({ list }) => {
  return (
    <div className="pt-2 p-5 m-5 mb-5 items-center justify-center h-screen">
      <ul className="grid grid-cols-3 gap-x-8 gap-y-5 max-sm:grid-cols-1">
        {list.map((note: Note) => (
          <NoteItem
            key={note._id}
            title={note.title}
            body={note.body}
            _id={note._id}
            userId={note.userId}
          />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
