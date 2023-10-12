import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-row items-center justify-center mt-10 pt-10 max-sm:max-w-prose max-sm:max-h-prose">
      <SignIn
        appearance={{
          elements: {
            rootBox: "",
            card: "max-sm:max-w-0.1 max-sm:max-h-0.1",
          },
        }}
      />
    </div>
  );
}
