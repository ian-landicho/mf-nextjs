export default function Button({ message }: { message: string }) {
  return (
    <button
      onClick={() => {
        console.log(message);
      }}
    >
      Click me from Portal
    </button>
  );
}
