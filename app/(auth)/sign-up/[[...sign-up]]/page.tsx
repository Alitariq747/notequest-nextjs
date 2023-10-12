import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-col items-center justify-center flex mt-10 pt-10 max-sm:max-w-prose max-sm:max-h-prose">
      <SignUp
        appearance={{
          elements: {
            rootBox: "max-sm:max-w-0.1 max-sm:max-h-0.1",
          },
        }}
      />
    </div>
  );
}
