import React from "react";
import { useParams, useHistory } from "react-router-dom";

const Score = (props) => {
  const params = useParams();
  const history = useHistory();
  const [rate, setRate] = React.useState(0);

  React.useEffect(() => {
    const press = (e) => {
      console.log("키보드를 누르면 어떤 이벤트가", e);

      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setRate(parseInt(e.key));
      }
    };
    window.addEventListener("keydown", press);

    return () => window.removeEventListener("keydown", press);
  }, []);
  console.log(params);
  return (
    <>
      {/* Quiz : style을 styled-components를 사용하도록 변경해주세요! :) (스타일을 그대로 옮겨도 좋고, 좀 더 예쁘게 바꿔도 좋아요!) */}
      <div
        style={{
          maxWidth: "350px",
          width: "80vw",
          height: "90vh",
          margin: "5vh auto",
          padding: "5vh 5vw",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          <span
            style={{
              color: "#fff",
              fontWeight: "900",
              background: "orange",
              padding: "0.2rem",
              borderRadius: "5px",
            }}
          >
            {/* 파라미터를 받아서 화면에 넘겨줬어요. */}
            {params.day_score}요일
          </span>{" "}
          평점 남기기!!!
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem 0",
            width: "100%",
          }}
        >
          {/* 동그라미 5개를 만들어볼까요! */}
          {Array.from({ length: 5 }, (item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  // 동그라미 하나를 누르면 평점을 남길거예요.
                  // idx는 0부터 시작하니까 +1을 해줘요.
                  // setRate는 state를 바꿔주는 칭구입니다. (위에서 useState 훅을 사용해서 만들어줬죠!)
                  setRate(idx + 1);
                }}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "30px",
                  margin: "5px",
                  backgroundColor: rate < idx + 1 ? "red" : "#ffeb3b",
                }}
              ></div>
            );
          })}
        </div>

        {/* 평점을 남기면 뒤로 가도록 뒤로가는 버튼을 만들었어요. */}
        <button
          style={{
            width: "100%",
            backgroundColor: "purple",
            border: "none",
            borderRadius: "5px",
            padding: "1rem",
            color: "#fff",
          }}
          onClick={() => {
            // 뒤로가기!
            history.goBack();
          }}
        >
          평점 남기기
        </button>
      </div>
    </>
  );
};

export default Score;
