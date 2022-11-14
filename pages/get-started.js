import Nav from "../components/Nav";

const getStart = () => (
  <>
    <Nav />

    <div className="container">
      <h1>시작하기</h1>

      <p>npm을 통해 CLI를 설치합니다.</p>

      <code>npm i -g codelab-2nd-cli</code>
    </div>
  </>
);
export default getStart;
