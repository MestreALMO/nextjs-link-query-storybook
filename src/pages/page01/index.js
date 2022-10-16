import { useRouter } from "next/router";

function Page01() {
  const router = useRouter();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Page 01</h1>
        <button
          style={{ maxWidth: "70px" }}
          onClick={() => {
            window.history.go(-1);
            return false;
          }}
        >
          Back
        </button>
        <p>query: </p>
        <ul>
          <li>Question: {router.query.question}</li>
          <li>
            Answers:
            <ul>
              <li>{router.query.answers[0]}</li>
              <li>{router.query.answers[1]}</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Page01;
