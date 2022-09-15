import styled from "styled-components";

export const CardMainContainer = styled.div`
  background-color: white;
  border: none;
  min-width: fit-content;
  border-radius: 0.3rem;
  width: 60vw;
  overflow: auto;
`;

export const CardImageContainer = styled.div`
  margin: 0 auto;
`;
export const CardImage = styled.div<{ flipped: boolean }>`
  height: 182.873px;
  margin: 2rem auto;
  position: relative;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
  width: 290px;

  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "none")};

  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSIxNjZweCIgdmlld0JveD0iMCAwIDUxMiAxNjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPiAgICA8Zz4gICAgICAgIDxwYXRoIGQ9Ik0yNjQuNzk0MTg3LDExMi40Nzk0OTEgQzI2NC41MDIwNzIsODkuNDQ4NTYxNiAyODUuMzE5MDgsNzYuNTk1NTE5OCAzMDEuMDAxMDIxLDY4Ljk1NDQxNzIgQzMxNy4xMTM0NDcsNjEuMTEzNDQ2NiAzMjIuNTI1MjU0LDU2LjA4NjAwMDggMzIyLjQ2Mzc1Niw0OS4wNzUyNTA3IEMzMjIuMzQwNzYsMzguMzQzODgzMyAzMDkuNjEwNzE0LDMzLjYwODU1MiAyOTcuNjk1NTE0LDMzLjQyNDA1ODYgQzI3Ni45MDkyNTUsMzMuMTAxMTk1MSAyNjQuODI0OTM1LDM5LjAzNTczMzYgMjU1LjIxNTkwMyw0My41MjUwNzM2IEwyNDcuNzI4NTQ1LDguNDg2Njk3NSBDMjU3LjM2ODMyNiw0LjA0MzQ4MDg3IDI3NS4yMTgwNjUsMC4xNjkxMTg5NzIgMjkzLjcyODkwNSwtMS40MjEwODU0N2UtMTQgQzMzNy4xNzcxMDYsLTEuNDIxMDg1NDdlLTE0IDM2NS42MDQ0NjgsMjEuNDQ3MzYwNSAzNjUuNzU4MjEzLDU0LjcwMjMwMDIgQzM2NS45MjczMzIsOTYuOTA1MTcwOSAzMDcuMzgxNDE5LDk5LjI0MjA4NzYgMzA3Ljc4MTE1NCwxMTguMTA2NTQgQzMwNy45MTk1MjQsMTIzLjgyNTgzNiAzMTMuMzc3NDU1LDEyOS45Mjk0OTQgMzI1LjMzODc3OCwxMzEuNDgyMzEzIEMzMzEuMjU3OTQyLDEzMi4yNjY0MSAzNDcuNjAwOTg1LDEzMi44NjYwMTQgMzY2LjEyNzIsMTI0LjMzMzE5MyBMMzczLjM5OTMxNSwxNTguMjMzODYgQzM2My40MzY2NywxNjEuODYyMjMgMzUwLjYyOTc1MiwxNjUuMzM2ODU3IDMzNC42ODY0NDUsMTY1LjMzNjg1NyBDMjkzLjc5MDQwMywxNjUuMzM2ODU3IDI2NS4wMjQ4MDMsMTQzLjU5NzM4MiAyNjQuNzk0MTg3LDExMi40Nzk0OTEgTTQ0My4yNzYyLDE2Mi40MTU3MTEgQzQzNS4zNDI5ODIsMTYyLjQxNTcxMSA0MjguNjU1MDk2LDE1Ny43ODgwMDEgNDI1LjY3MjQ1MiwxNTAuNjg1MDA0IEwzNjMuNjA1Nzg5LDIuNDkwNjYxMjIgTDQwNy4wMjMyNDIsMi40OTA2NjEyMiBMNDE1LjY2MzY4NCwyNi4zNjcxODUyIEw0NjguNzIwOTE4LDI2LjM2NzE4NTIgTDQ3My43MzI5ODksMi40OTA2NjEyMiBMNTEyLDIuNDkwNjYxMjIgTDQ3OC42MDY2OSwxNjIuNDE1NzExIEw0NDMuMjc2MiwxNjIuNDE1NzExIE00NDkuMzQ5MTA4LDExOS4yMTM1MDEgTDQ2MS44NzkyODcsNTkuMTYwODkxMiBMNDI3LjU2MzUxLDU5LjE2MDg5MTIgTDQ0OS4zNDkxMDgsMTE5LjIxMzUwMSBNMjEyLjE1MjA2MywxNjIuNDE1NzExIEwxNzcuOTI4NTMzLDIuNDkwNjYxMjIgTDIxOS4zMDExODMsMi40OTA2NjEyMiBMMjUzLjUwOTMzOSwxNjIuNDE1NzExIEwyMTIuMTUyMDYzLDE2Mi40MTU3MTEgTTE1MC45NDYzNywxNjIuNDE1NzExIEwxMDcuODgyNTMsNTMuNTY0NTkwNyBMOTAuNDYzMjc1NSwxNDYuMTE4NzkyIEM4OC40MTg0NzM0LDE1Ni40NTA0MjMgODAuMzQ2ODg2MSwxNjIuNDE1NzExIDcxLjM4MzU4MDYsMTYyLjQxNTcxMSBMMC45ODM5NjQ5MjcsMTYyLjQxNTcxMSBMMCwxNTcuNzcyNjI2IEMxNC40NTE5ODQ5LDE1NC42MzYyMzggMzAuODcxODk5NiwxNDkuNTc4MDQzIDQwLjgxOTE3LDE0NC4xNjYyMzYgQzQ2LjkwNzQ1MywxNDAuODYwNzI5IDQ4LjY0NDc2NjEsMTM3Ljk3MDMzMiA1MC42NDM0NDQ4LDEzMC4xMTM5ODcgTDgzLjYzNzAxODgsMi40OTA2NjEyMiBMMTI3LjM2MTk2LDIuNDkwNjYxMjIgTDE5NC4zOTQ1NzEsMTYyLjQxNTcxMSBMMTUwLjk0NjM3LDE2Mi40MTU3MTEiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1Ni4wMDAwMDAsIDgyLjY2ODQyOCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMjU2LjAwMDAwMCwgLTgyLjY2ODQyOCkgIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=");
  background: linear-gradient(25deg, #0f509e, #1399cd);
  border-radius: 14.5px;
  color: #fff;

  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;
//
//   .rccs__card--front {
//     z-index: 20;
//   }
//   .rccs__card--back {
//     -webkit-transform: rotateY(180deg);
//     : ;
//   }
//   .rccs__card--back .rccs__issuer {
//     background-position: bottom center;
//     bottom: 5%;
//     left: 50%;
//     opacity: 0.6;
//     right: auto;
//     top: auto;
//     -webkit-transform: translateX(-50%);
//     transform: translateX(-50%);
//   }

//     height: 200%;
//     left: -170%;
//     position: absolute;
//     top: -60%;
//     -webkit-transform: rotate(25deg);
//     transform: rotate(25deg);
//     -webkit-transition: all 0.5s ease-out;
//     transition: all 0.5s ease-out;
//     width: 150%;
//     left: -170%;

//   .rccs__card--flipped {
//     -webkit-transform: rotateY(180deg);
//     transform: rotateY(180deg);
//   }
//   .rccs__card--flipped .rccs__card--front {
//     z-index: 10;
//   }
//   .rccs__card--flipped .rccs__card--back {
//     z-index: 20;
//   }

export const CardNumber = styled.div<{ flipped: boolean }>`
  visibility: ${({ flipped }) => (flipped ? "hidden" : "visible")};
  clear: both;
  font-family: Consolas, Courier, monospace;
  font-size: 20px;
  left: 10%;
  position: absolute;
  top: 45%;
