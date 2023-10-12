import { Note } from "@/typings";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";

function NoteItem(noteProps: Note) {
  let isSingle;
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={30}
          radius="sm"
          src="/note-svgrepo-com.svg"
          width={30}
        />

        <div className="flex flex-col">
          <p className="text-md">{noteProps.title}</p>
          {/* <p className="text-small text-default-500">.org</p> */}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{noteProps.body?.slice(0, 30)}...</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link showAnchorIcon href={`/dashboard/${noteProps._id}`}>
          Click to preview, edit or delete...
        </Link>
      </CardFooter>
    </Card>
  );
}

export default NoteItem;
