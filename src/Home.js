import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  // const day_text_dict = {
  //   0: "일",
  //   1: "월",
  //   2: "화",
  //   3: "수",
  //   4: "목",
  //   5: "금",
  //   6: "토",
  // };
  const arr = ["일", "월", "화", "수", "목", "금", "토"];

  console.log(Object.keys(arr));

  const week_days = Object.keys(arr).map((_d, idx) => {
    let today = new Date().getDay();

    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);

    return arr[d];
  });
  console.log(week_days);

  const week_rates = week_days.map((w, idx) => {
    return {
      day: w,
      rate:
        Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
        Math.ceil(1),
    };
  });

  console.log(week_rates);

  return (
    <>
      {/* Quiz : style을 styled-components를 사용하도록 변경해주세요! :) (스타일을 그대로 옮겨도 좋고, 좀 더 예쁘게 바꿔도 좋아요!) */}
      <div
        style={{
          maxWidth: "350px",
          width: "80vw",
          height: "90vh",
          margin: "5vh auto",
          padding: "5vh 0",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>내 일주일은?</h3>

        {/* 일단 요일별로 하나씩 [요일 / 평점 동그라미 5개 / 해당 요일로 이동하는 버튼]이 생기도록 해야해요! 우리가 위에서 만든 평점 배열을 map 돌리면 되겠죠! */}
        {week_rates.map((w, idx) => {
          return (
            <div
              key={`week_day_${idx}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem 0",
                width: "100%",
              }}
            >
              {/* 요일 텍스트 */}
              <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold" }}>
                {w.day}
              </p>

              {/* 이제 평점 동그라미 차례! Array.from()이 뭐였더라? 헷갈린다면 검색해보기! */}
              {/* 저는 길이가 5인 배열을 만들어서 map을 돌려버릴거예요. 평점 동그라미 다섯개를 직접 만들어도 괜찮아요. :) */}
              {Array.from({ length: 5 }, (item, idx) => {
                /**
                 * Q6. 평점이 3이라면 동그라미 3개만 노랑색이면 좋겠는데, 회색과 노랑색을 어떻게 구분해줄까?
                 *  -> 우리는 여기에서 평점 값을 가지고 있죠!
                 *     (이 위치는 week_rates 배열의 map 안쪽이면서, 임의로 만든 길이 5개짜리 배열의 map 안쪽입니다.
                 *      week_rates 요소 하나인 w에 접근할 수 있어요. 즉, 평점을 w.rate으로 가지고 올 수 있다!)
                 *  -> 그리고 이번 동그라미가 몇번째 동그라미인 지도 알 수 있어요! 이번 요소가 몇 번째 요소인 지 idx로 가져올 수 있잖아요. :)
                 *  -> 평점과 지금이 몇 번째 동그라미인 지 삼항연산자로 노랑, 회색을 정해줍시다!
                 */
                return (
                  <div
                    key={idx}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                      margin: "5px",
                      backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
                    }}
                  ></div>
                );
              })}

              {/* 삼각형 버튼을 만들어봅시다! */}
              <div
                style={{
                  appearance: "none",
                  backgroundColor: "transparent",
                  borderColor: "purple",
                  width: "0",
                  height: "0",
                  borderTop: "1rem solid transparent",
                  borderBottom: "1rem solid transparent",
                  borderLeft: "1.6rem solid purple",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => {
                  // 요일 별 페이지로 이동해요!
                  history.push(`/Score/${w.day}`);
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