`; //   .rccs__number.rccs__number--large {
//     font-size: 17px;
//   }
export const CardName = styled.div<{ flipped: boolean }>`
  visibility: ${({ flipped }) => (flipped ? "hidden" : "visible")};
  bottom: 15%;
  font-family: Consolas, Courier, monospace;
  font-size: 17px;
  left: 10%;
  line-height: 1;
  overflow: hidden;
  position: absolute;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: uppercase;
  width: 60%;
`;
export const CardExpiry = styled.div<{ flipped: boolean }>`
  visibility: ${({ flipped }) => (flipped ? "hidden" : "visible")};
  bottom: 15%;
  font-size: 0;
  line-height: 1;
  position: absolute;
  right: 10%;
  font-size: 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const CardExpiryDate = styled.div<{ flipped: boolean }>`
  vertical-align: middle;
  position: absolute;
  font-family: Consolas, Courier, monospace;
  font-size: 16px;
  bottom: 27%;
  opacity: 0.5;
  right: 10%;
  transition: opacity 0.3s;
`;
export const Chip = styled.div<{ flipped: boolean }>`
  visibility: ${({ flipped }) => (flipped ? "hidden" : "visible")};
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMTAwIDc2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGM0QwOEYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkFENzY2IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNOTIuNzI3IDc1LjQ1NWgtODUuNDU1Yy00IDAtNy4yNzMtMy4yNzMtNy4yNzMtNy4yNzN2LTYwLjkwOWMwLTQgMy4yNzMtNy4yNzMgNy4yNzMtNy4yNzNoODUuNDU1YzQgMCA3LjI3MyAzLjI3MyA3LjI3MyA3LjI3M3Y2MC45MDljMCA0LTMuMjczIDcuMjczLTcuMjczIDcuMjczIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTcyLjEyMyAyOC40ODVoMjcuODc4di0xLjgxOGgtMjkuNjQ4Yy0uOTY1IDAtMS44MzIuNjAxLTIuMTcyIDEuNTA0LTIuMjg3IDYuMDcyLTIuNDMzIDEyLjU5NC0uNDM4IDE5Ljg0Mi40NTUgMS42NTQuNDM1IDMuNC0uMSA1LjAzLTIuMDM2IDYuMTk1LTcuNzc5IDE5Ljk4OC0xOC41NTEgMTkuOTg4LTExLjAwOCAwLTE2LjA5Ni0xNS42OTktMTcuMzM0LTIxLjk1Mi0uMTU1LS43ODQtLjEyMi0xLjU5Mi4xMDctMi4zNTcgMS42OTUtNS42NDggMi4wOTQtMTAuNjQtLjAxNi0xOS41OS0uMjA1LS44Ny0uMTgyLTEuNzgzLjA0OC0yLjY0NiA0LjQ4LTE2Ljc1NSAxMi44ODItMjAuMTQ3IDEyLjk2NS0yMC4xNzkuMzU2LS4xMzIuNTkzLS40NzIuNTkzLS44NTJ2LTUuNDU1aC0xLjgxOHYzLjc3NmMwIC42NS0uMzMyIDEuMjUyLS44ODQgMS41OTYtMi44MDMgMS43NDItOC45MDQgNi45MzYtMTIuNTU3IDIwLjQ1Ni0uMTguNjY4LS43ODEgMS4xMzYtMS40NzMgMS4xMzNsLTI4LjcyMi0uMTM5djEuODE4bDI3LjQxNi4xMzNjMS40NjguMDA3IDIuNzM1IDEuMDQxIDMuMDM3IDIuNDc4IDEuNDE2IDYuNzQxIDEuMjE5IDExLjAzOS4wODIgMTUuNDU4LS4zMTYgMS4yMy0xLjQyIDIuMDk2LTIuNjkgMi4xMDlsLTI3Ljg0NC4yN3YxLjgxOWwyOC42MDUtLjI3OGMuNjkzLS4wMDcgMS4yOTYuNDczIDEuNDM1IDEuMTUyIDEuNDQyIDcuMDQxIDYuODg3IDIzLjA3IDE5LjA1IDIzLjA3IDYuMzY4IDAgMTIuMDYyLTQuMjUgMTYuNDY3LTEyLjI5IDIuNjQ0LTQuODI4IDQuMDY3LTkuNTkxIDQuNTQxLTExLjM0NmgyOS45MDF2LTEuODE4aC0yOC4wMTZjLTEuMTU4IDAtMi4xODMtLjc3Mi0yLjQ4OS0xLjg4OS0xLjY5Mi02LjE2NC0xLjc2MS0xMS43NTUtLjItMTYuOTU5LjM3MS0xLjIzNSAxLjUzOC0yLjA2MSAyLjgyNy0yLjA2MXptLTE3LjE1LTIxLjkxNGMuMDQ1LjAyMiA0LjUxOSAyLjMyMiA5LjI1MyAxMC4wNDEuMTcyLjI4LjQ3LjQzNC43NzYuNDM0LjE5OCAwIC4zOTktLjA2NC41NzEtLjIwMi4zNjUtLjI5Mi40MTYtLjgzNy4xNzItMS4yMzUtMy41Ny01LjgwNS03LjAyNC04LjcxLTguNzc1LTkuOTMxLS40My0uMjk5LS42OC0uNzkyLS42OC0xLjMxNXYtNC4zNjNoLTEuODE4djUuNzU4YzAgLjM0NS4xOTUuNjU5LjUwMi44MTN6IiBmaWxsPSIjMEMwMjAwIi8+PC9zdmc+");
  background-repeat: no-repeat;
  background-size: contain;
  height: 26.36364px;
  left: 10%;
  position: absolute;
  top: 10%;
  width: 41.42857px;
`;
//
export const CardIssuer = styled.div<{ flipped: boolean }>`
  visibility: ${({ flipped }) => (flipped ? "hidden" : "visible")};
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
  height: 23%;
  position: absolute;
  left: 77%;
  top: 10%;
  width: 40%;
`;
export const CardStripe = styled.div<{ flipped: boolean }>`
  visibility: ${({ flipped }) => (flipped ? "hidden" : "visible")};
  background-color: #2a1d16;
  height: 22%;
  left: 0;
  position: absolute;
  top: 9%;
  width: 100%;
`;
export const CardSignature = styled.div<{ flipped: boolean }>`
  visibility: ${({ flipped }) => (flipped ? "hidden" : "visible")};
  background: repeating-linear-gradient(
    0.1deg,
    #fff 20%,
    #fff 40%,
    #fea 40%,
    #fea 44%,
    #fff 44%
  );
  height: 18%;
  left: 5%;
  position: absolute;
  top: 35%;
  width: 75%;
`;
export const CardCVC = styled.div<{ flipped: boolean }>`
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg)" : "rotateY(-180deg)"};
  font-size: ${({ flipped }) => (flipped ? "14px" : "11.9px")};
  opacity: ${({ flipped }) => (flipped ? "100%" : "0.8")};
  color: #5e5d5d;
  font-family: Consolas, Courier, monospace;
  font-size: 14px;

  left: ${({ flipped }) => (flipped ? "20%" : "67%")};
  line-height: 1;
  position: absolute;

  top: ${({ flipped }) => (flipped ? "42%" : "38%")};
`;
