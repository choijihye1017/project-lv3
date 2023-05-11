import "./App.css";
import * as B from "./styles/buttons";
import * as W from "./styles/wrap";
import * as I from "./styles/input";
import { Svg1, Svg2 } from "./components/svg";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const buttonAction = (type) => {
    type === "type1" && alert("버튼을 만들어주세요.");
    type === "type2" && prompt("어렵나요?");
  };

  const onSave = (e) => {
    e.preventDefault();
    alert(`{name: ${state.name}, price: ${state.price}}`);
  };

  const [state, setState] = useState({
    name: "",
    price: "",
  });

  const [number, setNumber] = useState("");

  const addComma = (price) => {
    const inputNumber = price.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    let returnString = inputNumber
      ?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const onChange = (e) => {
    const { id } = e.target;
    const { value } = e.target;
    let str;
    if (id === "price") {
      str = value.replace(/[^0-9]/g, "");
      setNumber(addComma(value));
    } else {
      str = value;
    }
    setState({
      ...state,
      [id]: str,
    });
  };

  // const init = [
  //   { selected: true, title: "리액트" },
  //   { selected: false, title: "자바" },
  //   { selected: false, title: "스프링" },
  //   { selected: false, title: "리액트네이티브" },
  // ];

  // const [api, setApi] = useState(init);

  const [currentValue, setCurrentValue] = useState("선택");
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  // const [selectList, SetSelectList] = useState({
  //   isShow: false,
  //   top: "",
  //   left: "",
  // });

  // const onSelectToggle = (e) => {
  //   if (e.target.id === "selectUi") {
  //     SetSelectList({
  //       ...selectList,
  //       isShow: !selectList.isShow,
  //       top: e.target.offsetTop,
  //       left: e.target.offsetLeft,
  //     });
  //   } else if (e.target.id === "selectList") {
  //   } else {
  //     SetSelectList({
  //       ...selectList,
  //       isShow: false,
  //     });
  //   }
  // };

  // const clickSelected = (idx) => {
  //   setApi(
  //     api.map((item, i) => {
  //       if (i === idx) {
  //         return { ...item, selected: true };
  //       } else {
  //         return { ...item, selected: false };
  //       }
  //     })
  //   );
  // };

  const [modalState, setModalState] = useState({
    type1Show: false,
    type2Show: false,
  });

  const modalAction = (e, modalType) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) return; //이벤트 버블링 TIL쓰기
    setModalState({ ...modalState, ...modalType });
  };

  return (
    <div className="App">
      <W.Wrap>
        <h1>Button</h1>
        <div style={{ display: "flex", gap: "5px" }}>
          <B.ClickButton
            color="#55efc4"
            bgColor="#ffffff"
            className="large"
            onClick={() => buttonAction("type1")}
          >
            Large Primary Button &nbsp;
            <Svg1 />
          </B.ClickButton>
          <B.Button className="medium" bgColor="#55efc4" color="#55efc4">
            Medium Button
          </B.Button>
          <B.Button className="small" bgColor="#55efc4" color="#55efc4">
            Small Button
          </B.Button>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <B.ClickButton
            color="#fab1a0"
            bgColor="#ffffff"
            className="large"
            onClick={() => buttonAction("type2")}
          >
            Large Negative Button &nbsp;
            <Svg2 />
          </B.ClickButton>
          <B.Button className="medium" bgColor="#fab1a0" color="#fab1a0">
            Medium Button
          </B.Button>
          <B.Button className="small" bgColor="#fab1a0" color="#fab1a0">
            Small Button
          </B.Button>
        </div>
      </W.Wrap>

      <h1>Input</h1>

      <W.Wrap2>
        <div>
          <label htmlFor="name">이름&nbsp;</label>
          <I.Input
            type="text"
            id="name"
            onChange={(e) => onChange(e)}
            value={state.name}
          />
        </div>
        &nbsp;
        <div>
          <label htmlFor="price">가격&nbsp;</label>
          <I.Input
            type="text"
            id="price"
            onChange={(e) => onChange(e)}
            value={number}
          />
        </div>
        &nbsp;
        <B.Button
          type="submit"
          onClick={(e) => onSave(e)}
          className="small"
          bgColor="#55efc4"
          color="#55efc4"
        >
          저장
        </B.Button>
      </W.Wrap2>
      <div>
        <h1>Select</h1>

        <W.Wrap2>
          <div>
            <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
              <Label>{currentValue}</Label>
              <SelectOptions show={showOptions}>
                <Option onClick={handleOnChangeSelectValue}>리액트</Option>
                <Option onClick={handleOnChangeSelectValue}>자바</Option>
                <Option onClick={handleOnChangeSelectValue}>스프링</Option>
                <Option onClick={handleOnChangeSelectValue}>
                  리액트네이티브
                </Option>
              </SelectOptions>
            </SelectBox>
          </div>
          <div>
            <Select name="choice">
              <SelectList value="first" selected>
                리액트
              </SelectList>
              <SelectList value="second">자바</SelectList>
              <SelectList value="third">스프링</SelectList>
              <SelectList value="fourth">리액트네이티브</SelectList>
            </Select>
          </div>
        </W.Wrap2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h1>Modal</h1>
        <W.Wrap2>
          <B.ClickButton
            bgColor="#55efc4"
            color="#55efc4"
            className="small"
            onClick={(e) => modalAction(e, { type1Show: true })}
          >
            Open Modal
          </B.ClickButton>

          <B.ClickButton
            color="#fab1a0"
            bgColor="#ffffff"
            className="large"
            onClick={(e) => modalAction(e, { type2Show: true })}
          >
            Open Modal
          </B.ClickButton>
        </W.Wrap2>
      </div>

      {modalState.type1Show && (
        <Dimmed>
          <div className="modalPop">
            <div className="btnArea">
              <B.Button
                className="medium"
                onClick={(e) => modalAction(e, { type1Show: false })}
                bgColor="#fab1a0"
                color="#fab1a0"
              >
                취소
              </B.Button>
              <B.Button className="medium" bgColor="#55efc4" color="#55efc4">
                확인
              </B.Button>
            </div>
          </div>
        </Dimmed>
      )}

      {modalState.type2Show && (
        <Dimmed onClick={(e) => modalAction(e, { type2Show: false })}>
          <div className="modalPop">
            <div className="btnArea">
              <B.Button
                className="medium"
                onClick={(e) => modalAction(e, { type2Show: false })}
                bgColor="#fab1a0"
                color="#fab1a0"
              >
                닫기
              </B.Button>
            </div>
          </div>
        </Dimmed>
      )}
    </div>
  );
}

// const SelectArea = styled.div`
//   overflow: hidden;
//   border: 2px solid #ddd;
//   padding: 20px 15px;
// `;

const Select = styled.select`
  position: relative;
  border: 1px solid #ddd;
  padding: 10px;
  width: 150px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  &:after {
    content: "▼";
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const SelectList = styled.option`
  position: absolute;
  border: 1px solid #ddd;
  padding: 0;
  width: 150px;
  border-radius: 5px;
  display: inline-block;
  background-color: #fff;
  &:hover {
    background-color: #595959;
  }
`;

const SelectBox = styled.div`
  position: relative;
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #49c181;
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 90px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  .modalPop {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 500px;
    height: 300px;
  }
  .btnArea {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
  }
`;

export default App;
