export default function Button() {
  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
    >
      Click me from Portal
    </button>
  );
}
